import Link from "next/link";
import { CautionBox, DataTable, Faq, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** アロマタッチ ハンドテクニックの手順を紹介する記事 */
export const aromatouchHand: ArticleContent = {
  summary: [
    "アロマタッチ ハンドテクニックの特徴と、全身の技法との違い",
    "使えるオイルの選び方と、肌に合わせて薄める量の目安",
    "手のタッチの4ステップと、家族と楽しむときの注意点",
  ],
  toc: [
    { id: "what", title: "ハンドテクニックとは" },
    { id: "oils", title: "オイルの選び方と量" },
    { id: "steps", title: "4つのステップ" },
    { id: "caution", title: "家族と楽しむときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "アロマタッチ ハンドテクニックの動作",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-hand-technique-movements",
      note: "誰でも行えること、数分で両手に行えること、場所を選ばないこと、一定で軽いタッチ、アロマタッチ テクニックの時間",
    },
    {
      title: "ハンドテクニックのステップ",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-hand-technique-steps",
      note: "4段階の順番、順番どおりに行うこと、動作の説明が動画であること",
    },
    {
      title: "アロマタッチ ハンドテクニックに使用するオイルの選び方",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-hand-technique-how-to-choose-an-oil",
      note: "化粧品カテゴリのオイルを使うこと、柑橘系は塗布後12時間程度直射日光を避けること、オイルの例",
    },
    {
      title: "アロマタッチ テクニック Q & A",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-technique-question-and-answer",
      note: "片手に1〜3滴、両手で5〜10分程度、個人間の使用が前提であること、独自の手技を加えないこと、子どもは4歳以上であること",
    },
    {
      title: "「ハンドテクニックの日」誕生のストーリー 動画公開",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2026年10月29日）",
      url: "https://www.doterra-info.jp/media/3247360/",
      note: "8月10日を「ハンドテクニックの日」と定めたこと",
    },
    {
      title: "ドテラバランス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-balance-15ml/",
      note: "「塗・香」の表示、香りの表示、ハンドテクニックに使う案内",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "「塗・香」の表示、香りの表示",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "「塗・香」の表示、香りの表示",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "「塗・香」の表示、香りの表示",
    },
    {
      title: "ドテラシトラスブリス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-citrus-bliss-15ml/",
      note: "「塗・香」の表示、柑橘系のブレンドであること",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "敏感肌や子どもの肌、初めて使うオイルはキャリアオイルで薄めること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、医師または薬剤師への相談、異常が出たときの対応",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会 News Letter（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "濃度1%以下という目安、手のひらに小さじ1/2〜1のオイルを取ること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を皮膚につけないこと、お年寄りや既往歴のある人の使用量、皮膚刺激の例",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと、3歳以上12歳以下は大人の10分の1程度から始めること",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "原液を薄めて使うこと、紫外線を避けること",
    },
  ],
  Body: () => (
    <>
      <p>
        アロマタッチ ハンドテクニックは、相手の手に触れるだけで始められる、やさしいタッチの方法です。ベッドも広い場所もいらず、両手で5〜10分ほどで終わります。
      </p>
      <p>この記事では、オイルの選び方と量、4つのステップ、家族と楽しむときの注意点を紹介します。</p>

      <h2 id="what">ハンドテクニックとは</h2>
      <p>
        背中と足に行う<Link href="/blog/aromatouch-technique">アロマタッチ テクニック</Link>には45分〜1時間かかりますが、ハンドテクニックは数分で両手に行え、場所を選びません。誰でも行えるシンプルな動作とされています。
      </p>
      <p>
        タッチは一定で軽く、押し込むものではありません。座ったまま向かい合い、同じ香りを一緒に楽しむ時間と考えてください。家族や友人など、身近な人の間で楽しみましょう。ドテラ・ジャパンは語呂合わせから、8月10日を「ハンドテクニックの日」と定めています。
      </p>

      <h2 id="oils">オイルの選び方と量</h2>
      <p>
        オイルは好きなものを選べますが、「化粧品」の表示がある製品に限ります。製品ページに「塗」の表示がある例を挙げます。お手元のラベルでも確認しましょう。
      </p>
      <DataTable
        caption="ハンドテクニックに使えるオイルの例"
        headers={["オイル", "香りの印象", "こんなときに"]}
        rows={[
          ["ドテラバランス", "樹木の香りに甘さが重なる", "ゆっくり始めたいとき"],
          ["ラベンダー", "おしろいのような花の香り", "1日の終わりに"],
          ["ドテラセレニティー", "温かみのある花とハーブの香り", "おやすみ前のひとときに"],
          ["フランキンセンス", "温かくスパイシーな香り", "静かに過ごしたいときに"],
          ["ドテラシトラスブリス", "柑橘を合わせた明るい香り", "昼間より夜に（日光の注意あり）"],
        ]}
      />
      <p>
        公式の案内では、片手に使うオイルは1〜3滴です。ただし、原液を肌につけないのが基本です。公式の案内でも、敏感肌の人、子ども、初めて使うオイルはキャリアオイルで薄めるとされています。
      </p>
      <p>
        日本アロマ環境協会の目安は、体に使う場合で1%以下です。ココナッツオイルなどの植物油小さじ1杯（約5mL）にオイル1滴を混ぜ、片手に半量ずつ使うと、この目安に収まります。計算の方法は<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と希釈の計算</Link>で解説しています。
      </p>

      <h2 id="steps">4つのステップ</h2>
      <p>向かい合って座り、相手の手を下から支えます。途中で手を離さないように進めましょう。</p>
      <Steps
        steps={[
          { title: "オイルをのばし、手の甲を広げる", text: "相手の手のひらにオイルをのせ、指先まで均一にのばします。手の甲を上に向け、両手の親指で内側から外側へ広げるように動かします。" },
          { title: "手のひらを親指でなでる（エリアタッチ）", text: "手のひらを上に向け、両手の親指で中心から外側へ、交互に円を描きます。" },
          { title: "手首から指先へ進む（ピンポイントゾーン・アクティベーション）", text: "親指を手首の近くにあて、指先まで交互に小さく動かして進みます。" },
          { title: "指の間をすべらせる（指骨間ストレッチ）", text: "親指と人差し指で相手の指の股をはさみ、指先へ向けてすべらせます。すべての指の間で行います。" },
        ]}
      />
      <p>終わったら、反対の手も同じ順番で行います。</p>
      <PointBox>
        エリアとゾーンの位置や回数は、公式の動作ページの動画で確認しましょう。順番を守り、自己流の動きは足さないようにします。
      </PointBox>

      <h2 id="caution">家族と楽しむときの注意点</h2>
      <CautionBox
        items={[
          "始める前に相手の体調を聞き、気分がのらないときは無理に行わないようにしましょう。",
          "傷、はれもの、しっしんなどがある手には行いません。",
          "初めてのオイルは、低い濃度で少量から試します。赤み、はれ、かゆみなどが出たらすぐにやめて、皮膚科に相談してください。",
          "柑橘系のオイルを使ったら、12時間ほどは直射日光を避けるように相手に伝えます。",
          "終わったら石けんで手を洗い、オイルがついた手で目や顔に触れないようにしましょう。",
          "妊娠中、授乳中の方、持病がある方、薬を飲んでいる方は、使う前に医師または薬剤師に相談してください。",
          "お年寄りには、基準の半分以下の量で試します。",
          "医療の代わりになるものではありません。手や体の不調が気になるときは、医師に相談してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "どのオイルでも使えますか？",
            a: "公式の案内では自由に選べますが、「化粧品」の表示がある製品に限ります。15mLのペパーミントやオレンジのような「香・食」の製品は使いません。",
          },
          {
            q: "ペパーミントやティーツリーを使ってもいいですか？",
            a: "日本アロマ環境協会は、この2つを皮膚刺激に注意が必要な精油の例に挙げています。この記事では、使うオイルの例に入れていません。",
          },
          {
            q: "子どもにもできますか？",
            a: "3歳未満の子どもには行いません。3歳以上12歳以下は、大人の10分の1程度の量から始めます。公式のアロマタッチ テクニックの案内では、子どもは4歳以上とされています。使う前に医師または薬剤師に相談してください。",
          },
        ]}
      />

      <p>
        ハンドテクニックは、1本のオイルと数分の時間があれば始められます。まずは家族と向かい合って、好きな香りを選ぶところから試してみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
