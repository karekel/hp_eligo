import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, NextStepBox, OilProfile, PairingList, PointBox, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ローズマリー */
export const rosemary: ArticleContent = {
  summary: [
    "ローズマリーの基本情報と、ツンとした清涼感のある香りの特徴",
    "朝の支度、机に向かう時間、料理の香りづけで楽しむ方法と分量",
    "相性のよい香りのブレンド例と、「香・食」の表示で気をつけたいこと",
  ],
  toc: [
    { id: "scent", title: "ローズマリーの香りの特徴" },
    { id: "enjoy", title: "暮らしでの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ローズマリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/rosemary-15ml/",
      note: "学名、抽出部位と抽出方法、香りの表示、主成分、「香・食」の表示、肉料理に1〜2滴と食品や飲み物に1〜3滴の案内、使用上の注意",
    },
    {
      title: "ローズマリー",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/rosemary",
      note: "産地が北アフリカであること、地中海地方に自生し海の近くでよく育つこと、針に似た常緑の葉",
    },
    {
      title: "ローズマリー インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/rosemary-15ml.pdf",
      note: "モロッコとスペインの産地表示、15mLに約0.9kgのローズマリーを使うこと、相性のよいオイル",
    },
    {
      title: "アロマの種類と効果を徹底解説！購入時のポイントも紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2062/",
      note: "清潔感のあるスッとしたさわやかな香りという説明、「マリアのバラ」の伝説",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "ローズマリーをトップノートに分類していること、トップノートの説明",
    },
    {
      title: "エッセンシャルオイルで作る『リネンスプレー』レシピ",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/tools/product-center/Display/odor%20control-recipe.pdf",
      note: "リネンスプレーにローズマリーを5滴使うこと",
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
      title: "Spice it up with Essential Oils",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/recipe-dry-herbs-spices-essential-oils",
      note: "オイル1滴が乾燥ハーブ小さじ2杯ほどに当たること、爪楊枝で少なめから足すこと（日本の区分とは異なる場合がある）",
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
      note: "飲用や食品との摂取、料理への利用をすすめていないこと、開封後1年以内の目安、3歳未満の子どもには芳香浴以外を行わないこと",
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
        ローズマリーは、ハーブの青さにツンとした清涼感が重なる香りのオイルです。肉料理のハーブとして知られる植物ですが、エッセンシャルオイルなら、朝の支度や机に向かう時間にも香りを広げられます。
      </p>
      <p>
        この記事では、ドテラのローズマリー15mLを例に、香りの特徴と楽しみ方を分量つきで紹介します。製品ページの表示は「香・食」なので、肌に使う方法は扱いません。
      </p>

      <h2 id="scent">ローズマリーの香りの特徴</h2>
      <OilProfile
        name="ローズマリー"
        en="Rosemary"
        image="/assets/products/rosemary-15ml.jpg"
        color={oilColors.peppermint}
        rows={[
          { label: "学名", value: "Rosmarinus officinalis" },
          { label: "抽出部位", value: "花、葉（水蒸気蒸留法）" },
          { label: "香り", value: "カンファー、ハーベイシャス" },
          { label: "主成分", value: "1,8-シネオール、α-ピネン、カンファー" },
          { label: "製品ページの表示", value: "15mLは「香・食」" },
        ]}
      />
      <p>
        香りの表示にあるカンファーは、樟脳のようなツンとする香りです。ハーベイシャスは、ハーブのようなスーッとする香りを指します。日本アロマ環境協会は、清潔感のあるスッとしたさわやかな香りと紹介しています。ドテラの分類ではトップノートにあたり、ふたを開けた瞬間に強い印象を残します。
      </p>
      <p>
        ローズマリーは、針に似た葉をつける常緑の植物です。地中海地方に自生し、海の近くでよく育ちます。ドテラの産地情報には北アフリカとあり、インフォグラフィックにはモロッコとスペインが示されています。
      </p>
      <p>
        15mLのボトル1本には、約0.9kgのローズマリーを使います。15mLは<Link href="/blog/drop-count">約250〜300滴</Link>なので、1滴あたり約3〜3.6gの計算です。香りが強いオイルなので、少ない滴数から試しましょう。
      </p>
      <p>
        協会は、聖母マリアが青いマントをかけると白い花が青く変わったという伝説から、「マリアのバラ」と呼ばれるようになったと紹介しています。
      </p>

      <h2 id="enjoy">暮らしでの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Morning",
            title: "朝の支度に",
            text: "ティッシュに1滴垂らし、洗面台の端に置きます。香りが弱ければ1滴足します。協会の目安は1〜2滴です。",
          },
          {
            en: "Desk",
            title: "机に向かう時間に",
            text: "読書や書きものの前に、ディフューザーで香らせます。ほかのオイルと合わせて、全体を軽くするのがコツです。",
          },
          {
            en: "Kitchen",
            title: "料理の香りづけに",
            text: "「食品添加物」の表示がある製品に限った使い方です。肉料理に、爪楊枝の先でごく少量から加えます。",
          },
        ]}
      />
      <p>
        製品ページには、肉料理やメインディッシュに1〜2滴加える案内と、食品や飲み物に1〜3滴という目安があります。ただ、1滴でも香りは強く出ます。ドテラのカナダ向け公式ブログは、オイル1滴を乾燥ハーブ小さじ2杯ほどとしています。レシピの乾燥ローズマリーが小さじ1なら、単純計算で半滴です。ボトルから直接落とさず、清潔な爪楊枝の先につけて混ぜ、味を見ながら足しましょう。
      </p>
      <p>
        日本アロマ環境協会は、薄めたものでも精油を飲むことや食品と一緒にとることをすすめておらず、料理への利用についても同じ立場です。ここでの料理の話は、ドテラの「食品添加物」の表示がある製品に限ったものです。お手元のラベルを確認し、記載の量と方法で使ってください。迷うときは香りだけを楽しみましょう。考え方は<Link href="/blog/aromatic-table">オイルで香りづけする料理</Link>で解説しています。
      </p>
      <PointBox>
        布に香りを添えるなら、ドテラの公式レシピのリネンスプレーにローズマリーが5滴入っています。分量と手順は<Link href="/blog/lavender">ラベンダーの記事</Link>にまとめました。
      </PointBox>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>
        ドテラのインフォグラフィックには、相性のよいオイルとしてレモン、サイプレス、ゼラニウム、バジル、ユーカリプタスが並んでいます。ツンとした角を、柑橘の明るさや花の甘さで丸めるのが組み合わせの考え方です。
      </p>
      <PairingList
        items={[
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "皮の明るさが加わり、朝に合う軽い香りに" },
          { name: "サイプレス", en: "Cypress", color: oilColors.peppermint, note: "木の香りが重なり、森を歩くような印象に" },
          { name: "ゼラニウム", en: "Geranium", color: oilColors.lavender, note: "花の甘さが、ツンとした角を丸くします" },
          { name: "ユーカリプタス", en: "Eucalyptus", color: oilColors.peppermint, note: "葉の青さが重なり、透明感が増します" },
        ]}
      />
      <BlendRecipe
        title="朝の窓を開けたときに"
        drops={[
          { name: "レモン", color: oilColors.lemon, count: 3 },
          { name: "ローズマリー", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <BlendRecipe
        title="森の空気を思わせて"
        drops={[
          { name: "サイプレス", color: oilColors.peppermint, count: 3 },
          { name: "ローズマリー", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>
        どちらもディフューザーに使う合計5滴の例です。ドテラのラルツディフューザーの目安は5〜10滴なので、ほかの機種は説明書に合わせてください。組み立て方は<Link href="/blog/blend-basics">香りのブレンドの基本</Link>で解説しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "ローズマリー15mLの製品ページの表示は「香・食」です。「塗」の表示がなく、肌に使う案内もありません。肌や髪にはつけないでください。",
          "原液が肌についたら、清潔な大量の流水で洗い流します。目に入らないようにしましょう。",
          "口に入れてよいのは「食品添加物」の表示がある製品だけです。ラベルに書かれた量と方法を守ります。",
          "妊娠中、授乳中の方、薬を服用中、通院中の方、お子さまは、使用前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。",
          "香りで気分が悪くなったら使うのをやめて、部屋の空気を入れ替えてください。",
          "犬や猫のいる家では、使う前に獣医師に相談してください。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。直射日光と湿気を避け、開封後は早めに使い切りましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "シャンプーやヘアケアに混ぜてもいいですか？",
            a: "ローズマリー15mLの製品ページの表示は「香・食」で、髪や地肌に使う案内はありません。混ぜずに、香りを楽しむ使い方にとどめてください。",
          },
          {
            q: "1本でどのくらい使えますか？",
            a: "ブレンド例のように1回2滴なら、15mLで約125〜150回分です。週に3回使うと10〜12か月ほどで、協会の開封後1年以内という目安に収まります。",
          },
        ]}
      />

      <p>
        ローズマリーは、1日の始まりに香りで区切りをつけたいときに試したいオイルです。まずは明日の朝、ティッシュに1滴から始めてみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
