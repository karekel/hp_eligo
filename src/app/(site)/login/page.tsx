"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const sp = useSearchParams();
  const next = sp.get("next") || "/members";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });

      if (!res.ok) {
        setError("パスワードが違います");
        setLoading(false);
        return;
      }

      // Edge Runtime により Set-Cookie はレスポンス受信時に確実に処理済み。
      // window.location で Next.js ルーターキャッシュを完全バイパスして遷移。
      window.location.replace(next);
    } catch {
      setError("エラーが発生しました。再度お試しください。");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f0eff0] px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-[520px] rounded-2xl border border-black/10 bg-white/60 p-8"
      >
        <h1 className="font-heading text-3xl tracking-[0.1em] uppercase">
          Members Login
        </h1>

        <label className="mt-6 block text-sm tracking-widest uppercase text-black/70">
          Password
        </label>

        {/* パスワード入力 + 表示切替ボタン */}
        <div className="relative mt-2">
          <input
            type={showPw ? "text" : "password"}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black/70 transition-colors select-none"
            aria-label={showPw ? "パスワードを隠す" : "パスワードを表示"}
          >
            {showPw ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            )}
          </button>
        </div>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading || pw.length === 0}
          className="mt-6 w-full rounded-xl py-3 text-white tracking-widest uppercase transition-all duration-150
            bg-black hover:opacity-90
            disabled:opacity-40 disabled:cursor-not-allowed
            active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Logging in...
            </>
          ) : (
            "Log in"
          )}
        </button>
      </form>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
