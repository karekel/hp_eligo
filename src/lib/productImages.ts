/**
 * 記事で紹介するドテラ製品の画像（doTERRA公式サイトの製品画像）。
 * false にすると全記事の製品画像が消える。
 */
export const SHOW_PRODUCT_IMAGES = true;

/** 余白を切り落とした製品画像（public/assets/products/cut/）のパス。表示を大きくするために使う */
export const cutSrc = (src: string) => src.replace("/assets/products/", "/assets/products/cut/");

/** 製品名（日本の公式サイトの表記）と画像ファイル名。画像は public/assets/products/<id>.jpg と cut/<id>.jpg */
const productIds: Record<string, string> = {
  "アダプティブ": "adaptiv-15ml",
  "エアーエックス": "air-x-15ml",
  "アーボビテ": "arborvitae-5ml",
  "アロマタッチ": "aromatouch-15ml",
  "バジル": "basil-15ml",
  "ベルガモット": "bergamot-15ml",
  "ブラックペッパー": "black-pepper-5ml",
  "ブルータンジー": "blue-tansy-5ml",
  "ブンタン": "buntan-5ml",
  "シダーウッド": "cedarwood-15ml",
  "クラリセージ": "clary-sage-15ml",
  "クラリカーム": "clarycalm-10ml",
  "クローブ": "clove-15ml",
  "コパイバ": "copaiba-15ml",
  "サイプレス": "cypress-15ml",
  "DDRプライム": "ddr-prime-15ml",
  "ディープブルー": "deep-blue-5ml",
  "ディープブルーラブ": "deep-blue-rub",
  "ドテラ アダプティブタッチ": "doterra-adaptiv-touch-10ml",
  "ドテラバランス": "doterra-balance-15ml",
  "ドテラ ブルーロータスタッチ": "doterra-blue-lotus-touch-10ml",
  "ドテラチアー": "doterra-cheer-5ml",
  "ドテラ クリサンセマムタッチ": "doterra-chrysanthemum-touch",
  "ドテラシトラスブリス": "doterra-citrus-bliss-15ml",
  "ドテラコンソール": "doterra-console-5ml",
  "ドテラフォーギブ": "doterra-forgive-5ml",
  "ドテラ マグノリアタッチ": "doterra-magnolia-touch-10ml",
  "ドテラ 森の音ディフューザー": "doterra-morino-to-diffuser",
  "ドテラモチベート": "doterra-motivate-5ml",
  "ドテラ マルチパーパスサーフェスクリーナー": "doterra-multi-purpose-surface-cleaner-concentrate",
  "ドテラ ネロリタッチ": "doterra-neroli-touch-10ml",
  "ドテラパッション": "doterra-passion-5ml",
  "ドテラピース": "doterra-peace-5ml",
  "ドテラ ローズタッチ": "doterra-rose-touch-10ml",
  "ドテラセレニティー": "doterra-serenity-15ml",
  "ドテラ トゥースペイスト": "doterra-toothpaste",
  "ダグラスファー": "douglas-fir-5ml",
  "イージーエア": "easy-air-15ml",
  "ユーカリプタス": "eucalyptus-15ml",
  "フラゴニア": "fragonia-5ml",
  "フランキンセンス": "frankincense-15ml",
  "ゼラニウム": "geranium-15ml",
  "ジンジャー": "ginger-15ml",
  "グレープフルーツ": "grapefruit-15ml",
  "グリーンマンダリン": "green-mandarin-15ml",
  "ガイアックウッド": "guaiacwood-15ml",
  "ヘリクリサム": "helichrysum-5ml",
  "ヒバ": "hiba-5ml",
  "ヒノキ": "hinoki-5ml",
  "イリアヒ": "iliahi-hawaiian-sandalwood-5ml",
  "インチューン": "intune-10ml",
  "ジャスミン": "jasmine-2-5ml",
  "ジュニパーベリー": "juniper-berry-5ml",
  "クロモジ": "kuromoji-2-5ml",
  "ローレルリーフ": "laurel-leaf-5ml",
  "ラベンダー": "lavender-15ml",
  "レモン": "lemon-15ml",
  "レモンユーカリ": "lemon-eucalyptus-15ml",
  "レモンマートル": "lemon-myrtle-5ml",
  "レモングラス": "lemongrass-15ml",
  "ライム": "lime-15ml",
  "リツェア": "litsea-15ml",
  "マヌカ": "manuka-5ml",
  "マジョラム": "marjoram-15ml",
  "メリッサ": "melissa-5ml",
  "メタPWR": "metapwr-15ml",
  "メタPWRアドバンテージ": "metapwr-advantage",
  "森の音": "morino-to-15ml",
  "森の音 柔軟仕上げ剤": "morino-to-fabric-softener",
  "森の音 洗濯用洗剤": "morino-to-laundry-detergent",
  "森の音 ルーム＆リネンスプレー": "morino-to-room-and-linen-spray",
  "森の音タッチ": "morino-to-touch-10ml",
  "オンガード": "on-guard-15ml",
  "オンガードビーズ": "on-guard-beadlets",
  "オンガード クリーナー コンセントレート": "on-guard-cleaner-concentrate",
  "オンガード フォーミングハンドウォッシュ": "on-guard-foaming-hand-wash",
  "オンガード ランドリーデタージェント": "on-guard-laundry-detergent",
  "オンガード マウスウォッシュ": "on-guard-mouth-wash",
  "オンガード＋ ソフトジェル": "on-guard-plus-softgels",
  "オンガード スロートドロップ": "on-guard-throat-drops",
  "オレンジ": "orange-15ml",
  "オレガノ": "oregano-15ml",
  "パステンタス": "pastentus-10ml",
  "パチョリ": "patchouli-15ml",
  "ペパーミント": "peppermint-15ml",
  "プチグレン": "petitgrain-15ml",
  "ピューリファイ": "purify-15ml",
  "リバイタゼン": "rivitazen-15ml",
  "ローマンカモミール": "roman-chamomile-5ml",
  "ローズ": "rose-5ml",
  "ローズハンドローション": "rose-hand-lotion",
  "ローズマリー": "rosemary-15ml",
  "サルベル": "salubelle-10ml",
  "サンダルウッド": "sandalwood-5ml",
  "セレニティー ソフトジェル": "serenity-softgels",
  "シベリアンファー": "siberian-fir-15ml",
  "スペアミント": "spearmint-15ml",
  "サマーセイボリー": "summer-savory-5ml",
  "スーパーミント": "supermint-15ml",
  "スイートガム": "sweetgum-5ml",
  "タンジェリン": "tangerine-15ml",
  "ティーツリー": "tea-tree-15ml",
  "テラアーマー": "terraarmor-15ml",
  "ターメリック": "turmeric-15ml",
  "ベチバー": "vetiver-15ml",
  "ウィンターグリーン": "wintergreen-15ml",
  "ヤローPOM": "yarrow-pom-30ml",
  "イランイラン": "ylang-ylang-15ml",
  "ユズ": "yuzu-5ml",
  "ゼンドクライン": "zendocrine-15ml",
  "ゼンジェスト": "zengest-15ml",
  "ドテラ ラルツディフューザー": "doterra-laluz-diffuser",
  "ドテラ ココナッツオイル": "doterra-coconut-oil-fractionated",
  "アロマタッチキット": "aromatouch-kit-with-jp-fco-pump",
  "ラベンダー 15mL": "lavender-15ml",
  "ラベンダー 5mL": "lavender-5ml",
  "オレンジ 15mL": "orange-15ml",
  "オレンジ 5mL": "orange-5ml",
  "ペパーミント 15mL": "peppermint-15ml",
  "ペパーミント 5mL": "peppermint-5ml",
  "ティーツリー 15mL": "tea-tree-15ml",
  "ティーツリー 5mL": "tea-tree-5ml",
  "ゼンジェスト 15mL": "zengest-15ml",
  "ゼンジェスト 5mL": "zengest-5ml",
  "PHOSSIL ミネラル オリジナル": "phossil-mineral-original",
  "PHOSSIL ミネラル カシス": "phossil-mineral-cassis",
  "PHOSSIL ミネラル プルーン": "phossil-mineral-prune",
  "PHOSSIL ミネラル レモン ゼロシュガー": "phossil-mineral-lemon-zero-sugar",
  "PHOSSIL ミネラル ハニージンジャー オイルプラス": "phossil-mineral-honey-ginger-oil-plus",
  "PHOSSIL ミネラル カプセル": "phossil-mineral-capsules",
  "シナモンバーク": "cinnamon-bark-5ml",
};

/** 本文での呼び方の違い（「ドテラ」の有無など） */
const aliases: Record<string, string> = {
  "ワイルドオレンジ": "オレンジ",
  "ココナッツオイル": "ドテラ ココナッツオイル",
  "フラクショネイテッドココナッツオイル": "ドテラ ココナッツオイル",
  "ラルツディフューザー": "ドテラ ラルツディフューザー",
  "森の音ディフューザー": "ドテラ 森の音ディフューザー",
  "トゥースペイスト": "ドテラ トゥースペイスト",
  "ユーカリ": "ユーカリプタス",
};

const withoutPrefix = (name: string) => name.replace(/^ドテラ\s*/, "");

/** 製品名から画像のパスを返す。画像がない名前は undefined */
export function productPhoto(name: string): string | undefined {
  const key = aliases[name] ?? name;
  const id =
    productIds[key] ??
    productIds[`ドテラ${key}`] ??
    productIds[`ドテラ ${key}`] ??
    Object.entries(productIds).find(([n]) => withoutPrefix(n) === withoutPrefix(key))?.[1];
  return id ? `/assets/products/${id}.jpg` : undefined;
}

/** 製品画像の代替テキスト */
export const productAlt = (name: string) => `${name.startsWith("ドテラ") ? name : `ドテラの${name}`}のボトル`;

/** 相性のよい香りの一覧（PairingList）で、名前ごとに出す製品画像。「、」で区切った名前は複数の画像になる */
export function pairingPhotos(name: string): string[] {
  return name.split("、").flatMap((n) => {
    const src = productPhoto(n.trim());
    return src ? [src] : [];
  });
}
