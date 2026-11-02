import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BrandAboutSection from "@/components/BrandAboutSection";
import LeadersSection from "@/components/LeadersSection";
import VibeFinderSection from "@/components/VibeFinderSection";
import IntroVideosSection from "@/components/IntroVideosSection";
import HowToJoinSection from "@/components/HowToJoinSection";
import MembersOnlySection from "@/components/MembersOnlySection";
import { siteAssets } from "@/lib/siteAssets";
import { siteConfig } from "@/lib/siteConfig";

/** 構造化データ（サイト名の表記ゆれと主宰者を Google に伝える） */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.siteName,
      alternateName: ["エリゴ", "ELIGO"],
      url: siteConfig.siteUrl,
    },
    {
      "@type": "Organization",
      name: siteConfig.siteName,
      alternateName: ["エリゴ", "ELIGO"],
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/apple-touch-icon.png`,
      description: siteConfig.description,
      founder: {
        "@type": "Person",
        name: "エリザベス",
        alternateName: "Elizabeth",
        url: `${siteConfig.siteUrl}/leaders/elizabeth`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="relative">
        {/* 統一背景 (useUnifiedBackground: true のとき表示) */}
        {siteAssets.useUnifiedBackground && (
          <Image
            src={siteAssets.unifiedBg}
            alt=""
            fill
            priority
            className="object-cover object-center fixed inset-0 -z-10"
          />
        )}
        <HeroSection />
<div className="h-screen pointer-events-none" />
        <AboutSection />
        <BrandAboutSection />
        <LeadersSection />
        <VibeFinderSection />
        <IntroVideosSection />
        <MembersOnlySection />
        <HowToJoinSection />
        <footer className="relative z-10 px-6 pb-8 text-center text-[11px] tracking-[0.2em] text-[#1a1a1a]/60">
          <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
          <span className="mx-3">|</span>
          <span>© ELIGŌ</span>
        </footer>
      </main>
    </>
  );
}
