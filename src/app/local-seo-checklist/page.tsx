import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "../_components/content.module.css";

export const metadata: Metadata = {
  title: "Med Spa Local SEO Checklist (2026 Edition) | SpaReply",
  description:
    "A practical local SEO checklist for med spas: Google Business Profile, on-page treatment pages, reviews, citations, and the weekly content cadence that actually moves rankings.",
  alternates: { canonical: "/local-seo-checklist" },
  openGraph: {
    title: "Med Spa Local SEO Checklist",
    description:
      "Step-by-step local SEO checklist for aesthetic clinics — GBP, on-page, reviews, content, and citations.",
    type: "article",
  },
};

export default function LocalSeoChecklistPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Med spa local SEO checklist</div>
        <h1>The med spa local SEO checklist that actually moves rankings.</h1>
        <p className={styles.lede}>
          Most med-spa SEO advice is either too generic (&ldquo;claim your GBP&rdquo;) or too
          enterprise (&ldquo;run a citation audit across 200 directories&rdquo;). This is the
          stripped-down version we use with pilot clinics — what to do, in what order, and what to
          do weekly to keep momentum.
        </p>

        <div className={styles.callout}>
          <strong>How to use this checklist.</strong>
          <p>
            Walk through Phase 1 once. Then run Phase 2 every week. Phase 3 is monthly. If you
            only have 30 minutes a week, do the review reply pass with the{" "}
            <Link href="/#generator">free generator</Link> and one Google Business Profile post —
            those two tasks are the highest-leverage habit for local rankings.
          </p>
        </div>

        <h2>Phase 1 — Foundations (one-time setup)</h2>

        <h3>Google Business Profile</h3>
        <ul className={styles.checklist}>
          <li>Claim and verify the GBP listing using a primary phone number that rings the front desk.</li>
          <li>
            Set the primary category to <strong>Medical Spa</strong>; add secondary categories for
            services you actually run (Skin Care Clinic, Laser Hair Removal Service, etc.).
          </li>
          <li>Match name, address, and phone (NAP) exactly to the website footer and booking system.</li>
          <li>Add full hours, holiday hours, and a correct service area if you also do home or events.</li>
          <li>Upload at least 10 photos: exterior, reception, treatment rooms, team headshots — no stock images.</li>
          <li>Fill out every applicable Service in the GBP service editor with a 1–2 sentence description and price range.</li>
        </ul>

        <h3>On-page essentials</h3>
        <ul className={styles.checklist}>
          <li>Dedicated treatment pages for every primary service (Hydrafacial, Botox, fillers, laser hair removal, peels, body contouring).</li>
          <li>One city page per service area you genuinely serve — never invent locations.</li>
          <li>NAP, hours, and a click-to-call phone link in the site footer on every page.</li>
          <li>Schema markup: <code>MedicalBusiness</code> + service-level <code>Service</code> entries with provider info.</li>
          <li>Page titles include the service + city (e.g. &ldquo;Hydrafacial in Scottsdale | Clinic Name&rdquo;).</li>
          <li>Meta descriptions written for clicks, not keyword stuffing — 140–155 characters.</li>
        </ul>

        <h3>Citations &amp; profiles</h3>
        <ul className={styles.checklist}>
          <li>Yelp, Apple Maps, Bing Places, RealSelf, Healthgrades — claim and align NAP exactly.</li>
          <li>Industry-relevant directories only: skip the spammy aggregator submissions.</li>
          <li>Audit existing citations for old phone numbers or addresses; correct or delete duplicates.</li>
        </ul>

        <h2>Phase 2 — Weekly cadence</h2>
        <p>
          The reason most med-spa SEO efforts stall is that no one owns the weekly motion. Pick a
          30–60 minute slot, put it on the front-desk lead&apos;s calendar, and run this list
          every week without skipping:
        </p>
        <ul className={styles.checklist}>
          <li>
            Reply to every Google, Yelp, and RealSelf review from the past week using the{" "}
            <Link href="/#generator">review reply generator</Link>. Match the rating, service, and
            tone — then paste the public reply and run the private follow-up checklist.
          </li>
          <li>
            Publish one Google Business Profile post: a current offer, a seasonal angle, or a
            short tip from a recent treatment.
          </li>
          <li>
            Add 2–3 fresh photos to GBP (treatment area, before/after with consent, team in action).
          </li>
          <li>Answer one new question on the GBP Q&amp;A or seed one yourself if none exist.</li>
          <li>
            Note any review insight worth turning into content — a confused guest is a future FAQ
            section.
          </li>
        </ul>

        <h2>Phase 3 — Monthly content</h2>
        <p>
          Local pages stay fresh when they earn at least one substantive update per month.
          That&apos;s the bar — not blog volume.
        </p>
        <ul className={styles.checklist}>
          <li>
            Publish one long-form local post: a service explainer, a city-specific guide, or a
            seasonal Q&amp;A. Aim for 700–1,200 useful words, not padding.
          </li>
          <li>
            Refresh one existing treatment page: update pricing, swap stale photos, add an FAQ
            block built from real review themes.
          </li>
          <li>
            Send 3–5 review-request texts or emails to recent satisfied guests, asking for an
            honest Google review without scripting their words.
          </li>
          <li>Spot-check 5 random search queries (e.g. &ldquo;hydrafacial near me&rdquo; in your city) to see your map-pack position.</li>
          <li>Document one operational fix that came from review feedback.</li>
        </ul>

        <h2>Reviews are the local SEO flywheel</h2>
        <p>
          Google&apos;s local ranking weights review quantity, recency, and the quality of your
          replies. A med spa that responds within 24–48 hours to every review, with a reply that
          actually mentions the service, beats most competitors purely on operational consistency.
          That&apos;s why the generator is at the center of this checklist.
        </p>

        <div className={styles.callout}>
          <strong>What clinical reviews need that other reviews don&apos;t.</strong>
          <p>
            Any review mentioning injectables, lasers, peels, swelling, or a reaction needs a
            licensed provider in the loop before you reply publicly. The{" "}
            <Link href="/negative-review-response">negative-review playbook</Link> walks through
            the escalation steps and the public phrasing that keeps you HIPAA-safe.
          </p>
        </div>

        <h2>Common mistakes that quietly tank rankings</h2>
        <ul>
          <li>
            <strong>Inventing service-area cities.</strong> Adding cities you don&apos;t actually
            serve gets pages filtered or demoted.
          </li>
          <li>
            <strong>Copy-pasted review replies.</strong> Templates without service-specific
            wording look fake to guests and add no SEO value.
          </li>
          <li>
            <strong>Stock photos on GBP.</strong> Detected as low-trust and excluded from
            map-pack appearance.
          </li>
          <li>
            <strong>Treating SEO as a launch project.</strong> The wins compound from the weekly
            cadence, not the initial setup.
          </li>
        </ul>

        <div className={styles.cta}>
          <div>
            <strong>Run the weekly review-reply pass in 10 minutes</strong>
            <p>
              The free generator handles the boring part. Paste, pick rating, service, tone, and
              copy the public reply, private follow-up, and safety notes.
            </p>
          </div>
          <Link href="/#generator">Open the generator</Link>
        </div>

        <div className={styles.linkRow}>
          <Link href="/med-spa-google-review-reply">
            <span>Workflow</span>
            Med spa Google review reply best practices
          </Link>
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
          <Link href="/aesthetic-clinic-review-templates">
            <span>Templates</span>
            Aesthetic clinic review templates by service
          </Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
