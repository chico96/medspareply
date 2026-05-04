import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Dermal Filler Review Response Templates (Lip, Cheek, Under-Eye) | SpaReply",
  description:
    "Dermal filler and lip filler review response templates — consultation expectations, swelling and asymmetry, touch-up asks, and how to route clinical concerns offline. Privacy-safe phrasing for med spas.",
  alternates: { canonical: "/filler-review-response-templates" },
  openGraph: {
    title: "Dermal Filler Review Response Templates",
    description:
      "Public reply templates for filler and lip filler reviews — consult expectations, swelling, asymmetry, touch-ups, and clinical escalation language.",
    type: "article",
  },
};

type Template = {
  meta: string;
  review: string;
  reply: string;
  caution?: string;
};

const consultTemplates: Template[] = [
  {
    meta: "5★ · Lip filler · warm tone · first-time guest",
    review:
      "First time getting lip filler and the provider made me feel comfortable. They told me exactly what to expect day-of and over the next two weeks.",
    reply:
      "Thank you for the thoughtful note. Setting clear expectations day-of and through the settling window is a standard we work hard to keep — we are glad it landed for you. We look forward to caring for you again.",
  },
  {
    meta: "5★ · Cheek filler · polished tone",
    review:
      "Did my homework before booking and the consult was honest about what filler could and could not do for my goals.",
    reply:
      "Thank you for sharing this. An honest consult that names what filler can and cannot do is something we want every guest to experience before any product is decided on. We appreciate the trust — we will see you for your follow-up.",
  },
];

const swellingAsymmetryTemplates: Template[] = [
  {
    meta: "4★ · Lip filler · clinical tone · day-2 swelling",
    review:
      "Happy with how things are going but the swelling on day two was more than I expected.",
    reply:
      "Thank you for the candid feedback. Day-2 swelling can vary from guest to guest, and we want every pre-treatment walk-through to land on the longer end of normal. We will share your note with the team to tighten that conversation. Please reach out if you would like a check-in before the settling window closes.",
    caution:
      "Acknowledge swelling as a known possibility without diagnosing this guest's specific case. Do not promise a specific timeline for full settling.",
  },
  {
    meta: "3★ · Lip filler · clinical tone · asymmetry",
    review:
      "Two weeks in and one side seems fuller than the other.",
    reply:
      "Thank you for telling us. Settling timelines and small asymmetries often even out across the full two-week window, and we want to be the ones to assess yours rather than guess in a public thread. Please contact our practice manager so a licensed provider can review your visit and discuss next steps with you directly.",
    caution:
      "Asymmetry questions belong with a licensed provider, not the front desk. Public reply should route to a private clinical conversation; do not say a touch-up is or is not needed.",
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

const escalationTemplates: Template[] = [
  {
    meta: "1★ · Filler · clinical tone · pain + discoloration · escalate same day",
    review:
      "Pain and discoloration after my filler appointment that doesn't feel right.",
    reply:
      "We hear you and want to address this immediately. Please contact our practice manager directly so a licensed provider can speak with you today. We are taking this seriously.",
    caution:
      "Pain plus discoloration after filler can indicate a vascular event. Same-day clinical priority. Public reply must be brief and route to a real, fast clinical channel — not a generic email. Begin internal incident documentation in parallel.",
  },
  {
    meta: "2★ · Under-eye filler · clinical tone · prolonged puffiness",
    review:
      "Got under-eye filler weeks ago and there is still puffiness that does not look right.",
    reply:
      "Thank you for telling us. Prolonged changes after under-eye work need an in-person review, and we want to be the ones to do it. Please contact our practice manager so a licensed provider can see you in a private setting.",
    caution:
      "Under-eye filler concerns (Tyndall, malar edema, lymphatic disruption) are provider calls. Loop in the medical director before any further public engagement. Do not name the diagnosis in public.",
  },
  {
    meta: "1★ · Lip filler · warm tone · disappointment / overfilled feeling",
    review:
      "Feel like I was talked into more than I wanted and I do not love the result.",
    reply:
      "We are sorry the result is not what you were hoping for. Please contact our practice manager so a licensed provider can review your visit with you, look at any pre- and post-treatment photos, and discuss next steps in a private setting.",
    caution:
      "Do not promise dissolution, touch-ups, refunds, or product comp publicly. Every clinical and financial decision happens after a provider review of the chart.",
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

export default function FillerReviewResponseTemplatesPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Filler review response templates</div>
        <h1>Dermal filler review response templates — consult, settling, and the hard ones.</h1>
        <p className={styles.lede}>
          Public reply templates for dermal filler and lip filler reviews — first-time consult
          praise, day-2 swelling, two-week asymmetry, touch-up asks, and the 1-star reviews that
          mention pain, discoloration, or prolonged change. Written so the front desk can reply
          in two minutes without saying anything that should be a provider&rsquo;s call.
        </p>

        <div className={styles.callout}>
          <strong>The filler rule.</strong>
          <p>
            Most filler reviews are happy ones written somewhere inside the two-week settling
            window. The reply earns its keep when it mirrors what the guest valued at consult and
            normalizes the settling process — without naming product, syringes, or technique. Any
            review that mentions pain, discoloration, vision change, or prolonged swelling is a
            clinical signal and routes to a licensed provider before any public reply ships.
          </p>
        </div>

        <h2>Consult and first-visit filler reviews</h2>
        <p>
          Filler reviews from first-time guests are almost always reviews of the consult — not
          the product. Mirror the specific consult-quality detail (unrushed, honest about what
          filler can and cannot do, clear day-of expectations) and avoid implying any specific
          treatment plan was agreed to.
        </p>
        <TemplateBlock items={consultTemplates} />

        <h2>Settling-window reviews — swelling, asymmetry, touch-ups</h2>
        <p>
          The two-week filler settling window is where most operationally tricky reviews live.
          The public reply normalizes the known mechanism without diagnosing this specific guest,
          then moves the actual decision into a private channel where a provider can do the
          in-person assessment.
        </p>
        <TemplateBlock items={swellingAsymmetryTemplates} />

        <h2>Clinical-concern filler reviews — escalate before posting</h2>
        <p>
          A filler review that mentions pain, discoloration, vision change, prolonged
          puffiness, or any symptom that does not match a normal settling pattern is not a
          marketing problem. The public reply stays brief and routes to a real same-day clinical
          channel, while a licensed provider reviews the chart privately. Begin internal
          incident documentation in parallel.
        </p>
        <TemplateBlock items={escalationTemplates} />

        <h2>When to escalate before replying at all</h2>
        <p>
          Pause the public reply and loop in the medical director or supervising provider when
          the review mentions:
        </p>
        <ul className={styles.checklist}>
          <li>
            Pain plus discoloration, blanching, or skin temperature change after filler — a
            possible vascular concern, same-day clinical priority.
          </li>
          <li>
            Vision change, eye pain, or sudden visual disturbance after any facial filler — an
            emergency-level escalation.
          </li>
          <li>
            Prolonged swelling, persistent lumps, or visible product migration past the
            documented settling window.
          </li>
          <li>
            Under-eye filler concerns suggesting Tyndall, malar edema, or lymphatic
            disruption — provider call before any public engagement.
          </li>
          <li>
            Any language suggesting the guest is consulting a lawyer, filing a complaint, or
            considering reporting an adverse event.
          </li>
          <li>
            Reviews that name another provider or clinic and attribute the symptom to your
            visit — confirm the booking record before any public engagement.
          </li>
        </ul>

        <h2>Privacy-safe wording for filler reviews</h2>
        <ul>
          <li>
            <strong>Do not confirm the appointment in public.</strong> &ldquo;Thanks for coming
            in on March 4 for your lip filler&rdquo; tells the public this person is your patient
            and what they had done.
          </li>
          <li>
            <strong>Do not name product, syringes, or technique.</strong> Even if the guest
            named them. Your reply is read by future guests and counsel, not just this person.
          </li>
          <li>
            <strong>Do not promise dissolution, touch-up, or refund publicly.</strong> Every
            clinical and financial decision happens after an in-person provider review.
          </li>
          <li>
            <strong>Do route to a real channel.</strong> A monitored practice-manager inbox or
            phone number is the right offline channel. A generic &ldquo;please contact us&rdquo;
            reads as deflection.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>Compliance reminder.</strong>
          <p>
            SpaReply phrasing is designed to be HIPAA-aware — it acknowledges without confirming
            care. It is not legal, medical, or compliance advice. Have your medical director or
            counsel sign off on filler-specific public language before you operationalize it
            clinic-wide.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Try the filler flow in the generator</strong>
            <p>
              Pick &ldquo;Injectables&rdquo; as the service, set the rating, and the free
              generator returns a privacy-safe public reply, a private follow-up checklist, and a
              note when a licensed provider should review.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_filler" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <div className={styles.callout}>
          <strong>Want every filler template?</strong>
          <p>
            The $49 toolkit ships 120+ paste-ready replies, including the full filler bank
            across 5★ → 1★ and warm/polished/clinical tones, plus the negative-review playbook
            and the front-desk SOP. See it before you buy with the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_filler" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>{" "}
            or open the{" "}
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "seo_filler" }}
            >
              $49 toolkit preview
            </TrackedLink>.
          </p>
        </div>

        <div className={styles.linkRow}>
          <Link href="/botox-review-response-templates">
            <span>Templates</span>
            Botox &amp; injectables review response templates
          </Link>
          <Link href="/laser-hair-removal-review-response">
            <span>Templates</span>
            Laser hair removal review response templates
          </Link>
          <Link href="/hydrafacial-review-response">
            <span>Templates</span>
            Hydrafacial review response templates
          </Link>
          <Link href="/aesthetic-clinic-review-templates">
            <span>Templates</span>
            Aesthetic clinic review templates by service
          </Link>
          <Link href="/negative-med-spa-review-response">
            <span>Playbook</span>
            Negative med spa review response playbook
          </Link>
          <Link href="/med-spa-google-review-reply">
            <span>Workflow</span>
            Med spa Google review reply best practices
          </Link>
          <Link href="/medical-spa-reputation-management">
            <span>System</span>
            Medical spa reputation management
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
