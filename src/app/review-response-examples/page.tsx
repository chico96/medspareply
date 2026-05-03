import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Med Spa Review Response Examples (5★ to 1★) | SpaReply",
  description:
    "Real-world med spa review response examples for Hydrafacial, Injectables, and Laser visits — across 5-star, 4-star, 3-star, and 1-2 star ratings, with privacy-safe phrasing.",
  alternates: { canonical: "/review-response-examples" },
  openGraph: {
    title: "Med Spa Review Response Examples",
    description:
      "Public reply, private follow-up, and safety phrasing examples for common med-spa review scenarios.",
    type: "article",
  },
};

type Example = {
  meta: string;
  review: string;
  reply: string;
};

const fiveStar: Example[] = [
  {
    meta: "5★ · Hydrafacial · warm tone",
    review:
      "Loved my Hydrafacial with Mia. The spa felt calm and my skin looked refreshed before my event.",
    reply:
      "Thank you for sharing this with us after your Hydrafacial visit. Mia and our team appreciate your feedback and the kind note about feeling calm and refreshed. We loved caring for you and look forward to welcoming you back soon.",
  },
  {
    meta: "5★ · Membership · polished tone",
    review:
      "Three months into the membership and it has been worth it — easy booking, friendly front desk, consistent results.",
    reply:
      "Thank you for taking the time to share your experience after your Membership visit. Our team appreciates your feedback about easy booking and consistent results. We appreciate your trust and look forward to your next visit.",
  },
];

const fourStar: Example[] = [
  {
    meta: "4★ · Laser hair removal · polished tone",
    review:
      "Results have been great so far, but the waiting room was crowded on my last visit and check-in took a while.",
    reply:
      "Thank you for taking the time to share your experience after your Laser hair removal visit. Our team appreciates the kind words about your results and the candid note about the waiting room — we are reviewing front-desk pacing so the next visit feels smoother.",
  },
];

const threeStar: Example[] = [
  {
    meta: "3★ · Chemical peel · clinical tone",
    review:
      "Peel itself was fine. I just wish someone had walked me through aftercare more carefully — I was unsure about sun exposure for the first two days.",
    reply:
      "Thank you for your feedback. We appreciate your feedback about your Chemical peel experience and will share it with our team. Your comments will be reviewed by our team as part of our quality process.",
  },
];

const lowStar: Example[] = [
  {
    meta: "2★ · Injectables · clinical tone",
    review:
      "Waited 35 minutes for Botox and felt rushed when I asked questions about swelling afterward.",
    reply:
      "We are sorry that aspects of your visit did not meet our standards. We appreciate you bringing this to our attention after your Injectables visit. Please contact our practice manager directly so we can listen, review the details, and follow up offline with care.",
  },
  {
    meta: "1★ · Body contouring · warm tone",
    review:
      "Total disappointment. The staff was kind but I did not see results and felt I was not informed about realistic expectations.",
    reply:
      "We are sorry your visit did not feel as seamless as it should have. We appreciate you bringing this to our attention after your Body contouring visit. Please contact our practice manager directly so we can listen, review the details, and follow up offline with care.",
  },
];

function ExampleBlock({ items }: { items: Example[] }) {
  return (
    <>
      {items.map((example) => (
        <div className={styles.example} key={example.review}>
          <div className={styles.meta}>{example.meta}</div>
          <p className={styles.review}>“{example.review}”</p>
          <p className={styles.reply}>{example.reply}</p>
        </div>
      ))}
    </>
  );
}

export default function ReviewResponseExamplesPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Med spa review response examples</div>
        <h1>Med spa review response examples for every rating.</h1>
        <p className={styles.lede}>
          These examples are taken straight from SpaReply&apos;s public reply generator so you
          can see what kinds of outputs our pilot users get. They are written for aesthetic
          clinics, with safety language baked in and zero protected health detail.
        </p>

        <div className={styles.callout}>
          <strong>How to use this page.</strong>
          <p>
            Skim the examples that match your most common review patterns. When you find phrasing
            you&apos;d use, paste your own review into the{" "}
            <Link href="/#generator">free generator</Link> with the matching service and tone — the
            output is deterministic, so you&apos;ll get the same structure every time.
          </p>
        </div>

        <h2>5-star review responses</h2>
        <p>
          Five-star responses should name the team member, mirror the guest&apos;s detail, and
          invite them back without sounding scripted. Avoid restating clinical outcomes the guest
          didn&apos;t already mention.
        </p>
        <ExampleBlock items={fiveStar} />

        <h2>4-star review responses</h2>
        <p>
          A 4-star reviewer usually liked the visit but flagged one issue. Acknowledge the
          positive, name the friction, and tell them what changes — without overpromising.
        </p>
        <ExampleBlock items={fourStar} />

        <h2>3-star review responses</h2>
        <p>
          Three-star reviews are the hardest because the signal is mixed. Keep the public reply
          short and neutral, then move the actual conversation to a private channel.
        </p>
        <ExampleBlock items={threeStar} />

        <h2>1- and 2-star review responses</h2>
        <p>
          For low ratings, your goal is to de-escalate publicly and resolve privately. See the{" "}
          <Link href="/negative-review-response">negative med spa review response playbook</Link>{" "}
          for the full step-by-step.
        </p>
        <ExampleBlock items={lowStar} />

        <h2>What every public reply should avoid</h2>
        <ul>
          <li>
            <strong>Protected health information.</strong> Never confirm a diagnosis, medication,
            or treatment outcome the guest didn&apos;t already share publicly.
          </li>
          <li>
            <strong>Guarantees of cosmetic results.</strong> Use language like &ldquo;we&apos;ll
            review&rdquo; or &ldquo;we&apos;ll discuss&rdquo; instead of promising outcomes.
          </li>
          <li>
            <strong>Defensive tone.</strong> Even when a review feels unfair, public defensiveness
            costs more trust than the original review did.
          </li>
        </ul>

        <div className={styles.cta}>
          <div>
            <strong>Generate your own reply now</strong>
            <p>
              Paste a real review into the free generator and get a public reply, private
              follow-up, and safety notes in one click.
            </p>
          </div>
          <Link href="/#generator">Open the generator</Link>
        </div>

        <div className={styles.linkRow}>
          <Link href="/med-spa-review-response-examples">
            <span>Examples</span>
            Med spa review response examples by rating &amp; service
          </Link>
          <Link href="/botox-review-response-templates">
            <span>Templates</span>
            Botox &amp; injectables review response templates
          </Link>
          <Link href="/negative-med-spa-review-response">
            <span>Playbook</span>
            Negative med spa review response playbook
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
