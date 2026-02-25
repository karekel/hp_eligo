import Image from "next/image";
import { siteCopy } from "@/lib/siteCopy";
import { siteAssets } from "@/lib/siteAssets";
import FadeIn from "./FadeIn";
import LogoMark from "./LogoMark";

export default function AboutSection() {
  const { philosophy } = siteCopy;

  return (
    <section id="philosophy" className="relative overflow-hidden pt-8 md:pt-14 pb-16">
      {/* 背景: 背景/2.png (統一背景モード時は非表示) */}
      {!siteAssets.useUnifiedBackground && (
        <Image
          src={siteAssets.bg.about}
          alt=""
          fill
          className="object-cover object-center"
        />
      )}

      <div className="relative z-10 mx-auto grid max-w-[2500px] items-start gap-12 px-12 md:grid-cols-[3.5fr_1.5fr]">
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

        {/* Right: What is ELIGŌ image */}
        <FadeIn delay={0.15} className="flex justify-center flex-1 w-full">
          <div className="relative w-full max-w-[900px] aspect-square md:aspect-[4/3]">
            <Image
              src="/assets/v1/what is eligo_full.png"
              alt="What is ELIGŌ"
              fill
              className="object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
