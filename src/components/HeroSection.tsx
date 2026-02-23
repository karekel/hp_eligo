import Image from "next/image";
import { siteAssets } from "@/lib/siteAssets";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteAssets.heroLavender}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center animate-hero-fade"
        />
      </div>

      {/* 中央配置 */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        {/* ELIGŌ ロゴ（大きく、完全中央） */}
        <div className="relative w-[92vw] max-w-[1600px] h-[38vh] max-h-[420px]">
          <Image
            src={siteAssets.eligoLogo}
            alt="ELIGŌ"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}