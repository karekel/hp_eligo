import Image from "next/image";
import { siteAssets } from "@/lib/siteAssets";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-black">
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
        {/* マークロゴ（中央配置） */}
        <div className="relative w-[25vw] max-w-[400px] aspect-square">
          <Image
            src={siteAssets.aboutMark}
            alt="ELIGŌ Mark"
            fill
            priority
            className="object-contain brightness-0 invert"
          />
        </div>
      </div>
    </section>
  );
}