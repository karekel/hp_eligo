import Image from "next/image";
import { siteCopy } from "@/lib/siteCopy";
import { siteAssets } from "@/lib/siteAssets";
import PlaceholderImage from "./PlaceholderImage";
import FadeIn from "./FadeIn";

export default function IntroVideosSection() {
  const { introVideos } = siteCopy;

  return (
    <section id="intro" className="relative pt-8 md:pt-14 pb-20 md:pb-28 overflow-hidden">
      {/* 背景: 背景/5.png (統一背景モード時は非表示) */}
      {!siteAssets.useUnifiedBackground && (
        <Image
          src={siteAssets.bg.intro}
          alt=""
          fill
          className="object-cover object-center"
        />
      )}

      <div className="relative z-10 mx-auto max-w-[2500px] px-6 md:px-12">
        <FadeIn>
          <h2 className="font-heading mb-8 md:mb-12 text-about-title tracking-[0.02em] text-[#1a1a1a] uppercase leading-tight">
            {introVideos.heading}
          </h2>
        </FadeIn>

        <div className={`flex flex-wrap gap-8 ${introVideos.items.length === 1 ? 'justify-center' : 'justify-start'}`}>
          {introVideos.items.map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className={`w-full ${introVideos.items.length === 1
                ? 'max-w-[1200px]'
                : 'md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] max-w-[600px]'
                }`}
            >
              <div className="flex flex-col gap-4">
                
                {/* 動画サムネイル / リンク */}
                <a
                  href={item.videoId ? `https://www.youtube.com/watch?v=${item.videoId}` : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200 shadow-md block"
                >
                  <PlaceholderImage
                    src={item.videoId ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` : item.image}
                    alt={item.title || item.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholderLabel="Video"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                      <svg className="ml-0.5 h-6 w-6 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
               {/* タイトル */}
                {item.title && (
                  <h3 className="text-xl font-bold tracking-tight text-[#1a1a1a]">
                    {item.title}
                  </h3>
                )}


                {/* 説明文 */}
                <p className="text-sm leading-relaxed text-[#1a1a1a] whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
