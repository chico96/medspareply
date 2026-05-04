@AGENTS.md

# SpaReply — Claude Code project context

> Read this entire file before writing code, copy, or design for this repo. It overrides
> generic conventions you may have seen elsewhere. The goal: ship a focused, conversion-first
> product — not a generic AI SaaS shell.

## 1. Project identity

- **Brand:** SpaReply
- **Public domain:** spareply.com
- **Public email:** hello@spareply.com (this is the only email used in copy, footers, refund flows, FAQs, schema, OG metadata, and outbound responses)
- **Forbidden outdated email:** never reference `hello@denzellrei.com` anywhere in code, docs, copy, metadata, or examples. If you find it, replace it with `hello@spareply.com` and flag the diff.
- **Repo directory name (`medspareply`) is legacy.** Treat the product name as SpaReply everywhere user-visible.

## 2. The product

A single, concrete paid offer plus a free lead-gen tool:

- **Free tool:** browser-based med-spa review reply generator (`src/app/FreeGenerator.tsx` + `src/lib/replyGenerator.ts`). Runs locally in the browser. No login, no API calls, no review text leaving the device. Do not change this without explicit approval — it is the trust anchor.
- **Paid offer:** **$49 one-time** Med Spa Review + Local SEO Toolkit. Delivered as instant buyer-page downloads: polished PDFs plus editable Markdown/CSV assets (20 paste-ready templates, HIPAA-aware checklist, GBP prompts, SOP, 4-week content calendar). Source of truth for what's in the toolkit: `src/lib/marketing.ts` (`toolkitDeliverables`).
- **Checkout:** Stripe Payment Link only. URL is read at build time from `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` via `src/lib/checkout.ts`. When that env var is empty, the helper falls back to a `mailto:` link so the page is never broken in dev. Never hardcode the live payment link in source.
- **Refund:** 7-day no-friction refund, surfaced on hero, FAQ, and post-purchase copy.

## 3. Buyer

Med spa / aesthetic clinic owners, practice managers, and front-desk leads. They:

- Reply to Google reviews on weekends and want to stop.
- Are nervous about HIPAA exposure when responding publicly to reviews that mention treatments.
- Already have a Google Business Profile and want better local SEO without hiring an agency.
- Will not buy a $200/mo SaaS sight-unseen, but will pay $49 for an asset pack they can use today.

Write to that buyer. Not to "businesses," not to "users," not to "customers."

## 4. Build philosophy

**Conversion-first. Concrete deliverables. Original voice.** Not generic AI SaaS fluff.

Always do:
- Name specific deliverables, services (Hydrafacial, injectables, laser, peels, memberships), and outcomes (e.g., "20 paste-ready templates," "20-minute weekly SOP," "7-day refund").
- Lead with the buyer's actual Monday-morning problem.
- Treat the free generator → $49 toolkit → future platform as a clear ladder.
- Match copy and design to the existing tone in `src/lib/marketing.ts` and `src/app/page.tsx`.

Never do:
- Add "AI-powered," "revolutionary," "next-gen," "supercharge," "unlock," or rocket/sparkle emoji theatrics.
- Use placeholder lorem text, generic stock-photo dashboards, or vague "solutions for businesses" copy.
- Introduce abstractions, plugins, or design systems beyond what the page actually needs.
- Add fake testimonials, fake star counts, or invented case-study numbers.
- Promise integrations, dashboards, or platform features that do not exist.

## 5. Visual direction

Premium clinical trust. Think Stripe documentation calm and Linear precision, translated into an aesthetic-clinic context — original to SpaReply, never a clone.

Tone tokens (use as guidance, not as a literal palette to copy verbatim):

- **Surface:** soft warm-neutral background (off-white / bone), generous whitespace, single-column rhythm with a clear hierarchy.
- **Ink:** near-black body type, no pure-black, no pure-white. High contrast where it matters (CTA, price, refund).
- **Accent:** one restrained accent (deep clinical green or muted plum). One. Not three. Used on CTAs, key numbers, and trust marks — never on decorative shapes.
- **Type:** the existing Geist sans + Geist mono pairing. Confident, mid-weight headlines. Body type set for reading, not for "design."
- **Motifs:** review cards, star-rating glyphs, reply threads, checklists, calendar grids — drawn from the actual workflow. No abstract orbs, glow blobs, mesh gradients, neon, or "AI-generated isometric" illustrations.
- **Imagery:** if any imagery is used, it must depict real clinic workflow artifacts (a reply card, a checklist, a calendar) — never stock photos of "diverse smiling team."
- **Motion:** restrained. Hover states and easing only. No parallax, no Lottie hero loops, no auto-playing video.

A page should feel like something a serious clinic owner could send to their lawyer without embarrassment.

## 6. Quality gates (when you touch app code)

Before committing changes that affect `src/`, `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`, or `package.json`:

1. `npm test` — Vitest must pass.
2. `npm run lint` — must pass with zero warnings introduced.
3. `npm run build` — Next.js production build must succeed.

If you only touched docs, `.claude/`, or `toolkit/` assets, skip the build but still run `git diff` and confirm no app-code drift.

## 7. Next.js 16 note

This repo is on **Next.js 16** with React 19 (see `package.json`). APIs, conventions, and file structure differ from older Next.js you may have learned. Before changing anything in `src/app/`, the App Router, routing helpers, server/client boundaries, fonts, metadata, sitemap, or framework config:

- Read the relevant guide in `node_modules/next/dist/docs/`.
- Heed deprecation notices in build output.
- Do not retrofit Pages Router patterns. Do not assume `getServerSideProps`, `getStaticProps`, or `next/head`.

## 8. Security

- **No secrets in the frontend.** Anything bundled to the client must be safe to publish.
- **Never put a Stripe secret key in a `NEXT_PUBLIC_*` variable.** `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` is a public Payment Link URL, not a secret. `STRIPE_SECRET_KEY` (if ever introduced) must be server-only and must never be logged, echoed, committed, or referenced in client components.
- Do not read `.env*` files or print env values to chat or to commits. If you need to confirm a variable exists, check the variable name only.
- **No HIPAA-compliant claims.** SpaReply is not a HIPAA-compliant or BAA-eligible service. Use the phrase **HIPAA-aware** only — meaning copy and SOPs are designed to avoid confirming protected health information in public replies. Never write "HIPAA compliant," "HIPAA certified," "BAA included," or similar.
- No invented certifications, SOC 2 badges, or compliance logos.

## 9. Delivery and business rules

- **Preserve the checkout path.** `getToolkitCheckoutUrl()` and `isStripeCheckoutEnabled()` in `src/lib/checkout.ts` are the only sanctioned ways to render the CTA URL. Do not bypass them, do not hardcode a Stripe URL inline, and do not add a second checkout path.
- **Public email is `hello@spareply.com`.** Use it in refund copy, FAQs, support mentions, and structured data. Update it in one place if it ever changes; do not scatter copies.
- **Refund and copy clarity.** State the price ($49, one-time), what is delivered (polished PDFs plus editable Markdown/CSV assets), how it is delivered (instant buyer-page downloads after Stripe checkout), and the 7-day refund — every time these are referenced. Do not soften, hide, or marketing-ify these facts.
- **No subscription, no "free trial," no MVP/pilot language** unless the operational reality matches. The current offer is a one-time $49 purchase — write it that way.

## 10. Specialist agents

When picking an agent for a task, prefer the project-specific specialists in `.claude/agents/` over generic ones:

- `nextjs-conversion-builder` — Next.js 16 + React 19 implementation with conversion UX in mind.
- `conversion-copywriter` — landing-page and offer copy, objections, risk reversal.
- `brand-design-director` — distinctive visual design, premium clinical trust.
- `stripe-delivery-integrator` — Stripe Payment Link, success page, email/contact flows, secret hygiene.
