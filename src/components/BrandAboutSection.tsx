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

            <div className="relative z-10 mx-auto max-w-[2500px] px-12">
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

function BodyRenderer({ body }: { body: string }) {
    const lines = body.split("\n");

    return (
        <>
            {lines.map((line, i) => {
                // YouTube URL のチェック
                const ytMatch = line.trim().match(/https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)(?:&t=(\d+))?/);
                if (ytMatch) {
                    const videoId = ytMatch[1];
                    return (
                        <div key={i} className="my-6 flex justify-center">
                            <a
                                href={line.trim()}
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

                // 特殊リンクのパース
                let content: React.ReactNode = line;

                // [quality_link:text]
                if (line.includes("[quality_link:")) {
                    const match = line.match(/\[quality_link:(.*?)\]/);
                    if (match) {
                        content = (
                            <a
                                href="https://www.sourcetoyou.com/jp/quality"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {match[1]}
                            </a>
                        );
                    }
                }
                // [growers_link:text]
                else if (line.includes("[growers_link:")) {
                    const match = line.match(/\[growers_link:(.*?)\]/);
                    if (match) {
                        content = (
                            <a
                                href="https://www.sourcetoyou.com/jp/growers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {match[1]}
                            </a>
                        );
                    }
                }
                else {
                    // dōTERRA の一律リンク化 (What is Eligo 用)
                    // 正規表現で「dōTERRA（ドテラ）」や「dōTERRA」を置換
                    const parts = line.split(/(dōTERRA（ドテラ）|dōTERRA)/g);
                    content = parts.map((part, index) => {
                        if (part === "dōTERRA" || part === "dōTERRA（ドテラ）") {
                            return (
                                <a
                                    key={index}
                                    href="https://www.doterra.com/JP/ja_JP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {part}
                                </a>
                            );
                        }
                        // 太字の処理 **text**
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

                return (
                    <p key={i} className="min-h-[1.5em] mb-2 last:mb-0">
                        {content}
                    </p>
                );
            })}
        </>
    );
}
