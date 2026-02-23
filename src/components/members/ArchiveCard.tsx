import Image from "next/image";
import PlaceholderImage from "../PlaceholderImage";

interface ArchiveCardProps {
    title: string;
    description: string;
    tags: string[];
    thumbnailUrl?: string;
    date?: string;
    url?: string;
    fileType?: string;
}

export default function ArchiveCard({
    title,
    description,
    tags,
    thumbnailUrl,
    date,
    url,
    fileType,
}: ArchiveCardProps) {
    return (
        <div className="flex flex-col gap-4">
            {/* サムネイル */}
            <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-white shadow-md">
                <a
                    href={url || "#"}
                    target={url && url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                >
                    {thumbnailUrl ? (
                        <Image
                            src={thumbnailUrl}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <PlaceholderImage
                            src=""
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            placeholderLabel={fileType?.toUpperCase() || "CONTENT"}
                        />
                    )}
                    <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0" />

                    {/* File Type Badge if applicable */}
                    {fileType && (
                        <div className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase">
                            {fileType}
                        </div>
                    )}
                </a>
            </div>

            {/* コンテンツ */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-[#d4b8d9]/30 bg-[#d4b8d9]/5 px-2 py-0.5 text-[10px] font-medium text-[#1a1a1a]/60"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <h3 className="line-clamp-2 text-base font-bold tracking-tight text-[#1a1a1a] min-h-[3rem]">
                    {title}
                </h3>

                {date && (
                    <p className="text-[10px] text-[#1a1a1a]/40 font-medium">
                        {date}
                    </p>
                )}

                <p className="line-clamp-2 text-[13px] leading-relaxed text-[#1a1a1a]/70">
                    {description}
                </p>
            </div>
        </div>
    );
}
