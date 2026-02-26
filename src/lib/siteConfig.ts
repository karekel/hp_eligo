/** 外部URL・サイト全体設定 */
export const siteConfig = {
  siteName: "ELIGŌ",
  siteUrl: "https://eligo.example.com",
  description: "ELIGŌ — Pursue What's pure",

  /** OGP */
  ogImage: "/assets/og_image.png",

  /** 外部リンク */
  externalLinks: {
    vibeFinder: "https://doterra-diagnostic-zrws.vercel.app/quiz",
    membersOnly: "https://qa-doterra.vercel.app/",
    members: {
      shopUrl: "https://eligo.stores.jp/",
      botUrl: "https://qa-doterra.vercel.app/", // Same as membersOnly for now
    }
  },

  /** ナビゲーション */
  nav: [
    { label: "Philosophy", href: "/#philosophy" },
    { label: "About", href: "/#about" },
    { label: "Leaders", href: "/#leaders" },
    { label: "Vibe finder", href: "/#vibe-finder" },
    { label: "Intro", href: "/#intro" },
    { label: "Members only", href: "/members" },
    { label: "How to join", href: "/#how-to-join" },
  ],

  /** メンバーページ用ナビゲーション */
  membersNav: [
    { label: "Shop", href: "#eligo-shop" },
    { label: "Bot", href: "#eligo-bot" },
    { label: "Archive", href: "#zoom-archive" },
    { label: "Materials", href: "#materials" },
  ],
} as const;
