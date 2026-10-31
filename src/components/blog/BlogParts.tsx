import Image from "next/image";
import Link from "next/link";
import {
  blogCategories,
  blogConfig,
  blogPosts,
  formatDate,
  getCategory,
  getRecommendedPosts,
  type BlogCategoryIcon,
  type BlogPost,
} from "@/lib/blogData";

/* ── アイコン ── */

const categoryIconPaths: Record<BlogCategoryIcon, string> = {
  leaf: "M5 19c0-8 6-14 14-14 0 8-6 14-14 14z M5 19l8-8",
  drop: "M12 3c3.5 4.5 6 7.6 6 11a6 6 0 1 1-12 0c0-3.4 2.5-6.5 6-11z M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5",
  bottle: "M10 2.5h4v3.5h-4z M9 6h6v1.5a4 4 0 0 1 3 3.9V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20v-8.6a4 4 0 0 1 3-3.9z M6 13h12 M6 17h12",
  home: "M3.5 11 12 4l8.5 7 M5.5 9.5V20h13V9.5 M10 20v-5.5h4V20",
  shield: "M12 3l7.5 3v5.5c0 4.7-3.2 8-7.5 9.5-4.3-1.5-7.5-4.8-7.5-9.5V6z M9 12l2.2 2.2L15.5 10",
};

export function CategoryIcon({ icon, className = "h-6 w-6" }: { icon: BlogCategoryIcon; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={categoryIconPaths[icon]} />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ── 見出し ── */

/** 英字の筆記体ラベル + 日本語見出し（参考デザインの「Concept」見出し） */
export function SectionTitle({ en, ja, align = "center", as: Tag = "h2" }: { en: string; ja: string; align?: "center" | "left"; as?: "h1" | "h2" }) {
  const center = align === "center";
  return (
    <div className={center ? "text-center" : ""}>
      <p className="font-script text-[28px] leading-none text-blog-accent md:text-[34px]">{en}</p>
      <div className={`mt-3 flex items-center gap-2 ${center ? "justify-center" : ""}`} aria-hidden="true">
        <span className="h-px w-8 bg-blog-accent/40" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#8b78c4]" />
        <span className="h-px w-8 bg-blog-accent/40" />
      </div>
      <Tag className="font-serif-jp mt-3 text-[19px] tracking-[0.14em] text-[#2b2b2b] md:text-[22px]">{ja}</Tag>
    </div>
  );
}

function SidebarTitle({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="flex items-baseline gap-2 border-b border-blog-accent/15 pb-3">
      <span className="font-script text-[22px] leading-none text-blog-accent">{en}</span>
      <span className="font-serif-jp text-[13px] tracking-widest text-[#555]">{ja}</span>
    </div>
  );
}

/* ── ヘッダー・フッター ── */

const headerNav = [
  { en: "Articles", ja: "記事一覧", href: "/blog#articles" },
  { en: "Category", ja: "カテゴリー", href: "/blog#category" },
  { en: "ELIGŌ", ja: "公式サイト", href: "/" },
];

export function BlogHeader() {
  return (
    <header className="relative z-30 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between pr-4 md:h-20 md:pr-6">
        <Link href="/blog" className="flex h-full items-center gap-3">
          <span className="blog-gradient flex h-full w-16 items-center justify-center md:w-20">
            <Image src="/assets/ロゴ/mark_center.png" alt="" width={44} height={44} className="h-9 w-9 opacity-75 brightness-0 md:h-11 md:w-11" />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-[19px] tracking-[0.14em] text-[#1a1a1a] md:text-[22px]">ELIGŌ</span>
            <span className="block font-script text-[15px] text-blog-accent md:text-[17px]">Oil Journal</span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 md:gap-9" aria-label="ブログメニュー">
          {headerNav.map((item) => (
            <Link key={item.href} href={item.href} className="hidden text-center transition-opacity hover:opacity-70 md:block">
              <span className="block font-script text-[17px] leading-none text-blog-accent">{item.en}</span>
              <span className="mt-1 block text-[10px] tracking-[0.2em] text-[#888]">{item.ja}</span>
            </Link>
          ))}
          <a
            href={blogConfig.elizabethInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="エリザベスのInstagram"
            data-track="header_instagram"
            data-track-group="blog"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blog-peach text-blog-ink transition-opacity hover:opacity-80"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="blog-gradient relative z-10 text-blog-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image src="/assets/ロゴ/eligo_logo.png" alt="ELIGŌ" width={150} height={40} className="h-auto w-[130px]" />
          <p className="mt-2 font-script text-[20px]">Oil Journal</p>
          <p className="mt-4 max-w-sm text-[12px] leading-7 text-blog-ink/85">{blogConfig.description}</p>
        </div>
        <div>
          <p className="font-script text-[20px]">Category</p>
          <ul className="mt-3 space-y-2 text-[13px] text-blog-ink/85">
            {blogCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/blog/category/${c.slug}`} className="hover:text-blog-ink hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-script text-[20px]">Links</p>
          <ul className="mt-3 space-y-2 text-[13px] text-blog-ink/85">
            <li>
              <Link href="/" className="hover:text-blog-ink hover:underline">ELIGŌ 公式サイト</Link>
            </li>
            <li>
              <Link href="/#how-to-join" className="hover:text-blog-ink hover:underline">ELIGŌへの参加方法</Link>
            </li>
            <li>
              <a href={blogConfig.elizabethInstagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-blog-ink hover:underline">
                エリザベスのInstagram
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blog-ink hover:underline">プライバシーポリシー</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blog-ink/15">
        <div className="mx-auto max-w-6xl px-6 py-6 text-[11px] leading-6 text-blog-ink/85">
          <p>当ブログは、dōTERRA（ドテラ）のウェルネスアドボケイト（会員）によるチーム「ELIGŌ」が運営しています。</p>
          <p className="mt-2">© ELIGŌ</p>
        </div>
      </div>
    </footer>
  );
}

/* ── 記事カード ── */

function CategoryChip({ slug, className = "" }: { slug: string; className?: string }) {
  const category = getCategory(slug);
  if (!category) return null;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] tracking-wider text-blog-accent shadow-sm ${className}`}>
      <CategoryIcon icon={category.icon} className="h-3.5 w-3.5" />
      {category.name}
    </span>
  );
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_14px_rgba(70,55,30,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(70,55,30,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={post.thumbnail} alt="" fill sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <CategoryChip slug={post.category} className="absolute left-3 top-3" />
      </div>
      <div className="p-4 md:p-5">
        <p className="text-[11px] tracking-[0.15em] text-[#999]">{formatDate(post.publishedAt)}</p>
        <h3 className="font-serif-jp mt-1.5 line-clamp-2 text-[15px] leading-7 text-[#2b2b2b] group-hover:text-blog-accent">{post.title}</h3>
      </div>
    </Link>
  );
}

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-2xl bg-white shadow-[0_2px_14px_rgba(70,55,30,0.08)] transition duration-300 hover:shadow-[0_10px_28px_rgba(70,55,30,0.14)] md:grid-cols-[1.15fr_1fr]"
    >
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[300px]">
        <Image src={post.thumbnail} alt="" fill priority sizes="(min-width: 1024px) 460px, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-0 top-5 bg-[#8b78c4] px-4 py-1.5 font-script text-[16px] text-white">Pick up</span>
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8">
        <div className="flex items-center gap-3">
          <CategoryChip slug={post.category} className="!bg-blog-tint shadow-none" />
          <span className="text-[11px] tracking-[0.15em] text-[#999]">{formatDate(post.publishedAt)}</span>
        </div>
        <h3 className="font-serif-jp mt-4 text-[19px] leading-[1.75] text-[#2b2b2b] group-hover:text-blog-accent md:text-[21px]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-[13px] leading-7 text-[#666]">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 self-start border-b border-blog-accent pb-1 text-[13px] tracking-widest text-blog-accent">
          記事を読む <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

/* ── カテゴリー ── */

export function CategoryCards({ current }: { current?: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
      {blogCategories.map((c) => {
        const active = c.slug === current;
        return (
          <Link
            key={c.slug}
            href={`/blog/category/${c.slug}`}
            className={`group flex flex-col items-center rounded-2xl px-3 py-6 text-center transition duration-300 hover:-translate-y-1 ${
              active ? "blog-gradient text-blog-ink shadow-md" : "bg-white/90 shadow-[0_2px_12px_rgba(70,55,30,0.07)] hover:shadow-[0_8px_22px_rgba(70,55,30,0.12)]"
            }`}
          >
            <span className={`flex h-14 w-14 items-center justify-center rounded-full ${active ? "bg-white/50" : "bg-blog-tint text-blog-accent"}`}>
              <CategoryIcon icon={c.icon} className="h-7 w-7" />
            </span>
            <span className={`mt-3 font-script text-[16px] leading-none ${active ? "text-blog-ink/85" : "text-[#8b78c4]"}`}>{c.en}</span>
            <span className="font-serif-jp mt-1.5 text-[14px] tracking-wider">{c.name}</span>
            <span className={`mt-2 hidden text-[11px] leading-5 md:block ${active ? "text-blog-ink/85" : "text-[#888]"}`}>{c.description}</span>
          </Link>
        );
      })}
    </div>
  );
}

function CategoryList() {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-[0_2px_12px_rgba(70,55,30,0.06)]">
      <SidebarTitle en="Category" ja="カテゴリー" />
      <ul className="mt-2 divide-y divide-black/5">
        {blogCategories.map((c) => (
          <li key={c.slug}>
            <Link href={`/blog/category/${c.slug}`} className="flex items-center gap-3 py-3 text-[13px] text-[#444] transition-colors hover:text-blog-accent">
              <CategoryIcon icon={c.icon} className="h-4 w-4 text-blog-accent" />
              <span className="flex-1">{c.name}</span>
              <span className="text-[11px] text-[#aaa]">{blogPosts.filter((p) => p.category === c.slug).length}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── おすすめ記事 ── */

export function RecommendedPosts() {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-[0_2px_12px_rgba(70,55,30,0.06)]">
      <SidebarTitle en="Recommended" ja="おすすめ記事" />
      <ul className="mt-4 space-y-4">
        {getRecommendedPosts().map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group flex items-start gap-3">
              <span className="relative block h-[68px] w-[68px] shrink-0 overflow-hidden rounded-xl">
                <Image src={post.thumbnail} alt="" fill sizes="68px" className="object-cover transition duration-500 group-hover:scale-110" />
              </span>
              <span className="line-clamp-3 text-[13px] leading-6 text-[#444] group-hover:text-blog-accent">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── 公式サイト・Instagram への導線 ── */

function EligoBanner({ wide = false }: { wide?: boolean }) {
  return (
    <Link href="/" data-track="banner_official" data-track-group="blog" className={`group relative block overflow-hidden rounded-2xl shadow-[0_2px_14px_rgba(70,55,30,0.1)] ${wide ? "h-[200px] md:h-[220px]" : "h-[170px]"}`}>
      <Image src="/assets/背景/top backg.png" alt="" fill sizes={wide ? "(min-width: 768px) 560px, 100vw" : "300px"} className="object-cover object-[65%_50%] transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-blog-peach/95 via-blog-pink/90 to-blog-mist/40" />
      <Image src="/assets/ロゴ/mark_center.png" alt="" width={160} height={160} className="absolute -right-6 -top-6 h-40 w-40 opacity-10 brightness-0" />
      <div className="relative flex h-full flex-col justify-end p-5 text-blog-ink md:p-6">
        <p className="font-script text-[18px] leading-none">Official Site</p>
        <p className="mt-2 flex items-center gap-2">
          <Image src="/assets/ロゴ/eligo_logo.png" alt="ELIGŌ" width={120} height={32} className="h-auto w-[92px] md:w-[104px]" />
          <span className="font-serif-jp text-[16px] tracking-[0.12em] md:text-[18px]">公式サイト</span>
        </p>
        <p className="mt-1 text-[11px] tracking-wider">チームのこと・リーダー紹介・参加方法</p>
        <span className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-blog-accent transition group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

function InstagramBanner({ wide = false }: { wide?: boolean }) {
  return (
    <a
      href={blogConfig.elizabethInstagram.url}
      target="_blank"
      rel="noopener noreferrer"
      data-track="banner_instagram"
      data-track-group="blog"
      className={`group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_2px_14px_rgba(70,55,30,0.1)] transition hover:shadow-[0_8px_24px_rgba(70,55,30,0.14)] ${wide ? "h-[200px] md:h-[220px] md:gap-6 md:p-8" : ""}`}
    >
      <span className={`shrink-0 rounded-full bg-[conic-gradient(from_200deg,#f6c453,#e8547b,#8a5ad6,#f6c453)] p-[3px] ${wide ? "h-24 w-24 md:h-28 md:w-28" : "h-[72px] w-[72px]"}`}>
        <span className="relative block h-full w-full overflow-hidden rounded-full border-2 border-white">
          <Image src="/assets/Leaders/s.png" alt="" fill sizes="112px" className="object-cover object-[50%_18%]" />
        </span>
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 text-[11px] tracking-wider text-[#999]">
          <InstagramIcon className="h-3.5 w-3.5" /> Instagram
        </span>
        <span className="font-serif-jp mt-1 block text-[15px] leading-6 text-[#2b2b2b] md:text-[17px]">エリザベスのInstagram</span>
        <span className="block truncate text-[12px] text-[#8b78c4]">{blogConfig.elizabethInstagram.handle}</span>
        {wide && <span className="mt-2 block text-[12px] leading-6 text-[#777]">暮らしの中のオイルのことや、ELIGŌの活動を発信しています。</span>}
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blog-peach px-4 py-1.5 text-[11px] tracking-widest text-blog-ink transition group-hover:bg-blog-tint-dark">
          フォローする <ArrowIcon className="h-3.5 w-3.5" />
        </span>
      </span>
    </a>
  );
}

export function LinkBanners({ layout = "stack" }: { layout?: "stack" | "wide" }) {
  const wide = layout === "wide";
  return (
    <div className={wide ? "grid gap-5 md:grid-cols-2 md:gap-6" : "space-y-4"}>
      <EligoBanner wide={wide} />
      <InstagramBanner wide={wide} />
    </div>
  );
}

/* ── サイドバー・パンくず ── */

export function BlogSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
      <RecommendedPosts />
      <LinkBanners />
      <CategoryList />
    </aside>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="パンくずリスト" className="text-[12px] text-[#888]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">›</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-blog-accent hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="line-clamp-1 text-[#555]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
