import Link from "next/link";
import { BlendRecipe, CautionBox, DataTable, Faq, MethodCard, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** 全身と腕や脚に使うマッサージ用オイルの分量と作り方の記事 */
export const massageOilRecipe: ArticleContent = {
  summary: [
    "キャリアオイルの量ごとの滴数がわかる分量表",
    "30mLのボトルで作る手順と、使い切りの目安",
    "腕や脚になじませるときの量と、力加減のコツ",
  ],
  toc: [
    { id: "choose", title: "マッサージ用オイルの材料を選ぶ" },
    { id: "table", title: "分量の早見表｜何滴入れる？" },
    { id: "steps", title: "作り方の手順" },
    { id: "use", title: "腕と脚、全身への使い方" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会 News Letter（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "植物油20mLに精油1〜4滴、濃度の目安、全身に使えること、食用でない植物油を選ぶこと、酸化と保管、ナッツアレルギーの注意、入浴後に行うこと、手のひらに小さじ1/2〜1を取って温めること、力を抜いて肌に密着させ、ひじで動かすこと、首の付け根から肩先への動き",
    },

    {
      title: "スポーツ×アロマの新習慣！毎日のセルフケアに取り入れたい香りとは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年9月29日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/health/3102/",
      note: "植物油20mLに4滴以内、小さじ1杯ほどを手に取ること、足首からひざ、ふくらはぎをさする動き（分量と手順の説明のみを参照）",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴＝0.05mLで計算すること、濃度の計算式、全体量にオイルも含めること",
    },
    {
      title: "精油を1%以下に希釈する理由とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年6月16日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/stepup/2448/",
      note: "ボディ用1%以下、フェイス用0.1〜0.5%以下の目安",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "植物性オイルに精油1%以下、顔は0.5%以下、肌の弱い人は低い濃度で試すこと",
    },

    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、遮光性のガラス容器、光毒性のある精油の例、肌の弱い人や初めての人は低い濃度から試すこと、お年寄りや既往歴のある方は基準の半分以下の量で試すこと",
    },
    {
      title: "精油の使用法の一部見直しについて",
      publisher: "公益社団法人 日本アロマ環境協会 機関誌『AEAJ』No.95",
      url: "https://www.aromakankyo.or.jp/newsftp/20200528news95.pdf",
      note: "事前のパッチテストをやめ、低い濃度で試す案内に変えたこと",
    },
    {
      title: "化粧品を選ぶ前に知っておきたい知識 最終回 化粧品を安全に選ぶには",
      publisher: "独立行政法人 国民生活センター『国民生活』2025年9月号",
      url: "https://www.kokusen.go.jp/wko/pdf/wko-202509_04.pdf",
      note: "初めて使うものを二の腕の内側など目立たない所で小面積に試すこと",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "原液は必ず薄めること、肌が弱い人はさらに低い濃度から試すこと、紫外線に反応する成分への注意",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "「塗・香」の表示、製品の注意文（傷やはれものの部位に使わないこと、柑橘系は塗布後12時間ほど直射日光を避けること、医師または薬剤師への相談）",
    },
    {
      title: "ゼラニウム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/geranium-15ml/",
      note: "「塗・香」の表示",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "「塗・香」の表示",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "「塗・香」の表示",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "同じ名前でも容量で製品ページの表示が変わること",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "腕と脚が塗布に適した部位の一つであること、避ける部位",
    },
    {
      title: "ドテラ･ジャパン| doTERRA",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/lp/frankincense/",
      note: "手作り品は作り置きせず、1か月以内に使い切ること、涼しい所に密栓して保管すること（手作りクリームについての案内）",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと、3歳以上12歳以下は大人の使用量の10分の1程度から始めること、妊娠中の注意、治療中の方は医療機関に相談すること",
    },
    {
      title: "手作り石けんの取り扱いにご注意を",
      publisher: "三重県 医療保健部 薬務課",
      url: "https://www.pref.mie.lg.jp/YAKUMUS/HP/0001213310003.htm",
      note: "手作り石けんの案内で、自分で使う場合と、他人へのプレゼントや販売の扱いが違うこと",
    },
    {
      title: "真夏の“油”断が火を招く！～高温環境で起こりやすくなる油の発火事故～",
      publisher: "独立行政法人 製品評価技術基盤機構（2025年7月8日）",
      url: "https://www.nite.go.jp/data/000158361.pdf",
      note: "植物油がついた布は洗濯後でも乾燥機で加熱しないこと",
    },
    {
      title: "消費者庁からの精油の使い方に関する注意喚起について",
      publisher: "公益社団法人 日本アロマ環境協会（2025年4月2日）",
      url: "https://www.aromakankyo.or.jp/aeaj-news/detail/2296",
      note: "オイルがついたティッシュを水で湿らせて捨てること、タオルは乾燥機を避けて干すこと",
    },
  ],
  Body: () => (
    <>
      <p>
        マッサージ用のアロマオイルは、キャリアオイルとエッセンシャルオイル（精油）があれば、自分で使う分を作れます。大切なのは、何mLに何滴入れるかという分量です。
      </p>
      <p>
        この記事では、全身と腕や脚に使うオイルの作り方を、分量表つきで紹介します。香りと手ざわりを楽しむレシピで、体の不調を変えるためのものではありません。「アロマオイル」と呼ばれる製品には精油でないものもあります。違いは<Link href="/blog/what-is-essential-oil">エッセンシャルオイルとは</Link>をご覧ください。
      </p>

      <h2 id="choose">マッサージ用オイルの材料を選ぶ</h2>
      <DataTable
        caption="材料の選び方"
        headers={["材料", "選び方"]}
        rows={[
          ["エッセンシャルオイル", "肌に使うので、ラベルに「化粧品」の表示がある製品だけを使う"],
          ["キャリアオイル", "食用ではなく、肌に使うための植物油を選ぶ"],
          ["ボトル", "遮光性のガラス容器を選ぶ"],
        ]}
      />
      <p>
        ドテラの製品ページに「塗・香」の表示があるオイルには、ラベンダー、ゼラニウム、フランキンセンス、ヒノキなどがあります。同じ名前でも容量で表示が変わるものがあるので、手元のラベルで「化粧品」の表示を確かめてから使いましょう。
      </p>
      <p>
        ペパーミント、ティートリー、ユーカリは、協会が肌への使用を控えるとしているので、このレシピには使いません。単品の柑橘も、製品ページに肌に塗る案内がないものが多いので、入れないでください。キャリアオイルの種類は<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方</Link>で比べています。
      </p>

      <h2 id="table">分量の早見表｜何滴入れる？</h2>
      <p>
        日本アロマ環境協会の目安は、ボディ用で濃度1%以下です。次の表の「上限」を超えないようにします。はじめての人や肌が弱い人は、「控えめ」の列から始めましょう。
      </p>
      <DataTable
        caption="作る量ごとの滴数"
        headers={["作る量", "上限（約1%）", "控えめ（約0.5%）", "使い方の例"]}
        rows={[
          ["5mL（小さじ1杯）", "1滴", "作らない", "片脚や両腕に1回"],
          ["10mL（小さじ2杯）", "2滴", "1滴", "両脚に1回"],
          ["20mL（小さじ4杯）", "4滴", "2滴", "全身に数回"],
          ["30mL（小さじ6杯）", "6滴", "3滴", "全身に1カ月以内"],
        ]}
      />
      <p>
        滴数は1滴＝0.05mLで計算しています。30mLに6滴なら、オイルは0.3mL、全体は30.3mLです。0.3÷30.3×100で、濃度は約1%になります。2種類以上を混ぜるときは、合計の滴数で数えます。
      </p>
      <p>組み合わせの例を2つ紹介します。どちらも20mLに合計4滴で、この記事で決めた配合です。</p>
      <BlendRecipe
        title="花の香りを重ねる"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 3 },
          { name: "ゼラニウム", color: oilColors.lavender, count: 1 },
        ]}
      />
      <BlendRecipe
        title="花と木の香りを合わせる"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
          { name: "ヒノキ", color: oilColors.frankincense, count: 2 },
        ]}
      />

      <h2 id="steps">作り方の手順</h2>
      <MethodCard
        no={1}
        title="30mLのボディオイルを作る"
        items={["遮光性のガラスボトル（30mL）", "キャリアオイル 30mL", "エッセンシャルオイル 合計3〜6滴", "ラベル"]}
      >
        <Steps
          steps={[
            { title: "道具を清潔にする", text: "ボトルとふたを洗い、水気を残さないように乾かします。" },
            { title: "キャリアオイルを入れる", text: "ゆっくり注ぎます。" },
            { title: "オイルを1滴ずつ落とす", text: "声に出して数えると、入れすぎを防げます。" },
            { title: "ふたを閉めてよく混ぜる", text: "静かに傾けて、全体を混ぜます。" },
            { title: "ラベルを貼る", text: "作った日とオイルの名前を書きます。" },
          ]}
        />
        <PointBox>冷暗所に置き、1カ月以内に使い切りましょう。植物油は酸化しやすいので、ふたをしっかり閉めます。</PointBox>
      </MethodCard>
      <p>
        全身に使う前に、少量を腕の内側などで試します。協会は2020年に、事前のパッチテストをやめて「低い濃度で試してから使う」案内に変えました。控えめの濃度で少しだけ試しましょう。
      </p>

      <h2 id="use">腕と脚、全身への使い方</h2>
      <p>
        入浴後など、肌が温まっているときが向いています。協会の資料では、手のひらに小さじ1/2〜1程度を取り、両手で温めてから使います。足りなければ少しずつ足しましょう。
      </p>
      <DataTable
        caption="部位ごとの量と動かし方"
        headers={["部位", "1回の量の目安", "動かし方"]}
        rows={[
          ["腕", "片腕に小さじ1/2", "手首からひじへ、手のひらでやさしくなでる"],
          ["脚", "小さじ1杯ほど", "足首からひざへ、両手で2〜3回やさしくさする"],
          ["ふくらはぎ", "脚と同じオイルで続ける", "足首からひざ裏へ、2〜3回さする"],
          ["肩", "小さじ1/2〜1", "首の付け根から肩先へ、手を密着させて動かす"],
        ]}
      />
      <p>
        コツは、手のひらの力を抜いて肌に密着させ、ひじで動かすつもりで行うことです。強く押す必要はありません。足裏から足首までの手順は<Link href="/blog/foot-self-massage">足裏セルフマッサージのやり方</Link>で紹介しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "個人で楽しむためのレシピです。自分で使う分だけ作り、販売や譲渡はしないでください。無償のプレゼントも許可の対象とする自治体の案内があります。",
          "原液を肌につけないでください。肌に使うのは「化粧品」の表示がある製品だけで、ラベルどおりに使います。",
          "清潔な道具を使い、低い濃度で少量試してから使います。作ったら早めに使い切りましょう。",
          "赤み、はれ、かゆみ、刺激を感じたら洗い流して使用をやめ、皮膚科専門医に相談してください。",
          "目のまわり、耳の中、傷やはれもの、湿疹のある部位には使わないでください。",
          "柑橘系の製品は光毒性に注意が必要です。製品の注意表示に従い、塗ったあとは12時間ほど直射日光を避けてください。",
          "ナッツアレルギーのある方は、スイートアーモンド油などナッツ由来の油に注意してください。",
          "お年寄りや既往歴のある方は、基準の半分以下の量で試してください。",
          "妊娠中や授乳中の方は、使う前に医師または薬剤師に相談してください。治療中の方や薬を処方されている方は、医療機関に相談してください。",
          "3歳未満の子どもには芳香浴以外を行いません。3歳以上12歳以下は大人の使用量の10分の1程度から始めます。",
          "オイルがついたタオルは、洗ったあとでも乾燥機にかけず、干して乾かしてください。オイルを拭いたティッシュは水で湿らせてから捨てます。",
          "オイルがついた手足は滑りやすくなります。浴室の床などでは特に気をつけてください。",
          "火気に注意し、子どもやペットの手の届かない場所に保管してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "その日の分だけ作ることはできますか？",
            a: "できます。小皿にキャリアオイルを小さじ1杯取り、オイルを1滴混ぜると、濃度は約1%です。作り置きをしないので、はじめて試すときに向いています。",
          },
          {
            q: "顔にも使えますか？",
            a: "このレシピはボディ用です。顔の目安は0.5%以下なので、10mLに1滴、30mLに3滴までで別に作ります。",
          },
          {
            q: "市販のマッサージオイルに足してもいいですか？",
            a: "すでに香りの成分が入っている製品は、濃度を計算できません。足さずに、製品の表示どおりに使いましょう。",
          },
        ]}
      />

      <p>
        最初は小皿で、小さじ1杯に1滴から試してみてください。香りの組み合わせは<Link href="/blog/blend-basics">香りのブレンドの基本</Link>も参考になります。
      </p>
      <NextStepBox />
    </>
  ),
};
