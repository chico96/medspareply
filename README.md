# MedSpaReply

MedSpaReply is a Next.js 16 App Router MVP for med-spa reputation marketing. It positions a lightweight product for AI-assisted review replies and local SEO content workflows for aesthetic clinics.

## Product MVP

- Premium landing page for med-spa owners, founders, and practice managers
- Free deterministic review reply generator with no external API calls
- Outputs: public reply, private follow-up, and safety notes
- $49 toolkit offer for templates, SOPs, and local SEO prompts
- Pilot early-access form that opens the user's email client
- SEO landing pages for review examples, negative-review playbooks, and local SEO checklists

## Privacy and safety

The free generator runs entirely in the browser using local deterministic TypeScript helpers. It does not use API keys, send review text to third parties, or store submissions. Safety notes remind teams to avoid protected health details, exaggerated results claims, and to route clinical concerns to licensed providers.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000> to view the MVP.

## Scripts

```bash
npm run dev    # Start the local Next.js dev server
npm test       # Run Vitest helper tests
npm run lint   # Run ESLint
npm run build  # Build for production
npm start      # Start the production server after building
```

## Implementation notes

- Framework: Next.js 16.2.4 App Router with TypeScript
- Styling: CSS modules plus global CSS, no Tailwind
- Tests: Vitest unit tests for `generateReviewReply`
- Deployability: Vercel-ready Next.js app; no secrets or server-only integrations required
