/**
 * 記事に関連する製品の画像（doTERRA公式サイトの製品画像）。
 * false にすると全記事の製品画像が消える。
 */
export const SHOW_PRODUCT_IMAGES = true;

/** 余白を切り落とした製品画像（public/assets/products/cut/）のパス。表示を大きくするために使う */
export const cutSrc = (src: string) => src.replace("/assets/products/", "/assets/products/cut/");

export type ProductImage = { name: string; src: string };

const p = (id: string, name: string): ProductImage => ({ name, src: `/assets/products/${id}.jpg` });

const products = {
  k0: p("aromatouch-kit-with-jp-fco-pump", "アロマタッチキット"),
  k1: p("bergamot-15ml", "ベルガモット"),
  k2: p("doterra-balance-15ml", "ドテラバランス"),
  k3: p("doterra-coconut-oil-fractionated", "ドテラ ココナッツオイル"),
  k4: p("doterra-laluz-diffuser", "ドテラ ラルツディフューザー"),
  k8: p("frankincense-15ml", "フランキンセンス"),
  k9: p("geranium-15ml", "ゼラニウム"),
  k10: p("hinoki-5ml", "ヒノキ"),
  k11: p("lavender-15ml", "ラベンダー"),
  k12: p("lemon-15ml", "レモン"),
  k15: p("orange-15ml", "オレンジ"),
  k16: p("peppermint-15ml", "ペパーミント"),
  db: p("deep-blue-5ml", "ディープブルー"),
  dbr: p("deep-blue-rub", "ディープブルーラブ"),
};

const src = (id: string) => `/assets/products/${id}.jpg`;

/** 相性のよい香りの一覧（PairingList）で、名前ごとに出す製品画像 */
export const pairingImages: Record<string, string[]> = {
  "ドテラバランス": [src("doterra-balance-15ml")],
  "ベルガモット": [src("bergamot-15ml")],
  "カルダモン": [src("cardamom-5ml")],
  "サイプレス": [src("cypress-15ml")],
  "ユーカリプタス": [src("eucalyptus-15ml")],
  "フランキンセンス": [src("frankincense-15ml")],
  "ゼラニウム": [src("geranium-15ml")],
  "グレープフルーツ": [src("grapefruit-15ml")],
  "ヒノキ": [src("hinoki-5ml")],
  "ラベンダー": [src("lavender-15ml")],
  "レモン": [src("lemon-15ml")],
  "レモングラス": [src("lemongrass-15ml")],
  "ライム": [src("lime-15ml")],
  "オレンジ": [src("orange-15ml")],
  "ペパーミント": [src("peppermint-15ml")],
  "ローズマリー": [src("rosemary-15ml")],
  "ドテラセレニティー": [src("doterra-serenity-15ml")],
  "スペアミント": [src("spearmint-15ml")],
  "シナモンバーク、クローブ": [src("cinnamon-bark-5ml"), src("clove-15ml")],
  "タンジェリン": [src("tangerine-15ml")],
  "ティーツリー": [src("tea-tree-15ml")],
  "ベチバー": [src("vetiver-15ml")],
  "ユズ": [src("yuzu-5ml")],
};

export const productImages: Record<string, ProductImage[]> = {
  "doterra-drinkable": [products.k12],
  "diffuser-guide": [products.k4],
  "diffuser-blends": [products.k12, products.k16, products.k11],
  "drop-count": [products.k2],
  "carrier-oil-dilution": [products.k3, products.k11],
  "bath-oils": [products.k11, products.k8],
  "foot-self-massage": [products.k11, products.k2, products.k3],
  "aromatouch-technique": [products.k0],
  "aromatouch-hand": [products.k2, products.k11, products.k3],
  "blend-basics": [products.k8, products.k11, products.k15],
  "oils-by-scene": [products.k12, products.k16, products.k11],
  "bath-bomb": [products.k11, products.k3],
  "aroma-lip": [products.k11, products.k9, products.k8],
  "handmade-cream": [products.k8, products.k11],
  "roll-on": [products.k3, products.k11, products.k8],
  "gem-soap": [products.k11, products.k9],
  "natural-perfume": [products.k11, products.k9, products.k8],
  "outdoor-spray": [products.k11, products.k10, products.k9],
  "cleaning-spray": [products.k12],
  "laundry-oils": [products.k11, products.k9],
  "potpourri": [products.k15],
  "aromatic-table": [products.k12, products.k1, products.k15],
  "aroma-sausage": [products.k12],
  "what-is-essential-oil": [products.k11],
  "co-impact-sourcing": [products.k12],
  "oil-storage": [products.k12, products.k15],
  "deep-blue": [products.db, products.dbr],
};
