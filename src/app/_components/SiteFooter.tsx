import Link from "next/link";
import { TrackedLink } from "./TrackedLink";
import styles from "./shell.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <strong>SpaReply</strong>
          <p>
            Premium review replies, HIPAA-aware safety wording, and local SEO prompts for
            aesthetic clinics. Built from real med-spa review patterns — not generic
            restaurant templates.
          </p>
        </div>
        <div className={styles.footerCols}>
          <div>
            <span>Tools</span>
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
              $49 launch toolkit
            </TrackedLink>
          </div>
          <div>
            <span>Resources</span>
            <Link href="/med-spa-review-response-examples">Med spa review response examples</Link>
            <Link href="/botox-review-response-templates">Botox review response templates</Link>
            <Link href="/negative-med-spa-review-response">Negative med spa review response</Link>
            <Link href="/med-spa-google-review-reply">Med spa Google review reply guide</Link>
            <Link href="/aesthetic-clinic-review-templates">Aesthetic clinic review templates</Link>
            <Link href="/local-seo-checklist">Med spa local SEO checklist</Link>
          </div>
          <div>
            <span>Get started</span>
            <TrackedLink
              href="/toolkit-preview"
              event="toolkit_preview_click"
              eventProperties={{ location: "site_footer_get_started" }}
            >
              Preview the $49 toolkit
            </TrackedLink>
            <a href="mailto:hello@spareply.com">hello@spareply.com</a>
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
        <small>
          SpaReply is informational. It does not provide medical, legal, or compliance advice.
          Route clinical and legal questions to licensed providers and counsel.
        </small>
      </div>
    </footer>
  );
}
