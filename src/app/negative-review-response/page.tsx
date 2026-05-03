import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Negative Med Spa Review Response: Playbook + Examples | SpaReply",
  description:
    "How to respond to a negative med spa review without revealing PHI, escalating clinical concerns, or losing trust — a step-by-step playbook with public reply examples.",
  alternates: { canonical: "/negative-review-response" },
  openGraph: {
    title: "Negative Med Spa Review Response Playbook",
    description:
      "Step-by-step playbook for handling 1-star and 2-star med-spa reviews — public phrasing, private follow-up, and clinical escalation.",
    type: "article",
  },
};

export default function NegativeReviewResponsePage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Negative med spa review response</div>
        <h1>How to respond to a negative med spa review without making it worse.</h1>
        <p className={styles.lede}>
          A negative review is part operations problem, part legal risk, part marketing moment. The
          public reply is the one piece every future guest will read — so it has to be calm,
          accountable, and free of any protected health detail.
        </p>

        <div className={styles.callout}>
          <strong>The rule for every public negative reply.</strong>
          <p>
            Acknowledge, take responsibility for the experience, move the specifics to a private
            channel, and never confirm clinical details the guest didn&apos;t share themselves.
            That&apos;s it. Everything below is in service of that pattern.
          </p>
        </div>

        <h2>Step 1 — Read it twice before replying</h2>
        <p>
          Before drafting anything, identify whether the complaint is operational (wait time,
          billing, communication) or clinical (a treatment-related concern, side effect, or
          outcome). The reply structure is similar, but clinical reviews require an extra layer of
          escalation before you respond publicly.
        </p>

        <h2>Step 2 — Draft a privacy-safe public reply</h2>
        <p>
          A good negative reply is short. Three sentences is plenty. Use this skeleton:
        </p>
        <ol>
          <li>
            <strong>Empathy without admission.</strong> &ldquo;We&apos;re sorry your visit
            didn&apos;t feel as seamless as it should have.&rdquo;
          </li>
          <li>
            <strong>Acknowledge the channel, not the detail.</strong> &ldquo;We appreciate you
            bringing this to our attention after your visit.&rdquo;
          </li>
          <li>
            <strong>Move the conversation offline.</strong> &ldquo;Please contact our practice
            manager directly so we can listen and follow up offline with care.&rdquo;
          </li>
        </ol>

        <h3>Public reply example — 2★ Injectables</h3>
        <div className={styles.example}>
          <div className={styles.meta}>2★ · Injectables · clinical tone</div>
          <p className={styles.review}>
            “Waited 35 minutes for Botox and felt rushed when I asked questions about swelling
            afterward.”
          </p>
          <p className={styles.reply}>
            We are sorry that aspects of your visit did not meet our standards. We appreciate you
            bringing this to our attention after your Injectables visit. Please contact our
            practice manager directly so we can listen, review the details, and follow up offline
            with care.
          </p>
        </div>

        <h3>Public reply example — 1★ generic disappointment</h3>
        <div className={styles.example}>
          <div className={styles.meta}>1★ · Body contouring · warm tone</div>
          <p className={styles.review}>
            “Total disappointment. The staff was kind but I did not see the results I expected.”
          </p>
          <p className={styles.reply}>
            We are sorry your visit did not feel as seamless as it should have. We appreciate you
            bringing this to our attention after your Body contouring visit. Please contact our
            practice manager directly so we can listen, review the details, and follow up offline
            with care.
          </p>
        </div>

        <h2>Step 3 — Run the private follow-up the same day</h2>
        <p>
          The public reply is for the audience. The private follow-up is where the relationship is
          either rebuilt or escalated. Use this internal checklist:
        </p>
        <ul className={styles.checklist}>
          <li>Call the guest within one business day. Voicemail counts; document the attempt.</li>
          <li>
            Have a manager or licensed provider review any clinical concerns before responding
            beyond the initial public reply.
          </li>
          <li>
            Document the timeline in the EMR or operational log — date, channel, who spoke, what
            was offered.
          </li>
          <li>
            Decide on the resolution path (refund, re-treatment, complimentary visit, no action)
            with provider sign-off when clinical.
          </li>
          <li>
            If the guest agrees the issue is resolved, ask whether they&apos;d like to update the
            review — never demand it.
          </li>
        </ul>

        <h2>Step 4 — Escalate clinical concerns through the right channel</h2>
        <p>
          Reviews that mention swelling, an injection reaction, burns, scarring, or any
          medication should never be handled by the front desk alone. Loop in the medical director
          or supervising provider before any reply leaves the practice. If the situation involves
          adverse events, follow your standard reporting workflow rather than relying on the
          review thread.
        </p>

        <div className={styles.callout}>
          <strong>What SpaReply&apos;s generator does for low-rating reviews.</strong>
          <p>
            When you set the rating to 1 or 2, the{" "}
            <Link href="/#generator">free generator</Link> automatically picks the empathetic
            opener, points the guest to the practice manager, and returns a private follow-up
            checklist plus safety notes. For injectables, lasers, peels, and any review that
            mentions a clinical keyword, it adds an extra note reminding you to route to a
            licensed provider.
          </p>
        </div>

        <h2>What to never do in a negative reply</h2>
        <ul>
          <li>
            <strong>Don&apos;t confirm the guest is a patient.</strong> &ldquo;Thanks for your
            visit on March 4&rdquo; is a HIPAA problem.
          </li>
          <li>
            <strong>Don&apos;t argue with the facts publicly.</strong> If you disagree, say so
            offline.
          </li>
          <li>
            <strong>Don&apos;t offer compensation in the public thread.</strong> It invites
            review-based negotiation from future guests.
          </li>
          <li>
            <strong>Don&apos;t copy-paste the same response across reviews.</strong> Google&apos;s
            ranking signals reward unique, on-topic replies; reviewers notice templates.
          </li>
        </ul>

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

        <div className={styles.linkRow}>
          <Link href="/negative-med-spa-review-response">
            <span>Playbook</span>
            Expanded negative med spa review playbook (six scripts)
          </Link>
          <Link href="/med-spa-review-response-examples">
            <span>Examples</span>
            Med spa review response examples by rating &amp; service
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
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
