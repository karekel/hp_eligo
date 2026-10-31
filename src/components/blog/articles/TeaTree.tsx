import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, MethodCard, NextStepBox, OilProfile, PairingList, PointBox, Steps, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ティーツリー */
export const teaTree: ArticleContent = {
  summary: [
    "ティーツリーの基本情報と、青い葉に渋みが重なる香りの特徴",
    "掃除の仕上げに香りを添える3つの方法と、スプレーの分量",
    "塩素系洗浄剤と一緒に使わないなど、掃除で守りたい注意点",
  ],
  toc: [
    { id: "profile", title: "ティーツリーはどんなオイル？" },
    { id: "usage", title: "お掃除での使い方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ティーツリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/tea-tree-15ml/",
      note: "学名、抽出部位、香りの表示、「塗・香」の表示、メラルーカという別名、水の入ったスプレーボトルに数滴入れる使い方",
    },
    {
      title: "ティーツリー",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/tea-tree",
      note: "オーストラリア原産の常緑の低木であること、ケニアからの調達、冬の収穫、収穫後3〜6週間で再び育つこと",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）",
    },
    {
      title: "アロマスプレーの作り方｜保存方法や注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1886/",
      note: "掃除スプレーの分量（無水エタノール5mL、精油10〜20滴、クエン酸など5g、水400mL）、材料と汚れの種類、容器の材質、1〜2週間の使用目安",
    },
    {
      title: "アロマで部屋をいいにおいにする方法！インテリアに合わせた香りコーディネート術も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年2月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4072/",
      note: "手荒れしやすい人はゴム手袋を使うこと、アルミ製品や天然素材に使わないこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "ティートリーを皮膚刺激の例に挙げていること、原液の扱い、火気、保管",
    },
    {
      title: "住宅用塩素系洗浄剤の使い方－まぜるな危険！浴室などで事故が発生しています－",
      publisher: "独立行政法人 国民生活センター（2026年3月18日）",
      url: "https://www.kokusen.go.jp/news/data/n-20260318_1.html",
      note: "塩素系洗浄剤を酸やエタノールと混ぜると塩素ガスが発生すること、換気すること",
    },
    {
      title: "身近にある洗剤の事故に注意！",
      publisher: "東京消防庁",
      url: "https://www.tfd.metro.tokyo.lg.jp/lfe/nichijo/detergent.html",
      note: "別の洗剤を使う前に水やお湯で流すこと",
    },
    {
      title: "#087 掃除でできるエコアクション",
      publisher: "高知県 環境計画推進課（こうちの脱炭素スタートサイト「こっから。」、2022年1月4日）",
      url: "https://cn-portal.pref.kochi.lg.jp/eco_magazine/6814/",
      note: "大理石やアルミ、天然素材は重曹やクエン酸と相性が悪いこと、目立たない場所で確認すること",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "精油が家具などのシミや変色の原因になること",
    },
  ],
  Body: () => (
    <>
      <p>
        青い葉の香りに、かすかな渋みが重なるティーツリー。掃除を終えた洗面所やトイレに、さっぱりした香りを添えたいときに手に取りたいオイルです。
      </p>
      <p>
        この記事では、香りの特徴と、掃除の仕上げに使う3つの方法を紹介します。オイルは洗剤の代わりではありません。汚れは洗剤と拭き取りで落とし、最後に香りをのせるイメージで使いましょう。
      </p>

      <h2 id="profile">ティーツリーはどんなオイル？</h2>
      <OilProfile
        name="ティーツリー"
        en="Tea Tree"
        image="/assets/products/tea-tree-15ml.jpg"
        color={oilColors.peppermint}
        rows={[
          { label: "学名", value: "Melaleuca alternifolia" },
          { label: "抽出部位", value: "葉（水蒸気蒸留法）" },
          { label: "香り", value: "ハーベイシャス、グリーン、レザリー" },
          { label: "製品ページの表示", value: "15mLは「塗・香」" },
        ]}
      />
      <p>
        グリーンは緑の葉の青々とした香り、レザリーは革のような渋みのことです。ハーブのようなスーッとした印象もあり、甘さはほとんど感じません。
      </p>
      <p>
        メラルーカとも呼ばれます。オーストラリア原産の常緑の低木で、ケニアからも調達しています。収穫は冬の間だけで、刈り取ったあと3〜6週間で再び育ち始めます。
      </p>
      <p>製品ページの表示は「塗・香」ですが、協会は皮膚刺激に注意が必要な精油の例に挙げています。この記事では肌の案内はせず、掃除の香りとして紹介します。</p>

      <h2 id="usage">お掃除での使い方</h2>
      <UsageCards
        items={[
          {
            en: "Finish",
            title: "拭き掃除の仕上げに",
            text: "洗面台やトイレの掃除を終えたら、下で紹介するスプレーを布に吹き、ひと拭きして香りを添えます。",
          },
          {
            en: "Trash can",
            title: "ごみ箱の底に",
            text: "新聞紙に2〜3滴垂らして、ごみ箱の底に敷きます。ふたを開けたときに香りが立ちます。オイルが容器に直接つかないようにしましょう。",
          },
          {
            en: "After cleaning",
            title: "掃除のあとの部屋に",
            text: "窓を開けて掃除を終えたら、ディフューザーで香らせます。レモンを合わせると軽やかな印象になります。",
          },
        ]}
      />

      <MethodCard no={1} title="掃除の仕上げスプレーを作る" items={["500mLのスプレー容器（ガラスかアルコール対応）", "無水エタノール5mL", "ティーツリー10〜20滴", "クエン酸5g", "水400mL"]}>
        <Steps
          steps={[
            { title: "無水エタノールにオイルを溶かす", text: "まずは10滴から。容器に無水エタノールを入れ、オイルを加えてよく混ぜます。" },
            { title: "クエン酸を溶かした水を加える", text: "水400mLにクエン酸5gを溶かしてから注ぎ、ふたをして振ります。" },
            { title: "布に吹いて拭く", text: "洗面台のまわりや便器の外側に使います。肌が直接触れる場所は避け、必ず目立たない場所で試してください。" },
            { title: "1〜2週間で使い切る", text: "作った日と中身を容器に書き、冷暗所で保管します。" },
          ]}
        />
        <PointBox>クエン酸は水あかや石けんカスの掃除に使う材料です。手あかや油汚れが気になる場所なら、同じ5gをセスキ炭酸ソーダに替えられます。</PointBox>
      </MethodCard>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>ティーツリーの渋みは、柑橘やミントの香りと合わせると角がとれます。単体の香りが強いと感じる方は、半分を別のオイルに置きかえてみましょう。</p>
      <PairingList
        items={[
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "明るさが加わり、掃除のあとに合う香りに" },
          { name: "ユーカリプタス", en: "Eucalyptus", color: oilColors.peppermint, note: "葉の香り同士で、森のような印象に" },
          { name: "ペパーミント", en: "Peppermint", color: oilColors.peppermint, note: "清涼感が加わり、キレのある香りに" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花の甘さが、葉の渋みを包む" },
        ]}
      />
      <BlendRecipe
        title="スプレーをやわらかく"
        drops={[
          { name: "ティーツリー", color: oilColors.peppermint, count: 5 },
          { name: "レモン", color: oilColors.lemon, count: 5 },
        ]}
      />
      <BlendRecipe
        title="ディフューザーで森の香り"
        drops={[
          { name: "ティーツリー", color: oilColors.peppermint, count: 2 },
          { name: "ユーカリプタス", color: oilColors.peppermint, count: 2 },
          { name: "ペパーミント", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>
        最初の例は上のスプレーの10滴を分けたもの、次の例はディフューザーの合計6滴です。ラルツディフューザーの目安は5〜10滴です。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="お掃除に使うときの注意点"
        items={[
          "塩素系の洗浄剤と、クエン酸や酢、エタノールを含むものを混ぜたり、同時に使ったりしないでください。有毒な塩素ガスが発生します。別の洗剤を使う前に、水でしっかり流しましょう。",
          "掃除中は必ず換気します。",
          "大理石などの石材にクエン酸のスプレーは使いません。アルミ製品や天然素材も、変色することがあるので避けましょう。",
          "オイルの原液がつくと、色や跡が残ることがあります。スプレーは必ず無水エタノールに溶かして作ります。",
          "手が荒れやすい方はゴム手袋を使います。スプレーを人やペットに向けないでください。",
          "肌につけないように、口に入れないようにしましょう。ついたら洗い流します。",
          "無水エタノールを使うので、作るときも使うときも火のそばを避けます。",
          "容器は子どもやペットの手の届かない場所に保管します。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "水だけのスプレーでも使えますか？",
            a: "製品ページには、水の入ったスプレーボトルに数滴入れる使い方があります。オイルと水は混ざらないので、使う前によく振ってください。",
          },
          {
            q: "ティーツリーとティートリーは別のオイルですか？",
            a: "同じ植物の呼び方の違いです。ドテラの製品名はティーツリー、日本アロマ環境協会の表記はティートリーです。",
          },
        ]}
      />

      <p>
        ティーツリーは、掃除を終えたあとの「ここまでやった」という気分に、香りで区切りをつけてくれるオイルです。まずは今日のごみ箱に、新聞紙と2滴から試してみてください。酢とレモンで作るスプレーは<Link href="/blog/cleaning-spray">手作り掃除スプレーの作り方</Link>で紹介しています。
      </p>
      <NextStepBox />
    </>
  ),
};
