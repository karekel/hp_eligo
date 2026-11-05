/**
 * ブログ（ELIGŌ Oil Journal）の記事データ。
 * 現在はデザイン確認用のサンプル。記事本文は src/components/blog/articles/ にある。
 */

/** 公開前は true。検索エンジンに載せず、サイトマップにも含めない。2026-10-31 に公開（false） */
export const BLOG_DRAFT = false;

export const blogConfig = {
  name: "ELIGŌ Oil Journal",
  /** スマホのホーム画面でアイコンの下に出る名前。Android 用は manifest.webmanifest にも書く */
  homeScreenName: "ELIGŌブログ",
  nameJp: "エッセンシャルオイルやアロマオイルの使い方ガイド",
  /** 検索結果に出るブログトップのタイトル */
  searchTitle: "ELIGŌ（エリゴ）｜ドテラのエッセンシャルオイルやアロマオイルの使い方ガイド",
  /** トップの画像の上に出す一文 */
  heroLead: "ドテラのオイルで学ぶ、エッセンシャルオイルやアロマオイルの使い方",
  description: "ドテラのオイルを中心に、エッセンシャルオイルやアロマオイルの使い方・道具・保管のコツをまとめたブログです。",
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
  /** 検索結果に出るタイトル */
  searchTitle: string;
  /** カテゴリページの導入文。検索結果の説明文にも使う */
  intro: string;
  icon: BlogCategoryIcon;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "beginner",
    name: "はじめての方へ",
    en: "First Steps",
    searchTitle: "エッセンシャルオイルやアロマオイルの基本と選び方",
    description: "エッセンシャルオイルやアロマオイルの基本と選び方",
    intro: "エッセンシャルオイルやアロマオイルの違い、精油の作られ方、ラベルの見方、メーカーの選び方など、はじめる前に知っておきたい基本をまとめました。ドテラのオイルの種類や区分の説明もこちらです。",
    icon: "leaf",
  },
  {
    slug: "how-to",
    name: "使い方・道具",
    en: "How to Use",
    searchTitle: "エッセンシャルオイルやアロマオイルの使い方と道具",
    description: "ディフューザーやアロマストーンの使い方",
    intro: "エッセンシャルオイルやアロマオイルの使い方を、ディフューザーやアロマストーン、お風呂、車の中など、場所や道具ごとに紹介します。滴数の目安や、キャリアオイルでの薄め方もこのカテゴリーにあります。",
    icon: "drop",
  },
  {
    slug: "oils",
    name: "ドテラのオイル図鑑",
    en: "Oil Guide",
    searchTitle: "ドテラのオイル図鑑｜香りの特徴と使い方",
    description: "1本ずつ、香りの特徴と楽しみ方",
    intro: "ドテラのオイルを1本ずつ、香りの特徴と使い方、相性のよい香り、使うときの注意点とあわせて紹介します。香りの系統ごとに並べているので、気になる香りから読んでください。",
    icon: "bottle",
  },
  {
    slug: "lifestyle",
    name: "暮らし・クラフト",
    en: "Lifestyle",
    searchTitle: "エッセンシャルオイルやアロマオイルの手作りレシピ",
    description: "お掃除や手作りアイテムに",
    intro: "掃除や洗濯のスプレー、バスボム、石けん、料理の香りづけなど、エッセンシャルオイルやアロマオイルを使って暮らしの中で作るレシピを集めました。分量と手順に加えて、ドテラのオイルで作るときの確認点も載せています。",
    icon: "home",
  },
  {
    slug: "care",
    name: "保管と注意点",
    en: "Safety",
    searchTitle: "エッセンシャルオイルやアロマオイルの保管と注意点",
    description: "安全に使うための確認ポイント",
    intro: "エッセンシャルオイルやアロマオイルの保管方法と使用期限、肌につける前の確認、子どもやペットのいる家での注意点、捨て方をまとめました。使い始める前に確認してください。",
    icon: "shield",
  },
];

/** オイル図鑑の香りの系統 */
export const oilFamilies = ["フローラル（花）", "シトラス（柑橘）", "ハーブ（葉と草）", "樹木・樹脂（木）", "ブレンド"] as const;

export type OilGuideEntry = {
  slug: string;
  name: string;
  family: (typeof oilFamilies)[number];
  /** 製品ページの香りの表示 */
  scent: string;
  /** 製品ページの「塗・香・食」の表示 */
  label: string;
};

/** オイル図鑑の一覧（/blog/oil-guide）とカテゴリページの小分類。値は各記事の OilProfile に合わせる */
export const oilGuide: OilGuideEntry[] = [
  { slug: "lavender", name: "ラベンダー", family: "フローラル（花）", scent: "パウダリー、フローラル、ライト", label: "15mLは塗・香" },
  { slug: "geranium", name: "ゼラニウム", family: "フローラル（花）", scent: "ハーベイシャス、グリーン、フローラル、スイート、ドライ", label: "15mLは塗・香" },
  { slug: "lemon", name: "レモン", family: "シトラス（柑橘）", scent: "クリーン、フレッシュ、シトラス、ブライト", label: "15mLは香・食" },
  { slug: "orange", name: "オレンジ", family: "シトラス（柑橘）", scent: "スイート、フレッシュ、シトラス", label: "15mLは香・食、5mLは塗・香" },
  { slug: "bergamot", name: "ベルガモット", family: "シトラス（柑橘）", scent: "シトラス、スパイシー、わずかにフローラル", label: "15mLは香・食" },
  { slug: "grapefruit", name: "グレープフルーツ", family: "シトラス（柑橘）", scent: "シトラス、フローラル、フルーティー", label: "15mLは香・食" },
  { slug: "peppermint", name: "ペパーミント", family: "ハーブ（葉と草）", scent: "ミンティー、フレッシュ、ハーベイシャス", label: "15mLは香・食、5mLは塗・香" },
  { slug: "tea-tree", name: "ティーツリー", family: "ハーブ（葉と草）", scent: "ハーベイシャス、グリーン、レザリー", label: "15mLは塗・香" },
  { slug: "eucalyptus", name: "ユーカリプタス", family: "ハーブ（葉と草）", scent: "香りの表示欄なし", label: "15mLは香のみ" },
  { slug: "rosemary", name: "ローズマリー", family: "ハーブ（葉と草）", scent: "カンファー、ハーベイシャス", label: "15mLは香・食" },
  { slug: "lemongrass", name: "レモングラス", family: "ハーブ（葉と草）", scent: "シトラス、ハーベイシャス、スモーキー", label: "15mLは香・食" },
  { slug: "marjoram", name: "マジョラム", family: "ハーブ（葉と草）", scent: "ウォーム、ハーベイシャス、ウッディー", label: "15mLは香・食" },
  { slug: "frankincense", name: "フランキンセンス", family: "樹木・樹脂（木）", scent: "ウォーム、スパイシー、クリーン", label: "15mLは塗・香" },
  { slug: "hinoki", name: "ヒノキ", family: "樹木・樹脂（木）", scent: "ウッディー、エアリー、フレッシュ", label: "5mLは塗・香" },
  { slug: "cypress", name: "サイプレス", family: "樹木・樹脂（木）", scent: "クリーン、フレッシュ、ウッディー、ハーベイシャス", label: "15mLは塗・香" },
  { slug: "on-guard", name: "オンガード", family: "ブレンド", scent: "ウォーム、スパイシー、カンファー、ウッディー", label: "15mLは香・食" },
  { slug: "serenity", name: "ドテラセレニティー", family: "ブレンド", scent: "ウォーム、フローラル、ハーバル", label: "15mLは塗・香" },
  { slug: "balance", name: "ドテラバランス", family: "ブレンド", scent: "エアリー、フレッシュ、スイート、ウッディー", label: "15mLは塗・香" },
];

/** ブログトップの「はじめに読みたい記事」に並べるリンク */
export const starterGuideLinks = [
  { title: "アロマオイルとの違い", text: "名前が似ていても、中身が違うことがあります", href: "/blog/what-is-essential-oil" },
  { title: "基本の使い方", text: "香り、肌、お風呂、掃除の使い道と滴数の目安", href: "/blog/how-to-use-aroma-oils" },
  { title: "ディフューザーの選び方", text: "超音波式の特徴と毎日のお手入れ", href: "/blog/diffuser-guide" },
  { title: "シーン別の選び方", text: "仕事、家事、リラックスタイムのシーン別に", href: "/blog/oils-by-scene" },
  { title: "香りの種類", text: "ドテラのオイル図鑑の一覧から、香りの系統で探す", href: "/blog/oil-guide" },
  { title: "メーカーの選び方", text: "比べるときに見る基準を整理", href: "/blog/choosing-oil-brands" },
  { title: "ドテラのオイルの種類", text: "シングル、ブレンド、サイズの違い", href: "/blog/doterra-oil-lineup" },
  { title: "保管方法", text: "保管する場所と、使用期限の目安", href: "/blog/oil-storage" },
  { title: "捨て方", text: "残った中身とビンの処分方法", href: "/blog/oil-disposal" },
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
    title: "ドテラのオイルは飲める？すべてではありません｜飲めるオイル一覧",
    excerpt: "ドテラのオイルは、すべてが飲めるわけではありません。「食」の表示があるオイルの一覧、ティーツリーやオンガードの表示、アロマを飲む前に確認したいことと、ドテラと協会の見解をまとめました。",
    category: "beginner",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/doterra-drinkable-f0ec9cf9.jpg",
    recommendOrder: 2,
  },
  {
    slug: "no-diffuser",
    title: "ディフューザーなしで香りを楽しむ4つの方法｜道具なしの使い方",
    excerpt: "ディフューザーがなくても、エッセンシャルオイルやアロマオイルの香りは楽しめます。ティッシュ、アロマストーン、マグカップのお湯、手作りスプレーの4つの方法を、滴数と手順つきで紹介します。ドテラのオイルの表示の見方もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/no-diffuser-77362b8b.jpg",
  },
  // ---- 41本 ここから ----
  {
    slug: "diffuser-guide",
    title: "アロマディフューザーの選び方｜種類の違いと清潔に使うコツ",
    excerpt: "アロマディフューザーの種類と、選ぶときに確認したい5つのことをまとめました。超音波式の基本の使い方と、水の入れ替えや乾かし方など清潔に使うコツ、エッセンシャルオイルやアロマオイルを入れる前に確かめることも紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/diffuser-guide-2cb4b2f5.jpg",
  },
  {
    slug: "diffuser-blends",
    title: "ディフューザーのレシピ｜朝・昼・夜で楽しむブレンド例と滴数",
    excerpt: "朝、昼、夜に試せるディフューザーのレシピを、ドテラ ラルツディフューザーの目安に収まる合計5滴か6滴の分量で6つ紹介します。自分で組み合わせを作るときの順番と、香りの系統ごとの相性の早見表もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/diffuser-blends-5c0d53fe.jpg",
  },
  {
    slug: "drop-count",
    title: "1滴は何mL？ボトルの滴数とオイルが出にくいときの対処法",
    excerpt: "1滴は約0.05mL、20滴で1mLが計算の目安です。3mL、5mL、15mLのボトルに入っている滴数の考え方と、ドテラ ラルツディフューザーなど使い方ごとの滴数の目安、1滴ずつ落とす手順、オイルが出にくいときに試すことをまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/drop-count-f86af31f.jpg",
  },
  {
    slug: "carrier-oil-dilution",
    title: "キャリアオイルの選び方と薄め方｜濃度1%は何滴？",
    excerpt: "エッセンシャルオイルを肌につける前に知っておきたい、ドテラ ココナッツオイルなどキャリアオイルの選び方と薄め方を紹介します。濃度1%が何滴になるかを計算式と早見表で示し、注意点もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/carrier-oil-dilution-03e39054.jpg",
  },
  {
    slug: "oil-containers",
    title: "オイルの容器はガラスが基本？プラスチックを避ける理由",
    excerpt: "ドテラも使う遮光性のガラス容器が、オイルの保存に向く理由と、プラスチック容器についてわかっていること、わかっていないことを説明します。スプレーなど用途別のボトルの選び方も紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/oil-containers-4ddcc6c2.jpg",
  },
  {
    slug: "bath-oils",
    title: "お風呂での使い方｜エッセンシャルオイルやアロマオイルの入れ方",
    excerpt: "エッセンシャルオイルやアロマオイルは水に溶けにくいので、湯船に入れる前に知っておきたいことがあります。無水エタノールや天然塩を使う入れ方と滴数の目安、ドテラセレニティーを使う例を紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/bath-oils-44a363f7.jpg",
  },
  {
    slug: "foot-self-massage",
    title: "足裏セルフマッサージのやり方｜おやすみ前の手順と力加減",
    excerpt: "おやすみ前に足裏をセルフマッサージする手順を、力加減のコツと一緒に紹介します。1回分のオイルは、小さじ1杯のキャリアオイルに1滴から。足に使うオイルの選び方と、ドテラセレニティーを使う例もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/foot-self-massage-de0d47c6.jpg",
  },
  {
    slug: "aromatouch-technique",
    title: "ドテラのアロマタッチ テクニック｜8本のオイルの順番とやり方",
    excerpt: "アロマタッチ テクニックは、8本のオイルと手のタッチを組み合わせるドテラ独自の技法です。オイルの順番と、背中から足へ進む全体の流れ、始める前に確認したいことと、公式の動画での学び方を紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/aromatouch-technique-2172ead3.jpg",
  },
  {
    slug: "aromatouch-hand",
    title: "ドテラのアロマタッチ ハンドテクニック｜家族と楽しむ手順",
    excerpt: "ドテラのアロマタッチ ハンドテクニックは、手に触れるだけで始められるやさしいタッチの方法です。オイルの選び方と薄め方、4つのステップ、家族と楽しむときの注意点を紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/aromatouch-hand-46bf98b6.jpg",
  },
  {
    slug: "blend-basics",
    title: "精油のブレンドの基本｜ノートと相性で香りを組み立てる",
    excerpt: "精油のノート（トップ、ミドル、ベース）の違いと、ドテラのレシピの配分をもとに、合計5滴や10滴で作れる目安を説明します。相性のよいブレンド例と、思った香りにならないときの見直し方も紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/blend-basics-2062515a.jpg",
  },
  {
    slug: "oils-by-scene",
    title: "シーン別の香りの選び方｜仕事、家事、リラックスタイムに",
    excerpt: "仕事、家事、リラックスタイムの3つの場面に合わせて、エッセンシャルオイルやアロマオイルの香りの選び方を紹介します。ドテラのオイルを例にした組み合わせと滴数、まわりの人への配慮もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/oils-by-scene-ef520ddb.jpg",
  },
  {
    slug: "lavender",
    title: "ドテラ ラベンダーの使い方｜寝室、リネン、バスタイムでの楽しみ方",
    excerpt: "ドテラのラベンダーは、おしろいのような甘さをもつやわらかな花の香りのオイルです。寝室、リネン、バスタイムで楽しむ方法を、分量とブレンド例、使うときの注意点つきで紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/lavender-2d8994be.jpg",
  },
  {
    slug: "lemon",
    title: "ドテラ レモンの使い方｜キッチンまわりの楽しみ方と香りの特徴",
    excerpt: "ドテラのレモンは、皮をむいた瞬間のような明るい香りのオイルです。拭き掃除や重曹の香りびん、料理の香りづけなど、キッチンまわりで試せる楽しみ方と、使うときの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/lemon.jpg",
  },
  {
    slug: "peppermint",
    title: "ドテラ ペパーミントの使い方｜15mLと5mLで違う表示と香りの特徴",
    excerpt: "ドテラのペパーミントは、ハーブのようなスーッとする香りと清涼感が特徴のオイルです。デスクや外出先で香りを楽しむ量の目安と、15mLと5mLで異なる表示、使うときの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/peppermint.jpg",
  },
  {
    slug: "frankincense",
    title: "ドテラ フランキンセンスとは？樹脂から生まれる香りと使い方",
    excerpt: "ドテラのフランキンセンスは、木の樹脂から生まれる温かくスパイシーな香りのオイルです。樹脂がオイルになるまでの流れと、静かな時間に楽しむ方法、ハンドオイルの作り方を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/frankincense-d4870de9.jpg",
  },
  {
    slug: "tea-tree",
    title: "ドテラ ティーツリーの使い方｜お掃除に香りを添える3つの方法",
    excerpt: "ドテラのティーツリーは、青い葉にかすかな渋みが重なる香りのオイルです。掃除の仕上げに香りを添える3つの方法と、スプレーの分量、塩素系洗浄剤と一緒に使わないなどの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/tea-tree.jpg",
  },
  {
    slug: "orange",
    title: "ドテラ オレンジの使い方｜リビングや車で楽しむ甘く明るい香り",
    excerpt: "ドテラのオレンジは、みかんを思わせる甘く明るい香りのオイルです。リビング、車の中、飲み物で楽しむ方法と、15mLと5mLで異なる表示、柑橘のオイルで気をつけたいことを紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/orange.jpg",
  },
  {
    slug: "eucalyptus",
    title: "ドテラ ユーカリプタスの使い方｜肌につけずに楽しむ森の香り",
    excerpt: "ドテラのユーカリプタスは、森の空気を思わせる清涼感のある香りのオイルです。2026年3月の区分の変更と、肌につけずにシャワーやディフューザー、拭き掃除で楽しむ方法を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/eucalyptus.jpg",
  },
  {
    slug: "hinoki",
    title: "ドテラ ヒノキの使い方｜和室や玄関で楽しむ香りの特徴",
    excerpt: "ドテラのヒノキのオイルの香りの特徴を、木材と葉の違いとあわせて紹介します。和室や玄関、床の仕上げ、浴室での楽しみ方と、相性のよい香り、使うときの注意点もまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/hinoki.jpg",
  },
  {
    slug: "geranium",
    title: "ドテラ ゼラニウムの使い方｜スキンケアの時間に香りを添える",
    excerpt: "ドテラのゼラニウムの甘くさわやかな香りの特徴と、スキンケアの時間に香りを添える方法を紹介します。乳液やオイルに混ぜるときの量の目安と、肌に使う前に確認したいこともまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/geranium.jpg",
  },
  {
    slug: "bergamot",
    title: "ドテラ ベルガモットの使い方｜紅茶を思わせる香りと光毒性の注意",
    excerpt: "紅茶を思わせるドテラのベルガモットの香りの特徴と、部屋や紅茶の時間での楽しみ方を紹介します。光毒性や製品ごとの表示の違いなど、柑橘オイルで気をつけたいこともまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/bergamot.jpg",
  },
  {
    slug: "on-guard",
    title: "ドテラ オンガードとは？スパイス香るブレンドの使い方",
    excerpt: "オンガードは、オレンジとスパイスが重なるドテラのブレンドオイルです。内容と香りの特徴、部屋の香りや掃除の仕上げ、飲食の香りづけでの使い方と、注意点をまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/on-guard.jpg",
  },
  {
    slug: "serenity",
    title: "ドテラセレニティーの使い方｜おやすみ前に楽しむ花とバニラの香り",
    excerpt: "ドテラセレニティーは、花とバニラの甘さが重なるブレンドオイルです。内容と香りの特徴、寝室やティッシュ、足裏で楽しむおやすみ前の使い方と、相性のよい香り、注意点をまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/serenity.jpg",
  },
  {
    slug: "balance",
    title: "ドテラバランスの使い方｜朝に楽しむ木の香りのブレンド",
    excerpt: "ドテラバランスは、ココナッツオイルを含む木の香りのブレンドオイルです。内容と香りの特徴、足裏や手首、車内で楽しむ朝の使い方と、相性のよい香り、注意点をまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/balance.jpg",
  },
  {
    slug: "bath-bomb",
    title: "手作りバスボムの作り方｜ドテラのオイルで作る香りの選び方",
    excerpt: "重曹とクエン酸で作るバスボムの分量と手順を、1回分のレシピで紹介します。オイルは合計5滴までという目安と、ドテラのオイルで作るときの香りの選び方、肌に触れるものとして守りたい点もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/bath-bomb-ef7a377a.jpg",
  },
  {
    slug: "aroma-lip",
    title: "アロマリップの作り方｜自分だけの色と香りを選ぶ口紅クラフト",
    excerpt: "蜜蝋とシアバターで作る口紅クラフトの分量と手順を紹介します。マイカでの色の決め方に加えて、唇に使うドテラのオイルの選び方と濃度、口に入る可能性への注意も計算つきで説明します。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/aroma-lip-d31e6af0.jpg",
  },
  {
    slug: "handmade-cream",
    title: "手作りクリームの作り方｜オイルで香りをつける基本レシピ",
    excerpt: "ドテラのレシピから、ローションに1滴混ぜる方法と、ミツロウで固める方法の2つを紹介します。どちらも濃度は約0.5%で、香りの替え方と手作りコスメで守りたい点もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/handmade-cream-d602a9b1.jpg",
  },
  {
    slug: "roll-on",
    title: "ロールオンアロマの作り方｜ドテラのオイルで持ち歩くブレンド",
    excerpt: "10mLのボトルで作るロールオンの手順を、オイルは合計1〜2滴という目安とともに紹介します。ドテラのオイル2種類で作る香りの組み合わせと、持ち歩くときに気をつけたい点もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/roll-on-39bcedc7.jpg",
  },
  {
    slug: "gem-soap",
    title: "宝石みたいな石けんの作り方｜親子で楽しむアロマクラフト",
    excerpt: "溶かして固める素地で作る、3色の宝石のような石けんの手順を紹介します。親子で作るときの役割の分け方と、使う人に合わせたドテラのオイルの選び方と量、守りたい注意点もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/gem-soap-3a7e06f6.jpg",
  },
  {
    slug: "natural-perfume",
    title: "精油で作る香水の作り方と、市販の香水との違い",
    excerpt: "精油で香水を手作りする方法を紹介します。トップ、ミドル、ベースの組み立て方と、市販の香水との濃度の違い、肌につける香りと紙や小物で楽しむ香りの2つのレシピを、ドテラのオイルで作る例とあわせて説明します。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/natural-perfume-d7efd7ae.jpg",
  },
  {
    slug: "outdoor-spray",
    title: "アウトドアスプレーの作り方｜外遊びに持っていく香りのレシピ",
    excerpt: "リュックや帽子の外側に香りを添える、50mLのスプレーの作り方を紹介します。肌につけない使い方とドテラのオイルで作る香りの組み合わせ、外に持ち出すときの火気と高温の注意もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/outdoor-spray-ac97709a.jpg",
  },
  {
    slug: "cleaning-spray",
    title: "掃除スプレーの作り方｜酢とドテラのレモンで作る基本レシピ",
    excerpt: "酢と水にドテラのレモンを加える掃除スプレーの基本の分量と手順を紹介します。酢のにおいが苦手なときのクエン酸のレシピと、塩素系の製品と一緒に使わないための注意点も説明します。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/cleaning-spray-fb051ece.jpg",
  },
  {
    slug: "laundry-oils",
    title: "ドテラのオイルで作る柔軟剤スプレー｜洗濯とアイロンの香りづけ",
    excerpt: "ドテラのオイルで作る柔軟剤スプレーとすすぎに入れる柔軟剤の作り方、アイロンがけの香りづけを紹介します。オイルを使った布は乾燥機にかけないなど、洗濯の前に知りたい約束もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/laundry-oils-9d904e9b.jpg",
  },
  {
    slug: "potpourri",
    title: "ポプリの作り方｜スパイスと柑橘で作る季節の香り",
    excerpt: "オレンジの皮とスパイスにオイルを数滴足して作る、ポプリの手順を紹介します。季節で変える香りの組み合わせとドテラのレシピ、子どもやペット、火のまわりで気をつけたいこともまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/potpourri-c06e6567.jpg",
  },
  {
    slug: "aromatic-table",
    title: "オイルで香りづけする料理｜アロマティックテーブルの手順",
    excerpt: "ドテラの食品添加物の表示がある製品で、料理に香りを添える手順を紹介します。日本アロマ環境協会が精油の飲用や食品との摂取をすすめていないことも、あわせてまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/aromatic-table-02791938.jpg",
  },
  {
    slug: "aroma-sausage",
    title: "手作りアロマソーセージの作り方｜ハーブの香りを楽しむレシピ",
    excerpt: "豚ひき肉400gで作る約16個分のソーセージの手順を紹介します。使えるドテラのオイルの範囲と日本アロマ環境協会の立場、中心部75℃で1分以上を確かめる加熱の方法もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-02",
    thumbnail: "/assets/blog/aroma-sausage-aee020b7.jpg",
  },
  {
    slug: "what-is-essential-oil",
    title: "エッセンシャルオイル（精油）とは？読み方とアロマオイルとの違い",
    excerpt: "エッセンシャルオイルは精油（せいゆ）とも呼ばれる、植物から抽出した揮発性の芳香物質です。「アロマオイル」との違いと、買うときにラベルで確かめたい項目を、ドテラのオイルも例にまとめました。",
    category: "beginner",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/what-is-essential-oil-41d31cdc.jpg",
  },
  {
    slug: "co-impact-sourcing",
    title: "コ・インパクトソーシングとは？オイルの産地と生産者を支える仕組み",
    excerpt: "コ・インパクトソーシングは、ドテラの原料調達の取り組みです。定義と生産者を支える仕組み、産地の例を紹介し、製品ページや Source To You で確かめる方法もまとめました。",
    category: "beginner",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/co-impact-sourcing-6e40f404.jpg",
  },
  {
    slug: "oil-storage",
    title: "精油とドテラのオイルの保管方法｜開封後の使用期限と冷蔵庫",
    excerpt: "精油はふたを閉めて立て、冷暗所に置くのが基本です。ドテラが案内する保管方法と、開封後1年という日本アロマ環境協会の目安、冷蔵庫の扱い、手作りしたものを使い切る目安をまとめました。",
    category: "care",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/oil-storage-604b634f.jpg",
  },
  {
    slug: "kids-safety",
    title: "子どもとエッセンシャルオイル｜年齢に合わせて確認したい注意点",
    excerpt: "ドテラの見解と、3歳未満は芳香浴以外を行わないなどの日本アロマ環境協会の年齢別の目安を紹介します。誤飲を防ぐ置き場所と、飲み込んだときや目に入ったときの対応も順番にまとめました。",
    category: "care",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/kids-safety-372352c8.jpg",
  },
  {
    slug: "pets-safety",
    title: "精油と猫・犬の注意点｜ペットのいる家で守りたい香りの距離",
    excerpt: "精油は猫や犬に大丈夫なのか。日本アロマ環境協会は、ペットのいる空間での使用を避けるよう案内しています。香りの距離のとり方と、置き場所、様子が変わったときの対応、ドテラのオイルの場合の考え方をまとめました。",
    category: "care",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/pets-safety-3a44416d.jpg",
  },
  // ---- 41本 ここまで ----
  // ---- 検索KW対応 第2弾（2026-11-01） ここから ----
  {
    slug: "oil-disposal",
    title: "エッセンシャルオイルやアロマオイルの捨て方｜中身と瓶の処分",
    excerpt: "使い切れなかったエッセンシャルオイルの中身は、排水に流さず紙に吸わせて捨てます。ビンとキャップの分け方、自治体で区分が変わる例、ドテラのオイルの場合、日本アロマ環境協会の精油ビン回収もまとめました。",
    category: "care",
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/oil-disposal-fb47aa75.jpg",
  },
  {
    slug: "how-oils-are-made",
    title: "精油の作り方｜抽出方法と、自宅で作れるかの答え",
    excerpt: "水蒸気蒸留法や圧搾法など、エッセンシャルオイルの抽出方法と、ドテラの産地の例をもとに収穫から蒸留までの流れをまとめました。自宅で簡単に作れるのかという疑問にも答えます。",
    category: "beginner",
    publishedAt: "2026-11-01",
    thumbnail: "/assets/blog/how-oils-are-made-97759019.jpg",
  },
  {
    slug: "oils-in-car",
    title: "車でエッセンシャルオイルを楽しむ方法｜アロマストーンとクリップ",
    excerpt: "エッセンシャルオイルやアロマオイルを車で楽しむ4つの方法を、ドテラのオイルの使い方も交えて、アロマストーン、エアコン吹き出し口のクリップ、ティッシュ、小型ディフューザーの順に手順と滴数つきで紹介します。車内の高温や内装への付着など、車ならではの注意点もまとめました。",
    category: "how-to",
    publishedAt: "2026-11-01",
    thumbnail: "/assets/blog/oils-in-car-9510ae05.jpg",
  },
  {
    slug: "oil-organizing",
    title: "エッセンシャルオイルの収納アイデア｜使いやすい並べ方とケース",
    excerpt: "エッセンシャルオイルやアロマオイルの収納は、ドテラが案内する保管の注意もふまえ、光・熱・湿気を避けて立てて置く条件から考えます。香りの系統別や用途別の並べ方、木箱や仕切りつきボックスなどケースの選び方、置かない場所と使い切る工夫をまとめました。",
    category: "care",
    publishedAt: "2026-11-01",
    thumbnail: "/assets/blog/oil-organizing-54c4a1d0.jpg",
  },
  {
    slug: "reading-labels",
    title: "エッセンシャルオイルのラベルの見方｜学名・抽出部位・区分の読み方",
    excerpt: "ドテラのオイルを例に、精油のラベルに書かれた品名、学名、抽出部位、原産国、内容量、注意表示の読み方を項目ごとに整理します。日本の製品で大切な区分と成分名の見方、日本アロマ環境協会の表示基準もまとめました。",
    category: "beginner",
    publishedAt: "2026-11-01",
    thumbnail: "/assets/blog/reading-labels-709c46a6.jpg",
  },
  {
    slug: "doterra-oil-lineup",
    title: "ドテラの製品一覧（2026年11月最新）｜オイル、キット、コレクション",
    excerpt: "ドテラの製品を、シングルオイル、ブレンドオイル、キットとコレクション、スキンケアやサプリメントなどのカテゴリごとに紹介します。2026年11月時点の主なオイルの香りと表示、キットの中身と価格、販売を終えたキッズコレクションのこともわかります。",
    category: "beginner",
    publishedAt: "2026-11-01",
    thumbnail: "/assets/blog/doterra-oil-lineup-3f8a3709.jpg",
    recommendOrder: 4,
    updatedAt: "2026-11-05",
  },
  // ---- 第2弾 ここまで ----
  // ---- 第3弾（2026-11-02） ここから ----
  {
    slug: "how-to-use-aroma-oils",
    title: "エッセンシャルオイルやアロマオイルの使い方｜初心者の始め方",
    excerpt: "エッセンシャルオイルやアロマオイルの使い方を、香り、肌、お風呂、掃除、クラフト、料理の使い道ごとに整理しました。方法ごとの道具と滴数の早見表、初心者が今日からできる最初の一歩、ドテラのオイルの区分と、よくある質問もまとめています。",
    category: "how-to",
    publishedAt: "2026-11-02",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/how-to-use-aroma-oils.jpg",
    recommendOrder: 1,
  },
  {
    slug: "oils-on-skin",
    title: "エッセンシャルオイルは肌につけていい？ドテラの案内と光毒性",
    excerpt: "エッセンシャルオイルを肌につける前に、ドテラの見解と、ドテラの製品を例にした表示の確かめ方をまとめました。協会や消費者庁の見解、オイルごとの表示、光毒性、精油の使い方と薄め方の基本も説明します。",
    category: "care",
    publishedAt: "2026-11-02",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/oils-on-skin.jpg",
  },
  {
    slug: "oil-precautions",
    title: "エッセンシャルオイルの注意点まとめ｜はじめる前に確認したいこと",
    excerpt: "精油の使い方の注意点をまとめました。守りたい基本の5つ、妊娠中や子どもなど使う人ごとの注意点、肌についたときの対処まで整理しています。",
    category: "care",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/oil-precautions-5070b256.jpg",
  },
  {
    slug: "waterless-diffuser",
    title: "水なしアロマディフューザーとは？超音波式との違い",
    excerpt: "エッセンシャルオイルやアロマオイルのディフューザーで水なしのタイプとは何かを、ネブライザー式の仕組みと、ドテラ ラルツディフューザーなど超音波式との違いから整理します。オイルの量や手入れなど、機種で違う点の確かめ方も紹介します。",
    category: "how-to",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/waterless-diffuser-387fa7e8.jpg",
  },
  {
    slug: "massage-oil-recipe",
    title: "マッサージ用オイルの作り方｜エッセンシャルオイルやアロマオイルの混ぜ方",
    excerpt: "マッサージ用のアロマオイルの作り方を、キャリアオイルの量ごとの滴数表で紹介します。「化粧品」の表示があるドテラのオイルなどを使い、全身と腕や脚になじませる手順と使い切りの目安もまとめました。",
    category: "how-to",
    publishedAt: "2026-11-02",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/massage-oil-recipe-247a791b.jpg",
  },
  {
    slug: "doterra-how-to-use",
    title: "ドテラのオイルの使い方｜「塗・香・食」の表示の見方と最初の一歩",
    excerpt: "ドテラのオイルの使い方を、「塗・香・食」の表示から読み解きます。容量で表示が変わる例と、表示ごとの基本、手元の1本で試す最初の一歩をまとめて紹介します。",
    category: "how-to",
    publishedAt: "2026-11-02",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/doterra-how-to-use-4f9a4fa7.jpg",
    recommendOrder: 3,
  },
  {
    slug: "laluz-diffuser",
    title: "ドテラ ラルツディフューザーの使い方｜水の量、滴数、手入れ",
    excerpt: "ドテラのディフューザー「ラルツ」の使い方を整理しました。水の量、滴数、ボタン、お手入れに加え、動かないときや故障かなと思ったときの確認先もわかります。",
    category: "how-to",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/laluz-diffuser.jpg",
  },
  {
    slug: "aromatouch-certification",
    title: "ドテラのアロマタッチの資格の取り方｜認定コースの流れと条件",
    excerpt: "ドテラのアロマタッチの資格と呼ばれる認定コースを整理しました。オンライン認定コースとトレーニングクラスの違い、受講の条件、受講の流れがわかります。",
    category: "how-to",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/aromatouch-certification.jpg",
  },
  {
    slug: "oils-in-humidifier",
    title: "加湿器にエッセンシャルオイルやアロマオイルは入れていい？",
    excerpt: "エッセンシャルオイルやアロマオイルを加湿器に入れてよいかは、製品の説明書で決まります。スチーム式、超音波式、気化式の違いと、入れる前に確認する手順、ドテラ ラルツディフューザーとの違い、入れずに香りを楽しむ方法をまとめました。",
    category: "care",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/oils-in-humidifier-28b2e0ed.jpg",
  },
  {
    slug: "oils-by-room",
    title: "部屋別の使い方｜エッセンシャルオイルやアロマオイルの置き方",
    excerpt: "部屋別のアロマオイルの使い方を、玄関、リビング、寝室、トイレに分けてまとめました。部屋の広さに合う道具、置き方、滴数の目安、ドテラのレシピのサシェと、家具や掃除で気をつけたいことを紹介します。",
    category: "how-to",
    publishedAt: "2026-11-02",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/oils-by-room-0cdb1c57.jpg",
  },
  {
    slug: "reed-diffuser",
    title: "ルームフレグランスの作り方｜オイルで作るリードディフューザー",
    excerpt: "エッセンシャルオイルやアロマオイルのルームフレグランスの作り方として、ドテラの方法と協会の分量で作るリードディフューザーを紹介します。ドテラのオイルで作る香りの配分の例に加えて、火気の注意と、子どもやペットの誤飲を防ぐ置き場所もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/reed-diffuser.jpg",
  },
  {
    slug: "oil-gifts",
    title: "プレゼントの選び方｜エッセンシャルオイルやアロマオイルを贈る",
    excerpt: "エッセンシャルオイルやアロマオイルのプレゼントは、相手の好みと暮らしに合わせて選びます。女性へのおすすめを探す方にも使える、ドテラのオイルの例を交えた香りの選び方と、妊娠中、持病、子ども、ペットへの配慮をまとめました。",
    category: "lifestyle",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/oil-gifts-74a4580b.jpg",
  },
  {
    slug: "bedtime-scents",
    title: "おやすみ前に楽しむ香りの選び方｜寝室でのオイルの使い方",
    excerpt: "エッセンシャルオイルやアロマオイルを寝室で使うときの、おやすみ前の香りの選び方を、ドテラのオイルの香りの表示を例にまとめました。枕に使うときの案内と注意、ティッシュやディフューザーの置き方、家族と同じ部屋で使うときの配慮を紹介します。",
    category: "how-to",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/bedtime-scents-613005f9.jpg",
  },
  {
    slug: "choosing-oil-brands",
    title: "エッセンシャルオイルのメーカーの選び方｜比べるときに見る基準",
    excerpt: "エッセンシャルオイルやアロマオイルのブランドやメーカーを比べるときに見る基準を、ラベルの8項目と情報開示の観点で整理します。「天然」などの言葉や認定の読み方、価格の比べ方もまとめました。運営するELIGŌはドテラのグループです。",
    category: "beginner",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/choosing-oil-brands.jpg",
    recommendOrder: 5,
  },
  {
    slug: "rosemary",
    title: "ドテラ ローズマリーの使い方｜朝の支度と料理の香りづけ",
    excerpt: "ドテラのローズマリーの香りの特徴と産地を紹介します。朝の支度や料理の香りづけで楽しむ分量と、エッセンシャルオイルの「香・食」の表示で気をつけたいこともまとめました。",
    category: "oils",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/rosemary.jpg",
  },
  {
    slug: "lemongrass",
    title: "ドテラ レモングラスの使い方｜レモンとの香りの違いとサシェ",
    excerpt: "ドテラのレモングラスの香りの特徴を、レモンとの違いや産地とあわせて紹介します。サシェ、ディフューザー、料理の香りづけで使う分量と、少量で強く香るオイルのブレンド例もまとめました。",
    category: "oils",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/lemongrass.jpg",
  },
  {
    slug: "grapefruit",
    title: "ドテラ グレープフルーツの使い方｜朝の香りと光毒性の注意",
    excerpt: "ドテラのグレープフルーツの香りの特徴と、朝の支度や玄関で楽しむ方法を紹介します。「香・食」の表示で気をつけたいことと、協会が光毒性の例に挙げていること、柑橘オイルを開封後1年以内に使い切る目安もまとめました。",
    category: "oils",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/grapefruit.jpg",
  },
  {
    slug: "cypress",
    title: "ドテラ サイプレスの使い方｜ヒノキとの香りの違いと玄関での楽しみ方",
    excerpt: "ドテラのサイプレスの香りの特徴を、ヒノキとの違いや産地とあわせて紹介します。玄関やディフューザーで楽しむ方法、植物油で薄めるハンドオイルの分量、相性のよいブレンド例もまとめました。",
    category: "oils",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/cypress.jpg",
  },
  {
    slug: "marjoram",
    title: "ドテラ マジョラムの使い方｜オレガノとの違いとおやすみ前の香り",
    excerpt: "ドテラのマジョラムの香りの特徴と、オレガノとの呼び名の違いを紹介します。おやすみ前や料理の香りづけで楽しむ方法、エッセンシャルオイルの「香・食」の表示で気をつけたいこともまとめました。",
    category: "oils",
    publishedAt: "2026-11-02",
    thumbnail: "/assets/blog/marjoram.jpg",
  },
  // ---- 第3弾 ここまで ----
  // ---- 優先B（2026-11-05） ----
  {
    slug: "doterra-lrp",
    title: "ドテラのLRP（定期購入）とは？ポイントの仕組みと、毎月買わなくていいか",
    excerpt: "ドテラのLRPは、毎月決めた日に製品が自動で注文される任意参加の定期購入です。リワード・ポイントの還元率と有効期限、毎月買わなくてもよいか、内容の変更と休止のしかたを、2026年11月時点の条件で紹介します。",
    category: "beginner",
    publishedAt: "2026-11-05",
    thumbnail: "/assets/blog/doterra-lrp-77c9b6d5.jpg",
  },
  {
    slug: "doterra-skincare",
    title: "ドテラの化粧品一覧｜化粧水、クリーム、ハンドローション、リップ",
    excerpt: "ドテラのスキンケア化粧品を、顔用のIKISEと、手や体、唇に使う製品に分けて紹介します。化粧水、美容液、ハンド＆ボディローション、ボディバター、リップバームの容量、価格、使い方と、販売を終えた日焼け止めのことを2026年11月時点でまとめました。",
    category: "lifestyle",
    publishedAt: "2026-11-05",
    thumbnail: "/assets/blog/doterra-skincare.jpg",
  },
  {
    slug: "doterra-shampoo-toothpaste",
    title: "ドテラのシャンプー、歯磨き粉、石鹸｜毎日使う製品の種類と使い方",
    excerpt: "ドテラのシャンプー、コンディショナー、ヘアオイルなどのヘアケアと、石けん、ボディウォッシュ、ハンドソープの種類、価格、使い方を紹介します。歯磨き粉のドテラ トゥースペイストの販売状況も、2026年11月時点でまとめています。",
    category: "lifestyle",
    publishedAt: "2026-11-05",
    thumbnail: "/assets/blog/doterra-shampoo-toothpaste.jpg",
  },
  {
    slug: "doterra-coconut-oil",
    title: "ドテラのココナッツオイルとは？フラクショネイテッドの意味と薄め方",
    excerpt: "ドテラ ココナッツオイル（フラクショネイティッド）の容量、価格、成分と「分留」の意味を紹介します。表示されている使い方と薄め方、はじめて混ぜる手順、保管のしかた、ドテラのホホバオイルとの違いもまとめました。",
    category: "oils",
    publishedAt: "2026-11-05",
    thumbnail: "/assets/blog/doterra-coconut-oil.jpg",
  },
  // ---- 優先A（2026-11-04） ----
  {
    slug: "what-is-doterra",
    title: "ドテラとは？どんな会社で何を売っているのか｜日本法人と製品の基本",
    excerpt: "ドテラ（dōTERRA）とは、2008年に米国で設立された、エッセンシャルオイルを中心に扱う会社です。米国本社と日本法人の基本情報、扱う製品の種類と価格の例、会員制度のしくみと、会員にならずに買う方法をまとめました。",
    category: "beginner",
    publishedAt: "2026-11-04",
    thumbnail: "/assets/blog/what-is-doterra-7f5da712.jpg",
  },
  {
    slug: "doterra-suspicious",
    title: "ドテラは怪しい？気になる点と、始める前に確かめたいこと",
    excerpt: "「ドテラは怪しい」と感じる方がいる会員制の販売、価格、飲める表示、勧誘について、事実とご自身で確かめる方法を整理しました。厚生労働省や邪気払いとの関係、やめたいときの手続きと相談先もあわせて紹介します。",
    category: "beginner",
    publishedAt: "2026-11-04",
    thumbnail: "/assets/blog/doterra-suspicious-212577f8.jpg",
  },
  {
    slug: "doterra-mlm",
    title: "ドテラはマルチ？会員の仕組みと、誘われたときに確かめたいこと",
    excerpt: "ドテラはマルチなのか気になる方へ。ドテラは、WAとして登録し販売することをすすめる取引を、特定商取引法の連鎖販売取引としています。会員の種類と費用、マルチ商法やネットワークビジネスの意味、誘われたときに確かめたい点、クーリング・オフのしかたをまとめました。",
    category: "beginner",
    publishedAt: "2026-11-04",
    thumbnail: "/assets/blog/doterra-mlm-ab335497.jpg",
  },
  {
    slug: "doterra-mineral",
    title: "ドテラ ミネラルとは？PHOSSILの種類、原材料、飲み方、値段",
    excerpt: "ドテラ ミネラルの正式名はPHOSSIL ミネラルです。オリジナル、カシス、プルーン、レモン ゼロシュガー、ハニージンジャー オイルプラス、カプセルの原材料、飲み方の目安、税込の値段、保存方法を、2026年11月時点の表示で比べます。",
    category: "beginner",
    publishedAt: "2026-11-04",
    thumbnail: "/assets/blog/doterra-mineral-f37e7df4.jpg",
  },
  {
    slug: "deep-blue",
    title: "ドテラ ディープブルーとは？オイルとラブ（クリーム）の違いと使い方",
    excerpt: "ドテラのディープブルーは、ミントとカンファーの清涼感のある香りのブレンドオイルです。クリームのディープブルーラブとの違い、価格、ココナッツオイルでの薄め方、「効能」を表示できない理由、使うときの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-11-04",
    thumbnail: "/assets/blog/deep-blue-14be3e5a.jpg",
  },
  {
    slug: "easy-air",
    title: "ドテラ イージーエアとは？香りの特徴と使い方",
    excerpt: "ドテラのイージーエアは、ミントやユーカリ、レモンなどを合わせた、すっきりした香りのブレンドオイルです。寝室やティッシュでの香りの楽しみ方、薄めて足裏に使う方法、相性のよい香り、使うときの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-11-04",
    thumbnail: "/assets/blog/easy-air-2d58e6b9.jpg",
  },
  {
    slug: "doterra-diffusers",
    title: "ドテラのディフューザーの種類と選び方｜ラルツと販売終了のバブル、ペブル",
    excerpt: "2026年11月時点で、日本で単品で買えるドテラのディフューザーはラルツです。バブル、ペブル、森の音、セラミックなど販売を終えた機種と終了の時期、選ぶときに確かめたいこと、加湿器との違い、ラルツで試せる最初のレシピを紹介します。",
    category: "how-to",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-05",
    thumbnail: "/assets/blog/doterra-diffusers.jpg",
  },

];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getCategory = (slug: string) => blogCategories.find((c) => c.slug === slug);
export const getPostsByCategory = (slug: string) => blogPosts.filter((p) => p.category === slug);
export const getRecommendedPosts = () =>
  blogPosts.filter((p) => p.recommendOrder).sort((a, b) => (a.recommendOrder ?? 0) - (b.recommendOrder ?? 0));

/**
 * 「あわせて読みたい」の話題のまとまり。1記事は1つのまとまりにだけ入れる。
 * 各記事はまとまりの中で自分の次から順に並ぶ（輪になる）ので、どの記事も必ず他の記事から案内される。
 * 記事を公開したら、ここにも追加する。
 */
const relatedGroups: string[][] = [
  ["how-to-use-aroma-oils", "no-diffuser", "oils-by-scene", "oils-by-room", "bedtime-scents", "oils-in-car"],
  ["diffuser-guide", "waterless-diffuser", "laluz-diffuser", "doterra-diffusers", "oils-in-humidifier", "diffuser-blends", "blend-basics"],
  ["carrier-oil-dilution", "oils-on-skin", "massage-oil-recipe", "foot-self-massage", "bath-oils", "doterra-coconut-oil"],
  ["aromatouch-technique", "aromatouch-hand", "aromatouch-certification"],
  ["doterra-how-to-use", "doterra-oil-lineup", "doterra-skincare", "doterra-shampoo-toothpaste", "choosing-oil-brands", "doterra-drinkable", "aromatic-table", "aroma-sausage"],
  ["what-is-essential-oil", "how-oils-are-made", "reading-labels", "co-impact-sourcing"],
  ["oil-storage", "oil-disposal", "oil-organizing", "oil-containers", "drop-count"],
  ["oil-precautions", "kids-safety", "pets-safety"],
  ["lemon", "orange", "bergamot", "grapefruit", "lemongrass"],
  ["lavender", "geranium", "peppermint", "rosemary", "marjoram"],
  ["frankincense", "tea-tree", "eucalyptus", "hinoki", "cypress"],
  ["on-guard", "serenity", "balance", "deep-blue", "easy-air"],
  ["what-is-doterra", "doterra-suspicious", "doterra-mlm", "doterra-mineral", "doterra-lrp"],
  ["aroma-lip", "handmade-cream", "roll-on", "natural-perfume", "bath-bomb", "gem-soap"],
  ["cleaning-spray", "laundry-oils", "outdoor-spray", "potpourri", "reed-diffuser", "oil-gifts"],
];

/** list の中で slug の次から順に、自分を除いて並べる */
const nextAfter = <T,>(list: T[], self: T) => {
  const i = list.indexOf(self);
  return [...list.slice(i + 1), ...list.slice(0, Math.max(i, 0))];
};

export const getRelatedPosts = (post: BlogPost, count = 3) => {
  const group = relatedGroups.find((g) => g.includes(post.slug)) ?? [];
  const inCategory = blogPosts.filter((p) => p.category === post.category).map((p) => p.slug);
  const slugs = [...new Set([...nextAfter(group, post.slug), ...nextAfter(inCategory, post.slug)])];
  return slugs.flatMap((slug) => getPost(slug) ?? []).slice(0, count);
};

/** "2026-10-30" → "2026.10.30" */
export const formatDate = (iso: string) => iso.replaceAll("-", ".");
