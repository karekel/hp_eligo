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
        {/* ELIGŌ ロゴ（さらに小さくして中央配置） */}
        <div className="relative w-[40vw] max-w-[700px] h-[16vh] max-h-[180px]">
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