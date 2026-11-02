import Link from "next/link";
import { CautionBox, CheckPoints, DataTable, Faq, NextStepBox, PointBox, type ArticleContent } from "../ArticleParts";

/** おやすみ前の香りの選び方と寝室での使い方の記事 */
export const bedtimeScents: ArticleContent = {
  summary: [
    "寝室で香りを使うときの基本の3つ",
    "おやすみ前の香りを、好みと香りの残り方で選ぶ方法",
    "枕にたらさない理由と、家族と同じ部屋で使うときの配慮",
  ],
  toc: [
    { id: "basics", title: "寝室の香りは少なめから" },
    { id: "choose", title: "おやすみ前の香りの選び方" },
    { id: "methods", title: "寝室でのオイルの使い方" },
    { id: "share", title: "家族と同じ寝室で使うとき" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "精油を1%以下に希釈する理由とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年6月16日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/stepup/2448/",
      note: "ラベンダーの原液を枕に垂らす習慣で皮膚炎が起きた例",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュやハンカチに1〜2滴垂らして香りを楽しむ方法",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "電気を使わない道具はデスクの上や枕元など比較的狭い範囲向けであること、電気式は広い範囲向けであること、アロマキャンドルを就寝時に使わないこと、違和感があれば中止して換気すること、精油のシミや変色",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "精油の引火性とアロマランプやキャンドルの火への注意",
    },
    {
      title: "精油とアロマオイルの違いは？選び方や楽しみ方も解説",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1836/",
      note: "好きな香りを優先すること",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "ノートが揮発速度による分類であること",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "オイルごとのノートの分類",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "香りの表示（パウダリー、フローラル、ライト）、就寝時に枕や寝具に使う案内があること",
    },
    {
      title: "オレンジ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "香りの表示",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "香りの表示",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "香りの表示",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "オイル5〜10滴、タイマー、最低出力で約8時間、自動安全停止機能、平らで硬い場所に置くこと、カーペットやラグの上を避けること、噴出口から吸引しないこと",
    },
    {
      title: "エッセンシャルオイルで作る『リネンスプレー』レシピ",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/tools/product-center/Display/odor%20control-recipe.pdf",
      note: "リネンスプレーの分量（50mLに合計15滴）とカーテンなどに使うこと",
    },
    {
      title: "消費者庁からの精油の使い方に関する注意喚起について",
      publisher: "公益社団法人 日本アロマ環境協会（2025年4月2日）",
      url: "https://www.aromakankyo.or.jp/aeaj-news/detail/2296",
      note: "オイルがついたティッシュを水で湿らせて捨てること",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "妊娠時の注意、お年寄りや既往歴のある方は基準の半分以下の量で試すこと、原液を肌につけないこと、手の届かない場所での保管",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "アロマスプレーの作り方｜保存方法や注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1886/",
      note: "ペットのいる空間での使用を避けること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "妊娠中、授乳中、服薬中、通院中の方と子どもは使用前に医師または薬剤師に相談すること",
    },
  ],
  Body: () => (
    <>
      <p>
        1日の終わりに、好きな香りのそばで過ごす時間を作ってみませんか。アロマオイルを寝室で使うなら、何を選び、どこに置くかを先に決めておきましょう。
      </p>
      <p>
        この記事では、おやすみ前の香りの選び方と、寝室でのエッセンシャルオイル（精油）の使い方をまとめます。香りを楽しむ話として読んでください。「アロマオイル」と呼ばれる製品には精油でないものもあります。違いは<Link href="/blog/what-is-essential-oil">エッセンシャルオイルとは</Link>をご覧ください。
      </p>

      <h2 id="basics">寝室の香りは少なめから</h2>
      <p>寝室はドアを閉めて長い時間を過ごす部屋です。次の3つを基本にしましょう。</p>
      <CheckPoints
        items={[
          { title: "量を減らす", text: "ティッシュの目安は1〜2滴です。寝室では1滴から始めます。" },
          { title: "時間を区切る", text: "ディフューザーは、タイマーで短い時間から試します。" },
          { title: "顔から離す", text: "枕元でも、少し離れた台にのせます。" },
        ]}
      />
      <p>
        枕にはたらさないでください。日本アロマ環境協会の記事には、ラベンダーの原液を枕にたらす習慣で皮膚炎が起きた例が載っています。製品ページに枕や寝具に使う案内があるオイルもありますが、この記事では、直接たらさない方法だけを紹介します。
      </p>

      <h2 id="choose">おやすみ前の香りの選び方</h2>
      <p>手がかりは、自分の好みと香りの残り方です。香りの表示はドテラの製品ページのものです。ノートは揮発の速さによる分け方で、ベースほど揮発しにくい香りです。</p>
      <DataTable
        caption="香りの印象と残り方"
        headers={["印象", "オイルの例", "香りの表示", "ノート"]}
        rows={[
          ["軽い花の香り", "ラベンダー", "パウダリー、フローラル、ライト", "ミドル"],
          ["甘い柑橘の香り", "オレンジ", "スイート、フレッシュ、シトラス", "トップ"],
          ["木の香り", "ヒノキ", "ウッディー、エアリー、フレッシュ", "ベース"],
          ["温かみのある樹脂の香り", "フランキンセンス", "ウォーム、スパイシー、クリーン", "ベース"],
        ]}
      />
      <p>
        香りが長く残ると気になる人は、トップやミドルの香りから試しましょう。静かな余韻が好きな人は、ベースの香りが合うかもしれません。
      </p>
      <p>
        朝や仕事の時間の香りと分けておくと、「この香りがしたら1日の終わり」という目印になります。
      </p>
      <PointBox>
        はじめての香りは昼のうちに試しましょう。苦手なときに換気しやすいからです。
      </PointBox>
      <p>
        製品ごとの楽しみ方は、<Link href="/blog/lavender">ラベンダー</Link>と<Link href="/blog/serenity">ドテラセレニティー</Link>の記事で紹介しています。
      </p>

      <h2 id="methods">寝室でのオイルの使い方</h2>
      <p>香らせたい範囲で選びましょう。</p>
      <DataTable
        caption="寝室での使い方の比べ方"
        headers={["方法", "置き方", "量の目安", "香る範囲"]}
        rows={[
          ["ティッシュ、アロマストーン", "小皿にのせて、枕元の台に置く", "ティッシュは1〜2滴", "枕元のまわり"],
          ["ディフューザー", "ベッドから離れた、平らで硬い台に置く", "説明書の量。ラルツは5〜10滴", "部屋全体"],
          ["リネンスプレー", "カーテンやベッドカバーに軽く吹きかける", "50mLに合計15滴の例", "布のまわり"],
        ]}
      />
      <p>
        ディフューザーは、カーペットやラグの上には置きません。ドテラ ラルツディフューザーなら、ベッドに入る少し前に1時間のタイマーで動かすと、香りの量を抑えられます。
      </p>
      <p>
        リネンスプレーは、肌に直接触れる枕カバーやシーツには使いません。作り方は<Link href="/blog/lavender">ラベンダーの記事</Link>にあります。
      </p>
      <p>
        アロマキャンドルは、火事の原因になるので就寝時に使わないでください。火を使うアロマランプも同じです。
      </p>
      <p>翌朝は、ティッシュを水で湿らせてから捨てましょう。</p>

      <h2 id="share">家族と同じ寝室で使うとき</h2>
      <p>香りの感じ方には個人差があります。寝室を誰かと分け合うときは、自分の好みだけで決めないようにしましょう。</p>
      <DataTable
        caption="一緒に過ごす人ごとの考え方"
        headers={["一緒に過ごす人", "考え方"]}
        rows={[
          ["パートナーや家族", "香りを出す前に声をかける。苦手なら使わない"],
          ["子ども", "3歳未満には芳香浴以外を行わない。手の届く場所に置かない"],
          ["妊娠中の方", "使う前に医師または薬剤師に相談する"],
          ["お年寄り、既往歴のある方", "基準の半分以下の量で試す"],
          ["ペット", "ペットのいる空間では使わない"],
        ]}
      />
      <p>
        <Link href="/blog/kids-safety">子どもの注意点</Link>と<Link href="/blog/pets-safety">ペットの注意点</Link>も読んでください。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "枕や寝具にオイルを直接たらさないでください。",
          "原液を肌につけないでください。目に入れないようにしましょう。",
          "火のそばでは使わないでください。キャンドルやランプをつけたまま眠らないでください。",
          "ティッシュやストーン、ボトルは、子どもやペットの手の届かない場所に置きます。",
          "ディフューザーの噴出口に顔を近づけず、ミストを直接吸い込まないでください。",
          "精油はシミや変色の原因になります。家具やカーテンに直接つけないでください。",
          "違和感や不快感があれば、すぐに止めて換気してください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方は、使う前に医師または薬剤師に相談してください。",
          "この記事は香りを楽しむ話です。眠りのことで悩みがあるときは、医師に相談してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "どのくらいの時間、香らせればいいですか？",
            a: "決まった時間を示す資料はありません。1時間以内から試して、多いと感じたら短くしましょう。",
          },
          {
            q: "朝までディフューザーをつけていてもいいですか？",
            a: "機種の説明書に従ってください。ラルツは最低出力で約8時間動き、自動で止まる機能があります。朝には水を捨てて片づけましょう。",
          },
        ]}
      />

      <p>
        まずは今夜、好きな香りをティッシュに1滴たらして、小皿にのせてみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
