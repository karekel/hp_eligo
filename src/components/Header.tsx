"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { siteAssets } from "@/lib/siteAssets";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // メンバーページかどうか判定
  const isMembersPage = pathname === "/members";
  const navItems = isMembersPage ? siteConfig.membersNav : siteConfig.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? isMembersPage
          ? "bg-[#f0eff0]/90 backdrop-blur-md shadow-sm"
          : "bg-black/80 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      {/*
        items-start: ロゴ（大きい）とナビ（小さい）を上揃えにする
        → v1スクショと同様にナビが右上、ELIGŌが大きく左下に広がるレイアウト
      */}
      <div className="mx-auto flex max-w-[2500px] items-center justify-between px-12 py-4">
        {/* Logo: Logo image instead of text */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <div className={`relative h-10 md:h-12 w-40 md:w-56 ${isMembersPage ? "invert" : ""}`}>
            <Image
              src={siteAssets.eligoLogo}
              alt="ELIGŌ"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-heading text-[clamp(0.85rem,1vw,1.05rem)] font-medium tracking-[0.15em] uppercase transition-colors ${isMembersPage
                ? "text-[#1a1a1a] hover:text-[#6b7280]"
                : "text-white hover:text-white/70"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 transition-transform ${isMembersPage ? "bg-[#1a1a1a]" : "bg-white"
              } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity ${isMembersPage ? "bg-[#1a1a1a]" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform ${isMembersPage ? "bg-[#1a1a1a]" : "bg-white"
              } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className={`border-t backdrop-blur-md md:hidden ${isMembersPage
          ? "border-[#e0e0e0] bg-[#f0eff0]/95"
          : "border-white/10 bg-black/95"
          }`}>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-6 py-4 font-heading text-sm font-medium tracking-[0.15em] uppercase transition-colors ${isMembersPage
                    ? "text-[#1a1a1a] hover:text-[#6b7280]"
                    : "text-white hover:text-white/70"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
