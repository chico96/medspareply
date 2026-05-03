import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./page.module.css";

const SUPPORT_MAILTO =
  "mailto:hello@spareply.com?subject=Toolkit%20access%20%E2%80%94%20I%20just%20bought%20the%20%2449%20bundle";
const REFUND_MAILTO =
  "mailto:hello@spareply.com?subject=Refund%20request%20%E2%80%94%20%2449%20toolkit";

export const metadata: Metadata = {
  title: "Purchase confirmed · MedSpa Review + Local SEO Toolkit | SpaReply",
  description:
    "Your $49 SpaReply Med Spa Review + Local SEO Toolkit purchase is confirmed. Check your email for the Google Drive access link, then start with the negative-review scripts and the 20-minute weekly SOP.",
  alternates: { canonical: "/success" },
  robots: { index: false, follow: false },
};

const deliverySteps = [
  {
    label: "Step 1 · Inbox",
    title: "Check your email for the Google Drive link",
    body: "Stripe sends a payment receipt and a separate access email with your Google Drive folder link. Both usually arrive within a few minutes. Search your inbox for SpaReply or hello@spareply.com — and check the promotions / spam folder if it isn't visible.",
  },
  {
    label: "Step 2 · Open the folder",
    title: "Open the toolkit in Google Drive",
    body: "Everything inside is editable. Make a copy into your clinic's own Drive so the front desk can edit templates, fill in the tracker, and adapt the SOP to your providers and services.",
  },
];

const nextSteps = [
  {
    title: "Open the toolkit folder and skim the README first",
    body: "The README sets the order of operations: read the HIPAA-aware safety checklist, then the 5★–1★ template index, then the negative-review playbook. Two minutes here saves the front desk from hunting later.",
  },
  {
    title: "Start with the negative-review scripts",
    body: "If you have any open 1- or 2-star reviews, use the negative-review playbook today. The default public reply, the private follow-up SOP, and the internal tracker are the highest-leverage pieces in the bundle.",
  },
  {
    title: "Schedule the 20-minute weekly SOP",
    body: "Block a recurring Tuesday calendar slot for the front-desk lead. The SOP covers triage, drafting, the safety check, posting, and logging — built so review work fits inside one cup of coffee, not the whole weekend.",
  },
  {
    title: "Then move to GBP and the 90-day calendar",
    body: "Once replies are flowing, pull the Google Business Profile prompt pack and the 13-week content calendar. Pair one GBP post per week with the seasonal angle — the local SEO compounding starts there.",
  },
];

const safetyNotes = [
  {
    title: "Edit every template before posting publicly.",
    body: "Templates are starting points. Replace bracketed placeholders with your clinic's wording, drop any phrasing that would confirm a treatment the guest didn't already mention, and have a second person read it before it goes live.",
  },
  {
    title: "HIPAA-aware editorial guidance, not legal advice.",
    body: "SpaReply is HIPAA-aware — designed to help your team avoid confirming protected health information in public replies. It is not HIPAA-compliant software, not a BAA, and not a substitute for your privacy officer or counsel.",
  },
  {
    title: "Not medical advice.",
    body: "Clinical questions in reviews get routed to a licensed provider via the included escalation script. Never diagnose, prescribe, or promise outcomes in a public reply.",
  },
];

export default function SuccessPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />

      <section className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.eyebrow}>Purchase confirmed</div>
          <h1>You&rsquo;re in. The toolkit is on its way to your inbox.</h1>
          <p>
            Thank you for buying the <strong>SpaReply Med Spa Review + Local SEO Toolkit</strong>.
            Your $49 one-time purchase is confirmed. Below: where to find your access link,
            what to open first, and how to reach a human if anything looks off.
          </p>

          <div className={styles.summary}>
            <div>
              <span className={styles.summaryEyebrow}>Order</span>
              <strong>SpaReply MedSpa Review + Local SEO Toolkit</strong>
              <p>
                Google Drive folder · 120 reply templates, negative-review playbook,
                HIPAA-aware safety checklist, GBP prompts, weekly SOP, 90-day content calendar.
              </p>
            </div>
            <div className={styles.summaryPrice}>
              <span>One-time</span>
              <em>$49</em>
              <small>Paid via Stripe · 7-day refund.</small>
            </div>
          </div>

          <Link href="/toolkit" className={styles.toolkitCard}>
            <div className={styles.toolkitCardBody}>
              <span className={styles.toolkitCardTag}>Start now · while the Drive email arrives</span>
              <strong>Open the buyer toolkit</strong>
              <p>
                The 20-minute setup SOP, HIPAA-aware reply rules, 20+ paste-ready review
                replies, the negative-review triage checklist, 13 GBP prompts, and the
                4-week content calendar — already live on this site, no Drive access
                needed.
              </p>
            </div>
            <span className={styles.toolkitCardArrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="delivery">
        <div className={styles.sectionEyebrow}>Delivery</div>
        <h2 id="delivery">How to find your toolkit access link.</h2>
        <p>
          Two emails are on their way: a Stripe payment receipt and a separate access email
          from <a href="mailto:hello@spareply.com">hello@spareply.com</a> with your
          Google Drive link.
        </p>

        <div className={styles.deliveryGrid}>
          {deliverySteps.map((step) => (
            <article key={step.title} className={styles.deliveryCard}>
              <span>{step.label}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </article>
          ))}
          <article className={styles.deliveryCard}>
            <span>If it&rsquo;s missing</span>
            <strong>Don&rsquo;t see it after a few minutes?</strong>
            <p>
              Email{" "}
              <a href={SUPPORT_MAILTO}>hello@spareply.com</a>{" "}
              with the email address you used at checkout. We&rsquo;ll resend the access
              link manually — usually within one business day, often much sooner.
            </p>
          </article>
          <article className={styles.deliveryCard}>
            <span>Keep it</span>
            <strong>Save the Drive link somewhere your team can find it</strong>
            <p>
              Pin the Google Drive folder in your front-desk shared drive or your clinic&rsquo;s
              SOP wiki. Free updates ship into the same folder during the launch window — no
              new links to chase.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="next-steps">
        <div className={styles.sectionEyebrow}>Suggested next steps</div>
        <h2 id="next-steps">A 30-minute path to your first safer reply.</h2>
        <p>
          You don&rsquo;t need to read the whole toolkit today. This order gets your team a
          working reply cadence without overwhelming the front desk.
        </p>

        <ol className={styles.steps}>
          {nextSteps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepIndex}>{index + 1}</span>
              <div className={styles.stepBody}>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="safety">
        <div className={styles.sectionEyebrow}>Safe-use note</div>
        <h2 id="safety">Read this before the first public reply goes live.</h2>
        <p>
          The toolkit is built to help your team reply faster without confirming protected
          health information. Three reminders before anyone hits &ldquo;Post reply&rdquo;:
        </p>

        <ul className={styles.safety}>
          {safetyNotes.map((note) => (
            <li key={note.title}>
              <strong>{note.title}</strong>
              {note.body}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="support">
        <div className={styles.sectionEyebrow}>Support &amp; refund</div>
        <h2 id="support">A real human reads every email.</h2>
        <p>
          One inbox handles support, access issues, and refunds. No ticket portal, no chatbot
          queue.
        </p>

        <div className={styles.support}>
          <article className={styles.supportCard}>
            <span>Support</span>
            <strong>Access link, files, or anything missing</strong>
            <p>
              Email <a href={SUPPORT_MAILTO}>hello@spareply.com</a> with the email
              address you used at checkout. We&rsquo;ll resend the Drive link or sort the
              issue out — usually same day.
            </p>
          </article>
          <article className={styles.supportCard}>
            <span>Refund</span>
            <strong>7-day no-friction refund</strong>
            <p>
              Use the toolkit for a week. If it doesn&rsquo;t make replying to reviews faster
              and safer for your front desk, email{" "}
              <a href={REFUND_MAILTO}>hello@spareply.com</a>{" "}
              and we&rsquo;ll refund the $49. No forms, no &ldquo;why are you leaving&rdquo;
              survey.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta">
        <div className={styles.ctaEyebrow}>What now</div>
        <h2 id="cta">Open the access email, then come back here if you need us.</h2>
        <p>
          Bookmark this page or the homepage for the free generator. The Drive folder is
          where the day-to-day work lives; the rest of the site is here when you want a
          refresher or a new resource.
        </p>
        <div className={styles.ctaActions}>
          <Link className={styles.ctaPrimary} href="/toolkit">
            Open the buyer toolkit
          </Link>
          <a className={styles.ctaSecondary} href={SUPPORT_MAILTO}>
            Email hello@spareply.com
          </a>
        </div>
      </section>

      <p className={styles.disclaimer}>
        SpaReply is informational. The toolkit is HIPAA-aware editorial guidance, not legal,
        medical, or compliance advice. Final compliance decisions belong with your provider,
        privacy officer, and counsel.
      </p>

      <SiteFooter />
    </main>
  );
}
