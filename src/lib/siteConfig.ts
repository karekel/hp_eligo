/**
 * 本番URLのホスト名。Vercel 上ではビルド時に本番ドメインが自動で入る
 * （独自ドメインを追加した場合はそちらが優先される）。
 * それ以外（Cloudflare 版のビルド）では独自ドメインの eligo-oil.com を使う。
 */
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || "eligo-oil.com";

/** 外部URL・サイト全体設定 */
export const siteConfig = {
  siteName: "ELIGŌ",
  siteUrl: `https://${productionHost}`,
  title: "ELIGŌ（エリゴ）｜ドテラ（doTERRA）エリザベスのエッセンシャルオイルチーム",
  description:
    "ELIGŌ（エリゴ）は、ドテラ（doTERRA）プレジデンシャルダイヤモンドのエリザベス（Elizabeth）が主宰するエッセンシャルオイルのチームです。毎月のZoom勉強会、アロマタッチ、クラフトワークショップ、限定資料で、植物の力を暮らしとビジネスに活かす方法を学べます。",

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
    { label: "Blog", href: "/blog" },
  ],

  /** メンバーページ用ナビゲーション */
  membersNav: [
    { label: "Shop", href: "#eligo-shop" },
    { label: "Bot", href: "#eligo-bot" },
    { label: "Archive", href: "#zoom-archive" },
    { label: "Materials", href: "#materials" },
  ],
} as const;
