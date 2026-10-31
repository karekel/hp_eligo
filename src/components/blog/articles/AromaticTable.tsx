import Link from "next/link";
import { CautionBox, CheckPoints, Faq, MethodCard, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** 食品添加物の表示があるオイルに限って料理の香りづけを紹介する記事 */
export const aromaticTable: ArticleContent = {
  summary: [
    "日本アロマ環境協会の立場と、この記事で扱う製品の範囲",
    "爪楊枝でごく少量ずつ香りを足す基本の手順",
    "揚げ物、煮込み、サラダに香りを添える3つの例",
  ],
  toc: [
    { id: "stance", title: "最初に確認したい、協会の立場と製品の表示" },
    { id: "basics", title: "香りづけの基本は「ごく少量」" },
    { id: "ideas", title: "料理に香りを添える3つの例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "希釈したものでも飲用や食品との摂取、料理への利用をすすめていないこと、健康被害が疑われるときの受診と保健所への相談",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "精油は一般に雑品とされ飲食は認められていないという説明、引火性とキッチンの火への注意",
    },
    {
      title: "精油はどのようにして作られる？主な抽出方法や具体的な活用法について紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年9月17日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4572/",
      note: "精油は水に溶けにくく、油脂になじみやすいこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "化粧品、食品添加物、雑貨の3種類に分かれること、少量から始めること、妊娠中や服薬中の人と子どもの相談先",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan 合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "香料として使う位置づけ、強い香りは爪楊枝の先でごく少量を使うこと、ラベルの使用方法に従うこと",
    },
    {
      title: "レモン",
      publisher: "doTERRA CPTG Essential Oils Japan 合同会社",
      url: "https://www.doterra.com/JP/ja_JP/p/lemon-oil",
      note: "レモンの製品ページにある1〜3滴という目安",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan 合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "レモン15mLの製品ページの「食」の表示",
    },
    {
      title: "ベルガモット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan 合同会社）",
      url: "https://www.doterra-info.jp/product/bergamot-15ml/",
      note: "ベルガモットの製品ページの「食」の表示、サラダに2滴という例、1〜3滴という目安",
    },
    {
      title: "オレンジ（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan 合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "オレンジ15mLの製品ページの「香・食」の表示",
    },
    {
      title: "オレンジ（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan 合同会社）",
      url: "https://www.doterra-info.jp/product/orange-5ml/",
      note: "オレンジ5mLの製品ページの「塗・香」の表示",
    },
    {
      title: "ライム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan 合同会社）",
      url: "https://www.doterra-info.jp/product/lime-15ml/",
      note: "ライム15mLの製品ページの「食」の表示",
    },
    {
      title: "タンジェリン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan 合同会社）",
      url: "https://www.doterra-info.jp/product/tangerine-15ml/",
      note: "タンジェリン15mLの製品ページの「食」の表示",
    },
    {
      title: "Spice it up with Essential Oils",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/recipe-dry-herbs-spices-essential-oils",
      note: "オイル1滴が乾燥ハーブ小さじ2杯ほどに当たること、毎回清潔な爪楊枝で少なめから足すこと（日本の区分とは異なる場合がある）",
    },
    {
      title: "家庭でできる食中毒予防の６つのポイント",
      publisher: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/01_00006.html",
      note: "肉や魚などの加熱の目安（中心部75℃で1分以上）",
    },
  ],
  Body: () => (
    <>
      <p>
        アロマティックテーブルは、料理に香りを添えて食卓を楽しむ工夫のことです。この記事では、ドテラの「食品添加物」の表示がある製品に限って、香りづけの手順を紹介します。
      </p>
      <p>
        先にお伝えしたいことがあります。日本アロマ環境協会は、精油を薄めたものでも、飲用や食品と一緒にとることをすすめていません。この記事は飲用をすすめるものではなく、健康を目的にした使い方も扱いません。
      </p>

      <h2 id="stance">最初に確認したい、協会の立場と製品の表示</h2>
      <p>
        協会は、精油が濃縮された液体であることから、料理への利用もすすめていません。日本の法律では精油は一般に雑品とされ、飲食は認められていないとも説明しています。
      </p>
      <p>
        一方で、ドテラのオイルは「化粧品」「食品添加物」「雑貨」の3種類に分かれています。ここで扱うのは「食品添加物」の表示がある製品だけで、ラベルの表示どおりの量と方法で使うことが前提です。区分の考え方は<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>で説明しています。
      </p>
      <CheckPoints
        items={[
          { title: "ラベルの区分を見る", text: "「食品添加物」の表示がない製品は、料理に使いません。" },
          { title: "容量まで確かめる", text: "同じ名前でも容量で区分が変わります。オレンジの製品ページの表示は、15mLが「香・食」、5mLが「塗・香」です。" },
          { title: "表示された量と方法を守る", text: "この記事の例より、お手元のラベルの表示を優先してください。" },
          { title: "迷ったら使わない", text: "不安なときは、果物の皮や乾燥ハーブなど、食材そのもので香りをつけましょう。" },
        ]}
      />

      <h2 id="basics">香りづけの基本は「ごく少量」</h2>
      <p>
        レモンとベルガモットの製品ページには、食品に加える量として1〜3滴という目安があります。ドテラのカナダ向け公式レシピは、オイル1滴が乾燥ハーブ小さじ2杯ほどに当たるとしています。料理には、ボトルから直接垂らさず、爪楊枝で少しずつ足しましょう。
      </p>
      <Steps
        steps={[
          { title: "火から離す", text: "オイルには引火性があります。鍋は火を止めてから入れ、サラダやドレッシングはコンロから離れた所で作ります。" },
          { title: "清潔な爪楊枝の先にオイルをつける", text: "先がぬれる程度で十分です。" },
          { title: "料理全体に混ぜて味を見る", text: "器に盛ったあとに足すと香りが強く出やすいので、鍋やボウルの中で混ぜます。" },
          { title: "足りなければ新しい爪楊枝で足す", text: "入れすぎると元に戻せません。足すたびに清潔な爪楊枝を使います。" },
        ]}
      />
      <PointBox>オイルは水に溶けにくく、油脂になじみやすい性質があります。ドレッシングのオイルやバターに混ぜると、全体に香りが広がります。</PointBox>

      <h2 id="ideas">料理に香りを添える3つの例</h2>
      <p>いつもの料理に、柑橘の香りを足す例です。</p>
      <MethodCard no={1} title="レモンの香りの塩をフライに添える" items={["塩", "レモン", "爪楊枝", "小皿"]}>
        <Steps
          steps={[
            { title: "小皿に塩を取る", text: "食べる分だけ用意します。" },
            { title: "爪楊枝でレモンを混ぜる", text: "先がぬれる程度のオイルを塩に混ぜます。" },
            { title: "揚げ物に添える", text: "果汁と違って水分が増えないので、衣が湿りません。" },
          ]}
        />
      </MethodCard>
      <MethodCard no={2} title="トマトの煮込みにオレンジを添える" items={["トマトの煮込み", "オレンジ", "爪楊枝"]}>
        <Steps
          steps={[
            { title: "いつもどおり煮込む", text: "肉や魚を入れる場合は、中まで火を通します。" },
            { title: "火を止めてオレンジを混ぜる", text: "爪楊枝で少し足し、全体を混ぜます。" },
          ]}
        />
      </MethodCard>
      <MethodCard no={3} title="ベルガモットの香りのドレッシング" items={["オリーブオイル", "酢", "塩", "ベルガモット", "爪楊枝"]}>
        <Steps
          steps={[
            { title: "いつもの分量でドレッシングを作る", text: "作るのは食べる分だけにします。" },
            { title: "爪楊枝でベルガモットを混ぜる", text: "製品ページにはサラダに2滴という例がありますが、まずは爪楊枝の先から試します。" },
            { title: "野菜と和える", text: "残したときはガラス容器に入れて冷蔵し、早めに使い切ります。" },
          ]}
        />
      </MethodCard>
      <p>ライムはアジア風の麺やスープ、タンジェリンは焼き魚でも香りを試せます。どちらも製品ページに「食」の表示があります。</p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "「食品添加物」の表示がない製品は、口に入れないでください。",
          "原液をそのまま飲んだり、料理に直接たくさん垂らしたりしないでください。",
          "香りを楽しむための使い方です。健康のために食べるものではありません。",
          "妊娠中、授乳中の方、薬を服用中や通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "体に異変を感じたら、すぐに使用をやめて受診し、最寄りの保健所にも相談してください。",
          "肉や魚の加熱はいつもどおりに行います。目安は中心部75℃で1分以上です。",
          "原液を肌につけたり、目に入れたりしないでください。使ったボトルはすぐ閉めて、火のそばを避け、子どもやペットの手の届かない場所に戻します。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "飲み物に入れてもいいですか？",
            a: "この記事では、飲み物に入れる使い方はすすめていません。協会は飲用をすすめていません。ドテラの製品については、お手元のラベルの使用方法を確認してください。",
          },
          {
            q: "レモン果汁の代わりになりますか？",
            a: "香りは足せますが、酸味は足せません。酸味がほしい料理には果汁を使いましょう。",
          },
          {
            q: "子どもも食べる料理に使えますか？",
            a: "子どもが口にする場合は、使う前に医師または薬剤師に相談してください。迷うときは、オイルを足す前に取り分けましょう。",
          },
        ]}
      />

      <p>
        協会が料理への利用をすすめていないことを知ったうえで、使うかどうかはご自身で判断してください。使う場合は、表示のある製品を、ラベルどおりに、ごく少量から。ひき肉料理の例は<Link href="/blog/aroma-sausage">手作りアロマソーセージの作り方</Link>で紹介しています。
      </p>
      <NextStepBox />
    </>
  ),
};
