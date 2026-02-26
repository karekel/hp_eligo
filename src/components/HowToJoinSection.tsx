"use client";

import Image from "next/image";
import Link from "next/link";
import { siteAssets } from "@/lib/siteAssets";
import { siteCopy } from "@/lib/siteCopy";
import FadeIn from "./FadeIn";

export default function HowToJoinSection() {
    const { howToJoin } = siteCopy;

    return (
        <section id="how-to-join" className="relative py-16 md:py-20 overflow-hidden z-10">
            {/* 背景: 背景/7.png (統一背景モード時は非表示) */}
            {!siteAssets.useUnifiedBackground && (
                <Image
                    src={siteAssets.bg.howToJoin}
                    alt=""
                    fill
                    className="object-cover object-center"
                />
            )}
            <div className="relative z-10 mx-auto max-w-[2500px] px-6 md:px-12">
                {/* Main Heading */}
                <FadeIn className="mb-12 md:mb-16">
                    <h2 className="font-heading text-about-title leading-[1.0] text-[#1a1a1a] uppercase tracking-[0.02em]">
                        {howToJoin.heading}
                    </h2>
                </FadeIn>

                <div className="space-y-10 md:space-y-6">
                    {howToJoin.steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.0fr] gap-8 lg:gap-16 items-start">

                                {/* Left Column: Step Label + Image Box */}
                                <div className="flex flex-col gap-3">
                                    <FadeIn delay={index * 0.1}>
                                        <span
                                            className="font-heading text-3xl md:text-4xl font-black italic select-none"
                                            style={{ color: step.textColor }}
                                        >
                                            {step.number}
                                        </span>
                                    </FadeIn>
                                    <FadeIn delay={index * 0.1 + 0.1}>
                                        <div className="relative aspect-[17/9] rounded-2xl overflow-hidden bg-gray-50 shadow-sm border border-black/5">
                                            {/* Step Image */}
                                            {step.image ? (
                                                <Image
                                                    src={step.image}
                                                    alt={step.title}
                                                    fill
                                                    className={`object-cover ${step.number === "Step 1" ? "object-left" : "object-center"}`}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium text-xs uppercase tracking-widest">
                                                    IMAGE AREA
                                                </div>
                                            )}
                                        </div>
                                    </FadeIn>
                                </div>

                                {/* Right Column: Step Content */}
                                <FadeIn delay={index * 0.1 + 0.2} className="flex flex-col justify-center pt-2 md:pt-12 lg:pt-14">
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1a1a1a]">
                                        {step.title}
                                    </h3>
                                    <div className="text-base leading-relaxed text-[#1a1a1a] whitespace-pre-wrap mb-8">
                                        {step.body}
                                    </div>
                                    <Link
                                        href={step.href}
                                        target={step.href.startsWith("http") ? "_blank" : "_self"}
                                        className="inline-flex items-center justify-center px-8 py-3 min-w-[240px] rounded-full text-[#1a1a1a] font-medium text-base md:text-lg transition-all hover:brightness-90 active:scale-95 shadow-sm self-start"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        {step.cta}
                                    </Link>
                                </FadeIn>
                            </div>

                            {/* Step Divider (Except for last step) */}
                            {index < howToJoin.steps.length - 1 && (
                                <div className="mt-12 md:mt-10 flex items-start w-full">
                                    <div className="h-[1px] bg-black/30 flex-1" />
                                    <div className="flex-none -mt-[0.5px]">
                                        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-black/30">
                                            <path d="M0 0 L12 12 L24 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="h-[1px] bg-black/30 flex-1" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer Welcome Message */}
                <FadeIn delay={0.4} className="mt-10 md:mt-10 text-center">
                    <div className="flex items-start w-full mb-10 md:mb-12">
                        <div className="h-[1px] bg-black/20 flex-1" />
                        <div className="flex-none -mt-[0.5px]">
                            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-black/20">
                                <path d="M0 0 L12 12 L24 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="h-[1px] bg-black/10 flex-1" />
                    </div>
                    <h2 className="font-heading text-about-title leading-[1.0] text-[#1a1a1a] uppercase tracking-[0.02em]">
                        {howToJoin.footer}
                    </h2>
                </FadeIn>
            </div>

            {/* Bottom Right Logo (Match MEMBERS page spec) */}
            <div className="absolute bottom-4 right-4 z-20 opacity-40 pointer-events-none select-none">
                <Image
                    src={siteAssets.logo}
                    alt="ELIGŌ Logo"
                    width={38}
                    height={38}
                    className="object-contain"
                />
            </div>
        </section>
    );
}
