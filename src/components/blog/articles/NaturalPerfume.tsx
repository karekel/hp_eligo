import Link from "next/link";
import { oilColors } from "../Botanicals";
import { BlendRecipe, CautionBox, DataTable, Faq, MethodCard, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** 肌につける香りと、肌につけない香りのパフュームレシピ */
export const naturalPerfume: ArticleContent = {
  summary: [
    "トップ、ミドル、ベースの3段で香りを組み立てる考え方",
    "肌につける香りは濃度1%以下で作るレシピ",
    "無水エタノールの火気の注意と、作ったあとの扱い",
  ],
  toc: [
    { id: "notes", title: "香りの3段を知る" },
    { id: "skin", title: "肌につける香りのレシピ" },
    { id: "paper", title: "紙や小物で楽しむ香りのレシピ" },
    { id: "caution", title: "作るときと使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "オリジナル フレグランス作り（PDF）",
      publisher: "doTERRA（日本向けメディアサーバー、2018年）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "ベース、ミドル、トップの順に入れること、ノートの配分とオイルの分類、コットンや手紙に使う方法",
    },
    {
      title: "アロマと一般的な香水の違いは？アロマを使ったナチュラルフレグランスの作り方も解説",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/beauty/1826/",
      note: "香水の香料濃度、ナチュラルフレグランスは1%以下で作ること、30mLスプレーの分量と手順",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（News Letter、2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "ムエットで香りを比べる手順、遮光瓶での保存、肌に使うときは1%以下、ロールオンと練り香の分量",
    },
    {
      title: "消費者庁からの精油の使い方に関する注意喚起について",
      publisher: "公益社団法人 日本アロマ環境協会（2025年4月2日）",
      url: "https://www.aromakankyo.or.jp/aeaj-news/detail/2296",
      note: "精油のついた試香紙やティッシュは水で湿らせて処分すること",
    },
    {
      title: "アロマスプレーの作り方｜保存方法や注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1886/",
      note: "肌につけるスプレーは1%以下、顔は0.5%以下、3歳未満には使わないこと、1〜2週間で使い切ること",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとする計算と、全体量で割る濃度の計算式",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、光毒性と皮膚刺激の例、高齢の人や既往歴のある人の量、保管",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "ボディスプレーは化粧品に当たると考えられること",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "製品ページの塗・香の表示",
    },
    {
      title: "ゼラニウム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/geranium-15ml/",
      note: "製品ページの塗・香の表示",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "製品ページの塗・香の表示",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "製品ページの塗・香の表示",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "15mLは香・食の表示で、肌に塗る案内がないこと",
    },
    {
      title: "消毒用アルコールの安全な取扱いについて",
      publisher: "総務省消防庁",
      url: "https://www.fdma.go.jp/mission/prevention/alcohol/items/alcohol_leaflet.pdf",
      note: "アルコールの火気、高温の場所、換気、容器の表示の注意。消毒用アルコールについての案内",
    },
    {
      title: "アルコールの増産等に係る消防法令の運用に関する留意事項及び運用事例（令和２年５月１日版）",
      publisher: "総務省消防庁",
      url: "https://www.fdma.go.jp/mission/prevention/alcohol/items/alcohol_jirei200501.pdf",
      note: "エタノール（100%）の引火点が13℃であること",
    },
    {
      title: "身近な危険物の事故を防ぐために",
      publisher: "東京消防庁（2026年5月18日更新）",
      url: "https://www.tfd.metro.tokyo.lg.jp/inf/k_week/jikken.html",
      note: "エタノールの炎が明るい場所では見えにくいこと、蒸気が低い所にたまること",
    },
    {
      title: "消毒液「1.使用後に火気に近づいて引火」",
      publisher: "独立行政法人 製品評価技術基盤機構（NITE）",
      url: "https://www.nite.go.jp/jiko/chuikanki/poster/sonota/2020082703.html",
      note: "アルコールを肌に使った直後に火気に近づくと引火するおそれがあること。消毒液についての案内",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があり、公共の場所では周囲に配慮すること",
    },
    {
      title: "化粧品を選ぶ前に知っておきたい知識 最終回 化粧品を安全に選ぶには",
      publisher: "独立行政法人 国民生活センター『国民生活』2025年9月号",
      url: "https://www.kokusen.go.jp/wko/pdf/wko-202509_04.pdf",
      note: "腕の内側など目立たない所で小さく試すこと、異常があれば受診すること",
    },
    {
      title: "手作り石けんの取り扱いにご注意を",
      publisher: "三重県 医療保健部 薬務課（令和7年11月27日更新）",
      url: "https://www.pref.mie.lg.jp/YAKUMUS/HP/0001213310003.htm",
      note: "手作り石けんの案内で、他人へのプレゼントや販売が規制の対象とされていること",
    },
    {
      title: "フリマ・オークションサイト（アプリ）で許可なく医薬品等を販売することはできません",
      publisher: "東京都保健医療局（2019年9月10日）",
      url: "https://www.hokeniryo.metro.tokyo.lg.jp/anzen/iyaku/koukokukisei/zenpanfrima/furimakisei",
      note: "許可を取らずに作った手作りコスメは販売できないこと",
    },
  ],
  Body: () => (
    <>
      <p>精油を組み合わせると、時間とともに香りが移り変わる自分だけの香水が作れます。材料は無水エタノールとオイルが中心です。</p>
      <p>
        ただし、肌につけるかどうかで濃度が大きく変わります。この記事では、肌につける香りと、紙や小物で楽しむ香りの2つのレシピを紹介します。どちらも個人で楽しむためのものです。
      </p>

      <h2 id="notes">香りの3段を知る</h2>
      <p>香りは、立ち上がる速さで3段に分けられます。これをノートと呼びます。</p>
      <DataTable
        caption="ノートごとの香り方とオイルの例"
        headers={["ノート", "香り方", "オイルの例"]}
        rows={[
          ["トップ", "すぐに香り、30分ほどで消える", "オレンジ、レモン、ペパーミント、ティーツリー、ユーカリプタス"],
          ["ミドル", "そのあと2〜4時間ほど香る", "ラベンダー、ゼラニウム"],
          ["ベース", "最も長く残る", "フランキンセンス、ヒノキ、サイプレス"],
        ]}
      />
      <p>
        配分の目安は、トップ5〜20%、ミドル50〜80%、ベース5〜20%です。ミドルを中心に組み立てます。組み合わせ方は
        <Link href="/blog/blend-basics">香りのブレンドの基本</Link>でも紹介しています。
      </p>
      <p>
        ノートの違いは紙の上で確かめられます。紙にオイルを1滴つけ、すぐ、30分後、2時間後とかぎ直してみましょう。使い終えた紙は水で湿らせて捨てます。
      </p>
      <h3>市販の香水との違い</h3>
      <p>
        市販の香水は、種類ごとに香料の濃度が違います。一方、日本アロマ環境協会は、手作りのフレグランスは1%以下で作るとしています。肌につける香りは、市販品より穏やかに香るものと考えてください。
      </p>
      <DataTable
        caption="香料の濃度の比較"
        headers={["種類", "香料の濃度"]}
        rows={[
          ["パルファン", "15〜30%"],
          ["オードパルファン", "8〜15%"],
          ["オードトワレ", "4〜8%"],
          ["オーデコロン", "3〜5%"],
          ["手作りのフレグランス", "1%以下"],
        ]}
      />

      <h2 id="skin">肌につける香りのレシピ</h2>
      <p>
        トップノートには、光毒性のある柑橘や、協会が皮膚刺激の例に挙げるペパーミント、ティーツリー、ユーカリが並びます。そこで肌につける香りはトップを使わず、ミドルとベースの2段で組み立てます。
      </p>
      <MethodCard
        no={1}
        title="肌につける香り（濃度約0.8%）"
        items={["無水エタノール 5mL", "精製水 20mL", "エッセンシャルオイル 合計4滴", "遮光ガラスのスプレーボトル 30mL", "ガラスの容器", "ガラス棒"]}
      >
        <Steps
          steps={[
            { title: "香りを比べる", text: "紙にオイルを1滴ずつつけ、組み合わせて香りを確かめます。" },
            { title: "エタノールに溶かす", text: "ガラスの容器に無水エタノールを入れ、オイルを1滴ずつ加えてよく混ぜます。" },
            { title: "水を加える", text: "精製水を加えて混ぜ、ボトルに移します。作った日とオイルの名前をラベルに書きます。" },
            { title: "手首などに少量つける", text: "使う前によく振ります。顔には使いません。" },
          ]}
        />
      </MethodCard>
      <p>
        濃度は、オイル0.2mL ÷ 全体25.2mL × 100で約0.8%です。香りが弱く感じても、オイルは増やさないでください。次の配合から試してみましょう。
      </p>
      <BlendRecipe
        title="やわらかな花の香り"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
          { name: "ゼラニウム", color: oilColors.wildOrange, count: 1 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <BlendRecipe
        title="花と木の香り"
        drops={[
          { name: "ゼラニウム", color: oilColors.wildOrange, count: 2 },
          { name: "ラベンダー", color: oilColors.lavender, count: 1 },
          { name: "ヒノキ", color: oilColors.peppermint, count: 1 },
        ]}
      />
      <p>いずれも製品ページの表示は「塗・香」のオイルです。お手元のラベルの「化粧品」の表示も確かめてください。</p>

      <h2 id="paper">紙や小物で楽しむ香りのレシピ</h2>
      <p>
        トップから3段すべてを使う本格的な配合は、肌につけずに楽しみます。濃度は1mL ÷ 16mL × 100で約6.3%となり、肌に使う目安を大きく超えるためです。香りを楽しむ「香」の表示があるオイルなら使えます。
      </p>
      <MethodCard
        no={2}
        title="肌につけない香り（濃度約6.3%）"
        items={["無水エタノール 15mL", "エッセンシャルオイル 合計20滴", "遮光ガラスのスプレー容器", "じょうご"]}
      >
        <Steps
          steps={[
            { title: "エタノールを入れる", text: "じょうごを使って、容器に無水エタノールを入れます。" },
            { title: "オイルを入れる", text: "ベース、ミドル、トップの順に入れます。トップは香りが飛びやすいので最後です。" },
            { title: "混ぜて寝かせる", text: "よく混ぜ、ふたをして数日寝かせます。" },
          ]}
        />
        <PointBox>コットンに含ませて小皿に置いたり、手紙の端につけたりして楽しめます。紙や布小物は、目立たない所で試してから使いましょう。</PointBox>
      </MethodCard>
      <BlendRecipe
        title="レモンから花へ"
        drops={[
          { name: "レモン", color: oilColors.lemon, count: 3 },
          { name: "ラベンダー", color: oilColors.lavender, count: 10 },
          { name: "ゼラニウム", color: oilColors.wildOrange, count: 4 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 3 },
        ]}
      />
      <p>オイルを替えるときは、同じノートの中で替えると、配分の割合が変わりません。</p>

      <h2 id="caution">作るときと使うときの注意点</h2>
      <CautionBox
        title="無水エタノールと火気"
        items={[
          "エタノール（100%）の引火点は13℃で、室温でも火がつきやすい液体です。コンロ、ストーブ、たばこのそばで作ったり吹きかけたりしないでください。肌につけた直後に火へ近づくのも避けましょう。",
          "炎は明るい場所では見えにくく、蒸気は低い所にたまります。換気をしながら作り、閉めきった部屋で多量に吹きかけないでください。",
          "直射日光や高温の場所を避けて保管し、容器に中身と「火気厳禁」を書いておきましょう。",
        ]}
      />
      <CautionBox
        title="手作りするときの注意点"
        items={[
          "個人で楽しむためのレシピです。自分で使う分だけ作り、販売や譲渡はしないでください。無償のプレゼントも許可の対象とする自治体の案内があります。",
          "肌につけるものに使うのは「化粧品」の表示がある製品だけにします。濃度約6.3%のレシピは肌につけないでください。原液を肌につけたり、目に入れたりしないでください。",
          "肌につける前に腕の内側などに少量つけて様子を見ましょう。オイルの濃度は低いものから試します。赤みやかゆみが出たらすぐにやめ、皮膚科などに相談してください。",
          "妊娠中、授乳中の人、治療中の人、子どもは、使う前に医師または薬剤師に相談してください。高齢の人や既往歴のある人は、半分以下の量から試します。3歳未満の子どもには使わないでください。",
          "清潔な道具で作り、水を含むものは冷暗所に置いて1〜2週間で使い切ります。作ったものはどちらも早めに使いましょう。",
          "子どもやペットの手の届かない場所に保管してください。香りの感じ方には個人差があるので、人の集まる場所では控えめにします。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "もっと少ない量で作れますか？",
            a: "肌につけるレシピの半量なら、無水エタノール2.5mL、精製水10mL、オイル2滴です。濃度は0.1mL ÷ 12.6mL × 100で、同じ約0.8%です。",
          },
          {
            q: "無水エタノールを使わずに作れますか？",
            a: "協会は、植物油10mLに1〜2滴のロールオンや、ミツロウ4gと植物油20mLに3〜4滴の練り香を紹介しています。どちらも肌につけるので、「化粧品」の表示がある製品を使います。",
          },
        ]}
      />

      <p>
        香水作りは、紙の上で香りを比べるところから始めましょう。お気に入りの組み合わせが見つかったら、濃度を守って小さな1本にしてみてください。エタノールを使わずに持ち歩きたいなら
        <Link href="/blog/roll-on">ロールオンアロマの作り方</Link>もどうぞ。
      </p>
      <NextStepBox />
    </>
  ),
};
