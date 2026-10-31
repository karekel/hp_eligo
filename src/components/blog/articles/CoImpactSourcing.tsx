import Link from "next/link";
import { CheckPoints, DataTable, Faq, NextStepBox, Steps, type ArticleContent } from "../ArticleParts";

/** はじめての方向け: コ・インパクトソーシング */
export const coImpactSourcing: ArticleContent = {
  summary: [
    "コ・インパクトソーシングの公式の定義",
    "公正な賃金や協同組合など、生産者を支える仕組み",
    "産地の例と、製品ページや Source To You で確かめる方法",
  ],
  toc: [
    { id: "definition", title: "コ・インパクトソーシングとは" },
    { id: "how", title: "生産者を支える仕組み" },
    { id: "examples", title: "オイルと産地の例" },
    { id: "check", title: "自分で確かめる方法" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "コ・インパクトソーシング | doTERRA Essential Oils",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/difference-co-impact-sourcing",
      note: "定義、公正な賃金を期日通りに払うこと、協同組合の形成の支援、ヒーリングハンズ基金の役割、100を超えるオイルと40カ国超の数字",
    },
    {
      title: "コ・インパクトソーシング|ドテラ・ジャパン 社会貢献活動（CSR）サイト",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/csr/co-impact-sourcing",
      note: "生産者を支える仕組みづくり、取り組みの項目、支援対象の生産物と生産国、それぞれの補足",
    },
    {
      title: "グローバル・ボタニカル・ネットワーク | doTERRA Essential Oils",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/difference-global-botanical-network",
      note: "40カ国を超える地域の農家や蒸留者と協力していること",
    },
    {
      title: "How dōTERRA Sources Essential Oils · Co-Impact Sourcing | doTERRA Essential Oils",
      publisher: "doTERRA（米国公式、英語）",
      url: "https://www.doterra.com/US/en/sourcing",
      note: "英語の表記、公開市場で買わず直接契約する自社の調達の運営モデル、250以上の数字、CPTGが社内基準であること、Source to YouのGC/MSレポート",
    },
    {
      title: "CPTG 品質のエッセンシャルオイル",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/cptg-testing-process",
      note: "CPTGの品質管理と試験の内容",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "製品ページのコ・インパクトのマークから Source To You のレモンのページへ移動できること",
    },
    {
      title: "ベルガモット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/bergamot-15ml/",
      note: "製品ページのアイコンがコ・インパクトのマークのない例であること",
    },
    {
      title: "ゼラニウム | Source To You",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/geranium",
      note: "ケニアの小学校の教室とトイレの増設",
    },
    {
      title: "ローズ | Source To You",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/rose",
      note: "ブルガリアの子どもたちへの奨学金",
    },
    {
      title: "ティーツリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/tea-tree-15ml/",
      note: "製品ページのアイコンにコ・インパクトのマークがない例であること",
    },
  ],
  Body: () => (
    <>
      <p>
        ドテラの製品ページを開くと、アイコンの中にコ・インパクトのマークが並ぶオイルがあります。
      </p>
      <p>この記事では、コ・インパクトソーシングの公式の定義と、生産者を支える仕組み、自分で確かめる方法を紹介します。</p>

      <h2 id="definition">コ・インパクトソーシングとは</h2>
      <p>
        コ・インパクトソーシング（Co-Impact Sourcing®）は、ドテラの原料調達の取り組みです。公式サイトは、発展途上地域の長期的な発展と相互に有益なパートナーシップを目指し、継続的な仕事と安定した収入の提供を目的とする活動と説明しています。
      </p>
      <p>
        米国の公式サイトでは、公開市場で買い付けるのではなく、協同組合や蒸留者と直接契約する自社の調達の運営モデルとされています。調達先は40カ国を超える地域に広がっています。
      </p>
      <p>
        ドテラ・ジャパンのCSRサイトは、継続的な雇用と安定した収入によって生産者を支える仕組みづくりと説明しています。
      </p>

      <h2 id="how">生産者を支える仕組み</h2>
      <p>公式の説明から、主な取り組みを4つにまとめます。</p>
      <CheckPoints
        items={[
          { title: "公正な賃金を期日どおりに", text: "公正な賃金を、期日どおりに払うことを掲げています。" },
          { title: "協同組合づくりを支える", text: "生産者の協同組合の形成を後押しし、農業技術の習得や生産能力、交渉力の向上を支えるとしています。" },
          { title: "工程を把握する", text: "現地の原料を調達し、生産工程を把握し、透明性の高い団体と提携するとしています。" },
          { title: "環境に配慮する", text: "自然保護や環境負荷の軽減、持続可能性、法令順守に取り組むとしています。" },
        ]}
      />
      <p>
        地域の開発には、ドテラ・ヒーリングハンズ基金が資金や資源を提供します。たとえばケニアでは小学校の教室とトイレの増設、ブルガリアでは子どもたちへの奨学金が紹介されています。
      </p>

      <h2 id="examples">オイルと産地の例</h2>
      <p>CSRサイトに載っている例の一部です。表は公式の説明を短くまとめたもので、すべての生産者に同じ取り組みがあるという意味ではありません。</p>
      <DataTable
        caption="コ・インパクトソーシングの生産物と産地の例"
        headers={["オイル", "生産国", "公式の説明"]}
        rows={[
          ["オレンジ", "ブラジル、ギリシャ", "ブラジルで小規模農家と提携"],
          ["ラベンダー", "ブルガリア、フランス", "ブルガリアに自社の蒸留所を設立し、地域の雇用につなげる"],
          ["ティーツリー", "ケニア、オーストラリア", "蒸留後の植物を畑に戻し、土づくりに生かす"],
          ["ウィンターグリーン", "ネパール、中国（雲南省）", "過剰な採取への懸念から、持続可能な収穫の研修を行う"],
          ["フランキンセンス", "オマーン、ソマリランド地域、エチオピア", "公正な支払いと過剰な採取の防止を支える"],
        ]}
      />
      <p>
        ひとつのオイルの産地を詳しく読みたい方は、<Link href="/blog/lavender">ラベンダー</Link>や<Link href="/blog/orange">オレンジ</Link>の記事をどうぞ。
      </p>

      <h2 id="check">自分で確かめる方法</h2>
      <p>手元のオイルで、次の順に確かめてみてください。製品ページと Source To You は、日本語で読めます。</p>
      <div className="mt-6">
        <Steps
          steps={[
            { title: "製品ページのアイコンを見る", text: "コ・インパクトのマークがあるかを確認します。レモンの製品ページでは、マークから Source To You のレモンのページへ移動できます。" },
            { title: "Source To You で産地を読む", text: "ドテラの産地情報サイトの日本語ページで、オイルごとの産地や作り方を読めます。" },
            { title: "分析レポートを見る", text: "米国の公式サイトは、2016年5月以降のGC/MSレポートを Source to You で公開していると説明しています。" },
          ]}
        />
      </div>

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "CPTGと同じものですか？",
            a: "別のものです。CPTGはドテラの品質の社内基準で、第三者認証とは別のものと公式に説明されています。コ・インパクトソーシングは原料の調達の取り組みです。",
          },
          {
            q: "すべてのオイルが対象ですか？",
            a: "製品ページにマークがあるオイルと、ないオイルがあります。たとえばレモンにはマークがあり、ベルガモットのページのアイコンにはありません。ただし、ティーツリーはマークがなくてもCSRサイトの例に挙がっているので、マークの有無だけでは判断できません。製品ページとCSRサイトをあわせて確認してください。",
          },
          {
            q: "公式の数字がページによって違うのはなぜですか？",
            a: "日本語の公式サイトは100を超えるオイル、米国の公式サイトは250以上のオイルと植物原料と書いています。違いの理由は公式に説明されていません。数字を見るときは、そのページの対象と時点を確認してください。",
          },
          {
            q: "香りや使い心地に関係がありますか？",
            a: "この取り組みは調達の話で、香りや体への働きを示すものではありません。使い方は、お手元の製品ラベルの表示に従ってください。",
          },
        ]}
      />

      <p>
        まずは手元のオイルの製品ページを開いて、マークの有無と産地を確かめてみてください。産地や取り組みの内容は更新されることがあるので、最新の公式ページもあわせて見ておくと安心です。
      </p>
      <NextStepBox />
    </>
  ),
};
