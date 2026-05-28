import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

// 1. i18n middleware
const intlMiddleware = createMiddleware({
  locales: ["vi", "en"],
  defaultLocale: "vi",
  localeDetection: true,
});

export function middleware(req: NextRequest) {
  const fullUrl = req.url;

  console.log(fullUrl);

  // ❌ redirect vercel -> domain chính
  if (fullUrl.includes("vercel.app")) {
    return NextResponse.redirect("https://dse-vn.com");
  }

  // ❌ nếu domain chính thì bỏ qua logic redirect khác
  if (fullUrl.includes("dse-vn.com")) {
    return intlMiddleware(req);
  }

  // fallback
  return intlMiddleware(req);
}

// 2. matcher gộp lại
export const config = {
  matcher: [
    // bỏ qua API + static files + next internals
    "/((?!api|_next|.*\\..*).*)",
  ],
};
