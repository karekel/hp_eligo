import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/lib/siteCopy";
import { leaders } from "@/lib/leadersData";
import { siteAssets } from "@/lib/siteAssets";
import PlaceholderImage from "./PlaceholderImage";
import FadeIn from "./FadeIn";

export default function LeadersSection() {
  const { leaders: copy } = siteCopy;

  return (
    <section id="leaders" className="relative overflow-hidden pt-8 md:pt-14 pb-20 md:pb-28">
      {/* 背景: 背景/3.png (統一背景モード時は非表示) */}
      {!siteAssets.useUnifiedBackground && (
        <Image
          src={siteAssets.bg.leaders}
          alt=""
          fill
          className="object-cover object-center"
        />
      )}

      <div className="relative z-10 mx-auto max-w-[2500px] px-12">
        <FadeIn>
          <h2 className="font-heading mb-6 md:mb-8 text-[clamp(44px,5vw,100px)] font-bold tracking-[0.02em] text-[#e0e0e0]">
            {copy.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            {/* 
              横スクロールコンテナ:
              - snap-x snap-mandatory: CSS Scroll Snap 有効化
              - overflow-x-auto: 横スクロール許可
              - scrollbar-hide: スクロールバー自体は非表示にする場合（必要に応じて utility 追加）
            */}
            <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
              {leaders.map((leader) => (
                <Link
                  key={leader.slug}
                  href={`/leaders/${leader.slug}`}
                  className="group relative flex-none w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(100%/6-1rem)] aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 snap-start"
                >
                  <PlaceholderImage
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholderLabel={leader.name.charAt(0)}
                  />
                  {/* お名前オーバーレイ */}
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
                    <p className="text-white text-xl font-bold tracking-wider">
                      {leader.name}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      {leader.role}
                    </p>
                  </div>
                </Link>
              ))}

              {/* 人数が増えても対応できるように、右端に少し余白を設けるためのダミー要素（オプション） */}
              <div className="flex-none w-2 md:w-8" />
            </div>

            {/* スクロールを促すヒント（任意） */}
            <div className="mt-4 flex justify-center md:hidden">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500 animate-pulse">
                <span>Swipe for more</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="ArrowRight" />
                  <path d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
