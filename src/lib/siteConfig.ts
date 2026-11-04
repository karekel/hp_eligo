/**
 * 本番URLのホスト名。Vercel 上ではビルド時に本番ドメインが自動で入る
 * （独自ドメインを追加した場合はそちらが優先される）。
 * それ以外（Cloudflare 版のビルド）では独自ドメインの eligo-oil.com を使う。
 */
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || "eligo-oil.com";

/**
 * HP のファビコン（グラデ背景。生成は scripts/generate-icons.mjs）。
 * Google 検索のアイコンはドメインに1つで、トップページの指定がブログを含む全ページに使われるため、URL は変えない。
 */
export const siteFavicons = [
  { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
  { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
  { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
  { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
];

/** ブログのブラウザタブのファビコン（黒背景） */
export const blogFavicons = [
  { url: "/blog-app/favicon-16.png", sizes: "16x16", type: "image/png" },
  { url: "/blog-app/favicon-32.png", sizes: "32x32", type: "image/png" },
  { url: "/blog-app/favicon-48.png", sizes: "48x48", type: "image/png" },
  { url: "/blog-app/icon-192.png", sizes: "192x192", type: "image/png" },
];

/** 外部URL・サイト全体設定 */
export const siteConfig = {
  siteName: "ELIGŌ",
  /** スマホのホーム画面でアイコンの下に出る名前。Android 用は public/manifest.webmanifest にも書く */
  homeScreenName: "ELIGŌサイト",
  siteUrl: `https://${productionHost}`,
  title: "ELIGŌ（エリゴ）｜エリザベスのドテラ（doTERRA）エッセンシャルオイルチーム",
  description:
    "ELIGŌ（エリゴ）は、ドテラ（doTERRA）プレジデンシャルダイヤモンドのエリザベス（Elizabeth）が主宰するエッセンシャルオイルのチームです。毎月のZoom勉強会、アロマタッチ、クラフトワークショップ、限定資料で、植物の力を暮らしに活かす方法を学べます。",

  /** OGP */
  ogImage: "/assets/og_image.jpg",

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
