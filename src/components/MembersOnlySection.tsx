import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/lib/siteCopy";
import { siteAssets } from "@/lib/siteAssets";
import FadeIn from "./FadeIn";

export default function MembersOnlySection() {
  const { membersOnly } = siteCopy;

  return (
    <section
      id="members-only"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* 背景: 背景/6.png (統一背景モード時は非表示) */}
      {!siteAssets.useUnifiedBackground && (
        <Image
          src={siteAssets.bg.members}
          alt=""
          fill
          className="object-cover object-center"
        />
      )}

      <div className="relative z-10 mx-auto max-w-[2500px] px-12">
        <FadeIn>
          {/* 見出し */}
          <h2 className="font-heading mb-8 md:mb-12 text-[clamp(44px,5vw,100px)] tracking-[0.02em] text-[#1a1a1a] uppercase leading-tight">
            {membersOnly.heading}
          </h2>

          {/* ログインボタン -> /members へ遷移するように変更 */}
          <div className="mb-16 flex justify-start">
            <Link
              href="/members"
              className="inline-block rounded-full border-2 border-[#d4b8d9] px-12 py-4 text-sm font-bold tracking-widest text-[#1a1a1a] uppercase transition-all hover:bg-[#d4b8d9] hover:text-white"
            >
              {membersOnly.cta}
            </Link>
          </div>

          {/* 縦並びリスト -> 横並びグリッド */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {membersOnly.cards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  {/* タイトル */}
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a]">
                    {card.title}
                  </h3>

                  {/* サムネイル（画像）: 縦に収まるよう object-contain に変更 */}
                  <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-white shadow-md">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105 px-4 py-2"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#d4b8d9]/30">
                        <span className="text-xs font-bold tracking-widest text-[#1a1a1a]/40 uppercase">
                          Coming soon
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0 pointer-events-none" />
                  </div>

                  {/* 説明文 */}
                  <p className="text-sm leading-relaxed text-[#1a1a1a]/70">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
