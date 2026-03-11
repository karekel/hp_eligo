"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BASE = "/assets/logo-parts";

/**
 * ax/ay = (complete_coord - individual_coord) / 850.39 * 100 %
 */
const LETTERS = [
    { name: "E", src: `${BASE}/E.svg`, sx: "-40%", ax: "-16.534%", ay:   "0.400%" },
    { name: "L", src: `${BASE}/L.svg`, sx: "-20%", ax:  "18.562%", ay: "-18.155%" },
    { name: "I", src: `${BASE}/I.svg`, sx:   "0%", ax:  "-0.055%", ay:  "20.895%" },
    { name: "G", src: `${BASE}/G.svg`, sx:  "20%", ax:  "-0.123%", ay:   "0.400%" },
    { name: "O", src: `${BASE}/O.svg`, sx:  "40%", ax:  "-0.054%", ay:   "0.400%" },
] as const;

const EXTRAS = [
    { name: "dots",        src: `${BASE}/dots.svg`,        ax:  "16.016%", ay: "-15.198%" },
    { name: "eligoletter", src: `${BASE}/eligoletter.svg`, ax:  "16.370%", ay:  "15.903%" },
    { name: "star",        src: `${BASE}/star.svg`,        ax:  "-0.123%", ay:   "0.517%" },
] as const;

const SPREAD_SCALE    = 0.42;
const MOVE_DUR        = 2.5;   // s: letters fly in / out
const EXTRAS_FADE_DUR = 0.8;   // s: each extra fades in
const EXTRAS_STAGGER  = 0.4;   // s: stagger between extras
const EXTRAS_HOLD_MS  = 500;   // ms: pause after last extra appears
const ASSEMBLE_HOLD   = 3000;  // ms: hold completed form (3 seconds)
const SPREAD_HOLD     = 2500;  // ms
const EASE            = [0.4, 0, 0.2, 1] as const;

const EXTRAS_PHASE_MS =
    Math.ceil(EXTRAS_FADE_DUR * 1000 + (EXTRAS.length - 1) * EXTRAS_STAGGER * 1000) +
    EXTRAS_HOLD_MS;

type Phase = "spread" | "assembling" | "extras_in" | "holding" | "dispersing";

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

            setPhase("spread");

            after(SPREAD_HOLD, () => {
                setPhase("assembling");

                after(MOVE_DUR * 1000, () => {
                    setPhase("extras_in");

                    after(EXTRAS_PHASE_MS, () => {
                        setPhase("holding");

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

    const isAssembling = phase === "assembling";
    const isExtrasIn   = phase === "extras_in";
    const isHolding    = phase === "holding";
    const isDispersing = phase === "dispersing";

    const lettersAtCenter = isAssembling || isExtrasIn || isHolding;
    const lettersMoving   = isAssembling || isDispersing;

    const extrasAtCenter  = isExtrasIn || isHolding;
    const extrasVisible   = isExtrasIn || isHolding;

    return (
        <div className="relative w-full aspect-square" style={{ overflow: "visible" }}>

            {/* ── Letters (E L I G O) ── */}
            {LETTERS.map((l) => (
                <motion.div
                    key={l.name}
                    className="absolute inset-0"
                    initial={{ x: l.sx, y: "0%", scale: SPREAD_SCALE, opacity: 1 }}
                    animate={{
                        x:       lettersAtCenter ? l.ax : l.sx,
                        y:       lettersAtCenter ? l.ay : "0%",
                        scale:   lettersAtCenter ? 1 : SPREAD_SCALE,
                    }}
                    transition={{
                        x:       { duration: lettersMoving ? MOVE_DUR : 0, ease: EASE },
                        y:       { duration: lettersMoving ? MOVE_DUR : 0, ease: EASE },
                        scale:   { duration: lettersMoving ? MOVE_DUR : 0, ease: EASE },
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt="" className="w-full h-full object-contain" />
                </motion.div>
            ))}

            {/* ── Extras (dots / eligoletter / star) ── */}
            {EXTRAS.map((e, i) => (
                <motion.div
                    key={e.name}
                    className="absolute inset-0"
                    initial={{ x: "0%", y: "0%", opacity: 0 }}
                    animate={{
                        x:       extrasAtCenter ? e.ax : "0%",
                        y:       extrasAtCenter ? e.ay : "0%",
                        opacity: extrasVisible  ? 1 : 0,
                    }}
                    transition={{
                        x:       { duration: 0 },
                        y:       { duration: 0 },
                        opacity: {
                            duration: isExtrasIn ? EXTRAS_FADE_DUR : 0.25,
                            delay:    isExtrasIn ? i * EXTRAS_STAGGER : 0,
                        },
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.src} alt="" className="w-full h-full object-contain" />
                </motion.div>
            ))}

        </div>
    );
}
