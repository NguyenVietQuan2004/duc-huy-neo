import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const fullUrl = req.url;

  console.log("fullur;", fullUrl);

  // ❌ bỏ qua domain chính
  if (fullUrl.includes("dse-vn.com")) {
    return NextResponse.next();
  }

  // ❌ vercel domain -> redirect
  if (fullUrl.includes("vercel.app")) {
    return NextResponse.redirect("https://dse-vn.com");
  }

  return NextResponse.next();
}
