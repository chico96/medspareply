import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "CoolSculpting & Body Contouring Review Response Examples | SpaReply",
  description:
    "CoolSculpting and body contouring review response examples — delayed-results expectations, dissatisfaction, no outcome guarantees, and how to route clinical concerns offline.",
  alternates: { canonical: "/coolsculpting-review-response" },
  openGraph: {
    title: "CoolSculpting & Body Contouring Review Response Examples",
    description:
      "Public reply templates for CoolSculpting and body contouring reviews — delayed results, expectations, dissatisfaction, and adverse-event escalation.",
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
    meta: "5★ · CoolSculpting · polished tone · expectations met",
    review:
      "Three months post-treatment and finally seeing the results I was told to expect. Provider was honest at consult that this was a slow burn.",
    reply:
      "Thank you for sharing this. An honest expectation-setting consult — including the slower timeline body contouring runs on — is something we work hard to keep consistent. We are glad the result is matching what was discussed.",
  },
  {
    meta: "5★ · Body contouring · warm tone · multi-cycle plan",
    review:
      "Did three cycles across two areas and the difference is real. Felt informed at every step.",
    reply:
      "Thank you for the kind note. A multi-cycle plan should always feel like a conversation, not a sales pitch, and we are glad each step felt clear. The team appreciates the trust.",
  },
];

const expectationTemplates: Template[] = [
  {
    meta: "3★ · CoolSculpting · clinical tone · early-results impatience",
    review:
      "Did my first cycle six weeks ago and I do not see much yet. Wondering if it actually works.",
    reply:
      "Thank you for the candid feedback. Body contouring results typically continue to develop across the 8–12 week window after treatment, and we want every guest to know which week to expect what. Please reach the front desk if you would like a check-in with your provider before the full window closes.",
    caution:
      "Speak to the documented timeline window without promising what this guest will see. Do not guarantee an outcome — that is a clinical and consent issue.",
  },
  {
    meta: "3★ · Body contouring · clinical tone · candidacy mismatch",
    review:
      "I think I was not the right candidate for the treatment but it was still recommended at consult.",
    reply:
      "Thank you for telling us. Candidacy is the most important conversation at consult, and if it did not feel right we want to review your visit with you directly. Please contact our practice manager so a licensed provider can walk through the file with you in private.",
    caution:
      "Candidacy disputes belong with the provider who performed the consult, not the front desk. Pull the consent form and consult notes before the private call.",
  },
  {
    meta: "3★ · CoolSculpting · clinical tone · post-treatment soreness window",
    review:
      "Soreness lasted longer than I expected after my cycle and I wish someone had walked me through the recovery window in more detail.",
    reply:
      "Thank you for the candid feedback. Post-cycle soreness windows can vary, and we want every aftercare conversation to land on the longer end of normal, not the shorter. We will share your note with the team to tighten that walk-through.",
    caution:
      "Acknowledge the post-treatment recovery window as a known mechanism without diagnosing this guest's specific recovery. Do not promise a specific timeline.",
  },
];

const dissatisfactionTemplates: Template[] = [
  {
    meta: "1★ · CoolSculpting · warm tone · no result after full plan",
    review:
      "Did the full plan and feel like I do not see any difference. Want a refund or to be re-treated.",
    reply:
      "We are sorry the result is not what you were hoping for. Outcomes and any next steps are decisions a licensed provider needs to make with you in person. Please contact our practice manager so we can schedule a private review of your visit and discuss what makes sense from there.",
    caution:
      "Do not promise re-treatment, additional cycles, or refunds publicly. Body contouring outcomes are individual and decisions are documented with provider sign-off after a chart and photo review.",
  },
  {
    meta: "1★ · Body contouring · clinical tone · prolonged numbness or sensation change",
    review:
      "Months after my treatment I still have numbness in the area that does not feel right.",
    reply:
      "We hear you and want to address this. Please contact our practice manager directly so a licensed provider can review your visit with you and follow up in a private setting. We are taking this seriously.",
    caution:
      "Persistent sensation change is a clinical concern. Loop in the medical director the same day and pull the chart before any further public engagement.",
  },
  {
    meta: "1★ · CoolSculpting · clinical tone · paradoxical adipose hyperplasia language · escalate",
    review:
      "I think I have PAH after my treatment — the area is bigger and harder, not smaller.",
    reply:
      "We take this seriously and are sorry you are experiencing this. Please contact our practice manager directly so a licensed provider can speak with you and review your visit in a private setting. We want to make sure this gets the attention it deserves.",
    caution:
      "PAH (paradoxical adipose hyperplasia) is a recognized but rare clinical concern. Same-day escalation to the medical director. Do not confirm or deny the diagnosis publicly. Begin internal incident documentation in parallel.",
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

export default function CoolSculptingReviewResponsePage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>CoolSculpting &amp; body contouring review response</div>
        <h1>CoolSculpting review response examples — for the slow-burn, the dissatisfied, and the rare adverse event.</h1>
        <p className={styles.lede}>
          Body contouring is the service line where a public reply has to do the most work. The
          results take weeks to appear, the consult sets every expectation, and the rare adverse
          event needs to be handled the same hour. These templates cover happy multi-cycle
          guests, the impatient 6-week reviewer, the dissatisfied refund ask, and the rare
          PAH-language review that must be escalated immediately.
        </p>

        <div className={styles.callout}>
          <strong>The body contouring rule.</strong>
          <p>
            Body contouring results develop on a slow, individual timeline. A public reply
            should never guarantee an outcome, never offer compensation, and never confirm what
            this guest will or will not see. Acknowledge the timeline, route outcome and refund
            conversations into a private clinical review, and escalate any sensation change,
            unusual hardness, or PAH-language review to the medical director the same day.
          </p>
        </div>

        <h2>Positive CoolSculpting and body contouring reviews (5★)</h2>
        <p>
          Most happy body contouring reviews land 8–12 weeks after treatment, when the result
          becomes visible. The reply earns its keep when it mirrors the consult-quality detail
          (honest timeline, clear plan) without restating cycles, applicators, or area
          measurements.
        </p>
        <TemplateBlock items={positiveTemplates} />

        <h2>Expectation-window reviews (3★) — early results, candidacy, recovery</h2>
        <p>
          The 3-star body contouring reviews are almost always written inside the
          results-development window, when the guest is uncertain about progress. The public
          reply normalizes the documented timeline mechanism without diagnosing this specific
          guest, then routes the actual conversation to a provider check-in.
        </p>
        <TemplateBlock items={expectationTemplates} />

        <h2>Dissatisfaction and clinical-concern reviews (1★ and 2★)</h2>
        <p>
          The hardest body contouring reviews fall into three buckets: outcome dissatisfaction
          with a refund or re-treatment ask, prolonged sensation changes, and the rare review
          that names PAH (paradoxical adipose hyperplasia) or describes hardening or growth in
          the treated area. Each one is a clinical conversation, not a marketing one.
        </p>
        <TemplateBlock items={dissatisfactionTemplates} />

        <h2>The no-outcome-guarantee posture, plainly stated</h2>
        <p>
          Body contouring is the service most likely to generate a refund or re-treatment ask
          based on outcome. The single most important wording rule:
        </p>
        <ul>
          <li>
            <strong>Do not promise specific outcomes publicly.</strong> Even
            &ldquo;you&rsquo;ll definitely see results&rdquo; in a 5-star reply can later be
            quoted back in a dispute. Speak to documented timeline windows and the standard of
            care, not to a guaranteed result.
          </li>
          <li>
            <strong>Do not offer compensation in the thread.</strong> Refund and re-treatment
            decisions belong with a licensed provider after a chart and photo review.
          </li>
          <li>
            <strong>Do route every outcome dispute privately.</strong> The public reply is for
            the next prospective guest. The actual decision is for the provider and the
            practice manager.
          </li>
          <li>
            <strong>Document everything.</strong> Body contouring disputes are the most likely
            to escalate to refund mediation, chargebacks, or licensing-board complaints — your
            internal log of the public reply, private call, and provider review is your
            protection.
          </li>
        </ul>

        <h2>Adverse-event escalation guidance for body contouring reviews</h2>
        <p>
          Pause the public reply and loop in the medical director or supervising provider when
          the review mentions:
        </p>
        <ul className={styles.checklist}>
          <li>
            Persistent numbness, tingling, or sensation change beyond the documented recovery
            window.
          </li>
          <li>
            An area that became <em>larger or harder</em> after treatment — possible PAH
            indicator, same-day escalation.
          </li>
          <li>
            Skin changes — bruising that does not resolve, color change, or texture change in
            the treated area.
          </li>
          <li>
            Severe pain, blistering, or open skin in the treated area — same-day clinical
            priority.
          </li>
          <li>
            Any language suggesting the guest is consulting a lawyer, filing a complaint, or
            considering reporting an adverse event.
          </li>
          <li>
            Reviews that name another provider or clinic and attribute the outcome to your
            visit — confirm the booking record before any public engagement.
          </li>
        </ul>

        <h2>Privacy-safe wording for body contouring reviews</h2>
        <ul>
          <li>
            <strong>Do not confirm the appointment in public.</strong> &ldquo;Thanks for
            coming in on March 4 for your CoolSculpting cycle&rdquo; tells the public this
            person is your patient and what they had done.
          </li>
          <li>
            <strong>Do not name device, applicator, area, or cycle count.</strong> Even if the
            guest named them. Your reply is read by future guests and counsel, not just this
            person.
          </li>
          <li>
            <strong>Do not promise outcomes or guarantee results.</strong> The consent form
            already says outcomes vary; your public reply must not contradict it.
          </li>
          <li>
            <strong>Do route outcome disputes to a real channel.</strong> A monitored
            practice-manager inbox or phone number is the right offline channel.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>Compliance reminder.</strong>
          <p>
            SpaReply phrasing is designed to be HIPAA-aware — it acknowledges without confirming
            care. It is not legal, medical, or compliance advice. Have your medical director or
            counsel sign off on body-contouring-specific public language before you operationalize
            it clinic-wide.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Try the body contouring flow in the generator</strong>
            <p>
              Pick &ldquo;Body contouring&rdquo; as the service, set the rating, and the free
              generator returns a privacy-safe public reply, a private follow-up checklist, and a
              note when a licensed provider should review.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_coolsculpting" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <div className={styles.callout}>
          <strong>Want every body contouring template?</strong>
          <p>
            The $49 toolkit ships 120+ paste-ready replies — including the full body contouring
            bank across the slow-burn timeline plus the negative-review playbook with the refund
            and re-treatment scripts. See it before you buy with the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_coolsculpting" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>{" "}
            or open the{" "}
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "seo_coolsculpting" }}
            >
              $49 toolkit preview
            </TrackedLink>.
          </p>
        </div>

        <div className={styles.linkRow}>
          <Link href="/aesthetic-clinic-review-templates">
            <span>Templates</span>
            Aesthetic clinic review templates by service
          </Link>
          <Link href="/laser-hair-removal-review-response">
            <span>Templates</span>
            Laser hair removal review response templates
          </Link>
          <Link href="/filler-review-response-templates">
            <span>Templates</span>
            Filler review response templates
          </Link>
          <Link href="/hydrafacial-review-response">
            <span>Templates</span>
            Hydrafacial review response templates
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
