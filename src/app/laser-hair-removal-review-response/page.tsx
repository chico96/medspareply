import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Laser Hair Removal Review Response Templates (5★ → 1★) | SpaReply",
  description:
    "Laser hair removal review response templates and examples — positive, neutral, negative, and adverse-event escalation. Privacy-safe phrasing for med spas, ready to paste.",
  alternates: { canonical: "/laser-hair-removal-review-response" },
  openGraph: {
    title: "Laser Hair Removal Review Response Templates",
    description:
      "Public reply templates for laser hair removal reviews — multi-session expectations, burns, hyperpigmentation, package disputes, and adverse-event escalation.",
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
    meta: "5★ · Laser hair removal · warm tone",
    review:
      "Halfway through my laser hair removal package and the results are amazing. Provider walked me through every session.",
    reply:
      "Thank you for the kind note. Walking each guest through the package one session at a time is exactly the rhythm we want to keep — we are glad it has felt clear and that the progress is matching what was discussed at consult.",
  },
  {
    meta: "5★ · Laser · brown skin / Nd:YAG · polished tone",
    review:
      "Was nervous about laser on darker skin. The provider explained the device, took a test patch, and I have not had any issues.",
    reply:
      "Thank you for the thoughtful feedback. A patient consult, a real test patch, and the right technology choice for each guest is the standard we work hard to keep. We are glad the experience reflected that — we will see you for your next session.",
  },
];

const sensitiveTemplates: Template[] = [
  {
    meta: "4★ · Laser · clinical tone · regrowth between sessions",
    review:
      "Three sessions in and I am seeing some regrowth. Provider said this is normal but I wish it had been explained earlier.",
    reply:
      "Thank you for the candid feedback. Cycle-based regrowth between sessions is a normal part of how laser packages work, and we want every guest to leave the consult clear on what each session is and is not designed to do. We will share your note with the team to tighten that walk-through.",
    caution:
      "Acknowledge the cycle-based nature of laser packages without diagnosing this guest's specific result. Do not promise an outcome by the end of the package.",
  },
  {
    meta: "3★ · Laser · clinical tone · post-treatment redness",
    review:
      "Results are good but the redness afterward lasted longer than I was told to expect.",
    reply:
      "Thank you for telling us. Post-treatment redness windows can vary between guests and devices, and we want every aftercare instruction to land on the longer end of normal, not the shorter. Please reach the front desk so a provider can check in with you ahead of your next session.",
    caution:
      "Do not state what is or is not normal for this guest in public — that is a provider call after a chart review.",
  },
  {
    meta: "3★ · Laser · clinical tone · package math dispute",
    review:
      "Felt the package was sold as fewer sessions than I am actually needing.",
    reply:
      "Thank you for the candid feedback. Session counts and how they were presented at consult should never feel like a moving target, and we want to walk through your file with you directly. Please contact our practice manager so we can review the package and any next steps in private.",
    caution:
      "Package and pricing conversations belong with the practice manager, not the public thread. Do not confirm session counts, prices, or refund offers publicly.",
  },
];

const lowStarTemplates: Template[] = [
  {
    meta: "2★ · Laser · clinical tone · prolonged hyperpigmentation",
    review:
      "It has been weeks and I still have darker patches in the treated area.",
    reply:
      "We take this seriously and are sorry you are still seeing changes. Please contact our practice manager directly so a licensed provider can review your visit and follow up with you in a private setting. We want to make sure this gets the attention it deserves.",
    caution:
      "Prolonged hyperpigmentation is a clinical concern. Loop in the medical director or supervising provider before any further response leaves the practice. Do not diagnose post-inflammatory hyperpigmentation or burn in public.",
  },
  {
    meta: "1★ · Laser · clinical tone · burn / blister language",
    review:
      "I have a blister and a burn mark from my last laser session.",
    reply:
      "We hear you and want to address this immediately. Please contact our practice manager directly so a licensed provider can speak with you today. We are taking this seriously.",
    caution:
      "Burn and blister language indicates a possible adverse event. Same-day clinical priority. Public reply must be brief and route to a real, fast clinical channel — not just a generic email. Begin internal incident documentation.",
  },
  {
    meta: "1★ · Laser · warm tone · no results after package",
    review:
      "Spent a lot of money on the full package and still have most of my hair growing back.",
    reply:
      "We are sorry the result is not what you were hoping for. Please contact our practice manager so a licensed provider can review your visit with you, look at any photos taken during the package, and discuss next steps in a private setting.",
    caution:
      "Do not promise re-treatment, additional sessions, or refunds publicly. Outcome and financial decisions happen after a provider review of the chart.",
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

export default function LaserHairRemovalReviewResponsePage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Laser hair removal review response</div>
        <h1>Laser hair removal review response templates — across the full package.</h1>
        <p className={styles.lede}>
          Public reply templates for laser hair removal reviews at every rating, covering the
          patterns that actually come up: cycle-based regrowth, multi-session package math,
          post-treatment redness, hyperpigmentation, and the rare burn or blister review that has
          to be handled the same hour. Written so the front desk can move fast without saying
          anything that should be a provider&rsquo;s call.
        </p>

        <div className={styles.callout}>
          <strong>The laser-package rule.</strong>
          <p>
            A laser hair removal review is almost always a review of a journey, not a single
            visit. Mirror the session number the guest mentioned, acknowledge the cycle-based
            nature of the treatment, and never imply the next session will or will not deliver a
            specific outcome. Anything that mentions a burn, blister, prolonged pigmentation
            change, or scarring is a clinical signal and belongs with a licensed provider before
            any public reply ships.
          </p>
        </div>

        <h2>Positive laser hair removal review replies</h2>
        <p>
          Most laser reviews are happy ones, often midway through a package. The reply earns its
          keep when it mirrors the specific thing the guest valued — patient consult, careful
          test patch, the right device for their skin — without restating settings, energy, or
          spot size.
        </p>
        <TemplateBlock items={positiveTemplates} />

        <h2>Sensitive laser review replies (3★ and 4★)</h2>
        <p>
          These are the reviews that are technically positive but contain a clinical or
          operational flag — regrowth between sessions, post-treatment redness, or a package
          math dispute. The public reply normalizes the known mechanism without diagnosing this
          specific guest, then moves the actual decision into a private channel.
        </p>
        <TemplateBlock items={sensitiveTemplates} />

        <h2>Low-star laser review replies (1★ and 2★) — including adverse events</h2>
        <p>
          A 1- or 2-star laser review with burn, blister, prolonged pigmentation change, or
          scarring language is not a marketing problem; it is a clinical one. Keep the public
          reply brief, route to a real same-day clinical channel, and never promise re-treatment,
          additional sessions, or refunds in the public thread. Begin internal incident
          documentation in parallel.
        </p>
        <TemplateBlock items={lowStarTemplates} />

        <h2>Adverse-event escalation guidance for laser reviews</h2>
        <p>
          Pause the public reply and loop in the medical director or supervising provider when
          the review mentions any of the following:
        </p>
        <ul className={styles.checklist}>
          <li>
            A burn, blister, or open wound after a laser session — same-day clinical priority,
            begin incident documentation.
          </li>
          <li>
            Prolonged hyperpigmentation, hypopigmentation, or any color change persisting
            beyond the aftercare window.
          </li>
          <li>
            Scarring or textural change in the treated area that the guest is attributing to
            your visit.
          </li>
          <li>
            Eye discomfort, vision change, or an injury related to eye protection during a
            facial-area treatment.
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

        <h2>Privacy-safe wording for laser reviews</h2>
        <ul>
          <li>
            <strong>Do not confirm the appointment in public.</strong> &ldquo;Thanks for coming
            in on March 4 for your laser session&rdquo; tells the public this person is your
            patient and what they had done.
          </li>
          <li>
            <strong>Do not name device, settings, or operator.</strong> Even if the guest named
            them. Your reply is read by future guests and counsel, not just this person.
          </li>
          <li>
            <strong>Do not diagnose post-inflammatory changes in public.</strong> &ldquo;That
            sounds like normal post-laser redness&rdquo; is a clinical statement that belongs in
            a chart, not a Google reply.
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
            counsel sign off on laser-specific public language before you operationalize it
            clinic-wide.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Try the laser flow in the generator</strong>
            <p>
              Pick &ldquo;Laser hair removal&rdquo; as the service, set the rating, and the free
              generator returns a privacy-safe public reply, a private follow-up checklist, and a
              note when a licensed provider should review.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_laser_hair_removal" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <div className={styles.callout}>
          <strong>Want every laser template?</strong>
          <p>
            The $49 toolkit includes 120+ paste-ready replies — including the full laser bank
            (warm, polished, and clinical tones across 5★ → 1★) plus the negative-review
            playbook and the front-desk SOP. See it before you buy with the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_laser_hair_removal" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>{" "}
            or open the{" "}
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "seo_laser_hair_removal" }}
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
          <Link href="/aesthetic-clinic-review-templates">
            <span>Templates</span>
            Aesthetic clinic review templates by service
          </Link>
          <Link href="/botox-review-response-templates">
            <span>Templates</span>
            Botox &amp; injectables review response templates
          </Link>
          <Link href="/filler-review-response-templates">
            <span>Templates</span>
            Filler review response templates
          </Link>
          <Link href="/negative-med-spa-review-response">
            <span>Playbook</span>
            Negative med spa review response playbook
          </Link>
          <Link href="/medical-spa-reputation-management">
            <span>System</span>
            Medical spa reputation management
          </Link>
          <Link href="/med-spa-google-review-reply">
            <span>Workflow</span>
            Med spa Google review reply best practices
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
