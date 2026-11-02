import Link from "next/link";
import { CautionBox, DataTable, NextStepBox, Steps, type ArticleContent } from "../ArticleParts";

/** ドテラの会社の事実、特徴、香りを試すところからのはじめ方をまとめた記事 */
export const whatIsDoterra: ArticleContent = {
  summary: [
    "ドテラの創業、名前の由来、本社、日本の運営会社などの基本情報",
    "CPTG®という社内の品質基準と、オイルの調達、製品の区分の特徴",
    "登録や購入の前に、香りを試すところから始める手順",
  ],
  toc: [
    { id: "company", title: "ドテラとはどんな会社？" },
    { id: "cptg", title: "特徴1｜CPTG®という社内の品質基準" },
    { id: "features", title: "特徴2｜オイルの調達と製品の区分" },
    { id: "member", title: "ドテラのアロマは会員制度のもとで販売されている" },
    { id: "start", title: "はじめ方｜まず香りを試す" },
    { id: "caution", title: "はじめる前の注意点" },
  ],
  sources: [
    {
      title: "The doTERRA Story",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/about-our-story",
      note: "2008年の創業、ラテン語で「地球からの贈り物」を意味する名前、創業に関わった人たち、CPTG®基準を作った経緯",
    },
    {
      title: "概要報告（会社概況）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/company-overview",
      note: "2008年4月25日の設立、2009年のアロマタッチ テクニックの導入、2012年の日本市場への参入、扱う製品の種類",
    },
    {
      title: "本社",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/about-headquarters",
      note: "グローバル本社が米国ユタ州プレザント・グローブにあること",
    },
    {
      title: "特定商取引法に基づく表記",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/specified-commercial-transaction-law",
      note: "日本の会社の名称と所在地、プロダクトセンターを運営していること",
    },
    {
      title: "CPTG 品質のエッセンシャルオイル",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/cptg-testing-process",
      note: "試験を行う3つの時点と、基準に含まれる8つの試験",
    },
    {
      title: "How dōTERRA Sources Essential Oils · Co-Impact Sourcing",
      publisher: "doTERRA（米国公式、英語）",
      url: "https://www.doterra.com/US/en/sourcing",
      note: "CPTGの正式表記、第三者認証ではない社内基準であること、「純粋」に国際的に認められた定義がないこと、協同組合や蒸留者との直接契約",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "オイルが化粧品、食品添加物、雑貨の3種類に分かれ、使用方法と注意表示を確認すること、少量から始めること、医師または薬剤師への相談",
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
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "製品ページの「香りの特徴」の欄",
    },
    {
      title: "会員登録について",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/member/",
      note: "販売に会員制度を設けていること、WCとWAの2種類、満20歳以上、初回登録料と更新料、参考小売価格で購入する方法",
    },
    {
      title: "プロダクトセンター 11月のワークショップ・体験コーナー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社・2026年10月15日）",
      url: "https://www.doterra-info.jp/media/3237530/",
      note: "プロダクトセンターで製品を手に取って試せること、ワークショップが「どなたでも参加OK」と案内されていること",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "コットンやティッシュに垂らして香りを楽しむ方法、ラベルの使用方法を読むこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、子どもやペットの手の届かない場所での保管",
    },
  ],
  Body: () => (
    <>
      <p>
        「ドテラ アロマ」で検索すると、会社の話、製品の話、会員の話が混ざって出てきます。ドテラとは、エッセンシャルオイル（精油）を中心に扱う、アメリカ発の会社です。「アロマオイル」と呼ばれる製品には精油でないものもあり、違いは<Link href="/blog/what-is-essential-oil">エッセンシャルオイルとは</Link>で説明しています。
      </p>
      <p>
        ELIGŌは、ドテラの会員のチームです。この記事では、公式資料で確かめられる事実に絞って、会社の特徴をまとめます。後半では、登録や購入の前に、香りを試すところから始める手順を紹介します。
      </p>

      <h2 id="company">ドテラとはどんな会社？</h2>
      <p>まず、公式の資料で確認できる基本情報を表にまとめます。</p>
      <DataTable
        caption="ドテラの基本情報"
        headers={["項目", "内容"]}
        rows={[
          ["創業", "2008年（4月25日に設立）"],
          ["名前の由来", "ラテン語で「地球からの贈り物」を意味する"],
          ["グローバル本社", "米国ユタ州プレザント・グローブ"],
          ["日本への参入", "2012年"],
          ["日本の会社", "doTERRA CPTG Essential Oils Japan合同会社（東京都港区西麻布）"],
          ["主な製品", "エッセンシャルオイルのほか、パーソナルケア、スパ製品、サプリメント、リビング製品"],
        ]}
      />
      <p>
        公式の説明では、ドテラは品質のよいエッセンシャルオイルを世界に届けることを使命に、医療従事者やビジネスの専門家が集まって創業しました。2009年には、オイルと手のタッチを組み合わせる<Link href="/blog/aromatouch-technique">アロマタッチ テクニック</Link>を導入しています。
      </p>

      <h2 id="cptg">特徴1｜CPTG®という社内の品質基準</h2>
      <p>
        ドテラの説明でよく目にする言葉が、CPTG®です。正式には CPTG Certified Pure Tested Grade® と書きます。これはドテラが自社で定めた品質基準です。米国公式は、第三者認証とは別の社内基準だと明記しています。国や公的機関の認証ではありません。
      </p>
      <p>
        試験は、蒸留の直後、製造施設に届いたとき、ボトルに充填したあとの3回行うと説明されています。基準には、官能検査、微生物試験、ガスクロマトグラフィー試験、質量分析法、フーリエ変換赤外分光法、旋光度測定、同位体解析、重金属試験が含まれます。
      </p>
      <p>
        米国公式は、「純粋」という言葉に国際的に認められた定義はないとも書いています。CPTG®は、ドテラが自社の製品に使う基準として読むのが正確です。ほかのブランドと比べるときは、基準の名前だけで判断せず、学名や抽出部位などの表示も見ましょう。
      </p>

      <h2 id="features">特徴2｜オイルの調達と製品の区分</h2>
      <p>
        オイルの調達では、コ・インパクトソーシングという考え方を掲げています。米国公式によると、市場を通して買うのではなく、協同組合や蒸留者と直接契約する仕組みです。詳しくは<Link href="/blog/co-impact-sourcing">コ・インパクトソーシングとは</Link>をご覧ください。
      </p>
      <p>
        もうひとつ、最初に知っておきたいのが製品の区分です。日本のオイルは化粧品、食品添加物、雑貨の3種類に分かれ、使い方が異なります。同じ名前でも容量で表示が変わることがあり、ペパーミントは製品ページの表示が15mLは「香・食」、5mLは「塗・香」です。区分の説明は<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>で詳しく扱っています。
      </p>

      <h2 id="member">ドテラのアロマは会員制度のもとで販売されている</h2>
      <p>
        ドテラ・ジャパンは製品の販売に会員制度を設けていて、WC（ホールセール・カスタマー）とWA（ウェルネス・アドボケイト）の2種類があります。登録は満20歳以上で、初回登録料は3,500円、更新料は年2,000円（いずれも税込）です。登録せずに参考小売価格で買う方法もあり、公式の案内はショッピングサイト、プロダクトセンター、知り合いのWA会員に尋ねることを挙げています。
      </p>

      <h2 id="start">はじめ方｜まず香りを試す</h2>
      <p>はじめるときに、登録や購入を急ぐ必要はありません。最初に確かめたいのは、その香りを心地よいと感じるかどうかです。</p>
      <Steps
        steps={[
          { title: "好みの方向を決める", text: "花、柑橘、ミント、樹木など、好きな香りの方向を考えます。製品ページの「香りの特徴」も手がかりになります。ラベンダーなら、パウダリー、フローラル、ライトと書かれています。" },
          { title: "実物の香りに触れる", text: "ドテラ・ジャパンが運営するプロダクトセンターには、製品を手に取って試せる体験コーナーがあります。ワークショップは「どなたでも参加OK」と案内されています。内容は月ごとに変わるので、行く前に案内を確認してください。" },
          { title: "1滴ずつ試す", text: "オイルが手元にあるときは、ティッシュやコットンに1滴垂らします。" },
          { title: "ラベルを読む", text: "そのオイルの使用方法と注意表示を確認します。肌や飲食に使う前には、必ず読みましょう。" },
        ]}
      />
      <p>
        香りの特徴は<Link href="/blog/lavender">ラベンダー</Link>や<Link href="/blog/lemon">レモン</Link>の記事で確かめられます。道具なしで試す方法は<Link href="/blog/no-diffuser">ディフューザーがなくても大丈夫！</Link>に、部屋に香りを広げる方法は<Link href="/blog/diffuser-guide">ディフューザーの選び方</Link>にまとめました。
      </p>

      <h2 id="caution">はじめる前の注意点</h2>
      <CautionBox
        items={[
          "使い方は製品の区分で変わります。お手元のラベルの使用方法と注意表示を確認してください。",
          "原液を直接肌につけたり、目に入れたりしないでください。",
          "最初は少量から始めましょう。香りで気分が悪くなったら使用をやめて、換気してください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "オイルには引火性があります。火のそばでは使わないでください。",
          "子どもやペットの手の届かない場所に保管しましょう。",
        ]}
      />

      <p>
        ドテラは、2008年に創業したエッセンシャルオイルの会社です。CPTG®は社内の基準であること、使い方は製品の表示で変わることを押さえたら、まずは1滴の香りから試してみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
