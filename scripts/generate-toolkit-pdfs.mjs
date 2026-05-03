// Generates branded PDFs for the SpaReply Med Spa Review + Local SEO Toolkit.
// Reads the editable Markdown / CSV files in public/downloads/spareply-toolkit/
// and writes premium-looking PDFs into the same folder, plus a combined
// SpaReply-toolkit-complete.pdf containing every section.
//
// Run via:  npm run toolkit:pdfs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const toolkitDir = path.join(repoRoot, "public", "downloads", "spareply-toolkit");

const BRAND = {
  name: "SpaReply",
  domain: "spareply.com",
  email: "hello@spareply.com",
  product: "Med Spa Review + Local SEO Toolkit",
};

const COLORS = {
  pageBg: "#FFF8F2",
  ink: "#1C100B",
  body: "#3D2A22",
  muted: "#6E564C",
  accent: "#2F6A4A",
  accentSoft: "#E5EFE9",
  rule: "#E5D6CB",
  ruleStrong: "#C8B4A6",
  surface: "#FFFFFF",
  surfaceAlt: "#FBF1E9",
};

const PAGE = {
  size: "LETTER",
  margins: { top: 96, bottom: 84, left: 64, right: 64 },
};

const FONTS = {
  body: "Helvetica",
  bold: "Helvetica-Bold",
  italic: "Helvetica-Oblique",
  mono: "Courier",
};

const SIZES = {
  h1: 22,
  h2: 16,
  h3: 12,
  body: 10.5,
  small: 9,
  micro: 8,
  cover: 34,
  coverEyebrow: 9.5,
};

const documents = [
  {
    file: "front-desk-review-reply-sop",
    source: { type: "markdown", path: "front-desk-review-reply-sop.md" },
    title: "Front-desk reply SOP",
    subtitle:
      "20-minute setup, HIPAA-aware reply rules, the 7-question safety check, and the daily / weekly / monthly cadence.",
    eyebrow: "Standard operating procedure",
  },
  {
    file: "review-reply-template-bank",
    source: { type: "markdown", path: "review-reply-template-bank.md" },
    title: "Review reply template bank",
    subtitle:
      "20 paste-ready replies across 5-star praise, staff shoutouts, treatment mentions, neutrals, wait-time and pricing complaints, and negative reviews — plus the PHI-risky to safer rewrite table.",
    eyebrow: "Reply templates · 20 scenarios",
  },
  {
    file: "negative-review-triage-checklist",
    source: { type: "markdown", path: "negative-review-triage-checklist.md" },
    title: "Negative-review triage checklist",
    subtitle:
      "The 8-step playbook for 1-star and 2-star reviews — pre-checks, lane decision, draft from template, safety check, post, log, and the Google policy flag.",
    eyebrow: "Negative-review playbook",
  },
  {
    file: "google-business-profile-content-calendar",
    source: { type: "csv", path: "google-business-profile-content-calendar.csv" },
    title: "Google Business Profile + content calendar",
    subtitle:
      "Four weeks of GBP posts, review work, email, and SEO focus — drop into Google Sheets, assign owners, ship.",
    eyebrow: "4-week content calendar",
  },
  {
    file: "local-seo-prompts",
    source: { type: "markdown", path: "local-seo-prompts.md" },
    title: "Local SEO + GBP prompt pack",
    subtitle:
      "13 GBP post angles, a treatment-page outline, and city / neighborhood angles — the prompts that pair with the 4-week calendar.",
    eyebrow: "Local SEO prompts",
  },
  {
    file: "operating-cadence",
    source: { type: "markdown", path: "operating-cadence.md" },
    title: "Operating cadence",
    subtitle:
      "The week, on a single page: daily 10-minute slot, daily 15-minute approval, the Tuesday 20-minute SOP, the Friday huddle, and the monthly + quarterly review.",
    eyebrow: "Operating cadence · print & tape",
  },
];

// ---------- markdown / csv parsers ----------

function parseMarkdown(input) {
  const lines = input.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;

  const flushParagraph = (buf) => {
    if (!buf.length) return;
    const text = buf.join(" ").trim();
    if (text) blocks.push({ type: "paragraph", spans: parseInline(text) });
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (/^---+\s*$/.test(line)) {
      blocks.push({ type: "hr" });
      i += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const level = Math.min(heading[1].length, 3);
      blocks.push({ type: `h${level}`, text: heading[2].trim() });
      i += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, "").trim());
        i += 1;
      }
      blocks.push({ type: "blockquote", spans: parseInline(buf.join(" ")) });
      continue;
    }

    if (
      /^\s*\|.*\|\s*$/.test(line) &&
      i + 1 < lines.length &&
      /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])
    ) {
      const headers = splitTableRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
        rows.push(splitTableRow(lines[i]));
        i += 1;
      }
      blocks.push({
        type: "table",
        headers: headers.map((h) => parseInline(h)),
        rows: rows.map((r) => r.map((c) => parseInline(c))),
      });
      continue;
    }

    const listMatch = line.match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
    if (listMatch) {
      const baseIndent = listMatch[1].length;
      const isNumbered = /\d+\./.test(listMatch[2]);
      const items = [];
      let isChecklist = false;
      while (i < lines.length) {
        const cur = lines[i];
        if (!cur.trim()) break;
        const cm = cur.match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
        if (cm && cm[1].length === baseIndent) {
          let raw = cm[3];
          let checked;
          const cb = raw.match(/^\[( |x|X)\]\s+(.*)$/);
          if (cb) {
            isChecklist = true;
            checked = cb[1].toLowerCase() === "x";
            raw = cb[2];
          }
          items.push({ spans: parseInline(raw), checked });
          i += 1;
          while (
            i < lines.length &&
            lines[i].trim() &&
            /^\s+/.test(lines[i]) &&
            !/^(\s*)([-*+]|\d+\.)\s+/.test(lines[i])
          ) {
            const lastIndex = items.length - 1;
            const continuation = lines[i].trim();
            items[lastIndex].spans = items[lastIndex].spans.concat([
              { kind: "text", text: " " },
              ...parseInline(continuation),
            ]);
            i += 1;
          }
          continue;
        }
        break;
      }
      blocks.push({
        type: isChecklist ? "checklist" : isNumbered ? "ol" : "ul",
        items,
      });
      continue;
    }

    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^---+\s*$/.test(lines[i]) &&
      !/^(#{1,6})\s+/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^(\s*)([-*+]|\d+\.)\s+/.test(lines[i]) &&
      !/^\s*\|.*\|\s*$/.test(lines[i])
    ) {
      buf.push(lines[i].trim());
      i += 1;
    }
    flushParagraph(buf);
  }

  return blocks;
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

function parseInline(text) {
  const spans = [];
  let i = 0;
  let buf = "";
  const flushBuf = () => {
    if (buf) {
      spans.push({ kind: "text", text: buf });
      buf = "";
    }
  };
  while (i < text.length) {
    const ch = text[i];
    if (ch === "`") {
      const end = text.indexOf("`", i + 1);
      if (end !== -1) {
        flushBuf();
        spans.push({ kind: "code", text: text.slice(i + 1, end) });
        i = end + 1;
        continue;
      }
    }
    if (ch === "*" && text[i + 1] === "*") {
      const end = text.indexOf("**", i + 2);
      if (end !== -1) {
        flushBuf();
        spans.push({ kind: "bold", text: text.slice(i + 2, end) });
        i = end + 2;
        continue;
      }
    }
    if (ch === "*") {
      const end = text.indexOf("*", i + 1);
      if (end !== -1 && text[i + 1] !== " ") {
        flushBuf();
        spans.push({ kind: "italic", text: text.slice(i + 1, end) });
        i = end + 1;
        continue;
      }
    }
    buf += ch;
    i += 1;
  }
  flushBuf();
  return spans;
}

function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let i = 0;
  const text = input.replace(/\r\n/g, "\n");
  while (i < text.length) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += c;
      i += 1;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (c === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      i += 1;
      continue;
    }
    field += c;
    i += 1;
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.length && r.some((cell) => cell.trim().length));
}

// ---------- PDF renderer ----------

class PdfRenderer {
  constructor({ doc }) {
    this.doc = doc;
    this.contentTop = PAGE.margins.top;
    this.contentBottom = doc.page.height - PAGE.margins.bottom;
    this.runningHeader = null;
    this.bodyPageCount = 0;
    // Mode for the current page. "cover" pages get no header / no number.
    this.currentMode = "body";
    this.pageMeta = []; // per page: { mode, headerText, pageNumber }
    this.docContext = "single"; // "single" or "combined"
    // While stamping page chrome we temporarily zero out the page margins
    // so footer text drawn near the bottom of the page cannot trigger
    // PDFKit's auto-pagination. This flag also tells the pageAdded
    // listener to ignore any (defensive) page additions during stamping.
    this.stamping = false;

    doc.on("pageAdded", () => {
      if (this.stamping) return;
      this.recordPage();
    });
  }

  recordPage() {
    const { doc } = this;
    const meta = { mode: this.currentMode, headerText: this.runningHeader };
    if (this.currentMode === "body") {
      this.bodyPageCount += 1;
      meta.pageNumber = this.bodyPageCount;
    }
    this.pageMeta.push(meta);
    // Paint background immediately so all subsequent draws sit on cream.
    doc.save();
    doc.rect(0, 0, doc.page.width, doc.page.height).fill(COLORS.pageBg);
    doc.restore();
    doc.fillColor(COLORS.body);
    doc.x = PAGE.margins.left;
    doc.y = PAGE.margins.top;
  }

  beginCoverPage() {
    this.currentMode = "cover";
    if (this.pageMeta.length === 0) {
      // First (auto-created) page exists already — ensure background painted.
      this.recordPage();
    } else {
      this.doc.addPage();
    }
  }

  beginBodyPage() {
    this.currentMode = "body";
    this.doc.addPage();
  }

  newPageSameMode() {
    // Used when content overflows mid-section.
    this.doc.addPage();
  }

  ensureSpace(neededHeight) {
    if (this.doc.y + neededHeight > this.contentBottom) {
      this.newPageSameMode();
    }
  }

  setRunningHeader(text) {
    this.runningHeader = text;
  }

  // ---------- Cover layout ----------

  drawCover({ eyebrow, title, subtitle }) {
    const { doc } = this;
    const left = PAGE.margins.left;
    const right = doc.page.width - PAGE.margins.right;
    const width = right - left;

    let y = PAGE.margins.top;

    // Brand mark with accent dot
    doc.save();
    doc.circle(left + 4, y + 7, 4).fill(COLORS.accent);
    doc
      .fillColor(COLORS.ink)
      .font(FONTS.bold)
      .fontSize(13)
      .text(BRAND.name, left + 14, y, { lineBreak: false });
    const brandWidth = doc.widthOfString(BRAND.name);
    doc
      .fillColor(COLORS.muted)
      .font(FONTS.body)
      .fontSize(10.5)
      .text(`  ·  ${BRAND.product}`, left + 14 + brandWidth, y + 1.2, {
        lineBreak: false,
      });
    doc.restore();

    y += 64;

    // Eyebrow chip
    doc.save();
    const chipText = eyebrow.toUpperCase();
    doc.font(FONTS.bold).fontSize(SIZES.coverEyebrow);
    const chipTextWidth = doc.widthOfString(chipText);
    const chipPadX = 12;
    const chipHeight = 22;
    doc
      .roundedRect(left, y, chipTextWidth + chipPadX * 2, chipHeight, 11)
      .fillAndStroke(COLORS.accentSoft, COLORS.accent);
    doc
      .fillColor(COLORS.accent)
      .font(FONTS.bold)
      .fontSize(SIZES.coverEyebrow)
      .text(chipText, left + chipPadX, y + 6, {
        lineBreak: false,
        characterSpacing: 0.6,
      });
    doc.restore();

    y += chipHeight + 26;

    // Title
    doc
      .fillColor(COLORS.ink)
      .font(FONTS.bold)
      .fontSize(SIZES.cover);
    doc.text(title, left, y, { width, lineGap: 2 });
    y = doc.y + 14;

    // Accent rule
    doc
      .moveTo(left, y)
      .lineTo(left + 64, y)
      .strokeColor(COLORS.accent)
      .lineWidth(2)
      .stroke();
    y += 22;

    // Subtitle
    doc
      .fillColor(COLORS.body)
      .font(FONTS.body)
      .fontSize(13)
      .text(subtitle, left, y, { width: width - 40, lineGap: 4 });

    // Bottom facts panel
    const panelHeight = 132;
    const panelY = doc.page.height - PAGE.margins.bottom - panelHeight - 64;
    doc.save();
    doc
      .roundedRect(left, panelY, width, panelHeight, 12)
      .fillAndStroke(COLORS.surface, COLORS.rule);

    const cellPadX = 24;
    const cellPadY = 24;
    const dividerX = left + width / 2;

    // Vertical divider
    doc
      .moveTo(dividerX, panelY + 18)
      .lineTo(dividerX, panelY + panelHeight - 18)
      .strokeColor(COLORS.rule)
      .lineWidth(0.5)
      .stroke();

    // Left cell — product
    doc
      .fillColor(COLORS.muted)
      .font(FONTS.bold)
      .fontSize(8.5)
      .text("PRODUCT", left + cellPadX, panelY + cellPadY, {
        characterSpacing: 1,
        lineBreak: false,
      });
    doc
      .fillColor(COLORS.ink)
      .font(FONTS.bold)
      .fontSize(13)
      .text(BRAND.product, left + cellPadX, panelY + cellPadY + 16, {
        width: width / 2 - cellPadX * 2,
      });
    doc
      .fillColor(COLORS.muted)
      .font(FONTS.body)
      .fontSize(9.5)
      .text(
        "$49 one-time · 7-day refund · Google Drive folder of editable assets.",
        left + cellPadX,
        panelY + cellPadY + 50,
        { width: width / 2 - cellPadX * 2, lineGap: 2 },
      );

    // Right cell — support
    const rightCellX = dividerX + cellPadX;
    doc
      .fillColor(COLORS.muted)
      .font(FONTS.bold)
      .fontSize(8.5)
      .text("SUPPORT", rightCellX, panelY + cellPadY, {
        characterSpacing: 1,
        lineBreak: false,
      });
    doc
      .fillColor(COLORS.ink)
      .font(FONTS.bold)
      .fontSize(13)
      .text(BRAND.email, rightCellX, panelY + cellPadY + 16, {
        width: width / 2 - cellPadX * 2,
      });
    doc
      .fillColor(COLORS.muted)
      .font(FONTS.body)
      .fontSize(9.5)
      .text(
        `A real human reads every email — same business day on most issues. ${BRAND.domain}`,
        rightCellX,
        panelY + cellPadY + 50,
        { width: width / 2 - cellPadX * 2, lineGap: 2 },
      );

    doc.restore();

    // Disclaimer
    doc
      .fillColor(COLORS.muted)
      .font(FONTS.italic)
      .fontSize(8.5)
      .text(
        `${BRAND.name} is informational. The toolkit is HIPAA-aware editorial guidance — not legal, medical, or compliance advice. Final compliance decisions belong with your provider, privacy officer, and counsel.`,
        left,
        panelY + panelHeight + 18,
        { width, lineGap: 2 },
      );
  }

  // ---------- Body blocks ----------

  drawBlocks(blocks) {
    for (const block of blocks) this.drawBlock(block);
  }

  drawBlock(block) {
    switch (block.type) {
      case "h1":
        return this.drawHeading(block.text, 1);
      case "h2":
        return this.drawHeading(block.text, 2);
      case "h3":
        return this.drawHeading(block.text, 3);
      case "paragraph":
        return this.drawParagraph(block.spans);
      case "ul":
      case "ol":
      case "checklist":
        return this.drawList(block);
      case "blockquote":
        return this.drawBlockquote(block.spans);
      case "hr":
        return this.drawHr();
      case "table":
        return this.drawTable(block);
      default:
        return undefined;
    }
  }

  drawHeading(text, level) {
    const { doc } = this;
    const sizes = { 1: SIZES.h1, 2: SIZES.h2, 3: SIZES.h3 };
    const tops = { 1: 18, 2: 18, 3: 12 };
    const bottoms = { 1: 10, 2: 6, 3: 4 };

    doc.y += tops[level];

    // Pre-measure to keep heading + first paragraph line on the same page.
    doc.font(FONTS.bold).fontSize(sizes[level]);
    const blockHeight = doc.heightOfString(text, {
      width: doc.page.width - PAGE.margins.left - PAGE.margins.right,
    });
    this.ensureSpace(blockHeight + bottoms[level] + sizes[level]);

    if (level === 1) {
      const left = PAGE.margins.left;
      doc
        .moveTo(left, doc.y - 8)
        .lineTo(left + 36, doc.y - 8)
        .strokeColor(COLORS.accent)
        .lineWidth(2)
        .stroke();
    }

    doc
      .fillColor(level === 3 ? COLORS.body : COLORS.ink)
      .font(FONTS.bold)
      .fontSize(sizes[level])
      .text(text, PAGE.margins.left, doc.y, {
        width: doc.page.width - PAGE.margins.left - PAGE.margins.right,
        lineGap: 2,
      });

    doc.y += bottoms[level];
  }

  drawParagraph(spans) {
    const { doc } = this;
    this.ensureSpace(SIZES.body * 2);
    this.writeSpans(spans, {
      x: PAGE.margins.left,
      width: doc.page.width - PAGE.margins.left - PAGE.margins.right,
      color: COLORS.body,
      size: SIZES.body,
      lineGap: 4,
    });
    doc.y += 8;
  }

  drawBlockquote(spans) {
    const { doc } = this;
    const left = PAGE.margins.left;
    const right = doc.page.width - PAGE.margins.right;
    const innerLeft = left + 18;
    const width = right - innerLeft - 4;

    this.ensureSpace(SIZES.body * 2 + 24);

    const startY = doc.y + 4;
    this.writeSpans(spans, {
      x: innerLeft,
      width,
      color: COLORS.muted,
      size: SIZES.body,
      lineGap: 3,
      italicDefault: true,
    });
    const endY = doc.y;

    doc
      .moveTo(left + 4, startY)
      .lineTo(left + 4, endY)
      .strokeColor(COLORS.accent)
      .lineWidth(2)
      .stroke();

    doc.y += 8;
  }

  drawHr() {
    const { doc } = this;
    doc.y += 8;
    this.ensureSpace(20);
    const left = PAGE.margins.left;
    const right = doc.page.width - PAGE.margins.right;
    doc
      .moveTo(left, doc.y)
      .lineTo(right, doc.y)
      .strokeColor(COLORS.rule)
      .lineWidth(0.75)
      .stroke();
    doc.y += 14;
  }

  drawList(block) {
    const { doc } = this;
    const left = PAGE.margins.left;
    const right = doc.page.width - PAGE.margins.right;
    const indent = 20;
    const textX = left + indent + 8;
    const textWidth = right - textX;

    block.items.forEach((item, idx) => {
      this.ensureSpace(SIZES.body * 1.8);
      const startY = doc.y;

      if (block.type === "ol") {
        doc
          .fillColor(COLORS.accent)
          .font(FONTS.bold)
          .fontSize(SIZES.body)
          .text(`${idx + 1}.`, left, startY + 1, {
            width: indent + 4,
            lineBreak: false,
          });
      } else if (block.type === "checklist") {
        const boxX = left + 2;
        const boxY = startY + 2;
        doc
          .roundedRect(boxX, boxY, 10, 10, 1.5)
          .lineWidth(0.9)
          .strokeColor(COLORS.accent)
          .stroke();
        if (item.checked) {
          doc
            .fillColor(COLORS.accent)
            .roundedRect(boxX + 2, boxY + 2, 6, 6, 0.8)
            .fill();
        }
      } else {
        doc
          .circle(left + 6, startY + 5.8, 1.7)
          .fillColor(COLORS.accent)
          .fill();
      }

      this.writeSpans(item.spans, {
        x: textX,
        width: textWidth,
        color: COLORS.body,
        size: SIZES.body,
        lineGap: 3,
      });
      doc.y += 4;
    });
    doc.y += 6;
  }

  drawTable(block) {
    const { doc } = this;
    const left = PAGE.margins.left;
    const right = doc.page.width - PAGE.margins.right;
    const totalWidth = right - left;

    const colCount = block.headers.length;
    const widthsRaw = block.headers.map((_, c) => {
      let max = block.headers[c].reduce((s, sp) => s + sp.text.length, 0);
      block.rows.forEach((r) => {
        const cell = r[c] || [];
        const len = cell.reduce((s, sp) => s + sp.text.length, 0);
        if (len > max) max = len;
      });
      return Math.max(max, 6);
    });
    const sumRaw = widthsRaw.reduce((a, b) => a + b, 0);
    const widths = widthsRaw.map((w) =>
      Math.max(60, (w / sumRaw) * totalWidth),
    );
    const sumScaled = widths.reduce((a, b) => a + b, 0);
    const colWidths = widths.map((w) => (w / sumScaled) * totalWidth);

    const cellPadX = 8;
    const cellPadY = 7;

    const drawRow = (cells, isHeader) => {
      const heights = cells.map((spans, c) => {
        const w = colWidths[c] - cellPadX * 2;
        return this.measureSpans(spans, {
          width: w,
          size: SIZES.small,
          lineGap: 2,
          boldDefault: isHeader,
        });
      });
      const rowHeight = Math.max(...heights, SIZES.small + 4) + cellPadY * 2;

      this.ensureSpace(rowHeight + 4);
      const y0 = doc.y;
      let x = left;

      if (isHeader) {
        doc.rect(left, y0, totalWidth, rowHeight).fill(COLORS.accent);
      } else {
        doc.rect(left, y0, totalWidth, rowHeight).fill(COLORS.surface);
      }

      cells.forEach((spans, c) => {
        this.writeSpans(spans, {
          x: x + cellPadX,
          y: y0 + cellPadY,
          width: colWidths[c] - cellPadX * 2,
          color: isHeader ? "#FFFFFF" : COLORS.body,
          size: SIZES.small,
          lineGap: 2,
          boldDefault: isHeader,
        });
        x += colWidths[c];
      });

      doc
        .moveTo(left, y0 + rowHeight)
        .lineTo(right, y0 + rowHeight)
        .strokeColor(COLORS.rule)
        .lineWidth(0.5)
        .stroke();

      doc.y = y0 + rowHeight;
    };

    doc.y += 4;
    drawRow(block.headers, true);
    block.rows.forEach((row) => {
      const cells = [];
      for (let c = 0; c < colCount; c += 1) cells.push(row[c] || []);
      drawRow(cells, false);
    });
    doc.y += 10;
  }

  measureSpans(spans, opts) {
    const { doc } = this;
    const text = spans.map((s) => s.text).join("");
    doc
      .font(opts.boldDefault ? FONTS.bold : FONTS.body)
      .fontSize(opts.size);
    return doc.heightOfString(text || " ", {
      width: opts.width,
      lineGap: opts.lineGap || 0,
    });
  }

  writeSpans(spans, opts) {
    const { doc } = this;
    const x = opts.x;
    const y = opts.y == null ? doc.y : opts.y;
    const width = opts.width;

    if (!spans || spans.length === 0) {
      doc
        .font(opts.boldDefault ? FONTS.bold : FONTS.body)
        .fontSize(opts.size)
        .fillColor(opts.color)
        .text(" ", x, y, { width, lineGap: opts.lineGap || 0 });
      return;
    }

    spans.forEach((s, i) => {
      const isLast = i === spans.length - 1;
      let font = opts.boldDefault ? FONTS.bold : FONTS.body;
      if (opts.italicDefault) font = FONTS.italic;
      let color = opts.color;
      let size = opts.size;

      if (s.kind === "bold") font = FONTS.bold;
      else if (s.kind === "italic") font = FONTS.italic;
      else if (s.kind === "code") {
        font = FONTS.mono;
        size = opts.size - 0.5;
        color = COLORS.accent;
      }

      doc.font(font).fontSize(size).fillColor(color);
      const textOpts = {
        width,
        lineGap: opts.lineGap || 0,
        continued: !isLast,
      };
      if (i === 0) {
        doc.text(s.text, x, y, textOpts);
      } else {
        doc.text(s.text, textOpts);
      }
    });
  }

  // CSV — built specifically for the GBP calendar (Week, Theme, Day, Channel,
  // Angle, Post draft, Owner, Status). Falls back to a generic table.
  renderCsv(rows) {
    if (!rows.length) return;
    const headers = rows[0];
    const data = rows.slice(1);

    const weekIndex = headers.findIndex((h) => /week/i.test(h));
    if (weekIndex !== -1) {
      const groups = new Map();
      for (const r of data) {
        const key = r[weekIndex] || "Other";
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(r);
      }
      let firstGroup = true;
      for (const [week, entries] of groups) {
        if (!firstGroup) this.doc.y += 8;
        firstGroup = false;
        this.drawHeading(week, 2);
        const themeIdx = headers.findIndex((h) => /theme/i.test(h));
        if (themeIdx !== -1 && entries[0][themeIdx]) {
          this.drawParagraph([
            { kind: "italic", text: entries[0][themeIdx] },
          ]);
        }
        const include = headers
          .map((h, i) => ({ h, i }))
          .filter(({ h, i }) => i !== weekIndex && !/theme/i.test(h));
        const tableHeaders = include.map(({ h }) => parseInline(h));
        const tableRows = entries.map((r) =>
          include.map(({ i }) => parseInline(r[i] || "")),
        );
        this.drawTable({ headers: tableHeaders, rows: tableRows });
      }
      return;
    }

    this.drawTable({
      headers: headers.map((h) => parseInline(h)),
      rows: data.map((r) => r.map((c) => parseInline(c))),
    });
  }

  // ---------- Page chrome (drawn after content) ----------

  stampPageChrome() {
    const { doc } = this;
    const range = doc.bufferedPageRange();
    const totalBody = this.pageMeta.filter((m) => m.mode === "body").length;
    this.stamping = true;
    for (let p = 0; p < range.count; p += 1) {
      doc.switchToPage(range.start + p);
      // Header is drawn at y=48 (above PAGE.margins.top=96) and the footer
      // is drawn at page.height - 56 (below PAGE.margins.bottom=84). PDFKit
      // treats anything outside [margins.top, page.height - margins.bottom]
      // as overflow and silently inserts a new page mid-stamp. Zeroing the
      // page margins for the duration of the stamp lets the chrome sit in
      // the gutter without being treated as overflow.
      const savedMargins = doc.page.margins;
      doc.page.margins = { top: 0, bottom: 0, left: 0, right: 0 };
      const meta = this.pageMeta[p];
      this.stampFooter(meta, totalBody);
      if (meta.mode === "body") {
        this.stampHeader(meta);
      } else {
        this.stampCoverFooterBrand();
      }
      doc.page.margins = savedMargins;
    }
    this.stamping = false;
  }

  stampHeader(meta) {
    const { doc } = this;
    const left = PAGE.margins.left;
    const right = doc.page.width - PAGE.margins.right;
    const y = 48;

    doc.save();
    doc
      .fillColor(COLORS.ink)
      .font(FONTS.bold)
      .fontSize(11)
      .text(BRAND.name, left, y, { lineBreak: false });

    doc
      .fillColor(COLORS.muted)
      .font(FONTS.body)
      .fontSize(9)
      .text(meta.headerText || BRAND.product, left, y + 1.2, {
        align: "right",
        width: right - left,
        lineBreak: false,
      });

    doc
      .moveTo(left, y + 18)
      .lineTo(right, y + 18)
      .strokeColor(COLORS.rule)
      .lineWidth(0.5)
      .stroke();
    doc.restore();
  }

  stampFooter(meta, totalBody) {
    const { doc } = this;
    const left = PAGE.margins.left;
    const right = doc.page.width - PAGE.margins.right;
    const y = doc.page.height - 56;

    doc.save();
    doc
      .moveTo(left, y - 10)
      .lineTo(right, y - 10)
      .strokeColor(COLORS.rule)
      .lineWidth(0.5)
      .stroke();

    if (meta.mode === "body") {
      doc
        .fillColor(COLORS.muted)
        .font(FONTS.body)
        .fontSize(8.5)
        .text(`${BRAND.domain}  ·  ${BRAND.email}`, left, y, {
          lineBreak: false,
        });
      doc
        .fillColor(COLORS.muted)
        .font(FONTS.body)
        .fontSize(8.5)
        .text(`Page ${meta.pageNumber} of ${totalBody}`, left, y, {
          align: "right",
          width: right - left,
          lineBreak: false,
        });
    }
    doc.restore();
  }

  stampCoverFooterBrand() {
    const { doc } = this;
    const left = PAGE.margins.left;
    const right = doc.page.width - PAGE.margins.right;
    const y = doc.page.height - 56;

    doc.save();
    doc
      .moveTo(left, y - 10)
      .lineTo(right, y - 10)
      .strokeColor(COLORS.rule)
      .lineWidth(0.5)
      .stroke();
    doc
      .fillColor(COLORS.muted)
      .font(FONTS.body)
      .fontSize(8.5)
      .text(`${BRAND.domain}  ·  ${BRAND.email}`, left, y, {
        lineBreak: false,
      });
    doc.restore();
  }
}

// ---------- build ----------

function buildPdf({ outPath, sections, isCombined }) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: PAGE.size,
      margins: PAGE.margins,
      bufferPages: true,
      autoFirstPage: true,
      info: {
        Title: isCombined
          ? `${BRAND.name} — ${BRAND.product} (complete pack)`
          : `${BRAND.name} · ${sections[0].title}`,
        Author: BRAND.name,
        Subject: BRAND.product,
        Keywords:
          "med spa, review reply, local SEO, HIPAA-aware, Google Business Profile",
      },
    });

    const stream = fs.createWriteStream(outPath);
    doc.pipe(stream);

    const renderer = new PdfRenderer({ doc });

    sections.forEach((section, idx) => {
      if (idx === 0) {
        renderer.beginCoverPage(); // Uses the auto-created first page.
      } else {
        renderer.beginCoverPage();
      }
      renderer.drawCover({
        eyebrow: section.eyebrow,
        title: section.title,
        subtitle: section.subtitle,
      });

      renderer.beginBodyPage();
      renderer.setRunningHeader(section.title);

      if (section.source.type === "markdown") {
        const blocks = parseMarkdown(section.markdown);
        renderer.drawBlocks(blocks);
      } else if (section.source.type === "csv") {
        const rows = parseCsv(section.csv);
        renderer.renderCsv(rows);
      }
    });

    renderer.stampPageChrome();

    doc.end();
    stream.on("finish", () => resolve());
    stream.on("error", reject);
  });
}

async function main() {
  const summary = [];

  const sections = documents.map((d) => {
    const srcPath = path.join(toolkitDir, d.source.path);
    const raw = fs.readFileSync(srcPath, "utf8");
    return {
      ...d,
      ...(d.source.type === "markdown" ? { markdown: raw } : { csv: raw }),
    };
  });

  for (const section of sections) {
    const out = path.join(toolkitDir, `${section.file}.pdf`);
    await buildPdf({ outPath: out, sections: [section], isCombined: false });
    const stat = fs.statSync(out);
    summary.push({ file: path.relative(repoRoot, out), bytes: stat.size });
  }

  const combinedOut = path.join(toolkitDir, "SpaReply-toolkit-complete.pdf");
  await buildPdf({ outPath: combinedOut, sections, isCombined: true });
  const stat = fs.statSync(combinedOut);
  summary.push({ file: path.relative(repoRoot, combinedOut), bytes: stat.size });

  console.log(`Generated ${summary.length} PDF${summary.length === 1 ? "" : "s"}:`);
  for (const s of summary) {
    console.log(`  ${s.file}  (${(s.bytes / 1024).toFixed(1)} KB)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
