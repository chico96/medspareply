import { describe, expect, it } from "vitest";
import {
  BUYER_PUBLIC_SAMPLE_PATH,
  evaluateBuyerAccess,
  isProtectedBuyerPath,
  resolveBuyerAccessToken,
} from "./buyerAccess";

describe("isProtectedBuyerPath", () => {
  it("protects the buyer toolkit page and its children", () => {
    expect(isProtectedBuyerPath("/toolkit")).toBe(true);
    expect(isProtectedBuyerPath("/toolkit/")).toBe(true);
    expect(isProtectedBuyerPath("/toolkit/anything")).toBe(true);
  });

  it("protects the success page and its children", () => {
    expect(isProtectedBuyerPath("/success")).toBe(true);
    expect(isProtectedBuyerPath("/success/welcome")).toBe(true);
  });

  it("protects every file in the buyer downloads folder", () => {
    expect(
      isProtectedBuyerPath("/downloads/spareply-toolkit/SpaReply-toolkit-complete.pdf"),
    ).toBe(true);
    expect(
      isProtectedBuyerPath("/downloads/spareply-toolkit/review-reply-template-bank.md"),
    ).toBe(true);
  });

  it("leaves the public sample PDF accessible to everyone", () => {
    expect(isProtectedBuyerPath(BUYER_PUBLIC_SAMPLE_PATH)).toBe(false);
  });

  it("does not protect the toolkit preview marketing page", () => {
    expect(isProtectedBuyerPath("/toolkit-preview")).toBe(false);
    expect(isProtectedBuyerPath("/toolkit-preview/anything")).toBe(false);
  });

  it("does not protect unrelated marketing routes", () => {
    expect(isProtectedBuyerPath("/")).toBe(false);
    expect(isProtectedBuyerPath("/refund-policy")).toBe(false);
    expect(isProtectedBuyerPath("/med-spa-review-reply-generator")).toBe(false);
  });
});

describe("resolveBuyerAccessToken", () => {
  it("uses the configured server-only token when present", () => {
    const token = resolveBuyerAccessToken({
      BUYER_ACCESS_TOKEN: "real-buyer-token",
      NODE_ENV: "production",
    });
    expect(token).toBe("real-buyer-token");
  });

  it("trims whitespace around the configured token", () => {
    const token = resolveBuyerAccessToken({
      BUYER_ACCESS_TOKEN: "  padded-token  ",
      NODE_ENV: "production",
    });
    expect(token).toBe("padded-token");
  });

  it("falls back to a deterministic dev token outside production", () => {
    const token = resolveBuyerAccessToken({
      BUYER_ACCESS_TOKEN: undefined,
      NODE_ENV: "development",
    });
    expect(typeof token).toBe("string");
    expect(token).not.toBe("");
  });

  it("fails closed in production when the token is missing", () => {
    expect(
      resolveBuyerAccessToken({ BUYER_ACCESS_TOKEN: undefined, NODE_ENV: "production" }),
    ).toBeNull();
    expect(
      resolveBuyerAccessToken({ BUYER_ACCESS_TOKEN: "   ", NODE_ENV: "production" }),
    ).toBeNull();
  });
});

describe("evaluateBuyerAccess", () => {
  const token = "buyer-token-123";

  it("denies when no token is configured even with a matching cookie", () => {
    expect(
      evaluateBuyerAccess({ accessQuery: null, cookieValue: "buyer-token-123", token: null }),
    ).toEqual({ kind: "deny" });
  });

  it("grants and asks the proxy to set a cookie when the access query matches", () => {
    expect(
      evaluateBuyerAccess({ accessQuery: token, cookieValue: null, token }),
    ).toEqual({ kind: "grant", token });
  });

  it("allows when the cookie value matches the configured token", () => {
    expect(
      evaluateBuyerAccess({ accessQuery: null, cookieValue: token, token }),
    ).toEqual({ kind: "allow" });
  });

  it("denies when the access query is wrong and no cookie is present", () => {
    expect(
      evaluateBuyerAccess({ accessQuery: "guess", cookieValue: null, token }),
    ).toEqual({ kind: "deny" });
  });

  it("denies when the cookie is stale or wrong", () => {
    expect(
      evaluateBuyerAccess({ accessQuery: null, cookieValue: "old-token", token }),
    ).toEqual({ kind: "deny" });
  });

  it("prefers granting (and refreshing the cookie) when both query and cookie match", () => {
    expect(
      evaluateBuyerAccess({ accessQuery: token, cookieValue: token, token }),
    ).toEqual({ kind: "grant", token });
  });
});
