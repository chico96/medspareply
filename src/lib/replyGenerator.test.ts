import { describe, expect, it } from "vitest";
import { generateReviewReply } from "./replyGenerator";

const CLINICAL_NOTE =
  "For injectables or medical-aesthetic concerns, route clinical questions to a licensed provider.";
const PHI_NOTE =
  "Do not mention protected health details or treatment outcomes beyond what the guest shared publicly.";
const CLAIMS_NOTE = "Keep claims modest; avoid guaranteeing medical or cosmetic results.";

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
    expect(first.safetyNotes).toEqual(expect.arrayContaining([PHI_NOTE, CLAIMS_NOTE]));
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

  describe("negative review handling", () => {
    it("uses an empathetic opener and routes guests to the practice manager", () => {
      const result = generateReviewReply({
        reviewText:
          "Waited 35 minutes for Botox and felt rushed when I asked questions about swelling afterward.",
        rating: 2,
        serviceType: "Injectables",
        tone: "clinical" as const,
      });

      expect(result.publicReply.toLowerCase()).toContain("sorry");
      expect(result.publicReply).toContain("Injectables");
      expect(result.publicReply).toContain("contact our practice manager");
      expect(result.privateFollowUp).toContain("Call the guest");
      expect(result.privateFollowUp).toContain("licensed provider");
      expect(result.safetyNotes).toContain(CLINICAL_NOTE);
    });

    it("never quotes the guest's review text inside a low-rating public reply", () => {
      const reviewText = "Terrible experience, results were uneven.";
      const result = generateReviewReply({
        reviewText,
        rating: 1,
        serviceType: "Body contouring",
        tone: "warm" as const,
      });

      expect(result.publicReply).not.toContain(reviewText);
      expect(result.publicReply).toContain("Body contouring");
      expect(result.publicReply).toContain("contact our practice manager");
    });

    it("still produces a usable low-rating reply when the review text is empty", () => {
      const result = generateReviewReply({
        reviewText: "",
        rating: 1,
        serviceType: "Chemical peel",
        tone: "polished" as const,
      });

      expect(result.publicReply.toLowerCase()).toContain("sorry");
      expect(result.publicReply).toContain("Chemical peel");
      expect(result.publicReply).not.toMatch(/undefined|null|\bNaN\b/);
      expect(result.privateFollowUp).toContain("document the timeline");
    });

    it("clamps out-of-range ratings into the negative-review template", () => {
      const result = generateReviewReply({
        reviewText: "Did not feel cared for during my visit.",
        rating: -3,
        serviceType: "Membership visit",
        tone: "polished" as const,
      });

      expect(result.publicReply).toContain("contact our practice manager");
      expect(result.publicReply).toContain("Membership visit");
    });
  });

  describe("clinical service safety notes", () => {
    it("adds the licensed-provider note when the service itself is clinical", () => {
      const result = generateReviewReply({
        reviewText: "The provider walked me through the plan and I loved my result.",
        rating: 5,
        serviceType: "Injectables",
        tone: "polished" as const,
      });

      expect(result.safetyNotes).toEqual(
        expect.arrayContaining([PHI_NOTE, CLAIMS_NOTE, CLINICAL_NOTE]),
      );
    });

    it("adds the licensed-provider note when the review mentions a clinical keyword", () => {
      const result = generateReviewReply({
        reviewText: "My skin had some swelling and I wanted to flag it for the team.",
        rating: 3,
        serviceType: "Hydrafacial",
        tone: "clinical" as const,
      });

      expect(result.safetyNotes).toContain(CLINICAL_NOTE);
    });

    it("flags laser, peel, filler, Botox, nurse, and provider mentions as clinical", () => {
      const triggers = [
        { service: "Laser hair removal", review: "Booked another laser session." },
        { service: "Chemical peel", review: "Loved my peel." },
        { service: "Body contouring", review: "Asked the nurse a question." },
        { service: "Body contouring", review: "The provider was excellent." },
        { service: "Membership visit", review: "Wondering if filler would help." },
        { service: "Membership visit", review: "Getting Botox next month." },
      ];

      for (const { service, review } of triggers) {
        const result = generateReviewReply({
          reviewText: review,
          rating: 5,
          serviceType: service,
          tone: "warm" as const,
        });
        expect(result.safetyNotes, `expected clinical note for "${review}" / ${service}`).toContain(
          CLINICAL_NOTE,
        );
      }
    });

    it("omits the clinical note for a non-clinical service with a non-clinical review", () => {
      const result = generateReviewReply({
        reviewText: "The space was beautiful and the front desk was kind.",
        rating: 5,
        serviceType: "Membership visit",
        tone: "warm" as const,
      });

      expect(result.safetyNotes).toEqual([PHI_NOTE, CLAIMS_NOTE]);
      expect(result.safetyNotes).not.toContain(CLINICAL_NOTE);
    });

    it("never echoes the guest's exact review text inside any positive public reply", () => {
      const reviewText =
        "My Hydrafacial with Mia made my skin look like glass and I have already booked again.";
      for (const rating of [4, 5]) {
        const result = generateReviewReply({
          reviewText,
          rating,
          serviceType: "Hydrafacial",
          tone: "warm" as const,
        });
        expect(result.publicReply, `rating ${rating}`).not.toContain(reviewText);
        expect(result.publicReply, `rating ${rating}`).not.toContain(
          "look like glass",
        );
      }
    });

    it("keeps positive public replies short, premium, and outcome-safe", () => {
      const result = generateReviewReply({
        reviewText: "Loved my Hydrafacial with Mia.",
        rating: 5,
        serviceType: "Hydrafacial",
        tone: "warm" as const,
      });
      expect(result.publicReply.length).toBeLessThan(280);
      expect(result.publicReply).not.toMatch(
        /guarantee|cure|amazing results|life[- ]changing/i,
      );
    });

    it("always includes the baseline PHI and modest-claims notes regardless of rating", () => {
      for (const rating of [1, 2, 3, 4, 5]) {
        const result = generateReviewReply({
          reviewText: "Quick visit, friendly team.",
          rating,
          serviceType: "Membership visit",
          tone: "polished" as const,
        });
        expect(result.safetyNotes, `rating ${rating}`).toEqual(
          expect.arrayContaining([PHI_NOTE, CLAIMS_NOTE]),
        );
      }
    });
  });
});
