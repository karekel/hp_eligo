import { siteConfig } from "@/lib/siteConfig";
import membersData from "@/lib/membersData.json";
import ExternalLinkSection from "@/components/members/ExternalLinkSection";
import ArchiveGallery from "@/components/members/ArchiveGallery";
import Header from "@/components/Header";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function MembersPage() {
    const { members } = siteConfig.externalLinks;

    return (
        <>
            <Header />
            <main className="relative min-h-screen overflow-hidden">
                {/* メンバーページ専用背景 */}
                <div className="fixed inset-0 -z-10">
                    <Image
                        src="/assets/背景/メンバー背景.jpg"
                        alt=""
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-white/70" />
                </div>
                {/* Page Hero / Title */}
                <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-black/5">
                    <div className="mx-auto max-w-[2500px] px-12">
                        <FadeIn className="text-center">
                            <h1 className="font-demi text-[clamp(48px,8vw,120px)] tracking-[0.05em] text-[#1a1a1a] inline-block">
                                <span className="bg-[#d4b8d9]/60 px-4 pt-[20px] pb-[8px] rounded-sm inline-flex items-center leading-none">
                                    The ELIGŌ Team
                                </span>
                            </h1>
                            <p className="mt-8 max-w-[1000px] text-base md:text-lg leading-relaxed text-[#1a1a1a]/60 mx-auto text-center">
                                ELIGOメンバー限定の各種ツール、アーカイブ、学習用資料をご利用いただけます。<br className="hidden md:block" />
                                あなたのビジネスとライフスタイルの向上にお役立てください。
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* 1) ELIGO SHOP */}
                <ExternalLinkSection
                    id="eligo-shop"
                    title="ELIGŌ SHOP"
                    description="厳選されたドテラ製品をメンバー特別価格で。最新のラインナップをチェックして、あなたの暮らしに彩りを。"
                    buttonLabel="SHOPにアクセス"
                    href={members.shopUrl}
                    bgColor="bg-white/50"
                />

                {/* 2) ELIGO BOT */}
                <ExternalLinkSection
                    id="eligo-bot"
                    title="ELIGŌ BOT"
                    description="24時間いつでも知識を引き出せるAIアシスタント。精油の使い方や体験談を瞬時に検索し、あなたの疑問を解決します。"
                    buttonLabel="BOTを起動"
                    href={members.botUrl}
                    bgColor="bg-white/30"
                />

                {/* 3) Zoom Archive */}
                <ArchiveGallery
                    id="zoom-archive"
                    title="Zoom Archive"
                    description="過去に配信されたセミナーや勉強会の録画アーカイブです。最新のナレッジをいつでも追体験できます。"
                    items={membersData.zoomArchives.map(item => ({
                        ...item,
                        url: item.videoUrl,
                    }))}
                    bgColor="bg-white/50"
                />

                {/* 4) Materials */}
                <ArchiveGallery
                    id="materials"
                    title="Materials"
                    description="ビジネスやライフスタイルに活用できるPDF資料、画像素材、ガイドブック集です。"
                    items={membersData.materials}
                    bgColor="bg-white/30"
                />

                {/* Footer Spacer or simple footer if needed */}
                <div className="h-40" />

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
            </main>
        </>
    );
}
