import type { Metadata } from "next";
import Link from "next/link";
import { samplePreviewPdf } from "@/lib/marketing";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Aesthetic Clinic Review Templates by Service | SpaReply",
  description:
    "Aesthetic clinic review reply templates across injectables, laser, facials, body contouring, consultations, and memberships — copy, customize, post.",
  alternates: { canonical: "/aesthetic-clinic-review-templates" },
  openGraph: {
    title: "Aesthetic Clinic Review Templates",
    description:
      "Service-by-service public reply templates for aesthetic clinics — privacy-safe, brand-consistent, and ready to post.",
    type: "article",
  },
};

type Template = {
  meta: string;
  review: string;
  reply: string;
};

type ServiceSection = {
  id: string;
  service: string;
  intro: string;
  templates: Template[];
};

const sections: ServiceSection[] = [
  {
    id: "injectables",
    service: "Injectables (Botox, dysport, dermal filler)",
    intro:
      "Mirror the result the guest mentioned (natural, balanced, settled) without naming product, dose, or units. Any review that names a symptom belongs in a private clinical conversation, not a public reply.",
    templates: [
      {
        meta: "5★ · Botox · warm",
        review:
          "Best Botox experience I have had. Provider was patient and the results look natural.",
        reply:
          "Thank you for the kind words. We are glad the consult felt unrushed and that the results look the way you hoped. The team appreciates the trust and we will see you for your next visit.",
      },
      {
        meta: "4★ · Filler · polished",
        review:
          "Happy with my filler. Took off a star because the post-treatment instructions felt rushed.",
        reply:
          "Thank you for the candid feedback. Walking every guest through the settling window slowly is a standard we want to keep — we will share your note with the team. We appreciate the trust and look forward to caring for you again.",
      },
    ],
  },
  {
    id: "laser",
    service: "Laser hair removal & laser treatments",
    intro:
      "Laser reviews often run across a multi-session package, so phrasing should respect the journey. Acknowledge the progress the guest mentioned and avoid implying outcomes the next session will or will not deliver.",
    templates: [
      {
        meta: "5★ · Laser hair removal · polished",
        review:
          "Halfway through my laser package and the results are great. Provider explained everything clearly at consult.",
        reply:
          "Thank you for the kind note. We are glad the consult set clear expectations and that you are seeing the results you came in for. We will keep that consistency in mind for the rest of your package.",
      },
      {
        meta: "3★ · Laser · clinical",
        review:
          "Results are okay so far but I wish the provider had walked me through what to expect between sessions.",
        reply:
          "Thank you for the candid feedback. Between-session expectations are something we want to get right for every guest, and we will share your note with the team. Please reach the front desk if you would like a follow-up call before your next session.",
      },
    ],
  },
  {
    id: "facials",
    service: "Facials (Hydrafacial, peels, dermaplaning)",
    intro:
      "Facials are often the gateway service — many reviewers are first-time guests forming a long-term impression. Keep the reply warm, mirror one specific detail, and avoid clinical confirmations.",
    templates: [
      {
        meta: "5★ · Hydrafacial · warm",
        review:
          "First Hydrafacial and I left glowing. Spa felt calm and the provider was thoughtful.",
        reply:
          "Thank you for the kind words. We are glad your first Hydrafacial felt calm and that you left with the glow you came in for. The team appreciates the trust — we look forward to welcoming you back.",
      },
      {
        meta: "3★ · Chemical peel · clinical",
        review:
          "Peel was fine but I was unsure about sun exposure for the first two days.",
        reply:
          "Thank you for the feedback. Aftercare clarity is something we care about getting right, and we will share your note with the team so we can tighten how we walk every guest through the first 48 hours. Please reach the front desk if you would like a follow-up.",
      },
    ],
  },
  {
    id: "body-contouring",
    service: "Body contouring & skin tightening",
    intro:
      "Body contouring reviews lean heavily on outcome expectations. Acknowledge the experience without promising results in the public thread, and route any outcome dispute to a private clinical review.",
    templates: [
      {
        meta: "5★ · Body contouring · polished",
        review:
          "Three sessions in and I am happy with the results. The provider was honest about what to expect.",
        reply:
          "Thank you for sharing this. An honest expectation-setting consult is something we work hard to keep consistent, and we are glad the results are matching what was discussed. We appreciate the trust.",
      },
      {
        meta: "1★ · Body contouring · warm",
        review:
          "Total disappointment. I did not see results and feel I was not informed about realistic expectations.",
        reply:
          "We are sorry the visit did not feel as seamless as it should have. Please contact our practice manager so a licensed provider can review your visit with you, look at before-and-after photos, and discuss next steps in a private setting.",
      },
    ],
  },
  {
    id: "consultations",
    service: "Consultations & first visits",
    intro:
      "Consult reviews are about the conversation, not the treatment. Mirror the consult-specific praise (unrushed, honest, clear) and avoid implying any treatment was performed if it was not.",
    templates: [
      {
        meta: "5★ · Consultation · warm",
        review:
          "Came in for a consult and the provider didn't push me into anything. Felt heard.",
        reply:
          "Thank you for the kind words. An unrushed, honest consult is exactly what we want every first visit to feel like. The team appreciates the trust — we are here whenever you are ready for the next step.",
      },
      {
        meta: "4★ · Consultation · polished",
        review:
          "Consultation was thorough but the follow-up email with pricing took several days.",
        reply:
          "Thank you for the thoughtful feedback. A thorough consult should never be followed by a slow email — we are tightening that handoff so the pricing summary lands the same business day. We appreciate the trust.",
      },
    ],
  },
  {
    id: "memberships",
    service: "Memberships & recurring guests",
    intro:
      "Membership reviews talk about the relationship, not a single visit. Echo the consistency or convenience they named, and avoid making promises about what future months will include.",
    templates: [
      {
        meta: "5★ · Membership · polished",
        review:
          "Three months into the membership and it has been worth it — easy booking, friendly front desk, consistent results.",
        reply:
          "Thank you for taking the time to share your membership experience. Easy booking and a calm front desk are what we want every month to feel like. We appreciate the trust and look forward to your next visit.",
      },
      {
        meta: "2★ · Membership · clinical",
        review:
          "Loved the membership at first but it has been hard to use the credits and the booking site is confusing.",
        reply:
          "Thank you for the candid feedback. Membership credits should be the easy part of the relationship, not the friction. Please reach our practice manager so we can pull your account and walk through it with you the same week.",
      },
    ],
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
        </div>
      ))}
    </>
  );
}

export default function AestheticClinicReviewTemplatesPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Aesthetic clinic review templates</div>
        <h1>Aesthetic clinic review templates by service.</h1>
        <p className={styles.lede}>
          Public reply templates for aesthetic clinics across the services that drive most of the
          reviews — injectables, laser, facials, body contouring, consultations, and memberships.
          Each section gives you a 5-star template plus the harder one (3-star, 2-star, or
          1-star) that is most likely to come up in that service line.
        </p>

        <div className={styles.callout}>
          <strong>How to use these templates.</strong>
          <p>
            Find the service section, copy the structure (not the literal sentence), and adapt to
            your brand voice. When the review carries a clinical signal — symptom, outcome
            dispute, side effect — route it to a private clinical conversation before any deeper
            public engagement. Use the{" "}
            <Link href="/#generator">free generator</Link> to tune tone on a real review.
          </p>
        </div>

        <h2>Quick navigation</h2>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.service}</a>
            </li>
          ))}
        </ul>

        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2>{section.service}</h2>
            <p>{section.intro}</p>
            <TemplateBlock items={section.templates} />
          </section>
        ))}

        <h2>Wording rules that apply across every aesthetic service</h2>
        <ul>
          <li>
            <strong>Mirror, don&rsquo;t upgrade.</strong> If the guest says &ldquo;facial,&rdquo;
            do not upgrade it to &ldquo;Hydrafacial-with-LED.&rdquo; If they say
            &ldquo;Botox,&rdquo; do not name the unit count.
          </li>
          <li>
            <strong>Name the team, not the dose.</strong> Provider first names land warmer than
            another keyword and never raise a privacy flag.
          </li>
          <li>
            <strong>Acknowledge without admitting.</strong> Empathy is the right opener for any
            critical review; admission of clinical fact belongs in a private channel.
          </li>
          <li>
            <strong>One reply, then offline.</strong> The public thread gets one calm reply;
            further back-and-forth is for the practice manager and provider.
          </li>
        </ul>

        <div className={styles.callout}>
          <strong>Want every template?</strong>
          <p>
            The $49 toolkit ships 120+ paste-ready replies across services, ratings, and tones —
            plus the negative-review playbook, GBP prompts, and the front-desk SOP. Preview it
            first with the{" "}
            <a href={samplePreviewPdf.href} target="_blank" rel="noopener noreferrer">
              free 5-page sample PDF
            </a>{" "}
            or open the{" "}
            <Link href="/toolkit-preview">$49 toolkit preview</Link>.
          </p>
        </div>

        <div className={styles.cta}>
          <div>
            <strong>Adapt these templates to a real review</strong>
            <p>
              Paste your live review into the free generator, pick the service and tone, and copy
              the public reply, private follow-up checklist, and safety notes.
            </p>
          </div>
          <Link href="/#generator">Open the generator</Link>
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
          <Link href="/med-spa-google-review-reply">
            <span>Workflow</span>
            Med spa Google review reply best practices
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
