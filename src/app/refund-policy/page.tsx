import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "../_components/content.module.css";

const REFUND_MAILTO =
  "mailto:hello@spareply.com?subject=Refund%20request%20%E2%80%94%20%2449%20toolkit";

export const metadata: Metadata = {
  title: "Refund Policy | SpaReply",
  description:
    "7-day no-friction refund policy for the $49 SpaReply Med Spa Review + Local SEO Toolkit. Email hello@spareply.com with your order email and date — refunds return to the original payment method.",
  alternates: { canonical: "/refund-policy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "May 3, 2026";

export default function RefundPolicyPage() {
  return (
    <main className={styles.shell}>
      <SiteHeader />
      <article className={styles.article}>
        <div className={styles.eyebrow}>Refund policy</div>
        <h1>7-day refund. No forms. Email a human.</h1>
        <p className={styles.lede}>
          SpaReply sells one paid product: the $49 Med Spa Review + Local SEO Toolkit
          — a one-time digital purchase delivered as printable PDFs and editable source
          files. If the toolkit doesn&rsquo;t earn its keep in the first week, we
          refund it.
        </p>

        <div className={styles.callout}>
          <strong>The short version.</strong>
          <p>
            Email <a href={REFUND_MAILTO}>hello@spareply.com</a> within{" "}
            <strong>7 days</strong> of your purchase, include the email address and
            date you used at checkout, and we&rsquo;ll refund the full $49 to your
            original payment method. No survey, no &ldquo;why are you leaving&rdquo;
            forms, no phone call required.
          </p>
        </div>

        <h2>What is covered</h2>
        <p>
          The $49 Med Spa Review + Local SEO Toolkit, purchased through Stripe checkout
          on spareply.com. This includes the polished 31-page SpaReply PDF complete
          pack, the six focused individual PDFs, and the editable Markdown and CSV
          source files delivered after payment.
        </p>

        <h2>The window</h2>
        <p>
          Refund requests must be received within <strong>7 days</strong> of the
          original Stripe purchase date. Requests received after the 7-day window may
          still be considered case-by-case, but are not guaranteed.
        </p>

        <h2>How to request a refund</h2>
        <ol>
          <li>
            Email <a href={REFUND_MAILTO}>hello@spareply.com</a> with the subject line{" "}
            <code>Refund request — $49 toolkit</code>.
          </li>
          <li>
            Include the <strong>email address you used at Stripe checkout</strong>.
            We use it to look up your order.
          </li>
          <li>
            Include the <strong>date of purchase</strong>. (If you don&rsquo;t have it
            handy, the Stripe receipt in your inbox shows it.)
          </li>
          <li>
            Optional: a one-line note about what didn&rsquo;t fit. We read every reply
            personally — it&rsquo;s how the toolkit gets better — but it&rsquo;s not
            required to receive the refund.
          </li>
        </ol>

        <h2>How and when refunds are issued</h2>
        <ul>
          <li>
            <strong>Where the money goes:</strong> refunds are issued through Stripe
            back to the <strong>original payment method</strong> used at checkout.
            We can&rsquo;t refund to a different card or bank account.
          </li>
          <li>
            <strong>Timing:</strong> we process refund requests within{" "}
            <strong>2 business days</strong> of receiving your email. Once issued,
            your bank or card issuer typically posts the refund within{" "}
            <strong>5–10 business days</strong>, depending on your provider.
          </li>
          <li>
            <strong>Confirmation:</strong> Stripe sends an automatic refund
            confirmation email when the refund is issued. We&rsquo;ll also reply to
            confirm.
          </li>
        </ul>

        <h2>Digital product access after a refund</h2>
        <p>
          The toolkit is a digital product. Once a refund is issued, your purchase is
          considered closed and you should stop using the SpaReply-branded materials,
          including any downloaded PDFs and source files. Forks of the wording you
          made into your own clinic&rsquo;s shared drive before the refund are yours
          to remove at your discretion — but the SpaReply-branded assets themselves
          should not continue to be redistributed or used after a refund.
        </p>

        <h2>Abuse and fraud</h2>
        <p>
          The 7-day refund exists so med-spa owners can buy without risk. Repeated
          purchases and refunds from the same buyer, fraudulent chargebacks, or
          requests that appear tied to redistribution or resale of the toolkit may
          be denied. We reserve the right to refuse a refund in cases of clear
          abuse, and to refuse future purchases to accounts associated with abusive
          patterns.
        </p>

        <h2>Chargebacks</h2>
        <p>
          If something feels off with your order, please email{" "}
          <a href={REFUND_MAILTO}>hello@spareply.com</a> first — a real person reads
          every email and most issues are resolved the same business day. Filing a
          chargeback before contacting support locks the order in dispute and slows
          down everyone, including you. We&rsquo;d rather just refund you.
        </p>

        <h2>Questions</h2>
        <p>
          Email <a href="mailto:hello@spareply.com">hello@spareply.com</a> and a human
          will reply. The same inbox handles support, refunds, and pre-purchase
          questions.
        </p>

        <p className={styles.lede} style={{ fontSize: 14, marginTop: 32 }}>
          Last updated: {lastUpdated}.
        </p>

        <div className={styles.linkRow}>
          <Link href="/privacy-policy">
            <span>Policy</span>
            Privacy policy
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
