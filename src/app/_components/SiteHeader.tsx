"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TrackedLink } from "./TrackedLink";
import styles from "./shell.module.css";

type SiteHeaderProps = {
  /** When true, treat brand link as in-page anchor (homepage). */
  homepageAnchors?: boolean;
};

export function SiteHeader({ homepageAnchors = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className={styles.navWrap}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link className={styles.brand} href={homepageAnchors ? "#top" : "/"} onClick={close}>
          <span className={styles.brandMark} aria-hidden="true">
            <span />
          </span>
          <span className={styles.brandWord}>SpaReply</span>
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
            The toolkit
          </TrackedLink>
          <Link href="/review-response-examples">Examples</Link>
          <Link href="/negative-review-response">Negative reviews</Link>
          <Link href="/local-seo-checklist">Local SEO</Link>
        </div>

        <div className={styles.navCtaWrap}>
          <TrackedLink
            className={styles.navCta}
            href="/toolkit-preview"
            event="toolkit_preview_click"
            eventProperties={{ location: "site_header_cta" }}
          >
            Get the toolkit · $49
          </TrackedLink>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
          <span data-open={open} />
        </button>
      </nav>

      {open ? (
        <div className={styles.mobileMenu} role="dialog" aria-label="Site menu">
          <TrackedLink
            href={homepageAnchors ? "#generator" : "/#generator"}
            event="free_generator_click"
            eventProperties={{ location: "site_header_mobile" }}
            onClick={close}
          >
            Free generator
          </TrackedLink>
          <TrackedLink
            href="/toolkit-preview"
            event="toolkit_preview_click"
            eventProperties={{ location: "site_header_mobile" }}
            onClick={close}
          >
            The toolkit
          </TrackedLink>
          <Link href="/review-response-examples" onClick={close}>
            Examples
          </Link>
          <Link href="/negative-review-response" onClick={close}>
            Negative reviews
          </Link>
          <Link href="/local-seo-checklist" onClick={close}>
            Local SEO
          </Link>
          <TrackedLink
            className={styles.mobileMenuCta}
            href="/toolkit-preview"
            event="toolkit_preview_click"
            eventProperties={{ location: "site_header_mobile_cta" }}
            onClick={close}
          >
            Get the toolkit · $49
          </TrackedLink>
        </div>
      ) : null}
    </header>
  );
}
