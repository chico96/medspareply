import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./page.module.css";

const TOOLKIT_MAILTO =
  "mailto:hello@denzellrei.com?subject=MedSpaReply%20%2449%20launch%20toolkit&body=Hi%20Denzell%2C%20I%27d%20like%20to%20buy%20the%20%2449%20MedSpaReply%20launch%20toolkit.%20My%20clinic%3A%20%5Bclinic%20name%5D%20in%20%5Bcity%5D.";

const ASK_MAILTO =
  "mailto:hello@denzellrei.com?subject=Question%20about%20the%20MedSpaReply%20toolkit";

export const metadata: Metadata = {
  title: "Toolkit Preview · MedSpa Review + Local SEO Toolkit | MedSpaReply",
  description:
    "Preview the $49 MedSpa Review + Local SEO Toolkit — sample reply templates, the negative-review playbook, the HIPAA-aware safety checklist, GBP prompts, the front-desk SOP, and the 90-day content calendar.",
  alternates: { canonical: "/toolkit-preview" },
  openGraph: {
    title: "MedSpa Review + Local SEO Toolkit — Preview",
    description:
      "See exactly what is inside the $49 MedSpaReply launch toolkit before you buy.",
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
    label: "After purchase",
    title: "A Google Drive folder lands in your inbox",
    body: "We send a Drive link within one business day. Everything is editable in Google Docs, Sheets, and Notion. No SaaS login, no AI key, no monthly seat.",
  },
  {
    label: "Inside the Drive",
    title: "120+ templates, expanded packs, and printable assets",
    body: "The repo seed library expands into the full 120+ template pack, seasonal expansion sets, a printable safety checklist for the back-office wall, and the editable Sheet versions of every tracker.",
  },
  {
    label: "Refund policy",
    title: "7-day refund, no forms, no friction",
    body: "Use the toolkit for a week. If it doesn't make replying to reviews faster and safer for your team, email hello@denzellrei.com and we will refund the $49.",
  },
  {
    label: "Free updates",
    title: "Launch buyers receive every update",
    body: "Spring, summer, fall, and holiday expansion packs ship into the same Drive folder. Buyers also get launch pricing on the upcoming MedSpaReply platform when it ships.",
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
              Each section below shows a real sample pulled from the toolkit. The repo seed
              library is open source; the <strong>full Google Drive version</strong> unlocks
              after purchase with the 120+ template pack and seasonal expansion sets.
            </p>
            <div className={styles.heroCtas}>
              <a className={styles.primaryCta} href={TOOLKIT_MAILTO}>
                Get the $49 toolkit
              </a>
              <Link className={styles.secondaryCta} href="/#generator">
                Try the free generator
              </Link>
            </div>
            <div className={styles.heroFacts}>
              <div>
                <strong>6</strong>
                <span>Deliverables</span>
              </div>
              <div>
                <strong>120+</strong>
                <span>Templates (full)</span>
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
            <p>One-time. Instant Google Drive access. Free updates during the launch window.</p>
            <ul className={styles.priceList}>
              <li>120+ public reply templates (Drive)</li>
              <li>Negative-review playbook + tracker</li>
              <li>HIPAA-aware safety checklist</li>
              <li>25 GBP prompts + 13-week calendar</li>
              <li>Front-desk weekly SOP</li>
            </ul>
            <a href={TOOLKIT_MAILTO}>Get the $49 toolkit</a>
            <small>
              Pilot checkout opens your email so we can confirm and send your access link
              within one business day. Payment links via Gumroad / LemonSqueezy / Stripe
              ship next.
            </small>
          </aside>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="inside">
        <div className={styles.eyebrow}>What is inside</div>
        <h2 id="inside">Six deliverables, each with a sample you can read right now.</h2>
        <p>
          The seed library lives in the open-source repo at{" "}
          <code>toolkit/medspa-review-local-seo-toolkit/</code>. The Google Drive version
          adds the 120-template expansion pack, seasonal updates, printable assets, and the
          editable Sheet versions of each tracker.
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
        <div className={styles.eyebrow}>Delivery + refund</div>
        <h2 id="delivery">How you actually receive the toolkit.</h2>
        <p>
          The launch flow is intentionally simple. You email us, we confirm, and you get
          a Drive folder you own. No SaaS subscription. No onboarding call required.
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
            $49 one-time. Instant-ready templates. 7-day refund. Replies come from a
            human at hello@denzellrei.com — usually within one business day.
          </p>
          <div className={styles.ctaActions}>
            <a className={styles.ctaPrimary} href={TOOLKIT_MAILTO}>
              Get the $49 toolkit
            </a>
            <Link className={styles.ctaSecondary} href="/#generator">
              Try the free generator first
            </Link>
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
        MedSpaReply is informational. The toolkit is HIPAA-aware editorial guidance, not
        legal, medical, or compliance advice. Final compliance decisions belong with your
        provider, privacy officer, and counsel.
      </p>

      <SiteFooter />
    </main>
  );
}
