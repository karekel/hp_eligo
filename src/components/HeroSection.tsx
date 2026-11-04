"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteAssets } from "@/lib/siteAssets";

export default function HeroSection() {
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBgVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="fixed inset-0 w-full h-screen overflow-hidden bg-black -z-10 pointer-events-none">
      {/* 背景 — フェードイン */}
      <div
        className="absolute inset-0 transition-opacity duration-[2000ms] ease-in"
        style={{ opacity: bgVisible ? 1 : 0 }}
      >
        <Image
          src={siteAssets.heroLavender}
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 中央配置ロゴ — 常に表示 */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <h1 className="relative w-[25vw] max-w-[400px] aspect-square">
          <Image
            src={siteAssets.aboutMark}
            alt="ELIGŌ（エリゴ）— ドテラ・エリザベスのチーム"
            fill
            priority
            className="object-contain brightness-0 invert"
          />
        </h1>
      </div>
    </section>
  );
}
