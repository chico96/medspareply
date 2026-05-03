import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./page.module.css";

const SUPPORT_MAILTO =
  "mailto:hello@spareply.com?subject=Toolkit%20support%20%E2%80%94%20%2449%20bundle";
const REFUND_MAILTO =
  "mailto:hello@spareply.com?subject=Refund%20request%20%E2%80%94%20%2449%20toolkit";

export const metadata: Metadata = {
  title: "Buyer toolkit · MedSpa Review + Local SEO Toolkit | SpaReply",
  description:
    "Buyer-only toolkit page for the $49 SpaReply Med Spa Review + Local SEO Toolkit. Setup SOP, HIPAA-aware reply rules, 20+ ready-to-copy reply templates, negative-review triage, GBP prompts, and a 4-week content calendar.",
  alternates: { canonical: "/toolkit" },
  robots: { index: false, follow: false },
};

type ToolkitDownload = {
  filename: string;
  href: string;
  label: string;
  format: string;
  description: string;
};

const toolkitDownloads: ToolkitDownload[] = [
  {
    filename: "front-desk-review-reply-sop.md",
    href: "/downloads/spareply-toolkit/front-desk-review-reply-sop.md",
    label: "Front-desk reply SOP",
    format: "Markdown · editable",
    description:
      "The 20-minute setup block, the HIPAA-aware do/don't list, the 7-question safety check, and the daily/weekly/monthly cadence — in one editable file.",
  },
  {
    filename: "review-reply-template-bank.md",
    href: "/downloads/spareply-toolkit/review-reply-template-bank.md",
    label: "Review reply template bank",
    format: "Markdown · editable",
    description:
      "20 paste-ready replies across 5★ praise, staff shoutouts, treatment mentions, neutral 3★, wait-time and pricing complaints, and negative reviews — plus the PHI-risky → safer rewrite table.",
  },
  {
    filename: "negative-review-triage-checklist.md",
    href: "/downloads/spareply-toolkit/negative-review-triage-checklist.md",
    label: "Negative-review triage checklist",
    format: "Markdown · printable",
    description:
      "The 8-step triage: pre-checks, lane decision, draft from template, run the 7-question safety check, post, log, and Google policy flag — with a sign-off block for the practice manager.",
  },
  {
    filename: "google-business-profile-content-calendar.csv",
    href: "/downloads/spareply-toolkit/google-business-profile-content-calendar.csv",
    label: "GBP + content calendar (4 weeks)",
    format: "CSV · spreadsheet-ready",
    description:
      "Week-by-week schedule across GBP posts, review work, email, and SEO focus — with post drafts, owner column, and status column. Drop into Google Sheets and assign by name.",
  },
  {
    filename: "local-seo-prompts.md",
    href: "/downloads/spareply-toolkit/local-seo-prompts.md",
    label: "Local SEO + GBP prompt pack",
    format: "Markdown · editable",
    description:
      "13 GBP post angles, a treatment-page outline, and city/neighborhood angles — the prompts that pair with the 4-week calendar.",
  },
  {
    filename: "operating-cadence.md",
    href: "/downloads/spareply-toolkit/operating-cadence.md",
    label: "Operating cadence (print & tape)",
    format: "Markdown · printable",
    description:
      "The week, on a single page: daily 10-minute slot, daily 15-minute approval, the Tuesday 20-minute SOP, the Friday huddle, and the monthly + quarterly review.",
  },
];

const setupSteps = [
  {
    minutes: "0–3 min",
    title: "Pin this page and pull up Google Business Profile",
    body: "Bookmark /toolkit in the front-desk browser. Open your clinic's Google Business Profile in a second tab and sort reviews by newest. The whole front-desk reply workflow lives between these two tabs.",
  },
  {
    minutes: "3–8 min",
    title: "Read the HIPAA-aware reply rules below once",
    body: "Front desk reads the do/don't list and the PHI-risky phrasing table. The rule that matters most: never confirm a treatment a guest didn't already name themselves. Print the rules and tape them next to the workstation.",
  },
  {
    minutes: "8–14 min",
    title: "Triage the open review queue",
    body: "Sort by rating. Anything 3 stars or below goes to the practice manager for review before posting. 4–5 star replies can be drafted by a trained front-desk lead and approved in a daily batch.",
  },
  {
    minutes: "14–18 min",
    title: "Draft the first three replies from the templates",
    body: "Pick the closest template, paste it into a Google Doc, replace bracketed placeholders, and run the 7-question safety check. Don't post yet — drafts marinate until the daily approval window.",
  },
  {
    minutes: "18–20 min",
    title: "Set the daily approval window and the weekly cadence",
    body: "Default cadence: 10 minutes daily for drafts, one 15-minute approval window for the practice manager, and a 20-minute Tuesday block to clear anything sitting in the tracker. Add it to the front-desk shared calendar.",
  },
];

const replyDoList = [
  "Thank the guest by first name only.",
  "Acknowledge the visit without naming the treatment unless the guest named it first.",
  "Praise the team member by first name if the guest named them.",
  "Invite further conversation through a private channel for anything sensitive.",
  "Keep replies under 60 words for 5-star and under 90 words for negative reviews.",
  "Have a second person read every reply before it goes live.",
];

const replyDontList = [
  "Confirm or deny that someone is or was a patient at your clinic.",
  "Name a specific treatment the guest didn't already mention publicly.",
  "Reference dosages, units, brands, products, or clinical outcomes.",
  "Apologize in a way that admits liability before the practice manager reviews.",
  "Promise refunds, comps, or remedies in public — move those offline.",
  "Use exclamation points, emoji, or all-caps. The clinical tone is the point.",
];

const phiRiskyPhrasing = [
  {
    risky: "\"So glad your Botox at our Scottsdale location went well!\"",
    why: "Confirms a specific treatment and a specific location for a named individual.",
    safer:
      "\"Thank you for trusting our team with your visit. We're glad it felt calm and professional — we look forward to welcoming you back.\"",
  },
  {
    risky: "\"We're sorry the laser hair removal package didn't meet your expectations.\"",
    why: "Confirms the treatment and implies a paid course of care for the named guest.",
    safer:
      "\"We're sorry your visit didn't feel as seamless as it should have. Please reach our practice manager at [practice manager email] so we can listen and follow up privately.\"",
  },
  {
    risky: "\"Mia is one of our best injectors — she'll take great care of you next time.\"",
    why: "Implies the guest received injectables and discloses provider scope of practice in a public reply.",
    safer:
      "\"Mia and the team appreciated caring for you. We'll pass your kind words along — we look forward to welcoming you back.\"",
  },
  {
    risky: "\"Sorry the results from your peel weren't what you wanted — refund issued.\"",
    why: "Confirms treatment, outcome, and a financial remedy publicly. Refunds belong offline.",
    safer:
      "\"We're sorry your visit didn't meet your expectations. Please email [practice manager email] so we can discuss this privately and make it right.\"",
  },
  {
    risky: "\"Your Hydrafacial with Mia at our Tuesday clinic was such a treat for us!\"",
    why: "Confirms treatment, provider, day, and location for a named guest in one line.",
    safer:
      "\"Thank you for the kind note. The team appreciated caring for you and looks forward to welcoming you back.\"",
  },
  {
    risky: "\"Glad your skin cleared up after the chemical peel — see you next month!\"",
    why: "Confirms a clinical outcome and a return appointment publicly.",
    safer:
      "\"Thank you for sharing this. We're glad the visit felt calm and professional, and we look forward to seeing you again.\"",
  },
];

type ReplyTemplate = {
  scenario: string;
  text: string;
};

type ReplyCategory = {
  category: string;
  guidance: string;
  templates: ReplyTemplate[];
};

const replyCategories: ReplyCategory[] = [
  {
    category: "5-star praise · general",
    guidance:
      "Short, warm, clinical. Thank by first name, acknowledge the team, invite a return — without naming any treatment the guest didn't mention.",
    templates: [
      {
        scenario: "Warm tone · no treatment named",
        text: "Thank you for the kind note, [guest first name]. The team appreciated caring for you, and we're glad the visit felt calm and professional. We look forward to welcoming you back.",
      },
      {
        scenario: "Polished tone · first-time guest",
        text: "Welcome to the clinic, [guest first name], and thank you for trusting us with your first visit. The whole team is glad you felt at ease — we'll be here whenever you'd like to come back.",
      },
      {
        scenario: "Clinical tone · returning guest",
        text: "Thank you, [guest first name]. It's a pleasure to have you back with us. We appreciate you taking a moment to share your experience, and we look forward to your next visit.",
      },
    ],
  },
  {
    category: "5-star praise · staff shoutout",
    guidance:
      "Echo only the staff first name the guest used. Don't add titles or scope (\"injector,\" \"laser tech\") that the guest didn't write themselves.",
    templates: [
      {
        scenario: "Provider named by guest",
        text: "Thank you for the kind words, [guest first name]. [Provider first name] and the team appreciated caring for you — we'll pass your message along. We look forward to welcoming you back.",
      },
      {
        scenario: "Front desk shoutout",
        text: "Thank you, [guest first name]. [Front-desk first name] takes a lot of pride in making the front of the clinic feel calm and welcoming, and we'll share your note with them. We look forward to seeing you again.",
      },
      {
        scenario: "Whole-team shoutout",
        text: "Thank you, [guest first name]. The whole team will be glad to hear this. We're proud of the way they care for every guest, and your kind words mean a lot.",
      },
    ],
  },
  {
    category: "Treatment mention by guest",
    guidance:
      "Only when the guest named the treatment first. Reflect their wording neutrally — don't add brand names, units, or outcome promises.",
    templates: [
      {
        scenario: "Hydrafacial · guest-named",
        text: "Thank you for the kind note, [guest first name]. We're glad the visit felt refreshing, and the team enjoyed taking care of you. We look forward to welcoming you back when you're ready.",
      },
      {
        scenario: "Injectables · guest-named",
        text: "Thank you for trusting us with your visit, [guest first name]. Our providers take a careful, conservative approach, and we're glad you felt that during your appointment. We look forward to seeing you again.",
      },
      {
        scenario: "Laser / peel / membership · guest-named",
        text: "Thank you, [guest first name]. We're glad the experience felt calm and well-explained from start to finish. The team will appreciate your kind words — we look forward to your next visit.",
      },
    ],
  },
  {
    category: "Neutral 3-star reviews",
    guidance:
      "Acknowledge specifically what the guest flagged. Don't argue. Offer a private channel. Keep it under 90 words.",
    templates: [
      {
        scenario: "Mixed feedback · default",
        text: "Thank you for the honest feedback, [guest first name]. We take notes like yours seriously and we'd like to understand the experience better. Please reach our practice manager at [practice manager email] so we can listen and improve. We appreciate you taking the time to share this.",
      },
      {
        scenario: "Liked the visit, not the booking",
        text: "Thank you for sharing this, [guest first name]. We're glad the visit itself felt good, and we hear you on the booking experience — we're working on tightening that. If you'd like to share more, please email [practice manager email] so we can follow up directly.",
      },
    ],
  },
  {
    category: "Wait-time complaint",
    guidance:
      "Acknowledge the time, don't make excuses, name the operational change you'll consider. Move details to a private channel.",
    templates: [
      {
        scenario: "Long check-in or chair time",
        text: "We're sorry your visit didn't run on time, [guest first name]. Schedule slips are something we take seriously, and your note will go to our practice manager so we can review what happened. Please email [practice manager email] if you'd like to talk through it directly — we'd appreciate the chance to make it right.",
      },
      {
        scenario: "Recurring delays · regular guest",
        text: "Thank you for the candor, [guest first name]. You shouldn't be waiting that long, especially as a regular. Our practice manager would like to look at your recent visits and understand what's happening on our end — please reach them at [practice manager email].",
      },
    ],
  },
  {
    category: "Pricing complaint",
    guidance:
      "Don't defend the price publicly. Validate the guest's experience, point them to a consult, and move money conversations offline.",
    templates: [
      {
        scenario: "Sticker shock · membership-fit guest",
        text: "Thank you for sharing this, [guest first name]. Pricing should be clear before you book, and we hear you. If you'd like, our practice manager can walk you through the options — including our membership — at [practice manager email]. We appreciate the feedback either way.",
      },
      {
        scenario: "Felt the value didn't match",
        text: "We're sorry the value of your visit didn't land the way it should have, [guest first name]. We'd like to understand more so we can do better. Please email [practice manager email] — we read every note personally and we'll follow up directly.",
      },
    ],
  },
  {
    category: "Negative review · offline follow-up",
    guidance:
      "Default public reply: short, calm, route to private channel. Never debate facts publicly. Never confirm clinical specifics. Always escalate 1- and 2-star reviews to the practice manager before posting.",
    templates: [
      {
        scenario: "1★ default · no clinical claims",
        text: "We're sorry your visit didn't feel as seamless as it should have, [guest first name]. We appreciate you bringing this to our attention. Please contact our practice manager at [practice manager email] so we can listen, review the details, and follow up offline with care.",
      },
      {
        scenario: "1★ clinical concern raised",
        text: "Thank you for taking the time to write this, [guest first name]. Your wellbeing matters to us, and we want to make sure the right person on our team follows up. Please email our practice manager at [practice manager email] so we can connect you with a licensed provider directly.",
      },
      {
        scenario: "2★ billing or scheduling issue",
        text: "We're sorry this didn't go the way it should have, [guest first name]. Billing and scheduling questions are best handled directly so we can look into your specific account. Please email [practice manager email] and we'll get back to you the same business day.",
      },
      {
        scenario: "Hostile tone · stay calm, don't engage",
        text: "We hear you, [guest first name], and we're sorry the experience felt this way. Our practice manager would like the chance to listen and understand more. Please reach them at [practice manager email] when you're able — we'll respond personally.",
      },
    ],
  },
];

const triageChecklist = [
  {
    title: "Acknowledge within 24 business hours",
    body: "A 1- or 2-star review left unanswered for a week reads worse than the review itself. Front-desk lead pings the practice manager the same day; the public reply does not need to be perfect, only careful.",
  },
  {
    title: "Identify the guest internally — quietly",
    body: "Search your booking system for the name in the review. Note their last visit, provider, and any prior issues in the internal tracker. Do not reference any of that in the public reply.",
  },
  {
    title: "Decide: clinical, operational, billing, or hostile",
    body: "Each lane has a different default reply. Clinical concerns route to a licensed provider. Operational issues route to the practice manager. Billing routes to the office manager. Hostile/bot-like reviews still get a calm public acknowledgement — no debate.",
  },
  {
    title: "Draft the public reply from the closest template",
    body: "Use the negative-review templates above. Replace placeholders. Cut anything that names a treatment, outcome, or scope. Keep the public reply under 90 words.",
  },
  {
    title: "Run the 7-question pre-post safety check",
    body: "1) Did the guest write the detail publicly first? 2) Is the reply free of treatment specifics? 3) Free of outcome promises? 4) Anything sensitive moved private? 5) Has a second person read it? 6) Tone matches a calm, well-run clinic? 7) Within 24 business hours of the review?",
  },
  {
    title: "Post the public reply, then send the private follow-up",
    body: "Public reply goes live first. Then the practice manager sends a private email or call referencing the offer in the public reply. The private follow-up is where the actual resolution happens.",
  },
  {
    title: "Log it in the tracker — every time",
    body: "Date · guest first name · star rating · category · provider · public reply · private follow-up status · resolution. The log is what turns review noise into operational signal at the monthly roll-up.",
  },
  {
    title: "Escalate flags or report fakes through Google",
    body: "If a review violates Google's policy (off-topic, fake, conflict of interest, hate speech), flag it through your GBP dashboard. Don't argue with it publicly while you wait — post the calm default reply, then flag.",
  },
];

const gbpPrompts = [
  {
    angle: "Spring glow plan",
    text: "Spring glow plan in [city]: Hydrafacial + LED finishing — three weekly slots open this week. Members save 15%. Booking link in our profile.",
  },
  {
    angle: "Pre-event prep",
    text: "Wedding, reunion, or photoshoot on the calendar? Our practice manager can map a 4–6 week prep timeline that fits around the event — no surprises, no rush. Reply or book a consult to start.",
  },
  {
    angle: "Membership spotlight",
    text: "Our [city] membership covers a monthly facial, member-only injector pricing, and priority booking for laser packages. The math works for guests who come in more than once a quarter. Details in profile.",
  },
  {
    angle: "Provider spotlight (no clinical claims)",
    text: "Meet [Provider first name] — [years] years of aesthetic experience, conservative philosophy, and a calm bedside manner. Booking with [Provider first name] is open Wednesday and Friday afternoons.",
  },
  {
    angle: "Behind the scenes · sterile prep",
    text: "Treatment-room turnover at our [city] clinic: sterile prep, fresh linens, and a 10-minute reset between every guest. The reason your visit feels calm is because the back-of-house runs on a clock.",
  },
  {
    angle: "FAQ · what to expect at a first consult",
    text: "First consult at [Clinic name]: 30 minutes, no pressure, full pricing on paper before you decide anything. We'd rather you book the right plan than the most expensive one. Open consults this week.",
  },
  {
    angle: "Local trust · neighborhood mention",
    text: "Two blocks from [local landmark], parking validated for guests in the [neighborhood] garage. We see a lot of our neighbors — bring a referral and you both get a treatment credit.",
  },
  {
    angle: "Education · skin-prep without selling",
    text: "Three habits that make any treatment work better: SPF every morning, a gentle retinoid at night, and hydration the day before your visit. Save this post — the front desk gets asked weekly.",
  },
  {
    angle: "Off-season offer",
    text: "Laser packages are most effective in the cooler months. Booking now means starting your series before [month] and finishing before summer. Membership pricing applies — message us for the plan.",
  },
  {
    angle: "Holiday gift card",
    text: "Gift cards in any amount, instant email delivery, no expiration. The most-redeemed denomination is $150 — covers a Hydrafacial or starts a membership month. Buy through our profile.",
  },
  {
    angle: "Re-engagement · we miss you",
    text: "Haven't been in since spring? Your skin's needs change with the seasons. Our practice manager can review what worked last time and recommend a refreshed plan — no fee for the review call.",
  },
  {
    angle: "Trust signal · review-driven",
    text: "What guests in [city] tell us most often: the visit felt calm, the pricing was clear, and the team listened. That's the standard. Read more in our reviews — and let us know how we can do better.",
  },
  {
    angle: "Seasonal facial focus",
    text: "Cooler air, drier skin: this month's facial focuses on barrier repair — gentle exfoliation, peptide boost, and a calming mask. 50-minute appointment, member pricing applies. Book through our profile.",
  },
];

const calendarWeeks = [
  {
    week: "Week 1 · Reset",
    theme: "Replies cleared, cadence set",
    gbp: "Spring glow plan post (or seasonal equivalent) + practice manager intro post.",
    review: "Clear the open review queue. Reply to every 5–4 star within 48 hours. Escalate any 1–2 star to the practice manager today.",
    email: "Re-engagement note to guests not seen in 90+ days — short, no-pressure, link to a 'review your plan' call.",
    seoFocus:
      "Update the GBP services list, attributes, and hours. Add three recent treatment-room photos with descriptive filenames (no patient images).",
  },
  {
    week: "Week 2 · Provider + service trust",
    theme: "Show who works there and how",
    gbp: "Provider spotlight post + behind-the-scenes sterile prep post.",
    review: "Run the 7-question safety check on every reply this week. Have a second team member read each one before posting.",
    email: "Send the membership-math email: when the membership pencils out, what's included, who it's for. No discount push.",
    seoFocus:
      "Audit your top 3 treatment pages for a clear price range, FAQ, and what to expect. Link each one from the GBP services list.",
  },
  {
    week: "Week 3 · Local SEO + content",
    theme: "Be findable for the questions guests already ask",
    gbp: "FAQ-style first-consult post + neighborhood mention post.",
    review: "Mine the last 30 days of reviews for one repeating compliment and one repeating concern. Take both to Friday's huddle.",
    email: "Education email — skin prep that helps every treatment. No offer attached. Builds the trust well for week 4.",
    seoFocus:
      "Publish (or refresh) one city-page or treatment-page article answering a real question from your reviews. Internal link from the homepage.",
  },
  {
    week: "Week 4 · Offer + measure",
    theme: "Lean into what's converting, measure what's not",
    gbp: "Seasonal offer or gift-card post + a review-driven trust post quoting (paraphrased) recent feedback.",
    review: "Run the monthly roll-up: count by star rating, by category, by provider. Share the one-page summary with the practice manager.",
    email: "Soft offer email — the right offer for your seasonal cadence (membership month, package starter, gift card). One CTA, one link.",
    seoFocus:
      "Pull GBP insights: searches, calls, direction requests. Compare to last month. Pick the metric you'll move next month and write it down.",
  },
];

const operatingCadence = [
  {
    when: "Daily · 10 min",
    who: "Front-desk lead",
    do: "Pull yesterday's new reviews. Draft replies for 4- and 5-star into the shared doc. Flag anything 3 stars or below for the practice manager — do not draft those publicly until cleared.",
  },
  {
    when: "Daily · 15 min",
    who: "Practice manager",
    do: "Approve the 4–5 star drafts, post them, and log to tracker. Personally draft (or co-draft) every 1–2 star reply with the front-desk lead.",
  },
  {
    when: "Tuesday · 20 min",
    who: "Front-desk lead",
    do: "Run the 20-minute weekly SOP: triage, draft, safety check, post, log, scan for one signal to bring to Friday's huddle.",
  },
  {
    when: "Friday · 10 min huddle",
    who: "Owner / practice manager / front-desk lead",
    do: "Share the one repeating compliment and one repeating concern from this week's reviews. Decide one operational tweak. Don't try to fix everything.",
  },
  {
    when: "Monthly · 30 min",
    who: "Practice manager",
    do: "Roll up the tracker: count by star rating, category, provider. One page, plain language. Share with owner and providers — keep the file in the toolkit Drive folder.",
  },
  {
    when: "Quarterly · 60 min",
    who: "Owner",
    do: "Re-read the HIPAA-aware rules, the negative-review playbook, and the templates. Update the placeholders for any new providers, services, or pricing changes since the last review.",
  },
];

export default function ToolkitPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />

      <section className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.eyebrow}>Buyer toolkit · for purchasers only</div>
          <h1>Your med spa review &amp; local SEO playbook — start here.</h1>
          <p>
            Welcome to the buyer toolkit. The full editable Drive folder is on its way to
            your inbox. In the meantime, this page is the live, working version of the
            playbook — designed so a front-desk lead can read it Monday morning and run
            with it the same day.
          </p>
          <p>
            Everything below is paste-ready. Copy what you need into your clinic&rsquo;s own
            docs and replace the bracketed placeholders. Bookmark this page on the
            front-desk computer.
          </p>

          <div className={styles.summary}>
            <div>
              <span className={styles.summaryEyebrow}>Order</span>
              <strong>SpaReply MedSpa Review + Local SEO Toolkit</strong>
              <p>
                $49 one-time · Google Drive folder · 7-day refund.
                Support: <a href={SUPPORT_MAILTO}>hello@spareply.com</a>
              </p>
            </div>
            <div className={styles.summaryPrice}>
              <span>What this page covers</span>
              <em>9</em>
              <small>Setup SOP · HIPAA-aware rules · 20+ templates · triage checklist · GBP prompts · 4-week calendar · operating cadence · refund · contact</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="downloads">
        <div className={styles.sectionEyebrow}>Download the toolkit files</div>
        <h2 id="downloads">Editable Markdown &amp; CSV — keep them in your clinic&rsquo;s drive.</h2>
        <p>
          Six editable files that mirror this page. Save them to your clinic&rsquo;s
          shared drive, fill in the bracketed fields, and let the front desk work
          from a copy you control. The Drive folder linked in your access email
          contains the same set, plus the Google Doc and Sheet versions.
        </p>

        <ul className={styles.downloads}>
          {toolkitDownloads.map((file) => (
            <li key={file.filename} className={styles.downloadCard}>
              <div className={styles.downloadBody}>
                <span className={styles.downloadFormat}>{file.format}</span>
                <strong>{file.label}</strong>
                <p>{file.description}</p>
                <code className={styles.downloadFilename}>{file.filename}</code>
              </div>
              <a
                className={styles.downloadButton}
                href={file.href}
                download={file.filename}
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="setup">
        <div className={styles.sectionEyebrow}>Start here · 20 minutes</div>
        <h2 id="setup">The 20-minute setup SOP for your front desk.</h2>
        <p>
          Block 20 minutes today with whichever person owns review replies — front-desk
          lead, practice manager, or owner if you&rsquo;re still wearing that hat. By the
          end of this block your team will have a working cadence, not just a folder of
          templates.
        </p>

        <ol className={styles.steps}>
          {setupSteps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepIndex}>{index + 1}</span>
              <div className={styles.stepBody}>
                <span className={styles.stepMinutes}>{step.minutes}</span>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="rules">
        <div className={styles.sectionEyebrow}>HIPAA-aware reply rules</div>
        <h2 id="rules">What to say, what not to say, and the phrases to rewrite.</h2>
        <p>
          SpaReply is HIPAA-aware editorial guidance — designed to help your team avoid
          confirming protected health information in public replies. It does not provide legal,
          privacy, or compliance advice; have your privacy officer or counsel review your clinic’s
          policy before posting. The rules below are the editorial guardrails the templates on this
          page were written against.
        </p>

        <div className={styles.rulesGrid}>
          <article className={styles.rulesCard}>
            <span className={styles.rulesCardTag}>Do</span>
            <ul>
              {replyDoList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className={`${styles.rulesCard} ${styles.rulesCardDont}`}>
            <span className={styles.rulesCardTag}>Don&rsquo;t</span>
            <ul>
              {replyDontList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <h3 className={styles.subhead} id="risky-phrasing">
          PHI-risky phrasing → safer rewrite
        </h3>
        <p className={styles.subheadBody}>
          Six examples pulled from real review responses we&rsquo;ve seen in the wild.
          Each row shows the risky phrasing, why it&rsquo;s a problem, and a safer
          rewrite your team can copy.
        </p>

        <div className={styles.phraseList}>
          {phiRiskyPhrasing.map((entry) => (
            <article key={entry.risky} className={styles.phraseCard}>
              <div className={styles.phraseLane}>
                <span className={styles.phraseLabelRisky}>Risky</span>
                <p>{entry.risky}</p>
                <span className={styles.phraseWhy}>Why: {entry.why}</span>
              </div>
              <div className={styles.phraseLane}>
                <span className={styles.phraseLabelSafer}>Safer rewrite</span>
                <p>{entry.safer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="templates">
        <div className={styles.sectionEyebrow}>Reply templates · 20 paste-ready</div>
        <h2 id="templates">Ready-to-copy review replies, by scenario.</h2>
        <p>
          Twenty replies across the seven scenarios your front desk will actually see
          this week. Each one is short, calm, and edited to avoid confirming clinical
          specifics. Replace bracketed placeholders before posting — and run the
          7-question safety check at the top of the page.
        </p>

        <div className={styles.templateGroups}>
          {replyCategories.map((cat) => (
            <article key={cat.category} className={styles.templateGroup}>
              <header>
                <strong>{cat.category}</strong>
                <p>{cat.guidance}</p>
              </header>
              <div className={styles.templateList}>
                {cat.templates.map((tpl) => (
                  <div key={tpl.scenario} className={styles.templateItem}>
                    <span className={styles.templateScenario}>{tpl.scenario}</span>
                    <pre className={styles.templateText}>{tpl.text}</pre>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="triage">
        <div className={styles.sectionEyebrow}>Negative-review triage</div>
        <h2 id="triage">The 8-step triage checklist for 1- and 2-star reviews.</h2>
        <p>
          Negative reviews are the highest-stakes reply your team will write. Run this
          checklist before anything goes live. The goal isn&rsquo;t to win the argument —
          it&rsquo;s to make the next reader feel like the clinic is a calm, careful
          place.
        </p>

        <ol className={styles.triage}>
          {triageChecklist.map((item, index) => (
            <li key={item.title}>
              <span className={styles.triageIndex}>{index + 1}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="gbp">
        <div className={styles.sectionEyebrow}>Google Business Profile prompts</div>
        <h2 id="gbp">13 GBP post prompts you can publish this quarter.</h2>
        <p>
          Aim for one or two GBP posts a week. Pair the angle with one real, non-stock
          image of your treatment area, your team, or your front desk. No patient images,
          no before/after that names a guest.
        </p>

        <div className={styles.gbpGrid}>
          {gbpPrompts.map((p) => (
            <article key={p.angle} className={styles.gbpCard}>
              <span>{p.angle}</span>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="calendar">
        <div className={styles.sectionEyebrow}>4-week local SEO calendar</div>
        <h2 id="calendar">Your first month, week by week.</h2>
        <p>
          A practical four-week plan a single front-desk lead can run without an agency.
          Pair this with the operating cadence below — that&rsquo;s where it actually gets
          done.
        </p>

        <div className={styles.calendar}>
          {calendarWeeks.map((w) => (
            <article key={w.week} className={styles.calendarWeek}>
              <div className={styles.calendarHeader}>
                <strong>{w.week}</strong>
                <span>{w.theme}</span>
              </div>
              <dl>
                <div>
                  <dt>GBP</dt>
                  <dd>{w.gbp}</dd>
                </div>
                <div>
                  <dt>Reviews</dt>
                  <dd>{w.review}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{w.email}</dd>
                </div>
                <div>
                  <dt>SEO focus</dt>
                  <dd>{w.seoFocus}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="cadence">
        <div className={styles.sectionEyebrow}>Operating cadence · copy/paste</div>
        <h2 id="cadence">The week, on a single page.</h2>
        <p>
          Drop this into your shared calendar, your SOP wiki, or a printed sheet next to
          the front desk. The whole point of the toolkit is that review work fits inside
          this cadence — not the other way around.
        </p>

        <div className={styles.cadence}>
          {operatingCadence.map((row) => (
            <article key={`${row.when}-${row.who}`} className={styles.cadenceRow}>
              <div>
                <span>{row.when}</span>
                <strong>{row.who}</strong>
              </div>
              <p>{row.do}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="support">
        <div className={styles.sectionEyebrow}>Support &amp; refund</div>
        <h2 id="support">A real human reads every email.</h2>
        <p>
          One inbox handles support, access issues, template questions, and refunds. No
          ticket portal, no chatbot queue.
        </p>

        <div className={styles.support}>
          <article className={styles.supportCard}>
            <span>Support</span>
            <strong>Anything missing or unclear in the toolkit</strong>
            <p>
              Email <a href={SUPPORT_MAILTO}>hello@spareply.com</a> with the email
              address you used at checkout and a quick note about what you need. Most
              questions get answered the same business day.
            </p>
          </article>
          <article className={styles.supportCard}>
            <span>Refund</span>
            <strong>7-day no-friction refund</strong>
            <p>
              Use the toolkit for a week. If it doesn&rsquo;t make replying to reviews
              faster and safer for your front desk, email{" "}
              <a href={REFUND_MAILTO}>hello@spareply.com</a> within 7 days of purchase
              and we&rsquo;ll refund the $49. No forms. No &ldquo;why are you
              leaving&rdquo; survey.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta">
        <div className={styles.ctaEyebrow}>Save this page</div>
        <h2 id="cta">Bookmark /toolkit on the front-desk browser.</h2>
        <p>
          The Drive folder is the editable, printable version of everything here. This
          page is the always-on web copy your team can pull up between guests when they
          need a template fast.
        </p>
        <div className={styles.ctaActions}>
          <a className={styles.ctaPrimary} href={SUPPORT_MAILTO}>
            Email hello@spareply.com
          </a>
          <Link className={styles.ctaSecondary} href="/success">
            Back to purchase confirmation
          </Link>
        </div>
      </section>

      <p className={styles.disclaimer}>
        SpaReply is informational. The toolkit is HIPAA-aware editorial guidance, not
        legal, medical, or compliance advice. Final compliance decisions belong with
        your provider, privacy officer, and counsel.
      </p>

      <SiteFooter />
    </main>
  );
}
