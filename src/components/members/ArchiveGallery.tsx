"use client";

import { useState, useMemo } from "react";
import FadeIn from "../FadeIn";
import ArchiveCard from "./ArchiveCard";

interface GalleryItem {
    id: string;
    title: string;
    description: string;
    tags: string[];
    thumbnailUrl?: string;
    url: string;
    date?: string;
    fileType?: string;
}

interface ArchiveGalleryProps {
    id: string;
    title: string;
    description?: string;
    items: GalleryItem[];
    defaultVisibleCount?: number;
    enableInternalScroll?: boolean;
    bgColor?: string;
}

export default function ArchiveGallery({
    id,
    title,
    description,
    items,
    defaultVisibleCount = 6,
    enableInternalScroll = false,
    bgColor = "bg-white/30",
}: ArchiveGalleryProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);

    // 全タグの集計
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        items.forEach((item) => item.tags.forEach((tag) => tags.add(tag)));
        return Array.from(tags).sort();
    }, [items]);

    // フィルタリング
    const filteredItems = useMemo(() => {
        if (selectedTags.length === 0) return items;
        return items.filter((item) =>
            item.tags.some((tag) => selectedTags.includes(tag))
        );
    }, [items, selectedTags]);

    // 表示件数の制御
    const visibleItems = isExpanded
        ? filteredItems
        : filteredItems.slice(0, defaultVisibleCount);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <section id={id} className={`scroll-mt-32 py-24 md:py-32 ${bgColor}`}>
            <div className="mx-auto max-w-[2500px] px-12">
                <FadeIn>
                    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="font-heading mb-6 text-[clamp(44px,6vw,96px)] tracking-[0.02em] text-[#1a1a1a] uppercase leading-none">
                                {title}
                            </h2>
                            {description && (
                                <p className="mb-8 max-w-[1100px] text-base md:text-lg leading-relaxed text-[#1a1a1a]">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Tag Filter */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedTags([])}
                                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${selectedTags.length === 0
                                    ? "bg-[#1a1a1a] text-white"
                                    : "bg-black/5 text-[#1a1a1a]/40 hover:bg-black/10"
                                    }`}
                            >
                                ALL
                            </button>
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${selectedTags.includes(tag)
                                        ? "bg-[#d4b8d9] text-white shadow-sm"
                                        : "bg-black/5 text-[#1a1a1a]/40 hover:bg-black/10"
                                        }`}
                                >
                                    {tag.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid Container */}
                    <div
                        className={`
              grid gap-x-6 gap-y-10 
              grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
              ${enableInternalScroll ? "max-h-[70vh] overflow-y-auto pr-2 no-scrollbar" : ""}
            `}
                    >
                        {visibleItems.map((item, i) => (
                            <FadeIn key={item.id} delay={i % 6 * 0.05}>
                                <ArchiveCard {...item} />
                            </FadeIn>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <div className="py-20 text-center text-[#1a1a1a]/40">
                            該当するアイテムが見つかりませんでした
                        </div>
                    )}

                    {/* Show More Button */}
                    {!isExpanded && filteredItems.length > defaultVisibleCount && (
                        <div className="mt-16 flex justify-center">
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="group flex flex-col items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1a1a1a] uppercase transition-all hover:text-[#d4b8d9]"
                            >
                                <span>Show more</span>
                                <div className="h-6 w-[1px] bg-black/20 transition-all group-hover:h-10 group-hover:bg-[#d4b8d9]" />
                            </button>
                        </div>
                    )}
                </FadeIn>
            </div>
        </section>
    );
}
