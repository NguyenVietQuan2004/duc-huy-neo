import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  // ❌ bỏ qua domain chính
  if (hostname?.includes("dse-vn.com")) {
    return NextResponse.next();
  }
  console.log(hostname);
  // ❌ bỏ qua vercel domain
  if (hostname?.includes("vercel.app")) {
    return NextResponse.redirect(new URL("https://dse-vn.com", req.url));
  }

  return NextResponse.next();
}
