import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "../_components/content.module.css";

const SUPPORT_MAILTO = "mailto:hello@spareply.com?subject=Terms%20question";

export const metadata: Metadata = {
  title: "Terms of Use | SpaReply",
  description:
    "Plain-English terms for spareply.com and the $49 Med Spa Review + Local SEO Toolkit: one-time digital license for internal clinic use, no resale or public redistribution, editorial guidance only — not legal, medical, or compliance advice.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const lastUpdated = "May 3, 2026";

export default function TermsPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Terms of use</div>
        <h1>The plain-English terms.</h1>
        <p className={styles.lede}>
          These terms cover the SpaReply website (spareply.com), the free
          browser-based review reply generator, and the $49 Med Spa Review + Local
          SEO Toolkit. By using the site or buying the toolkit, you agree to what
          follows.
        </p>

        <div className={styles.callout}>
          <strong>The short version.</strong>
          <p>
            The toolkit is a one-time digital license for use{" "}
            <strong>inside your own clinic or business</strong>. Don&rsquo;t resell
            it, repost it publicly, or redistribute it. Templates are{" "}
            <strong>editorial guidance</strong> — review every reply before posting.
            SpaReply does not provide legal, medical, or compliance advice. Payment
            is handled by Stripe. 7-day satisfaction refund. Email{" "}
            <a href={SUPPORT_MAILTO}>hello@spareply.com</a> with questions.
          </p>
        </div>

        <h2>1. The product</h2>
        <p>
          SpaReply offers (a) a free browser-based review reply generator, (b)
          free editorial resources on spareply.com, and (c) a paid digital toolkit:
          the <strong>$49 Med Spa Review + Local SEO Toolkit</strong>, delivered as
          a polished 31-page PDF, six focused individual PDFs, and editable Markdown
          and CSV source files. The price ($49), delivery (instant download after
          Stripe payment), and refund window (7 days) are described on the site and
          in the <Link href="/refund-policy">refund policy</Link>.
        </p>

        <h2>2. License — what you can do with the toolkit</h2>
        <p>
          When you buy the toolkit, you receive a non-exclusive, non-transferable
          license to use the materials <strong>inside your own clinic or business</strong>
          {" "}for your own internal operations. That includes:
        </p>
        <ul>
          <li>
            Printing the PDFs for your front desk, practice manager, providers, and
            other internal staff.
          </li>
          <li>
            Copying the editable Markdown and CSV source files into your clinic&rsquo;s
            own shared drive (Google Drive, Notion, SharePoint, etc.) and adapting
            the wording to your providers, services, and tone.
          </li>
          <li>
            Pasting and customizing review-reply templates into your own public
            review responses on Google, Yelp, and similar platforms.
          </li>
        </ul>

        <h2>3. License — what you can&rsquo;t do</h2>
        <ul>
          <li>
            <strong>No resale.</strong> Don&rsquo;t resell, sublicense, or
            white-label the toolkit, the PDFs, or the source files — in whole or in
            substantial part — to other clinics, agencies, or individuals.
          </li>
          <li>
            <strong>No public redistribution.</strong> Don&rsquo;t repost the
            SpaReply-branded PDFs, the Markdown, the CSV, or substantial portions of
            the toolkit on a public website, blog, social channel, file-sharing
            site, or training course.
          </li>
          <li>
            <strong>No agency repackaging.</strong> Marketing agencies, consultants,
            and SEO firms may use the toolkit internally with one client at a time
            under a single $49 license per buyer, but may not bundle it into a
            client deliverable, training program, or service offering for resale.
            Multi-client licensing isn&rsquo;t offered today; email{" "}
            <a href={SUPPORT_MAILTO}>hello@spareply.com</a> if you need it and
            we&rsquo;ll talk.
          </li>
          <li>
            <strong>No removal of attribution.</strong> Don&rsquo;t remove SpaReply
            branding, footer attribution, or copyright notices from the
            SpaReply-branded materials when sharing them internally.
          </li>
        </ul>

        <h2>4. Templates are editorial guidance — review before use</h2>
        <p>
          The reply templates, scripts, checklists, prompts, and SOPs in the toolkit
          are <strong>editorial starting points</strong>, not finished work. They
          contain bracketed placeholders, illustrative examples, and wording that
          may not fit every clinic, treatment menu, jurisdiction, or guest situation.
          You are responsible for reviewing, editing, and approving any template
          before publishing it as a reply, posting it on your Google Business
          Profile, sending it to a guest, or using it in your operations.
        </p>

        <h2>5. Not legal, medical, or compliance advice</h2>
        <p>
          SpaReply is informational. The toolkit is{" "}
          <strong>HIPAA-aware editorial guidance</strong> — designed to help your
          team avoid confirming protected health information in public replies. It
          is <strong>not</strong> legal, medical, regulatory, privacy, or compliance
          advice, and it does not create an attorney-client, provider-patient, or
          fiduciary relationship. It is not a substitute for review by your licensed
          provider, privacy officer, attorney, or compliance counsel — and final
          compliance decisions belong with them.
        </p>
        <p>
          SpaReply is not designed to handle protected health information and is
          not certified under any healthcare privacy framework. Please don&rsquo;t
          send PHI to <a href="mailto:hello@spareply.com">hello@spareply.com</a>{" "}
          or to any SpaReply form. Route clinical and privacy questions through
          your provider, privacy officer, or counsel.
        </p>

        <h2>6. Payment, billing, and refund</h2>
        <p>
          Checkout is handled by <strong>Stripe</strong>. By paying, you agree to
          Stripe&rsquo;s terms in addition to these. The toolkit is a one-time
          purchase at $49 — there is no subscription and no auto-renewal. The
          7-day satisfaction refund process is described in the{" "}
          <Link href="/refund-policy">refund policy</Link>; refunds are issued
          through Stripe to the original payment method.
        </p>

        <h2>7. Acceptable use of the website</h2>
        <ul>
          <li>
            Don&rsquo;t scrape, copy, or republish the site&rsquo;s written content
            in bulk without permission.
          </li>
          <li>
            Don&rsquo;t attempt to break, overload, or probe the site&rsquo;s
            infrastructure.
          </li>
          <li>
            Don&rsquo;t use the free generator or any form on the site to submit
            content that infringes someone else&rsquo;s rights or violates the law.
          </li>
        </ul>

        <h2>8. Third-party services</h2>
        <p>
          The site links to and depends on third parties — Stripe for payments,
          email providers for support replies, and external resources mentioned in
          the toolkit (Google Business Profile, Yelp, etc.). Your use of those
          services is governed by their own terms and privacy policies.
        </p>

        <h2>9. Intellectual property</h2>
        <p>
          The SpaReply name, the website copy, the toolkit PDFs, and the underlying
          editorial materials are owned by SpaReply and protected by copyright and
          related rights. Your license under section 2 does not transfer ownership.
        </p>

        <h2>10. No warranties</h2>
        <p>
          The site, the free generator, and the toolkit are provided{" "}
          <strong>&ldquo;as is&rdquo;</strong>, without warranties of any kind,
          express or implied. We don&rsquo;t guarantee specific outcomes — review
          response rates, star-rating changes, local ranking improvements, revenue
          impact, regulatory outcomes, or that any particular template will be
          appropriate for your clinic&rsquo;s situation.
        </p>

        <h2>11. Limitation of liability</h2>
        <p>
          To the maximum extent allowed by law, SpaReply&rsquo;s total liability for
          any claim related to the site, the free generator, or the toolkit is
          limited to the amount you paid for the toolkit (typically $49). SpaReply
          is not liable for indirect, incidental, special, consequential, or
          punitive damages — including loss of profits, loss of reputation, lost
          rankings, or lost business — arising out of or related to your use of
          the site or the toolkit.
        </p>

        <h2>12. Changes to the toolkit and the site</h2>
        <p>
          We may update the toolkit, the website copy, and these terms over time.
          Free updates to the toolkit during the launch window are delivered into
          the same delivery channel. Material changes to these terms will be
          reflected by an updated &ldquo;last updated&rdquo; date below.
        </p>

        <h2>13. Termination</h2>
        <p>
          Your license to use the toolkit ends if (a) you receive a refund under
          the <Link href="/refund-policy">refund policy</Link> or (b) you materially
          breach these terms — for example, by reselling or publicly redistributing
          the toolkit. On termination, stop using and distributing the
          SpaReply-branded materials.
        </p>

        <h2>14. Governing law</h2>
        <p>
          These terms are governed by the laws of the United States and the
          jurisdiction in which SpaReply operates, without regard to conflict-of-laws
          rules. If any part of these terms is unenforceable, the rest still
          applies.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href={SUPPORT_MAILTO}>hello@spareply.com</a>.
        </p>

        <p className={styles.lede} style={{ fontSize: 14, marginTop: 32 }}>
          Last updated: {lastUpdated}.
        </p>

        <div className={styles.linkRow}>
          <Link href="/refund-policy">
            <span>Policy</span>
            Refund policy
          </Link>
          <Link href="/privacy-policy">
            <span>Policy</span>
            Privacy policy
          </Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
