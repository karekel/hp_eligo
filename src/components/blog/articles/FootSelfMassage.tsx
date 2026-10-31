import Link from "next/link";
import { oilColors } from "../Botanicals";
import { CautionBox, DataTable, Faq, MethodCard, NextStepBox, PairingList, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** おやすみ前の足裏セルフマッサージの記事 */
export const footSelfMassage: ArticleContent = {
  summary: [
    "足に使うオイルの選び方と、1回分の薄め方",
    "足裏から足首までのセルフマッサージの手順",
    "力加減のコツと、使うときの注意点",
  ],
  toc: [
    { id: "oils", title: "足に使うオイルの選び方" },
    { id: "dilute", title: "1回分のオイルを作る" },
    { id: "steps", title: "足裏セルフマッサージの手順" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "スポーツ×アロマの新習慣！毎日のセルフケアに取り入れたい香りとは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年9月29日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/health/3102/",
      note: "植物油20mLに4滴以内で1%以下、オイルを小さじ約1杯取ること、足首からひざへさする動き、くるぶしのまわりを包んで円を描く動き",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "入浴後に行うこと、手のひらでオイルを温めること、力を抜いて肌に密着させ、ひじで動かす意識で行うこと、植物油はトリートメント用を選ぶこと、ホホバ油の特徴、ナッツアレルギーの注意、トリートメントは医療を目的とした行為ではないこと",
    },
    {
      title: "精油を1%以下に希釈する理由とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年6月16日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/stepup/2448/",
      note: "ボディ用は1%以下という目安",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "原液は必ず薄めること、症状が軽くても迷わず受診すること",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "「塗・香」の表示、就寝時に足裏に使う案内、香りの特徴、製品の注意文",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "「塗・香」の表示、就寝前に足裏に使う案内、香りの特徴",
    },
    {
      title: "ドテラバランス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-balance-15ml/",
      note: "「塗・香」の表示、一日の始まりに足裏に使う案内、香りの特徴",
    },
    {
      title: "ドテラ ココナッツオイル（フラクショネイティッド）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-coconut-oil-fractionated/",
      note: "キャリアオイルとして使える製品であること",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "足裏が塗布に適した部位の一つであること、初回は少量にすること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、肌の弱い人や初めての人は低い濃度から試すこと、お年寄りや既往歴のある方は基準の半分以下の量で試すこと、皮膚刺激に注意が必要な精油の例",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと、3歳以上12歳以下は大人の使用量の10分の1程度から始めること",
    },
    {
      title: "消費者庁からの精油の使い方に関する注意喚起について",
      publisher: "公益社団法人 日本アロマ環境協会（2025年4月2日）",
      url: "https://www.aromakankyo.or.jp/aeaj-news/detail/2296",
      note: "オイルがついたティッシュの捨て方、タオルは乾燥機を避けて干すこと",
    },
  ],
  Body: () => (
    <>
      <p>
        一日の終わりに足元をゆっくりなでる時間は、オイルの香りを楽しむよいタイミングです。道具はほとんどいりません。キャリアオイルとお気に入りの1本があれば始められます。
      </p>
      <p>この記事では、おやすみ前に足裏へオイルを使うときの選び方、薄め方、手順を紹介します。体の不調を変えるためのものではなく、香りと手ざわりを楽しむ時間として取り入れてください。</p>

      <h2 id="oils">足に使うオイルの選び方</h2>
      <p>
        肌に使うので、ラベルに「化粧品」の表示がある製品を選びます。製品ページに「塗・香」の表示があり、足裏の使い方が載っているオイルには、次のものがあります。
      </p>
      <PairingList
        items={[
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "パウダリーで軽やかなフローラルの香り" },
          { name: "ドテラセレニティー", en: "Serenity", color: oilColors.lavender, note: "温かみのあるフローラルとハーブの香り" },
          { name: "ドテラバランス", en: "Balance", color: oilColors.frankincense, note: "軽やかで甘さのある、樹木の香り" },
        ]}
      />
      <p>ドテラバランスの製品ページは、一日の始まりに足裏に使う案内です。朝の香りとして試すのもよいでしょう。</p>
      <p>
        薄めるキャリアオイルは、食用ではなく肌に使うためのものを選びます。日本アロマ環境協会の資料では、ホホバは幅広い肌質に使いやすく、酸化しにくい油として紹介されています。ナッツアレルギーのある人は、スイートアーモンドなどナッツ由来の油に注意しましょう。
      </p>

      <h2 id="dilute">1回分のオイルを作る</h2>
      <p>
        製品ページには足裏に数滴使う案内もありますが、この記事では日本アロマ環境協会の目安に合わせて、濃度1%以下に薄めます。足裏は皮膚が厚い場所ですが、原液のままつけないようにしましょう。
      </p>
      <MethodCard no={1} title="濃度約1%のオイル" items={["キャリアオイル 小さじ1杯（約5mL）", "オイル 1滴"]}>
        <Steps
          steps={[
            { title: "小皿にキャリアオイルを取る", text: "小さじ1杯ほどが目安です。足りないときは、同じ割合で作り足します。" },
            { title: "オイルを1滴加えて混ぜる", text: "清潔なスプーンで混ぜます。作り置きはせず、その日に使い切ります。" },
          ]}
        />
        <PointBox>キャリアオイルの選び方と濃度の計算は、<Link href="/blog/carrier-oil-dilution">キャリアオイルの希釈の計算</Link>で確認できます。</PointBox>
      </MethodCard>
      <p>量を変えるときは、次の表を目安にしてください。肌が弱い人や初めての人は、濃度の低い組み合わせから試しましょう。</p>
      <DataTable
        caption="キャリアオイルの量と滴数の目安"
        headers={["キャリアオイル", "オイル", "濃度の目安"]}
        rows={[
          ["小さじ1杯（約5mL）", "1滴", "約1%"],
          ["小さじ2杯（約10mL）", "1滴", "約0.5%"],
          ["小さじ2杯（約10mL）", "2滴", "約1%"],
        ]}
      />

      <h2 id="steps">足裏セルフマッサージの手順</h2>
      <p>お風呂上がりなど、肌があたたまっているときが向いています。椅子に座り、床にタオルを敷いて始めましょう。</p>
      <div className="mt-6">
        <Steps
          steps={[
            { title: "手のひらでオイルをあたためる", text: "片足分を手に取り、両手を合わせてあたためます。" },
            { title: "足裏全体にのばす", text: "手のひらを足裏にぴったりつけて、かかとからつま先へ2〜3回なでます。" },
            { title: "親指で足裏をなでる", text: "両手で足を持ち、親指でかかとからつま先へ、ゆっくりなでます。押し込まず、軽い力で行います。" },
            { title: "くるぶしのまわりを包む", text: "両手でくるぶしを包み、円を描くようになでます。" },
            { title: "足首からひざへさする", text: "両手で足首からひざへ、2〜3回やさしくさすります。" },
            { title: "反対の足も同じように行う", text: "終わったら、余分なオイルをタオルで押さえ、手をよく洗います。" },
          ]}
        />
      </div>
      <PointBox>手のひらの力を抜いて、肌に密着させるのがコツです。ひじから動かすつもりで行うと、力が入りすぎません。強く押すより、ゆっくり動かしましょう。</PointBox>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="足に使うときの注意点"
        items={[
          "傷やはれもの、湿疹のある部位には使わないでください。",
          "赤み、かゆみ、刺激を感じたら洗い流して使用をやめ、皮膚科専門医に相談してください。",
          "協会は、ペパーミント、ティートリー、ユーカリを皮膚刺激に注意が必要な精油の例に挙げています。このマッサージには使わないでください。",
          "柑橘系の製品を塗ったあとは、製品の注意表示に従い、12時間ほど直射日光を避けてください。",
          "オイルがついた足で歩くと滑りやすくなります。終わるまで立ち歩かないようにしましょう。",
          "オイルを拭いたティッシュは水で湿らせてから捨ててください。タオルは乾燥機にかけず、干して乾かします。",
          "お年寄りや既往歴のある方は、基準の半分以下の量で試してください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方は、使う前に医師または薬剤師に相談してください。",
          "足の不調や体の症状が気になるときは、自分で判断せず、医療機関に相談してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "毎日行ってもいいですか？",
            a: "肌の様子を見ながら行ってください。赤みやかゆみがあるときはお休みします。",
          },
          {
            q: "家族の足に行ってもいいですか？",
            a: "大人どうしなら、濃度は同じです。相手に確認しながら、軽い力で行いましょう。3歳未満の子どもには行わず、3歳以上12歳以下は大人の使用量の10分の1程度から始めます。",
          },
          {
            q: "キャリアオイルがないときは？",
            a: "原液のまま塗らず、その日は香りだけを楽しみましょう。ティッシュに1滴垂らして、そばに置く方法があります。",
          },
          {
            q: "2種類のオイルを混ぜてもいいですか？",
            a: "混ぜられます。どちらも「化粧品」の表示がある製品を選び、滴数は合計で数えます。小さじ1杯では合計1滴までなので、2種類なら小さじ2杯に1滴ずつ入れると、濃度は約1%です。",
          },
        ]}
      />

      <p>
        今夜はまず、小さじ1杯のキャリアオイルに1滴から試してみてください。お風呂の時間にも香りを取り入れたいときは<Link href="/blog/bath-oils">お風呂でのオイルの使い方</Link>、使ったタオルの扱いは<Link href="/blog/laundry-oils">洗濯にオイルを取り入れる</Link>も参考になります。
      </p>
      <NextStepBox />
    </>
  ),
};
