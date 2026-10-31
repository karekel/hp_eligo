import Link from "next/link";
import { CautionBox, DataTable, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** アロマタッチ テクニックの全体像を説明する記事 */
export const aromatouchTechnique: ArticleContent = {
  summary: [
    "アロマタッチ テクニックがどんな技法で、どのくらい時間がかかるのか",
    "使う8種類のオイルの順番と、背中から足へ進む全体の流れ",
    "始める前に確認したい条件と、公式の学び方",
  ],
  toc: [
    { id: "what", title: "アロマタッチ テクニックとは" },
    { id: "oils", title: "使う8種類のオイルと順番" },
    { id: "flow", title: "全体の流れ" },
    { id: "check", title: "始める前に確認したいこと" },
    { id: "learn", title: "学び方" },
  ],
  sources: [
    {
      title: "アロマタッチ テクニック",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-technique",
      note: "背中と足にオイルを塗布すること、手のタッチとオイルを組み合わせること、開発者、学び方、注意事項および同意書を使うこと",
    },
    {
      title: "アロマタッチ テクニック Q & A",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-technique-question-and-answer",
      note: "個人間の使用が前提であること、オイルの順番、合わないオイルの扱い、ココナッツオイルの使用、子どもは4歳以上であること",
    },
    {
      title: "アロマタッチ テクニックの動作",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-technique-movements",
      note: "動作の公式名、やさしく軽いタッチで強く圧をかけるマッサージとは異なること、動作の説明が動画であること",
    },
    {
      title: "アロマタッチ テクニックのステップ",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-technique-steps",
      note: "ステップごとに使うオイルと動作の組み合わせ",
    },
    {
      title: "アロマタッチ テクニック エッセンシャルオイル",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-technique-get-to-know-oils",
      note: "使う8種類のオイル",
    },
    {
      title: "アロマタッチ ハンドテクニックの動作",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-hand-technique-movements",
      note: "アロマタッチ テクニックに必要な時間が45分〜1時間であること",
    },
    {
      title: "アロマタッチキット（ココナッツオイル専用ポンプ付）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/aromatouch-kit-with-jp-fco-pump/",
      note: "キットの内容（8種類の各5mL、ドテラ ココナッツオイル115mL）、キットのページの「塗」「香」の表示",
    },
    {
      title: "アロマタッチ オンライン認定コースのご案内",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2454059/",
      note: "標準受講時間、キット以外のオイルでは行えないこと、個人間の施術が前提で営利行為を想定していないこと",
    },
    {
      title: "ドテラ公認 アロマタッチ®テクニックトレーニングクラス",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-training-class",
      note: "対面のトレーニングクラスの名称、認定トレーナーが教えること、6時間のクラスであること",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "15mLの表示が「香・食」であること",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLの表示が「塗・香」であること",
    },
    {
      title: "オレンジ（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-5ml/",
      note: "5mLの表示が「塗・香」であること、柑橘系は塗布後12時間ほど直射日光を避ける注意",
    },
    {
      title: "オンガード",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-15ml/",
      note: "15mLの表示が「香・食」であること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "医師または薬剤師への相談、異常が出たときの対応",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を皮膚につけないこと、ティートリーとペパーミントを皮膚刺激の例に挙げていること",
    },
    {
      title: "無資格者によるあん摩マッサージ指圧業等の防止について",
      publisher: "厚生労働省",
      url: "https://www.mhlw.go.jp/topics/bukyoku/isei/i-anzen/hourei/061115-1.html",
      note: "あん摩、マッサージ、指圧を業として行うには免許が必要であること",
    },
  ],
  Body: () => (
    <>
      <p>
        アロマタッチ テクニックは、ドテラ独自のトリートメント技法です。背中と足に8種類のオイルを順番に使い、手のタッチと香りを組み合わせます。
      </p>
      <p>
        この記事では、どんな技法で、どの順番で進むのかを紹介します。細かな動作は、公式の動画や認定トレーナーから学んでください。
      </p>

      <h2 id="what">アロマタッチ テクニックとは</h2>
      <p>
        開発したのは、ドテラの創業役員デイビッド・K・ヒルです。ドテラはこの技法を、手のタッチとオイルを組み合わせるウェルネス体験と説明しています。
      </p>
      <p>
        強い圧をかけるマッサージではありません。軽くやさしいタッチで、手のひら全体を肌に沿わせるように進めます。かかる時間は45分〜1時間ほどです。
      </p>
      <p>
        家族や友人など、個人の間で行うことが前提で、営利目的の利用は想定されていません。あん摩、マッサージ、指圧を仕事として行うには免許が必要です。この記事も、身近な人と楽しむ範囲の話として書いています。
      </p>

      <h2 id="oils">使う8種類のオイルと順番</h2>
      <p>使うオイルは8種類で、順番が決まっています。順番どおりに進めることが大切とされています。</p>
      <DataTable
        caption="アロマタッチ テクニックのオイルの順番と主な動作"
        headers={["順番", "オイル", "場所", "加わる動作"]}
        rows={[
          ["1", "ドテラバランス", "背中", "パームサークル"],
          ["2", "ラベンダー", "背中", "耳に触れる動作"],
          ["3", "ティーツリー", "背中", "なし"],
          ["4", "オンガード", "背中", "サムウォーク"],
          ["5", "アロマタッチ", "背中", "なし"],
          ["6", "ディープブルー", "背中", "サムウォーク"],
          ["7", "オレンジ、ペパーミント", "足", "エリアタッチ、ピンポイントゾーン・アクティベーション、ファイブゾーン・タッチ"],
          ["8", "オレンジ、ペパーミント", "背中", "パームサークル"],
          ["最後", "オイルなし", "足", "足に手を添える動作"],
        ]}
      />
      <p>どのオイルも、肌にのばすオイル・イントロダクションから始めます。2〜6と8の背中では、パームスライドも行い、2〜6ではファイブゾーン・アクティベーションが続きます。カタカナの動作名は公式の呼び方で、体の変化を示すものではありません。</p>
      <p>
        オイルはアロマタッチキットのものを使います。キットには8種類が5mLずつと、ドテラ ココナッツオイル115mLが入っています。公式のコース案内では、キット以外のオイルでは行えないとされています。
      </p>
      <p>
        キットのページの表示は「塗」「香」です。単品のペパーミントとオレンジは、15mLが「香・食」、5mLが「塗・香」と、容量で表示が変わります。オンガードの15mLも「香・食」です。手持ちの15mLで代用せず、お手元のラベルを確認しましょう。
      </p>

      <h2 id="flow">全体の流れ</h2>
      <Steps
        steps={[
          { title: "場所と道具を用意する", text: "受ける人はアクセサリーを外し、うつ伏せになります。大きなタオルをかけて寒くならないようにし、オイルは手元に順番どおり並べます。" },
          { title: "背中で6種類のオイルを使う", text: "背骨に沿ってオイルをのばし、手のひらで背中全体に触れていきます。親指で少しずつ進むサムウォークは、オンガードとディープブルーのときだけ行います。" },
          { title: "足に移る", text: "背中をタオルで覆ってから足元へ移動します。オレンジとペパーミントを足裏にのばし、片足ずつ親指で触れていきます。" },
          { title: "背中に戻る", text: "もう一度オレンジとペパーミントを背中で使い、最初と同じパームサークルで締めくくります。" },
          { title: "足で終える", text: "足に手を添え、体を前後にごく小さくゆらして終わります。" },
        ]}
      />
      <PointBox>
        最初から最後まで、できるだけ手を離さず、体のどこかに触れたまま移動します。
      </PointBox>

      <h2 id="check">始める前に確認したいこと</h2>
      <CautionBox
        title="行う前の確認事項"
        items={[
          "公式の案内では、行うときに「注意事項および同意書」を必ず使うとされています。",
          "日本アロマ環境協会は、原液を肌につけないよう案内しています。ココナッツオイルで薄めて、少量から進めます。",
          "協会は、ティートリーとペパーミントを皮膚刺激に注意が必要な精油の例に挙げています。合わないオイルは除いてかまいませんが、ほかのオイルで代用はしません。",
          "子どもは4歳以上とされています。",
          "オレンジとオンガードは柑橘系を含みます。受けたあと12時間ほどは直射日光を避けるよう伝えましょう。",
          "傷、はれもの、しっしんのある部分は避けます。赤み、かゆみなどが出たらすぐにやめて、皮膚科に相談してください。",
          "妊娠中、授乳中の方、持病がある方、薬を飲んでいる方は、受ける前に医師または薬剤師に相談してください。",
          "医療の代わりになるものではありません。体の不調が気になるときは、医師に相談してください。",
        ]}
      />

      <h2 id="learn">学び方</h2>
      <p>動作のひとつひとつは、公式の動作ページの動画で確認できます。正しく身につけたい方には、ドテラの2つの学び方があります。</p>
      <ul>
        <li>オンライン認定コース: 動画で学びます。標準の受講時間は約7〜9時間で、短い動画をすき間時間に見進められます。</li>
        <li>対面のトレーニングクラス: 認定トレーナーから6時間で学びます。公式の名称は「ドテラ公認 アロマタッチ®テクニックトレーニングクラス」です。</li>
      </ul>
      <p>
        ELIGŌでは、アロマタッチ テクニックの認定トレーナーである主宰のエリザベスから学ぶこともできます。まず手だけで試したい方は、<Link href="/blog/aromatouch-hand">アロマタッチのハンドテクニック</Link>から始めてみてください。
      </p>

      <p>
        アロマタッチ テクニックは、決まった順番で丁寧に進める、手と香りの時間です。まずは公式の動画で、全体の流れを見てみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
