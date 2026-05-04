export const BUYER_COOKIE_NAME = "sr_buyer";
export const BUYER_ACCESS_QUERY_PARAM = "access";
export const BUYER_PUBLIC_SAMPLE_PATH =
  "/downloads/spareply-toolkit/SpaReply-sample-preview.pdf";
export const BUYER_PREVIEW_REDIRECT_PATH = "/toolkit-preview";
export const BUYER_PREVIEW_REDIRECT_QUERY = "access=required";

// Refreshed on every successful access; mirrors typical buyer revisit windows.
export const BUYER_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 90;

const DEV_FALLBACK_TOKEN = "spareply-dev-buyer-access";

export type BuyerAccessDecision =
  | { kind: "allow" }
  | { kind: "grant"; token: string }
  | { kind: "deny" };

export function isProtectedBuyerPath(pathname: string): boolean {
  if (pathname === BUYER_PUBLIC_SAMPLE_PATH) return false;
  if (pathname === "/toolkit" || pathname.startsWith("/toolkit/")) return true;
  if (pathname === "/success" || pathname.startsWith("/success/")) return true;
  if (pathname.startsWith("/downloads/spareply-toolkit/")) return true;
  if (pathname === "/downloads/spareply-toolkit") return true;
  return false;
}

export function resolveBuyerAccessToken(
  env: { BUYER_ACCESS_TOKEN?: string; NODE_ENV?: string } = process.env,
): string | null {
  const raw = env.BUYER_ACCESS_TOKEN;
  const token = typeof raw === "string" ? raw.trim() : "";
  if (token.length > 0) return token;
  if (env.NODE_ENV !== "production") return DEV_FALLBACK_TOKEN;
  return null;
}

export function evaluateBuyerAccess(opts: {
  accessQuery: string | null;
  cookieValue: string | null;
  token: string | null;
}): BuyerAccessDecision {
  if (!opts.token) return { kind: "deny" };
  if (opts.accessQuery && timingSafeEqual(opts.accessQuery, opts.token)) {
    return { kind: "grant", token: opts.token };
  }
  if (opts.cookieValue && timingSafeEqual(opts.cookieValue, opts.token)) {
    return { kind: "allow" };
  }
  return { kind: "deny" };
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}
