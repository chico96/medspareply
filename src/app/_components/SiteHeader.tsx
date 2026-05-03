import Link from "next/link";
import { TrackedLink } from "./TrackedLink";
import styles from "./shell.module.css";

type SiteHeaderProps = {
  /** When true, treat brand link as in-page anchor (homepage). */
  homepageAnchors?: boolean;
};

export function SiteHeader({ homepageAnchors = false }: SiteHeaderProps) {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <Link className={styles.brand} href={homepageAnchors ? "#top" : "/"}>
        <span aria-hidden="true">✦</span> SpaReply
      </Link>
      <div className={styles.navLinks}>
        <TrackedLink
          href={homepageAnchors ? "#generator" : "/#generator"}
          event="free_generator_click"
          eventProperties={{ location: "site_header" }}
        >
          Free generator
        </TrackedLink>
        <TrackedLink
          href="/toolkit-preview"
          event="toolkit_preview_click"
          eventProperties={{ location: "site_header" }}
        >
          $49 toolkit
        </TrackedLink>
        <Link href="/review-response-examples">Examples</Link>
        <Link href="/negative-review-response">Negative reviews</Link>
        <Link href="/local-seo-checklist">Local SEO</Link>
      </div>
    </nav>
  );
}
