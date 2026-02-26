import Image from "next/image";
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

export default function Home() {
  return (
    <>
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
      </main>
    </>
  );
}
