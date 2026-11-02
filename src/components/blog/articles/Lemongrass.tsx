import Link from "next/link";
import { BlendRecipe, CautionBox, DataTable, Faq, NextStepBox, OilProfile, PairingList, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: レモングラス */
export const lemongrass: ArticleContent = {
  summary: [
    "レモングラスの基本情報と、レモンとは違う葉から生まれる香りの特徴",
    "クローゼット、部屋、アジア料理の風味づけで楽しむ方法と分量",
    "少量で強く香るオイルのブレンド例と、「香・食」の表示で気をつけたいこと",
  ],
  toc: [
    { id: "scent", title: "レモングラスの香りの特徴" },
    { id: "enjoy", title: "暮らしでの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "レモングラス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemongrass-15ml/",
      note: "学名、抽出部位と抽出方法、香りの表示、主成分、「香・食」の表示、肉料理の風味づけ、バジル、カルダモン、スペアミントとのブレンド、食品や飲み物に1〜3滴の案内、使用上の注意",
    },
    {
      title: "レモングラス",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/lemongrass",
      note: "産地がインドであること、年に4回の収穫、手で刈り取る工程、小規模農家が育てていること、蒸留後の草を燃料に使うこと",
    },
    {
      title: "レモングラス インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/lemongrass-15ml.pdf",
      note: "15mLに約1.4kgのレモングラスを使うこと、相性のよいオイル",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "レモンの抽出部位と抽出方法、香りの表示",
    },
    {
      title: "アロマの種類と効果を徹底解説！購入時のポイントも紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2062/",
      note: "ジンジャーとレモンを合わせたような鮮烈で力強い香りという説明",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "レモングラスをトップノートに分類していること",
    },
    {
      title: "エッセンシャルオイルで作る『リネンスプレー』レシピ",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/tools/product-center/Display/odor%20control-recipe.pdf",
      note: "重曹30gとラベンダー、ゼラニウム、レモングラスで作るサシェの分量、置く場所",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "香りの強いオイルを爪楊枝の先でごく少量使う方法",
    },
    {
      title: "How to Use an Entire Bottle of Lavender Oil",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/healthy-living-how-to-use-an-entire-bottle-of-lavender",
      note: "15mLのボトルに約250滴入っているという記載",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして計算すること（15mLで300滴）",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、少量から始めること、医師または薬剤師への相談",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らして香りを楽しむ方法",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "飲用や食品との摂取、料理への利用をすすめていないこと、3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、保管",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "香りに違和感があるときは中止して換気すること",
    },
  ],
  Body: () => (
    <>
      <p>
        レモングラスは、レモンのようでいて、レモンとは違う香りのオイルです。果物ではなく背の高い草の葉から取り出され、明るさの奥にピリッとした鋭さがあります。
      </p>
      <p>
        この記事では、ドテラのレモングラス15mLを例に、香りの特徴と楽しみ方を分量つきで紹介します。製品ページの表示は「香・食」なので、肌に使う方法は扱いません。
      </p>

      <h2 id="scent">レモングラスの香りの特徴</h2>
      <OilProfile
        name="レモングラス"
        en="Lemongrass"
        image="/assets/products/lemongrass-15ml.jpg"
        color={oilColors.lemon}
        rows={[
          { label: "学名", value: "Cymbopogon flexuosus" },
          { label: "抽出部位", value: "葉（水蒸気蒸留法）" },
          { label: "香り", value: "シトラス、ハーベイシャス、スモーキー" },
          { label: "主成分", value: "ゲラニアール、ネラール" },
          { label: "製品ページの表示", value: "15mLは「香・食」" },
        ]}
      />
      <p>
        製品ページの香りの表示は3つです。柑橘の明るさに、ハーブのスーッとした感じが重なり、奥に燻したようなくすんだ表情が残ります。日本アロマ環境協会は、ジンジャーとレモンを合わせたような、鮮烈で力強い香りと紹介しています。
      </p>
      <p>名前は似ていますが、レモンとは取り出す部位も方法も違います。</p>
      <DataTable
        caption="レモングラスとレモンの違い（製品ページの表記）"
        headers={["項目", "レモングラス", "レモン"]}
        rows={[
          ["抽出部位", "葉", "果皮"],
          ["抽出方法", "水蒸気蒸留法", "低温圧搾法"],
          ["香り", "シトラス、ハーベイシャス、スモーキー", "クリーン、フレッシュ、シトラス、ブライト"],
        ]}
      />
      <p>
        産地はインドです。収穫はふつう年に4回で、鎌を使って手で刈り取り、畑で乾かしたあと蒸留所へ運びます。蒸留を終えた草は、次の蒸留の燃料になります。
      </p>
      <p>
        ドテラのレモングラスを育てているのは、インドの小規模農家です。産地と生産者の関わりは<Link href="/blog/co-impact-sourcing">コ・インパクトソーシングとは？</Link>でくわしく解説しています。
      </p>
      <p>
        15mLのボトル1本に使うレモングラスは約1.4kgです。15mLは<Link href="/blog/drop-count">約250〜300滴</Link>なので、1滴あたり約4.7〜5.6gの計算になります。
      </p>

      <h2 id="enjoy">暮らしでの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Closet",
            title: "クローゼットに",
            text: "重曹に香りをつけたサシェを、クローゼットや靴箱に置きます。ドアノブにかけてもかまいません。",
          },
          {
            en: "Room",
            title: "部屋の空気を変えたいときに",
            text: "ディフューザーに、ほかのオイルと合わせて1〜2滴入れます。単体では強く感じやすい香りです。",
          },
          {
            en: "Kitchen",
            title: "アジア料理の風味づけに",
            text: "「食品添加物」の表示がある製品に限った使い方です。カレーやスープに、爪楊枝の先でごく少量加えます。",
          },
        ]}
      />
      <p>
        サシェの分量は、ドテラの公式レシピで重曹30gに対してラベンダー7滴、ゼラニウム6滴、レモングラス7滴です。花の甘さが、レモングラスの鋭さを包む組み合わせです。作り方は<Link href="/blog/potpourri">ポプリの作り方</Link>で紹介しています。
      </p>
      <p>
        失敗しやすいのは入れすぎです。ラルツディフューザーの目安は5〜10滴ですが、全部をレモングラスにせず、1〜2滴にとどめましょう。残りを柑橘やミントのオイルにすると、香りが広がっても部屋がきつくなりません。
      </p>
      <p>
        料理では、製品ページにメインディッシュや肉料理の風味づけという案内と、食品や飲み物に1〜3滴という目安があります。香りが強いので、清潔な爪楊枝の先につけて混ぜ、味を見ながら足します。
      </p>
      <p>
        日本アロマ環境協会は、薄めたものでも精油を飲むことや食品と一緒にとることをすすめておらず、料理への利用についても同じ立場です。ここでの料理の話は、ドテラの「食品添加物」の表示がある製品に限ったものです。お手元のラベルを確認し、記載の量と方法で使ってください。考え方は<Link href="/blog/aromatic-table">オイルで香りづけする料理</Link>で解説しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>
        ドテラのインフォグラフィックには、相性のよいオイルとしてグレープフルーツ、ティーツリー、ベチバー、シベリアンファー、クラリセージが並びます。製品ページは、バジル、カルダモン、スペアミントとのブレンドを挙げています。
      </p>
      <PairingList
        items={[
          { name: "グレープフルーツ", en: "Grapefruit", color: oilColors.wildOrange, note: "柑橘が重なり、鋭さがみずみずしさに変わります" },
          { name: "スペアミント", en: "Spearmint", color: oilColors.peppermint, note: "甘い清涼感が加わり、軽い香りに" },
          { name: "カルダモン", en: "Cardamom", color: oilColors.frankincense, note: "スパイスが加わり、アジアの台所のような香りに" },
          { name: "ベチバー", en: "Vetiver", color: oilColors.frankincense, note: "スモーキーな奥行きが深まります" },
        ]}
      />
      <BlendRecipe
        title="午後の切り替えに"
        drops={[
          { name: "グレープフルーツ", color: oilColors.wildOrange, count: 4 },
          { name: "レモングラス", color: oilColors.lemon, count: 1 },
        ]}
      />
      <BlendRecipe
        title="アジアの屋台を思わせて"
        drops={[
          { name: "スペアミント", color: oilColors.peppermint, count: 3 },
          { name: "カルダモン", color: oilColors.frankincense, count: 1 },
          { name: "レモングラス", color: oilColors.lemon, count: 1 },
        ]}
      />
      <p>
        どちらもディフューザーに使う合計5滴の例で、肌には使いません。組み立て方は<Link href="/blog/blend-basics">香りのブレンドの基本</Link>で解説しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "レモングラス15mLの製品ページの表示は「香・食」です。「塗」の表示がなく、肌に使う案内もありません。肌にはつけないでください。",
          "原液が肌についたら、清潔な大量の流水で洗い流します。目に入らないようにしましょう。",
          "口に入れてよいのは「食品添加物」の表示がある製品だけです。ラベルに書かれた量と方法を守ります。",
          "妊娠中、授乳中の方、薬を服用中、通院中の方、お子さまは、使用前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。",
          "香りで気分が悪くなったら使うのをやめて、部屋の空気を入れ替えてください。",
          "重曹のサシェは、子どもやペットが口に入れない場所に置きます。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。直射日光と湿気を避け、開封後は早めに使い切りましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "お風呂に入れてもいいですか？",
            a: "湯に入れると肌に触れるので、「香・食」の表示の製品では控えましょう。入浴の考え方はお風呂でのオイルの使い方の記事で紹介しています。",
          },
        ]}
      />

      <p>
        レモングラスは、少ない滴数で部屋の印象が変わるオイルです。まずはティッシュに1滴垂らし、シトラスの奥にあるスモーキーな表情を確かめてみてください。入浴に香りを取り入れたいときは、<Link href="/blog/bath-oils">お風呂でのオイルの使い方</Link>を読んでみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
