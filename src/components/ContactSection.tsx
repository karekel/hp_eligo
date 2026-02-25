import Image from "next/image";
import { siteCopy } from "@/lib/siteCopy";
import { siteAssets } from "@/lib/siteAssets";
import PlaceholderImage from "./PlaceholderImage";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  const { contact } = siteCopy;

  return (
    <section className="relative py-10 md:py-14 overflow-hidden">
      {/* 背景: 背景/7.png (統一背景モード時は非表示) */}
      {!siteAssets.useUnifiedBackground && (
        <Image
          src={siteAssets.bg.contact}
          alt=""
          fill
          className="object-cover object-center"
        />
      )}

      <div className="relative z-10 mx-auto max-w-[2500px] px-12">
        <FadeIn>
          <h2 className="font-heading mb-8 md:mb-10 text-[clamp(44px,5vw,100px)] font-bold tracking-[0.02em] text-[#1a1a1a] uppercase leading-tight">
            {contact.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left: ロゴマーク */}
            <div className="flex justify-center">
              <div className="w-full max-w-[500px] overflow-hidden">
                <PlaceholderImage
                  src={contact.image}
                  alt={contact.name}
                  width={500}
                  height={400}
                  className="aspect-[5/4] w-full object-contain"
                  placeholderLabel="Logo"
                />
              </div>
            </div>

            {/* Right: 連絡先情報 */}
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
              <div className="mx-auto flex flex-col items-center text-center">
                <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-[#1a1a1a] uppercase">
                  {contact.name}
                </p>
                <p className="mb-10 text-base text-[#1a1a1a]">
                  {contact.email}
                </p>

                <p className="mb-6 text-sm font-semibold tracking-[0.2em] text-[#1a1a1a] uppercase">
                  {contact.socialLabel}
                </p>
                {/* SNSアイコン */}
                <div className="flex gap-6">
                  {/* Instagram */}
                  <a
                    href={contact.instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-[#1a1a1a] transition-opacity hover:opacity-60"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Right Logo */}
      <div className="absolute bottom-4 right-4 z-20 opacity-40">
        <Image
          src="/assets/ロゴ/kc.png"
          alt="KC Logo"
          width={38}
          height={38}
          className="object-contain"
        />
      </div>
    </section>
  );
}
