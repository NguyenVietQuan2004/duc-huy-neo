// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["vi", "en"],
//   defaultLocale: "vi",
// });

// export const config = {
//   matcher: ["/", "/(vi|en)/:path*"],
// };

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["vi", "en"],
  defaultLocale: "vi",

  // ⚠️ quan trọng: auto detect từ browser (optional)
  localeDetection: true,
});

export const config = {
  matcher: [
    // bỏ qua next internals + api + files
    "/((?!api|_next|.*\\..*).*)",
  ],
};
