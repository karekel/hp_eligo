"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BASE = "/assets/\u30ed\u30b4/rogo move";

const LETTERS = [
    { name: "E", src: `${BASE}/E.svg`,  sx: "-40%", sy: "0%" },
    { name: "L", src: `${BASE}/L.svg`,  sx: "-20%", sy: "0%" },
    { name: "I", src: `${BASE}/I.svg`,  sx:   "0%", sy: "0%" },
    { name: "G", src: `${BASE}/G.svg`,  sx:  "20%", sy: "0%" },
    { name: "O", src: `${BASE}/O.svg`,  sx:  "40%", sy: "0%" },
] as const;

const COMPLETED = "/assets/\u30ed\u30b4/rogo move/eligo\u5b8c\u6210\u7cfb.svg";

const SPREAD_SCALE  = 0.42;
const MOVE_DUR      = 1.4;   // s: spread → center
const FADE_OUT_DUR  = 0.35;  // s: parts fade out
const FADE_IN_DUR   = 0.45;  // s: completed svg fade in
const SPREAD_HOLD   = 2500;  // ms hold spread
const ASSEMBLE_HOLD = 3500;  // ms hold assembled
const EASE = [0.4, 0, 0.2, 1] as const;

// Timeline (ms from cycle start):
//  0            → spread state shown
//  SPREAD_HOLD  → parts start moving to center
//  +MOVE_DUR*1000 * 0.7 → parts start fading out
//  +MOVE_DUR*1000       → parts invisible; completed svg starts fading in
//  +FADE_IN_DUR*1000    → completed svg fully visible → hold
//  +ASSEMBLE_HOLD       → completed svg fades out; parts reappear at center; move to spread

export default function LogoAnimation() {
    // "spread" | "moving" | "assembled" | "dispersing"
    const [phase, setPhase] = useState<"spread" | "moving" | "assembled" | "dispersing">("spread");

    useEffect(() => {
        let timers: ReturnType<typeof setTimeout>[] = [];

        function cycle() {
            timers.forEach(clearTimeout);
            timers = [];

            setPhase("spread");

            // start moving inward
            timers.push(setTimeout(() => {
                setPhase("moving");

                // parts arrive at center → show completed SVG
                timers.push(setTimeout(() => {
                    setPhase("assembled");

                    // hold → disperse
                    timers.push(setTimeout(() => {
                        setPhase("dispersing");

                        // brief moment at spread position → loop
                        timers.push(setTimeout(cycle, (MOVE_DUR * 1000) + 200));
                    }, ASSEMBLE_HOLD));
                }, MOVE_DUR * 1000));
            }, SPREAD_HOLD));
        }

        cycle();
        return () => timers.forEach(clearTimeout);
    }, []);

    const isSpread     = phase === "spread";
    const isMoving     = phase === "moving";
    const isAssembled  = phase === "assembled";
    const isDispersing = phase === "dispersing";

    // Parts are visible except when assembled
    const partsX     = (isSpread || isMoving)  ? "var(--sx)" : "0%";
    const partsY     = "0%";
    const partsScale = (isSpread || isMoving)  ? SPREAD_SCALE : 1;
    const partsOpacity = isAssembled ? 0 : 1;

    // Completed SVG only visible when assembled
    const completedOpacity = isAssembled ? 1 : 0;

    return (
        <div className="relative w-full aspect-square" style={{ overflow: "visible" }}>

            {/* Compass parts */}
            {LETTERS.map((l) => (
                <motion.div
                    key={l.name}
                    className="absolute inset-0"
                    style={{ "--sx": l.sx, "--sy": l.sy } as React.CSSProperties}
                    initial={{ x: l.sx, y: "0%", scale: SPREAD_SCALE, opacity: 1 }}
                    animate={{
                        x:       (isSpread || isMoving || isDispersing) ? l.sx : "0%",
                        y:       "0%",
                        scale:   (isSpread || isMoving || isDispersing) ? SPREAD_SCALE : 1,
                        opacity: isAssembled ? 0 : 1,
                    }}
                    transition={{
                        x:       { duration: isAssembled ? 0 : MOVE_DUR, ease: EASE },
                        scale:   { duration: isAssembled ? 0 : MOVE_DUR, ease: EASE },
                        // fade out after parts arrive at center
                        opacity: isAssembled
                            ? { delay: 0,    duration: FADE_OUT_DUR }
                            : { delay: 0,    duration: 0.3 },
                    }}
                >
                    <Image src={l.src} fill alt="" className="object-contain" />
                </motion.div>
            ))}

            {/* Completed logo — shown only after parts have faded out */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: completedOpacity }}
                transition={isAssembled
                    ? { delay: FADE_OUT_DUR, duration: FADE_IN_DUR }
                    : { delay: 0,           duration: 0.25 }
                }
            >
                <Image src={COMPLETED} fill alt="ELIGŌ" className="object-contain" />
            </motion.div>

        </div>
    );
}
