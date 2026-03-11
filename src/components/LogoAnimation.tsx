"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BASE = "/assets/logo-parts";

const LETTERS = [
    { name: "E", src: `${BASE}/E.svg`, sx: "-40%" },
    { name: "L", src: `${BASE}/L.svg`, sx: "-20%" },
    { name: "I", src: `${BASE}/I.svg`, sx:   "0%" },
    { name: "G", src: `${BASE}/G.svg`, sx:  "20%" },
    { name: "O", src: `${BASE}/O.svg`, sx:  "40%" },
] as const;

const COMPLETED    = `${BASE}/eligo-complete.svg`;
const SPREAD_SCALE = 0.42;
const MOVE_DUR     = 1.4;   // s: spread ↔ center
const FADE_OUT_DUR = 0.35;  // s: parts fade out
const FADE_IN_DUR  = 0.45;  // s: completed SVG fade in
const SPREAD_HOLD  = 2500;  // ms
const ASSEMBLE_HOLD= 3500;  // ms
const EASE         = [0.4, 0, 0.2, 1] as const;

type Phase = "spread" | "moving" | "assembled" | "dispersing";

export default function LogoAnimation() {
    const [phase, setPhase] = useState<Phase>("spread");

    useEffect(() => {
        let t: ReturnType<typeof setTimeout>[] = [];
        const s = (fn: () => void, ms: number) => {
            const id = setTimeout(fn, ms);
            t.push(id);
            return id;
        };

        function cycle() {
            t.forEach(clearTimeout);
            t = [];

            // 1. Spread — hold
            setPhase("spread");

            // 2. Moving — parts fly to center
            s(() => {
                setPhase("moving");

                // 3. Assembled — parts fade out → completed SVG fades in
                s(() => {
                    setPhase("assembled");

                    // 4. Hold assembled → disperse
                    s(() => {
                        setPhase("dispersing");

                        // 5. After disperse animation → loop
                        s(cycle, MOVE_DUR * 1000 + 300);
                    }, ASSEMBLE_HOLD);
                }, MOVE_DUR * 1000);
            }, SPREAD_HOLD);
        }

        cycle();
        return () => t.forEach(clearTimeout);
    }, []);

    return (
        <div className="relative w-full aspect-square" style={{ overflow: "visible" }}>

            {/* ── Compass parts (E L I G O) ── */}
            {LETTERS.map((l) => (
                <motion.div
                    key={l.name}
                    className="absolute inset-0"
                    initial={{ x: l.sx, scale: SPREAD_SCALE, opacity: 1 }}
                    animate={
                        phase === "spread" ? (
                            // Already at spread position — no animation needed
                            { x: l.sx, scale: SPREAD_SCALE, opacity: 1 }
                        ) : phase === "moving" ? (
                            // Fly to center
                            { x: "0%", scale: 1, opacity: 1 }
                        ) : phase === "assembled" ? (
                            // Hold at center, fade out
                            { x: "0%", scale: 1, opacity: 0 }
                        ) : (
                            // Disperse back to spread
                            { x: l.sx, scale: SPREAD_SCALE, opacity: 1 }
                        )
                    }
                    transition={
                        phase === "spread" ? (
                            { duration: 0 }
                        ) : phase === "moving" ? (
                            { duration: MOVE_DUR, ease: EASE }
                        ) : phase === "assembled" ? (
                            { x: { duration: 0 }, scale: { duration: 0 }, opacity: { duration: FADE_OUT_DUR } }
                        ) : (
                            // dispersing
                            {
                                x:       { duration: MOVE_DUR, ease: EASE },
                                scale:   { duration: MOVE_DUR, ease: EASE },
                                opacity: { duration: 0.25 },
                            }
                        )
                    }
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt="" className="w-full h-full object-contain" />
                </motion.div>
            ))}

            {/* ── Completed logo ── fades in after parts disappear, fades out before disperse ── */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "assembled" ? 1 : 0 }}
                transition={
                    phase === "assembled"
                        ? { delay: FADE_OUT_DUR, duration: FADE_IN_DUR }
                        : { delay: 0,            duration: 0.25 }
                }
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={COMPLETED} alt="ELIGŌ" className="w-full h-full object-contain" />
            </motion.div>

        </div>
    );
}
