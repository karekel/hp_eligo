import Link from "next/link";
import { CautionBox, CheckPoints, DataTable, Faq, LabelTypes, NextStepBox, type ArticleContent } from "../ArticleParts";

/** 「ドテラのオイルは飲めるの？」という質問に答える記事 */
export const doterraDrinkable: ArticleContent = {
  summary: [
    "ドテラのオイルは飲めるのか、という質問への結論",
    "製品ページに「食」の表示があるオイルの一覧と、表示がないオイルの例",
    "アロマを飲む前に確認したいことと、ドテラの案内、日本アロマ環境協会の見解",
  ],
  toc: [
    { id: "answer", title: "ドテラのオイルは飲める？結論はすべてではありません" },
    { id: "list", title: "飲めるオイルの一覧" },
    { id: "labels", title: "飲めるかどうかは品質ではなく表示で決まる" },
    { id: "stance", title: "アロマを飲んでも大丈夫？ドテラと協会の見解" },
    { id: "points", title: "アロマを飲む前に確認したい3つのこと" },
    { id: "caution", title: "健康効果を期待した飲み方はしない" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "シングルオイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/single-oil/",
      note: "各製品の「塗」「香」「食」の表示（2026年11月2日時点）",
    },
    {
      title: "ブレンドオイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/blend-oil/",
      note: "各製品の「塗」「香」「食」の表示（2026年11月2日時点）",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "化粧品・食品添加物・雑貨の3種類に分かれること、届いたら使用方法と注意表示を確認すること、医師または薬剤師への相談",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "料理や飲み物の風味づけに使うという製品の案内",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "15mLの製品ページの「香・食」の表示",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLの製品ページの「塗・香」の表示",
    },
    {
      title: "オンガード",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-15ml/",
      note: "15mLの製品ページの「香・食」の表示",
    },
    {
      title: "ティーツリー（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/tea-tree-15ml/",
      note: "15mLの製品ページの「塗・香」の表示",
    },
    {
      title: "ティーツリー（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/tea-tree-5ml/",
      note: "5mLの製品ページの「塗・香」の表示",
    },
    {
      title: "How dōTERRA Sources Essential Oils",
      publisher: "doTERRA（米国公式、英語）",
      url: "https://www.doterra.com/US/en/sourcing",
      note: "CPTGが第三者認証とは別の社内基準であること",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "薄めたものでも飲用、食品との摂取、うがいをすすめないこと、精油が濃縮された液体であること、料理への利用もすすめないこと",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "精油が日本の法律で一般に雑品に分類され、飲食は認められていないという説明",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、子どもやペットの手の届かない場所での保管",
    },
    {
      title: "食品添加物",
      publisher: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuten/index.html",
      note: "香料が食品添加物に含まれること",
    },
    {
      title: "食品添加物",
      publisher: "消費者庁",
      url: "https://www.caa.go.jp/policies/policy/standards_evaluation/food_additives",
      note: "天然香料は食品に香りをつける目的で使われ、使用量はごくわずかと考えられること",
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
        「ドテラのオイルは飲める？」「アロマを飲んでも大丈夫？」と調べている方に、先に結論をお伝えします。
      </p>

      <h2 id="answer">ドテラのオイルは飲める？結論はすべてではありません</h2>
      <p>
        ドテラのオイルは、すべてが飲めるわけではありません。口に入れられるのは「食品添加物」の表示がある製品だけで、使い方は飲み物や料理の香りづけです。原液をそのまま飲むことはしません。また、日本アロマ環境協会は、薄めたものでも精油を飲むことをすすめていません。
      </p>
      <p>
        この記事で「飲める」と書くのは、香りづけに使える表示があるという意味です。飲むことをすすめる記事ではありません。
      </p>

      <h2 id="list">飲めるオイルの一覧</h2>
      <p>
        ドテラの製品ページには「塗」「香」「食」の表示があります。2026年11月2日時点では、シングルオイルとブレンドオイルのうち、「食」の表示があるのは次の29製品です。
      </p>
      <DataTable
        caption="製品ページに「食」の表示があるオイル"
        headers={["種類", "「食」の表示がある製品", "件数"]}
        rows={[
          ["柑橘", "レモン、オレンジ（15mL）、ライム、グレープフルーツ、ベルガモット、タンジェリン、ユズ、ブンタン、グリーンマンダリン", "9件"],
          ["ハーブ", "ペパーミント（15mL）、スペアミント、ローズマリー、バジル、オレガノ、マジョラム、メリッサ、レモングラス、クラリセージ", "9件"],
          ["スパイスなど", "ジンジャー、ブラックペッパー、クローブ、ターメリック、コパイバ", "5件"],
          ["ブレンド", "オンガード、ゼンジェスト（15mL）、ゼンドクライン、メタPWR、リバイタゼン、DDRプライム", "6件"],
        ]}
      />
      <p>
        表示はあとから変わることがあるので、最後はボトルのラベルで確かめましょう。
      </p>

      <h3>「食」の表示がないオイルの例</h3>
      <p>次の製品ページには「食」の表示がなく、口に入れる使い方はしません。</p>
      <DataTable
        caption="製品ページに「食」の表示がないオイルの例"
        headers={["オイル", "製品ページの表示"]}
        rows={[
          ["ラベンダー、ティーツリー（15mL、5mL）", "塗・香"],
          ["フランキンセンス（15mL）", "塗・香"],
          ["ペパーミント、オレンジ、ゼンジェスト（5mL）", "塗・香"],
          ["ユーカリプタス（15mL）", "香"],
        ]}
      />
      <p>ペパーミントのように、同じ名前でも容量で表示が変わる製品があります。</p>

      <h2 id="labels">飲めるかどうかは品質ではなく表示で決まる</h2>
      <p>
        ドテラのエッセンシャルオイルは、「化粧品」「食品添加物」「雑貨」の3種類に分かれ、区分によって使い方が異なります。
      </p>
      <LabelTypes
        items={[
          { type: "食品添加物", use: "飲み物や料理の香りづけに", note: "ラベルの表示どおりの量と方法で使います。", tone: "rose" },
          { type: "化粧品", use: "表示どおりに肌に使う", note: "口に入れてはいけません。", tone: "lavender" },
          { type: "雑貨", use: "香りを楽しむ", note: "口に入れず、表示された用途で使います。", tone: "gray" },
        ]}
      />
      <p>
        「品質が高いから飲める」わけではありません。CPTGはドテラの社内基準で、第三者の認証とは別のものです。品質の基準と、口に入れてよいかどうかは別の話です。
      </p>

      <h2 id="stance">アロマを飲んでも大丈夫？ドテラと協会の見解</h2>
      <p>
        ドテラは、「食」の表示がある製品をラベルどおりの量と方法で料理の香りづけに使えると案内しています。一方で、日本アロマ環境協会は、薄めたものであっても、精油の飲用や食品と一緒にとること、うがいをすすめていません。精油は濃縮された液体で、体への影響が心配されるためです。料理への利用もすすめていません。
      </p>
      <p>
        協会の記事は、精油は日本の法律で一般に雑品に分類され、飲食は認められていないとも説明しています。別の見解もあるので、最後はご自身で判断してください。
      </p>

      <h2 id="points">アロマを飲む前に確認したい3つのこと</h2>
      <p>
        ドテラの案内では、香りが特に強いオイルは爪楊枝の先でごく少量を使います。消費者庁も、天然香料の使用量はごくわずかと考えられると説明しています。
      </p>
      <CheckPoints
        items={[
          { title: "製品名と容量を確かめる", text: "製品ページの「食」の表示と、ボトルのラベルの使用方法、注意表示を読みます。" },
          { title: "表示どおりの量と方法を守る", text: "原液をそのまま飲むことはしないでください。" },
          { title: "迷ったら使わない", text: "ページの内容とラベルが違うときは、口に入れずに購入元へ確認します。" },
        ]}
      />
      <p>
        料理に使う手順は、<Link href="/blog/aromatic-table">オイルで香りづけする料理</Link>で紹介しています。
      </p>

      <h2 id="caution">健康効果を期待した飲み方はしない</h2>
      <p>
        「食」の表示がある製品は、あくまで飲食物の「香りづけ」に使うものです。病気の予防や体調の改善を目的に飲むものではありません。「飲むと〇〇に効く」といった情報を見かけても、うのみにしないようにしましょう。水に入れて毎日飲むことも、この記事ではすすめません。
      </p>
      <p>
        海外向けのページやレシピは、その国のルールに沿って書かれています。日本で買った製品には、日本のラベルの表示を当てはめましょう。ほかのブランドのオイルも「飲める」と考えず、ラベルを確認し、食品としての表示がないものは口に入れないでください。
      </p>
      <CautionBox
        items={[
          "化粧品・雑貨の区分の製品は、口に入れないでください。",
          "妊娠中・授乳中の方、薬を服用中・通院中の方、お子様は、使う前に医師または薬剤師に相談してください。",
          "原液のまま飲んだり、目や口のまわりにつけたりしないでください。",
          "子どもやペットが誤って口にしないよう、手の届かない場所に保管しましょう。",
          "体に異変を感じたときは使用をやめ、医師に相談してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ドテラのオイルは飲んでも大丈夫ですか？",
            a: "すべてではありません。使えるのは「食品添加物」の表示がある製品だけで、飲食物の香りづけに限ります。",
          },
          {
            q: "ティーツリーは飲んでも大丈夫ですか？",
            a: "口に入れないでください。ティーツリーの製品ページの表示は、15mLも5mLも「塗・香」で、「食」の表示はありません。",
          },
          {
            q: "オンガードは飲めますか？",
            a: "オンガード15mLの製品ページの表示は「香・食」です。ラベルどおりに香りづけに使う製品で、原液をそのまま飲むことはしません。協会はうがいもすすめていません。",
          },
          {
            q: "厚生労働省は精油を飲むことを認めていますか？",
            a: "厚生労働省の食品添加物のページは香料に触れていますが、エッセンシャルオイルを飲むことを説明したページではありません。",
          },
        ]}
      />

      <p>
        飲めるかどうかは、オイルの名前ではなく、製品の表示で決まります。
      </p>
      <NextStepBox />
    </>
  ),
};
