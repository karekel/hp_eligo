import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { blogConfig } from "@/lib/blogData";
import { ArrowIcon, InstagramIcon } from "./BlogParts";
import { Lavender, OilBottle } from "./Botanicals";

/** 記事の内容を裏付ける公開資料 */
export type ArticleSource = {
  title: string;
  publisher: string;
  url: string;
  /** 記事のどの内容の根拠か */
  note: string;
};

/** 記事本文の登録情報 */
export type ArticleContent = {
  summary: string[];
  toc: { id: string; title: string }[];
  sources: ArticleSource[];
  Body: () => ReactNode;
};

/* ── 記事の冒頭 ── */

export function SummaryBox({ items }: { items: string[] }) {
  return (
    <div className="mt-8 rounded-2xl border border-blog-peach bg-blog-tint p-5 md:p-7">
      <p className="font-serif-jp flex items-center gap-2 text-[16px] tracking-wider text-blog-accent">
        <span className="font-script text-[20px]">Point</span>この記事でわかること
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[14px] leading-7 text-[#3a3a3a]">
            <svg viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 shrink-0 text-blog-accent" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="10" cy="10" r="8.5" strokeWidth="1.3" />
              <path d="M6.2 10.2l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TableOfContents({ items }: { items: { id: string; title: string }[] }) {
  return (
    <nav aria-label="目次" className="mt-6 rounded-2xl border border-black/5 bg-[#faf8f4] p-5 md:p-7">
      <p className="flex items-baseline gap-2">
        <span className="font-script text-[22px] leading-none text-blog-accent">Contents</span>
        <span className="font-serif-jp text-[13px] tracking-widest text-[#555]">目次</span>
      </p>
      <ol className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="group flex gap-3 text-[14px] leading-7 text-[#444] hover:text-blog-accent">
              <span className="font-script w-6 shrink-0 text-[17px] text-[#8b78c4]">{String(i + 1).padStart(2, "0")}</span>
              <span className="group-hover:underline">{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── 本文で使うブロック ── */

/** 方法・手順をまとめるカード */
export function MethodCard({ no, title, items, children }: { no: number; title: string; items?: string[]; children: ReactNode }) {
  return (
    <section className="mt-8 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_12px_rgba(70,55,30,0.06)] md:p-7">
      <p className="font-script text-[18px] leading-none text-[#8b78c4]">Method {String(no).padStart(2, "0")}</p>
      <h3 className="font-serif-jp mt-2 text-[18px] leading-8 text-[#2b2b2b] md:text-[19px]">{title}</h3>
      {items && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-[12px] text-[#888]">使うもの：</span>
          {items.map((item) => (
            <span key={item} className="rounded-full bg-blog-tint px-3 py-0.5 text-[12px] text-blog-accent">
              {item}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span className="font-script flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blog-peach text-[17px] text-blog-ink">{i + 1}</span>
          <div className="pt-1">
            <span className="block text-[15px] font-medium text-[#2b2b2b]">{step.title}</span>
            <span className="mt-1 block text-[14px] leading-7 text-[#555]">{step.text}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PointBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 flex gap-3 rounded-xl bg-[#f6f3fb] px-4 py-3.5 text-[13px] leading-7 text-[#4a4a4a]">
      <span className="font-script shrink-0 text-[17px] leading-7 text-[#8b78c4]">Tip</span>
      <div>{children}</div>
    </div>
  );
}

export function CautionBox({ title = "使うときの注意点", items }: { title?: string; items: string[] }) {
  return (
    <div className="mt-6 rounded-2xl border border-[#e2b35d]/50 bg-[#fdf7ea] p-5 md:p-6">
      <p className="flex items-center gap-2 text-[15px] font-medium text-[#9a6a12]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 3.5 2.8 19.5h18.4z" strokeLinejoin="round" />
          <path d="M12 9.5v4.5M12 16.6v.4" strokeLinecap="round" />
        </svg>
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-[13px] leading-7 text-[#5a4a2a]">
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9a441]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-6 divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 text-[14px] leading-7 text-[#2b2b2b] marker:hidden hover:bg-[#faf8f4]">
            <span className="font-script text-[20px] text-blog-accent">Q.</span>
            <span className="flex-1">{item.q}</span>
            <span className="text-blog-accent transition group-open:rotate-45" aria-hidden="true">＋</span>
          </summary>
          <div className="flex gap-3 bg-[#faf8f4] px-5 py-4 text-[13px] leading-7 text-[#555]">
            <span className="font-script text-[20px] leading-7 text-[#8b78c4]">A.</span>
            <span>{item.a}</span>
          </div>
        </details>
      ))}
    </div>
  );
}

/** 記事末の「次の一歩」案内 */
export function NextStepBox() {
  return (
    <div className="blog-gradient mt-10 overflow-hidden rounded-2xl text-blog-ink">
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:p-8">
        <div className="flex-1">
          <p className="font-script text-[20px] text-blog-ink/85">Next step</p>
          <p className="font-serif-jp mt-1 text-[18px] leading-8">もっと詳しく知りたい方へ</p>
          <p className="mt-2 text-[13px] leading-7 text-blog-ink/85">ELIGŌでは、オイルの使い方を一緒に学べる毎月のZoom勉強会やクラフトワークショップを開いています。</p>
        </div>
        <Link href="/#how-to-join" data-track="article_next_step" data-track-group="blog" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] tracking-widest text-blog-accent transition hover:bg-blog-tint">
          参加方法を見る <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

/** 製品ラベルの区分ごとの使い方（食品添加物・化粧品・雑貨など） */
export function LabelTypes({ items }: { items: { type: string; use: string; note: string; tone: "rose" | "lavender" | "gray" }[] }) {
  const tones = {
    rose: "border-blog-peach bg-blog-tint text-blog-accent",
    lavender: "border-[#8b78c4]/30 bg-[#f6f3fb] text-[#6f5ca8]",
    gray: "border-black/10 bg-[#f6f5f2] text-[#666]",
  };
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.type} className={`rounded-2xl border p-5 ${tones[item.tone]}`}>
          <p className="font-script text-[15px] leading-none opacity-80">Label</p>
          <p className="font-serif-jp mt-2 text-[16px]">{item.type}</p>
          <p className="mt-3 text-[14px] font-medium leading-6 text-[#2b2b2b]">{item.use}</p>
          <p className="mt-1 text-[12px] leading-6 text-[#666]">{item.note}</p>
        </div>
      ))}
    </div>
  );
}

/** 番号つきのチェックポイント */
export function CheckPoints({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="mt-6 grid gap-3 md:grid-cols-2">
      {items.map((item, i) => (
        <li key={item.title} className="flex gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_12px_rgba(70,55,30,0.05)]">
          <span className="font-script flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blog-peach text-[17px] text-blog-ink">{i + 1}</span>
          <div>
            <span className="block text-[15px] font-medium leading-7 text-[#2b2b2b]">{item.title}</span>
            <span className="mt-1 block text-[13px] leading-7 text-[#555]">{item.text}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ── オイル図鑑用のブロック ── */

export function OilProfile({ name, en, color, rows }: { name: string; en: string; color: string; rows: { label: string; value: string }[] }) {
  return (
    <div className="mt-8 grid overflow-hidden rounded-2xl border border-black/5 bg-white md:grid-cols-[220px_1fr]">
      <div className="relative flex items-end justify-center gap-1 bg-[#f4f1fa] px-6 pb-6 pt-8">
        <Lavender className="h-[150px] -rotate-12" />
        <OilBottle label={en} color={color} className="h-[130px] drop-shadow-md" />
        <Lavender className="h-[130px] rotate-12" />
        <p className="font-script absolute left-5 top-4 text-[22px] text-[#8b78c4]">{en}</p>
      </div>
      <dl className="divide-y divide-black/5 px-5 py-2 md:px-7">
        <div className="py-3">
          <dt className="sr-only">名前</dt>
          <dd className="font-serif-jp text-[20px] tracking-widest text-[#2b2b2b]">{name}</dd>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[96px_1fr] gap-3 py-3 text-[13px] leading-6">
            <dt className="text-[#8a8a8a]">{row.label}</dt>
            <dd className="text-[#3a3a3a]">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function UsageCards({ items }: { items: { en: string; title: string; text: string }[] }) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_12px_rgba(70,55,30,0.05)]">
          <p className="font-script text-[18px] text-[#8b78c4]">{item.en}</p>
          <p className="font-serif-jp mt-1 text-[16px] text-[#2b2b2b]">{item.title}</p>
          <p className="mt-2 text-[13px] leading-7 text-[#555]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function PairingList({ items }: { items: { name: string; en: string; color: string; note: string }[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.name} className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-4 py-3">
          <OilBottle label={item.en} color={item.color} className="h-[64px] shrink-0" />
          <div>
            <p className="font-serif-jp text-[15px] text-[#2b2b2b]">{item.name}</p>
            <p className="mt-0.5 text-[12px] leading-6 text-[#777]">{item.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BlendRecipe({ title, drops }: { title: string; drops: { name: string; color: string; count: number }[] }) {
  return (
    <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-[#faf8f4] p-5 sm:flex-row sm:items-center">
      <p className="font-serif-jp shrink-0 text-[15px] text-[#2b2b2b] sm:w-44">{title}</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {drops.map((d) => (
          <span key={d.name} className="flex items-center gap-2 text-[13px] text-[#555]">
            <span className="flex gap-1" aria-hidden="true">
              {Array.from({ length: d.count }, (_, i) => (
                <svg key={i} viewBox="0 0 12 16" className="h-4 w-3" style={{ color: d.color }}>
                  <path d="M6 1c2.4 3.3 4.5 5.8 4.5 8.4a4.5 4.5 0 0 1-9 0C1.5 6.8 3.6 4.3 6 1z" fill="currentColor" />
                </svg>
              ))}
            </span>
            {d.name} {d.count}滴
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── 記事の末尾 ── */

export function Sources({ items }: { items: ArticleSource[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-12 rounded-xl bg-[#faf8f4] px-5 py-5 md:px-7">
      <h2 className="font-serif-jp text-[16px] tracking-wider text-[#2b2b2b]">参考資料・出典</h2>
      <ol className="mt-3 list-decimal space-y-3 pl-5 text-[12px] leading-6 text-[#666]">
        {items.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="break-words text-blog-accent underline underline-offset-2 hover:text-blog-accent-dark">
              {source.title}
            </a>
            <span className="ml-1.5 text-[#888]">{source.publisher}</span>
            <p className="text-[#888]">{source.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Disclosure() {
  return (
    <div className="mt-12 rounded-xl border border-dashed border-black/15 px-5 py-4 text-[12px] leading-6 text-[#777]">
      <p className="font-medium text-[#555]">このブログについて</p>
      <p className="mt-1">
        当ブログは、dōTERRA（ドテラ）のウェルネスアドボケイト（会員）によるチーム「ELIGŌ」が運営しています。製品の使用方法は、お手元の製品ラベルの表示に従ってください。
      </p>
    </div>
  );
}

export function AuthorBox() {
  const { author } = blogConfig;
  return (
    <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#faf8f4] p-5 sm:flex-row md:p-7">
      <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white shadow">
        <Image src={author.image} alt={author.name} fill sizes="96px" className="object-cover" />
      </span>
      <div>
        <p className="font-script text-[18px] leading-none text-blog-accent">Writer</p>
        <p className="font-serif-jp mt-2 text-[18px] text-[#2b2b2b]">{author.name}</p>
        <p className="mt-1 text-[12px] text-[#888]">エッセンシャルオイルを学び、暮らしに活かす仲間のチーム</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/" data-track="author_official" data-track-group="blog" className="inline-flex items-center gap-1.5 rounded-full border border-blog-accent px-4 py-1.5 text-[12px] tracking-wider text-blog-accent transition hover:border-blog-peach hover:bg-blog-peach hover:text-blog-ink">
            公式サイトを見る <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
          <a
            href={blogConfig.elizabethInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            data-track="author_instagram"
            data-track-group="blog"
            className="inline-flex items-center gap-1.5 rounded-full bg-blog-peach px-4 py-1.5 text-[12px] tracking-wider text-blog-ink transition hover:bg-blog-tint-dark"
          >
            <InstagramIcon className="h-3.5 w-3.5" /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export function ComingSoon({ excerpt }: { excerpt: string }) {
  return (
    <div className="mt-8 rounded-2xl bg-[#faf8f4] p-6 text-center">
      <p className="text-[14px] leading-8 text-[#555]">{excerpt}</p>
      <p className="font-script mt-4 text-[22px] text-[#8b78c4]">Coming soon</p>
      <p className="text-[12px] text-[#999]">この記事は準備中です（デザイン確認用のサンプル）</p>
    </div>
  );
}
