import Link from "next/link";
import {
  audiences,
  beforeAfter,
  contentExamples,
  faqItems,
  guarantee,
  toolkitDeliverables,
  trustBullets,
} from "@/lib/marketing";
import { getToolkitCheckoutUrl, isStripeCheckoutEnabled } from "@/lib/checkout";
import { FreeGenerator } from "./FreeGenerator";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import styles from "./page.module.css";

const TOOLKIT_CHECKOUT_URL = getToolkitCheckoutUrl();
const STRIPE_ENABLED = isStripeCheckoutEnabled();
const PRIMARY_CTA_LABEL = STRIPE_ENABLED
  ? "Buy the $49 toolkit"
  : "Get the $49 toolkit";
const PRIMARY_CTA_REL = STRIPE_ENABLED ? "noopener noreferrer" : undefined;
const PRIMARY_CTA_TARGET = STRIPE_ENABLED ? "_blank" : undefined;
const CHECKOUT_ASSURANCE = STRIPE_ENABLED
  ? "Secure Stripe checkout · the polished PDF pack downloads instantly the moment payment clears."
  : "Pilot checkout: opens your email so we can confirm and send your access link within one business day.";

const heroQuickFacts = [
  { label: "PDF pack pages", value: "31" },
  { label: "Focused PDFs", value: "6" },
  { label: "Refund window", value: "7 days" },
  { label: "Launch price", value: "$49" },
];

const instantDelivery = [
  {
    label: "Complete pack",
    title: "31-page SpaReply PDF",
    body: "One branded, printable PDF covering the SOP, template bank, negative-review triage, GBP calendar, local SEO prompts, and operating cadence — designed to be read in one sitting.",
  },
  {
    label: "Individual files",
    title: "Six focused PDFs",
    body: "The same six pieces split into print-and-tape PDFs so the front desk, practice manager, and privacy officer can each grab the page they need without scrolling the full pack.",
  },
  {
    label: "Editable sources",
    title: "Markdown + CSV originals",
    body: "Five Markdown files and the 4-week content calendar CSV — open in any editor or import into Google Docs / Sheets so your clinic can fork the wording into its own shared drive.",
  },
];

const resources = [
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

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <div className={styles.pill}>
            Launch toolkit · review replies + local SEO for med spas
          </div>
          <h1>
            Med-spa review replies your front desk can copy, customize, and post safely.
          </h1>
          <p>
            Use the free browser-based generator for quick, HIPAA-aware replies. Or buy the{" "}
            <strong>$49 launch toolkit</strong> and download the polished{" "}
            <strong>31-page SpaReply PDF pack</strong> the moment Stripe confirms — plus six
            focused individual PDFs for the front desk and editable Markdown / CSV source
            files for your shared drive. 7-day refund.
          </p>
          <div className={styles.ctas}>
            <a
              className={styles.primaryCta}
              href={TOOLKIT_CHECKOUT_URL}
              target={PRIMARY_CTA_TARGET}
              rel={PRIMARY_CTA_REL}
            >
              {PRIMARY_CTA_LABEL}
            </a>
            <Link className={styles.secondaryCta} href="/toolkit-preview">
              Preview what is inside
            </Link>
            <a className={styles.secondaryCta} href="#generator">
              Try the free generator
            </a>
          </div>
          <ul className={styles.trustList} aria-label="Why med spas trust SpaReply">
            {trustBullets.map((bullet) => (
              <li key={bullet}>
                <span aria-hidden="true">✓</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <aside className={styles.heroCard} aria-label="Sample reply">
          <div className={styles.cardHeader}>Sample · 5★ Hydrafacial</div>
          <div className={styles.reviewBubble}>
            “Loved my Hydrafacial with Mia. The spa felt calm and my skin looked refreshed
            before my event.”
          </div>
          <div className={styles.replyPreview}>
            <span>Public reply (toolkit-quality)</span>
            <p>
              Thank you for trusting us with your visit. Mia and the team appreciated caring
              for you — we look forward to welcoming you back soon.
            </p>
            <div className={styles.heroFacts}>
              {heroQuickFacts.map((fact) => (
                <div key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <FreeGenerator
        toolkitHref={TOOLKIT_CHECKOUT_URL}
        toolkitLabel={PRIMARY_CTA_LABEL}
        toolkitTarget={PRIMARY_CTA_TARGET}
        toolkitRel={PRIMARY_CTA_REL}
      />

      <section className={styles.beforeAfter} aria-labelledby="before-after-title">
        <div className={styles.sectionEyebrow}>Before / after</div>
        <h2 id="before-after-title">A reply your guests will actually believe.</h2>
        <p className={styles.beforeAfterIntro}>
          Generic emoji-stuffed replies feel like spam. Toolkit-quality replies sound like a
          calm, well-run clinic — without making outcome promises.
        </p>
        <div className={styles.beforeAfterGrid}>
          <article className={styles.beforeCard}>
            <span>Before</span>
            <p className={styles.beforeAfterReview}>“{beforeAfter.reviewText}”</p>
            <div className={styles.beforeAfterReply}>
              <strong>Typical reply</strong>
              <p>{beforeAfter.before}</p>
            </div>
          </article>
          <article className={styles.afterCard}>
            <span>After</span>
            <p className={styles.beforeAfterReview}>“{beforeAfter.reviewText}”</p>
            <div className={styles.beforeAfterReply}>
              <strong>Toolkit reply</strong>
              <p>{beforeAfter.after}</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.offer} id="toolkit">
        <div className={styles.offerHeading}>
          <div className={styles.sectionEyebrow}>What you get for $49</div>
          <h2>The MedSpa Review + Local SEO launch toolkit.</h2>
          <p>
            Six tangible deliverables your team can use the day they receive them — no
            onboarding call, no SaaS subscription, no AI key required.
          </p>
        </div>
        <div
          className={styles.instantDelivery}
          aria-labelledby="instant-delivery-title"
        >
          <div className={styles.instantDeliveryHeader}>
            <span className={styles.instantDeliveryEyebrow}>Instant delivery</span>
            <strong id="instant-delivery-title">
              Three downloads land the moment Stripe confirms.
            </strong>
            <p>
              No onboarding call, no AI key, no SaaS login. Buyers go straight to a download
              page with the PDFs and editable source files ready to grab.
            </p>
          </div>
          <ul className={styles.instantDeliveryList}>
            {instantDelivery.map((item) => (
              <li key={item.title}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.offerLayout}>
          <div className={styles.deliverableTable}>
            {toolkitDeliverables.map((item) => (
              <article key={item.title} className={styles.deliverableRow}>
                <span className={styles.deliverableCategory}>{item.category}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
                <span className={styles.deliverableFormat}>{item.format}</span>
              </article>
            ))}
          </div>
          <aside className={styles.priceCard}>
            <span>Launch price</span>
            <strong>$49</strong>
            <p>
              One-time. The 31-page PDF pack, six focused PDFs, and the editable source
              files download instantly. Free updates during launch.
            </p>
            <a
              href={TOOLKIT_CHECKOUT_URL}
              target={PRIMARY_CTA_TARGET}
              rel={PRIMARY_CTA_REL}
            >
              {PRIMARY_CTA_LABEL}
            </a>
            <Link className={styles.priceCardSecondary} href="/toolkit-preview">
              Preview what is inside →
            </Link>
            <small>{CHECKOUT_ASSURANCE}</small>
          </aside>
        </div>
        <div className={styles.guaranteeBar}>
          <div>
            <span className={styles.guaranteeBadge}>Risk reversal</span>
            <strong>{guarantee.headline}</strong>
          </div>
          <p>{guarantee.detail}</p>
        </div>
      </section>

      <section className={styles.resources} id="resources">
        <div>
          <div className={styles.sectionEyebrow}>Free resources</div>
          <h2>Playbooks the launch clinics actually use.</h2>
          <p>
            Three evergreen guides built from real review patterns we see across med spas.
            Skim them solo, or pair each one with the generator above.
          </p>
        </div>
        <div className={styles.resourceGrid}>
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className={styles.resourceCard}>
              <span>{resource.eyebrow}</span>
              <strong>{resource.title}</strong>
              <p>{resource.blurb}</p>
              <em>Read the guide →</em>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.audience}>
        <div>
          <div className={styles.sectionEyebrow}>Who it is for</div>
          <h2>Built for the people who actually answer the reviews.</h2>
        </div>
        <div className={styles.audienceGrid}>
          {audiences.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.problemSolution}>
        <div className={styles.problemCard}>
          <span>Problem</span>
          <h2>Every unanswered review is a missed local SEO signal — and a quiet trust leak.</h2>
          <p>
            Med spas juggle clinical nuance, privacy constraints, and high guest expectations.
            Generic replies feel robotic, delayed replies erode trust, and one wrong word can
            confirm protected health information you never meant to share.
          </p>
        </div>
        <div className={styles.solutionCard}>
          <span>Solution</span>
          <h2>Fast replies with guardrails your team can actually use on a Tuesday.</h2>
          <p>
            SpaReply gives you service-aware templates, HIPAA-aware wording reminders, and
            local SEO prompts so reputation work becomes a 20-minute weekly habit — not a
            weekend project for the owner.
          </p>
        </div>
      </section>

      <section className={styles.examples}>
        <div>
          <div className={styles.sectionEyebrow}>Inside the local SEO prompts</div>
          <h2>Turn review insights into local search assets.</h2>
        </div>
        <div className={styles.exampleGrid}>
          {contentExamples.map((example) => (
            <article key={example.title}>
              <span>{example.title}</span>
              <p>{example.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.safety}>
        <div className={styles.sectionEyebrow}>Safety + compliance</div>
        <h2>HIPAA-aware by design — but never legal advice.</h2>
        <ul className={styles.safetyList}>
          <li>
            <strong>Reminders, not legal review.</strong> The toolkit flags wording that risks
            confirming protected health information, but final compliance decisions still
            belong with your provider and counsel.
          </li>
          <li>
            <strong>No outcome promises.</strong> Templates avoid guaranteeing medical or
            cosmetic results — even when the guest praises them in a 5-star review.
          </li>
          <li>
            <strong>Private by default.</strong> The generator never sends review text off
            your device. The toolkit lives in your own Google Drive.
          </li>
          <li>
            <strong>Not medical advice.</strong> Clinical questions get routed to a licensed
            provider via the included escalation script.
          </li>
        </ul>
      </section>

      <section className={styles.faq}>
        <div className={styles.sectionEyebrow}>FAQ</div>
        <h2>Questions med-spa teams ask first.</h2>
        <div className={styles.faqGrid}>
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} id="waitlist">
        <div>
          <div className={styles.sectionEyebrow}>Get started</div>
          <h2>Hand your front desk a system, not a vibe.</h2>
          <p>
            $49 one-time. 7-day refund.{" "}
            {STRIPE_ENABLED
              ? "Pay via secure Stripe checkout and the polished 31-page PDF pack, six focused PDFs, and editable source files download immediately."
              : "Email replies come from a human at hello@spareply.com — usually within one business day."}
          </p>
          <div className={styles.ctas}>
            <a
              className={styles.primaryCtaLight}
              href={TOOLKIT_CHECKOUT_URL}
              target={PRIMARY_CTA_TARGET}
              rel={PRIMARY_CTA_REL}
            >
              {PRIMARY_CTA_LABEL}
            </a>
            <a className={styles.secondaryCtaDark} href="#generator">
              Try the free generator first
            </a>
          </div>
        </div>
        <form
          className={styles.waitlistForm}
          action="mailto:hello@spareply.com"
          method="post"
          encType="text/plain"
          aria-label="Ask a question before you buy"
        >
          <strong>Have a question first?</strong>
          <input aria-label="Name" name="name" placeholder="Your name" />
          <input aria-label="Clinic email" name="email" placeholder="Clinic email" type="email" />
          <input aria-label="Med spa city" name="city" placeholder="City / market" />
          <button type="submit">Send a question</button>
          <small>
            Opens your email client so you stay in control of what you send. No CRM,
            no marketing automation.
          </small>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
