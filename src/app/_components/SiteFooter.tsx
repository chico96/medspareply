import Link from "next/link";
import styles from "./shell.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <strong>MedSpaReply</strong>
          <p>
            An early pilot for med-spa review replies and local SEO content. Built solo, shipped
            often, and refined with input from owners and front-desk leads.
          </p>
        </div>
        <div className={styles.footerCols}>
          <div>
            <span>Tools</span>
            <Link href="/#generator">Free reply generator</Link>
            <Link href="/#toolkit">$49 launch toolkit</Link>
          </div>
          <div>
            <span>Resources</span>
            <Link href="/review-response-examples">Med spa review response examples</Link>
            <Link href="/negative-review-response">Negative med spa review response</Link>
            <Link href="/local-seo-checklist">Med spa local SEO checklist</Link>
          </div>
          <div>
            <span>Pilot</span>
            <Link href="/#waitlist">Join the early-access list</Link>
            <a href="mailto:hello@denzellrei.com">hello@denzellrei.com</a>
          </div>
        </div>
      </div>
      <div className={styles.footerNote}>
        <small>
          MedSpaReply is informational. It does not provide medical, legal, or compliance advice.
          Route clinical and legal questions to licensed providers and counsel.
        </small>
      </div>
    </footer>
  );
}
