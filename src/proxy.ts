import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MEMBERS_COOKIE, verifyMembersToken } from "@/lib/membersAuth";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/members")) {
    const ok = await verifyMembersToken(
      req.cookies.get(MEMBERS_COOKIE)?.value,
      process.env.MEMBERS_PASSWORD
    );
    if (!ok) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/members/:path*"],
};
