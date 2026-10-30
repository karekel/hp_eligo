import { oilColors } from "../Botanicals";
import { BlendRecipe, CautionBox, NextStepBox, OilProfile, PairingList, UsageCards, type ArticleContent } from "../ArticleParts";

/** オイル図鑑型のサンプル記事 */
export const lavender: ArticleContent = {
  summary: [
    "ラベンダーの香りの特徴と、エッセンシャルオイルの基本情報",
    "暮らしの中での3つの楽しみ方",
    "相性のよい香りの組み合わせと、使うときの注意点",
  ],
  toc: [
    { id: "profile", title: "ラベンダーってどんな香り？" },
    { id: "usage", title: "暮らしでの3つの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
  ],
  Body: () => (
    <>
      <p>
        エッセンシャルオイルを始めるとき、最初の1本に選ばれることの多いラベンダー。やさしい花の香りは、香りに慣れていない方にも親しみやすく、ほかの香りとも合わせやすいのが特徴です。
      </p>

      <h2 id="profile">ラベンダーってどんな香り？</h2>
      <p>やわらかく甘い花の香りに、ハーブらしいほのかな青さが重なります。強すぎず、穏やかに広がる香りです。</p>
      <OilProfile
        name="ラベンダー"
        en="Lavender"
        color={oilColors.lavender}
        rows={[
          { label: "学名", value: "Lavandula angustifolia" },
          { label: "科名", value: "シソ科" },
          { label: "抽出部位", value: "花" },
          { label: "抽出方法", value: "水蒸気蒸留法" },
          { label: "香りの系統", value: "フローラル" },
        ]}
      />

      <h2 id="usage">暮らしでの3つの楽しみ方</h2>
      <UsageCards
        items={[
          { en: "Aroma", title: "香りを広げる", text: "ディフューザーやアロマストーンで。リビングや寝室など、くつろぐ場所に。" },
          { en: "Linen", title: "リネンスプレーに", text: "手作りのスプレーで、カーテンやクッションにふんわり香りを。" },
          { en: "Craft", title: "手作りアイテムに", text: "バスソルトやキャンドルなど、クラフトの香りづけにも使いやすい香りです。" },
        ]}
      />

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>ラベンダーは、柑橘系やハーブ系、ウッド系など、さまざまな香りとなじみます。</p>
      <PairingList
        items={[
          { name: "ワイルドオレンジ", en: "Wild Orange", color: oilColors.wildOrange, note: "甘く明るい印象に" },
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "すっきり軽やかに" },
          { name: "ペパーミント", en: "Peppermint", color: oilColors.peppermint, note: "爽やかなハーブの香りに" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "落ち着いた深みをプラス" },
        ]}
      />
      <BlendRecipe
        title="やわらかい甘さのブレンド"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
          { name: "ワイルドオレンジ", color: oilColors.wildOrange, count: 1 },
        ]}
      />
      <BlendRecipe
        title="すっきり軽やかなブレンド"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
          { name: "レモン", color: oilColors.lemon, count: 1 },
        ]}
      />

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "原液を直接肌につけないようにしましょう。",
          "子どもやペットの手の届かない場所に保管してください。",
          "直射日光や高温を避け、ふたをしっかり閉めて保管しましょう。",
          "使い方は製品ごとに異なります。お手元の製品ラベルの表示を確認してください。",
        ]}
      />

      <p>はじめての1本にも、ほかの香りと合わせる1本にもなるラベンダー。まずは好きな方法で、香りを楽しんでみてください。</p>
      <NextStepBox />
    </>
  ),
};
