import type { Metadata } from "next";
import Link from "next/link";
import { getToolkitCheckoutUrl, isStripeCheckoutEnabled } from "@/lib/checkout";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "../_components/content.module.css";

const TOOLKIT_CHECKOUT_URL = getToolkitCheckoutUrl();
const STRIPE_ENABLED = isStripeCheckoutEnabled();
const PRIMARY_CTA_LABEL = STRIPE_ENABLED
  ? "Buy the $49 toolkit"
  : "Get the $49 toolkit";
const PRIMARY_CTA_TARGET = STRIPE_ENABLED ? "_blank" : undefined;
const PRIMARY_CTA_REL = STRIPE_ENABLED ? "noopener noreferrer" : undefined;

export const metadata: Metadata = {
  title: "Free Med Spa Review Reply Generator (No Login, No AI Keys) | SpaReply",
  description:
    "Free med spa review reply generator. Paste a Google review, pick rating, service, and tone — get a privacy-safe public reply, private follow-up checklist, and clinical safety notes in seconds.",
  alternates: { canonical: "/med-spa-review-reply-generator" },
  openGraph: {
    title: "Free Med Spa Review Reply Generator",
    description:
      "Browser-based med spa review response generator — no login, no API calls, no review text leaves the device.",
    type: "article",
  },
};

type Example = {
  meta: string;
  review: string;
  reply: string;
  followUp?: string;
};

const examples: Example[] = [
  {
    meta: "5★ · Hydrafacial · warm tone",
    review:
      "Loved my Hydrafacial with Mia. Spa felt calm and my skin looked refreshed before my event.",
    reply:
      "Thank you for the kind words. We are glad your visit felt calm and that you walked out ready for your event. Mia and the team appreciate the trust — we look forward to caring for you again.",
  },
  {
    meta: "3★ · Botox consult · clinical tone",
    review:
      "Botox consult was thorough but I had to wait 30 minutes past my appointment time.",
    reply:
      "Thank you for the candid feedback. A thorough consult should not start with a 30-minute wait, and we are reviewing how we pace consult days. We appreciate you bringing this to our attention.",
    followUp:
      "Front-desk lead checks the schedule pattern from that day. Practice manager calls within one business day to apologize and offer a complimentary follow-up.",
  },
  {
    meta: "1★ · Filler · clinical concern · escalate",
    review:
      "Pain and discoloration after my filler appointment that doesn't feel right.",
    reply:
      "We hear you and want to address this immediately. Please contact our practice manager directly so a licensed provider can speak with you today. We are taking this seriously.",
    followUp:
      "Pause public engagement after this reply. Loop in the medical director the same hour. Pain plus discoloration after filler is a same-day clinical priority and should not be triaged by the front desk.",
  },
];

export default function MedSpaReviewReplyGeneratorPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Free med spa review reply generator</div>
        <h1>Free med spa review reply generator — built for aesthetic clinics, not restaurants.</h1>
        <p className={styles.lede}>
          Paste a Google, Yelp, or RealSelf review, pick the rating, service, and tone, and the
          SpaReply generator returns a privacy-safe public reply, a private follow-up checklist,
          and a clinical-escalation note when one is needed. No login, no API key, no review text
          leaves the browser. Free to use, every reply, every time.
        </p>

        <div className={styles.cta}>
          <div>
            <strong>Open the free generator</strong>
            <p>
              The generator runs entirely in your browser. Designed for med-spa workflow:
              Hydrafacial, injectables, laser, peels, body contouring, and memberships — with
              tone presets and built-in HIPAA-aware guardrails.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_review_reply_generator_hero" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <h2>What this generator actually does</h2>
        <ul>
          <li>
            <strong>Reads the review locally.</strong> The text never leaves your browser. No API
            calls, no logs, no third-party AI keys to manage. The repo is open and you can read
            the generator in <code>src/lib/replyGenerator.ts</code>.
          </li>
          <li>
            <strong>Picks the right structural reply.</strong> 5-star replies mirror gratitude,
            3- and 4-star replies acknowledge the friction point, 1- and 2-star replies route to a
            real private channel without admitting clinical fact.
          </li>
          <li>
            <strong>Adds a private follow-up checklist.</strong> Critical reviews get a
            same-day operational checklist so the public reply is not the only response that
            happens.
          </li>
          <li>
            <strong>Flags clinical escalation.</strong> When the review mentions injectables,
            laser, peels, swelling, pain, or discoloration, it adds a note to loop in a licensed
            provider before the public reply ships.
          </li>
        </ul>

        <h2>How a real med spa uses it on Monday morning</h2>
        <ol>
          <li>
            Open Google Business Profile, sort reviews by &ldquo;Most recent,&rdquo; and work
            from the top down.
          </li>
          <li>
            Paste each review into the generator, pick rating, service, and tone, then copy the
            public reply into GBP.
          </li>
          <li>
            For 1- and 2-star reviews, run the private follow-up checklist before or right
            after posting — voicemail counts; document the attempt.
          </li>
          <li>
            Log the reply and any escalation in your operations tracker so the next person on
            shift can see what was already handled.
          </li>
        </ol>

        <h2>Three real examples the generator can produce</h2>
        <p>
          These are the exact kinds of outputs the free tool returns. Adapt the wording to your
          brand voice — the structure is what does the work, especially on the harder reviews.
        </p>

        {examples.map((example) => (
          <div className={styles.example} key={example.review}>
            <div className={styles.meta}>{example.meta}</div>
            <p className={styles.review}>&ldquo;{example.review}&rdquo;</p>
            <p className={styles.reply}>{example.reply}</p>
            {example.followUp ? (
              <p style={{ marginTop: 12, fontSize: 14, color: "#6f554b" }}>
                <strong>Private follow-up:</strong> {example.followUp}
              </p>
            ) : null}
          </div>
        ))}

        <h2>Why a generator alone is not a system</h2>
        <p>
          A free reply generator solves one review at a time. It does not solve the underlying
          operational problem most med spas have: nobody owns review replies, the front desk is
          guessing on tone, and 1-star reviews stack up over the weekend because there is no
          escalation path. That is what the $49 toolkit is for.
        </p>
        <ul>
          <li>
            <strong>The free generator</strong> handles a single reply with privacy-safe
            phrasing. It is the right tool for &ldquo;I need to respond to this one Google review
            in the next two minutes.&rdquo;
          </li>
          <li>
            <strong>The $49 toolkit</strong> is the repeatable system around it: 120+ paste-ready
            templates across services and ratings, the negative-review playbook with six public
            scripts, the HIPAA-aware safety checklist, the front-desk weekly SOP, GBP prompts,
            and the 90-day content calendar — so the entire team replies the same way without
            relying on a single owner.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>Privacy posture, plainly stated.</strong>
          <p>
            The generator does not call any AI service, does not send the review text to a
            server, and does not store anything between sessions. SpaReply phrasing is designed
            to be HIPAA-aware — it acknowledges without confirming care. It is not legal,
            medical, or compliance advice. Have your medical director or counsel sign off on
            templates before you operationalize them clinic-wide.
          </p>
        </div>

        <h2>What the toolkit adds for the team</h2>
        <ul className={styles.checklist}>
          <li>
            <strong>120+ paste-ready public reply templates</strong> across Hydrafacial,
            injectables, laser, peels, body contouring, and memberships — 5★ to 1★, warm,
            polished, and clinical tones.
          </li>
          <li>
            <strong>Negative-review playbook with six public scripts</strong> covering
            operational complaints, clinical concerns, billing disputes, hostile language,
            mistaken identity, and refund / re-treatment asks — plus a private SOP and a
            13-field tracker.
          </li>
          <li>
            <strong>HIPAA-aware safety checklist</strong> with a 7-question pre-post check, a
            never-write-publicly list, and a phrases-to-avoid table with safer rewrites.
          </li>
          <li>
            <strong>Front-desk weekly SOP</strong> — a 20-minute Tuesday block that triages,
            drafts, safety-checks, posts, and logs the week&rsquo;s reviews.
          </li>
          <li>
            <strong>Google Business Profile prompt pack</strong> with 25 post angles and
            headline patterns so review momentum compounds into local-pack visibility.
          </li>
          <li>
            <strong>90-day content calendar</strong> with paired GBP / review-reply / social /
            email rows so a single front-desk lead can run the cadence without an agency.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>See the toolkit before you spend $49.</strong>
          <p>
            Download the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_review_reply_generator" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>{" "}
            (cover, 7-question safety check, three of the 20 paste-ready templates, the first
            three steps of the negative-review triage, and two GBP prompts) or open the full{" "}
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "seo_review_reply_generator" }}
            >
              $49 toolkit preview
            </TrackedLink>{" "}
            to see every deliverable.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>{PRIMARY_CTA_LABEL}</strong>
            <p>
              $49 one-time. Polished 31-page PDF complete pack, six focused individual PDFs, and
              editable Markdown / CSV source files download instantly after Stripe checkout.
              7-day satisfaction refund — email hello@spareply.com.
            </p>
          </div>
          <TrackedAnchor
            href={TOOLKIT_CHECKOUT_URL}
            target={PRIMARY_CTA_TARGET}
            rel={PRIMARY_CTA_REL}
            event="stripe_cta_click"
            eventProperties={{ location: "seo_review_reply_generator_final" }}
          >
            {PRIMARY_CTA_LABEL}
          </TrackedAnchor>
        </div>

        <h2>Frequently asked, short and direct</h2>
        <h3>Is the generator really free?</h3>
        <p>
          Yes. There is no signup, no metering, no &ldquo;upgrade for more replies&rdquo;
          gate. Every reply you generate is free, every time. The $49 toolkit is a separate
          purchase and is optional.
        </p>
        <h3>Does it use ChatGPT or any AI service?</h3>
        <p>
          No. The generator is a deterministic, structural composer. It picks reply skeletons,
          mirrors specific phrases, and adds the right escalation and tone — all in your
          browser. No API calls.
        </p>
        <h3>Will it write the perfect sentence on its own?</h3>
        <p>
          No tool does that, including SpaReply. It gets you to a privacy-safe, on-tone draft in
          seconds — your team still adapts a phrase or two so it sounds like the clinic, not a
          template.
        </p>
        <h3>Does this make our replies HIPAA-safe?</h3>
        <p>
          SpaReply is <strong>HIPAA-aware</strong> editorial guidance — wording designed to
          acknowledge a guest without confirming protected health information in public. It is
          not a clinical, legal, or compliance service. Final privacy and compliance decisions
          belong with your medical director, privacy officer, and counsel.
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
          <Link href="/medical-spa-reputation-management">
            <span>System</span>
            Medical spa reputation management system
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
