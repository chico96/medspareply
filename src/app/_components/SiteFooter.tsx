import Link from "next/link";
import { TrackedLink } from "./TrackedLink";
import styles from "./shell.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Link className={styles.footerWordmark} href="/">
            <span className={styles.footerMark} aria-hidden="true">
              <span />
            </span>
            SpaReply
          </Link>
          <p>
            A front-desk system for med-spa review replies and local SEO.
            Built from real aesthetic-clinic review patterns — Hydrafacial,
            injectables, laser, peels, memberships — not generic restaurant templates.
          </p>
          <p className={styles.footerContact}>
            <span>Contact</span>
            <a href="mailto:hello@spareply.com">hello@spareply.com</a>
          </p>
        </div>

        <div className={styles.footerCols}>
          <div>
            <span>Product</span>
            <TrackedLink
              href="/#generator"
              event="free_generator_click"
              eventProperties={{ location: "site_footer" }}
            >
              Free reply generator
            </TrackedLink>
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "site_footer_tools" }}
            >
              The $49 toolkit
            </TrackedLink>
          </div>
          <div>
            <span>Resources</span>
            <Link href="/med-spa-review-response-examples">Review response examples</Link>
            <Link href="/botox-review-response-templates">Botox reply templates</Link>
            <Link href="/negative-med-spa-review-response">Negative review response</Link>
            <Link href="/med-spa-google-review-reply">Google review reply guide</Link>
            <Link href="/aesthetic-clinic-review-templates">Aesthetic clinic templates</Link>
            <Link href="/local-seo-checklist">Local SEO checklist</Link>
          </div>
          <div>
            <span>Policies</span>
            <Link href="/refund-policy">Refund policy</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms">Terms of use</Link>
          </div>
        </div>
      </div>

      <div className={styles.footerNote}>
        <small>© {new Date().getFullYear()} SpaReply. Informational only — not medical, legal, or compliance advice.</small>
        <small>Made for aesthetic clinics in the United States &amp; Canada.</small>
      </div>
    </footer>
  );
}
