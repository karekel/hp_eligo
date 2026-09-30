export const runtime = "edge";

import { NextResponse } from "next/server";
import {
  MEMBERS_COOKIE,
  MEMBERS_SESSION_SECONDS,
  createMembersToken,
} from "@/lib/membersAuth";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (!process.env.MEMBERS_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Server not configured" },
      { status: 500 }
    );
  }

  if (password !== process.env.MEMBERS_PASSWORD) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(MEMBERS_COOKIE, await createMembersToken(process.env.MEMBERS_PASSWORD), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MEMBERS_SESSION_SECONDS,
  });
  return res;
}
