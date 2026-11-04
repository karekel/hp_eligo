// メンバーページ認証用 Cookie のトークン生成・検証（Edge Runtime 対応）
// トークン形式: "<有効期限のUNIXミリ秒>.<HMAC-SHA256署名>"
// 署名の鍵は MEMBERS_PASSWORD なので、パスワードを変更すると既存トークンは全て無効になる。

export const MEMBERS_COOKIE = "members_auth";
export const MEMBERS_SESSION_SECONDS = 60 * 60 * 24; // 1日

async function sign(value: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(value));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createMembersToken(secret: string): Promise<string> {
  const exp = String(Date.now() + MEMBERS_SESSION_SECONDS * 1000);
  return `${exp}.${await sign(exp, secret)}`;
}

export async function verifyMembersToken(
  token: string | undefined,
  secret: string | undefined
): Promise<boolean> {
  if (!token || !secret) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp)) return false;
  if (Number(exp) < Date.now()) return false;
  const expected = await sign(exp, secret);
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  }
  return diff === 0;
}
