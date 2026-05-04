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
  title: "Medical Spa Reputation Management — A System, Not an Agency | SpaReply",
  description:
    "Medical spa reputation management built around a 20-minute weekly review-reply block, a same-day negative-review escalation path, Google Business Profile prompts, and a front-desk SOP — without a $1,500/mo agency.",
  alternates: { canonical: "/medical-spa-reputation-management" },
  openGraph: {
    title: "Medical Spa Reputation Management — A System, Not an Agency",
    description:
      "An operational reputation system for med spas: weekly review-reply workflow, negative-review escalation, GBP and local SEO cadence, and a front-desk SOP.",
    type: "article",
  },
};

type WeeklyBlock = {
  minutes: string;
  title: string;
  detail: string;
};

const weeklyBlocks: WeeklyBlock[] = [
  {
    minutes: "0–3 min",
    title: "Pull the week's reviews",
    detail:
      "Open Google Business Profile (and Yelp / RealSelf if active), sort by Most recent, and copy the new reviews into your tracker. Mark each with rating, service line, and tone.",
  },
  {
    minutes: "3–6 min",
    title: "Triage the 1- and 2-stars",
    detail:
      "Flag any review mentioning pain, swelling, vision change, burn, blister, hyperpigmentation, vascular language, prolonged numbness, or a refund/legal threat. These pause the public reply and escalate to the medical director the same day.",
  },
  {
    minutes: "6–14 min",
    title: "Draft the 5★, 4★, and 3★ replies",
    detail:
      "Use the generator (or your toolkit templates) to draft a privacy-safe reply per review. Mirror one specific consult-quality detail. Skip clinical confirmations, product names, and device settings.",
  },
  {
    minutes: "14–17 min",
    title: "Run the 7-question safety check",
    detail:
      "Read each draft once against the safety check before posting. The single biggest reputation risk is a well-meaning reply that confirms care, names a treatment, or promises an outcome.",
  },
  {
    minutes: "17–19 min",
    title: "Post and log",
    detail:
      "Post each public reply. Log the reply text, who drafted it, and any escalation in the operations tracker. The next person on shift should be able to see what was already handled.",
  },
  {
    minutes: "19–20 min",
    title: "Queue next week's GBP post",
    detail:
      "Pick one Google Business Profile post angle from the prompt pack — review-themed, service-themed, or seasonal — and queue it for the week. Review momentum compounds when the GBP profile is also active.",
  },
];

type EscalationRow = {
  trigger: string;
  ownedBy: string;
  windowText: string;
};

const escalationLadder: EscalationRow[] = [
  {
    trigger:
      "Pain + discoloration after filler · vision change · burn or blister after laser · sudden hardening or growth in a body-contouring area · prolonged numbness past the documented window",
    ownedBy: "Medical director or supervising provider",
    windowText: "Same hour. Pause public reply. Begin incident documentation.",
  },
  {
    trigger:
      "Prolonged hyperpigmentation · persistent swelling · post-treatment reaction language · candidacy dispute on a treatment that was performed",
    ownedBy: "Medical director plus practice manager",
    windowText: "Same business day. Public reply is brief and routes to a private clinical channel.",
  },
  {
    trigger:
      "Refund ask · re-treatment ask · package math dispute · billing dispute · membership cancellation friction",
    ownedBy: "Practice manager",
    windowText: "Within 24 hours. Pull the chart, consent form, and booking record before any private call.",
  },
  {
    trigger:
      "Wait time · scheduling friction · upsell pressure · staff tone · cleanliness · parking",
    ownedBy: "Front-desk lead",
    windowText: "Within 24 hours. Reply names the friction, document the schedule pattern internally.",
  },
  {
    trigger: "Mistaken identity (review meant for another clinic) · review naming a competing provider",
    ownedBy: "Front-desk lead, with practice manager copy on the reply",
    windowText: "Within 24 hours. Confirm booking record before any public engagement; flag for platform removal where appropriate.",
  },
  {
    trigger: "Lawyer language · licensing-board language · adverse-event reporting language",
    ownedBy: "Medical director plus owner; counsel notified",
    windowText: "Same hour. Public reply is brief, professional, and offers a private channel. No defensive language. Counsel reviews the thread before further engagement.",
  },
];

type RoleRow = {
  role: string;
  owns: string;
  doesNotOwn: string;
};

const ownership: RoleRow[] = [
  {
    role: "Front-desk lead",
    owns: "The 20-minute weekly review-reply block. Drafting 3★, 4★, 5★ replies. Posting after safety check. Logging in the tracker. Triaging operational complaints.",
    doesNotOwn: "Clinical reply wording. Refund or re-treatment decisions. Adverse-event escalation language.",
  },
  {
    role: "Practice manager",
    owns: "The negative-review playbook. Refund and billing conversations. Private follow-up calls. The escalation ladder. Counsel and medical-director loop-in.",
    doesNotOwn: "Drafting clinical specifics. Sign-off on adverse events. Approving HIPAA-aware language without medical-director input.",
  },
  {
    role: "Medical director / supervising provider",
    owns: "Sign-off on any reply that touches a clinical concern. Adverse-event review. Chart review for outcome disputes. Final approval of HIPAA-aware reply rules clinic-wide.",
    doesNotOwn: "Day-to-day review replies. The weekly block. GBP posts and content calendar.",
  },
  {
    role: "Owner",
    owns: "Reading the weekly tracker. Setting the cadence. Approving the SOP and escalation ladder. Renewing counsel review of templates annually.",
    doesNotOwn: "Drafting individual replies. Day-of triage. Same-hour clinical escalation.",
  },
];

const localSeoTouchpoints = [
  {
    title: "Google Business Profile — weekly post cadence",
    detail:
      "One post per week, alternating service-themed (Hydrafacial, injectables, laser, peels, body contouring, memberships), review-themed (paraphrased 5★ moments without naming the reviewer), and seasonal angles. The profile that posts weekly outranks the profile that does not.",
  },
  {
    title: "Google Business Profile — Q&A monitoring",
    detail:
      "Monitor the GBP Q&A tab once per week. Anyone can post a question and anyone can answer — get to it before a stranger does. Pre-seed the top 5 questions you actually get on the phone.",
  },
  {
    title: "On-site reputation signals",
    detail:
      "A short, paraphrased reviews section on the homepage and on each service page. Never reproduce the full reviewer name without consent. Schema-mark service pages with the relevant local-business and service types.",
  },
  {
    title: "NAP and category hygiene",
    detail:
      "Name, Address, and Phone match exactly across GBP, the website footer, the booking platform, Yelp, and the major aggregators. Primary and secondary GBP categories reflect the service mix you actually want to be found for.",
  },
  {
    title: "Local citations and provider profiles",
    detail:
      "Maintain a small, deliberate list of local citations (state med-spa directory, the chamber of commerce, the GBP Service Areas you actually serve) — not a 200-listing dump. Provider RealSelf and Healthgrades profiles are reputation surfaces too; treat them like reviews.",
  },
  {
    title: "Review request cadence",
    detail:
      "Ask after the visit during the front-desk close-out, in a follow-up text or email 48 hours later, and never with incentive. A predictable trickle of organic 5★ reviews compounds; a paid surge does not.",
  },
];

const sevenQuestionCheck = [
  "Did I confirm the appointment, treatment, or provider in public?",
  "Did I name a product, device, syringe count, energy level, or technique?",
  "Did I diagnose, normalize, or rule out a clinical symptom?",
  "Did I promise a specific outcome, timeline, refund, or re-treatment?",
  "Did I share pricing, package math, or membership specifics in the thread?",
  "If this is a 1- or 2-star clinical concern, did a licensed provider sign off on the wording before posting?",
  "Did I route the actual decision to a real, monitored offline channel?",
];

const kpiList = [
  "Median rating across the last 90 days, per platform",
  "Reviews per month, broken out by service line",
  "Reply rate within 72 hours of post",
  "Negative-review resolution rate (private contact made and logged)",
  "Adverse-event escalations opened, closed, and median time-to-clinical-review",
  "GBP weekly posts shipped vs scheduled",
  "Conversion: reviewer → repeat visitor and reviewer → membership over the next 90 days",
];

const failureModes = [
  {
    title: "Replies sit for two weeks",
    detail:
      "The single most common pattern. A 14-day reply gap signals to future readers that the clinic does not pay attention. Fix: a named owner, a fixed weekly block on the calendar, and a tracker that makes the gap visible.",
  },
  {
    title: "The owner replies to the 1-stars personally — defensively",
    detail:
      "Defensive replies make the thread worse and survive on Google forever. Fix: the negative-review playbook removes the owner from the keyboard at the moment of upset; the practice manager runs a tested script.",
  },
  {
    title: "Front-desk replies confirm care",
    detail:
      "Well-meaning replies that thank a guest for their Hydrafacial or apologize for their filler experience confirm protected health details in public. Fix: the 7-question safety check and the never-write-publicly list, run before every post.",
  },
  {
    title: "Negative reviews escalate to chargebacks or board complaints",
    detail:
      "Escalation is almost always a downstream signal of slow private follow-up. Fix: the same-day escalation ladder, the practice-manager script for refund and re-treatment asks, and a documented internal log.",
  },
  {
    title: "GBP profile is dormant",
    detail:
      "A clinic with great reviews but no GBP posts loses ground to a clinic with average reviews and a weekly cadence. Fix: 25-prompt GBP pack, queued at the end of the weekly block.",
  },
];

export default function MedicalSpaReputationManagementPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Medical spa reputation management</div>
        <h1>Medical spa reputation management — a system the front desk can run, not a $1,500/mo agency.</h1>
        <p className={styles.lede}>
          Reputation is not a marketing feature for a med spa; it is operations. Reviews show up
          on the weekend, clinical concerns show up at the worst time, and the front desk needs to
          know what to say without paging the medical director for a wait-time complaint. This is
          the system: a 20-minute weekly review-reply block, a same-day negative-review escalation
          ladder, a Google Business Profile cadence the team can actually keep, and a front-desk
          SOP that documents who owns what.
        </p>

        <div className={styles.callout}>
          <strong>Who this is for.</strong>
          <p>
            Single-location and small-group med spas that want a repeatable reputation system run
            by the front desk and signed off by the medical director — without paying an agency
            $1,500 a month to draft the same five reply patterns over and over. If you have a
            Google Business Profile and reply to reviews on weekends because nobody else will,
            this is built for you.
          </p>
        </div>

        <h2>The four pillars of a med spa reputation system</h2>
        <ol>
          <li>
            <strong>A weekly review-reply workflow.</strong> One named owner, one fixed block on
            the calendar, one tracker. The cadence matters more than any individual reply.
          </li>
          <li>
            <strong>A same-day negative-review escalation ladder.</strong> Clear triggers,
            named owners, time windows, and a documented internal log. The ladder removes
            judgment calls from the moment of upset.
          </li>
          <li>
            <strong>A Google Business Profile + local SEO cadence.</strong> Weekly posts, Q&amp;A
            monitoring, NAP hygiene, schema, and a small deliberate citation list — so review
            momentum compounds into local-pack visibility.
          </li>
          <li>
            <strong>A front-desk SOP with a HIPAA-aware safety check.</strong> The 7-question
            check keeps every reply privacy-safe. The SOP names the owner of every step.
          </li>
        </ol>

        <h2>The 20-minute weekly review-reply block</h2>
        <p>
          The single most reliable change a clinic can make is putting a 20-minute review-reply
          block on the front-desk lead&rsquo;s calendar at the same time every week. Tuesday
          mid-morning works for most clinics — Monday is too noisy, Friday is too distracted, and
          weekends are when the reviews are written, not when the replies should be drafted.
        </p>
        <ul className={styles.checklist}>
          {weeklyBlocks.map((block) => (
            <li key={block.title}>
              <strong>
                {block.minutes} — {block.title}.
              </strong>{" "}
              {block.detail}
            </li>
          ))}
        </ul>

        <h2>The negative-review escalation ladder</h2>
        <p>
          Most reputation damage at a med spa is not caused by a bad review; it is caused by a
          slow, defensive, or improvised response to a bad review. The escalation ladder removes
          the judgment call from the moment of upset by naming the trigger, the owner, and the
          time window in advance.
        </p>
        <div style={{ overflowX: "auto", margin: "18px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid rgba(98, 58, 45, 0.18)" }}>
                <th style={{ padding: "10px 12px", fontWeight: 800, color: "#241713" }}>
                  Trigger language in the review
                </th>
                <th style={{ padding: "10px 12px", fontWeight: 800, color: "#241713" }}>
                  Owned by
                </th>
                <th style={{ padding: "10px 12px", fontWeight: 800, color: "#241713" }}>
                  Window
                </th>
              </tr>
            </thead>
            <tbody>
              {escalationLadder.map((row) => (
                <tr
                  key={row.trigger}
                  style={{ borderBottom: "1px solid rgba(98, 58, 45, 0.10)", verticalAlign: "top" }}
                >
                  <td style={{ padding: "12px", color: "#4d342d" }}>{row.trigger}</td>
                  <td style={{ padding: "12px", color: "#4d342d" }}>{row.ownedBy}</td>
                  <td style={{ padding: "12px", color: "#4d342d" }}>{row.windowText}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          SpaReply is editorial guidance only. Adverse-event review, clinical sign-off, and
          counsel decisions stay with the licensed provider, the medical director, and your
          attorney. The ladder above is a starting point, not a substitute.
        </p>

        <h2>Who owns what — the front-desk SOP, plainly stated</h2>
        <p>
          The most common reason a reputation system breaks down is unclear ownership. The
          medical director should not be drafting replies to a wait-time review; the front desk
          should not be writing about pain after filler. Print the table and tape it to the
          monitor.
        </p>
        <div style={{ overflowX: "auto", margin: "18px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid rgba(98, 58, 45, 0.18)" }}>
                <th style={{ padding: "10px 12px", fontWeight: 800, color: "#241713" }}>Role</th>
                <th style={{ padding: "10px 12px", fontWeight: 800, color: "#241713" }}>Owns</th>
                <th style={{ padding: "10px 12px", fontWeight: 800, color: "#241713" }}>
                  Does not own
                </th>
              </tr>
            </thead>
            <tbody>
              {ownership.map((row) => (
                <tr
                  key={row.role}
                  style={{ borderBottom: "1px solid rgba(98, 58, 45, 0.10)", verticalAlign: "top" }}
                >
                  <td style={{ padding: "12px", color: "#241713", fontWeight: 700 }}>{row.role}</td>
                  <td style={{ padding: "12px", color: "#4d342d" }}>{row.owns}</td>
                  <td style={{ padding: "12px", color: "#4d342d" }}>{row.doesNotOwn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>The 7-question safety check, run before every post</h2>
        <p>
          The single biggest reputation risk for a med spa is a well-meaning reply that confirms
          care, names a treatment, or promises an outcome. Run each draft against this list before
          it goes live. If the answer to any question is &ldquo;yes,&rdquo; rewrite it.
        </p>
        <ul className={styles.checklist}>
          {sevenQuestionCheck.map((q, i) => (
            <li key={q}>
              <strong>{i + 1}.</strong> {q}
            </li>
          ))}
        </ul>

        <h2>Google Business Profile and local SEO — the prompts that compound</h2>
        <p>
          Reviews and local SEO are the same engine. A clinic that posts weekly to its Google
          Business Profile, monitors Q&amp;A, keeps NAP clean, and treats provider profiles as
          reputation surfaces will outrank a clinic with great reviews and a dormant profile.
          These are the touchpoints to keep on cadence.
        </p>
        <ul>
          {localSeoTouchpoints.map((t) => (
            <li key={t.title}>
              <strong>{t.title}.</strong> {t.detail}
            </li>
          ))}
        </ul>

        <h2>The KPIs to actually watch</h2>
        <p>
          Skip the vanity dashboard. These are the numbers that tell you the system is working,
          and they are all retrievable from Google Business Profile, your booking platform, and a
          simple spreadsheet.
        </p>
        <ul className={styles.checklist}>
          {kpiList.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>

        <h2>The five failure modes — and how the system removes them</h2>
        <ul>
          {failureModes.map((m) => (
            <li key={m.title}>
              <strong>{m.title}.</strong> {m.detail}
            </li>
          ))}
        </ul>

        <div className={styles.callout}>
          <strong>Compliance reminder.</strong>
          <p>
            SpaReply is HIPAA-aware editorial guidance — wording designed to acknowledge a guest
            without confirming protected health information in public. It is not a clinical,
            legal, or compliance service. Have your medical director and counsel sign off on the
            templates, the escalation ladder, and the SOP before you operationalize them
            clinic-wide. Adverse-event review and reporting decisions stay with licensed
            providers.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Try the weekly workflow today, in the free generator</strong>
            <p>
              Paste a recent Google review, pick rating, service, and tone, and the generator
              returns a privacy-safe public reply, a private follow-up checklist, and a clinical
              escalation note when one is needed. No login, no API key, no review text leaves
              your device.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_reputation_management" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <h2>Why most clinics buy the toolkit instead of an agency</h2>
        <p>
          A reputation agency for a single-location med spa runs $800–$1,500 a month, and the
          deliverable is usually a generic monthly reply summary plus a Google post or two. The
          $49 SpaReply toolkit hands the team the same operational artifacts — front-desk SOP,
          20 paste-ready replies, the negative-review playbook, the safety checklist, the GBP
          prompt pack, and a 4-week calendar — as editable Markdown, CSV, and a printable PDF.
          One purchase. The team owns the system.
        </p>
        <ul>
          <li>
            <strong>20 paste-ready replies</strong> across Hydrafacial, injectables, laser,
            peels, body contouring, and memberships — 5★ to 1★ in warm, polished, and clinical
            tones.
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
            <strong>Front-desk weekly SOP</strong> — the 20-minute Tuesday block, expanded into
            a printable run sheet with the safety check inline.
          </li>
          <li>
            <strong>Google Business Profile prompt pack</strong> with 13 post angles and headline
            patterns so review momentum compounds into local-pack visibility.
          </li>
          <li>
            <strong>4-week content calendar</strong> with paired GBP / review-reply / social /
            email rows so a single front-desk lead can run the cadence without an agency.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>See it before you spend $49.</strong>
          <p>
            Download the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_reputation_management" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>{" "}
            (cover, the 7-question safety check, three of the 20 paste-ready templates, the first
            three steps of the negative-review triage, and two GBP prompts) or open the full{" "}
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "seo_reputation_management" }}
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
            eventProperties={{ location: "seo_reputation_management_final" }}
          >
            {PRIMARY_CTA_LABEL}
          </TrackedAnchor>
        </div>

        <h2>Frequently asked, short and direct</h2>
        <h3>Is this a software platform?</h3>
        <p>
          No. SpaReply is a free in-browser review reply generator plus a one-time $49 toolkit of
          editable assets — templates, a printable SOP, a safety checklist, a GBP prompt pack, and
          a 4-week calendar. There is no login, no monthly fee, and no integration to maintain.
        </p>
        <h3>Do you respond to reviews on our behalf?</h3>
        <p>
          No. We do not log into Google Business Profile, post replies, or take action on the
          clinic&rsquo;s behalf. The toolkit gives the front desk the wording, workflow, and
          safety check; the team posts.
        </p>
        <h3>How long does it take to set up?</h3>
        <p>
          One sitting. Read the SOP and the HIPAA-aware reply rules once, drop the templates into
          a shared doc, and put the 20-minute weekly block on the front-desk lead&rsquo;s
          calendar. Most clinics are running the cadence the same week they buy.
        </p>
        <h3>Will this replace our medical director?</h3>
        <p>
          No, and it is not designed to. Clinical wording, adverse-event review, and outcome
          decisions stay with the licensed provider. The system removes the judgment call from
          the front desk on operational and structural reply patterns; clinical sign-off remains
          where it belongs.
        </p>

        <div className={styles.linkRow}>
          <Link href="/med-spa-review-reply-generator">
            <span>Tool</span>
            Free med spa review reply generator
          </Link>
          <Link href="/negative-med-spa-review-response">
            <span>Playbook</span>
            Negative med spa review response playbook
          </Link>
          <Link href="/med-spa-google-review-reply">
            <span>Workflow</span>
            Med spa Google review reply best practices
          </Link>
          <Link href="/med-spa-review-response-examples">
            <span>Examples</span>
            Med spa review response examples by rating
          </Link>
          <Link href="/aesthetic-clinic-review-templates">
            <span>Templates</span>
            Aesthetic clinic review templates by service
          </Link>
          <Link href="/local-seo-checklist">
            <span>Checklist</span>
            Med spa local SEO checklist
          </Link>
          <Link href="/botox-review-response-templates">
            <span>Templates</span>
            Botox &amp; injectables review response templates
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
