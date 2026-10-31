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
    "ドテラ（dōTERRA）のエッセンシャルオイルを、毎日の暮らしにどう取り入れるか。使い方・道具・保管のコツをまとめています。",
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
  // ---- 41本 ここから ----
  {
    slug: "diffuser-guide",
    title: "ディフューザーの選び方｜超音波式の特徴と毎日のお手入れ",
    excerpt: "ディフューザーの種類と、選ぶときに確認したい5つのことをまとめました。超音波式の基本の使い方と、取扱説明書をもとにしたタイミング別のお手入れの方法も紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/diffuser-guide.jpg",
  },
  {
    slug: "diffuser-blends",
    title: "ディフューザーのブレンド例｜朝・昼・夜で楽しむ香りの組み合わせ",
    excerpt: "朝、昼、夜に試せるディフューザーのブレンドを、合計5滴か6滴の分量で6つ紹介します。自分で組み合わせを作るときの順番と、香りの系統ごとの相性の早見表もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/diffuser-blends.jpg",
  },
  {
    slug: "drop-count",
    title: "1滴は何mL？滴数の数え方と、オイルが出にくいときの対処法",
    excerpt: "1滴は約0.05mL、20滴で1mLが計算の目安です。15mLのボトルに入っている滴数の考え方と、1滴ずつ落とす手順、オイルが出にくいときに試すことをまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/drop-count.jpg",
  },
  {
    slug: "carrier-oil-dilution",
    title: "キャリアオイルの選び方と希釈の計算｜濃度1%は何滴？",
    excerpt: "キャリアオイルの種類と選び方を紹介します。濃度1%が何滴になるかを計算式と早見表で示し、はじめて肌に使うときに低い濃度で試す手順と、確認したい注意点もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/carrier-oil-dilution.jpg",
  },
  {
    slug: "oil-containers",
    title: "オイルの容器はガラスが基本？プラスチックを避ける理由とボトルの選び方",
    excerpt: "オイルの保存に遮光性のガラス容器が向く理由と、プラスチック容器についてわかっていること、わかっていないことを説明します。スプレーなど用途別のボトルの選び方も紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/oil-containers.jpg",
  },
  {
    slug: "bath-oils",
    title: "お風呂でのオイルの使い方｜お湯に直接入れる前に知りたいこと",
    excerpt: "オイルは水に溶けにくいので、湯船に入れる前に知っておきたいことがあります。無水エタノールや天然塩を使う入れ方と滴数の目安、お湯に入れずに香りを楽しむ方法を紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/bath-oils.jpg",
  },
  {
    slug: "foot-self-massage",
    title: "足裏セルフマッサージのやり方｜おやすみ前のオイルの使い方",
    excerpt: "おやすみ前に足裏へオイルを使うときの選び方、薄め方、手順を紹介します。小さじ1杯のキャリアオイルに1滴から始める方法と、力加減のコツ、使うときの注意点もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/foot-self-massage.jpg",
  },
  {
    slug: "aromatouch-technique",
    title: "アロマタッチ テクニックとは？ドテラ独自のトリートメント技法の流れを解説",
    excerpt: "アロマタッチ テクニックは、8種類のオイルと手のタッチを組み合わせるドテラ独自の技法です。オイルの順番と全体の流れ、始める前に確認したいこと、公式の学び方を紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/aromatouch-technique.jpg",
  },
  {
    slug: "aromatouch-hand",
    title: "アロマタッチのハンドテクニック｜家族と楽しめる手のタッチの手順",
    excerpt: "アロマタッチ ハンドテクニックは、手に触れるだけで始められるやさしいタッチの方法です。オイルの選び方と薄め方、4つのステップ、家族と楽しむときの注意点を紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/aromatouch-hand.jpg",
  },
  {
    slug: "blend-basics",
    title: "香りのブレンドの基本｜トップ・ミドル・ベースで組み立てる",
    excerpt: "トップ、ミドル、ベースの違いと、合計5滴や10滴で作れる配分の目安を説明します。はじめてのブレンドの手順と、朝、午後、夜に試せる3つの組み合わせの例も紹介します。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/blend-basics.jpg",
  },
  {
    slug: "oils-by-scene",
    title: "シーン別オイルの選び方｜仕事・家事・リラックスタイムに",
    excerpt: "仕事、家事、リラックスタイムの3つの場面に分けて、オイルの選び方と滴数、具体的な楽しみ方を紹介します。職場など、まわりの人と香りを分け合うときの配慮もまとめました。",
    category: "how-to",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/oils-by-scene.jpg",
  },
  {
    slug: "lavender",
    title: "ラベンダーの香りの特徴と、暮らしでの楽しみ方",
    excerpt: "ラベンダーは、おしろいのような甘さをもつやわらかな花の香りのオイルです。寝室、リネン、バスタイムで楽しむ方法を、分量とブレンド例、使うときの注意点つきで紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/lavender.jpg",
  },
  {
    slug: "lemon",
    title: "レモンの香りの特徴と、キッチンまわりでの楽しみ方",
    excerpt: "レモンは、皮をむいた瞬間のような明るい香りのオイルです。拭き掃除や重曹の香りびん、料理の香りづけなど、キッチンまわりで試せる楽しみ方と、使うときの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/lemon.jpg",
  },
  {
    slug: "peppermint",
    title: "ペパーミントの香りの特徴と、清涼感を楽しむ使い方",
    excerpt: "ペパーミントは、ハーブのようなスーッとする香りと清涼感が特徴のオイルです。デスクや外出先で香りを楽しむ量の目安と、15mLと5mLで異なる表示、使うときの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/peppermint.jpg",
  },
  {
    slug: "frankincense",
    title: "フランキンセンスとは？樹脂から生まれる香りの特徴と楽しみ方",
    excerpt: "フランキンセンスは、木の樹脂から生まれる温かくスパイシーな香りのオイルです。樹脂がオイルになるまでの流れと、静かな時間に楽しむ方法、ハンドオイルの作り方を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/frankincense.jpg",
  },
  {
    slug: "tea-tree",
    title: "ティーツリーの香りの特徴と、お掃除での使い方",
    excerpt: "ティーツリーは、青い葉にかすかな渋みが重なる香りのオイルです。掃除の仕上げに香りを添える3つの方法と、スプレーの分量、塩素系洗浄剤と一緒に使わないなどの注意点を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/tea-tree.jpg",
  },
  {
    slug: "orange",
    title: "オレンジの香りの特徴と、甘く明るい香りの楽しみ方",
    excerpt: "オレンジは、みかんを思わせる甘く明るい香りのオイルです。リビング、車の中、飲み物で楽しむ方法と、15mLと5mLで異なる表示、柑橘のオイルで気をつけたいことを紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/orange.jpg",
  },
  {
    slug: "eucalyptus",
    title: "ユーカリプタスの香りの特徴と、森のような香りの楽しみ方",
    excerpt: "ユーカリプタスは、森の空気を思わせる清涼感のある香りのオイルです。2026年3月の区分の変更と、肌につけずにシャワーやディフューザー、拭き掃除で楽しむ方法を紹介します。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/eucalyptus.jpg",
  },
  {
    slug: "hinoki",
    title: "ヒノキの香りの特徴と、和の空間での楽しみ方",
    excerpt: "ドテラのヒノキのオイルの香りの特徴を、木材と葉の違いとあわせて紹介します。和室や玄関、床の仕上げ、浴室での楽しみ方と、相性のよい香り、使うときの注意点もまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/hinoki.jpg",
  },
  {
    slug: "geranium",
    title: "ゼラニウムの香りの特徴と、スキンケアタイムの楽しみ方",
    excerpt: "ゼラニウムの甘くさわやかな香りの特徴と、スキンケアの時間に香りを添える方法を紹介します。乳液やオイルに混ぜるときの量の目安と、肌に使う前に確認したいこともまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/geranium.jpg",
  },
  {
    slug: "bergamot",
    title: "ベルガモットの香りの特徴と、柑橘オイルで気をつけたいこと",
    excerpt: "紅茶を思わせるベルガモットの香りの特徴と、部屋や紅茶の時間での楽しみ方を紹介します。光毒性や製品ごとの表示の違いなど、柑橘オイルで気をつけたいこともまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/bergamot.jpg",
  },
  {
    slug: "on-guard",
    title: "オンガードとは？スパイス香るブレンドの特徴と暮らしでの使い方",
    excerpt: "オンガードは、オレンジとスパイスが重なるドテラのブレンドオイルです。内容と香りの特徴、部屋の香りや掃除の仕上げ、飲食の香りづけでの使い方と、注意点をまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/on-guard.jpg",
  },
  {
    slug: "serenity",
    title: "ドテラセレニティーの香りの特徴と、おやすみ前の楽しみ方",
    excerpt: "ドテラセレニティーは、花とバニラの甘さが重なるブレンドオイルです。内容と香りの特徴、寝室やティッシュ、足裏で楽しむおやすみ前の使い方と、相性のよい香り、注意点をまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/serenity.jpg",
  },
  {
    slug: "balance",
    title: "ドテラバランスの香りの特徴と、朝の使い方",
    excerpt: "ドテラバランスは、ココナッツオイルを含む木の香りのブレンドオイルです。内容と香りの特徴、足裏や手首、車内で楽しむ朝の使い方と、相性のよい香り、注意点をまとめました。",
    category: "oils",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/balance.jpg",
  },
  {
    slug: "bath-bomb",
    title: "手作りバスボムの作り方｜香りの選び方のコツ",
    excerpt: "重曹とクエン酸で作るバスボムの分量と手順を、1回分のレシピで紹介します。オイルは合計5滴までという目安と香りの選び方、肌に触れるものとして守りたい点もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/bath-bomb.jpg",
  },
  {
    slug: "aroma-lip",
    title: "アロマリップの作り方｜自分だけの色と香りを選ぶ口紅クラフト",
    excerpt: "蜜蝋とシアバターで作る口紅クラフトの分量と手順を紹介します。マイカでの色の決め方に加えて、唇に使うオイルの濃度と、口に入る可能性への注意も計算つきで説明します。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/aroma-lip.jpg",
  },
  {
    slug: "handmade-cream",
    title: "手作りクリームの作り方｜オイルで香りをつける基本レシピ",
    excerpt: "ローションに1滴混ぜる方法と、ミツロウで固める方法の2つのレシピを紹介します。どちらも濃度は約0.5%で、香りの替え方と手作りコスメで守りたい点もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/handmade-cream.jpg",
  },
  {
    slug: "roll-on",
    title: "ロールオンアロマの作り方｜持ち歩ける自分だけのブレンド",
    excerpt: "10mLのボトルで作るロールオンの手順を、オイルは合計1〜2滴という目安とともに紹介します。2種類で作る香りの組み合わせと、持ち歩くときに気をつけたい点もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/roll-on.jpg",
  },
  {
    slug: "gem-soap",
    title: "宝石みたいな石けんの作り方｜親子で楽しむアロマクラフト",
    excerpt: "溶かして固める素地で作る、3色の宝石のような石けんの手順を紹介します。親子で作るときの役割の分け方と、使う人に合わせたオイルの量、守りたい注意点もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/gem-soap.jpg",
  },
  {
    slug: "natural-perfume",
    title: "ナチュラルパフュームの作り方｜オイルで作る自分だけの香水",
    excerpt: "トップ、ミドル、ベースの3段で香りを組み立てる考え方を紹介します。肌につける香りは濃度1%以下で、紙や小物で楽しむ香りは別の配合で作る2つのレシピを説明します。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/natural-perfume.jpg",
  },
  {
    slug: "outdoor-spray",
    title: "アウトドアスプレーの作り方｜外遊びに持っていく香りのレシピ",
    excerpt: "リュックや帽子の外側に香りを添える、50mLのスプレーの作り方を紹介します。肌につけない使い方と香りの組み合わせ、外に持ち出すときの火気と高温の注意もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/outdoor-spray.jpg",
  },
  {
    slug: "cleaning-spray",
    title: "手作り掃除スプレーの作り方｜酢とレモンオイルで作る基本レシピ",
    excerpt: "酢と水にレモンを加える掃除スプレーの基本の分量と手順を紹介します。酢のにおいが苦手なときのクエン酸のレシピと、塩素系の製品と一緒に使わないための注意点も説明します。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/cleaning-spray.jpg",
  },
  {
    slug: "laundry-oils",
    title: "洗濯にオイルを取り入れる｜柔軟剤スプレーとアイロンがけの香りづけ",
    excerpt: "柔軟剤スプレーとすすぎに入れる柔軟剤の作り方、アイロンがけの香りづけを紹介します。オイルを使った布は乾燥機にかけないなど、洗濯の前に知りたい約束もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/laundry-oils.jpg",
  },
  {
    slug: "potpourri",
    title: "ポプリの作り方｜スパイスと柑橘で作る季節の香り",
    excerpt: "オレンジの皮とスパイスにオイルを数滴足して作る、ポプリの手順を紹介します。季節で変える香りの組み合わせと、子どもやペット、火のまわりで気をつけたいこともまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/potpourri.jpg",
  },
  {
    slug: "aromatic-table",
    title: "オイルで香りづけする料理｜食品添加物の表示があるオイルで作るアロマティックテーブル",
    excerpt: "日本アロマ環境協会は精油の飲用や食品との摂取をすすめていません。その立場を確認したうえで、ドテラの食品添加物の表示がある製品に限った香りづけの手順を紹介します。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/aromatic-table.jpg",
  },
  {
    slug: "aroma-sausage",
    title: "手作りアロマソーセージの作り方｜ハーブの香りを楽しむレシピ",
    excerpt: "豚ひき肉400gで作る約16個分のソーセージの手順を紹介します。日本アロマ環境協会の立場と使えるオイルの範囲、中心部75℃で1分以上を確かめる加熱の方法もまとめました。",
    category: "lifestyle",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/aroma-sausage.jpg",
  },
  {
    slug: "what-is-essential-oil",
    title: "エッセンシャルオイルとは？アロマオイルとの違いと選び方",
    excerpt: "エッセンシャルオイルは、植物から抽出した揮発性の芳香物質です。「アロマオイル」と呼ばれる製品との違いと、買うときにラベルで確かめたい項目を、表を使ってまとめました。",
    category: "beginner",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/what-is-essential-oil.jpg",
  },
  {
    slug: "co-impact-sourcing",
    title: "コ・インパクトソーシングとは？オイルの産地と生産者を支える仕組み",
    excerpt: "コ・インパクトソーシングは、ドテラの原料調達の取り組みです。公式の定義と生産者を支える仕組み、産地の例を紹介し、製品ページや Source To You で確かめる方法もまとめました。",
    category: "beginner",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/co-impact-sourcing.jpg",
  },
  {
    slug: "oil-storage",
    title: "エッセンシャルオイルの保管方法と、使用期限の目安",
    excerpt: "オイルはふたを閉めて立て、冷暗所に置くのが基本です。開封後1年という日本アロマ環境協会の目安と柑橘系の注意点、手作りしたものを使い切る目安を表にしてまとめました。",
    category: "care",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/oil-storage.jpg",
  },
  {
    slug: "kids-safety",
    title: "子どもとエッセンシャルオイル｜年齢に合わせて確認したい注意点",
    excerpt: "3歳未満は芳香浴以外を行わないなど、日本アロマ環境協会の年齢別の目安を紹介します。誤飲を防ぐ置き場所と、飲み込んだときや目に入ったときの対応も順番にまとめました。",
    category: "care",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/kids-safety.jpg",
  },
  {
    slug: "pets-safety",
    title: "ペットのいる家でオイルを使うときの注意点｜犬・猫と香りの距離",
    excerpt: "日本アロマ環境協会は、ペットのいる空間での使用を避けるよう案内しています。犬や猫と香りの距離をとる方法と、オイルの置き場所、様子が変わったときの対応をまとめました。",
    category: "care",
    publishedAt: "2026-10-31",
    thumbnail: "/assets/blog/pets-safety.jpg",
  },
  // ---- 41本 ここまで ----
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
