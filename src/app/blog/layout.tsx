import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif, Noto_Serif_JP } from "next/font/google";
import { BlogFooter, BlogHeader } from "@/components/blog/BlogParts";
import { BLOG_DRAFT, blogConfig } from "@/lib/blogData";
import { siteConfig, siteFavicons } from "@/lib/siteConfig";

// 太さは globals.css の .font-serif-jp と見出しの指定（500）に合わせる。
// 本文は端末のフォントを使う（Webフォントだと1ページで約60ファイル、1.7MBになるため）
const serifJp = Noto_Serif_JP({
  variable: "--font-serif-jp",
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// 日本語の明朝体は「Ō」「ō」の長音記号が崩れるため、見出しの欧文は欧文フォントで表示する
const serifLatin = Noto_Serif({
  variable: "--font-serif-latin",
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: false,
});

const script = Cormorant_Garamond({
  variable: "--font-script",
  weight: ["500"],
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    absolute: blogConfig.searchTitle,
    // 検索結果で題が切れないよう、記事とカテゴリーの接尾辞は短くする
    template: `%s｜${siteConfig.siteName}`,
  },
  description: blogConfig.description,
  // スマホのホーム画面のアイコンと名前。icons は親の指定を丸ごと置き換えるので、ファビコンも渡す
  icons: {
    icon: siteFavicons,
    apple: "/blog-app/apple-touch-icon.png",
  },
  manifest: "/blog-app/manifest.webmanifest",
  appleWebApp: { title: blogConfig.homeScreenName },
  // SNS 共有用の文言。親レイアウトの OGP をそのまま引き継がず、ブログ自身の説明を使う
  openGraph: {
    title: blogConfig.searchTitle,
    description: blogConfig.description,
    images: [{ url: siteConfig.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogConfig.searchTitle,
    description: blogConfig.description,
    images: [siteConfig.ogImage],
  },
  // 公開前は検索エンジンに載せない
  ...(BLOG_DRAFT ? { robots: { index: false, follow: false } } : {}),
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serifJp.variable} ${serifLatin.variable} ${script.variable} blog-root blog-bg min-h-screen`}>
      <BlogHeader />
      {children}
      <BlogFooter />
    </div>
  );
}
