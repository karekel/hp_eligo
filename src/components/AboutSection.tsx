import Image from "next/image";
import { siteCopy } from "@/lib/siteCopy";
import { siteAssets } from "@/lib/siteAssets";
import FadeIn from "./FadeIn";
import LogoMark from "./LogoMark";

export default function AboutSection() {
  const { philosophy } = siteCopy;

  return (
    <section id="philosophy" className="relative overflow-hidden py-16">
      {/* 背景: 背景/2.png (統一背景モード時は非表示) */}
      {!siteAssets.useUnifiedBackground && (
        <Image
          src={siteAssets.bg.about}
          alt=""
          fill
          className="object-cover object-center"
        />
      )}

      <div className="relative z-10 mx-auto grid max-w-[2500px] items-center gap-12 px-12 md:grid-cols-[3.5fr_1.5fr]">
        {/* Left: Copy */}
        <FadeIn>

          {/*
            v1/2.png: "About ELIGŌ" は非常に大きく、薄いウェイトの表示用フォント
            左カラム幅の約80-90%を占める
          */}
          <h2 className="font-heading mb-8 text-about-title leading-[1.0] text-[#1a1a1a]">
            {philosophy.heading}
          </h2>
          <p className="max-w-[1200px] text-base leading-relaxed text-[#1a1a1a] whitespace-pre-line">
            {philosophy.description}
          </p>
        </FadeIn>

        {/* Right: マークロゴ（compass） */}
        <FadeIn delay={0.15} className="flex justify-center flex-1">
          {/*
            aspect-square: 幅=高さ の正方形コンテナ
            relative overflow-hidden は LogoMark 内部で処理
          */}
          <LogoMark
            src={siteAssets.aboutMark}
            alt="ELIGŌ mark"
            className="w-full max-w-[400px] aspect-square"
          />
        </FadeIn>
      </div>
    </section>
  );
}
