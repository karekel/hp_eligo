/**
 * ブログ（ELIGŌ Oil Journal）の記事データ。
 * 現在はデザイン確認用のサンプル。記事本文は src/components/blog/articles/ にある。
 */

/** 公開前は true。検索エンジンに載せず、サイトマップにも含めない */
export const BLOG_DRAFT = true;

export const blogConfig = {
  name: "ELIGŌ Oil Journal",
  nameJp: "エッセンシャルオイルの使い方ガイド",
  description:
    "ドテラ（dōTERRA）のエッセンシャルオイルを、毎日の暮らしにどう取り入れるか。ELIGŌチームが講座や体験会で受けてきた質問をもとに、使い方・道具・保管のコツをまとめています。",
  elizabethInstagram: {
    url: "https://www.instagram.com/aroma_with_elizabeth/",
    handle: "@aroma_with_elizabeth",
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
  /** leadersData の slug */
  author: string;
  /** 人気記事ランキングの順位（アクセス解析を入れるまでは手動） */
  popularRank?: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "doterra-drinkable",
    title: "ドテラのオイルはなぜ「飲める」と言われるの？食品として使える製品の見分け方と注意点",
    excerpt: "ドテラのオイルは、すべてが飲めるわけではありません。日本での製品の区分と、飲食物の香りづけに使うときに守りたいポイントを解説します。",
    category: "beginner",
    publishedAt: "2026-10-30",
    thumbnail: "/assets/v1/whydoterrafocus.png",
    author: "leader-s",
  },
  {
    slug: "no-diffuser",
    title: "ディフューザーがなくても大丈夫！エッセンシャルオイルの香りを楽しむ4つの方法",
    excerpt: "ティッシュ、アロマストーン、マグカップ、手作りスプレー。身近な道具で今日から試せる方法を、手順と注意点つきで紹介します。",
    category: "how-to",
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-30",
    thumbnail: "/assets/ABOUT/Lifestyle & Craft.JPG",
    author: "leader-s",
    popularRank: 1,
  },
  {
    slug: "lavender",
    title: "ラベンダーの香りの特徴と、暮らしでの楽しみ方",
    excerpt: "最初の1本に選ばれることの多いラベンダー。香りの特徴、基本情報、相性のよい組み合わせをまとめました。",
    category: "oils",
    publishedAt: "2026-10-25",
    thumbnail: "/assets/背景/top backg.png",
    author: "leader-s",
    popularRank: 2,
  },
  {
    slug: "essential-oil-basics",
    title: "エッセンシャルオイルとは？アロマオイルとの違いと選び方",
    excerpt: "「精油」「アロマオイル」「エッセンシャルオイル」は何が違う？ラベルのどこを見ればいいのかを、はじめての方向けに解説します。",
    category: "beginner",
    publishedAt: "2026-10-22",
    thumbnail: "/assets/Leaders/saori/LINE_NOTE_260311_3.jpg",
    author: "leader-s",
    popularRank: 3,
  },
  {
    slug: "doterra-first-steps",
    title: "ドテラのオイルを手にしたら、最初に確認したい3つのこと",
    excerpt: "ラベルの表示、保管場所、最初に試したい使い方。キットが届いた日に読んでほしい基本のチェックリストです。",
    category: "beginner",
    publishedAt: "2026-10-19",
    thumbnail: "/assets/Leaders/IMG_8543.JPG",
    author: "leader-s",
    popularRank: 4,
  },
  {
    slug: "bath-bomb",
    title: "手作りバスボムの作り方｜香りの選び方のコツ",
    excerpt: "ワークショップでも人気のバスボムづくり。材料、手順、香りを選ぶときのポイントを写真つきで紹介します。",
    category: "lifestyle",
    publishedAt: "2026-10-16",
    thumbnail: "/assets/ABOUT/Lifestyle & Craft2.jpg",
    author: "leader-s",
    popularRank: 5,
  },
  {
    slug: "storage",
    title: "精油の保管方法と、使用期限の目安",
    excerpt: "直射日光・高温・湿気を避けるのが基本。開封後どのくらいで使い切ればいいのか、保管場所の選び方とあわせて解説します。",
    category: "care",
    publishedAt: "2026-10-13",
    thumbnail: "/assets/ABOUT/アロマタッチ.JPG",
    author: "leader-s",
  },
  {
    slug: "lemon",
    title: "レモンの香りの特徴と、キッチンまわりでの楽しみ方",
    excerpt: "すっきり明るい柑橘の香り。お掃除やキッチンでの使い方と、柑橘系ならではの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-10-10",
    thumbnail: "/assets/Leaders/a.jpg",
    author: "leader-s",
  },
  {
    slug: "aroma-stone",
    title: "アロマストーンの使い方と、香りを替えるときのポイント",
    excerpt: "置くだけで香るアロマストーン。滴数の目安、置き場所、別の香りに替えたいときのお手入れ方法をまとめました。",
    category: "how-to",
    publishedAt: "2026-10-07",
    thumbnail: "/assets/Leaders/saori/LINE_NOTE_260311_2.jpg",
    author: "leader-s",
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getCategory = (slug: string) => blogCategories.find((c) => c.slug === slug);
export const getPostsByCategory = (slug: string) => blogPosts.filter((p) => p.category === slug);
export const getPopularPosts = () =>
  blogPosts.filter((p) => p.popularRank).sort((a, b) => (a.popularRank ?? 0) - (b.popularRank ?? 0));
export const getRelatedPosts = (post: BlogPost, count = 3) =>
  [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, count);

/** "2026-10-30" → "2026.10.30" */
export const formatDate = (iso: string) => iso.replaceAll("-", ".");
