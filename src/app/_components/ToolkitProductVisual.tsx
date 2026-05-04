import { samplePreviewPdf } from "@/lib/marketing";
import { TrackedAnchor } from "./TrackedLink";
import styles from "./toolkit-visual.module.css";

type ToolkitProductVisualProps = {
  toolkitHref: string;
  primaryCtaLabel: string;
  primaryCtaTarget?: string;
  primaryCtaRel?: string;
  /** tracking location prefix — e.g. "home_visual" or "toolkit_preview_visual" */
  location: string;
  /** compact variant for the toolkit-preview page */
  variant?: "homepage" | "compact";
};

type PdfCard = {
  no: string;
  title: string;
  pages: string;
  lines: string[];
  format: string;
};

const pdfCards: PdfCard[] = [
  {
    no: "01",
    title: "Front-desk reply SOP",
    pages: "5 pages",
    lines: [
      "20-minute Tuesday block",
      "7-question safety check",
      "Daily / weekly cadence",
    ],
    format: "PDF · MD",
  },
  {
    no: "02",
    title: "Reply template bank",
    pages: "7 pages · 20 templates",
    lines: [
      "5★ to 1★ wording",
      "Service-specific phrasing",
      "Warm / polished / clinical",
    ],
    format: "PDF · MD",
  },
  {
    no: "03",
    title: "Negative-review triage",
    pages: "5 pages · 8-step",
    lines: [
      "Pre-checks + lane decision",
      "Public + private scripts",
      "Sign-off + log",
    ],
    format: "PDF · MD",
  },
  {
    no: "04",
    title: "GBP + content calendar",
    pages: "4 pages · 4 weeks",
    lines: [
      "Week-by-week schedule",
      "GBP, review, email, SEO",
      "Drops into Google Sheets",
    ],
    format: "PDF · CSV",
  },
  {
    no: "05",
    title: "Local SEO + GBP prompts",
    pages: "5 pages · 13 prompts",
    lines: [
      "GBP post angles",
      "Treatment-page outline",
      "City + neighborhood angles",
    ],
    format: "PDF · MD",
  },
  {
    no: "06",
    title: "Operating cadence",
    pages: "5 pages",
    lines: [
      "Daily 10-min slot",
      "Tuesday 20-min SOP",
      "Friday huddle agenda",
    ],
    format: "PDF · MD",
  },
];

const receiveItems = [
  {
    no: "A",
    title: "31-page complete pack",
    body: "One polished PDF, printable cover-to-cover, branded for the clinic operations binder.",
    chip: "PDF",
  },
  {
    no: "B",
    title: "Six focused individual PDFs",
    body: "Each pillar split into a print-and-tape file the front desk can pull between guests.",
    chip: "PDF × 6",
  },
  {
    no: "C",
    title: "Editable Markdown + CSV",
    body: "Five Markdown originals and the 4-week calendar CSV — fork into your own shared drive.",
    chip: "MD + CSV",
  },
  {
    no: "D",
    title: "Free 5-page sample PDF",
    body: "Read the cover, the safety check, three templates, and two GBP prompts before paying.",
    chip: "Pre-purchase",
  },
];

export function ToolkitProductVisual({
  toolkitHref,
  primaryCtaLabel,
  primaryCtaTarget,
  primaryCtaRel,
  location,
  variant = "homepage",
}: ToolkitProductVisualProps) {
  const sectionClasses = [
    styles.section,
    variant === "compact" ? styles.sectionCompact : "",
    variant === "compact" ? styles.compact : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} aria-labelledby={`${location}-title`}>
      <header className={styles.head}>
        <div>
          <p className={styles.eyebrow}>What you actually receive</p>
          <h2 id={`${location}-title`} className={styles.title}>
            The 31-page pack, six focused PDFs, and the editable source files —
            laid out exactly as they land in your downloads folder.
          </h2>
        </div>
        <p className={styles.lede}>
          Not a Notion template, not a SaaS dashboard. A boutique clinic operations
          binder your front desk can run from a laptop or a printed binder — every
          page numbered, every section named.
        </p>
      </header>

      <div className={styles.stage}>
        <div className={styles.stageHead}>
          <span className={styles.stageHeadDots} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>
            SR · <strong>Edition 01</strong> · MedSpa Review + Local SEO Toolkit
          </span>
          <span>31 pages · 6 PDFs · MD + CSV</span>
        </div>

        <div className={styles.stageBody}>
          <div className={styles.binderCol} aria-hidden="true">
            <div className={styles.binderStack}>
              <span className={styles.binderLeaf} />
              <span className={styles.binderLeaf} />
              <span className={styles.binderLeaf} />

              <div className={styles.binderTag}>Complete pack</div>

              <div className={styles.binderCover}>
                <div className={styles.binderHead}>
                  <span>SR</span>
                  <em>Edition 01</em>
                </div>
                <div className={styles.binderTitle}>
                  <p className={styles.binderKicker}>The med-spa</p>
                  <p className={styles.binderHeadline}>
                    Review<br />&amp; Local SEO<br />Toolkit
                  </p>
                </div>
                <div className={styles.binderFoot}>
                  <span><strong>31 pages</strong> · 6 focused PDFs</span>
                  <span>Editable Markdown + CSV</span>
                </div>
                <div className={styles.binderSeal}>
                  <span>$49</span>
                  <em>one-time</em>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardsCol}>
            <ol className={styles.cards}>
              {pdfCards.map((card) => (
                <li key={card.no} className={styles.card}>
                  <span className={styles.cardNo}>{card.no}</span>
                  <span className={styles.cardPages}>{card.pages}</span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <ul className={styles.cardLines}>
                    {card.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <div className={styles.cardFoot}>
                    <span>{card.format}</span>
                    <em>Individual PDF</em>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className={styles.receive}>
        <article className={styles.receiveCard}>
          <header className={styles.receiveHead}>
            <strong>What lands in your downloads folder</strong>
            <span>Instant after Stripe</span>
          </header>
          <ul className={styles.receiveList}>
            {receiveItems.map((item) => (
              <li key={item.no}>
                <span>{item.no}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
                <span className={styles.receiveListChip}>{item.chip}</span>
              </li>
            ))}
          </ul>
        </article>

        <aside className={styles.actionCard}>
          <span className={styles.actionEyebrow}>Buy or sample</span>
          <h3 className={styles.actionTitle}>
            See the wording before you spend $49.
          </h3>
          <div className={styles.actionPrice}>
            <strong>$49</strong>
            <span>one-time · 7-day refund</span>
          </div>
          <div className={styles.actionCtas}>
            <TrackedAnchor
              className={styles.ctaPrimary}
              href={toolkitHref}
              target={primaryCtaTarget}
              rel={primaryCtaRel}
              event="stripe_cta_click"
              eventProperties={{ location }}
            >
              {primaryCtaLabel}
              <span aria-hidden="true">→</span>
            </TrackedAnchor>
            <TrackedAnchor
              className={styles.ctaSecondary}
              href={samplePreviewPdf.href}
              download={samplePreviewPdf.filename}
              event="sample_pdf_click"
              eventProperties={{ location }}
            >
              Read the 5-page sample PDF
            </TrackedAnchor>
          </div>
          <p className={styles.actionFoot}>
            <strong>Instant download</strong> after Stripe checkout — no Drive wait,
            no onboarding call. Refund window opens the moment you receive the files.
          </p>
        </aside>
      </div>
    </section>
  );
}
