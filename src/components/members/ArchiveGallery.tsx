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

type SortOrder = "newest" | "oldest";

// "2026.02.02" → 20260202, 未設定は -1（最後に回す）
function parseDateNum(dateStr?: string): number {
    if (!dateStr) return -1;
    const n = parseInt(dateStr.replace(/\./g, ""), 10);
    return isNaN(n) || n === 0 ? -1 : n;
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
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
    const [selectedYear, setSelectedYear] = useState<string>("");

    // 全タグの集計
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        items.forEach((item) => item.tags.forEach((tag) => tags.add(tag)));
        return Array.from(tags).sort();
    }, [items]);

    // 利用可能な年リスト（日付あり エントリのみ）
    const availableYears = useMemo(() => {
        const years = new Set<string>();
        items.forEach((item) => {
            if (item.date) {
                const y = item.date.slice(0, 4);
                if (/^\d{4}$/.test(y)) years.add(y);
            }
        });
        return Array.from(years).sort((a, b) => b.localeCompare(a)); // 新しい年順
    }, [items]);

    // 1. タグフィルタ → 2. 年フィルタ → 3. ソート
    const sortedFilteredItems = useMemo(() => {
        // 1. タグフィルタ
        let result = selectedTags.length === 0
            ? items
            : items.filter((item) =>
                item.tags.some((tag) => selectedTags.includes(tag))
            );

        // 2. 年フィルタ
        if (selectedYear) {
            result = result.filter((item) => item.date?.startsWith(selectedYear));
        }

        // 3. ソート（date未設定 → 常に最後）
        return [...result].sort((a, b) => {
            const da = parseDateNum(a.date);
            const db = parseDateNum(b.date);
            if (da === -1 && db === -1) return 0;
            if (da === -1) return 1;
            if (db === -1) return -1;
            return sortOrder === "newest" ? db - da : da - db;
        });
    }, [items, selectedTags, selectedYear, sortOrder]);

    // 表示件数の制御
    const visibleItems = isExpanded
        ? sortedFilteredItems
        : sortedFilteredItems.slice(0, defaultVisibleCount);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
        setIsExpanded(false);
    };

    const handleSortChange = (order: SortOrder) => {
        setSortOrder(order);
        setIsExpanded(false);
    };

    const handleYearChange = (year: string) => {
        setSelectedYear((prev) => (prev === year ? "" : year));
        setIsExpanded(false);
    };

    return (
        <section id={id} className={`scroll-mt-32 py-24 md:py-32 ${bgColor}`}>
            <div className="mx-auto max-w-[2500px] px-6 md:px-12">
                <FadeIn>
                    <div className="mb-12 flex flex-col gap-6">
                        <h2 className="font-heading text-members-heading tracking-[0.02em] text-[#1a1a1a] uppercase leading-none">
                            {title}
                        </h2>
                        {description && (
                            <p className="max-w-[1100px] text-base md:text-lg leading-relaxed text-[#1a1a1a]">
                                {description}
                            </p>
                        )}

                        {/* Tag Filter */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => {
                                    setSelectedTags([]);
                                    setIsExpanded(false);
                                }}
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

                        {/* Sort & Year Controls */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            {/* 並び替え */}
                            <div className="flex items-center gap-2.5">
                                <span className="text-[10px] font-bold tracking-[0.18em] text-[#1a1a1a]/30 uppercase select-none">
                                    並び替え
                                </span>
                                <div className="flex gap-1">
                                    {(["newest", "oldest"] as const).map((order) => (
                                        <button
                                            key={order}
                                            onClick={() => handleSortChange(order)}
                                            className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wide transition-all ${sortOrder === order
                                                ? "bg-[#1a1a1a] text-white"
                                                : "bg-black/5 text-[#1a1a1a]/40 hover:bg-black/10"
                                                }`}
                                        >
                                            {order === "newest" ? "新しい順" : "古い順"}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 年指定 */}
                            {availableYears.length > 0 && (
                                <div className="flex items-center gap-2.5">
                                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#1a1a1a]/30 uppercase select-none">
                                        年指定
                                    </span>
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => {
                                                setSelectedYear("");
                                                setIsExpanded(false);
                                            }}
                                            className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wide transition-all ${selectedYear === ""
                                                ? "bg-[#1a1a1a] text-white"
                                                : "bg-black/5 text-[#1a1a1a]/40 hover:bg-black/10"
                                                }`}
                                        >
                                            ALL
                                        </button>
                                        {availableYears.map((year) => (
                                            <button
                                                key={year}
                                                onClick={() => handleYearChange(year)}
                                                className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wide transition-all ${selectedYear === year
                                                    ? "bg-[#d4b8d9] text-white shadow-sm"
                                                    : "bg-black/5 text-[#1a1a1a]/40 hover:bg-black/10"
                                                    }`}
                                            >
                                                {year}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
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
                    {sortedFilteredItems.length === 0 && (
                        <div className="py-20 text-center text-[#1a1a1a]/40">
                            該当するアイテムが見つかりませんでした
                        </div>
                    )}

                    {/* Show More Button */}
                    {!isExpanded && sortedFilteredItems.length > defaultVisibleCount && (
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
