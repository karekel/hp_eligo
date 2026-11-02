"use client";

import { useEffect } from "react";

/** 見出しの Webフォントは最初の表示を待たせないよう、ページの読み込みが終わってから使い始める */
export function BlogWebFonts() {
  useEffect(() => {
    const enable = () => document.querySelector(".blog-root")?.classList.add("blog-fonts-ready");
    if (document.readyState === "complete") {
      enable();
      return;
    }
    window.addEventListener("load", enable, { once: true });
    return () => window.removeEventListener("load", enable);
  }, []);
  return null;
}
