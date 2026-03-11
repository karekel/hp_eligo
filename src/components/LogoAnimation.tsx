"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BASE = "/assets/logo-parts";

/**
 * Assembled % translations = (completed_coord - individual_coord) / 850.39 * 100
 * sx = spread x position in horizontal row
 */
const LETTERS = [
    { name: "E", src: `${BASE}/E.svg`, sx: "-40%", ax: "-16.529%", ay:   "0.400%" },
    { name: "L", src: `${BASE}/L.svg`, sx: "-20%", ax:  "18.563%", ay: "-18.156%" },
    { name: "I", src: `${BASE}/I.svg`, sx:   "0%", ax:  "-0.055%", ay:  "20.894%" },
    { name: "G", src: `${BASE}/G.svg`, sx:  "20%", ax:  "-0.124%", ay:   "0.400%" },
    { name: "O", src: `${BASE}/O.svg`, sx:  "40%", ax:  "-0.054%", ay:   "0.399%" },
] as const;

const EXTRAS = [
    { name: "dots",        src: `${BASE}/dots.svg`,        ax:  "16.016%", ay: "-15.197%" },
    { name: "eligoletter", src: `${BASE}/eligoletter.svg`, ax:  "16.371%", ay:  "15.904%" },
    { name: "star",        src: `${BASE}/star.svg`,        ax:   "0.124%", ay:  "-0.517%" },
] as const;

const COMPLETED     = `${BASE}/eligo-complete.svg`;
const SPREAD_SCALE  = 0.42;
const MOVE_DUR      = 1.5;    // s: spread→assembled / disperse
const FADE_OUT_DUR  = 0.35;   // s: parts fade out
const FADE_IN_DELAY = 0.30;   // s: delay before completed fades in
const FADE_IN_DUR   = 0.45;   // s: completed SVG fade in
const CROSSFADE_MS  = 850;    // ms: total crossfade window before "assembled" phase
const SPREAD_HOLD   = 2500;   // ms
const ASSEMBLE_HOLD = 3500;   // ms
const EASE          = [0.4, 0, 0.2, 1] as const;

type Phase = "spread" | "assembling" | "crossfade" | "assembled" | "dispersing";

export default function LogoAnimation() {
    const [phase, setPhase] = useState<Phase>("spread");

    useEffect(() => {
        let timers: ReturnType<typeof setTimeout>[] = [];
        const after = (ms: number, fn: () => void) => {
            const id = setTimeout(fn, ms);
            timers.push(id);
        };

        function cycle() {
            timers.forEach(clearTimeout);
            timers = [];

            // 1. Spread — hold
            setPhase("spread");

            // 2. Assemble — parts fly to final coords + extras fade in
            after(SPREAD_HOLD, () => {
                setPhase("assembling");

                // 3. Crossfade — parts fade out → completed SVG fades in
                after(MOVE_DUR * 1000, () => {
                    setPhase("crossfade");

                    // 4. Assembled — only completed SVG visible
                    after(CROSSFADE_MS, () => {
                        setPhase("assembled");

                        // 5. Disperse
                        after(ASSEMBLE_HOLD, () => {
                            setPhase("dispersing");
                            after(MOVE_DUR * 1000 + 300, cycle);
                        });
                    });
                });
            });
        }

        cycle();
        return () => timers.forEach(clearTimeout);
    }, []);

    const isAssembling  = phase === "assembling";
    const isCrossfade   = phase === "crossfade";
    const isAssembled   = phase === "assembled";
    const isDispersing  = phase === "dispersing";

    // Parts are visible (opacity=1) except during crossfade/assembled
    const partsVisible  = !isCrossfade && !isAssembled;
    // Parts are at assembled coords during assembling/crossfade/assembled
    const partsAtCenter = isAssembling || isCrossfade || isAssembled;
    // Completed SVG shown during crossfade and assembled
    const showCompleted = isCrossfade || isAssembled;

    return (
        <div className="relative w-full aspect-square" style={{ overflow: "visible" }}>

            {/* ── Compass parts (E L I G O) ── */}
            {LETTERS.map((l) => (
                <motion.div
                    key={l.name}
                    className="absolute inset-0"
                    initial={{ x: l.sx, y: "0%", scale: SPREAD_SCALE, opacity: 1 }}
                    animate={{
                        x:       partsAtCenter ? l.ax : l.sx,
                        y:       partsAtCenter ? l.ay : "0%",
                        scale:   partsAtCenter ? 1 : SPREAD_SCALE,
                        opacity: partsVisible  ? 1 : 0,
                    }}
                    transition={{
                        x:       { duration: isDispersing || isAssembling ? MOVE_DUR : 0, ease: EASE },
                        y:       { duration: isDispersing || isAssembling ? MOVE_DUR : 0, ease: EASE },
                        scale:   { duration: isDispersing || isAssembling ? MOVE_DUR : 0, ease: EASE },
                        opacity: {
                            duration: isCrossfade ? FADE_OUT_DUR : 0.25,
                            delay:    0,
                        },
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt="" className="w-full h-full object-contain" />
                </motion.div>
            ))}

            {/* ── Extras (dots / eligoletter / star) — fade in during assembling ── */}
            {EXTRAS.map((e, i) => (
                <motion.div
                    key={e.name}
                    className="absolute inset-0"
                    initial={{ x: "0%", y: "0%", scale: SPREAD_SCALE, opacity: 0 }}
                    animate={{
                        x:       partsAtCenter ? e.ax : "0%",
                        y:       partsAtCenter ? e.ay : "0%",
                        scale:   partsAtCenter ? 1 : SPREAD_SCALE,
                        opacity: isAssembling  ? 1 : 0,
                    }}
                    transition={{
                        x:       { duration: isAssembling ? MOVE_DUR : 0, ease: EASE },
                        y:       { duration: isAssembling ? MOVE_DUR : 0, ease: EASE },
                        scale:   { duration: isAssembling ? MOVE_DUR : 0, ease: EASE },
                        opacity: {
                            duration: isAssembling ? 0.6 : 0.2,
                            delay:    isAssembling ? 0.1 + i * 0.12 : 0,
                        },
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.src} alt="" className="w-full h-full object-contain" />
                </motion.div>
            ))}

            {/* ── Completed logo — crossfades in, then holds ── */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: showCompleted ? 1 : 0 }}
                transition={{
                    duration: isCrossfade ? FADE_IN_DUR  : 0.3,
                    delay:    isCrossfade ? FADE_IN_DELAY : 0,
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={COMPLETED} alt="ELIGŌ" className="w-full h-full object-contain" />
            </motion.div>

        </div>
    );
}
