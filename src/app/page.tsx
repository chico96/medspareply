import Link from "next/link";
import {
  beforeAfter,
  faqItems,
  guarantee,
  samplePreviewPdf,
  trustBullets,
} from "@/lib/marketing";
import { getToolkitCheckoutUrl, isStripeCheckoutEnabled } from "@/lib/checkout";
import { FreeGenerator } from "./FreeGenerator";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { ToolkitProductVisual } from "./_components/ToolkitProductVisual";
import { TrackedAnchor, TrackedLink } from "./_components/TrackedLink";
import styles from "./page.module.css";

const TOOLKIT_CHECKOUT_URL = getToolkitCheckoutUrl();
const STRIPE_ENABLED = isStripeCheckoutEnabled();
const PRIMARY_CTA_LABEL = STRIPE_ENABLED
  ? "Equip your front desk · $49"
  : "Get the toolkit · $49";
const PRIMARY_CTA_REL = STRIPE_ENABLED ? "noopener noreferrer" : undefined;
const PRIMARY_CTA_TARGET = STRIPE_ENABLED ? "_blank" : undefined;
const CHECKOUT_ASSURANCE = STRIPE_ENABLED
  ? "Secure Stripe checkout. The 31-page PDF, six focused PDFs, and editable source files download the moment payment clears."
  : "Pilot checkout opens your email so we can confirm and send your access link within one business day.";

const trustStrip = [
  { label: "Private", value: "Generator runs in browser" },
  { label: "Specific", value: "Built for med spas only" },
  { label: "Safe", value: "HIPAA-aware wording" },
  { label: "Secure", value: "Stripe checkout · 7-day refund" },
];

const productFacts = [
  { value: "31", label: "page complete PDF" },
  { value: "6", label: "focused individual PDFs" },
  { value: "20", label: "paste-ready templates" },
  { value: "$49", label: "one-time" },
];

const tableOfContents = [
  {
    no: "01",
    pages: "5 pages",
    title: "Front-desk reply SOP",
    body: "20-minute setup, the do/don't list, the 7-question safety check, and the daily / weekly / monthly cadence — all on one printable file.",
  },
  {
    no: "02",
    pages: "7 pages · 20 templates",
    title: "Reply template bank",
    body: "Paste-ready replies for 5★ praise, staff shoutouts, treatment mentions, neutral 3★, wait-time and pricing complaints, and 1–2★ reviews.",
  },
  {
    no: "03",
    pages: "5 pages · 8-step triage",
    title: "Negative-review triage",
    body: "Pre-checks, lane decision, draft from template, run the safety check, post, log, and policy flag — with a sign-off block.",
  },
  {
    no: "04",
    pages: "4 pages · 4-week schedule",
    title: "GBP + content calendar",
    body: "Week-by-week schedule across GBP posts, review work, email, and SEO focus — drops straight into Google Sheets.",
  },
  {
    no: "05",
    pages: "5 pages · 13 prompts",
    title: "Local SEO + GBP prompts",
    body: "GBP post angles, a treatment-page outline, and city / neighborhood angles to pair with the 4-week calendar.",
  },
  {
    no: "06",
    pages: "5 pages",
    title: "Operating cadence",
    body: "The week, on a single page: daily 10-minute slot, daily 15-minute approval, the Tuesday 20-minute SOP, the Friday huddle.",
  },
];

const ladderSteps = [
  {
    label: "Free",
    sublabel: "in browser · no login",
    title: "Reply generator",
    body: "Paste a review, get a HIPAA-aware public reply plus a private follow-up. One reply at a time. No API key, no review text leaving your device.",
  },
  {
    label: "Free",
    sublabel: "5-page PDF · no email",
    title: "Sample preview PDF",
    body: "Cover, the 7-question pre-post safety check, three of the 20 templates, three steps of the negative-review triage, and two GBP prompt samples.",
  },
  {
    label: "$49",
    sublabel: "one-time · 7-day refund",
    title: "Full toolkit",
    body: "Polished 31-page complete PDF, six focused individual PDFs, and editable Markdown + CSV source files. Built for a 20-minute Tuesday cadence.",
  },
];

const resourceLinks = [
  {
    href: "/review-response-examples",
    eyebrow: "Examples",
    title: "Med spa review response examples (5★ to 1★)",
    blurb:
      "Public reply patterns for Hydrafacial, injectables, laser, peels, and membership visits at every star rating.",
  },
  {
    href: "/negative-review-response",
    eyebrow: "Playbook",
    title: "Negative med spa review response",
    blurb:
      "Step-by-step playbook for 1- and 2-star reviews — privacy-safe public phrasing and the private follow-up checklist.",
  },
  {
    href: "/local-seo-checklist",
    eyebrow: "Checklist",
    title: "Med spa local SEO checklist",
    blurb:
      "Foundations, weekly cadence, and monthly content moves that compound into stronger map-pack rankings.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteHeader homepageAnchors />

      {/* ===== HERO ===== */}
      <section className={styles.hero} id="top">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Med-spa review replies, done right
            </p>
            <h1 className={styles.heroHeadline}>
              <span>The front-desk system for</span>
              <span>med-spa review replies</span>
              <span>and local SEO.</span>
            </h1>
            <p className={styles.heroLede}>
              Free in-browser generator. Or a $49 toolkit your team can run in a 20-minute
              weekly Tuesday block — without confirming a treatment your guest didn&rsquo;t name.
            </p>

            <div className={styles.heroCtas}>
              <TrackedAnchor
                className={styles.ctaPrimary}
                href={TOOLKIT_CHECKOUT_URL}
                target={PRIMARY_CTA_TARGET}
                rel={PRIMARY_CTA_REL}
                event="stripe_cta_click"
                eventProperties={{ location: "home_hero" }}
              >
                {PRIMARY_CTA_LABEL}
                <span aria-hidden="true">→</span>
              </TrackedAnchor>
              <TrackedAnchor
                className={styles.ctaSecondary}
                href={samplePreviewPdf.href}
                download={samplePreviewPdf.filename}
                event="sample_pdf_click"
                eventProperties={{ location: "home_hero" }}
              >
                Read the 5-page sample PDF
              </TrackedAnchor>
              <TrackedAnchor
                className={styles.ctaGhost}
                href="#generator"
                event="free_generator_click"
                eventProperties={{ location: "home_hero" }}
              >
                Try the free generator
              </TrackedAnchor>
            </div>

            <dl className={styles.heroProof}>
              {productFacts.map((fact) => (
                <div key={fact.label} className={styles.heroProofItem}>
                  <dt>{fact.value}</dt>
                  <dd>{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Editorial product mockup */}
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.bookCover}>
              <div className={styles.bookCorner}>
                <span>SR</span>
                <em>Edition 01</em>
              </div>
              <div className={styles.bookSpine}>SpaReply</div>
              <div className={styles.bookTitle}>
                <p className={styles.bookKicker}>The med-spa</p>
                <p className={styles.bookHeadline}>
                  Review<br />&amp; Local SEO<br />Toolkit
                </p>
              </div>
              <div className={styles.bookMeta}>
                <span>31 pages · 6 PDFs</span>
                <span>Editable Markdown + CSV</span>
              </div>
              <div className={styles.bookSeal}>
                <span>$49</span>
                <em>one-time</em>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.reviewHead}>
                <div className={styles.reviewAvatar}>M</div>
                <div className={styles.reviewMeta}>
                  <strong>M. Reyes</strong>
                  <span>
                    <span className={styles.stars} aria-hidden="true">★★★★★</span>
                    <span className={styles.dotSep} aria-hidden="true">·</span>
                    Local guide
                  </span>
                </div>
                <span className={styles.reviewBadge}>5★ Hydrafacial</span>
              </div>
              <p className={styles.reviewQuote}>
                &ldquo;Loved my Hydrafacial with Mia. The spa felt calm and my skin looked
                refreshed before my event.&rdquo;
              </p>
              <div className={styles.reviewReply}>
                <span className={styles.reviewReplyLabel}>
                  <span className={styles.reviewReplyDot} />
                  Reply from owner · toolkit-quality
                </span>
                <p>
                  Thank you for trusting us with your visit. Mia and the team appreciated
                  caring for you — we look forward to welcoming you back soon.
                </p>
                <ul className={styles.reviewReplyChecks}>
                  <li>No treatment specifics confirmed</li>
                  <li>No outcome promises</li>
                  <li>Under 35 words</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className={styles.trustStrip} aria-label="Why med spas trust SpaReply">
        {trustStrip.map((item) => (
          <div key={item.label} className={styles.trustItem}>
            <span className={styles.trustLabel}>{item.label}</span>
            <span className={styles.trustValue}>{item.value}</span>
          </div>
        ))}
      </section>

      {/* ===== PRODUCT EDITORIAL ===== */}
      <section className={styles.product} aria-labelledby="product-title">
        <div className={styles.productCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            The product
          </p>
          <h2 id="product-title" className={styles.sectionHeadline}>
            One toolkit. Six pieces. Built like a clinic SOP — not a Notion template.
          </h2>
          <p className={styles.sectionLede}>
            Every page printable. Every section paste-ready. The complete pack reads
            cover-to-cover on a Sunday; the front desk pulls a single PDF between guests.
          </p>
          <ul className={styles.productList}>
            {trustBullets.map((bullet) => (
              <li key={bullet}>
                <span className={styles.productCheck} aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className={styles.productCtas}>
            <TrackedAnchor
              className={styles.ctaPrimary}
              href={TOOLKIT_CHECKOUT_URL}
              target={PRIMARY_CTA_TARGET}
              rel={PRIMARY_CTA_REL}
              event="stripe_cta_click"
              eventProperties={{ location: "home_product" }}
            >
              {PRIMARY_CTA_LABEL}
              <span aria-hidden="true">→</span>
            </TrackedAnchor>
            <TrackedLink
              className={styles.ctaTextLink}
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "home_product" }}
            >
              See sample wording from each pillar →
            </TrackedLink>
          </div>
        </div>

        <aside className={styles.specSheet} aria-label="Toolkit spec sheet">
          <header className={styles.specHead}>
            <span>Spec sheet</span>
            <span>SR · 2026.01</span>
          </header>
          <dl className={styles.specRows}>
            <div>
              <dt>Format</dt>
              <dd>PDF + Markdown + CSV</dd>
            </div>
            <div>
              <dt>Complete pack</dt>
              <dd>31 pages · printable</dd>
            </div>
            <div>
              <dt>Individual files</dt>
              <dd>6 focused PDFs</dd>
            </div>
            <div>
              <dt>Source files</dt>
              <dd>5 Markdown · 1 CSV</dd>
            </div>
            <div>
              <dt>Templates</dt>
              <dd>20 paste-ready (5★ → 1★)</dd>
            </div>
            <div>
              <dt>Cadence</dt>
              <dd>20 min / week</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>Instant after Stripe</dd>
            </div>
            <div>
              <dt>Refund</dt>
              <dd>7-day satisfaction</dd>
            </div>
          </dl>
          <footer className={styles.specFoot}>
            <strong>$49</strong>
            <span>one-time · all updates included during launch</span>
          </footer>
        </aside>
      </section>

      {/* ===== PRODUCT VISUAL — bespoke PDF pack ===== */}
      <ToolkitProductVisual
        toolkitHref={TOOLKIT_CHECKOUT_URL}
        primaryCtaLabel={PRIMARY_CTA_LABEL}
        primaryCtaTarget={PRIMARY_CTA_TARGET}
        primaryCtaRel={PRIMARY_CTA_REL}
        location="home_visual"
      />

      {/* ===== DARK SHOWROOM — TOC ===== */}
      <section className={styles.showroom} aria-labelledby="showroom-title">
        <div className={styles.showroomHeader}>
          <p className={`${styles.eyebrow} ${styles.eyebrowOnDark}`}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Inside the 31 pages
          </p>
          <h2 id="showroom-title" className={styles.showroomHeadline}>
            Six pillars. Each one a working file your front desk can run with on Monday.
          </h2>
          <p className={styles.showroomLede}>
            Page counts match the actual PDF. No fluff pages, no padding.
          </p>
        </div>

        <ol className={styles.tocList}>
          {tableOfContents.map((entry) => (
            <li key={entry.title} className={styles.tocItem}>
              <div className={styles.tocLeft}>
                <span className={styles.tocNo}>{entry.no}</span>
                <span className={styles.tocPages}>{entry.pages}</span>
              </div>
              <div className={styles.tocBody}>
                <strong>{entry.title}</strong>
                <p>{entry.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.showroomCtas}>
          <TrackedAnchor
            className={styles.ctaPrimaryOnDark}
            href={TOOLKIT_CHECKOUT_URL}
            target={PRIMARY_CTA_TARGET}
            rel={PRIMARY_CTA_REL}
            event="stripe_cta_click"
            eventProperties={{ location: "home_showroom" }}
          >
            {PRIMARY_CTA_LABEL}
            <span aria-hidden="true">→</span>
          </TrackedAnchor>
          <TrackedLink
            className={styles.ctaTextLinkDark}
            href="/toolkit-preview"
            event="toolkit_preview_click"
            eventProperties={{ location: "home_showroom" }}
          >
            See sample wording from each pillar →
          </TrackedLink>
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section className={styles.beforeAfter} aria-labelledby="beforeafter-title">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Same review · two replies
          </p>
          <h2 id="beforeafter-title" className={styles.sectionHeadline}>
            A reply your guests will actually believe.
          </h2>
          <p className={styles.sectionLede}>
            Generic emoji-stuffed replies feel like spam. Toolkit-quality replies sound
            like a calm, well-run clinic — without making outcome promises.
          </p>
        </header>

        <div className={styles.baGrid}>
          <article className={styles.baCard} data-variant="before">
            <header>
              <span className={styles.baTag}>Before</span>
              <span className={styles.baSub}>Typical front-desk reply</span>
            </header>
            <p className={styles.baReview}>&ldquo;{beforeAfter.reviewText}&rdquo;</p>
            <div className={styles.baReply}>
              <p>{beforeAfter.before}</p>
            </div>
            <ul className={styles.baFlags} data-tone="warn">
              <li>Confirms treatment publicly</li>
              <li>Reads like marketing, not care</li>
              <li>Implies an outcome</li>
            </ul>
          </article>
          <article className={styles.baCard} data-variant="after">
            <header>
              <span className={styles.baTag}>After</span>
              <span className={styles.baSub}>From the toolkit</span>
            </header>
            <p className={styles.baReview}>&ldquo;{beforeAfter.reviewText}&rdquo;</p>
            <div className={styles.baReply}>
              <p>{beforeAfter.after}</p>
            </div>
            <ul className={styles.baFlags} data-tone="ok">
              <li>No treatment specifics confirmed</li>
              <li>No outcome promises</li>
              <li>Brief, calm, on-brand</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ===== FREE GENERATOR ===== */}
      <FreeGenerator
        toolkitHref={TOOLKIT_CHECKOUT_URL}
        toolkitLabel={PRIMARY_CTA_LABEL}
        toolkitTarget={PRIMARY_CTA_TARGET}
        toolkitRel={PRIMARY_CTA_REL}
      />

      {/* ===== LADDER ===== */}
      <section className={styles.ladder} aria-labelledby="ladder-title">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Free → free → $49
          </p>
          <h2 id="ladder-title" className={styles.sectionHeadline}>
            Three ways to use SpaReply. Only one is paid.
          </h2>
          <p className={styles.sectionLede}>
            Try the free generator on a real review. Skim the 5-page sample. Buy the
            toolkit only if the wording is already obviously better than what your front
            desk posts today.
          </p>
        </header>

        <ol className={styles.ladderList}>
          {ladderSteps.map((step, index) => (
            <li key={step.title} className={styles.ladderItem}>
              <div className={styles.ladderRow}>
                <span className={styles.ladderNo}>{`0${index + 1}`}</span>
                <div className={styles.ladderTags}>
                  <span className={styles.ladderTag}>{step.label}</span>
                  <span className={styles.ladderSub}>{step.sublabel}</span>
                </div>
              </div>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== PRICING ===== */}
      <section className={styles.pricing} id="toolkit" aria-labelledby="pricing-title">
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCopy}>
            <p className={`${styles.eyebrow} ${styles.eyebrowOnDark}`}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Pricing
            </p>
            <h2 id="pricing-title" className={styles.pricingHeadline}>
              The Med Spa Review + Local SEO Toolkit.
            </h2>
            <p className={styles.pricingLede}>
              One-time purchase. Instant download. Built for a front-desk lead to run
              a 20-minute weekly cadence — without an agency, a SaaS subscription, or
              an AI key.
            </p>
            <ul className={styles.pricingIncludes}>
              <li><span className={styles.pricingDot} />31-page polished SpaReply complete PDF</li>
              <li><span className={styles.pricingDot} />Six focused individual PDFs</li>
              <li><span className={styles.pricingDot} />Editable Markdown + CSV source files</li>
              <li><span className={styles.pricingDot} />20 paste-ready review-reply templates</li>
              <li><span className={styles.pricingDot} />HIPAA-aware safety checklist + GBP prompts</li>
              <li><span className={styles.pricingDot} />4-week content calendar + operating cadence</li>
            </ul>
          </div>

          <aside className={styles.pricingCard}>
            <div className={styles.pricingPriceRow}>
              <strong className={styles.pricingPrice}>$49</strong>
              <span className={styles.pricingPriceSub}>one-time</span>
            </div>
            <p className={styles.pricingTagline}>
              The complete PDF, six focused PDFs, and editable source files —
              instant download after Stripe checkout.
            </p>
            <TrackedAnchor
              className={styles.pricingCta}
              href={TOOLKIT_CHECKOUT_URL}
              target={PRIMARY_CTA_TARGET}
              rel={PRIMARY_CTA_REL}
              event="stripe_cta_click"
              eventProperties={{ location: "home_pricing_card" }}
            >
              {PRIMARY_CTA_LABEL}
              <span aria-hidden="true">→</span>
            </TrackedAnchor>
            <TrackedLink
              className={styles.pricingCtaSecondary}
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "home_pricing_card" }}
            >
              Preview what is inside →
            </TrackedLink>
            <p className={styles.pricingNote}>{CHECKOUT_ASSURANCE}</p>
            <div className={styles.pricingPolicies}>
              <span>Policies</span>
              <Link href="/refund-policy">Refund</Link>
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </aside>
        </div>

        <div className={styles.guarantee}>
          <div className={styles.guaranteeMark} aria-hidden="true">
            <span>7</span>
            <em>day</em>
          </div>
          <div>
            <strong>{guarantee.headline}</strong>
            <p>{guarantee.detail}</p>
          </div>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section className={styles.resources} id="resources" aria-labelledby="resources-title">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Free resources
          </p>
          <h2 id="resources-title" className={styles.sectionHeadline}>
            Playbooks the launch clinics actually use.
          </h2>
          <p className={styles.sectionLede}>
            Three evergreen guides built from real review patterns we see across med spas.
            Skim them solo, or pair each one with the generator above.
          </p>
        </header>
        <ul className={styles.resourceList}>
          {resourceLinks.map((resource) => (
            <li key={resource.href}>
              <Link href={resource.href} className={styles.resourceRow}>
                <span className={styles.resourceEyebrow}>{resource.eyebrow}</span>
                <strong>{resource.title}</strong>
                <p>{resource.blurb}</p>
                <em>Read the guide →</em>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== FAQ ===== */}
      <section className={styles.faq} aria-labelledby="faq-title">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            FAQ
          </p>
          <h2 id="faq-title" className={styles.sectionHeadline}>
            Questions med-spa teams ask first.
          </h2>
        </header>
        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className={styles.faqIcon} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className={styles.finalCta} id="waitlist" aria-labelledby="final-title">
        <div className={styles.finalCtaInner}>
          <p className={`${styles.eyebrow} ${styles.eyebrowOnDark}`}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Get started
          </p>
          <h2 id="final-title" className={styles.finalHeadline}>
            Hand your front desk a system, not a vibe.
          </h2>
          <p className={styles.finalLede}>
            $49 one-time. 7-day satisfaction refund.{" "}
            {STRIPE_ENABLED
              ? "Pay via secure Stripe checkout — the PDFs and editable source files download immediately."
              : "Email replies come from a human at hello@spareply.com — usually within one business day."}
          </p>
          <div className={styles.finalCtas}>
            <TrackedAnchor
              className={styles.ctaPrimaryOnDark}
              href={TOOLKIT_CHECKOUT_URL}
              target={PRIMARY_CTA_TARGET}
              rel={PRIMARY_CTA_REL}
              event="stripe_cta_click"
              eventProperties={{ location: "home_final_cta" }}
            >
              {PRIMARY_CTA_LABEL}
              <span aria-hidden="true">→</span>
            </TrackedAnchor>
            <TrackedAnchor
              className={styles.ctaGhostOnDark}
              href="#generator"
              event="free_generator_click"
              eventProperties={{ location: "home_final_cta" }}
            >
              Try the free generator first
            </TrackedAnchor>
          </div>
          <p className={styles.finalContact}>
            Have a question first?{" "}
            <a href="mailto:hello@spareply.com?subject=Question%20about%20the%20SpaReply%20toolkit">
              hello@spareply.com
            </a>{" "}
            — a human reads every email.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
