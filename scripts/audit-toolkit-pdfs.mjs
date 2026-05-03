// Regression audit for the SpaReply toolkit PDFs.
//
// Catches the failure mode where page-chrome stamping accidentally triggers
// PDFKit's auto-pagination and emits trailing pages whose only content is
// the running header and footer. Each detected page has its decompressed
// content stream inspected; pages whose only text-show operations look
// like brand chrome ("SpaReply", "spareply.com", "hello@spareply.com",
// "Page X of Y", section title) are flagged and the script exits non-zero.
//
// Uses Node built-ins only (fs, path, zlib, url) so it runs without an
// install step in CI.
//
// Run via:  npm run toolkit:pdfs:audit

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const toolkitDir = path.join(repoRoot, "public", "downloads", "spareply-toolkit");

// A body page that renders correctly has at least header chrome (brand +
// section title), footer chrome (URL line + page number), and at least
// one chunk of body content, so a healthy minimum is 5 text-show
// operations. The bug we are guarding against produced trailing pages
// with exactly 3 text-show operations (the section title in the header
// plus a degraded footer), so 5 is comfortably above the failure mode
// and below any real content page.
const MIN_TEXT_OPS_PER_PAGE = 5;

// Strings produced by the page-chrome stamping path. The audit decides a
// page is chrome-only when every text-show operation on the page only
// matches one of these fragments (or a section title coming from the
// running header). Section titles are gathered dynamically from each
// PDF — see auditPdf.
const STATIC_CHROME_FRAGMENTS = [
  "SpaReply",
  "spareply.com",
  "hello@spareply.com",
  "Med Spa Review + Local SEO Toolkit",
];

function parseObjects(buf) {
  // PDFKit emits objects as `N G obj ... endobj`. Find each marker in a
  // latin1 view of the buffer (preserves byte offsets) and pair it with
  // the next `endobj`. The dictionary portion of each object is plain
  // ASCII so latin1 decoding is safe for structural parsing.
  const text = buf.toString("latin1");
  const objects = new Map();
  const re = /(\d+)\s+(\d+)\s+obj\b/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const id = `${m[1]} ${m[2]}`;
    const dictStart = m.index + m[0].length;
    const endobj = text.indexOf("endobj", dictStart);
    if (endobj === -1) continue;
    objects.set(id, { dictStart, endobj });
    re.lastIndex = endobj + "endobj".length;
  }
  return { text, objects };
}

function findContentRefs(dict) {
  // /Contents N G R   (single)
  const single = dict.match(/\/Contents\s+(\d+)\s+(\d+)\s+R/);
  if (single) return [`${single[1]} ${single[2]}`];
  // /Contents [ N G R N G R ... ]   (array)
  const arr = dict.match(/\/Contents\s*\[([^\]]*)\]/);
  if (arr) {
    const refs = [];
    const refRe = /(\d+)\s+(\d+)\s+R/g;
    let m;
    while ((m = refRe.exec(arr[1])) !== null) {
      refs.push(`${m[1]} ${m[2]}`);
    }
    return refs;
  }
  return [];
}

function decodeStream(buf, text, range) {
  const dict = text.slice(range.dictStart, range.endobj);
  const streamMatch = dict.match(/stream\r?\n/);
  if (!streamMatch) return null;
  const localStart = streamMatch.index + streamMatch[0].length;
  const endstreamLocal = dict.indexOf("endstream", localStart);
  if (endstreamLocal === -1) return null;
  const startByte = range.dictStart + localStart;
  let endByte = range.dictStart + endstreamLocal;
  // Trim the trailing EOL that precedes `endstream`.
  if (endByte > startByte && buf[endByte - 1] === 0x0a) endByte -= 1;
  if (endByte > startByte && buf[endByte - 1] === 0x0d) endByte -= 1;
  const raw = buf.subarray(startByte, endByte);
  if (/\/Filter\s*\/FlateDecode/.test(dict)) {
    try {
      return zlib.inflateSync(raw);
    } catch {
      return raw;
    }
  }
  return raw;
}

function decodeHexString(hex) {
  const cleaned = hex.replace(/\s+/g, "");
  let out = "";
  for (let i = 0; i + 1 < cleaned.length; i += 2) {
    const code = parseInt(cleaned.slice(i, i + 2), 16);
    if (Number.isFinite(code)) out += String.fromCharCode(code);
  }
  if (cleaned.length % 2 === 1) {
    const code = parseInt(cleaned.slice(-1) + "0", 16);
    if (Number.isFinite(code)) out += String.fromCharCode(code);
  }
  return out;
}

function readPdfString(streamText, start) {
  // Returns { value, end } for the PDF string starting at `start`,
  // which must point at "(" or "<". Returns null otherwise.
  const ch = streamText[start];
  if (ch === "(") {
    let depth = 1;
    let j = start + 1;
    let buf = "";
    while (j < streamText.length && depth > 0) {
      const c = streamText[j];
      if (c === "\\" && j + 1 < streamText.length) {
        buf += streamText[j + 1];
        j += 2;
        continue;
      }
      if (c === "(") {
        depth += 1;
        buf += c;
        j += 1;
        continue;
      }
      if (c === ")") {
        depth -= 1;
        if (depth === 0) {
          j += 1;
          break;
        }
        buf += c;
        j += 1;
        continue;
      }
      buf += c;
      j += 1;
    }
    return { value: buf, end: j };
  }
  if (ch === "<") {
    // Skip dictionary "<<".
    if (streamText[start + 1] === "<") return null;
    const close = streamText.indexOf(">", start + 1);
    if (close === -1) return null;
    return {
      value: decodeHexString(streamText.slice(start + 1, close)),
      end: close + 1,
    };
  }
  return null;
}

function extractTextStrings(streamText) {
  // Operands of Tj / ' / " are a single PDF string. Operand of TJ is an
  // array of strings and numeric kerning offsets. PDFKit emits the hex
  // form `<...>` for built-in fonts; we also accept literal `(...)`.
  const strings = [];
  let i = 0;
  while (i < streamText.length) {
    const ch = streamText[i];
    if (ch === "(" || ch === "<") {
      const parsed = readPdfString(streamText, i);
      if (!parsed) {
        i += 1;
        continue;
      }
      let k = parsed.end;
      while (k < streamText.length && /\s/.test(streamText[k])) k += 1;
      const op = streamText.slice(k, k + 2);
      if (op === "Tj" || streamText[k] === "'" || streamText[k] === '"') {
        strings.push(parsed.value);
      }
      i = parsed.end;
      continue;
    }
    if (ch === "[") {
      // Collect every string inside the array, then check whether the
      // array is followed by TJ.
      const chunks = [];
      let j = i + 1;
      while (j < streamText.length && streamText[j] !== "]") {
        if (streamText[j] === "(" || streamText[j] === "<") {
          const parsed = readPdfString(streamText, j);
          if (!parsed) {
            j += 1;
            continue;
          }
          chunks.push(parsed.value);
          j = parsed.end;
          continue;
        }
        j += 1;
      }
      let k = j + 1;
      while (k < streamText.length && /\s/.test(streamText[k])) k += 1;
      const op = streamText.slice(k, k + 2);
      if (op === "TJ") {
        strings.push(chunks.join(""));
      }
      i = j + 1;
      continue;
    }
    i += 1;
  }
  return strings;
}

function isChromeOnly(strings, sectionTitles) {
  // A page is "chrome-only" when every text-show operation contains
  // nothing beyond brand chrome, a section title (running header), or
  // "Page X of Y" footer text.
  const collapsed = strings
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  if (collapsed.length === 0) return true;
  const fragments = STATIC_CHROME_FRAGMENTS.concat(sectionTitles);
  for (const s of collapsed) {
    let stripped = s;
    for (const frag of fragments) {
      if (frag) stripped = stripped.split(frag).join("");
    }
    // Strip "Page X of Y", separators, whitespace, common punctuation.
    stripped = stripped
      .replace(/\bPage\b/gi, "")
      .replace(/\bof\b/g, "")
      .replace(/[0-9·.,|/&\-—\s]/g, "");
    if (stripped.length > 4) return false;
  }
  return true;
}

function auditPdf(filePath) {
  const buf = fs.readFileSync(filePath);
  const { text, objects } = parseObjects(buf);
  const pages = [];
  for (const [id, range] of objects) {
    const dict = text.slice(range.dictStart, range.endobj);
    if (!/\/Type\s*\/Page(?!s)\b/.test(dict)) continue;
    const refs = findContentRefs(dict);
    pages.push({ id, refs });
  }

  const perPage = pages.map((page) => {
    let combined = "";
    for (const ref of page.refs) {
      const range = objects.get(ref);
      if (!range) continue;
      const decoded = decodeStream(buf, text, range);
      if (!decoded) continue;
      combined += decoded.toString("latin1");
    }
    return { combined, strings: extractTextStrings(combined) };
  });

  // Discover section titles (running headers) by collecting strings that
  // appear on multiple pages — chrome strings repeat verbatim.
  const stringFrequency = new Map();
  for (const p of perPage) {
    const seen = new Set();
    for (const raw of p.strings) {
      const s = raw.replace(/\s+/g, " ").trim();
      if (!s || s.length < 4) continue;
      if (seen.has(s)) continue;
      seen.add(s);
      stringFrequency.set(s, (stringFrequency.get(s) || 0) + 1);
    }
  }
  const recurring = [];
  for (const [s, count] of stringFrequency) {
    if (count >= 2) recurring.push(s);
  }

  const pageReports = perPage.map((p, idx) => {
    const combined = p.combined;
    const tjCount = (combined.match(/\bTj\b/g) || []).length;
    const tJCount = (combined.match(/\bTJ\b/g) || []).length;
    const apostropheCount = (combined.match(/[)\]]\s*'/g) || []).length;
    const quoteCount = (combined.match(/[)\]]\s*"/g) || []).length;
    const textOps = tjCount + tJCount + apostropheCount + quoteCount;
    return {
      index: idx + 1,
      textOps,
      chromeOnly: isChromeOnly(p.strings, recurring),
      sampleStrings: p.strings.slice(0, 6),
    };
  });

  return { pageCount: pages.length, pages: pageReports };
}

function main() {
  if (!fs.existsSync(toolkitDir)) {
    console.error(`Toolkit directory not found: ${toolkitDir}`);
    process.exit(1);
  }
  const files = fs
    .readdirSync(toolkitDir)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .sort();
  if (files.length === 0) {
    console.error("No PDFs found to audit. Run `npm run toolkit:pdfs` first.");
    process.exit(1);
  }

  let failed = false;
  for (const file of files) {
    const filePath = path.join(toolkitDir, file);
    const report = auditPdf(filePath);
    const sparse = report.pages.filter(
      (p) => p.textOps < MIN_TEXT_OPS_PER_PAGE || p.chromeOnly,
    );
    const status = sparse.length === 0 ? "ok" : "FAIL";
    console.log(
      `${status}  ${file}  pages=${report.pageCount}  sparse=${sparse.length}`,
    );
    if (sparse.length > 0) {
      failed = true;
      for (const p of sparse) {
        console.log(
          `       page ${p.index}: textOps=${p.textOps} chromeOnly=${p.chromeOnly}` +
            (p.sampleStrings.length
              ? `  sample=${JSON.stringify(p.sampleStrings)}`
              : ""),
        );
      }
    }
  }

  if (failed) {
    console.error(
      "\nAudit failed: one or more PDFs contain chrome-only / blank pages.",
    );
    process.exit(1);
  }
  console.log("\nAll toolkit PDFs passed the chrome-only / blank-page audit.");
}

main();
