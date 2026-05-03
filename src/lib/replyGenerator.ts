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

const positiveClosers: Record<ReplyTone, string> = {
  warm: "We loved caring for you and look forward to welcoming you back soon.",
  polished: "We appreciate your trust and look forward to your next visit.",
  clinical: "We appreciate your trust in our team and look forward to supporting your ongoing care.",
  upbeat: "We are thrilled you enjoyed your visit and cannot wait to see you again.",
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
  const serviceType = cleanText(input.serviceType) || "your service";
  const rating = clampRating(input.rating);
  const tone = input.tone in toneOpeners ? input.tone : "polished";
  const teamMember = review ? extractTeamMember(review) : null;
  const teamPhrase = teamMember ? ` ${teamMember} and` : "";
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
      publicReply: `${negativeOpeners[tone]}. We appreciate you bringing this to our attention after your ${serviceType} visit. Please contact our practice manager directly so we can listen, review the details, and follow up offline with care.`,
      privateFollowUp: `Call the guest within one business day, document the timeline, and have a manager or licensed provider review any clinical concerns before responding further.`,
      safetyNotes,
    };
  }

  if (rating === 3) {
    return {
      publicReply: `${toneOpeners[tone]}. We appreciate your feedback about your ${serviceType} experience and will share it with our team. ${neutralClosers[tone]}`,
      privateFollowUp: `Ask the front desk to send a short check-in, identify one operational improvement, and invite the guest to discuss specifics privately.`,
      safetyNotes,
    };
  }

  const fallbackDetail =
    rating === 4
      ? "We appreciate your thoughtful rating"
      : "We are so glad your visit felt memorable";
  const detail = review || fallbackDetail;

  return {
    publicReply: `${toneOpeners[tone]} after your ${serviceType} visit. ${teamPhrase} our whole team appreciates hearing that ${detail.charAt(0).toLowerCase()}${detail.slice(1)}. ${positiveClosers[tone]}`,
    privateFollowUp:
      rating === 5
        ? `Flag this guest for a rebooking thank-you, ask permission before resharing their words, and invite them to mention their favorite service in future reviews.`
        : `Ask the front desk to thank the guest, note any improvement cues, and make the next ${serviceType} visit feel even more personal.`,
    safetyNotes,
  };
}
