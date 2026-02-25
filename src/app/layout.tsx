import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_JP } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const cyGroteskWide = localFont({
  src: "../../public/fonts/CyGrotesk-WideBold.otf",
  variable: "--font-cy-grotesk",
  display: "swap",
  weight: "400",
});

const cyGroteskThin = localFont({
  src: "../../public/fonts/CyGrotesk-WideThin.otf",
  variable: "--font-cy-grotesk-thin",
  display: "swap",
  weight: "100",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
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
      <body className={`${cyGroteskWide.variable} ${cyGroteskThin.variable} ${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
