import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Negative Med Spa Review Response — Playbook, Scripts, Escalation | SpaReply",
  description:
    "How to respond to a negative med spa review without revealing protected health detail or escalating clinical risk — full playbook with public scripts and a private follow-up SOP.",
  alternates: { canonical: "/negative-med-spa-review-response" },
  openGraph: {
    title: "Negative Med Spa Review Response Playbook",
    description:
      "Step-by-step negative review playbook for aesthetic clinics — operational, clinical, billing, and hostile-language scenarios.",
    type: "article",
  },
};

type Script = {
  meta: string;
  review: string;
  reply: string;
  followUp: string;
};

const scripts: Script[] = [
  {
    meta: "1★ · Default · operational complaint",
    review:
      "Total disappointment. Front desk was unprofessional and I felt ignored.",
    reply:
      "We are sorry your visit did not feel as seamless as it should have. We appreciate you bringing this to our attention. Please contact our practice manager directly so we can listen, review the details, and follow up with you offline.",
    followUp:
      "Front-desk lead reviews shift logs. Practice manager calls within one business day. Document conversation, decision, and offered resolution in the operations log.",
  },
  {
    meta: "1★ · Clinical concern · injectables",
    review:
      "Swelling and bruising days after my filler appointment that I was not warned about.",
    reply:
      "We take this seriously and are sorry you are uncomfortable. Please contact our practice manager so a licensed provider can review your visit with you in a private setting. We want to make sure this gets the attention it deserves.",
    followUp:
      "Pause public engagement after this reply. Loop in the medical director the same day. Provider reviews chart, calls the guest, and documents the clinical assessment before any further public message.",
  },
  {
    meta: "2★ · Billing dispute",
    review:
      "Charged for a treatment add-on I did not agree to. Front desk said it was a system issue but never followed up.",
    reply:
      "Thank you for flagging this. Billing should never be a back-and-forth, and we want to resolve this with you directly. Please reach our practice manager so we can pull your record and follow up the same day.",
    followUp:
      "Practice manager pulls invoice, treatment notes, and consent record. Resolve refund or correction within two business days. Never confirm the dollar amount publicly.",
  },
  {
    meta: "1★ · Hostile language",
    review:
      "Worst clinic I have ever been to. Staff are liars and the place is a scam.",
    reply:
      "We are sorry your experience left you feeling this way. We would like the chance to understand what happened. Please contact our practice manager directly so we can listen and follow up offline.",
    followUp:
      "Document the review and any prior interactions with this guest. Practice manager attempts contact once. Do not engage further publicly. If language is defamatory or threatening, escalate to counsel before any additional reply.",
  },
  {
    meta: "1★ · Mistaken identity / wrong clinic",
    review:
      "Terrible experience — wait was over an hour and they overcharged me.",
    reply:
      "Thank you for bringing this to our attention. We do not have a record matching this experience and would like to make sure we are connecting on the same visit. Please contact our practice manager directly so we can look into it and follow up offline.",
    followUp:
      "Search booking system for the reviewer name and date. If no record exists, document the search. If the review was clearly meant for another clinic, request removal through the platform after a private outreach attempt.",
  },
  {
    meta: "2★ · Refund or re-treatment ask",
    review:
      "I am not happy with my results and want a refund or to be re-done at no cost.",
    reply:
      "Thank you for telling us. Outcomes and any next steps are decisions a licensed provider needs to make with you in person. Please contact our practice manager so we can schedule a private review of your visit and discuss what makes sense from there.",
    followUp:
      "Provider reviews before-and-after photos and chart. Practice manager schedules in-person follow-up. Refund / re-treatment decisions are documented with provider sign-off — never offered publicly.",
  },
];

export default function NegativeMedSpaReviewResponsePage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Negative med spa review response</div>
        <h1>How to respond to a negative med spa review without making it worse.</h1>
        <p className={styles.lede}>
          A negative med spa review is part operations problem, part legal risk, part marketing
          moment. The public reply is the one piece every future guest will read — so it has to be
          calm, accountable, and free of any protected health detail. This is the full playbook,
          with scripts for the six scenarios that come up over and over again.
        </p>

        <div className={styles.callout}>
          <strong>The rule for every public negative reply.</strong>
          <p>
            Acknowledge the experience. Move the specifics to a private channel. Never confirm
            clinical details the guest did not share themselves. Never offer compensation in
            public. That is it — every script below is in service of that pattern.
          </p>
        </div>

        <h2>Step 1 — Read the review twice and classify it</h2>
        <p>
          Before anyone drafts a reply, identify which of the six scenarios this is: operational
          (wait, billing, communication), clinical (treatment-related symptom or outcome),
          hostile (defamatory or threatening language), mistaken identity, refund / re-treatment
          ask, or platform spam. The skeleton is similar across all six, but the escalation path
          is different.
        </p>

        <h2>Step 2 — Draft a privacy-safe public reply</h2>
        <p>A good negative public reply is three sentences:</p>
        <ol>
          <li>
            <strong>Empathy without admission.</strong> &ldquo;We are sorry your visit did not
            feel as seamless as it should have.&rdquo;
          </li>
          <li>
            <strong>Acknowledge the channel, not the detail.</strong> &ldquo;We appreciate you
            bringing this to our attention.&rdquo;
          </li>
          <li>
            <strong>Move the conversation offline.</strong> &ldquo;Please contact our practice
            manager directly so we can listen and follow up offline with care.&rdquo;
          </li>
        </ol>

        <h2>Step 3 — Run the private follow-up the same day</h2>
        <p>
          The public reply is for the audience. The private follow-up is where the relationship
          is rebuilt or escalated.
        </p>
        <ul className={styles.checklist}>
          <li>Call the guest within one business day. Voicemail counts; document the attempt.</li>
          <li>
            Have a manager or licensed provider review any clinical concerns before any further
            public response.
          </li>
          <li>
            Document the timeline in the EMR or operations log — date, channel, who spoke, what
            was offered.
          </li>
          <li>
            Decide on the resolution path (refund, re-treatment, complimentary visit, no action)
            with provider sign-off when clinical.
          </li>
          <li>
            If the guest agrees the issue is resolved, ask whether they would like to update
            their review — never demand it.
          </li>
        </ul>

        <h2>Step 4 — Escalate clinical concerns through the right channel</h2>
        <p>
          Reviews that mention swelling, an injection reaction, a burn, scarring, vision change,
          or any medication should never be handled by the front desk alone. Loop in the medical
          director or supervising provider before any reply leaves the practice. If the situation
          involves a possible adverse event, follow your standard reporting workflow rather than
          relying on the review thread.
        </p>

        <h2>Six negative-review scripts your team can use this week</h2>
        <p>
          Each script is a public reply plus a one-line private follow-up cue. Customize the
          phrasing to fit your brand voice — the structure is what does the work.
        </p>

        {scripts.map((script) => (
          <div className={styles.example} key={script.meta}>
            <div className={styles.meta}>{script.meta}</div>
            <p className={styles.review}>&ldquo;{script.review}&rdquo;</p>
            <p className={styles.reply}>{script.reply}</p>
            <p style={{ marginTop: 12, fontSize: 14, color: "#6f554b" }}>
              <strong>Private follow-up:</strong> {script.followUp}
            </p>
          </div>
        ))}

        <h2>What to never do in a negative public reply</h2>
        <ul>
          <li>
            <strong>Do not confirm the guest is a patient.</strong> &ldquo;Thanks for your visit
            on March 4&rdquo; is a privacy problem.
          </li>
          <li>
            <strong>Do not argue the facts in public.</strong> If you disagree, say so offline.
          </li>
          <li>
            <strong>Do not offer compensation in the thread.</strong> It invites
            review-as-leverage from future guests.
          </li>
          <li>
            <strong>Do not copy-paste the same response across reviews.</strong> Google rewards
            unique, on-topic replies; reviewers notice templates.
          </li>
          <li>
            <strong>Do not engage twice publicly.</strong> One calm reply is the move. Further
            back-and-forth lives in private channels.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>What SpaReply&rsquo;s generator does for low-rating reviews.</strong>
          <p>
            When you set the rating to 1 or 2, the{" "}
            <Link href="/#generator">free generator</Link> automatically picks the empathetic
            opener, points the guest to the practice manager, and returns a private follow-up
            checklist plus safety notes. For injectables, lasers, peels, and any review that
            mentions a clinical keyword, it adds a note reminding you to route to a licensed
            provider.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Try the negative-review flow in the generator</strong>
            <p>
              Set the rating to 1 or 2, paste the review, and the generator handles the public
              reply, private follow-up, and clinical escalation note for you.
            </p>
          </div>
          <Link href="/#generator">Open the generator</Link>
        </div>

        <div className={styles.callout}>
          <strong>Want the full negative-review playbook?</strong>
          <p>
            The $49 toolkit includes the six-scenario scripts above plus the private follow-up
            SOP, the 13-field tracker, and the front-desk escalation tree. Preview it first with
            the{" "}
            <a href={samplePreviewPdf.href} target="_blank" rel="noopener noreferrer">
              free 5-page sample PDF
            </a>{" "}
            or open the{" "}
            <Link href="/toolkit-preview">$49 toolkit preview</Link>.
          </p>
        </div>

        <p style={{ marginTop: 24, fontSize: 14, color: "#6f554b" }}>
          Looking for the older negative-review write-up? Read the original{" "}
          <Link href="/negative-review-response">negative review response page</Link> — it covers
          the same fundamentals with a tighter four-step framing.
        </p>

        <div className={styles.linkRow}>
          <Link href="/med-spa-review-response-examples">
            <span>Examples</span>
            Med spa review response examples by rating
          </Link>
          <Link href="/botox-review-response-templates">
            <span>Templates</span>
            Botox &amp; injectables review response templates
          </Link>
          <Link href="/med-spa-google-review-reply">
            <span>Workflow</span>
            Med spa Google review reply best practices
          </Link>
          <Link href="/aesthetic-clinic-review-templates">
            <span>Templates</span>
            Aesthetic clinic review templates by service
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
