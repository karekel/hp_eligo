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
        <section id="about" className="relative overflow-hidden py-24 md:py-32">
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
                <FadeIn delay={0.1} className="mb-12">
                    <p className="text-base font-bold text-[#1a1a1a]">{about.subtitle}</p>
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
                                    <h3 className="font-bold text-2xl text-[#1a1a1a] text-center leading-relaxed">
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
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:px-8 md:py-16 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 16 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative w-full max-w-6xl pointer-events-auto flex flex-col md:grid md:grid-cols-2"
                                style={{ maxHeight: "88vh" }}
                            >
                                {/* 閉じるボタン */}
                                <button
                                    onClick={() => setOpenIndex(null)}
                                    className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-black/15 hover:bg-black/30 text-white text-lg leading-none transition-colors"
                                >
                                    ×
                                </button>

                                {/* 左: フル画像（モバイル: 固定高さ / デスクトップ: 列高に追従） */}
                                <div className="relative shrink-0 h-[50vw] md:h-auto">
                                    <Image
                                        src={modalImages[openIndex] ?? ""}
                                        alt={openCard.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover object-center"
                                    />
                                </div>

                                {/* 右: テキスト面（min-h-0 でスクロール確定） */}
                                <div
                                    className="min-h-0 overflow-y-auto flex flex-col px-8 py-10 md:px-14 md:py-14"
                                    style={{ backgroundColor: openCard.color }}
                                >
                                    <h2 className="font-bold text-2xl md:text-4xl text-[#1a1a1a] text-center leading-tight mb-3">
                                        {openCard.title}
                                    </h2>
                                    <p className="text-sm text-[#1a1a1a]/60 text-center mb-6 md:mb-8">
                                        {openCard.subtitle}
                                    </p>
                                    <p className="text-sm md:text-base leading-loose text-[#1a1a1a] whitespace-pre-line">
                                        {openCard.body}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
