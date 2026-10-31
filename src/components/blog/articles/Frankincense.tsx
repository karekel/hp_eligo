import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, MethodCard, NextStepBox, OilProfile, PairingList, PointBox, Steps, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: フランキンセンス */
export const frankincense: ArticleContent = {
  summary: [
    "フランキンセンスの基本情報と、樹脂がオイルになるまでの流れ",
    "温かくスパイシーな香りを楽しむ、静かな時間とバスタイムの使い方",
    "香りのハンドオイルの作り方と、肌に使うときの濃度の目安",
  ],
  toc: [
    { id: "profile", title: "フランキンセンスはどんなオイル？" },
    { id: "usage", title: "暮らしでの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "学名、抽出部位、香りの表示、「塗・香」の表示、宗教的な儀式の薫香などの歴史、瞑想やバスタイムでの使い方、ココナッツオイルと塗布する使い方、普段の化粧品に1〜2滴加える案内、使用上の注意",
    },
    {
      title: "フランキンセンス",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/frankincense",
      note: "4種の樹脂のブレンド、産地、切り込みの過剰な採取の問題、洗浄と分類の工程、仲買を介さず収穫や選別をする人と直接協力していること",
    },
    {
      title: "ドテラ・ジャパン（フランキンセンスの案内ページ）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/lp/frankincense/",
      note: "フランキンセンスが化粧品カテゴリであること、手作り品を早めに使い切ること",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "フランキンセンスをベースノートに分類していること",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、少量から始めること、異常が出たときの対応、医師または薬剤師への相談",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会 News Letter（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "植物油20mLに精油1〜4滴で1%以下になること、1滴は約0.05mLであること、顔に使う場合は2滴までとすること",
    },
    {
      title: "精油はどのようにして作られる？主な抽出方法や具体的な活用法について紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年9月17日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4572/",
      note: "植物油を使う手作り品（アロマバーム）を1カ月以内に使い切ること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、保管、低い濃度から試すこと",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "原液を薄めて使うこと、肌が弱い人は低い濃度から試すこと",
    },
    {
      title: "化粧品を選ぶ前に知っておきたい知識 最終回 化粧品を安全に選ぶには",
      publisher: "独立行政法人 国民生活センター『国民生活』2025年9月号",
      url: "https://www.kokusen.go.jp/wko/pdf/wko-202509_04.pdf",
      note: "腕の内側など目立たない場所で小さな範囲を試すこと、異臭や色の変化があれば捨てること",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らす方法、ボディ1%以下、顔0.5%以下の濃度の目安",
    },
  ],
  Body: () => (
    <>
      <p>
        フランキンセンスは、木の樹脂から生まれるオイルです。花や果実のオイルとは違う、温かくスパイスを思わせる香りが、静かな時間によく合います。
      </p>
      <p>この記事では、樹脂がオイルになるまでの流れと香りの特徴、暮らしでの楽しみ方を紹介します。</p>

      <h2 id="profile">フランキンセンスはどんなオイル？</h2>
      <OilProfile
        name="フランキンセンス"
        en="Frankincense"
        image="/assets/products/frankincense-15ml.jpg"
        color={oilColors.frankincense}
        rows={[
          { label: "学名", value: "Boswellia carterii, sacra, papyrifera, frereana" },
          { label: "抽出部位", value: "樹脂（水蒸気蒸留法）" },
          { label: "香り", value: "ウォーム、スパイシー、クリーン" },
          { label: "製品ページの表示", value: "15mLは「塗・香」" },
        ]}
      />
      <p>
        原料は、木に切り込みを入れて採る樹脂です。製品ページによると、バビロニアやアッシリアでは宗教的な儀式の薫香として焚かれたといわれ、古代エジプトでもさまざまな用途に用いられました。
      </p>
      <h3>樹脂からオイルになるまで</h3>
      <Steps
        steps={[
          { title: "木に切り込みを入れる", text: "切り込みが多すぎたり深すぎたりすることが問題になるため、採り方に注意が必要な作業です。" },
          { title: "洗って分類する", text: "集めた樹脂を洗い、大きさと色で分けます。" },
          { title: "水蒸気で蒸留する", text: "分類した樹脂を蒸留して、オイルを取り出します。" },
        ]}
      />
      <p>
        ドテラのフランキンセンスは4種の樹脂のブレンドで、産地はエチオピア、オマーン、ソマリランドです。ドテラは、仲買を介さず、収穫や選別をする人たちと直接協力していると説明しています。この仕組みは<Link href="/blog/co-impact-sourcing">コ・インパクトソーシングとは？</Link>でも紹介しています。
      </p>
      <p>
        香りの表示のウォームは温かみ、スパイシーはピリッとしたスパイス、クリーンはさっぱりした印象のことです。樹脂の香りですが、重たいだけではありません。最初は少量から試して印象を確かめましょう。
      </p>

      <h2 id="usage">暮らしでの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Quiet time",
            title: "静かな時間に",
            text: "読書や瞑想の前に、ディフューザーの水に垂らします。音や照明を落とした部屋によく合う香りです。",
          },
          {
            en: "Bath time",
            title: "浴室に香りを置く",
            text: "ティッシュに1〜2滴垂らして小皿にのせ、湯のかからない棚に置きます。湯船には入れず、香りだけを楽しめます。",
          },
          {
            en: "Hand care",
            title: "手のお手入れの時間に",
            text: "植物油で薄めて手に広げ、香りと使い心地を楽しみます。作り方は下で紹介します。",
          },
        ]}
      />

      <MethodCard no={1} title="香りのハンドオイルを作る" items={["清潔な遮光ガラスびん", "ココナッツオイルなどの植物油20mL", "フランキンセンス4滴以内"]}>
        <Steps
          steps={[
            { title: "びんに植物油を入れる", text: "道具は清潔なものを使い、びんに植物油20mLを入れます。" },
            { title: "オイルを1滴ずつ加える", text: "4滴以内で止めると、濃度は1%以下です。ふたをして軽く振ります。" },
            { title: "腕の内側で試す", text: "初めて使うときは、低い濃度のものを少量、腕の内側などにつけて、赤みやかゆみが出ないか確かめます。" },
            { title: "1カ月以内に使い切る", text: "冷暗所で保管します。香りや色が変わったら使わないでください。" },
          ]}
        />
        <PointBox>自分で使う分だけを少量作りましょう。手作りしたものを販売したり、人に譲ったりしないでください。</PointBox>
      </MethodCard>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>フランキンセンスは、香りの土台になるベースノートのオイルです。主役に重ねるように少なめに入れると、全体に奥行きが出ます。</p>
      <PairingList
        items={[
          { name: "オレンジ", en: "Wild Orange", color: oilColors.wildOrange, note: "果皮の甘さが、樹脂の香りに軽さを足す" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花の香りが、樹脂の深みにやわらかさを足す" },
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "皮のさっぱり感で、重さのない香りに" },
          { name: "ペパーミント", en: "Peppermint", color: oilColors.peppermint, note: "清涼感が加わり、午後に合う香りに" },
        ]}
      />
      <BlendRecipe
        title="瞑想の前に"
        drops={[
          { name: "フランキンセンス", color: oilColors.frankincense, count: 3 },
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
        ]}
      />
      <BlendRecipe
        title="明るい休日の午前に"
        drops={[
          { name: "オレンジ", color: oilColors.wildOrange, count: 3 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 2 },
        ]}
      />
      <p>どちらもディフューザーの例で、合計5滴です。ラルツディフューザーの目安は5〜10滴なので、お使いの機種の説明書に合わせてください。</p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "原液を直接肌につけないようにしましょう。肌に使うのは「化粧品」の表示がある製品だけで、協会の目安はボディ1%以下、顔0.5%以下です。",
          "初めて使うときは、低い濃度で少量から試します。赤み、はれ、かゆみなどが出たら使うのをやめ、皮膚科に相談してください。",
          "目に入らないようにしましょう。耳の中や、傷、しっしんのある部分には使いません。",
          "妊娠中、授乳中の方、持病がある方、薬を飲んでいる方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "フランキンセンスを飲み物に入れてもいいですか？",
            a: "入れないでください。製品ページの表示は「塗・香」で、「食」の表示はありません。海外向けの情報は日本の区分と異なることがあります。",
          },
          {
            q: "いつものクリームに混ぜてもいいですか？",
            a: "製品ページには、普段の化粧品に1〜2滴加える案内があります。ただし協会の目安は顔で0.5%以下です。混ぜるなら少量から試し、顔まわりは特に控えめにしましょう。",
          },
          {
            q: "顔に使うときの滴数は？",
            a: "協会の目安の0.5%以下にするなら、植物油20mLに2滴までです。",
          },
        ]}
      />

      <p>
        フランキンセンスは、温かみのある香りをゆっくり味わいたいオイルです。まずは静かな時間に、ディフューザーで香りの印象を確かめてみてください。クリームに香りをつけたい方は、<Link href="/blog/handmade-cream">手作りクリームの作り方</Link>も参考にしてください。
      </p>
      <NextStepBox />
    </>
  ),
};
