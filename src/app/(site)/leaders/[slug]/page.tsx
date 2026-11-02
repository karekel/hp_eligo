import { notFound } from "next/navigation";
import Link from "next/link";
import { leaders, getLeaderBySlug, getRoleJa, getLeaderIntro } from "@/lib/leadersData";
import PlaceholderImage from "@/components/PlaceholderImage";
import LeaderTabs from "@/components/leaders/LeaderTabs";
import Image from "next/image";
import type { Leader } from "@/lib/leadersData";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

/** 静的パスを生成 */
export function generateStaticParams() {
    return leaders.map((l) => ({ slug: l.slug }));
}

/** ページタイトル・説明文を動的生成 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const leader = getLeaderBySlug(slug);
    if (!leader) return { title: "Leader" };
    const roleJa = getRoleJa(leader.role);
    const title = `${leader.nameJp}（${leader.nameEn}）｜ドテラ（doTERRA）${roleJa}`;
    const description = `ドテラ（doTERRA）${roleJa}（${leader.role}）・${leader.nameJp}（${leader.nameEn}）のプロフィール。エッセンシャルオイルとの出会い、愛用オイル3本、チームELIGŌ（エリゴ）のビジョンを紹介します。`;
    return {
        title,
        description,
        alternates: { canonical: `/leaders/${slug}` },
        openGraph: { title, description, images: [leader.image] },
    };
}

export default async function LeaderPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const leader = getLeaderBySlug(slug);

    if (!leader) {
        notFound();
    }

    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: leader.nameJp,
        alternateName: leader.nameEn,
        jobTitle: `ドテラ（doTERRA）${getRoleJa(leader.role)}（${leader.role}）`,
        description: getLeaderIntro(leader),
        image: `${siteConfig.siteUrl}${leader.image}`,
        url: `${siteConfig.siteUrl}/leaders/${leader.slug}`,
        knowsAbout: ["エッセンシャルオイル", "ドテラ（doTERRA）"],
        memberOf: { "@type": "Organization", name: siteConfig.siteName, url: siteConfig.siteUrl },
        sameAs: [leader.identity.instagramUrl, leader.identity.blogUrl].filter(Boolean),
    };

    return (
        <div className="relative min-h-screen w-full">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
            {/* Background Image: Truly edge-to-edge fixed background */}
            <div className="fixed inset-0 -z-10 w-full h-full">
                <Image
                    src="/assets/背景/2 - コピー.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-center translate-z-0"
                />
                <div className="absolute inset-0 bg-white/30" />
            </div>

            {/* Back navigation */}
            <div className="mx-auto max-w-[1600px] px-8 pt-12 md:pt-16">
                <Link
                    href="/#leaders"
                    className="inline-flex items-center gap-2 text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Leaders
                </Link>
            </div>

            {/* Leader detail */}
            <div className="mx-auto max-w-[1600px] px-8 py-12 md:py-20 flex-1 min-h-0">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-stretch min-h-0">
                    {/* Left Column: Photo */}
                    <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-100/50 aspect-[4/5] relative">
                        <PlaceholderImage
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover"
                            placeholderLabel={leader.name[0]}
                        />
                    </div>

                    {/* Right Column: Info & Tabs */}
                    <div className="flex flex-col lg:h-full min-h-0">
                        {/* Name Section */}
                        <div className="mb-8 md:mb-12 shrink-0">
                            <h1>
                                <span
                                    className="block font-heading text-4xl md:text-7xl font-thin tracking-widest text-[#1a1a1a] uppercase"
                                    style={{ textShadow: "0.2px 0 0 currentColor, -0.2px 0 0 currentColor" }}
                                >
                                    {leader.nameEn}
                                </span>
                                <span className="block mt-5 text-xl md:text-2xl font-medium text-black/90">
                                    {leader.nameJp}
                                </span>
                            </h1>
                            <p className="mt-1 text-base md:text-lg font-bold text-black/70 tracking-wider">
                                dōTERRA（ドテラ） <span className="whitespace-nowrap">{leader.role}</span>{" "}
                                <span className="whitespace-nowrap">（{getRoleJa(leader.role)}）</span>
                            </p>
                            <p className="mt-4 text-base md:text-lg text-black font-medium leading-relaxed opacity-90">
                                {leader.catchphrase ? `「${leader.catchphrase}」` : ""}
                            </p>
                            <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
                                {getLeaderIntro(leader)}
                            </p>
                        </div>

                        {/* Tabs Panel */}
                        <div className="flex-1 min-h-[500px] lg:min-h-0">
                            <LeaderTabs leader={leader} />
                        </div>
                    </div>
                </div>
            </div>

            {/* See more leaders */}
            <SeeMoreLeaders currentSlug={leader.slug} />
        </div>
    );
}

function SeeMoreLeaders({ currentSlug }: { currentSlug: string }) {
    const others = leaders.filter((l) => l.slug !== currentSlug);
    return (
        <div className="mx-auto max-w-[1600px] px-8 pb-16 md:pb-24">
            <p className="text-xs md:text-sm font-bold tracking-widest text-[#6b7280] uppercase mb-4">
                See more leaders
            </p>
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
                {others.map((l: Leader) => (
                    <Link
                        key={l.slug}
                        href={`/leaders/${l.slug}`}
                        className="group relative flex-none w-[120px] md:w-[160px] aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 snap-start"
                    >
                        <PlaceholderImage
                            src={l.image}
                            alt={l.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            placeholderLabel={l.name.charAt(0)}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-3 pt-8">
                            <p className="text-white text-[8px] md:text-[10px] font-thin tracking-[0.15em] uppercase mb-0.5"
                                style={{ textShadow: "0.3px 0 0 currentColor, -0.1px 0 0 currentColor" }}>
                                {l.nameEn}
                            </p>
                            <p className="text-white text-xs md:text-sm font-bold tracking-wide">
                                {l.name}
                            </p>
                            <p className="text-white/60 text-[8px] md:text-[10px] mt-0.5">
                                {l.role}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
