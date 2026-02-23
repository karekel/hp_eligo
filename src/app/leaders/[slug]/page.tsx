import { notFound } from "next/navigation";
import Link from "next/link";
import { leaders, getLeaderBySlug } from "@/lib/leadersData";
import PlaceholderImage from "@/components/PlaceholderImage";

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
        <div className="min-h-screen bg-[#f0eff0]">
            {/* Back navigation */}
            <div className="mx-auto max-w-[1320px] px-6 pt-8">
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
            <div className="mx-auto max-w-[1320px] px-6 py-16">
                <div className="grid items-start gap-12 md:grid-cols-2">
                    {/* Photo */}
                    <div className="overflow-hidden rounded-lg">
                        <PlaceholderImage
                            src={leader.image}
                            alt={leader.name}
                            width={600}
                            height={750}
                            className="aspect-[4/5] w-full object-cover"
                            placeholderLabel={leader.name[0]}
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center py-8">
                        <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-[#6b7280] uppercase">
                            {leader.role}
                        </p>
                        <h1 className="font-heading mb-8 text-detail-title font-normal text-[#1a1a1a]">
                            {leader.name}
                        </h1>
                        <p className="max-w-lg text-base leading-relaxed text-[#1a1a1a]">
                            {leader.bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
