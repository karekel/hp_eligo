import Link from "next/link";
import { oilColors } from "../Botanicals";
import { BlendRecipe, CautionBox, CheckPoints, DataTable, NextStepBox, type ArticleContent } from "../ArticleParts";

/** ディフューザーで楽しむ朝・昼・夜のブレンド例の記事 */
export const diffuserBlends: ArticleContent = {
  summary: [
    "朝、昼、夜に合わせて試せる6つの組み合わせ",
    "ディフューザーに入れる滴数の考え方と、香りの強さの調節",
    "自分で組み合わせを作るときの順番と、手元にないオイルの置き換え方",
  ],
  toc: [
    { id: "before", title: "始める前に確認する3つのこと" },
    { id: "blends", title: "朝・昼・夜の組み合わせ例" },
    { id: "strength", title: "香りの強さを調節する" },
    { id: "own", title: "自分の組み合わせを作るコツ" },
    { id: "caution", title: "使うときの注意点" },
  ],
  sources: [
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "満水にしたタンクにオイル5〜10滴という目安、タイマーの設定、使うたびに本体を洗って柔らかいクロスで拭くこと",
    },
    {
      title: "ペパーミント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "オレンジ、フランキンセンスと各1滴でディフューズする組み合わせ",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLは「塗・香」の表示で、15mLの「香・食」と異なること",
    },
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "香りを楽しむ表示の製品で、ディフューズの案内があること",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "おやすみの時間にディフューズする使い方",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "組み合わせを試してから1滴ずつ混ぜる手順、香りのグループの考え方",
    },
    {
      title: "全国に広がる和精油の生産",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/oil/waseiyu/",
      note: "ヒノキを樹木系の例に挙げていること",
    },
    {
      title: "調香のヒント",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/event/fragrance/hint/",
      note: "オイルごとに香りの強さや持続性が違うこと、テーマを決め、主役と脇役を選び、合わなければ主役を替える手順",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "違和感があれば使用を中止して換気すること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "お年寄りや既往歴のある方は基準の半分以下の量で試すこと",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳以上12歳以下は大人の使用量の10分の1程度から、多くても2分の1程度まで。動物は人間と体の仕組みが異なること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "妊娠中、授乳中、服薬中、通院中の方は使用前に医師または薬剤師に相談すること",
    },
  ],
  Body: () => (
    <>
      <p>
        ディフューザーに慣れてくると、香りを組み合わせてみたくなります。朝、昼、夜で香りを替えると、時間の切り替えも楽しめます。
      </p>
      <p>この記事では、合計5滴か6滴で試せる組み合わせと、自分でブレンドを考えるときの順番を紹介します。</p>

      <h2 id="before">始める前に確認する3つのこと</h2>
      <CheckPoints
        items={[
          { title: "合計の滴数", text: "ドテラ ラルツディフューザーの説明書では、満水にしたタンクに5〜10滴が目安です。ほかの機種は説明書に従います。" },
          { title: "オイルの表示", text: "製品ページの「香」の表示や、お手元のラベルを確認します。区分は容量によって変わることがあります。" },
          { title: "香りの相性", text: "タンクに入れる前に、ティッシュに1滴ずつ落として香りを重ねます。好みに合わなければ、ここで組み合わせを替えられます。" },
        ]}
      />

      <h2 id="blends">朝・昼・夜の組み合わせ例</h2>
      <p>滴数は、試しやすいように組んだ一例です。香りが物足りないときは、合計が10滴を超えない範囲で、同じ割合のまま増やしてください。</p>

      <h3>朝：明るくすっきりした香りで支度の時間に</h3>
      <BlendRecipe
        title="柑橘とミント"
        drops={[
          { name: "レモン", color: oilColors.lemon, count: 4 },
          { name: "ペパーミント", color: oilColors.peppermint, count: 1 },
        ]}
      />
      <BlendRecipe
        title="ミントと甘い柑橘に樹脂を添えて"
        drops={[
          { name: "ペパーミント", color: oilColors.peppermint, count: 2 },
          { name: "オレンジ", color: oilColors.wildOrange, count: 2 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 2 },
        ]}
      />
      <p>2つ目は、ドテラのペパーミントの製品ページにある組み合わせです。製品ページの各1滴を、ラルツの滴数の目安に合わせて各2滴にしています。</p>

      <h3>昼：気分を切り替えたいときに</h3>
      <BlendRecipe
        title="柑橘だけで合わせる"
        drops={[
          { name: "ベルガモット", color: oilColors.lemon, count: 2 },
          { name: "レモン", color: oilColors.lemon, count: 2 },
          { name: "グレープフルーツ", color: oilColors.wildOrange, count: 1 },
        ]}
      />
      <BlendRecipe
        title="柑橘に清涼感を足す"
        drops={[
          { name: "レモン", color: oilColors.lemon, count: 3 },
          { name: "ユーカリプタス", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>同じ系統のオイルどうしは香りがなじみやすいので、はじめてのブレンドに向いています。</p>

      <h3>夜：おやすみ前のひとときに</h3>
      <BlendRecipe
        title="花と樹脂"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 3 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 2 },
        ]}
      />
      <BlendRecipe
        title="花と甘い柑橘"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
          { name: "オレンジ", color: oilColors.wildOrange, count: 2 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <p>
        寝室では、ラルツの1時間タイマーを使うと、つけたままにならずに済みます。1本で楽しみたい日は、<Link href="/blog/serenity">ドテラセレニティー</Link>も選べます。
      </p>

      <h3>手元にないオイルがあるとき</h3>
      <p>同じ系統のオイルに置き換えると、組み合わせの雰囲気を残せます。香りの印象は変わるので、ティッシュで確かめてからタンクに入れましょう。</p>
      <DataTable
        caption="置き換えの例"
        headers={["例に出てくるオイル", "置き換えられるオイル", "系統"]}
        rows={[
          ["レモン、オレンジ", "ベルガモット、グレープフルーツ", "柑橘系"],
          ["ラベンダー", "ゼラニウム", "フローラル系"],
          ["フランキンセンス", "ヒノキ", "樹木系"],
        ]}
      />
      <p>オイルごとに、香りの強さや持続性は違います。置き換えたオイルが強く感じるときは、そのオイルを1滴減らしてください。</p>

      <h2 id="strength">香りの強さを調節する</h2>
      <p>
        香りの感じ方は、滴数だけでは決まりません。部屋の広さ、ディフューザーとの距離、運転する時間、空気の流れ、使う人によっても変わります。説明書の滴数は目安と考えて、控えめな量から始めましょう。
      </p>
      <p>同じ割合のまま増やすときは、それぞれを2倍にすると合計10滴になります。</p>
      <DataTable
        caption="5滴の組み合わせを10滴にする例"
        headers={["組み合わせ", "合計5滴", "合計10滴"]}
        rows={[
          ["レモン、ペパーミント", "4滴、1滴", "8滴、2滴"],
          ["ラベンダー、フランキンセンス", "3滴、2滴", "6滴、4滴"],
          ["ベルガモット、レモン、グレープフルーツ", "2滴、2滴、1滴", "4滴、4滴、2滴"],
        ]}
      />
      <p>
        2倍では強そうなときは、主役から1滴ずつ足して、そのつど香りを確かめます。反対に強く感じた日は、次回の合計を減らし、1時間タイマーで短く香らせてみてください。
      </p>
      <p>
        朝と夜で香りを替える日は、タンクの水も入れ替えます。ラルツの説明書は、使うたびに本体を水で洗い、柔らかいクロスで拭くよう案内しています。手順は<Link href="/blog/diffuser-guide">ディフューザーのお手入れ</Link>で確認できます。
      </p>

      <h2 id="own">自分の組み合わせを作るコツ</h2>
      <p>組み合わせる種類の数に決まりはありません。まずは次の順番で考えてみましょう。</p>
      <ol>
        <li>どんな時間にしたいかを言葉にする</li>
        <li>主役にする好きなオイルを1本決める</li>
        <li>下の表から、合わせやすい系統の脇役を選ぶ</li>
        <li>合わないと感じたら、主役を替えて試す</li>
      </ol>
      <DataTable
        caption="香りの系統と、合わせやすい系統"
        headers={["主役の系統", "合わせやすい系統"]}
        rows={[
          ["柑橘系（レモン、オレンジなど）", "樹木系、スパイス系、フローラル系、ミント系"],
          ["ミント系（ペパーミントなど）", "樹木系、ハーブ系、柑橘系"],
          ["フローラル系（ラベンダーなど）", "樹木系、スパイス系、柑橘系"],
          ["ハーブ系（ローズマリーなど）", "樹木系、ミント系"],
          ["スパイス系（クローブなど）", "樹木系、フローラル系、柑橘系"],
        ]}
      />
      <p>
        たとえば「夜の読書の時間に」と決めたら、主役はラベンダーです。表を見ると、フローラル系には樹木系が合わせやすいので、脇役はフランキンセンスにします。ティッシュで重ねて、もう少し甘さがほしければオレンジを足す、という流れです。変化がほしくなったら、このように違う系統を混ぜてみましょう。
      </p>
      <p>
        香りの立ち方まで考えて組み立てたいときは、<Link href="/blog/blend-basics">トップ・ミドル・ベースの基本</Link>も参考にしてください。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "ここで紹介した組み合わせは、香りを楽しむためのものです。体の調子を変えるものではありません。",
          "香りを強く感じたり、気分が悪くなったりしたら、運転を止めて換気してください。",
          "3歳以上12歳以下の子どもがいる部屋では、大人の使用量の10分の1程度から始め、多くても2分の1程度までにします。",
          "お年寄りや既往歴のある方は、基準の半分以下の量で試してください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方は、使う前に医師または薬剤師に相談してください。",
          "ペットは人と体の仕組みが違います。同じ部屋で使うか迷ったら使わず、獣医師に相談してください。",
        ]}
      />

      <p>
        まずは手持ちのオイルで、気になる組み合わせを1つ選んでみてください。ティッシュで香りを確かめてからタンクに入れると、好みの香りが見つけやすくなります。
      </p>
      <NextStepBox />
    </>
  ),
};
