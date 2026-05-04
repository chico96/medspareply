import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  BUYER_ACCESS_QUERY_PARAM,
  BUYER_COOKIE_MAX_AGE_SECONDS,
  BUYER_COOKIE_NAME,
  BUYER_PREVIEW_REDIRECT_PATH,
  evaluateBuyerAccess,
  isProtectedBuyerPath,
  resolveBuyerAccessToken,
} from "@/lib/buyerAccess";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isProtectedBuyerPath(pathname)) {
    return NextResponse.next();
  }

  const token = resolveBuyerAccessToken();
  const accessQuery = request.nextUrl.searchParams.get(BUYER_ACCESS_QUERY_PARAM);
  const cookieValue = request.cookies.get(BUYER_COOKIE_NAME)?.value ?? null;

  const decision = evaluateBuyerAccess({
    accessQuery,
    cookieValue,
    token,
  });

  if (decision.kind === "allow") {
    return NextResponse.next();
  }

  if (decision.kind === "grant") {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete(BUYER_ACCESS_QUERY_PARAM);
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set({
      name: BUYER_COOKIE_NAME,
      value: decision.token,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: BUYER_COOKIE_MAX_AGE_SECONDS,
    });
    return response;
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = BUYER_PREVIEW_REDIRECT_PATH;
  redirectUrl.search = `?${BUYER_ACCESS_QUERY_PARAM}=required`;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    "/toolkit",
    "/toolkit/:path*",
    "/success",
    "/success/:path*",
    "/downloads/spareply-toolkit",
    "/downloads/spareply-toolkit/:path*",
  ],
};
