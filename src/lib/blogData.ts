/**
 * ブログ（ELIGŌ Oil Journal）の記事データ。
 * 現在はデザイン確認用のサンプル。記事本文は src/components/blog/articles/ にある。
 */

/** 公開前は true。検索エンジンに載せず、サイトマップにも含めない。2026-10-31 に公開（false） */
export const BLOG_DRAFT = false;

export const blogConfig = {
  name: "ELIGŌ Oil Journal",
  nameJp: "エッセンシャルオイルの使い方ガイド",
  description:
    "エッセンシャルオイルを、毎日の暮らしにどう取り入れるか。使い方・道具・保管のコツをまとめています。",
  elizabethInstagram: {
    url: "https://www.instagram.com/aroma_with_elizabeth/",
    handle: "@aroma_with_elizabeth",
  },
  /** 全記事共通の監修・ライター */
  author: {
    name: "チームELIGŌ",
    image: "/apple-touch-icon.png",
  },
};

export type BlogCategoryIcon = "leaf" | "drop" | "bottle" | "home" | "shield";

export type BlogCategory = {
  slug: string;
  name: string;
  en: string;
  description: string;
  icon: BlogCategoryIcon;
};

export const blogCategories: BlogCategory[] = [
  { slug: "beginner", name: "はじめての方へ", en: "First Steps", description: "エッセンシャルオイルの基本と選び方", icon: "leaf" },
  { slug: "how-to", name: "使い方・道具", en: "How to Use", description: "ディフューザーやアロマストーンの使い方", icon: "drop" },
  { slug: "oils", name: "オイル図鑑", en: "Oil Guide", description: "1本ずつ、香りの特徴と楽しみ方", icon: "bottle" },
  { slug: "lifestyle", name: "暮らし・クラフト", en: "Lifestyle", description: "お掃除や手作りアイテムに", icon: "home" },
  { slug: "care", name: "保管と注意点", en: "Safety", description: "安全に使うための確認ポイント", icon: "shield" },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  thumbnail: string;
  /** おすすめ記事として並べる順番 */
  recommendOrder?: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "doterra-drinkable",
    title: "ドテラのオイルはなぜ「飲める」と言われるの？食品として使える製品の見分け方と注意点",
    excerpt: "ドテラのオイルは、すべてが飲めるわけではありません。日本での製品の区分と、飲食物の香りづけに使うときに守りたいポイントを解説します。",
    category: "beginner",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/v1/whydoterrafocus.png",
    recommendOrder: 2,
  },
  {
    slug: "no-diffuser",
    title: "ディフューザーがなくても大丈夫！エッセンシャルオイルの香りを楽しむ4つの方法",
    excerpt: "ティッシュ、アロマストーン、マグカップ、手作りスプレー。身近な道具で今日から試せる方法を、手順と注意点つきで紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/ABOUT/Lifestyle & Craft.JPG",
    recommendOrder: 1,
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getCategory = (slug: string) => blogCategories.find((c) => c.slug === slug);
export const getPostsByCategory = (slug: string) => blogPosts.filter((p) => p.category === slug);
export const getRecommendedPosts = () =>
  blogPosts.filter((p) => p.recommendOrder).sort((a, b) => (a.recommendOrder ?? 0) - (b.recommendOrder ?? 0));
export const getRelatedPosts = (post: BlogPost, count = 3) =>
  [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, count);

/** "2026-10-30" → "2026.10.30" */
export const formatDate = (iso: string) => iso.replaceAll("-", ".");
