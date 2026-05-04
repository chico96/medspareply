export const samplePreviewPdf = {
  href: "/downloads/spareply-toolkit/SpaReply-sample-preview.pdf",
  filename: "SpaReply-sample-preview.pdf",
  pages: 5,
};

export type ToolkitDeliverable = {
  category: string;
  title: string;
  detail: string;
  format: string;
};

export const toolkitDeliverables: ToolkitDeliverable[] = [
  {
    category: "Reply templates",
    title: "20 paste-ready public reply templates",
    detail:
      "5★ to 1★ wording for Hydrafacial, injectables, laser, peels, body contouring, and membership visits — copy, customize, post.",
    format: "Markdown + printable PDF",
  },
  {
    category: "Negative reviews",
    title: "Negative-review response scripts & escalation flows",
    detail:
      "Word-for-word public phrasing plus the private follow-up checklist for 1- and 2-star reviews, refund asks, and clinical concerns.",
    format: "Playbook PDF",
  },
  {
    category: "Compliance",
    title: "HIPAA-aware safety checklist",
    detail:
      "What to never write publicly, how to acknowledge without confirming care, and when to route a reply to a licensed provider.",
    format: "1-page checklist",
  },
  {
    category: "Local SEO",
    title: "Google Business Profile + local SEO prompt pack",
    detail:
      "GBP post prompts, treatment-page outlines, city-page angles, and FAQ ideas tuned to the questions guests already ask in reviews.",
    format: "Markdown + printable PDF",
  },
  {
    category: "Operations",
    title: "Weekly review-reply SOP for the front desk",
    detail:
      "A 20-minute weekly cadence — who replies, what gets escalated, and how to log it — so reviews stop slipping past Friday.",
    format: "SOP + tracker",
  },
  {
    category: "Content",
    title: "4-week local content calendar",
    detail:
      "Seasonal angles, membership pushes, and review-driven content slots already paired to GBP posts and short-form captions.",
    format: "CSV + printable PDF",
  },
];

export const trustBullets = [
  "No login, no AI keys, no review text leaving the browser",
  "Built from real med-spa review patterns across injectables, laser, facials, peels, and memberships",
  "HIPAA-aware wording — designed to acknowledge without confirming protected health details",
  "Premium tone tuned for aesthetic clinics, not generic restaurant-style reply packs",
];

export const beforeAfter = {
  reviewText:
    "Loved my Hydrafacial with Mia. The spa felt calm and my skin looked refreshed before my event. Front desk check-in was a little slow.",
  before:
    "Hi! Thanks so much for the AMAZING review!! We're SO HAPPY you loved your Hydrafacial with Mia and that your skin looked refreshed!!! We can't wait to see you again!!! 💕✨",
  after:
    "Thank you for trusting us with your visit. Mia and the team appreciated caring for you — we look forward to welcoming you back soon.",
};

export const audiences = [
  {
    title: "Med spa owners",
    detail: "Stop rewriting front-desk replies on weekends. Hand the team a system, not a vibe.",
  },
  {
    title: "Practice managers",
    detail: "A repeatable SOP, escalation tree, and tracker so reviews are answered before Monday.",
  },
  {
    title: "Front desk leads",
    detail: "Copy a templated reply in under 60 seconds without guessing what is HIPAA-safe to say.",
  },
];

export const guarantee = {
  headline: "7-day satisfaction refund",
  detail:
    "Use the toolkit for a week. If it does not make replying to reviews faster and safer for your team, email hello@spareply.com within 7 days with the email address and date you used at Stripe checkout. We will refund the full $49 — no forms, no survey. Refunds are reviewed to prevent abuse, duplicate claims, redistribution, or policy misuse, and accounts that misuse the policy may be refused future purchases.",
};

export const contentExamples = [
  {
    title: "Google Business Profile post",
    text: "Spring glow plan: Hydrafacial + LED finishing — three weekly slots open in Scottsdale this week. Members save 15%.",
  },
  {
    title: "Review reply angle",
    text: "Thank the guest, name the service, reinforce care standards, and invite private follow-up — without confirming any treatment specifics.",
  },
  {
    title: "Local SEO topic outline",
    text: "Best questions to ask before Botox in Austin: safety, timing, downtime, and what your consult should cover.",
  },
];

export const faqItems = [
  {
    question: "Does the free generator use AI or send my reviews to a server?",
    answer:
      "No. The generator runs entirely in your browser. There are no API calls, no logins, and no review text is stored or transmitted.",
  },
  {
    question: "Is this a replacement for legal, medical, or compliance advice?",
    answer:
      "No. SpaReply gives you wording patterns and operational guardrails. Sensitive clinical, legal, or HIPAA decisions still belong with licensed providers and counsel.",
  },
  {
    question: "Who is the $49 launch toolkit for?",
    answer:
      "Med-spa owners, practice managers, and front-desk leads who want faster Google review replies, a HIPAA-aware SOP, and ready-to-post local SEO content — without committing to a monthly platform.",
  },
  {
    question: "Can I see the toolkit before paying?",
    answer:
      "Yes. Download the free 5-page sample preview PDF — a cover, the 7-question pre-post safety check, three of the 20 paste-ready review-reply templates, the first three steps of the 8-step negative-review triage, and two Google Business Profile prompt samples. It is enough to judge wording, tone, and structure before you spend $49.",
  },
  {
    question: "How is the toolkit delivered?",
    answer:
      "Instantly, the moment Stripe confirms payment. You land on a buyer page where you can download the polished 31-page SpaReply PDF complete pack, six focused individual PDFs (front-desk SOP, template bank, negative-review triage, GBP + 4-week content calendar, local SEO prompts, operating cadence), and the editable Markdown and CSV source files for teams that want to fork the wording into their own shared drive.",
  },
  {
    question: "What if it doesn't help my team?",
    answer:
      "Email hello@spareply.com within 7 days of purchase with the email address and date you used at Stripe checkout, and we'll refund the full $49 to your original payment method. No forms, no survey, no support runaround. Refund requests are reviewed to prevent abuse, duplicate claims, redistribution, or policy misuse — accounts that misuse the policy may be refused future purchases.",
  },
  {
    question: "Will there be a software platform later?",
    answer:
      "Yes — saved brand voice, team seats, and a monthly content workflow are on the roadmap. Toolkit buyers get launch pricing on the platform when it ships.",
  },
];
