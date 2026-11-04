"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export type SearchItem = {
  slug: string;
  title: string;
  /** 説明文、カテゴリー名、要約、見出しをつないだもの */
  text: string;
  publishedAt: string;
};

/* 全角半角、大文字小文字、ひらがなとカタカナの違いをそろえる */
function normalize(s: string) {
  return s
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
}

export function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}

/** 検索ページの本体。カードはサーバーで描いたものを受け取り、当てはまる記事だけ並べる */
export function BlogSearchResults({ items, cards }: { items: SearchItem[]; cards: Record<string, ReactNode> }) {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  // 記事の本文（build のときに作る public/blog-search-index.json）。読めなければ題と説明文だけで探す
  const [bodies, setBodies] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/blog-search-index.json")
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, string>) => setBodies(Object.fromEntries(Object.entries(data).map(([slug, body]) => [slug, normalize(body)]))))
      .catch(() => {});
  }, []);

  const normalized = useMemo(() => items.map((item) => ({ item, title: normalize(item.title), text: normalize(item.text) })), [items]);
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const key = words.join(" ");

  const results = useMemo(() => {
    const ws = key ? key.split(" ") : [];
    if (ws.length === 0) return [];
    return normalized
      .map(({ item, title, text }) => {
        const body = bodies[item.slug] ?? "";
        // スペースで区切った言葉がすべて含まれる記事だけ。題、説明文や見出し、本文の順に上に出す
        if (!ws.every((w) => title.includes(w) || text.includes(w) || body.includes(w))) return null;
        const score = ws.reduce((sum, w) => sum + (title.includes(w) ? 4 : text.includes(w) ? 2 : 0) + (body.split(w).length - 1 > 2 ? 1 : 0), 0);
        return { item, score };
      })
      .filter((r) => r !== null)
      .sort((a, b) => b.score - a.score || b.item.publishedAt.localeCompare(a.item.publishedAt))
      .map((r) => r.item);
  }, [normalized, bodies, key]);

  const update = (value: string) => {
    setQuery(value);
    const q = value.trim();
    router.replace(q ? `/blog/search?q=${encodeURIComponent(q)}` : "/blog/search", { scroll: false });
  };

  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="mx-auto max-w-xl">
        <label className="flex items-center gap-3 rounded-full border border-blog-accent/30 bg-white px-5 py-3 shadow-[0_2px_12px_rgba(70,55,30,0.07)] focus-within:border-blog-accent">
          <SearchIcon className="h-5 w-5 shrink-0 text-blog-accent" />
          <input
            type="search"
            value={query}
            onChange={(e) => update(e.target.value)}
            placeholder="例：ラベンダー、お風呂、掃除"
            aria-label="記事を検索"
            className="w-full bg-transparent text-[16px] text-[#2b2b2b] outline-none placeholder:text-[#aaa]"
          />
        </label>
      </form>

      <div className="mt-10">
        {words.length === 0 ? (
          <p className="text-center text-[14px] leading-7 text-[#666]">調べたい言葉を入れてください。スペースで区切ると、すべての言葉を含む記事を探します。</p>
        ) : results.length === 0 ? (
          <p className="text-center text-[14px] leading-7 text-[#666]">
            「{query.trim()}」に当てはまる記事は見つかりませんでした。
            <br />
            ほかの言葉や、短い言葉で探してみてください。
          </p>
        ) : (
          <>
            <p className="text-[13px] text-[#666]">
              「{query.trim()}」の検索結果 {results.length}件
            </p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {results.map((item) => (
                <div key={item.slug}>{cards[item.slug]}</div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
