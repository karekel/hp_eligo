"use client";

import { useState } from "react";
import Image from "next/image";
import { Leader } from "@/lib/leadersData";

export default function LeaderTabs({ leader }: { leader: Leader }) {
    const [activeTab, setActiveTab] = useState<"identity" | "myStory" | "vision">("identity");

    const tabs = [
        { id: "identity", label: "IDENTITY", color: "#FCDA8B" },
        { id: "myStory", label: "MY STORY", color: "#E3B7F1" },
        { id: "vision", label: "VISION", color: "#BCEFCA" },
    ] as const;

    const activeTabObj = tabs.find(t => t.id === activeTab)!;

    return (
        <div className="w-full h-full flex flex-col min-h-0">
            {/* Tab Buttons */}
            <div className="flex gap-[2px] shrink-0 w-full">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            flex-1 px-2 md:px-4 py-3 text-[10px] md:text-sm font-bold tracking-tighter rounded-t-xl transition-all duration-300 uppercase
                            ${activeTab === tab.id
                                ? "text-black translate-y-[2px] pb-[14px]"
                                : "text-black/60 hover:text-black opacity-80 hover:opacity-100"}
                        `}
                        style={{
                            backgroundColor: tab.color,
                            boxShadow: activeTab === tab.id ? "none" : "inset 0 -2px 4px rgba(0,0,0,0.05)"
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Panel */}
            <div
                className="relative z-10 rounded-b-2xl rounded-tr-2xl shadow-sm flex-1 overflow-hidden"
                style={{ backgroundColor: activeTabObj.color }}
            >
                <div className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent">
                    <div className="p-6 md:p-10">
                        {activeTab === "identity" && <IdentityContent leader={leader} />}
                        {activeTab === "myStory" && <MyStoryContent leader={leader} />}
                        {activeTab === "vision" && <VisionContent leader={leader} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

function IdentityContent({ leader }: { leader: Leader }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="w-full md:w-[240px] aspect-square shrink-0 bg-white rounded-sm shadow-inner flex items-center justify-center overflow-hidden relative self-start">
                {leader.identity.image ? (
                    <Image src={leader.identity.image} alt="Profile" className="object-cover" fill />
                ) : (
                    <div className="text-gray-200 uppercase font-bold tracking-widest text-[10px]">No Photo</div>
                )}
            </div>
            <div className="flex-1 space-y-6">
                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">Instagram</h4>
                    <p className="text-xs md:text-sm text-black mt-1 font-medium italic opacity-80">
                        {leader.identity.instagramUrl ? (
                            <a href={leader.identity.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline not-italic">
                                {leader.identity.instagramUrl.replace("https://www.instagram.com/", "@").replace("/", "")}
                            </a>
                        ) : "---"}
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">Vibe Finder</h4>
                    <p className="text-xs md:text-sm text-black mt-1 font-medium italic opacity-80">{leader.identity.vibeFinderType || "---"}</p>
                </div>
                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">Profile</h4>
                    <p className="text-xs md:text-sm text-black leading-loose whitespace-pre-line mt-1 font-medium">{leader.identity.profile}</p>
                </div>
                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">Place</h4>
                    <p className="text-xs md:text-sm text-black leading-loose whitespace-pre-line mt-1 font-medium">{leader.identity.place}</p>
                </div>
            </div>
        </div>
    );
}

function MyStoryContent({ leader }: { leader: Leader }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="w-full md:w-[240px] aspect-square shrink-0 bg-white rounded-sm shadow-inner flex items-center justify-center overflow-hidden relative self-start">
                {leader.myStory.image ? (
                    <Image src={leader.myStory.image} alt="Story" className="object-cover" fill />
                ) : (
                    <div className="text-gray-200 uppercase font-bold tracking-widest text-[10px]">No Photo</div>
                )}
            </div>
            <div className="flex-1 space-y-6">
                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">
                        {leader.myStory.signatureOilsLabel || "My Signature Oils：私の３本"}
                    </h4>
                    <ol className="text-xs md:text-sm text-black space-y-4 mt-3">
                        {leader.myStory.signatureOils.length > 0 ? (
                            leader.myStory.signatureOils.map((oil, idx) => (
                                <li key={idx}>
                                    <div className="font-bold">{oil.name}</div>
                                    <div className="text-xs md:text-sm leading-loose opacity-80 font-medium">{oil.desc}</div>
                                </li>
                            ))
                        ) : (
                            <li className="opacity-50 italic">Coming soon...</li>
                        )}
                    </ol>
                </div>
                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">The Reason</h4>
                    <p className="text-xs md:text-sm text-black leading-loose mt-2 whitespace-pre-line font-medium">{leader.myStory.reason || "---"}</p>
                </div>
                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">Why dōTERRA?</h4>
                    <p className="text-xs md:text-sm text-black leading-loose mt-2 whitespace-pre-line font-medium">{leader.myStory.whyDoterra || "---"}</p>
                </div>
            </div>
        </div>
    );
}

function VisionContent({ leader }: { leader: Leader }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="w-full md:w-[240px] aspect-square shrink-0 bg-white rounded-sm shadow-inner flex items-center justify-center overflow-hidden relative self-start">
                {leader.vision.image ? (
                    <Image src={leader.vision.image} alt="Vision" className="object-cover" fill />
                ) : (
                    <div className="text-gray-200 uppercase font-bold tracking-widest text-[10px]">No Photo</div>
                )}
            </div>

            <div className="flex-1 space-y-8">
                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">Our Culture：チームの特徴・活動</h4>
                    <p className="text-xs md:text-sm text-black leading-loose mt-2 whitespace-pre-line font-medium opacity-95">
                        {leader.vision.ourCulture || "---"}
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-xs md:text-sm text-black tracking-widest">Invite：こんな人と一緒に歩みたい</h4>
                    <p className="text-xs md:text-sm text-black leading-loose mt-2 whitespace-pre-line font-medium opacity-95">
                        {leader.vision.invite || "---"}
                    </p>
                </div>

                {!leader.vision.ourCulture && !leader.vision.invite && (
                    <p className="opacity-50 italic">Coming soon...</p>
                )}
            </div>
        </div>
    );
}