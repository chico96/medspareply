import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { TrackedAnchor, TrackedLink } from "../_components/TrackedLink";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Hydrafacial Review Response Examples (Membership, Event Prep, Service Recovery) | SpaReply",
  description:
    "Hydrafacial review response examples and templates — first-time guests, recurring memberships, event-prep timing, wait time, and service recovery. Privacy-safe phrasing for med spas.",
  alternates: { canonical: "/hydrafacial-review-response" },
  openGraph: {
    title: "Hydrafacial Review Response Examples",
    description:
      "Public reply templates for Hydrafacial reviews — memberships, event-prep, wait time, and service recovery for aesthetic clinics.",
    type: "article",
  },
};

type Template = {
  meta: string;
  review: string;
  reply: string;
  caution?: string;
};

const firstTimeTemplates: Template[] = [
  {
    meta: "5★ · Hydrafacial · warm tone · first-time guest",
    review:
      "First Hydrafacial and I left glowing. Spa felt calm and the provider was thoughtful.",
    reply:
      "Thank you for the kind words. We are glad your first Hydrafacial felt calm and that you left with the glow you came in for. The team appreciates the trust — we look forward to welcoming you back.",
  },
  {
    meta: "5★ · Hydrafacial · polished tone · sensitive skin",
    review:
      "Was nervous because my skin reacts to most facials, but the provider walked me through the steps and customized the boost.",
    reply:
      "Thank you for the thoughtful note. A walk-through that respects sensitive skin is exactly what every consult should feel like, and we are glad the visit reflected that. We will see you for your next appointment.",
  },
];

const eventMembershipTemplates: Template[] = [
  {
    meta: "5★ · Hydrafacial · warm tone · event prep timing",
    review:
      "Booked the Hydrafacial three days before my wedding and the provider explained the timing perfectly. Skin looked amazing day-of.",
    reply:
      "Thank you for trusting us with such an important week. Pre-event timing matters as much as the treatment itself, and we are glad the conversation at booking made it feel easy. Congratulations from the team — we look forward to caring for you again.",
  },
  {
    meta: "5★ · Membership · polished tone · monthly Hydrafacial",
    review:
      "Three months into the membership and the monthly Hydrafacial is the most consistent thing I do for my skin.",
    reply:
      "Thank you for taking the time to share your membership experience. A predictable monthly cadence is what we want every member to feel in their skin and on their schedule. We appreciate the trust — see you next month.",
  },
];

const recoveryTemplates: Template[] = [
  {
    meta: "3★ · Hydrafacial · clinical tone · long wait time",
    review:
      "Hydrafacial itself was great but I waited 25 minutes past my appointment time before being brought back.",
    reply:
      "Thank you for the candid feedback. A 25-minute wait should not be the start of any visit, and we are reviewing how the schedule paced that day. The team appreciates you bringing it to us and we will do better next time you are in.",
    caution:
      "Wait-time reviews are operational, not clinical, but a public reply that names the friction earns more trust than a generic apology. Document the schedule pattern internally.",
  },
  {
    meta: "2★ · Hydrafacial · polished tone · upsell felt heavy",
    review:
      "Loved the facial but felt pressured during the boost upsell at the end.",
    reply:
      "Thank you for the candid feedback. A relaxing facial should not end on a sales conversation, and we are reviewing how add-ons are introduced — we want every offer to feel like an option, not an ask. The team appreciates you telling us.",
    caution:
      "Pricing-pressure reviews are an operational signal. Loop the front-desk lead and the room provider into the same conversation; do not name the staff member publicly.",
  },
  {
    meta: "1★ · Hydrafacial · warm tone · post-treatment redness or reaction",
    review:
      "Had unexpected redness for two days after my Hydrafacial and felt brushed off when I called.",
    reply:
      "We are sorry the visit and the call both fell short. Please contact our practice manager so a licensed provider can review your visit with you and follow up in a private setting. We want to make sure this gets the attention it deserves.",
    caution:
      "Post-treatment reactions belong with a licensed provider, not the front desk. Loop in the medical director the same day. Do not diagnose the reaction in public.",
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

export default function HydrafacialReviewResponsePage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Hydrafacial review response examples</div>
        <h1>Hydrafacial review response examples — for first-time guests, members, and the harder ones.</h1>
        <p className={styles.lede}>
          Hydrafacial is the gateway service for most med spas — it is also the most reviewed.
          These public reply templates cover the patterns that actually drive bookings: first-time
          glow reviews, event-prep timing, monthly membership reviews, and the operational
          friction (wait time, add-on pressure, post-treatment reactions) that costs trust if
          handled badly.
        </p>

        <div className={styles.callout}>
          <strong>The Hydrafacial rule.</strong>
          <p>
            Most Hydrafacial reviews are about <em>how the visit felt</em>, not the protocol.
            Mirror the calm, the glow, the conversation — never restate boost names or device
            settings. The 5-star reviews are an opportunity to plant the membership seed; the 2-
            and 3-star reviews are operational signals worth fixing the same week.
          </p>
        </div>

        <h2>First-time Hydrafacial guest reviews (5★)</h2>
        <p>
          First-time Hydrafacial reviews are some of the most valuable owner-reply moments you
          have. The reviewer is forming a long-term impression of the clinic, and future guests
          read these threads when deciding whether to book. Mirror one specific detail (calm
          spa, walk-through, sensitive skin), thank the team by first name, and avoid clinical
          confirmations.
        </p>
        <TemplateBlock items={firstTimeTemplates} />

        <h2>Event-prep and recurring membership Hydrafacial reviews</h2>
        <p>
          Two of the highest-margin Hydrafacial review patterns: event-prep guests (weddings,
          galas, photoshoots) and membership members. Event-prep replies should respect the life
          moment without naming the event detail. Membership replies should reinforce the
          predictable cadence that justifies the monthly charge — without making promises about
          a future month&rsquo;s offerings.
        </p>
        <TemplateBlock items={eventMembershipTemplates} />

        <h2>Service recovery — wait time, add-on pressure, post-treatment reactions</h2>
        <p>
          The 1- to 3-star Hydrafacial reviews are almost always one of three things: wait time,
          add-on / boost pressure, or a post-treatment reaction. Wait time and pricing pressure
          are operational; post-treatment reactions are clinical and belong with a licensed
          provider before any public reply ships.
        </p>
        <TemplateBlock items={recoveryTemplates} />

        <h2>How to use Hydrafacial 5★ reviews to grow memberships</h2>
        <p>
          Every 5-star Hydrafacial review is a soft membership ad — without ever using the word
          &ldquo;sale.&rdquo; The reply does not pitch the membership; it reinforces the
          consistency, calm, and predictable cadence that makes the membership obvious to the
          next reader.
        </p>
        <ul>
          <li>
            <strong>Echo the consistency.</strong> &ldquo;Calm,&rdquo; &ldquo;predictable
            cadence,&rdquo; &ldquo;monthly rhythm&rdquo; — language that hints at recurring
            value without selling.
          </li>
          <li>
            <strong>Name the team.</strong> Provider first names land warmer than any keyword
            and help future guests picture the relationship, not the transaction.
          </li>
          <li>
            <strong>Skip the discount line.</strong> Public replies that mention promo codes or
            membership pricing read as marketing, not as gratitude.
          </li>
          <li>
            <strong>Move membership questions offline.</strong> If the reviewer asks about
            membership in their review, route the specifics to the front desk — never share
            pricing in the thread.
          </li>
        </ul>

        <h2>Privacy-safe wording for Hydrafacial reviews</h2>
        <ul>
          <li>
            <strong>Do not confirm the appointment in public.</strong> &ldquo;Thanks for coming
            in on March 4 for your Hydrafacial&rdquo; tells the public this person is your
            patient and what they had done.
          </li>
          <li>
            <strong>Do not name boost, serum, or device settings.</strong> Even if the guest
            named them. Your reply is read by future guests and counsel, not just this person.
          </li>
          <li>
            <strong>Do not diagnose post-treatment reactions in public.</strong> &ldquo;That
            sounds like normal post-Hydrafacial redness&rdquo; is a clinical statement that
            belongs in a chart, not a Google reply.
          </li>
          <li>
            <strong>Do route service recovery to a real channel.</strong> A monitored
            practice-manager inbox or phone number is the right offline channel.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>Compliance reminder.</strong>
          <p>
            SpaReply phrasing is designed to be HIPAA-aware — it acknowledges without confirming
            care. It is not legal, medical, or compliance advice. Have your medical director or
            counsel sign off on Hydrafacial-specific public language before you operationalize
            it clinic-wide.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Try the Hydrafacial flow in the generator</strong>
            <p>
              Pick &ldquo;Facials&rdquo; as the service, set the rating, and the free generator
              returns a privacy-safe public reply, a private follow-up checklist, and a note when
              a licensed provider should review.
            </p>
          </div>
          <TrackedLink
            href="/#generator"
            event="free_generator_click"
            eventProperties={{ location: "seo_hydrafacial" }}
          >
            Open the generator
          </TrackedLink>
        </div>

        <div className={styles.callout}>
          <strong>Want every Hydrafacial template?</strong>
          <p>
            The $49 toolkit ships 120+ paste-ready replies — including the full Hydrafacial bank
            (first-time, event-prep, membership, service recovery) plus the negative-review
            playbook and the 90-day content calendar with paired GBP membership angles. See it
            before you buy with the{" "}
            <TrackedAnchor
              href={samplePreviewPdf.href}
              target="_blank"
              rel="noopener noreferrer"
              event="sample_pdf_click"
              eventProperties={{ location: "seo_hydrafacial" }}
            >
              free 5-page sample PDF
            </TrackedAnchor>{" "}
            or open the{" "}
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "seo_hydrafacial" }}
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
          <Link href="/coolsculpting-review-response">
            <span>Templates</span>
            CoolSculpting review response templates
          </Link>
          <Link href="/med-spa-google-review-reply">
            <span>Workflow</span>
            Med spa Google review reply best practices
          </Link>
          <Link href="/medical-spa-reputation-management">
            <span>System</span>
            Medical spa reputation management
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
