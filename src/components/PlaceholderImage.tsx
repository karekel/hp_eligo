"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

/**
 * 画像が無い場合にグラデ + ラベルのプレースホルダを表示するコンポーネント。
 * 実画像が /public/assets/ に配置されれば自動で切り替わる。
 */
export default function PlaceholderImage({
  src,
  alt,
  className = "",
  placeholderLabel,
  width,
  height,
  fill,
}: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-xs font-medium text-text-muted/60">
          {placeholderLabel ?? alt}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 400}
      height={height ?? 400}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
