import Link from "next/link";
import { BlendRecipe, CautionBox, CheckPoints, DataTable, Faq, NextStepBox, OilProfile, PairingList, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: グレープフルーツ */
export const grapefruit: ArticleContent = {
  summary: [
    "グレープフルーツの基本情報と、ほろ苦くみずみずしい香りの特徴",
    "朝の支度、玄関、お出かけで香りを楽しむ方法と、1本を使い切る目安",
    "協会が光毒性の例に挙げていることと、「香・食」の表示で気をつけたいこと",
  ],
  toc: [
    { id: "scent", title: "グレープフルーツの香りの特徴" },
    { id: "enjoy", title: "暮らしでの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "光毒性と使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "グレープフルーツ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/grapefruit-15ml/",
      note: "学名、抽出部位と抽出方法、香りの表示、主成分、「香・食」の表示、1750年の記録と「禁断の果実」の呼び名、名前の由来、水に1〜2滴の案内、使用上の注意",
    },
    {
      title: "グレープフルーツ",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/grapefruit",
      note: "産地がアメリカ合衆国であること、スイートオレンジとザボンのハイブリッドであること、生鮮市場に出せない果実をジュースとオイルに使うこと",
    },
    {
      title: "グレープフルーツ インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/grapefruit-15ml.pdf",
      note: "15mLに皮約5kgを使うこと、相性のよいオイル",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "光毒性の説明とグレープフルーツ、ベルガモット、レモンの例、原液がついたときの対応、目に入れないこと、火気、保管",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "光毒性のある精油を塗布した日はできるだけ紫外線を避けること",
    },
    {
      title: "アロマの種類と効果を徹底解説！購入時のポイントも紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2062/",
      note: "さわやかでほろ苦さがあるみずみずしい香りという説明、コットンに1〜2滴含ませる方法、スイートオレンジに光毒性がないという説明",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "飲用や食品との摂取をすすめていないこと、開封後1年以内の目安、柑橘系の成分変化、3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "精油が一般に雑品に分類され、飲食は認められていないという説明",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、少量から始めること、医師または薬剤師への相談",
    },
    {
      title: "ドテラシトラスブリス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-citrus-bliss-15ml/",
      note: "「塗・香」の表示、内容にグレープフルーツが含まれること、柑橘系の塗布後12時間ほどの日光の注意",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "グレープフルーツをトップノートに分類していること、サイプレスと合わせた配合例",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "レモンの香りの表示",
    },
    {
      title: "オレンジ（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "オレンジの香りの表示",
    },
    {
      title: "ベルガモット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/bergamot-15ml/",
      note: "ベルガモットの香りの表示",
    },
    {
      title: "レモングラス インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/lemongrass-15ml.pdf",
      note: "レモングラスとレモングラスと相性のよいオイルにグレープフルーツが挙げられていること",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）",
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
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らして香りを楽しむ方法",
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
        グレープフルーツは、ほろ苦さのあるみずみずしい香りのオイルです。果実を切った瞬間のような明るさがあり、朝の支度や、気分を切り替えたい時間によく合います。
      </p>
      <p>
        一方で、日本アロマ環境協会が光毒性の例に挙げているオイルでもあります。この記事では、ドテラのグレープフルーツ15mLを例に、香りの特徴と楽しみ方、光毒性を含む注意点をまとめます。製品ページの表示は「香・食」なので、肌に使う方法は扱いません。
      </p>

      <h2 id="scent">グレープフルーツの香りの特徴</h2>
      <OilProfile
        name="グレープフルーツ"
        en="Grapefruit"
        image="/assets/products/grapefruit-15ml.jpg"
        color={oilColors.wildOrange}
        rows={[
          { label: "学名", value: "Citrus X paradisi" },
          { label: "抽出部位", value: "果皮（低温圧搾法）" },
          { label: "香り", value: "シトラス、フローラル、フルーティー" },
          { label: "主成分", value: "リモネン" },
          { label: "製品ページの表示", value: "15mLは「香・食」" },
        ]}
      />
      <p>
        製品ページの香りの表示は3つです。柑橘の香りに、花と果実の気配が重なります。協会は、さわやかでほろ苦さがある、みずみずしい香りと紹介しています。ドテラの分類ではトップノートにあたり、最初に広がる香りです。
      </p>
      <p>ほかの柑橘と並べると、違いと光毒性の扱いがわかります。</p>
      <DataTable
        caption="柑橘4種の香りの表示と、協会の光毒性の説明"
        headers={["オイル", "香りの表示（製品ページ）", "光毒性（協会の説明）"]}
        rows={[
          ["グレープフルーツ", "シトラス、フローラル、フルーティー", "例に挙げている"],
          ["レモン", "クリーン、フレッシュ、シトラス、ブライト", "例に挙げている"],
          ["ベルガモット", "シトラス、スパイシー、わずかにフローラル", "例に挙げている"],
          ["オレンジ", "スイート、フレッシュ、シトラス", "ないと説明（スイートオレンジ）"],
        ]}
      />
      <p>
        グレープフルーツは、スイートオレンジとザボンのハイブリッドです。学名の「X」は、ハイブリッドであることを表しています。製品ページによると1750年に初めて記録され、「禁断の果実」とも紹介されました。房のように実る姿がブドウに似ていることが、名前の由来です。
      </p>
      <p>
        産地はアメリカです。傷などの見た目の理由で生鮮市場に出せない果実はジュースとオイルに使われ、余った果物を2通りに生かしています。
      </p>
      <p>
        15mLのボトル1本に使う皮は約5kgです。15mLは<Link href="/blog/drop-count">約250〜300滴</Link>なので、1滴あたり約17〜20gの皮を使う計算になります。
      </p>

      <h2 id="enjoy">暮らしでの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Morning",
            title: "朝の支度に",
            text: "ティッシュに1滴垂らし、ドレッサーの端に置きます。協会の目安は1〜2滴です。",
          },
          {
            en: "Entrance",
            title: "玄関の香りに",
            text: "ディフューザーで5滴ほど香らせます。ほかの機種は説明書の量に合わせます。",
          },
          {
            en: "Outing",
            title: "外出のおともに",
            text: "コットンに1〜2滴含ませて小さな紙袋に入れ、かばんに入れます。肌や服に直接触れないようにします。",
          },
        ]}
      />
      <p>
        柑橘のオイルは、ほかのオイルより成分が変わりやすいとされています。協会の目安は開封後1年以内なので、使う頻度から逆算しておくと安心です。表は、ディフューザーに1回5滴使い、15mLを250〜300滴として計算しました。
      </p>
      <DataTable
        caption="15mLを1回5滴で使い切るまでの目安"
        headers={["使う頻度", "使い切るまで"]}
        rows={[
          ["週に1回", "約11〜14か月"],
          ["週に2回", "約6〜7か月"],
          ["週に3回", "約4〜5か月"],
        ]}
      />
      <p>
        週に1回では、1年の目安を超えることがあります。開封した日をラベルに書いておきましょう。保管のしかたは<Link href="/blog/oil-storage">精油の保管方法と開封後の使用期限</Link>で解説しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>
        ドテラのインフォグラフィックには、ユーカリプタスやオンガードが相性のよいオイルとして並びます。フレグランスの配合例には、サイプレスと合わせたものもあります。
      </p>
      <PairingList
        items={[
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "柑橘どうしで、明るさが強まります" },
          { name: "サイプレス", en: "Cypress", color: oilColors.peppermint, note: "木の香りが、軽い柑橘を支えます" },
          { name: "ユーカリプタス", en: "Eucalyptus", color: oilColors.peppermint, note: "葉の青さで、ほろ苦さが引き締まります" },
          { name: "レモングラス", en: "Lemongrass", color: oilColors.lemon, note: "少量でピリッとした輪郭が加わります" },
        ]}
      />
      <BlendRecipe
        title="朝の明るさに"
        drops={[
          { name: "グレープフルーツ", color: oilColors.wildOrange, count: 3 },
          { name: "レモン", color: oilColors.lemon, count: 2 },
        ]}
      />
      <BlendRecipe
        title="木の香りを添えて"
        drops={[
          { name: "グレープフルーツ", color: oilColors.wildOrange, count: 3 },
          { name: "サイプレス", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>
        どちらもディフューザーに使う合計5滴の例で、肌には使いません。組み立て方は<Link href="/blog/blend-basics">香りのブレンドの基本</Link>で解説しています。
      </p>

      <h2 id="caution">光毒性と使うときの注意点</h2>
      <CheckPoints
        items={[
          {
            title: "光毒性を知っておく",
            text: "協会は、精油の成分の一部が日光などの強い紫外線に反応し、皮膚に炎症などを起こす性質と説明しています。例はグレープフルーツ、ベルガモット、レモンで、日中の使用に注意するとしています。",
          },
          {
            title: "グレープフルーツ15mLは肌に塗らない",
            text: "製品ページの表示は「香・食」で、「塗」の表示も、肌に塗る案内もありません。香りと、表示に沿った飲食の範囲で使います。",
          },
          {
            title: "「塗」の表示がある製品は注意書きを見る",
            text: "ドテラシトラスブリスは「塗・香」で、内容にグレープフルーツが含まれます。製品ページには、塗布後12時間ほど直射日光を避けるよう書かれています。",
          },
        ]}
      />
      <CautionBox
        title="あわせて守りたいこと"
        items={[
          "原液が肌についたら、清潔な大量の流水で洗い流します。その日はできるだけ紫外線を避け、異常があれば医療機関を受診してください。",
          "原液をそのまま飲んだり、目に入れたりしないでください。",
          "口に入れてよいのは「食品添加物」の表示がある製品だけです。ラベルに書かれた量と方法を守ります。",
          "妊娠中、授乳中の方、薬を服用中、通院中の方、お子さまは、使用前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。",
          "香りで気分が悪くなったら使うのをやめて、部屋の空気を入れ替えてください。",
          "犬や猫のいる家では、使う前に獣医師に相談してください。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。開封後は早めに使い切りましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "飲み物に使えますか？",
            a: "製品ページには、1〜2滴を水に垂らす案内があります。ただし、協会は薄めたものでも精油を飲むことをすすめておらず、精油は一般に雑品で飲食は認められていないと解説しています。ここでの話は、ドテラの「食品添加物」の表示がある製品に限ります。ラベルの量と方法を守り、迷うときは香りだけを楽しみましょう。",
          },
          {
            q: "夜だけ使えば肌に使ってもいいですか？",
            a: "時間帯に関係なく、15mLの製品は肌に使いません。ティッシュやディフューザーなど、肌につけない方法で香りを楽しみましょう。",
          },
        ]}
      />

      <p>
        グレープフルーツは、肌につけずに楽しむ前提で使えば、朝の時間に取り入れやすいオイルです。飲食の考え方は<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>で確認できます。まずは明日の朝、ティッシュに1滴から試してみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
