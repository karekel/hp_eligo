"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/members";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });

    if (!res.ok) {
      setError("パスワードが違います");
      return;
    }

    router.replace(next);
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

        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
          placeholder="Enter password"
        />

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-black py-3 text-white tracking-widest uppercase hover:opacity-90"
        >
          Log in
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
