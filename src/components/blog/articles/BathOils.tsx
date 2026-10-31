import Link from "next/link";
import { oilColors } from "../Botanicals";
import { CautionBox, Faq, MethodCard, NextStepBox, PairingList, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** お風呂でのオイルの使い方と、お湯に入れる前の注意点の記事 */
export const bathOils: ArticleContent = {
  summary: [
    "オイルをお湯に直接入れる前に知っておきたい理由",
    "無水エタノールや塩を使った入れ方と、滴数の目安",
    "お湯に入れずに香りを楽しむ方法と、控えたほうがよい方",
  ],
  toc: [
    { id: "why", title: "オイルは水に溶けにくい" },
    { id: "oils", title: "お風呂に使えるオイルの選び方" },
    { id: "how", title: "3つの楽しみ方" },
    { id: "caution", title: "お風呂で使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "お風呂でアロマを楽しもう！アロマバスの方法や効果、注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/health/1812/",
      note: "無水エタノールか植物油に溶かしてから使うこと、合計1〜5滴、無水エタノール5mL、天然塩大さじ2、多すぎると赤みやヒリヒリの原因になること、敏感肌の人はアロマバスを控えて洗面器の方法にすること、子どもの扱い",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "全身浴1〜5滴、半身浴、手浴、足浴1〜3滴、湯に入れてよくかき混ぜること",
    },
    {
      title: "アロマテラピー検定公式テキスト（2020年6月改訂版）について",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/licences/aroma/text/pdf/text_info_202006.pdf",
      note: "原液を湯に直接入れる方法から、無水エタノールに混ぜる方法へ変更したこと、入浴剤の作り方の変更",
    },
    {
      title: "精油の使用法の一部見直しについて",
      publisher: "公益社団法人 日本アロマ環境協会 機関誌『AEAJ』No.95",
      url: "https://www.aromakankyo.or.jp/newsftp/20200528news95.pdf",
      note: "入浴剤は時間がたつとエタノールが揮発して原液が残る場合があるので、作成後すぐ使うこと",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "アルコールが苦手な人は無水エタノールの代わりにホホバ油などの植物油を使えること",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "湯船に垂らす使い方の記載",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "「塗・香」の表示、入浴剤に加える使い方、香りの特徴",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "「塗・香」の表示、エプソムソルトなどに2〜3滴加えて入浴する使い方、香りの特徴",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "「塗・香」の表示、バスタイムに香らせる使い方、香りの特徴",
    },
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "肌や粘膜につけない製品であること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "皮膚刺激に注意が必要な精油の例、光毒性、お年寄りや既往歴のある方は基準の半分以下の量で試すこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせて使うこと、異常が出たら中止すること、医師または薬剤師への相談",
    },
    {
      title: "消毒用アルコールの安全な取扱いについて",
      publisher: "総務省消防庁",
      url: "https://www.fdma.go.jp/mission/prevention/alcohol/items/alcohol_leaflet.pdf",
      note: "アルコールが火気に近づくと引火しやすいこと（消毒用アルコールについての資料）",
    },
  ],
  Body: () => (
    <>
      <p>
        湯船にオイルを数滴垂らす。手軽で魅力的な方法ですが、入れる前に知っておきたいことがあります。オイルは水に溶けにくく、肌に触れる使い方になるからです。
      </p>
      <p>この記事では、お風呂で香りを楽しむ3つの方法を、分量と注意点つきで紹介します。</p>

      <h2 id="why">オイルは水に溶けにくい</h2>
      <p>
        エッセンシャルオイルは水に溶けにくい性質があります。そのまま垂らすと、原液が肌に触れるおそれがあります。量が多いと、赤みやヒリヒリの原因にもなります。
      </p>
      <p>
        日本アロマ環境協会は2020年に使用法を見直し、原液を直接入れる方法から、5mLほどの無水エタノールに混ぜてからお湯に入れる方法に変えました。
      </p>
      <p>
        ドテラの案内には、湯船に垂らす使い方も載っています。資料によって書き方が違うので、この記事では、原液が肌に触れにくい協会の方法を基本にします。
      </p>

      <h2 id="oils">お風呂に使えるオイルの選び方</h2>
      <p>
        お湯は肌に触れるので、ラベルに「化粧品」の表示がある製品を使います。製品ページで「塗・香」の表示があり、入浴やバスタイムの使い方が載っているオイルには、次のものがあります。
      </p>
      <PairingList
        items={[
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "パウダリーで軽やかなフローラルの香り" },
          { name: "ドテラセレニティー", en: "Serenity", color: oilColors.lavender, note: "温かみのあるフローラルとハーブの香り" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "温かく、スパイシーでクリーンな香り" },
        ]}
      />
      <p>
        ペパーミント、ティーツリー、ユーカリプタスは、協会が皮膚刺激に注意が必要な精油の例に挙げているので、湯船には入れません。ユーカリプタスは、肌につけない製品です。レモンやベルガモットなど「香・食」の表示の柑橘も、湯船に入れるのは避けましょう。協会は、これらに日光に反応して肌に炎症などを起こす光毒性があるとしています。
      </p>

      <h2 id="how">3つの楽しみ方</h2>

      <MethodCard no={1} title="無水エタノールに混ぜて入れる" items={["無水エタノール 5mL", "オイル 合計1〜5滴"]}>
        <Steps
          steps={[
            { title: "小さなガラス容器に無水エタノールを入れる", text: "5mLが目安です。火のそばでは行いません。" },
            { title: "オイルを加えて混ぜる", text: "全身浴は合計1〜5滴、半身浴、手浴、足浴は1〜3滴です。まずは1滴から試します。" },
            { title: "お湯に入れてよくかき混ぜる", text: "混ぜてから湯船に入ります。" },
          ]}
        />
      </MethodCard>

      <MethodCard no={2} title="バスソルトにする" items={["天然塩 大さじ2", "無水エタノール 5mL", "オイル 合計1〜5滴", "小さなスプレー容器"]}>
        <Steps
          steps={[
            { title: "無水エタノールとオイルを混ぜる", text: "アルコールに対応したスプレー容器の中で混ぜます。" },
            { title: "天然塩に吹きかける", text: "全体に行き渡るように混ぜます。" },
            { title: "すぐに湯船に入れる", text: "時間がたつとエタノールだけが揮発し、オイルの原液が残ることがあります。作り置きはしません。" },
          ]}
        />
      </MethodCard>

      <MethodCard no={3} title="洗面器のお湯で香りだけ楽しむ" items={["洗面器", "お湯", "オイル 1〜3滴"]}>
        <Steps
          steps={[
            { title: "洗面器にお湯を入れる", text: "オイルを1〜3滴垂らします。" },
            { title: "浴室の隅に置く", text: "足が当たらず、子どもの手が届かない場所を選びます。" },
          ]}
        />
        <PointBox>お湯に入らないので、「香」の表示があるオイルで楽しめます。協会は、敏感肌の方はアロマバスを控え、この方法にするようすすめています。</PointBox>
      </MethodCard>

      <PointBox>
        アルコールが苦手な方は、無水エタノールの代わりにホホバ油などの植物油に混ぜる方法もあります。薄め方は、<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方</Link>も参考にしてください。浴槽や床が滑りやすくなるので、足元に気をつけましょう。
      </PointBox>

      <h2 id="caution">お風呂で使うときの注意点</h2>
      <CautionBox
        title="お風呂で使うときの注意点"
        items={[
          "全身浴でも合計5滴までです。",
          "3歳未満の子どもには、芳香浴以外を行わないでください。協会は、3歳以上でもアロマバスはできるだけ避けるとしています。",
          "赤み、かゆみ、ヒリヒリなどを感じたら、すぐにお湯から上がって洗い流し、使用をやめてください。続くときは皮膚科専門医に相談します。",
          "お年寄りや既往歴のある方は、基準の半分以下の量で試してください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方は、使う前に医師または薬剤師に相談してください。",
          "オイルの入ったお湯が目に入らないようにしましょう。",
          "無水エタノールは火気に近づけないでください。",
          "お使いの給湯器や浴槽の説明書も確認しましょう。",
        ]}
      />
      <p>アロマバスは、香りを楽しむ時間です。体の不調が気になるときは、医師に相談してください。</p>

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "エプソムソルトは使えますか？",
            a: "ドテラセレニティーの製品ページには、エプソムソルトなどに2〜3滴加えて入浴する使い方があります。作ったらすぐに使い切り、お手元の製品ラベルの表示に従ってください。",
          },
          {
            q: "何種類か混ぜてもいいですか？",
            a: "混ぜられますが、合計が5滴を超えないようにします。多いほど香りがよくなるわけではありません。",
          },
        ]}
      />

      <p>
        はじめての日は、無水エタノールにオイルを1滴混ぜるところから試してみてください。慣れてきたら、<Link href="/blog/bath-bomb">手作りバスボム</Link>も楽しめます。
      </p>
      <NextStepBox />
    </>
  ),
};
