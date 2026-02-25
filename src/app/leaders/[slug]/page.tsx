import { notFound } from "next/navigation";
import Link from "next/link";
import { leaders, getLeaderBySlug } from "@/lib/leadersData";
import PlaceholderImage from "@/components/PlaceholderImage";
import LeaderTabs from "@/components/leaders/LeaderTabs";
import Image from "next/image";

/** 静的パスを生成 */
export function generateStaticParams() {
    return leaders.map((l) => ({ slug: l.slug }));
}

/** ページタイトルを動的生成 */
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    return params.then((p) => {
        const leader = getLeaderBySlug(p.slug);
        return { title: leader ? `${leader.name} | ELIGŌ` : "Leader | ELIGŌ" };
    });
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

    return (
        <div className="relative min-h-screen w-full">
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
                        <div className="mb-8 md:mb-12 space-y-3 shrink-0">
                            <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tight leading-none">
                                {leader.nameEn}
                            </h1>
                            <div className="space-y-4 pt-2">
                                <p className="text-xl md:text-2xl font-medium text-black/90">
                                    {leader.nameJp}
                                </p>
                                <p className="text-base md:text-lg text-black font-medium leading-relaxed opacity-90">
                                    {leader.catchphrase ? `「${leader.catchphrase}」` : ""}
                                </p>
                            </div>
                        </div>

                        {/* Tabs Panel */}
                        <div className="flex-1 min-h-[500px] lg:min-h-0">
                            <LeaderTabs leader={leader} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
