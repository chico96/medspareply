import Link from "next/link";
import styles from "./shell.module.css";

type SiteHeaderProps = {
  /** When true, treat brand link as in-page anchor (homepage). */
  homepageAnchors?: boolean;
};

export function SiteHeader({ homepageAnchors = false }: SiteHeaderProps) {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <Link className={styles.brand} href={homepageAnchors ? "#top" : "/"}>
        <span aria-hidden="true">✦</span> MedSpaReply
      </Link>
      <div className={styles.navLinks}>
        <Link href={homepageAnchors ? "#generator" : "/#generator"}>Free generator</Link>
        <Link href="/toolkit-preview">$49 toolkit</Link>
        <Link href="/review-response-examples">Examples</Link>
        <Link href="/negative-review-response">Negative reviews</Link>
        <Link href="/local-seo-checklist">Local SEO</Link>
      </div>
    </nav>
  );
}
