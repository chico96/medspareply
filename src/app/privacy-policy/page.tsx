import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "../_components/content.module.css";

const SUPPORT_MAILTO = "mailto:hello@spareply.com?subject=Privacy%20question";

export const metadata: Metadata = {
  title: "Privacy Policy | SpaReply",
  description:
    "How SpaReply handles data: minimal collection on the public site, payment handled by Stripe, support by email. We do not sell personal data. Contact hello@spareply.com.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "May 3, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Privacy policy</div>
        <h1>What we collect, what we don&rsquo;t, and where the data lives.</h1>
        <p className={styles.lede}>
          SpaReply is a small site. We sell one $49 digital toolkit and run a free
          browser-based review reply generator. We collect as little personal data as
          we can while still operating the business — and we don&rsquo;t sell what we
          do collect.
        </p>

        <div className={styles.callout}>
          <strong>The short version.</strong>
          <p>
            The free generator runs entirely in your browser. Stripe handles checkout
            and stores the payment information — we don&rsquo;t see or store your
            card details. We use the email you give Stripe to deliver your toolkit
            and reply to support. We don&rsquo;t sell, rent, or trade your personal
            data.
          </p>
        </div>

        <h2>Who runs SpaReply</h2>
        <p>
          SpaReply is operated as an independent business. The public domain is{" "}
          <strong>spareply.com</strong>. The only support email is{" "}
          <a href="mailto:hello@spareply.com">hello@spareply.com</a>.
        </p>

        <h2>What the free reply generator collects</h2>
        <p>
          Nothing leaves your device. The generator at{" "}
          <Link href="/#generator">spareply.com/#generator</Link> runs in the browser
          tab — review text, rating, service, and tone selections are processed
          locally to assemble a draft reply. No login, no API call, no analytics
          event carries the review text off your device.
        </p>

        <h2>What we collect when you buy the $49 toolkit</h2>
        <p>
          Checkout is handled by <strong>Stripe</strong>. When you pay, Stripe
          collects the data it needs to process the transaction — typically:
        </p>
        <ul>
          <li>Email address</li>
          <li>Name on payment method</li>
          <li>Billing country and (where required) postal code</li>
          <li>Card or payment-method details (handled and stored by Stripe, not by us)</li>
          <li>The IP address Stripe sees during checkout, for fraud screening</li>
        </ul>
        <p>
          We receive a record of the order from Stripe — including your email and the
          fact that you bought the toolkit — so we can deliver the product, send
          receipts, handle refunds, and reply to support. We do not see or store your
          full card number; that lives with Stripe under their security and PCI
          program.
        </p>
        <p>
          Stripe&rsquo;s own privacy practices apply to the data they collect at
          checkout. See <strong>stripe.com/privacy</strong> for their policy.
        </p>

        <h2>What we collect when you email us</h2>
        <p>
          When you email <a href={SUPPORT_MAILTO}>hello@spareply.com</a> — or use any
          of the &ldquo;ask a question&rdquo; forms on the site, which simply open
          your own email client — we receive whatever you send: your email address,
          your message, and any details you choose to share. We use that to reply,
          to resend a download link, or to handle a refund. We don&rsquo;t add the
          email to a marketing list.
        </p>

        <h2>What we don&rsquo;t collect</h2>
        <ul>
          <li>We don&rsquo;t require accounts, logins, or passwords on spareply.com.</li>
          <li>
            We don&rsquo;t collect or store any review text, guest names, or other
            content typed into the free generator — it never leaves your device.
          </li>
          <li>
            We don&rsquo;t collect protected health information. Please don&rsquo;t
            send PHI in support emails. If a clinical or compliance question requires
            it, route it through your provider, privacy officer, or counsel instead.
          </li>
          <li>We don&rsquo;t sell, rent, or trade personal data to third parties.</li>
        </ul>

        <h2>Cookies and analytics</h2>
        <p>
          The site uses minimal cookies. Stripe&rsquo;s checkout sets the cookies it
          needs to complete a transaction and screen for fraud — those are governed
          by Stripe&rsquo;s policy. If we add basic, privacy-respecting analytics
          later (for example, to understand which pages buyers actually read), we&rsquo;ll
          update this page to say so and what it covers.
        </p>

        <h2>Email delivery</h2>
        <p>
          Transactional emails — Stripe receipts, refund confirmations, and human
          support replies — are sent through Stripe and standard email providers. We
          don&rsquo;t run a marketing automation platform and we don&rsquo;t add
          buyers to a newsletter without explicit opt-in.
        </p>

        <h2>How long we keep data</h2>
        <p>
          Order records (email, purchase date, refund status) are kept as long as
          needed to support the buyer, handle refunds, and meet basic accounting
          obligations. Support emails are kept while the conversation is useful — and
          then archived or deleted.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>
            <strong>Access or delete:</strong> email{" "}
            <a href={SUPPORT_MAILTO}>hello@spareply.com</a> from the address tied to
            your purchase and we&rsquo;ll confirm what we have on file or delete it,
            consistent with our refund and accounting needs.
          </li>
          <li>
            <strong>Refund:</strong> see the{" "}
            <Link href="/refund-policy">refund policy</Link> for the 7-day refund
            process.
          </li>
          <li>
            <strong>Stop receiving email:</strong> reply to any support email and ask
            us to close the thread. We don&rsquo;t run a marketing list.
          </li>
        </ul>

        <h2>Security</h2>
        <p>
          Payments are handled by Stripe under their security program. We follow
          standard practices to keep our own systems reasonable — limited access,
          short-lived sessions, and no unnecessary data retention. We don&rsquo;t
          claim certifications, audits, or compliance frameworks we haven&rsquo;t
          completed.
        </p>

        <h2>Children</h2>
        <p>
          SpaReply is built for med-spa owners, practice managers, and front-desk
          leads — adults using the site in a business context. The site is not
          directed at children, and we don&rsquo;t knowingly collect personal data
          from children.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, we&rsquo;ll update the &ldquo;last updated&rdquo;
          date below. Material changes will be reflected in copy, not buried.
        </p>

        <h2>Contact</h2>
        <p>
          Email <a href={SUPPORT_MAILTO}>hello@spareply.com</a> and a human will
          reply. The same inbox handles privacy questions, support, and refunds.
        </p>

        <p className={styles.lede} style={{ fontSize: 14, marginTop: 32 }}>
          Last updated: {lastUpdated}.
        </p>

        <div className={styles.linkRow}>
          <Link href="/refund-policy">
            <span>Policy</span>
            Refund policy
          </Link>
          <Link href="/terms">
            <span>Policy</span>
            Terms of use
          </Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
