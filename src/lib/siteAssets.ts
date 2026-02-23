/**
 * 画像パス一元管理
 * 差し替え手順: /public/assets/ にファイルを置き、ここのパスを更新するだけ
 *
 * ※ マーク.pdf は PDF形式のため、ブラウザによっては <img> で表示されない場合があります。
 *    表示されない場合は PNG/SVG に変換して差し替えてください。
 */
export const siteAssets = {
  /**
   * 統一背景モード: true → 全セクションで bb.png を使用
   *                 false → セクションごとの背景画像を使用
   * 元に戻したい場合は false に変更するだけでOK
   */
  useUnifiedBackground: false,

  /** 統一背景画像 */
  unifiedBg: "/assets/%E8%83%8C%E6%99%AF/bb.png",

  /** ヘッダー・Aboutセクション用ロゴマーク（PDF） */


  /** トップセクション中下段メイン画像 */
  topMain: "/assets/ロゴ/トップメイン.png",
  logoMark: "/assets/Leaders/s.png",
  logo: "/assets/ロゴ/kc.png",
  headerLogo: "/assets/ロゴ/header_logo.png",
  eligoLogo: "/assets/ロゴ/eligo_logo.png",
  aboutMark: "/assets/ロゴ/about_mark.png",
  heroLavender: "/assets/背景/hero_lavender.jpg",


  /** セクション背景画像 */
  bg: {
    hero: "/assets/%E8%83%8C%E6%99%AF/1.png",
    about: "/assets/%E8%83%8C%E6%99%AF/2.png",
    leaders: "/assets/%E8%83%8C%E6%99%AF/3.png",
    vibe: "/assets/%E8%83%8C%E6%99%AF/4.png",
    intro: "/assets/%E8%83%8C%E6%99%AF/5.png",
    members: "/assets/%E8%83%8C%E6%99%AF/6.png",
    contact: "/assets/%E8%83%8C%E6%99%AF/7.png",
  },

  /** Leaders セクション写真（大きい順 → s, b, c, d, e, a） */
  leaders: [
    "/assets/Leaders/s.png",
    "/assets/Leaders/b.jpg",
    "/assets/Leaders/c.png",
    "/assets/Leaders/d.png",
    "/assets/Leaders/e.png",
    "/assets/Leaders/a.jpg",
  ],

  /** OGP画像 */
  ogImage: "/assets/og_image.png",

  /** About ELIGŌ セクション カード画像 (cards[0], [1], [2] に対応) */
  aboutCards: [
    "/assets/v1/whatiseligo%20focus.png",
    "/assets/v1/why%20doterra_full.png",
    "/assets/v1/ouractivities_focus.png",
  ],

  /** About ELIGŌ モーダル用フル画像 (cards[0], [1], [2] に対応) */
  aboutModalImages: [
    "/assets/v1/what%20is%20eligo_full.png",
    "/assets/v1/why%20doterra_full.png",
    "/assets/v1/our%20activities_full.png",
  ],
} as const;
