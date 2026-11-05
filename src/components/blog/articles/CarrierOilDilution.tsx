import Link from "next/link";
import { ArticleFigure, CautionBox, DataTable, Faq, NextStepBox, PointBox, ProductPhotos, Steps, type ArticleContent } from "../ArticleParts";

/** キャリアオイルの選び方と濃度の計算の記事 */
export const carrierOilDilution: ArticleContent = {
  summary: [
    "キャリアオイルの役割と、種類ごとの特徴",
    "濃度1%が何滴かを、計算式と早見表で確認する方法",
    "はじめて肌に使うときの手順と注意点",
  ],
  toc: [
    { id: "what", title: "キャリアオイルとは" },
    { id: "choose", title: "キャリアオイルの選び方" },
    { id: "calc", title: "濃度1%は何滴？計算のしかた" },
    { id: "try", title: "はじめて試す手順" },
    { id: "caution", title: "肌に使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴＝0.05mLで計算すること、濃度の計算式、全体量はオイルも含めた合計であること",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "植物油20mLに1〜4滴（顔は2滴まで）、トリートメント用の植物油を選ぶこと、ホホバ、マカデミアナッツ、スイートアーモンドの特徴、ナッツアレルギーの注意、酸化しやすいこと",
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
      note: "植物性オイルに1%以下、顔は0.5%以下という目安、肌の弱い人は低い濃度で試すこと",
    },
    {
      title: "ドテラ ココナッツオイル（フラクショネイティッド）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-coconut-oil-fractionated/",
      note: "無色無臭でどのオイルとも混ぜやすいこと、べたつきにくいという説明",
    },
    {
      title: "精油はどのようにして作られる？主な抽出方法や具体的な活用法について紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年9月17日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4572/",
      note: "精油が水に溶けにくく、油脂になじみやすいこと",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "原液は刺激が強いので必ず薄めること、肌が弱い人はさらに低い濃度から試すこと、光毒性",
    },
    {
      title: "精油の使用法の一部見直しについて",
      publisher: "公益社団法人 日本アロマ環境協会 機関誌『AEAJ』No.95",
      url: "https://www.aromakankyo.or.jp/newsftp/20200528news95.pdf",
      note: "2020年から事前のパッチテストをやめ、低い濃度で試す案内に変えたこと",
    },
    {
      title: "アロマテラピー検定公式テキスト（2020年6月改訂版）について",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/licences/aroma/text/pdf/text_info_202006.pdf",
      note: "植物油などの油性の材料と無水エタノール以外には精油が溶けにくく、希釈とはいえないこと",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "製品ページの注意文（はじめて使うときに試すこと、必要に応じた希釈、傷や湿疹のある部位に使わないこと、柑橘系は塗布後12時間ほど直射日光を避けること）",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分ごとに使い方が違うこと、異常が出たら中止して皮膚科専門医に相談すること、医師または薬剤師への相談",
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
      note: "肌や粘膜につけない製品であること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "光毒性のある精油の例、皮膚刺激に注意が必要な精油の例、お年寄りや既往歴のある方は基準の半分以下の量で試すこと",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと、3歳以上12歳以下は大人の使用量の10分の1程度から始め、多くても2分の1程度までにすること",
    },
    {
      title: "真夏の“油”断が火を招く！～高温環境で起こりやすくなる油の発火事故～",
      publisher: "独立行政法人 製品評価技術基盤機構（2025年7月8日）",
      url: "https://www.nite.go.jp/data/000158361.pdf",
      note: "植物油がついた布は洗濯後でも乾燥機で加熱しないこと",
    },
    {
      title: "油による自然発火に注意！！【とらぶるの芽(No.74）】",
      publisher: "東京都生活文化局 消費生活部（2018年9月10日）",
      url: "https://www.shouhiseikatu.metro.tokyo.lg.jp/trouble/trouble74-shizenhakka-180910.html",
      note: "美容オイルなどがついた洗濯物は乾燥機を使わず自然乾燥にすること",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "製品ページの表示と使用方法、使用上の注意、保管の注意",
    },
    {
      title: "ティーツリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/tea-tree-15ml/",
      note: "製品ページの表示と使用方法、使用上の注意、保管の注意",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan 合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "芳香、塗布、摂取の使い方、敏感肌や子どもの肌、初めて塗布で使うオイルはキャリアオイルで薄めること、摂取はラベルの使用方法を守ること",
    },
  ],
  Body: () => (
    <>
      <p>
        エッセンシャルオイルを肌につける前に、知っておきたいのが薄め方です。敏感肌や初めて肌に使うオイルは、キャリアオイルで薄めて使います。では、どのオイルを選び、何滴入れればよいのでしょうか。
      </p>
      <p>この記事では、キャリアオイルの選び方と、濃度1%が何滴になるかの計算をまとめます。肌に使えるのは、ラベルに「化粧品」の表示がある製品だけです。</p>

      <h2 id="what">キャリアオイルとは</h2>
      <p>
        キャリアオイルは、エッセンシャルオイルを薄めて肌に使うための植物油です。「運ぶ」という意味の言葉から、この名前で呼ばれています。
      </p>
      <p>
        エッセンシャルオイルは水に溶けにくく、油になじみやすい性質があります。「塗」の表示がある製品は肌に使えます。敏感肌、子どもの肌、初めて肌に使うオイルはキャリアオイルで薄めます。協会と消費者庁は、原液を肌につけず必ず薄めるよう案内しています。別の見解もあるので、最後はご自身で判断してください。肌に使ってよい製品の見分け方は<Link href="/blog/oils-on-skin">エッセンシャルオイルは肌につけていい？</Link>で説明しています。キャリアオイルは、そのための土台になります。
      </p>

      <h2 id="choose">キャリアオイルの選び方</h2>
      <p>まず、食用ではなく肌に使うための植物油を選びましょう。代表的なものは次のとおりです。</p>
      <DataTable
        caption="キャリアオイルの種類と特徴"
        headers={["キャリアオイル", "特徴"]}
        rows={[
          ["ドテラ ココナッツオイル", "天然のココナッツオイルを分別蒸留で精製したもの。無色無臭で、どのオイルとも混ぜやすい。べたつきにくいと説明されている"],
          ["ホホバ油", "幅広い肌質に使いやすく、酸化しにくい"],
          ["マカデミアナッツ油", "ナッツから採れる植物油。協会の資料で紹介されている"],
          ["スイートアーモンド油", "香りにくせがない"],
        ]}
      />
      <ProductPhotos names={["ドテラ ココナッツオイル"]} />
      <ul>
        <li>オイルの香りをそのまま楽しみたいなら、香りのないものを選ぶ</li>
        <li>天然の植物油は酸化しやすいので、使い切れる量を買う</li>
        <li>ナッツアレルギーのある方は、ナッツ由来の油に注意する</li>
      </ul>
      <p>
        ドテラ ココナッツオイルの特徴と、ドテラのホホバオイルとの違いは<Link href="/blog/doterra-coconut-oil">ドテラのココナッツオイルとは？</Link>で紹介しています。
      </p>

      <h2 id="calc">濃度1%は何滴？計算のしかた</h2>
      <p>
        結論から言うと、<strong>キャリアオイル5mLにオイル1滴で、濃度は約1%</strong>です。日本アロマ環境協会は、ボディ用は1%以下、顔は0.5%以下を目安としています。
      </p>
      <p>計算には、1滴＝0.05mLと、次の式を使います。全体の量には、オイルの分も含めます。</p>
      <p>
        <strong>濃度（%）＝ オイルの量（mL）÷ 全体の量（mL）× 100</strong>
      </p>
      <p>たとえばキャリアオイル30mLに6滴なら、オイルは0.3mL、全体は30.3mLです。0.3÷30.3×100で、約1%になります。</p>
      <DataTable
        caption="キャリアオイルの量ごとの滴数の上限"
        headers={["キャリアオイルの量", "ボディ用（1%以下）", "顔用（0.5%以下）"]}
        rows={[
          ["5mL（小さじ1杯）", "1滴まで", "作らない（1滴で約1%になる）"],
          ["10mL", "2滴まで", "1滴まで"],
          ["20mL", "4滴まで", "2滴まで"],
          ["30mL", "6滴まで", "3滴まで"],
          ["50mL", "10滴まで", "5滴まで"],
        ]}
      />
      <PointBox>
        2種類以上を混ぜるときは、種類ごとではなく合計の滴数で数えます。30mLのボディ用なら、ラベンダー3滴とゼラニウム3滴で合計6滴までです。1滴＝0.05mLは計算の目安で、<Link href="/blog/drop-count">実際の1滴はこれより多いこともあります</Link>。上限いっぱいにせず、少なめに作りましょう。
      </PointBox>
      <ProductPhotos names={["ラベンダー", "ゼラニウム"]} />
      <p>
        表にない量は、割り算で求められます。キャリアオイルのmLを5で割るとボディ用の上限の滴数、10で割ると顔用の上限の滴数です。15mLならボディ用は3滴、顔用は1.5滴になります。端数は切り捨てて、顔用は1滴にします。
      </p>

      <h2 id="try">はじめて試す手順</h2>
      <div className="mt-6">
        <Steps
          steps={[
            { title: "ラベルを確認する", text: "「化粧品」の表示があるか確かめます。同じ名前のオイルでも、容量で区分が変わることがあります。" },
            { title: "低い濃度で少量を作る", text: "清潔な遮光瓶に、キャリアオイル10mLとオイル1滴を入れて混ぜます。濃度は約0.5%です。" },
            { title: "腕の内側で試す", text: "目立たない場所に少量つけて、様子を見ます。" },
            { title: "異常が出たら中止する", text: "赤み、かゆみ、刺激などを感じたら洗い流して使用をやめ、皮膚科専門医に相談してください。" },
            { title: "早めに使い切る", text: "作ったものは冷暗所に置き、1カ月以内に使い切ります。" },
          ]}
        />
      </div>
      <ArticleFigure src="/assets/blog/inline/carrier-oil-dilution-try-ef8fa67c.jpg" alt="キャリアオイルを入れた遮光瓶にオイルを1滴落とし、薄めたものを腕の内側に少量つけて様子を見る流れ" caption="低い濃度で少量を作り、腕の内側で試します" />
      <p>
        ドテラは、はじめて使う際はパッチテスト等で試すよう案内しています。協会は2020年から、事前のパッチテストの代わりに、低い濃度で試してから使う案内に変えています。
      </p>

      <h2 id="caution">肌に使うときの注意点</h2>
      <CautionBox
        title="薄めるときに確認したいこと"
        items={[
          "ドテラのユーカリプタスは肌につけない製品で、ペパーミント15mLは「香・食」の表示なので、肌用のブレンドに使いません。ティーツリーとペパーミント5mLは「塗・香」の表示があり、表示どおり肌に使えます。協会は、ペパーミント、ティートリー、ユーカリを皮膚刺激に注意が必要な精油の例に挙げています。",
          "ドテラの単品の柑橘の多くは、肌に塗る使い方がありません。柑橘を含む製品を肌に使うときは、塗布後12時間ほど直射日光を避けてください。協会は、グレープフルーツ、ベルガモット、レモンなどに光毒性があるとしています。日光に反応して肌に炎症などを起こす性質です。",
          "濃くすればよいわけではありません。肌の弱い方は、目安よりさらに低い濃度から試してください。",
          "お年寄りや既往歴のある方は、基準の半分以下の量で試してください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "協会は、3歳未満の子どもには芳香浴以外を行わず、3歳以上12歳以下は大人の使用量の10分の1程度から始め、多くても2分の1程度までにするよう案内しています。",
          "目のまわり、耳の中、傷や湿疹のある部位には使わないでください。",
          "植物油がついたタオルや衣類は、洗ったあとでも乾燥機にかけず、自然乾燥にしてください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "5mLより少ない量で作れますか？",
            a: "おすすめしません。1滴より少なくは量れないので、たとえば2.5mLに1滴だと、濃度は約2%になります。5mLを下回らないようにしましょう。",
          },
          {
            q: "水や化粧水で薄めてもいいですか？",
            a: "ドテラは、キャリアオイル等で薄めるよう案内しています。協会は、植物油などの油性の材料と無水エタノール以外には溶けにくく、希釈とはいえないと説明しています。",
          },
          {
            q: "顔とボディで同じものを使えますか？",
            a: "顔にも使うなら、最初から0.5%以下で作ります。ボディ用に1%で作ったものは、顔に使わないでください。",
          },
        ]}
      />

      <p>
        まずは「5mLに1滴」を覚えておきましょう。薄めたオイルは、<Link href="/blog/foot-self-massage">足裏のセルフマッサージ</Link>や、持ち歩ける<Link href="/blog/roll-on">ロールオン</Link>にも使えます。
      </p>
      <NextStepBox />
    </>
  ),
};
