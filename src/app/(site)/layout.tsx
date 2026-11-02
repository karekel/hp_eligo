import { Noto_Sans_JP } from "next/font/google";

// 公式サイトの日本語フォント。ブログは本文に端末のフォントを使うので、ここでだけ読み込む
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${notoSansJP.variable} contents`}>{children}</div>;
}
