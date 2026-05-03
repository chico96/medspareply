export const services = [
  "Hydrafacial",
  "Injectables",
  "Laser hair removal",
  "Chemical peel",
  "Body contouring",
  "Membership visit",
] as const;

export const tones = ["warm", "polished", "clinical", "upbeat"] as const;

export type ReplyTone = (typeof tones)[number];

export type ReviewReplyInput = {
  reviewText: string;
  rating: number;
  serviceType: string;
  tone: ReplyTone;
};

export type ReviewReplyOutput = {
  publicReply: string;
  privateFollowUp: string;
  safetyNotes: string[];
};

const toneOpeners: Record<ReplyTone, string> = {
  warm: "Thank you for sharing this with us",
  polished: "Thank you for taking the time to share your experience",
  clinical: "Thank you for your feedback",
  upbeat: "Thank you for the kind words",
};

const positiveClosersFive: Record<ReplyTone, string> = {
  warm: "we look forward to welcoming you back soon.",
  polished: "we look forward to your next visit.",
  clinical: "we look forward to supporting your ongoing care.",
  upbeat: "we cannot wait to see you again.",
};

const positiveClosersFour: Record<ReplyTone, string> = {
  warm: "we will keep refining each visit so it feels even better next time.",
  polished: "your notes will help us refine the next visit even further.",
  clinical: "your notes will be reviewed as part of our ongoing quality work.",
  upbeat: "we cannot wait to make your next visit even better.",
};

const neutralClosers: Record<ReplyTone, string> = {
  warm: "We appreciate the opportunity to keep improving and hope to welcome you back.",
  polished: "Your feedback helps our team refine each part of the guest experience.",
  clinical: "Your comments will be reviewed by our team as part of our quality process.",
  upbeat: "Thanks again for helping us make every visit smoother and more thoughtful.",
};

const negativeOpeners: Record<ReplyTone, string> = {
  warm: "We are sorry your visit did not feel as seamless as it should have",
  polished: "We are sorry to hear that your experience did not meet expectations",
  clinical: "We are sorry that aspects of your visit did not meet our standards",
  upbeat: "We are sorry this visit missed the mark",
};

function cleanText(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function clampRating(rating: number): number {
  if (!Number.isFinite(rating)) return 5;
  return Math.min(5, Math.max(1, Math.round(rating)));
}

function extractTeamMember(review: string): string | null {
  const match = review.match(/\b(?:with|from|by)\s+([A-Z][a-z]{2,})(?:\b|[.,!])/);
  return match?.[1] ?? null;
}

function containsClinicalService(serviceType: string, reviewText: string): boolean {
  return /inject|botox|filler|laser|peel|swelling|reaction|medical|nurse|provider/i.test(
    `${serviceType} ${reviewText}`,
  );
}

export function generateReviewReply(input: ReviewReplyInput): ReviewReplyOutput {
  const review = cleanText(input.reviewText);
  const serviceType = cleanText(input.serviceType) || "your visit";
  const rating = clampRating(input.rating);
  const tone = input.tone in toneOpeners ? input.tone : "polished";
  const teamMember = review ? extractTeamMember(review) : null;
  const safetyNotes = [
    "Do not mention protected health details or treatment outcomes beyond what the guest shared publicly.",
    "Keep claims modest; avoid guaranteeing medical or cosmetic results.",
  ];

  if (containsClinicalService(serviceType, review)) {
    safetyNotes.push(
      "For injectables or medical-aesthetic concerns, route clinical questions to a licensed provider.",
    );
  }

  if (rating <= 2) {
    return {
      publicReply: `${negativeOpeners[tone]} during your ${serviceType} visit. Please contact our practice manager directly so we can listen, look into the details, and follow up with care.`,
      privateFollowUp: `Call the guest within one business day, document the timeline, and have a manager or licensed provider review any clinical concerns before responding further.`,
      safetyNotes,
    };
  }

  if (rating === 3) {
    return {
      publicReply: `${toneOpeners[tone]} about your ${serviceType} visit. We will share your notes with the team. ${neutralClosers[tone]}`,
      privateFollowUp: `Ask the front desk to send a short check-in, identify one operational improvement, and invite the guest to discuss specifics privately.`,
      safetyNotes,
    };
  }

  const teamPhrase = teamMember
    ? `${teamMember} and the team appreciated`
    : "Our team appreciated";

  if (rating === 5) {
    return {
      publicReply: `${toneOpeners[tone]} after your ${serviceType} visit. ${teamPhrase} caring for you — ${positiveClosersFive[tone]}`,
      privateFollowUp: `Flag this guest for a rebooking thank-you, ask permission before resharing their words, and invite them to mention their favorite service in future reviews.`,
      safetyNotes,
    };
  }

  return {
    publicReply: `${toneOpeners[tone]} about your ${serviceType} visit. ${teamPhrase} the chance to host you — ${positiveClosersFour[tone]}`,
    privateFollowUp: `Ask the front desk to thank the guest, note any improvement cues, and make the next ${serviceType} visit feel even more personal.`,
    safetyNotes,
  };
}
