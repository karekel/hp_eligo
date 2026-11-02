import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, MethodCard, NextStepBox, OilProfile, PairingList, PointBox, Steps, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: サンダルウッド */
export const sandalwood: ArticleContent = {
  summary: [
    "サンダルウッド（白檀）の基本情報と、甘く乾いた木の香りの特徴",
    "製品ページの販売終了の案内と、手元のボトルで確かめたいこと",
    "静かな時間、ディフューザー、ロールオンで少しずつ楽しむ方法と分量",
  ],
  toc: [
    { id: "scent", title: "サンダルウッドの香りの特徴" },
    { id: "enjoy", title: "暮らしでの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "サンダルウッド",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/sandalwood-5ml/",
      note: "学名、抽出部位と抽出方法、香りの表示、主成分、「塗・香」の表示、2025年7月3日で販売を終了する案内、宗教儀式や瞑想の薫香としての歴史、使用上の注意",
    },
    {
      title: "サンダルウッド",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/sandalwood",
      note: "産地がインドであること、半寄生植物であること、収穫まで少なくとも15年、心材の濃度、蒸留に最大8日、木が香りを保つこと",
    },
    {
      title: "サンダルウッド インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/sandalwood-5ml.pdf",
      note: "5mLに約0.1kgのサンダルウッドを使うこと、相性のよいオイル",
    },
    {
      title: "サンダルウッド（白檀）精油とは？期待できる効果や活用法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年12月24日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/health/3581/",
      note: "白檀の名前の由来、ミルキーな甘さを含むウッディ調の香り、香水のベースノート、インディアンサンダルウッドの減少、手作りのオイルを1か月以内に使い切ること",
    },
    {
      title: "イリアヒ（ハワイアンサンダルウッド）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/iliahi-hawaiian-sandalwood-5ml/",
      note: "2026年8月31日で販売を終了する案内、限定販売の製品であること",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "サンダルウッドをベースノートに分類していること、ベースノートの配分5〜20%",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "「塗・香」の表示、成分にサンダルウッドが含まれること",
    },
    {
      title: "How to Use an Entire Bottle of Lavender Oil",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/healthy-living-how-to-use-an-entire-bottle-of-lavender",
      note: "15mLのボトルに約250滴入っているという記載（5mLはその3分の1で計算）",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして計算すること（5mLで100滴）",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "ロールオンは植物油10mLに精油1〜2滴で、肌に使うときは1%以下に希釈すること、サンダルウッドがベースであること",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らす方法、肌に使うときの濃度の目安",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "開封後1年以内の目安、3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、保管、お年寄りや既往歴のある人の使用量",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、少量から始めること、異常が出たときの対応、医師または薬剤師への相談",
    },
  ],
  Body: () => (
    <>
      <p>
        サンダルウッドは、日本では白檀の名で親しまれてきた香木です。甘く乾いた木の香りは、お寺やお香の記憶と重なるかもしれません。
      </p>
      <p>
        ドテラのサンダルウッド5mLの製品ページには「販売終了」の表示があり、2025年7月3日で販売を終えると案内されています。この記事では、香りの特徴とあわせて、お手元のボトルで楽しむ方法を紹介します。
      </p>

      <h2 id="scent">サンダルウッドの香りの特徴</h2>
      <OilProfile
        name="サンダルウッド"
        en="Sandalwood"
        image="/assets/products/sandalwood-5ml.jpg"
        color={oilColors.frankincense}
        rows={[
          { label: "学名", value: "Santalum album" },
          { label: "抽出部位", value: "木部（水蒸気蒸留法）" },
          { label: "香り", value: "ウッディー、ドライ、スイート" },
          { label: "主成分", value: "サンタロール" },
          { label: "製品ページの表示", value: "5mLは「塗・香」" },
          { label: "販売状況", value: "製品ページに「販売終了」の表示（2026年11月確認）" },
        ]}
      />
      <p>
        製品ページの香りの表示は、ウッディー、ドライ、スイートの3つです。日本アロマ環境協会は、ミルキーな甘さを含んだ柔らかなウッディ調の香りと紹介しています。香水ではベースノートとして使われ、ドテラの分類でもベースノートにあたります。ブレンドの土台になり、長く続く香りです。
      </p>
      <p>
        学名の album はラテン語で「白い」を意味します。木材の色が白く香り高いことから、日本では「白い香木」を意味する白檀と呼ばれてきました。製品ページによると、宗教儀式や深い瞑想のための薫香としても使われてきた歴史があります。
      </p>
      <p>
        産地はインドです。サンダルウッドは半寄生植物で、ほかの植物の根につながって水分と栄養を得ます。収穫までには少なくとも15年かかります。オイルが最も濃いのは木の中心の心材で、古い木ほど収量が多くなります。蒸留には最大8日かかることもあります。
      </p>
      <p>
        5mLのボトル1本に使うのは約0.1kgです。5mLは<Link href="/blog/drop-count">約83〜100滴</Link>なので、1滴あたり約1〜1.2gの計算です。協会は、インディアンサンダルウッドが減ったことから、オーストラリアンサンダルウッドの利用が進められていると説明しています。
      </p>

      <h2 id="enjoy">暮らしでの楽しみ方</h2>
      <p>
        販売終了の案内が出ている製品なので、まずお手元のボトルの状態を確かめましょう。協会の目安は開封後1年以内です。開封から1年を過ぎたものは肌につけず、香りがいつもと違うと感じたら使うのをやめます。くわしくは<Link href="/blog/oil-storage">精油の保管方法と開封後の使用期限</Link>をご覧ください。
      </p>
      <UsageCards
        items={[
          {
            en: "Quiet",
            title: "静かな時間に",
            text: "ティッシュに1滴垂らして小皿にのせ、読書の机に置きます。",
          },
          {
            en: "Diffuse",
            title: "ブレンドの土台に",
            text: "ディフューザーでは1滴だけ使い、残りを軽いオイルにします。",
          },
          {
            en: "Roll-on",
            title: "手首の香りに",
            text: "「化粧品」の表示を確認したうえで、植物油で薄めて使います。分量は下で紹介します。",
          },
        ]}
      />
      <MethodCard
        no={1}
        title="ロールオンで香りを持ち歩く"
        items={["10mLのロールオンボトル（遮光性のガラス）", "植物油10mL", "サンダルウッド1〜2滴"]}
      >
        <Steps
          steps={[
            { title: "ラベルを確認する", text: "「化粧品」の表示と開封日を確かめます。" },
            { title: "植物油に混ぜる", text: "清潔なボトルに植物油を入れ、オイルを加えてふたをし、よく振ります。2滴で濃度は1%です。" },
            { title: "少量を試す", text: "腕の内側に少量つけて様子を見ます。赤みやかゆみが出たら使いません。" },
          ]}
        />
        <PointBox>作った日と中身をボトルに書き、1か月以内に使い切りましょう。自分で楽しむためのもので、販売や譲渡はしないでください。</PointBox>
      </MethodCard>
      <p>
        <Link href="/blog/roll-on">ロールオンアロマの作り方</Link>では、ブレンドの例も紹介しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>
        ドテラのインフォグラフィックには、相性のよいオイルとしてタンジェリン、ドテラバランス、ドテラセレニティーなどが並びます。ドテラの資料では、ブレンド全体の5〜20%をベースノートにするのが目安です。合計5滴なら1滴で20%なので、1滴で足ります。
      </p>
      <PairingList
        items={[
          { name: "タンジェリン", en: "Tangerine", color: oilColors.wildOrange, note: "柑橘の甘さが、乾いた木の香りを明るくします" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花のやわらかさが重なり、穏やかな香りに" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "ベースどうしで、お香のような深みに" },
        ]}
      />
      <BlendRecipe
        title="1日の終わりに"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 4 },
          { name: "サンダルウッド", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <BlendRecipe
        title="柑橘で軽やかに"
        drops={[
          { name: "タンジェリン", color: oilColors.wildOrange, count: 4 },
          { name: "サンダルウッド", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <p>
        どちらもディフューザーに使う合計5滴の例で、ロールオンには使いません。組み立て方は<Link href="/blog/blend-basics">香りのブレンドの基本</Link>で解説しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "原液を直接肌につけないようにしましょう。肌に使うときはラベルの「化粧品」の表示を確認し、植物油で薄めます。協会の目安はボディ1%以下、顔0.5%以下です。",
          "初めて肌に使うときは、低い濃度で少量から試します。赤み、はれ、かゆみなどが出たら使うのをやめ、皮膚科に相談してください。",
          "目に入らないようにしましょう。耳の中や、傷、しっしんのある部分には使いません。",
          "治療中、妊娠中、授乳中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。お年寄りは、基準の半分以下の量で試します。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。直射日光と湿気を避け、ふたをしっかり閉めましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "これから同じ製品を買えますか？",
            a: "製品ページは販売終了の表示で、購入の案内は見当たりません。ラインナップの見直しが理由とされています。限定品のイリアヒ（ハワイアンサンダルウッド）5mLも、2026年8月31日で販売終了の案内です。",
          },
          {
            q: "飲み物や料理に使えますか？",
            a: "製品ページの表示は「塗・香」で、「食」の表示はありません。口に入れないでください。",
          },
        ]}
      />

      <p>
        サンダルウッドは、1滴で香りに深さが生まれるオイルです。お手元にある方は、開封日を確かめて、ティッシュに1滴から香りの変化を追ってみてください。<Link href="/blog/serenity">ドテラセレニティー</Link>の成分にも、サンダルウッドが含まれています。
      </p>
      <NextStepBox />
    </>
  ),
};
