/**
 * 記事に関連する製品の画像（doTERRA公式サイトの製品画像）。
 * false にすると全記事の製品画像が消える。
 */
export const SHOW_PRODUCT_IMAGES = true;

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
};

export const productImages: Record<string, ProductImage[]> = {
  "no-diffuser": [products.k11],
  "doterra-drinkable": [products.k12],
  "diffuser-guide": [products.k4],
  "diffuser-blends": [products.k12, products.k16, products.k11],
  "drop-count": [products.k2],
  "carrier-oil-dilution": [products.k3, products.k11],
  "oil-containers": [products.k11],
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
};
