"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

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
        ? "bg-black/80 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      {/*
        items-start: ロゴ（大きい）とナビ（小さい）を上揃えにする
        → v1スクショと同様にナビが右上、ELIGŌが大きく左下に広がるレイアウト
      */}
      <div className="mx-auto flex max-w-[2500px] items-center justify-between px-12 py-4">
        {/* Logo: ELIGŌ only */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <span className="font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-none tracking-[0.1em] text-white">
            ELIGŌ
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-[clamp(0.85rem,1vw,1.05rem)] font-medium tracking-[0.15em] text-white uppercase transition-colors hover:text-white/70"
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
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-black/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-6 py-4 font-heading text-sm font-medium tracking-[0.15em] text-white uppercase transition-colors hover:text-white/70"
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
