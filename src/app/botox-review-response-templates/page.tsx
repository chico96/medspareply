import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Botox Review Response Templates (with Injectables Edge Cases) | SpaReply",
  description:
    "Botox and injectables review reply templates — bruising, swelling, asymmetry, touch-ups, and 1★ reactions — written for med spas with privacy-safe phrasing.",
  alternates: { canonical: "/botox-review-response-templates" },
  openGraph: {
    title: "Botox Review Response Templates",
    description:
      "Public reply templates for Botox and injectables reviews, including bruising, swelling, asymmetry, and touch-up scenarios.",
    type: "article",
  },
};

type Template = {
  meta: string;
  review: string;
  reply: string;
  caution?: string;
};

const positiveTemplates: Template[] = [
  {
    meta: "5★ · Botox · warm tone",
    review:
      "Best Botox experience I have had. Provider was patient, asked what I was hoping for, and the results look natural.",
    reply:
      "Thank you for the kind words. We are glad the consult felt unrushed and that the results look the way you hoped. The team appreciates the trust and we will see you for your next visit.",
  },
  {
    meta: "5★ · Lip filler · polished tone",
    review:
      "First time getting filler and the provider made me feel comfortable. They told me exactly what to expect day-of and over the next two weeks.",
    reply:
      "Thank you for the thoughtful note. Setting clear expectations day-of and through the settling window is a standard we work hard to keep — we are glad it landed for you. We look forward to caring for you again.",
  },
];

const sensitiveTemplates: Template[] = [
  {
    meta: "4★ · Botox · clinical tone · bruising",
    review:
      "Results are great but I had more bruising than I expected. Wish I had been told that was possible.",
    reply:
      "Thank you for the candid feedback. Bruising can happen with injectables, and we want every guest to leave the consult clear on what is normal and when to call us. We will share your note with the team to tighten that pre-treatment walk-through.",
    caution:
      "Acknowledge bruising as a known possibility without diagnosing this guest's case. Do not promise it will not recur.",
  },
  {
    meta: "3★ · Botox · clinical tone · slow onset",
    review:
      "Two weeks in and one side seems to be taking longer to settle than the other.",
    reply:
      "Thank you for telling us. Settling timelines and small asymmetries often even out across the full two-week window, and we want to be the ones to assess yours. Please contact our practice manager so a licensed provider can review your visit and discuss next steps with you directly.",
    caution:
      "Asymmetry questions belong with a licensed provider, not the front desk. Public reply should route to a private clinical conversation.",
  },
  {
    meta: "4★ · Filler · polished tone · touch-up ask",
    review:
      "Happy with the result but think I might need a small touch-up. The booking page didn't make it clear when that is appropriate.",
    reply:
      "Thank you for the feedback. Touch-up timing depends on the product and how it has settled, so we always want a provider to assess in person rather than on a booking page. Please reach the front desk and we will set up the right two-week follow-up.",
    caution:
      "Do not state a touch-up is or is not needed publicly — that is a clinical decision after an in-person assessment.",
  },
];

const lowStarTemplates: Template[] = [
  {
    meta: "2★ · Botox · clinical tone · prolonged swelling",
    review:
      "It has been four days and I still have swelling near one of the injection sites.",
    reply:
      "We take this seriously and are sorry you are still uncomfortable. Please contact our practice manager directly so a licensed provider can review your visit and follow up with you in a private setting. We want to make sure this gets the attention it deserves.",
    caution:
      "Prolonged swelling is a clinical concern. Loop in the medical director or supervising provider before any further response leaves the practice.",
  },
  {
    meta: "1★ · Filler · clinical tone · vascular concern language",
    review:
      "Pain and discoloration after my filler appointment that doesn't feel right.",
    reply:
      "We hear you and want to address this immediately. Please contact our practice manager at hello@yourclinic.example or call the clinic directly so a licensed provider can speak with you today. We are taking this seriously.",
    caution:
      "Pain plus discoloration after filler can indicate a vascular event. This is a same-day clinical priority. Public reply should be brief and route to a real, fast clinical channel — not just a generic email.",
  },
  {
    meta: "1★ · Botox · warm tone · expectations / ineffective",
    review:
      "Spent a lot of money and don't see any difference two weeks later.",
    reply:
      "We are sorry the result is not what you were hoping for. Please contact our practice manager so a licensed provider can review your visit with you, look at before-and-after photos, and discuss next steps in a private setting.",
    caution:
      "Do not promise re-treatment, free units, or refunds publicly. Every clinical and financial decision happens after a provider review.",
  },
];

function TemplateBlock({ items }: { items: Template[] }) {
  return (
    <>
      {items.map((template) => (
        <div className={styles.example} key={template.review}>
          <div className={styles.meta}>{template.meta}</div>
          <p className={styles.review}>&ldquo;{template.review}&rdquo;</p>
          <p className={styles.reply}>{template.reply}</p>
          {template.caution ? (
            <p style={{ marginTop: 12, fontSize: 14, color: "#6f554b" }}>
              <strong>Provider escalation note:</strong> {template.caution}
            </p>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default function BotoxReviewResponseTemplatesPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Botox &amp; injectables review templates</div>
        <h1>Botox review response templates — including the hard ones.</h1>
        <p className={styles.lede}>
          Public reply templates for Botox, dysport, and dermal filler reviews — covering happy
          first-time guests, bruising, slow onset, asymmetry, touch-ups, and the 1-star reviews
          that mention swelling, pain, or discoloration. Written so the front desk can move fast
          without saying anything that should be a provider&rsquo;s call.
        </p>

        <div className={styles.callout}>
          <strong>The injectables rule.</strong>
          <p>
            Any injectables review that mentions a symptom (bruising, swelling, pain, asymmetry,
            discoloration, headache, vision change) is a clinical signal. The public reply
            stays short, empathetic, and routes to a private channel — and a licensed provider is
            the one who decides what happens next, not the front desk.
          </p>
        </div>

        <h2>Positive Botox &amp; filler review replies</h2>
        <p>
          Most injectables reviews are happy ones. The reply still earns its keep when it mirrors
          the specific thing the guest valued — a careful consult, a natural result, clear
          expectations — without restating dose, product, or location.
        </p>
        <TemplateBlock items={positiveTemplates} />

        <h2>Sensitive injectables review replies (3★ and 4★)</h2>
        <p>
          These are the reviews that are technically positive but contain a clinical flag —
          bruising, slow onset, asymmetry, or a touch-up ask. The public reply normalizes the
          known possibility without diagnosing this specific guest, then moves the actual decision
          into a private clinical conversation.
        </p>
        <TemplateBlock items={sensitiveTemplates} />

        <h2>Low-star injectables review replies (1★ and 2★)</h2>
        <p>
          A 1- or 2-star injectables review with symptom language is not a marketing problem; it
          is a clinical one. Keep the public reply brief, route to a real same-day clinical
          channel, and never promise re-treatment, free units, or refunds in the public thread.
        </p>
        <TemplateBlock items={lowStarTemplates} />

        <h2>Privacy-safe wording for injectables reviews</h2>
        <ul>
          <li>
            <strong>Do not confirm the appointment.</strong> &ldquo;Thanks for coming in on
            March 4 for your Botox&rdquo; tells the public this person is your patient and what
            they had done.
          </li>
          <li>
            <strong>Do not name product, dose, or units.</strong> Even if the guest named them.
            Your reply is read by future guests and lawyers, not just this person.
          </li>
          <li>
            <strong>Do not diagnose in public.</strong> &ldquo;That sounds like normal post-treatment
            swelling&rdquo; is a clinical statement that belongs in a chart, not a Google reply.
          </li>
          <li>
            <strong>Do route to a real channel.</strong> A generic &ldquo;please contact us&rdquo;
            with no email or phone reads as deflection. Use a monitored practice-manager inbox.
          </li>
        </ul>

        <h2>When to escalate before replying at all</h2>
        <p>
          Pause the public reply and loop in the medical director or supervising provider when
          the review mentions:
        </p>
        <ul className={styles.checklist}>
          <li>
            Pain, severe or unusual swelling, or discoloration after filler — possible vascular
            concern, same-day priority.
          </li>
          <li>Vision change, headache, or facial weakness after Botox or filler.</li>
          <li>An adverse event the guest is asking you to acknowledge publicly.</li>
          <li>Any language suggesting the guest is consulting a lawyer or filing a complaint.</li>
          <li>
            A review that names another provider or clinic and attributes the symptom to your
            visit.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>Compliance reminder.</strong>
          <p>
            SpaReply phrasing is designed to be HIPAA-aware — it acknowledges without confirming
            care. It is not legal, medical, or compliance advice. Have your medical director or
            counsel sign off on injectables-specific public language before you operationalize it.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Try the injectables flow in the generator</strong>
            <p>
              Pick &ldquo;Injectables&rdquo; as the service, set the rating, and the free
              generator returns a privacy-safe public reply, a private follow-up checklist, and a
              note when a licensed provider should review.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_botox" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <div className={styles.callout}>
          <strong>Want every injectables template?</strong>
          <p>
            The $49 toolkit includes 120+ paste-ready replies — including the full Botox, filler,
            and laser banks plus the negative-review playbook. See it before you buy with the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_botox" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>{" "}
            or open the{" "}
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "seo_botox" }}
            >
              $49 toolkit preview
            </TrackedLink>.
          </p>
        </div>

        <div className={styles.linkRow}>
          <Link href="/med-spa-review-response-examples">
            <span>Examples</span>
            Med spa review response examples by rating
          </Link>
          <Link href="/negative-med-spa-review-response">
            <span>Playbook</span>
            Negative med spa review response playbook
          </Link>
          <Link href="/aesthetic-clinic-review-templates">
            <span>Templates</span>
            Aesthetic clinic review templates by service
          </Link>
          <Link href="/med-spa-google-review-reply">
            <span>Workflow</span>
            Med spa Google review reply best practices
          </Link>
          <Link href="/local-seo-checklist">
            <span>Checklist</span>
            Med spa local SEO checklist
          </Link>
          <Link href="/toolkit-preview">
            <span>Toolkit</span>
            Preview the $49 SpaReply toolkit
          </Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
