import { NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(request) {
  const token = getCookie("next-jwt");
  console.log("token" + token);

  //Page guard
  const url = request.nextUrl.origin + "/login?callbackUrl=" + encodeURIComponent(request.nextUrl.pathname);

  if(!token) {
    return NextResponse.redirect(url);
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    const result = await jose.jwtVerify(token, secret);
  } catch (error) {
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
}