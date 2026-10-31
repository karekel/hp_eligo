import Link from "next/link";
import { BlendRecipe, CautionBox, DataTable, NextStepBox, OilProfile, PairingList, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ゼラニウム */
export const geranium: ArticleContent = {
  summary: [
    "ゼラニウムの基本情報と、花と葉が重なる香りの特徴",
    "スキンケアの時間に香りを添える3つの方法と、量の目安",
    "相性のよい香りと、肌に使う前に確認したいこと",
  ],
  toc: [
    { id: "scent", title: "ゼラニウムはどんな香り？" },
    { id: "enjoy", title: "スキンケアの時間に楽しむ3つの方法" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
  ],
  sources: [
    {
      title: "ゼラニウム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/geranium-15ml/",
      note: "学名、抽出部位と抽出方法、香りの特徴、主成分、塗・香の表示、フェイシャルスチームや乳液に1滴などの使い方、使用上の注意",
    },
    {
      title: "ゼラニウム | Source To You",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/geranium",
      note: "産地がマダガスカルとケニアであること、収穫と蒸留の時期、700を超える小規模農家の協同組合",
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
      note: "お湯に1〜3滴で目を閉じて湯気の香りを楽しむこと、長時間は避けること、ティッシュに1〜2滴、ボディ1%以下、顔0.5%以下の濃度の目安",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして濃度を計算すること、全体量で割ること",
    },
    {
      title: "ドテラ･ジャパン| doTERRA",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/lp/frankincense/",
      note: "ローション10mLにフランキンセンス1滴の配合例、手作りしたものを1か月以内に使い切ること",
    },
    {
      title: "ローズ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/rose-5ml/",
      note: "ローズの主成分と抽出部位",
    },
    {
      title: "オレンジ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "オレンジ15mLの香・食の表示",
    },
    {
      title: "取扱説明書 V2 ドテラ® ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "オイルは5〜10滴であること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、ついたら大量の流水で洗うこと、低い濃度から試すこと、お年寄りや既往歴のある人の量、保管",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満は芳香浴以外を行わないこと、3歳以上12歳以下は大人の10分の1程度から始めること",
    },
    {
      title: "化粧品を選ぶ前に知っておきたい知識 最終回 化粧品を安全に選ぶには",
      publisher: "独立行政法人 国民生活センター『国民生活』2025年9月号",
      url: "https://www.kokusen.go.jp/wko/pdf/wko-202509_04.pdf",
      note: "腕の内側など目立たない所で小さな面積に試すこと",
    },
    {
      title: "手作り石けんの取り扱いにご注意を",
      publisher: "三重県 医療保健部 薬務課",
      url: "https://www.pref.mie.lg.jp/YAKUMUS/HP/0001213310003.htm",
      note: "自分で使う場合と、プレゼントや販売の場合で扱いが違うこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "製品の区分と使用方法、異常が出たときの対応、医師または薬剤師への相談",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "ロールオンは植物油10mLに精油1〜2滴、肌に使うときは1%以下にすること",
    },
    {
      title: "精油はどのようにして作られる？主な抽出方法や具体的な活用法について紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年9月17日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4572/",
      note: "植物油を使う手作り品（アロマバーム）を1カ月以内に使い切ること",
    },
    {
      title: "オリジナル フレグランス作り（PDF）",
      publisher: "doTERRA",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "ゼラニウムとラベンダーがミドル、フランキンセンスがベースに分類されていること、ミドル50〜80%、ベース5〜20%の配分",
    },
    {
      title: "エッセンシャルオイルで作る『リネンスプレー』レシピ",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/tools/product-center/Display/odor%20control-recipe.pdf",
      note: "重曹30gとラベンダー、ゼラニウム、レモングラスで作るサシェの分量",
    },
    {
      title: "アロマテラピー検定公式テキスト（2020年6月改訂版）について",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/licences/aroma/text/pdf/text_info_202006.pdf",
      note: "精油が植物油などの油性の材料と無水エタノール以外には溶けにくいこと",
    },
  ],
  Body: () => (
    <>
      <p>
        朝の洗顔のあとや、夜のスキンケアの数分に、花の香りを添えてみませんか。ゼラニウムは、甘く華やかな香りと、葉のようなさわやかさをあわせ持つオイルです。
      </p>
      <p>
        この記事では、香りの特徴と、スキンケアの時間の楽しみ方を量の目安つきで紹介します。肌の変化を約束する話ではなく、香りと使い心地を楽しむ話です。
      </p>

      <OilProfile
        name="ゼラニウム"
        en="Geranium"
        image="/assets/products/geranium-15ml.jpg"
        color={oilColors.lavender}
        rows={[
          { label: "学名", value: "Pelargonium graveolens" },
          { label: "抽出部位", value: "全草（水蒸気蒸留法）" },
          { label: "香り", value: "ハーベイシャス、グリーン、フローラル、スイート、ドライ" },
          { label: "製品ページの表示", value: "塗・香（15mL）" },
        ]}
      />

      <h2 id="scent">ゼラニウムはどんな香り？</h2>
      <p>
        製品ページでは、香りの特徴を5つの言葉で示しています。花の香りと甘さに、緑の葉の青々とした香りと、ハーブのようなスーッとする香りが重なります。甘さの奥に、葉をこすったときのような青さがあります。
      </p>
      <p>
        主成分に挙げられるシトロネロールとゲラニオールは、ローズの主成分にも並ぶ成分です。ただし、ローズは花から、ゼラニウムは全草から蒸留する、別の植物のオイルです。
      </p>
      <p>
        産地はマダガスカルとケニアです。開花の直前に株と葉を収穫し、数時間のうちに蒸留します。マダガスカルでは、700を超える小規模農家が協同組合に組織されています。生産者を支える仕組みは<Link href="/blog/co-impact-sourcing">コ・インパクトソーシングとは？</Link>で紹介しています。
      </p>

      <h2 id="enjoy">スキンケアの時間に楽しむ3つの方法</h2>
      <UsageCards
        items={[
          {
            en: "Lotion",
            title: "乳液に1滴混ぜる",
            text: "顔に使う乳液10mLを清潔な小さい容器に取り分け、1滴混ぜます。ボトルの全量には入れず、少しだけ作って試します。",
          },
          {
            en: "Body Oil",
            title: "ボディオイルを作る",
            text: "キャリアオイル30mLに1〜6滴混ぜて、入浴のあとの腕や脚になじませます。少ない滴数から始めます。",
          },
          {
            en: "Steam",
            title: "湯気で香りを楽しむ",
            text: "洗面器のお湯に1滴たらし、目を閉じて、立ちのぼる湯気の香りを楽しみます。長い時間は続けません。",
          },
        ]}
      />
      <DataTable
        caption="ゼラニウムを肌に使うときの量の目安"
        headers={["使うもの", "全体の量", "ゼラニウムの滴数", "濃度の目安"]}
        rows={[
          ["顔に使う乳液など", "10mL", "1滴", "0.5%以下"],
          ["顔に使うオイル", "30mL", "1〜3滴", "0.5%以下"],
          ["体に使うオイル", "30mL", "1〜6滴", "1%以下"],
          ["ロールオン", "10mL", "1〜2滴（顔は1滴まで）", "1%以下（顔は0.5%以下）"],
        ]}
      />
      <p>
        表は、1滴を0.05mLとして計算する協会の目安に合わせています。乳液10mLに1滴なら、0.05÷10.05×100で約0.5%です。肌につけたくない日は、ティッシュに1滴たらして鏡のそばに置くだけでも、香りの時間をつくれます。濃度の計算は<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と希釈の計算</Link>で詳しく紹介しています。
      </p>
      <p>
        混ぜる相手は、乳液かキャリアオイルにしましょう。協会は、精油は植物油などの油性の材料と無水エタノール以外には溶けにくいと説明しています。水が中心の化粧水には混ぜないでください。
      </p>
      <p>
        肌につけない楽しみ方には、サシェもあります。ドテラの公式レシピの分量は、重曹30gに対してゼラニウム6滴、ラベンダー7滴、レモングラス7滴です。作り方は<Link href="/blog/potpourri">ポプリの作り方</Link>で紹介しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>花の香りは、同じ花の香りのほか、樹脂や木、柑橘の香りとも組み合わせやすい香りです。</p>
      <PairingList
        items={[
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花の香りどうしで、やわらかくまとまります" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "樹脂の香りが、甘さを落ち着かせます" },
          { name: "ヒノキ", en: "Hinoki", color: oilColors.frankincense, note: "甘さが引き締まり、すっきりした印象になります" },
          { name: "オレンジ", en: "Wild Orange", color: oilColors.wildOrange, note: "明るさが加わります。香りだけで楽しむ組み合わせです" },
        ]}
      />
      <BlendRecipe
        title="鏡の前の時間に"
        drops={[
          { name: "ゼラニウム", color: oilColors.lavender, count: 2 },
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <BlendRecipe
        title="朝の支度の時間に"
        drops={[
          { name: "ゼラニウム", color: oilColors.lavender, count: 2 },
          { name: "オレンジ", color: oilColors.wildOrange, count: 3 },
        ]}
      />
      <p>
        どちらもディフューザーで香りを楽しむ例です。肌に使うときは、表の滴数を全体の合計として数えます。オレンジ15mLの製品ページの表示は「香・食」なので、肌に使う組み合わせには入れないでください。
      </p>
      <p>
        「鏡の前の時間に」は、ドテラのフレグランスのレシピの配分の範囲に収まります。ゼラニウムとラベンダーはミドル、フランキンセンスはベースに分類され、5滴のうちミドルが80%、ベースが20%です。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="肌に使う前に確認したいこと"
        items={[
          "15mLのボトルの製品ページの表示は「塗・香」です。スキンケアに使う前に、ラベルの「化粧品」の表示と使用方法を見てください。",
          "原液のまま顔や体につけず、乳液やキャリアオイルに混ぜて使います。",
          "はじめての組み合わせは、低い濃度で腕の内側などに少量試します。赤みやかゆみ、刺激を感じたら、すぐ大量の水で洗い流して使うのをやめ、皮膚科専門医などに相談してください。",
          "目に入らないように気をつけます。傷やはれもの、湿疹がある部位、耳の中にも使いません。",
          "妊娠中や授乳中、持病がある、薬を飲んでいる場合や、子どもに使う場合は、事前に医師または薬剤師へ確認してください。",
          "3歳未満の子どもには芳香浴以外を行いません。3歳以上12歳以下は大人の10分の1程度の量から、お年寄りや持病のある方は目安の半分以下の量から試します。",
          "混ぜて作ったものは自分で使う分だけにして、販売や譲渡はしないでください。清潔な道具を使い、1か月以内に使い切ります。",
          "製品ページの表示に「食」はありません。口に入れないでください。ボトルは子どもやペットの手の届かない場所に保管します。",
        ]}
      />

      <p>
        まずはティッシュに1滴で香りを確かめ、好みに合うと感じたら、乳液10mLに1滴から試してみてください。いつものスキンケアが、香りを味わう時間にもなります。
      </p>
      <NextStepBox />
    </>
  ),
};
