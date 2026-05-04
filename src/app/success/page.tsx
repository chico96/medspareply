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
    "Your $49 SpaReply Med Spa Review + Local SEO Toolkit purchase is confirmed. Download the polished 31-page PDF, six focused PDFs, and editable Markdown / CSV source files directly on this page, then start with the negative-review scripts and the 20-minute weekly SOP.",
  alternates: { canonical: "/success" },
  robots: { index: false, follow: false },
};

const deliverySteps = [
  {
    label: "Step 1 · Download the PDFs",
    title: "Grab the toolkit PDFs from this page",
    body: "Use the download list above. Start with the 31-page complete pack if you want one printable file, or grab the six focused PDFs for the front-desk SOP, template bank, negative-review triage, GBP + 4-week content calendar, local SEO prompts, and the operating cadence.",
  },
  {
    label: "Step 2 · Save the editable sources",
    title: "Open /toolkit for the Markdown + CSV sources",
    body: "The buyer page at /toolkit lists the editable Markdown and CSV originals next to each PDF. Download them once and copy the wording into your clinic's own shared drive so the front desk can edit templates, fill in the tracker, and adapt the SOP to your providers and services.",
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
    title: "Then move to GBP and the 4-week calendar",
    body: "Once replies are flowing, pull the Google Business Profile prompt pack and the 4-week content calendar. Pair one GBP post per week with the seasonal angle — the local SEO compounding starts there.",
  },
];

const safetyNotes = [
  {
    title: "Edit every template before posting publicly.",
    body: "Templates are starting points. Replace bracketed placeholders with your clinic's wording, drop any phrasing that would confirm a treatment the guest didn't already mention, and have a second person read it before it goes live.",
  },
  {
    title: "HIPAA-aware editorial guidance, not legal advice.",
    body: "SpaReply is HIPAA-aware — designed to help your team avoid confirming protected health information in public replies. It does not provide legal, privacy, or compliance advice; have your privacy officer or counsel review your clinic’s policy before posting.",
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
          <h1>You&rsquo;re in. Download the toolkit below.</h1>
          <p>
            Thank you for buying the <strong>SpaReply Med Spa Review + Local SEO Toolkit</strong>.
            Your $49 one-time purchase is confirmed. The PDFs are ready below — grab them now,
            then open the buyer toolkit page for the editable Markdown and CSV source files.
          </p>

          <div className={styles.summary}>
            <div>
              <span className={styles.summaryEyebrow}>Order</span>
              <strong>SpaReply MedSpa Review + Local SEO Toolkit</strong>
              <p>
                Direct download · 20 paste-ready reply templates, negative-review playbook,
                HIPAA-aware safety checklist, GBP prompts, weekly SOP, 4-week content calendar.
              </p>
            </div>
            <div className={styles.summaryPrice}>
              <span>One-time</span>
              <em>$49</em>
              <small>Paid via Stripe · 7-day satisfaction refund.</small>
            </div>
          </div>

          <Link href="/toolkit" className={styles.toolkitCard}>
            <div className={styles.toolkitCardBody}>
              <span className={styles.toolkitCardTag}>Open next · editable sources live here</span>
              <strong>Open the buyer toolkit</strong>
              <p>
                The 20-minute setup SOP, HIPAA-aware reply rules, 20 paste-ready review
                replies, the negative-review triage checklist, 13 GBP prompts, and the
                4-week content calendar — plus every editable Markdown and CSV source
                file ready to download.
              </p>
            </div>
            <span className={styles.toolkitCardArrow} aria-hidden="true">→</span>
          </Link>

          <div className={styles.downloadsCard}>
            <div className={styles.downloadsCardBody}>
              <span className={styles.downloadsCardTag}>PDF toolkit · download now</span>
              <strong>Grab the polished PDF pack — direct download, no email wait.</strong>
              <p>
                Start with the complete PDF if you want one printable file. The individual
                PDFs split the SOP, template bank, negative-review checklist, GBP calendar,
                local SEO prompts, and operating cadence for your front desk.
              </p>
            </div>
            <ul className={styles.downloadsList}>
              <li>
                <a
                  href="/downloads/spareply-toolkit/SpaReply-toolkit-complete.pdf"
                  download="SpaReply-toolkit-complete.pdf"
                >
                  SpaReply-toolkit-complete.pdf
                </a>
              </li>
              <li>
                <a
                  href="/downloads/spareply-toolkit/front-desk-review-reply-sop.pdf"
                  download="front-desk-review-reply-sop.pdf"
                >
                  front-desk-review-reply-sop.pdf
                </a>
              </li>
              <li>
                <a
                  href="/downloads/spareply-toolkit/review-reply-template-bank.pdf"
                  download="review-reply-template-bank.pdf"
                >
                  review-reply-template-bank.pdf
                </a>
              </li>
              <li>
                <a
                  href="/downloads/spareply-toolkit/negative-review-triage-checklist.pdf"
                  download="negative-review-triage-checklist.pdf"
                >
                  negative-review-triage-checklist.pdf
                </a>
              </li>
              <li>
                <a
                  href="/downloads/spareply-toolkit/google-business-profile-content-calendar.pdf"
                  download="google-business-profile-content-calendar.pdf"
                >
                  google-business-profile-content-calendar.pdf
                </a>
              </li>
              <li>
                <a
                  href="/downloads/spareply-toolkit/local-seo-prompts.pdf"
                  download="local-seo-prompts.pdf"
                >
                  local-seo-prompts.pdf
                </a>
              </li>
              <li>
                <a
                  href="/downloads/spareply-toolkit/operating-cadence.pdf"
                  download="operating-cadence.pdf"
                >
                  operating-cadence.pdf
                </a>
              </li>
            </ul>
            <p className={styles.downloadsHint}>
              Need editable files too? Open <Link href="/toolkit">/toolkit</Link> for the
              Markdown and CSV source files.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="delivery">
        <div className={styles.sectionEyebrow}>Delivery</div>
        <h2 id="delivery">How to download and save your toolkit.</h2>
        <p>
          Stripe sends a payment receipt for your records. The toolkit itself
          downloads directly from this page — instant, no waiting on a follow-up
          email.
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
            <span>If a download fails</span>
            <strong>Can&rsquo;t open a file or get back to this page?</strong>
            <p>
              Email{" "}
              <a href={SUPPORT_MAILTO}>hello@spareply.com</a>{" "}
              with the email address you used at checkout. We&rsquo;ll resend the
              download links manually — usually within one business day, often much sooner.
            </p>
          </article>
          <article className={styles.deliveryCard}>
            <span>Keep it</span>
            <strong>Save the PDFs and sources in your shared drive</strong>
            <p>
              Drop the PDFs into the front-desk shared drive or your clinic&rsquo;s SOP
              wiki, and copy the editable Markdown and CSV originals from <Link href="/toolkit">/toolkit</Link>{" "}
              into your team&rsquo;s working folder. Free updates ship to the same buyer
              page during the launch window — bookmark <Link href="/success">/success</Link>{" "}
              and <Link href="/toolkit">/toolkit</Link>.
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
            <strong>Download issues or anything missing</strong>
            <p>
              Email <a href={SUPPORT_MAILTO}>hello@spareply.com</a> with the email
              address you used at checkout. We&rsquo;ll resend the download links or
              sort the issue out — usually same day.
            </p>
          </article>
          <article className={styles.supportCard}>
            <span>Refund</span>
            <strong>7-day satisfaction refund</strong>
            <p>
              Use the toolkit for a week. If it doesn&rsquo;t make replying to reviews faster
              and safer for your front desk, email{" "}
              <a href={REFUND_MAILTO}>hello@spareply.com</a> within 7 days with the email
              address and date you used at Stripe checkout — we&rsquo;ll refund the $49 to
              your original payment method. Refund requests are reviewed to prevent abuse,
              duplicate claims, redistribution, or policy misuse; see the{" "}
              <Link href="/refund-policy">refund policy</Link> for the full terms.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta">
        <div className={styles.ctaEyebrow}>What now</div>
        <h2 id="cta">Bookmark this page, then open the buyer toolkit.</h2>
        <p>
          Bookmark this page and <Link href="/toolkit">/toolkit</Link> for the live
          buyer playbook and the editable Markdown / CSV sources. The homepage keeps
          the free generator if your team wants a one-off reply between guests.
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
