import type { Metadata } from "next";
import Link from "next/link";
import { getToolkitCheckoutUrl, isStripeCheckoutEnabled } from "@/lib/checkout";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "./page.module.css";

const TOOLKIT_CHECKOUT_URL = getToolkitCheckoutUrl();
const STRIPE_ENABLED = isStripeCheckoutEnabled();
const PRIMARY_CTA_LABEL = STRIPE_ENABLED
  ? "Buy the $49 toolkit"
  : "Get the $49 toolkit";
const PRIMARY_CTA_TARGET = STRIPE_ENABLED ? "_blank" : undefined;
const PRIMARY_CTA_REL = STRIPE_ENABLED ? "noopener noreferrer" : undefined;
const PRICE_CARD_NOTE = STRIPE_ENABLED
  ? "Secure Stripe checkout. The polished 31-page PDF pack, six focused PDFs, and editable source files download immediately after payment. 7-day satisfaction refund."
  : "Pilot checkout opens your email so we can confirm and send your access link within one business day. Payment links via Gumroad / LemonSqueezy / Stripe ship next.";

const ASK_MAILTO =
  "mailto:hello@spareply.com?subject=Question%20about%20the%20SpaReply%20toolkit";

export const metadata: Metadata = {
  title: "Toolkit Preview · MedSpa Review + Local SEO Toolkit | SpaReply",
  description:
    "Preview the $49 MedSpa Review + Local SEO Toolkit — sample reply templates, the negative-review playbook, the HIPAA-aware safety checklist, GBP prompts, the front-desk SOP, and the 90-day content calendar.",
  alternates: { canonical: "/toolkit-preview" },
  openGraph: {
    title: "MedSpa Review + Local SEO Toolkit — Preview",
    description:
      "See exactly what is inside the $49 SpaReply launch toolkit before you buy.",
    type: "article",
  },
};

type Deliverable = {
  category: string;
  title: string;
  blurb: string;
  format: string;
  snippetLabel: string;
  snippet: string;
  meta: { label: string; value: string }[];
};

const deliverables: Deliverable[] = [
  {
    category: "Reply templates",
    title: "Service-specific public reply templates",
    blurb:
      "30+ seed templates in the repo today — Hydrafacial, injectables, laser, peels, body contouring, and membership — across 5★ to 1★ and warm/polished/clinical tones. The full Drive version expands to 120+ with brand-voice variants.",
    format: "Google Doc + plain text",
    snippetLabel: "Sample · 5★ Hydrafacial · warm",
    snippet:
      "Thank you for the kind note, [guest first name]. We're glad the visit felt calm and that you left feeling refreshed. The team will pass your words along to [provider] — we look forward to welcoming you back.",
    meta: [
      { label: "In repo", value: "30+ templates" },
      { label: "Full version", value: "120+ templates" },
      { label: "Avg time to copy", value: "< 60 sec" },
    ],
  },
  {
    category: "Negative reviews",
    title: "Negative-review playbook (1–2★)",
    blurb:
      "A 5-step cadence, six public reply scripts (default, operational, clinical concern, hostile language, mistaken identity, billing), and a private follow-up SOP with an internal tracker. Built so 1- and 2-star reviews stop being owner-only emergencies.",
    format: "Playbook PDF + scripts",
    snippetLabel: "Sample · 1★ default public reply",
    snippet:
      "We're sorry your visit didn't feel as seamless as it should have, [guest first name]. We appreciate you bringing this to our attention. Please contact our practice manager at [practice manager email] so we can listen, review the details, and follow up offline with care.",
    meta: [
      { label: "Public scripts", value: "6 scenarios" },
      { label: "Private SOP", value: "Step-by-step" },
      { label: "Tracker", value: "13 fields" },
    ],
  },
  {
    category: "Compliance",
    title: "HIPAA-aware safety checklist",
    blurb:
      "A 7-question pre-flight check before any public reply, a never-write-publicly list, a phrases-to-avoid table with safer rewrites, photo/video guidance, and team training prompts. Editorial — not certification.",
    format: "1-page checklist + training prompts",
    snippetLabel: "Sample · 7-question pre-post check",
    snippet:
      "1. Did the guest write the detail publicly first?\n2. Is the reply free of any treatment specifics?\n3. Is it free of outcome promises?\n4. Is anything that requires privacy moved to a private channel?\n5. Has a second person read it?\n6. Does the tone match a calm, well-run clinic?\n7. Are we within 24 business hours of the review?",
    meta: [
      { label: "Pre-post checks", value: "7 questions" },
      { label: "Risky → safer table", value: "6 rewrites" },
      { label: "Disclaimer", value: "Included" },
    ],
  },
  {
    category: "Local SEO",
    title: "Google Business Profile prompt pack",
    blurb:
      "25 GBP post prompts grouped by service spotlights, membership/offers, local + seasonal hooks, trust + expertise, review-driven angles, and re-engagement. Includes headline patterns and image guidelines.",
    format: "Notion-ready prompts",
    snippetLabel: "Sample · spring glow plan",
    snippet:
      "Spring glow plan in [city]: Hydrafacial + LED finishing — three weekly slots open this week. Members save 15%. (Pair with one real, non-stock image of your treatment area.)",
    meta: [
      { label: "Prompts", value: "25 angles" },
      { label: "Cadence", value: "1–2 / week" },
      { label: "Headline patterns", value: "5 included" },
    ],
  },
  {
    category: "Operations",
    title: "Front-desk weekly SOP",
    blurb:
      "A 20-minute Tuesday block that covers triage, drafting, safety check, posting, logging, and a one-signal/one-improvement scan. Plus the monthly roll-up and the escalation tree.",
    format: "SOP + tracker",
    snippetLabel: "Sample · the 20-minute block",
    snippet:
      "0–3 min: Pull the week's reviews.\n3–10 min: Draft public replies for 5/4/3-star.\n10–14 min: Draft 1- and 2-star replies; loop in practice manager.\n14–17 min: Post approved replies; log the tracker.\n17–20 min: Spot one theme to bring to Friday's huddle.",
    meta: [
      { label: "Cadence", value: "20 min / week" },
      { label: "Roles", value: "3 defined" },
      { label: "Tracker", value: "12 fields" },
    ],
  },
  {
    category: "Content",
    title: "90-day content calendar",
    blurb:
      "Thirteen weeks of paired GBP / review-reply / social / email angles with internal notes. Built so a single front-desk lead can run a content cadence without a marketing agency.",
    format: "CSV + Google Sheet",
    snippetLabel: "Sample · week 1 row",
    snippet:
      "Week 1 · Spring glow plan kickoff · GBP: \"Spring glow plan in [city]: Hydrafacial + LED finishing — three weekly slots open this week.\" · Reply focus: 5★ + 4★ warm tone · Email: 4-week cadence for a refreshed look without overpromising.",
    meta: [
      { label: "Weeks", value: "13" },
      { label: "Columns", value: "8" },
      { label: "Format", value: "CSV + Sheet" },
    ],
  },
];

const deliveryNotes = [
  {
    label: "Step 1 · Instant download",
    title: "31-page SpaReply PDF complete pack",
    body: STRIPE_ENABLED
      ? "The moment Stripe confirms, you land on a buyer page with the polished 31-page PDF pack ready to download — branded, printable, and structured to be read in one sitting."
      : "Once we confirm payment we email a buyer link with the polished 31-page PDF pack — branded, printable, and structured to be read in one sitting.",
  },
  {
    label: "Step 2 · Split for the team",
    title: "Six focused individual PDFs",
    body: "The same six pieces split into print-and-tape PDFs — front-desk SOP, template bank, negative-review triage, GBP + 4-week content calendar, local SEO prompts, and the operating cadence — so each role can grab the page they need.",
  },
  {
    label: "Step 3 · Make it your own",
    title: "Editable Markdown + CSV source files",
    body: "Five Markdown originals plus the 4-week content calendar CSV. Open in any editor or import into Google Docs and Sheets so your clinic can fork the wording into its own shared drive without retyping it.",
  },
  {
    label: "Refund policy",
    title: "7-day satisfaction refund, no forms",
    body: "Use the toolkit for a week. If it doesn't make replying to reviews faster and safer for your team, email hello@spareply.com within 7 days with the email address and date you used at Stripe checkout — we'll refund the $49 to your original payment method. Requests are reviewed to prevent abuse, duplicate claims, redistribution, or policy misuse.",
  },
];

export default function ToolkitPreviewPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />

      <section className={styles.page}>
        <div className={styles.hero}>
          <div>
            <div className={styles.eyebrow}>Toolkit preview · $49 launch bundle</div>
            <h1>See exactly what is inside the MedSpa Review + Local SEO Toolkit.</h1>
            <p>
              Six tangible deliverables your team can use the same day they receive them.
              Each section below shows a real sample pulled from the toolkit. After
              checkout, buyers download the polished{" "}
              <strong>31-page SpaReply PDF complete pack</strong>, six focused individual
              PDFs, and the editable Markdown / CSV source files — instantly, no Drive
              wait, no onboarding call.{" "}
              {STRIPE_ENABLED
                ? "Buy the $49 bundle now via secure Stripe checkout."
                : null}
            </p>
            <div className={styles.heroCtas}>
              <TrackedAnchor
                className={styles.primaryCta}
                href={TOOLKIT_CHECKOUT_URL}
                target={PRIMARY_CTA_TARGET}
                rel={PRIMARY_CTA_REL}
                event="stripe_cta_click"
                eventProperties={{ location: "toolkit_preview_hero" }}
              >
                {PRIMARY_CTA_LABEL}
              </TrackedAnchor>
              <TrackedAnchor
                className={styles.secondaryCta}
                href={samplePreviewPdf.href}
                download={samplePreviewPdf.filename}
                event="sample_pdf_click"
                eventProperties={{ location: "toolkit_preview_hero" }}
              >
                Download free 5-page sample PDF
              </TrackedAnchor>
              <TrackedLink
                className={styles.secondaryCta}
                href="/#generator"
                event="free_generator_click"
                eventProperties={{ location: "toolkit_preview_hero" }}
              >
                Try the free generator
              </TrackedLink>
            </div>
            <p className={styles.policyTrust}>
              <strong>7-day satisfaction refund</strong>
              <span className={styles.sep} aria-hidden="true">·</span>
              <strong>Secure Stripe checkout</strong>
              <span className={styles.sep} aria-hidden="true">·</span>
              <span>Policies:</span>
              <Link href="/refund-policy">Refund</Link>
              <span className={styles.sep} aria-hidden="true">·</span>
              <Link href="/privacy-policy">Privacy</Link>
              <span className={styles.sep} aria-hidden="true">·</span>
              <Link href="/terms">Terms</Link>
            </p>
            <div className={styles.heroFacts}>
              <div>
                <strong>31 pages</strong>
                <span>Complete PDF pack</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Focused PDFs</span>
              </div>
              <div>
                <strong>20 min</strong>
                <span>Weekly cadence</span>
              </div>
              <div>
                <strong>7 days</strong>
                <span>Refund window</span>
              </div>
            </div>
          </div>

          <aside className={styles.priceCard}>
            <span>Launch price</span>
            <strong>$49</strong>
            <p>
              One-time. The PDF pack and editable source files download instantly. Free
              updates during the launch window.
            </p>
            <ul className={styles.priceList}>
              <li>31-page SpaReply PDF complete pack</li>
              <li>Six focused individual PDFs</li>
              <li>Editable Markdown + CSV sources</li>
              <li>HIPAA-aware safety checklist + GBP prompts</li>
              <li>Front-desk SOP + 4-week content calendar</li>
            </ul>
            <TrackedAnchor
              href={TOOLKIT_CHECKOUT_URL}
              target={PRIMARY_CTA_TARGET}
              rel={PRIMARY_CTA_REL}
              event="stripe_cta_click"
              eventProperties={{ location: "toolkit_preview_price_card" }}
            >
              {PRIMARY_CTA_LABEL}
            </TrackedAnchor>
            <small>{PRICE_CARD_NOTE}</small>
            <p className={styles.policyTrust}>
              <span>Policies:</span>
              <Link href="/refund-policy">Refund</Link>
              <span className={styles.sep} aria-hidden="true">·</span>
              <Link href="/privacy-policy">Privacy</Link>
              <span className={styles.sep} aria-hidden="true">·</span>
              <Link href="/terms">Terms</Link>
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="sample">
        <div className={styles.eyebrow}>Sample preview · free</div>
        <h2 id="sample">A free 5-page sample PDF, no email required.</h2>
        <p>
          Read an abbreviated SpaReply sample before paying — cover, the
          7-question pre-post safety check, three of the 20 paste-ready
          review-reply templates, the first three steps of the negative-review
          triage, and two GBP prompt samples. The full $49 purchase delivers
          the polished 31-page complete pack, six focused individual PDFs, and
          the editable Markdown / CSV source files.
        </p>
        <div className={styles.sampleActions}>
          <TrackedAnchor
            className={styles.primaryCta}
            href={samplePreviewPdf.href}
            download={samplePreviewPdf.filename}
            event="sample_pdf_click"
            eventProperties={{ location: "toolkit_preview_sample" }}
          >
            Download the sample PDF
          </TrackedAnchor>
          <TrackedAnchor
            className={styles.secondaryCta}
            href={TOOLKIT_CHECKOUT_URL}
            target={PRIMARY_CTA_TARGET}
            rel={PRIMARY_CTA_REL}
            event="stripe_cta_click"
            eventProperties={{ location: "toolkit_preview_sample" }}
          >
            {PRIMARY_CTA_LABEL}
          </TrackedAnchor>
        </div>
        <small className={styles.sampleMeta}>
          {samplePreviewPdf.filename} · {samplePreviewPdf.pages} pages · clearly
          marked as a sample. The full toolkit is the only download that
          includes the 31-page complete pack and editable sources.
        </small>
      </section>

      <section className={styles.section} aria-labelledby="inside">
        <div className={styles.eyebrow}>What is inside</div>
        <h2 id="inside">Six deliverables, each with a sample you can read right now.</h2>
        <p>
          The seed library lives in the open-source repo at{" "}
          <code>toolkit/medspa-review-local-seo-toolkit/</code>. After purchase, the same
          six pieces ship as the polished 31-page PDF complete pack and as six focused
          individual PDFs — plus the editable Markdown and CSV originals so your team can
          fork the wording into a shared drive.
        </p>

        <div className={styles.deliverables}>
          {deliverables.map((item) => (
            <article key={item.title} className={styles.deliverable}>
              <div className={styles.deliverableHeader}>
                <strong>{item.title}</strong>
                <span className={styles.deliverableTag}>{item.format}</span>
              </div>
              <p className={styles.deliverableBlurb}>{item.blurb}</p>
              <div className={styles.snippetMeta}>
                {item.meta.map((entry) => (
                  <span key={entry.label}>
                    <strong>{entry.value}</strong> {entry.label}
                  </span>
                ))}
              </div>
              <pre className={styles.snippet}>
                <span className={styles.snippetLabel}>{item.snippetLabel}</span>
                {item.snippet}
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="delivery">
        <div className={styles.eyebrow}>Instant delivery + refund</div>
        <h2 id="delivery">What lands the moment Stripe confirms.</h2>
        <p>
          No onboarding call, no SaaS login, no AI key. Buyers go straight to a download
          page with the polished PDFs and editable source files ready to grab — and a
          7-day satisfaction refund if it doesn&rsquo;t earn its keep.
        </p>
        <div className={styles.deliveryGrid}>
          {deliveryNotes.map((note) => (
            <article key={note.title} className={styles.deliveryCard}>
              <span>{note.label}</span>
              <strong>{note.title}</strong>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.cta}`} aria-labelledby="cta">
        <div>
          <div className={styles.eyebrow}>Get started</div>
          <h2 id="cta">Hand your front desk a system, not a vibe.</h2>
          <p>
            $49 one-time. 7-day satisfaction refund.{" "}
            {STRIPE_ENABLED
              ? "Pay via secure Stripe checkout and the polished 31-page PDF pack, six focused PDFs, and editable Markdown / CSV source files download immediately."
              : "Replies come from a human at hello@spareply.com — usually within one business day."}
          </p>
          <div className={styles.ctaActions}>
            <TrackedAnchor
              className={styles.ctaPrimary}
              href={TOOLKIT_CHECKOUT_URL}
              target={PRIMARY_CTA_TARGET}
              rel={PRIMARY_CTA_REL}
              event="stripe_cta_click"
              eventProperties={{ location: "toolkit_preview_final_cta" }}
            >
              {PRIMARY_CTA_LABEL}
            </TrackedAnchor>
            <TrackedLink
              className={styles.ctaSecondary}
              href="/#generator"
              event="free_generator_click"
              eventProperties={{ location: "toolkit_preview_final_cta" }}
            >
              Try the free generator first
            </TrackedLink>
          </div>
        </div>
        <form
          className={styles.askForm}
          action={ASK_MAILTO}
          method="post"
          encType="text/plain"
          aria-label="Ask a question before you buy"
        >
          <strong>Have a question first?</strong>
          <input aria-label="Name" name="name" placeholder="Your name" />
          <input aria-label="Clinic email" name="email" placeholder="Clinic email" type="email" />
          <input aria-label="Med spa city" name="city" placeholder="City / market" />
          <textarea
            aria-label="Question"
            name="question"
            placeholder="What would make this a no-brainer for your team?"
          />
          <button type="submit">Send a question</button>
          <small>
            Opens your email client so you stay in control of what you send. No CRM,
            no marketing automation.
          </small>
        </form>
      </section>

      <p className={styles.disclaimer}>
        SpaReply is informational. The toolkit is HIPAA-aware editorial guidance, not
        legal, medical, or compliance advice. Final compliance decisions belong with your
        provider, privacy officer, and counsel.
      </p>

      <SiteFooter />
    </main>
  );
}
