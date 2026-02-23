"use client";
import Image from "next/image";

type Props = { src: string; alt: string; className?: string };

export default function LogoMark({ src, alt, className }: Props) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority={false}
      />
    </div>
  );
}