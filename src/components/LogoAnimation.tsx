"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// URL-encoded path (Japanese + space must be encoded for production)
const BASE = "/assets/%E3%83%AD%E3%82%B4/rogo%20move";

const LETTERS = [
    { name: "E", src: `${BASE}/E.svg`,  sx: "-40%", sy: "0%" },
    { name: "L", src: `${BASE}/L.svg`,  sx: "-20%", sy: "0%" },
    { name: "I", src: `${BASE}/I.svg`,  sx:   "0%", sy: "0%" },
    { name: "G", src: `${BASE}/G.svg`,  sx:  "20%", sy: "0%" },
    { name: "O", src: `${BASE}/O.svg`,  sx:  "40%", sy: "0%" },
] as const;

const COMPLETED = `${BASE}/eligo%E5%AE%8C%E6%88%90%E7%B3%BB.svg`;

const SPREAD_SCALE  = 0.42;
const MOVE_DUR      = 1.4;
const FADE_OUT_DUR  = 0.35;
const FADE_IN_DUR   = 0.45;
const SPREAD_HOLD   = 2500;
const ASSEMBLE_HOLD = 3500;
const EASE = [0.4, 0, 0.2, 1] as const;

export default function LogoAnimation() {
    const [phase, setPhase] = useState<"spread" | "moving" | "assembled" | "dispersing">("spread");

    useEffect(() => {
        let timers: ReturnType<typeof setTimeout>[] = [];

        function cycle() {
            timers.forEach(clearTimeout);
            timers = [];
            setPhase("spread");

            timers.push(setTimeout(() => {
                setPhase("moving");

                timers.push(setTimeout(() => {
                    setPhase("assembled");

                    timers.push(setTimeout(() => {
                        setPhase("dispersing");
                        timers.push(setTimeout(cycle, MOVE_DUR * 1000 + 200));
                    }, ASSEMBLE_HOLD));
                }, MOVE_DUR * 1000));
            }, SPREAD_HOLD));
        }

        cycle();
        return () => timers.forEach(clearTimeout);
    }, []);

    const isAssembled  = phase === "assembled";
    const isSpreadLike = phase === "spread" || phase === "moving" || phase === "dispersing";

    return (
        <div className="relative w-full aspect-square" style={{ overflow: "visible" }}>

            {/* Compass parts (E L I G O) */}
            {LETTERS.map((l) => (
                <motion.div
                    key={l.name}
                    className="absolute inset-0"
                    initial={{ x: l.sx, y: "0%", scale: SPREAD_SCALE, opacity: 1 }}
                    animate={{
                        x:       isSpreadLike ? l.sx : "0%",
                        y:       "0%",
                        scale:   isSpreadLike ? SPREAD_SCALE : 1,
                        opacity: isAssembled ? 0 : 1,
                    }}
                    transition={{
                        x:       { duration: isAssembled ? 0 : MOVE_DUR, ease: EASE },
                        scale:   { duration: isAssembled ? 0 : MOVE_DUR, ease: EASE },
                        opacity: isAssembled
                            ? { delay: 0, duration: FADE_OUT_DUR }
                            : { delay: 0, duration: 0.3 },
                    }}
                >
                    {/* Use <img> instead of Next.js <Image> — SVG files bypass optimization */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt="" className="w-full h-full object-contain" />
                </motion.div>
            ))}

            {/* Completed logo — shown only after parts have faded out */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={isAssembled
                    ? { delay: FADE_OUT_DUR, duration: FADE_IN_DUR }
                    : { delay: 0,           duration: 0.25 }
                }
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={COMPLETED} alt="ELIGŌ" className="w-full h-full object-contain" />
            </motion.div>

        </div>
    );
}
