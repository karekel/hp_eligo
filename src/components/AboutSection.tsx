"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { siteCopy } from "@/lib/siteCopy";
import { siteAssets } from "@/lib/siteAssets";
import FadeIn from "./FadeIn";

export default function AboutSection() {
  const { philosophy } = siteCopy;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section's top has entered the viewport
      // If rect.top is at viewportHeight, opacity is 0
      // If rect.top is at 0 (top of viewport), opacity is 1
      const fadeDistance = 1000; //px (Increased for an even more gradual fade)
      const distance = viewportHeight - rect.top;
      const opacity = Math.min(Math.max(distance / fadeDistance, 0), 1);
      setBgOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative overflow-hidden pt-[60vh] md:pt-[80vh] pb-16 z-10"
      style={{
        backgroundColor: `rgba(240, 239, 240, ${bgOpacity})`,
        maskImage: `linear-gradient(to bottom, transparent, black 1100px)`,
        WebkitMaskImage: `linear-gradient(to bottom, transparent, black 1100px)`
      }}
    >
      {/* 背景: 背景/2.png (統一背景モード時は非表示) */}
      {!siteAssets.useUnifiedBackground && (
        <div
          className="absolute inset-0 -z-10"
          style={{ opacity: bgOpacity }}
        >
          <Image
            src={siteAssets.bg.about}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      )}

      <div className="relative z-10 mx-auto grid max-w-[2500px] items-center gap-12 px-6 md:px-12 md:grid-cols-[3.5fr_1.5fr]">
        {/* Left: Copy */}
        <FadeIn>
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
