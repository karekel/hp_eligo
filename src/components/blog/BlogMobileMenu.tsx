"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MenuLink = { label: string; href: string };

/* スマホ用のハンバーガーメニュー。PC では BlogHeader の横並びメニューを使う */
export function BlogMobileMenu({
  links,
  categories,
  siteLinks,
  instagram,
}: {
  links: MenuLink[];
  categories: MenuLink[];
  siteLinks: MenuLink[];
  instagram: MenuLink;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ページを移ったら閉じる
  useEffect(() => setOpen(false), [pathname]);

  const close = () => setOpen(false);
  const bar = "block h-px w-[22px] bg-blog-ink transition-transform duration-200";

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        aria-controls="blog-mobile-menu"
        className="flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
      >
        <span className={`${bar} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`${bar} ${open ? "opacity-0" : ""}`} />
        <span className={`${bar} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <nav
          id="blog-mobile-menu"
          aria-label="ブログメニュー"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-black/5 bg-white shadow-md"
        >
          <ul className="px-6 py-2">
            {links.map((item) => (
              <li key={item.href} className="border-b border-blog-accent/10">
                <Link href={item.href} prefetch={false} onClick={close} className="block py-4 font-serif-jp text-[15px] tracking-[0.08em] text-[#2b2b2b]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-b border-blog-accent/10 py-4">
              <span className="font-script text-[17px] leading-none text-blog-accent">Category</span>
              <ul className="mt-2">
                {categories.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} prefetch={false} onClick={close} className="block py-2.5 pl-3 text-[14px] tracking-[0.06em] text-[#555]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {siteLinks.map((item) => (
              <li key={item.href} className="border-b border-blog-accent/10">
                <Link href={item.href} prefetch={false} onClick={close} className="block py-4 font-serif-jp text-[15px] tracking-[0.08em] text-[#2b2b2b]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                data-track="menu_instagram"
                data-track-group="blog"
                className="block py-4 font-serif-jp text-[15px] tracking-[0.08em] text-[#2b2b2b]"
              >
                {instagram.label}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
