import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans, Noto_Serif, Noto_Serif_JP } from "next/font/google";
import { BlogFooter, BlogHeader } from "@/components/blog/BlogParts";
import { BLOG_DRAFT, blogConfig } from "@/lib/blogData";

const serifJp = Noto_Serif_JP({
  variable: "--font-serif-jp",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

// 日本語フォントは「Ō」「ō」の長音記号が崩れるため、欧文は欧文フォントで表示する
const sansLatin = Noto_Sans({
  variable: "--font-sans-latin",
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const serifLatin = Noto_Serif({
  variable: "--font-serif-latin",
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const script = Cormorant_Garamond({
  variable: "--font-script",
  weight: ["400", "500"],
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: `${blogConfig.name}｜${blogConfig.nameJp}`,
    template: `%s｜${blogConfig.name}`,
  },
  description: blogConfig.description,
  // 公開前は検索エンジンに載せない
  ...(BLOG_DRAFT ? { robots: { index: false, follow: false } } : {}),
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serifJp.variable} ${sansLatin.variable} ${serifLatin.variable} ${script.variable} blog-root blog-wood min-h-screen`}>
      <BlogHeader />
      {children}
      <BlogFooter />
    </div>
  );
}
