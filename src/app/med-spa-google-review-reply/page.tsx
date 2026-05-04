import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Med Spa Google Review Reply Guide — GBP Best Practices | SpaReply",
  description:
    "How to reply to Google reviews for a med spa: GBP best practices, the weekly owner workflow, keyword use without stuffing, and privacy-safe phrasing for Botox, laser, and facials.",
  alternates: { canonical: "/med-spa-google-review-reply" },
  openGraph: {
    title: "Med Spa Google Review Reply Guide",
    description:
      "GBP-specific best practices for replying to Google reviews at an aesthetic clinic — local SEO, workflow, and privacy-safe wording.",
    type: "article",
  },
};

type Example = {
  meta: string;
  review: string;
  reply: string;
};

const examples: Example[] = [
  {
    meta: "5★ · Hydrafacial · Scottsdale clinic",
    review:
      "Loved my Hydrafacial with Mia — calm spa, friendly front desk, my skin looked great before my event.",
    reply:
      "Thank you for the kind note. We are glad the Hydrafacial visit felt calm and that you walked out ready for your event. Mia and the front-desk team appreciate the trust — we look forward to caring for you again.",
  },
  {
    meta: "4★ · Laser hair removal · keyword-natural",
    review:
      "Three sessions in and laser hair removal is going well. Just wish booking was easier on weekends.",
    reply:
      "Thank you for sharing the progress, and for the candid note on weekend booking. We are looking at how we open Saturday slots so the next phase of your laser plan is easier to schedule. The team appreciates the feedback.",
  },
  {
    meta: "3★ · Consultation · keyword-natural",
    review:
      "Botox consult was thorough but I had to wait 30 minutes past my time.",
    reply:
      "Thank you for the candid feedback. A thorough consult should not come with a 30-minute wait, and we are reviewing how we pace the schedule on consult days. We appreciate you bringing this to our attention.",
  },
];

export default function MedSpaGoogleReviewReplyPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Med spa Google review reply</div>
        <h1>Med spa Google review reply guide — GBP best practices that actually move local rank.</h1>
        <p className={styles.lede}>
          Google Business Profile reviews are the highest-leverage local SEO surface a med spa
          owns. Reply quality, recency, and on-topic wording all feed the local algorithm — and
          they are the first thing future guests read. This is the workflow, the wording rules,
          and the keyword guidance that keeps your replies effective without sounding stuffed.
        </p>

        <div className={styles.callout}>
          <strong>The GBP rule of thumb.</strong>
          <p>
            Reply to every Google review within 24–48 hours, mention the service that was
            reviewed (once, naturally), and never confirm clinical detail the guest did not share
            publicly. Consistency on those three points beats any clever copy strategy.
          </p>
        </div>

        <h2>Why Google review replies matter for med spa local SEO</h2>
        <p>
          Google&rsquo;s local ranking weights review quantity, recency, rating, and the quality
          of owner replies. For aesthetic clinics, the practical effect is that:
        </p>
        <ul>
          <li>
            <strong>Recency matters more than volume.</strong> A clinic with a steady drip of
            recent replies usually outranks a clinic with more total reviews and no recent
            engagement.
          </li>
          <li>
            <strong>Service mentions help.</strong> When the public reply naturally includes the
            service the guest mentioned (Botox, Hydrafacial, laser hair removal, fillers), the
            review thread becomes relevant for &ldquo;[service] near [city]&rdquo; queries.
          </li>
          <li>
            <strong>Templated replies hurt.</strong> Identical owner replies across reviews look
            low-trust to guests and are pattern-matched as low-effort by Google.
          </li>
          <li>
            <strong>1- and 2-star handling is visible.</strong> A calm, accountable reply on a
            negative review reassures the next prospective guest more than a wall of 5-star
            reviews ever could.
          </li>
        </ul>

        <h2>The owner / manager weekly workflow</h2>
        <p>
          Pick a 30-minute slot once per week and put it on a named person&rsquo;s calendar — the
          practice manager or front-desk lead, not &ldquo;the team.&rdquo; Run this every week
          without skipping:
        </p>
        <ul className={styles.checklist}>
          <li>
            Open Google Business Profile and sort reviews by &ldquo;Most recent&rdquo; — work
            from the top down through anything from the past seven days.
          </li>
          <li>
            For each review, paste the text into the{" "}
            <Link href="/#generator">free reply generator</Link>, pick the rating, service, and
            tone, then post the public reply.
          </li>
          <li>
            For 1- and 2-star reviews, run the private follow-up checklist before or right after
            posting — voicemail counts, document the attempt.
          </li>
          <li>
            Add 2–3 fresh photos to GBP from the week (treatment area, member event, before /
            after with consent) — fresh media compounds the same recency signal.
          </li>
          <li>
            Publish one Google Business Profile post — a current offer, a seasonal angle, or a
            short tip from a recent treatment.
          </li>
          <li>
            Note any review insight that is worth turning into a treatment-page FAQ or a future
            GBP post topic.
          </li>
        </ul>

        <h2>How to use service keywords without stuffing</h2>
        <p>
          The right amount of keyword in a Google reply is one — and it has to read like the
          guest already mentioned it. The bad pattern is appending &ldquo;Botox in [city] near
          you!&rdquo; to every reply. The good pattern is naming the service the guest already
          named, in the natural sentence where it belongs.
        </p>
        <ul>
          <li>
            <strong>Mirror, don&rsquo;t stuff.</strong> If the guest said &ldquo;Hydrafacial,&rdquo;
            you can say &ldquo;Hydrafacial.&rdquo; If they said &ldquo;facial,&rdquo; do not
            upgrade it to &ldquo;Hydrafacial-with-LED&rdquo; in the reply.
          </li>
          <li>
            <strong>Skip the city tag.</strong> Your address is on your GBP. Adding &ldquo;in
            Scottsdale&rdquo; to every reply reads as marketing; mention city only when the guest
            did, or when the context is genuinely local (&ldquo;the Scottsdale team&rdquo;).
          </li>
          <li>
            <strong>One service mention per reply.</strong> Repeating a service inside the same
            three-sentence reply is the line where natural becomes stuffed.
          </li>
          <li>
            <strong>Provider names beat keywords.</strong> &ldquo;Mia and the team&rdquo; reads
            more authentic than another keyword and still helps the future guest picture the
            visit.
          </li>
        </ul>

        <h2>Three GBP-ready Google review reply examples</h2>
        <p>
          Each example is written so it could be pasted into a Google Business Profile owner
          reply today. The keyword shows up once, the team gets named, and no clinical detail is
          confirmed beyond what the guest said.
        </p>

        {examples.map((example) => (
          <div className={styles.example} key={example.review}>
            <div className={styles.meta}>{example.meta}</div>
            <p className={styles.review}>&ldquo;{example.review}&rdquo;</p>
            <p className={styles.reply}>{example.reply}</p>
          </div>
        ))}

        <h2>Privacy-safe wording for public Google replies</h2>
        <ul>
          <li>
            <strong>Do not confirm the appointment.</strong> &ldquo;Thanks for your visit on
            March 4 for your Botox&rdquo; tells the public this person is your patient and what
            they had done.
          </li>
          <li>
            <strong>Do not name product, dose, or units.</strong> Even when the guest does — your
            reply is read by future guests and counsel, not just this person.
          </li>
          <li>
            <strong>Do not diagnose or guarantee outcomes.</strong> Use &ldquo;we will
            review&rdquo; or &ldquo;we will discuss&rdquo; instead of clinical statements or
            promises.
          </li>
          <li>
            <strong>Do route to a real channel.</strong> A monitored practice-manager inbox or
            phone number is the right offline channel. A generic &ldquo;contact us&rdquo; reads
            as deflection.
          </li>
        </ul>

        <h2>Owner-reply mistakes that quietly tank GBP performance</h2>
        <ul>
          <li>
            <strong>Replying only to 5-star reviews.</strong> Selective owner engagement signals
            avoidance to future guests and to Google.
          </li>
          <li>
            <strong>Replying weeks late.</strong> Recency is a ranking input. A reply two months
            after the review barely counts.
          </li>
          <li>
            <strong>Replying with the same paragraph.</strong> Even spaced over weeks, identical
            replies are obvious — and actively reduce trust.
          </li>
          <li>
            <strong>Defending in public.</strong> Even when the review feels unfair, a defensive
            tone costs more trust than the original review did.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>What the toolkit adds for Google review workflow.</strong>
          <p>
            The $49 toolkit ships the front-desk SOP that wires this weekly cadence into the
            schedule, plus 20 paste-ready replies across services, ratings, and tones. Preview
            it first with the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_google_review_reply" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>{" "}
            or open the{" "}
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "seo_google_review_reply" }}
            >
              $49 toolkit preview
            </TrackedLink>.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Run this week&rsquo;s Google replies in 10 minutes</strong>
            <p>
              Paste each review into the free generator, pick rating, service, and tone, then
              copy the public reply, private follow-up checklist, and safety notes.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_google_review_reply" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <div className={styles.linkRow}>
          <Link href="/med-spa-review-response-examples">
            <span>Examples</span>
            Med spa review response examples by rating
          </Link>
          <Link href="/botox-review-response-templates">
            <span>Templates</span>
            Botox &amp; injectables review response templates
          </Link>
          <Link href="/negative-med-spa-review-response">
            <span>Playbook</span>
            Negative med spa review response playbook
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
