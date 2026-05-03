import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Med Spa Review Response Examples — Positive, Neutral & Negative | SpaReply",
  description:
    "Med spa review response examples across Botox, fillers, laser hair removal, Hydrafacial, body contouring, and consultations — 5★ to 1★ wording your front desk can paste today.",
  alternates: { canonical: "/med-spa-review-response-examples" },
  openGraph: {
    title: "Med Spa Review Response Examples",
    description:
      "Privacy-safe positive, neutral, and negative review reply examples for aesthetic clinics — service-by-service.",
    type: "article",
  },
};

type Example = {
  meta: string;
  review: string;
  reply: string;
  notes?: string;
};

const positive: Example[] = [
  {
    meta: "5★ · Hydrafacial · warm tone",
    review:
      "Loved my Hydrafacial with Mia. The spa felt calm and my skin looked refreshed before my event.",
    reply:
      "Thank you for sharing this with us, and for the kind words about Mia. We are glad the visit felt calm and that you walked out feeling refreshed before your event. The team looks forward to caring for you again soon.",
    notes:
      "Name the team member, mirror one detail (calm, refreshed, event), and invite them back without restating clinical specifics.",
  },
  {
    meta: "5★ · Membership · polished tone",
    review:
      "Three months into the membership and it has been worth it — easy booking, friendly front desk, consistent results.",
    reply:
      "Thank you for taking the time to share your membership experience. Easy booking and a calm front desk are exactly what we want every month to feel like. We appreciate your trust and look forward to your next visit.",
    notes:
      "Echo the operational positives the guest named (booking, front desk). Avoid generic gratitude that could apply to any business.",
  },
  {
    meta: "5★ · Laser hair removal · polished tone",
    review:
      "Halfway through my laser package and the results are great. The provider explained everything clearly at consult.",
    reply:
      "Thank you for the kind note. We are glad the consultation set clear expectations and that you are seeing the results you came in for. Our team appreciates the trust and we will keep that consistency in mind for the rest of your package.",
  },
];

const neutral: Example[] = [
  {
    meta: "4★ · Injectables · polished tone",
    review:
      "Provider was great and I am happy with my Botox results. Knocked a star because check-in was slow and I waited 25 minutes past my appointment time.",
    reply:
      "Thank you for the candid feedback. We are glad you are happy with your results and we hear you on the wait — we are reviewing how we pace check-in so the next visit feels smoother. Please feel welcome to ask for the lead at the front desk on your next appointment.",
    notes:
      "Acknowledge the positive (results), name the friction (wait), state what is changing — without overpromising or confirming the treatment in detail.",
  },
  {
    meta: "3★ · Chemical peel · clinical tone",
    review:
      "Peel itself was fine. I just wish someone had walked me through aftercare more carefully — I was unsure about sun exposure for the first two days.",
    reply:
      "Thank you for the feedback. Aftercare clarity is something we care about getting right, and we will share your note with the team so we can tighten how we walk every guest through the first 48 hours. If you would like a follow-up call from our practice manager, please reach us at the front desk.",
    notes:
      "Three-star reviews are operational signal. Keep the public reply short and route the actual fix offline.",
  },
  {
    meta: "4★ · Consultation · warm tone",
    review:
      "Consultation was thorough and the provider didn't push me into anything. Took off a star because the follow-up email with pricing took several days to arrive.",
    reply:
      "Thank you for the thoughtful note. We never want a thorough consult to be followed by a slow email — we are tightening that handoff so the pricing summary lands the same business day. We appreciate the feedback and look forward to seeing you again.",
  },
];

const negative: Example[] = [
  {
    meta: "2★ · Injectables · clinical tone",
    review:
      "Waited 35 minutes for Botox and felt rushed when I asked questions about swelling afterward.",
    reply:
      "We are sorry parts of your visit did not meet our standards. We appreciate you bringing this to our attention. Please contact our practice manager at hello@yourclinic.example so we can listen, review the details, and follow up offline with care.",
    notes:
      "Mentions of swelling or any post-treatment symptom must be routed to a licensed provider before any deeper public engagement.",
  },
  {
    meta: "1★ · Body contouring · warm tone",
    review:
      "Total disappointment. The staff was kind but I did not see results and felt I was not informed about realistic expectations.",
    reply:
      "We are sorry the visit did not feel as seamless as it should have. We appreciate you sharing this. Please reach our practice manager directly so we can listen, review the details, and follow up offline with care.",
    notes:
      "Outcome-based complaints are tricky. Acknowledge the experience, do not promise re-treatment publicly, and resolve in a private channel.",
  },
  {
    meta: "1★ · Laser hair removal · clinical tone",
    review:
      "Burn mark after my last laser appointment. No one has called me back.",
    reply:
      "We take this very seriously and are sorry for what you described. Please contact our practice manager at hello@yourclinic.example so a licensed provider can review your visit with you directly. We want to make this right.",
    notes:
      "Adverse event language (burn, reaction, scarring) is a clinical escalation. Loop in the medical director before any further reply leaves the practice.",
  },
];

function ExampleBlock({ items }: { items: Example[] }) {
  return (
    <>
      {items.map((example) => (
        <div className={styles.example} key={example.review}>
          <div className={styles.meta}>{example.meta}</div>
          <p className={styles.review}>&ldquo;{example.review}&rdquo;</p>
          <p className={styles.reply}>{example.reply}</p>
          {example.notes ? (
            <p style={{ marginTop: 12, fontSize: 14, color: "#6f554b" }}>
              <strong>Why this works:</strong> {example.notes}
            </p>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default function MedSpaReviewResponseExamplesPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Med spa review response examples</div>
        <h1>Med spa review response examples for every star rating and service.</h1>
        <p className={styles.lede}>
          Real positive, neutral, and negative review reply examples written for aesthetic clinics —
          covering Botox, fillers, laser hair removal, Hydrafacial, chemical peels, body contouring,
          consultations, and memberships. Use the patterns directly or paste your own review into
          the free generator and tune the tone.
        </p>

        <div className={styles.callout}>
          <strong>How to use this page.</strong>
          <p>
            Find the star rating and service that match your live review. Copy the structure (not
            the literal sentence) so each public reply still reads as written by your team. When in
            doubt about phrasing, run it through the{" "}
            <Link href="/#generator">free reply generator</Link> first.
          </p>
        </div>

        <h2>Positive review reply examples (5★ and strong 4★)</h2>
        <p>
          Strong reviews deserve real replies — not exclamation points. Name the team member, echo
          one specific detail the guest gave you, and invite them back. Skip clinical confirmations
          the guest did not already make publicly.
        </p>
        <ExampleBlock items={positive} />

        <h2>Neutral review reply examples (3★ and soft 4★)</h2>
        <p>
          Neutral reviews are mixed signal — usually one operational gripe wrapped in a positive
          experience. Acknowledge the positive, name the friction, and tell them what changes
          without overpromising. Move the actual fix to a private channel.
        </p>
        <ExampleBlock items={neutral} />

        <h2>Negative review reply examples (1★ and 2★)</h2>
        <p>
          For low ratings, the public goal is to de-escalate and route to a private channel.
          Anything mentioning a clinical reaction (swelling, burn, scarring, medication) must be
          escalated to a licensed provider before any deeper response leaves the practice. The full
          step-by-step lives in the{" "}
          <Link href="/negative-med-spa-review-response">negative med spa review response playbook</Link>.
        </p>
        <ExampleBlock items={negative} />

        <h2>What every public med spa reply should avoid</h2>
        <ul>
          <li>
            <strong>Confirming protected health information.</strong> Do not name a diagnosis,
            medication, dose, or treatment outcome the guest did not already share publicly.
          </li>
          <li>
            <strong>Guaranteeing cosmetic results.</strong> Use &ldquo;we will review&rdquo; or
            &ldquo;we will discuss&rdquo; instead of promising outcomes in a public thread.
          </li>
          <li>
            <strong>Defensive tone.</strong> Public defensiveness — even when the review feels
            unfair — costs more trust than the original review did.
          </li>
          <li>
            <strong>Copy-paste replies across reviews.</strong> Google&rsquo;s local ranking
            rewards unique, on-topic replies; reviewers notice templates.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>Want the full template bank?</strong>
          <p>
            The $49 toolkit ships 120+ paste-ready replies across services, ratings, and tones —
            plus the negative-review playbook, GBP prompts, and the front-desk SOP. Preview it
            first with the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_med_spa_examples" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>
            .
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Generate your own reply now</strong>
            <p>
              Paste a real review into the free generator and get a public reply, private
              follow-up checklist, and safety notes in one click.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_med_spa_examples" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <div className={styles.linkRow}>
          <Link href="/negative-med-spa-review-response">
            <span>Playbook</span>
            How to respond to a negative med spa review
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
