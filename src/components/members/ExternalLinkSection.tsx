import FadeIn from "../FadeIn";

interface ExternalLinkSectionProps {
    id: string;
    title: string;
    description: string;
    buttonLabel: string;
    href: string;
    bgColor?: string;
}

export default function ExternalLinkSection({
    id,
    title,
    description,
    buttonLabel,
    href,
    bgColor = "bg-white",
}: ExternalLinkSectionProps) {
    return (
        <section id={id} className={`scroll-mt-32 py-24 md:py-32 ${bgColor}`}>
            <div className="mx-auto max-w-[2500px] px-12 text-left">
                <FadeIn className="flex flex-col items-start">
                    <h2 className="font-heading mb-6 text-[clamp(44px,6vw,96px)] font-bold tracking-[0.02em] text-[#1a1a1a] uppercase leading-none">
                        {title}
                    </h2>
                    <p className="mb-12 max-w-[1100px] text-base md:text-lg leading-relaxed text-[#1a1a1a] text-left">
                        {description}
                    </p>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex w-full max-w-[340px] items-center justify-center gap-4 rounded-full border-2 border-[#b08cb9] py-5 text-sm font-bold tracking-[0.2em] text-[#1a1a1a] uppercase transition-all hover:bg-[#b08cb9] hover:text-white"
                    >
                        <span>{buttonLabel}</span>
                        <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
