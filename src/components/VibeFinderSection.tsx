import Image from "next/image";
import { siteCopy } from "@/lib/siteCopy";
import { siteAssets } from "@/lib/siteAssets";
import FadeIn from "./FadeIn";

export default function VibeFinderSection() {
  const { vibeFinder } = siteCopy;

  return (
    <section
      id="vibe-finder"
      className="relative pt-8 md:pt-14 pb-20 md:pb-28 overflow-hidden"
    >
      {/* 背景: 背景/4.png (統一背景モード時は非表示) */}
      {!siteAssets.useUnifiedBackground && (
        <Image
          src={siteAssets.bg.vibe}
          alt=""
          fill
          className="object-cover object-center"
        />
      )}

      <div className="relative z-10 mx-auto max-w-[2500px] px-12">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#1a1a1a] uppercase">
            {vibeFinder.label}
          </p>
          <h2 className="font-heading mb-12 md:mb-16 text-about-title tracking-[0.02em] text-[#1a1a1a] uppercase leading-tight">
            Vibe Finder
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid items-start gap-12 md:grid-cols-[1.5fr_1fr]">
            {/* Left: Copy */}
            <div className="w-full">
              <div className="mb-8 max-w-[1200px] text-left font-bold text-[#1a1a1a] md:text-xl">
                {vibeFinder.descriptionTitle}
              </div>
              <div className="max-w-[1600px] whitespace-pre-line text-base leading-relaxed text-[#1a1a1a]">
                {vibeFinder.description}
              </div>
            </div>

            {/* Right: START button refinement (LINK REMOVED) */}
            <div className="flex justify-center md:justify-center">
              <div
                className="inline-block rounded-full border-2 border-[#d4b8d9] px-25 py-10 text-3xl font-bold tracking-widest text-[#1a1a1a] uppercase"
              >
                {vibeFinder.cta}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
