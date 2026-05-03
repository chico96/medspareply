import { describe, expect, it } from "vitest";
import { generateReviewReply } from "./replyGenerator";

describe("generateReviewReply", () => {
  it("creates deterministic, brand-safe outputs for a positive review", () => {
    const input = {
      reviewText:
        "Loved my hydrafacial with Mia. The spa was calm, my skin glowed, and I already booked again.",
      rating: 5,
      serviceType: "Hydrafacial",
      tone: "warm" as const,
    };

    const first = generateReviewReply(input);
    const second = generateReviewReply(input);

    expect(first).toEqual(second);
    expect(first.publicReply).toContain("Thank you");
    expect(first.publicReply).toContain("Hydrafacial");
    expect(first.publicReply).toContain("Mia");
    expect(first.privateFollowUp).toContain("rebooking");
    expect(first.safetyNotes).toEqual(
      expect.arrayContaining([
        "Do not mention protected health details or treatment outcomes beyond what the guest shared publicly.",
        "Keep claims modest; avoid guaranteeing medical or cosmetic results.",
      ]),
    );
  });

  it("responds empathetically to low-rated reviews and recommends offline follow-up", () => {
    const result = generateReviewReply({
      reviewText:
        "Waited 35 minutes for Botox and felt rushed when I asked questions about swelling afterward.",
      rating: 2,
      serviceType: "Injectables",
      tone: "clinical" as const,
    });

    expect(result.publicReply).toContain("sorry");
    expect(result.publicReply).toContain("Injectables");
    expect(result.publicReply).toContain("contact our practice manager");
    expect(result.privateFollowUp).toContain("Call the guest");
    expect(result.safetyNotes).toContain(
      "For injectables or medical-aesthetic concerns, route clinical questions to a licensed provider.",
    );
  });

  it("sanitizes whitespace and falls back gracefully when review text is empty", () => {
    const result = generateReviewReply({
      reviewText: "   ",
      rating: 4,
      serviceType: "Laser hair removal",
      tone: "polished" as const,
    });

    expect(result.publicReply).toContain("Laser hair removal");
    expect(result.publicReply).not.toMatch(/undefined|null/);
    expect(result.privateFollowUp).toContain("Ask the front desk");
    expect(result.safetyNotes.length).toBeGreaterThanOrEqual(2);
  });
});
