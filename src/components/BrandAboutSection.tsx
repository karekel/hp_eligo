"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteCopy } from "@/lib/siteCopy";
import { siteAssets } from "@/lib/siteAssets";
import FadeIn from "./FadeIn";

type Card = { key: string; title: string; subtitle: string; color: string; body: string };

export default function BrandAboutSection() {
    const { about } = siteCopy;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const cards = about.cards as readonly Card[];
    const images = siteAssets.aboutCards as readonly string[];
    const modalImages = siteAssets.aboutModalImages as readonly string[];
    const openCard = openIndex !== null ? cards[openIndex] : null;

    return (
        <section id="about" className="relative overflow-hidden pt-8 md:pt-14 pb-24 md:pb-32">
            {/* セクション背景 */}
            <Image
                src="/assets/v1/8.png"
                alt=""
                fill
                className="object-cover object-center"
            />

            <div className="relative z-10 mx-auto max-w-[2500px] px-6 md:px-12">
                {/* 見出し */}
                <FadeIn className="mb-2">
                    <h2 className="font-heading text-about-title leading-[1.0] text-[#1a1a1a] uppercase">
                        {about.heading}
                    </h2>
                </FadeIn>
                {/* カードグリッド — 3列固定、等高 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <FadeIn key={card.key} delay={i * 0.1}>
                            <div className="w-full flex flex-col">
                                {/* 画像エリア — aspect-[2/1] で高さ固定 */}
                                <div className="relative w-full aspect-[2/1] overflow-hidden">
                                    <Image
                                        src={images[i] ?? ""}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>

                                {/* テキストエリア — 画像と同じ高さ (aspect-[2/1]) */}
                                <div
                                    className="w-full aspect-[2/1] flex flex-col items-center justify-center px-8 gap-3"
                                    style={{ backgroundColor: card.color }}
                                >
                                    <h3 className="font-heading font-bold text-2xl text-[#1a1a1a] text-center leading-relaxed">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-[#1a1a1a]/60 text-center leading-relaxed">
                                        {card.subtitle}
                                    </p>
                                    <button
                                        onClick={() => setOpenIndex(i)}
                                        className="text-blue-500 text-sm text-center hover:underline cursor-pointer"
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* モーダルオーバーレイ */}
            <AnimatePresence>
                {openCard && openIndex !== null && (
                    <>
                        {/* 白いフェード背景（クリックで閉じる） */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setOpenIndex(null)}
                            className="fixed inset-0 z-40 bg-white/80"
                        />

                        {/* 解説パネル */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:px-8 md:py-8 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 16 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative w-full max-w-6xl pointer-events-auto flex flex-col md:flex-row overflow-hidden"
                                style={{ maxHeight: "calc(100vh - 4rem)" }}
                            >
                                {/* 閉じるボタン */}
                                <button
                                    onClick={() => setOpenIndex(null)}
                                    className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-black/15 hover:bg-black/30 text-white text-lg leading-none transition-colors"
                                >
                                    ×
                                </button>

                                {/* 左: フル画像（モバイル: 固定高さ / デスクトップ: flex stretch で列高に追従） */}
                                <div className="relative shrink-0 h-[50vw] md:h-auto md:w-1/2">
                                    <Image
                                        src={modalImages[openIndex] ?? ""}
                                        alt={openCard.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover object-center"
                                    />
                                </div>

                                {/* 右: テキスト面（flex-1 + min-h-0 でスクロール確定） */}
                                <div
                                    className="flex-1 min-h-0 overflow-y-auto flex flex-col px-8 py-10 md:px-14 md:py-14"
                                    style={{ backgroundColor: openCard.color }}
                                >
                                    <h2 className="font-heading text-2xl md:text-4xl text-[#1a1a1a] text-center leading-tight mb-3">
                                        {openCard.title}
                                    </h2>
                                    <p className="text-sm text-[#1a1a1a]/60 text-center mb-6 md:mb-8">
                                        {openCard.subtitle}
                                    </p>
                                    <div className="text-sm md:text-base leading-loose text-[#1a1a1a]">
                                        <BodyRenderer body={openCard.body} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

function YoutubeThumbnail({ videoId, href }: { videoId: string; href: string }) {
    return (
        <div className="my-6 flex justify-center">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video w-full max-w-[400px] overflow-hidden rounded-lg bg-gray-200 shadow-sm block"
            >
                <Image
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="Video Thumbnail"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md">
                        <svg className="ml-0.5 h-5 w-5 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
}

function processAutoLinks(text: string): React.ReactNode {
    const parts = text.split(/(dōTERRA（ドテラ）|dōTERRA)/g);
    return parts.map((part, index) => {
        if (part === "dōTERRA" || part === "dōTERRA（ドテラ）") {
            return (
                <a key={index} href="https://www.doterra.com/JP/ja_JP" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {part}
                </a>
            );
        }
        if (part.includes("**")) {
            const boldParts = part.split(/(\*\*.*?\*\*)/g);
            return boldParts.map((bp, bIndex) => {
                if (bp.startsWith("**") && bp.endsWith("**")) {
                    return <strong key={bIndex} className="font-bold">{bp.slice(2, -2)}</strong>;
                }
                return bp;
            });
        }
        return part;
    });
}

function processAromatouchLink(line: string): React.ReactNode {
    const regex = /\[aromatouch_link:(.*?)\]/g;
    const nodes: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) nodes.push(line.slice(lastIndex, match.index));
        nodes.push(
            <a key={match.index} href="https://www.doterra.com/JP/ja_JP/aromatouch-technique" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {match[1]}
            </a>
        );
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < line.length) nodes.push(line.slice(lastIndex));
    return <>{nodes}</>;
}

function BodyRenderer({ body }: { body: string }) {
    const lines = body.split("\n");

    return (
        <>
            {lines.map((line, i) => {
                const trimmed = line.trim();

                // youtube.com/watch URL
                const ytLongMatch = trimmed.match(/^https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/);
                if (ytLongMatch) {
                    return <YoutubeThumbnail key={i} videoId={ytLongMatch[1]} href={trimmed} />;
                }

                // youtu.be short URL
                const ytShortMatch = trimmed.match(/^https:\/\/youtu\.be\/([\w-]+)/);
                if (ytShortMatch) {
                    return <YoutubeThumbnail key={i} videoId={ytShortMatch[1]} href={trimmed} />;
                }

                // [quality_link:text]
                if (line.includes("[quality_link:")) {
                    const match = line.match(/\[quality_link:(.*?)\]/);
                    if (match) {
                        return (
                            <div key={i} className="min-h-[1.5em] mb-2 last:mb-0">
                                <a href="https://www.sourcetoyou.com/jp/quality" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {match[1]}
                                </a>
                            </div>
                        );
                    }
                }

                // [image_grid:path1,path2]
                if (line.includes("[image_grid:")) {
                    const match = line.match(/\[image_grid:(.*?)\]/);
                    if (match) {
                        const paths = match[1].split(",");
                        return (
                            <div key={i} className="grid grid-cols-2 gap-3 my-6">
                                {paths.map((path, idx) => (
                                    <div key={idx} className="relative aspect-square overflow-hidden rounded-sm shadow-sm bg-gray-50">
                                        <Image src={path.trim()} alt={`Activity Image ${idx + 1}`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        );
                    }
                }

                // [image_single:path]
                if (line.includes("[image_single:")) {
                    const match = line.match(/\[image_single:(.*?)\]/);
                    if (match) {
                        return (
                            <div key={i} className="relative w-full aspect-[16/9] overflow-hidden rounded-sm shadow-sm bg-gray-50 my-6">
                                <Image src={match[1].trim()} alt="Activity Image" fill className="object-cover" />
                            </div>
                        );
                    }
                }

                // [growers_link:text]
                if (line.includes("[growers_link:")) {
                    const match = line.match(/\[growers_link:(.*?)\]/);
                    if (match) {
                        return (
                            <div key={i} className="min-h-[1.5em] mb-2 last:mb-0">
                                <a href="https://www.sourcetoyou.com/jp/growers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {match[1]}
                                </a>
                            </div>
                        );
                    }
                }

                // [aromatouch_link:text] inline — skip dōTERRA auto-link for this line
                if (line.includes("[aromatouch_link:")) {
                    return (
                        <div key={i} className="min-h-[1.5em] mb-2 last:mb-0">
                            {processAromatouchLink(line)}
                        </div>
                    );
                }

                // Default: auto-link dōTERRA
                return (
                    <div key={i} className="min-h-[1.5em] mb-2 last:mb-0">
                        {processAutoLinks(line)}
                    </div>
                );
            })}
        </>
    );
}
