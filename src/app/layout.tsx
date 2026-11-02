import type { Metadata } from "next";
import { siteConfig, siteFavicons } from "@/lib/siteConfig";
import { analyticsConfig } from "@/lib/analytics";
import Analytics from "@/components/Analytics";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: siteConfig.title, template: "%s｜ELIGŌ（エリゴ）" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  // Search Console の所有権確認（HTML タグ方式）。GOOGLE_SITE_VERIFICATION が未設定なら出力しない
  ...(analyticsConfig.googleSiteVerification && { verification: { google: analyticsConfig.googleSiteVerification } }),
  icons: {
    icon: siteFavicons,
    apple: "/apple-touch-icon.png",
  },
  // スマホのホーム画面に置いたときの名前。ブログは app/blog/layout.tsx で上書きする
  manifest: "/manifest.webmanifest",
  appleWebApp: { title: siteConfig.homeScreenName },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
        <Analytics />
        <AnalyticsEvents />
      </body>
    </html>
  );
}
