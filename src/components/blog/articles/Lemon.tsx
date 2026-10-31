import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, MethodCard, NextStepBox, OilProfile, PairingList, PointBox, Steps, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: レモン */
export const lemon: ArticleContent = {
  summary: [
    "レモンの基本情報と、15mLのボトルにこめられた皮の量",
    "拭き掃除、木の棚の手入れ、重曹の香りびんなど、キッチンで試せること",
    "料理の香りづけで確認したいことと、柑橘ならではの注意点",
  ],
  toc: [
    { id: "profile", title: "レモンはどんなオイル？" },
    { id: "usage", title: "キッチンまわりでの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "学名、抽出部位、香りの表示、「香・食」の表示、使用上の注意",
    },
    {
      title: "レモン",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/p/lemon-oil",
      note: "スプレーでの表面の掃除、オリーブオイルに加える木製家具の手入れ、食品や飲み物に1〜3滴という目安",
    },
    {
      title: "レモン インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/lemon-15ml.pdf",
      note: "15mLを作るのに約3.2kgの皮が必要であること",
    },
    {
      title: "レモン",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/lemon",
      note: "主な産地がイタリアのシチリア島で、ブラジル南部からは少量であること、見た目の理由で市場に出せないレモンの活用",
    },
    {
      title: "エッセンシャルオイルで作る『リネンスプレー』レシピ",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/tools/product-center/Display/odor%20control-recipe.pdf",
      note: "重曹にレモンを加えてシンク下などに置く使い方、子どもが口に入れないための注意",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "香料としての位置づけ、強い香りは爪楊枝の先でごく少量を使う方法",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、医師または薬剤師への相談",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "レモンをトップノートに分類していること",
    },
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "ユーカリプタス、レモン、ペパーミントを合わせる組み合わせ",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "希釈しても飲用や食品との摂取をすすめていないこと、柑橘系は成分変化が起こりやすいこと、開封後1年以内の目安",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "一般の精油は雑品で飲食は認められていないという説明、キッチンの火への注意",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "レモンを光毒性の例に挙げていること、原液の扱い、保管",
    },
    {
      title: "住宅用塩素系洗浄剤の使い方－まぜるな危険！浴室などで事故が発生しています－",
      publisher: "独立行政法人 国民生活センター（2026年3月18日）",
      url: "https://www.kokusen.go.jp/news/data/n-20260318_1.html",
      note: "塩素系洗浄剤を酸やエタノールと混ぜないこと",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "精油が家具やカーテンのシミや変色の原因になること",
    },
  ],
  Body: () => (
    <>
      <p>
        皮をむいた瞬間のように、明るくてさっぱりしたレモンの香り。掃除の仕上げから料理の香りづけまで、台所で試せることがいくつもあるオイルです。
      </p>
      <p>
        この記事では、レモンの香りの特徴と、キッチンまわりでの楽しみ方を紹介します。15mLの製品ページには肌に塗る案内がないので、肌の話はしません。
      </p>

      <h2 id="profile">レモンはどんなオイル？</h2>
      <OilProfile
        name="レモン"
        en="Lemon"
        image="/assets/products/lemon-15ml.jpg"
        color={oilColors.lemon}
        rows={[
          { label: "学名", value: "Citrus limon" },
          { label: "抽出部位", value: "果皮（低温圧搾法）" },
          { label: "香り", value: "クリーン、フレッシュ、シトラス、ブライト" },
          { label: "製品ページの表示", value: "15mLは「香・食」" },
        ]}
      />
      <p>
        香りの表示のうち、クリーンはさっぱりした印象、ブライトは明るく元気な印象のことです。果汁の酸っぱさというより、皮を指でこすったときの香りを思い浮かべてください。
      </p>
      <p>
        15mLのオイルを作るのに、約3.2kgの皮が使われます。主な産地はイタリアのシチリア島で、ブラジル南部からも少量が届きます。見た目の理由で市場に出せないレモンを、果汁とオイルに分けて生かしているのも特徴です。
      </p>

      <h2 id="usage">キッチンまわりでの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Counter",
            title: "カウンターの拭き掃除",
            text: "水を入れたスプレーボトルに数滴加え、よく振ってテーブルやカウンターへ。布で拭き取ると、さっぱりした香りが残ります。",
          },
          {
            en: "Wood",
            title: "木の棚の手入れ",
            text: "オリーブオイルに数滴混ぜて布に含ませ、木の棚やテーブルを拭きます。先に目立たない場所で試しましょう。",
          },
          {
            en: "Flavor",
            title: "料理の香りづけ",
            text: "「食品添加物」の表示がある製品に限り、ラベルどおりの量で使います。くわしくは下で説明します。",
          },
        ]}
      />

      <MethodCard no={1} title="重曹の香りびんを作る" items={["小さめのガラスびん", "重曹1/4カップ", "レモン5〜6滴", "布と輪ゴム"]}>
        <Steps
          steps={[
            { title: "びんに重曹を入れる", text: "乾いた清潔なびんに重曹を入れます。" },
            { title: "レモンを5〜6滴加える", text: "重曹に垂らし、軽く振ってなじませます。" },
            { title: "布でふたをする", text: "びんの口に布をかぶせ、輪ゴムで留めます。" },
            { title: "平らな場所に置く", text: "シンク下などに置き、ときどき振ります。香りが弱くなったら2〜3滴足します。" },
          ]}
        />
        <PointBox>重曹は食品と見間違えることがあります。中身をびんに書き、子どもが口に入れないように置き場所を決めましょう。</PointBox>
      </MethodCard>

      <h3>料理に使う前に確認したいこと</h3>
      <p>
        日本アロマ環境協会は、薄めたものでも精油の飲用や食品との摂取をすすめていません。一般の精油は雑品で、飲食は認められていないとも説明しています。ここから先は、ドテラの「食品添加物」の表示がある製品に限った話です。
      </p>
      <p>
        レモンの製品情報では、食品や飲み物に1〜3滴が目安とされています。香りが強いので、まずは爪楊枝の先につけて混ぜる程度から。ドレッシングや飲み物に少しずつ足すと、入れすぎを防げます。ラベルの表示どおりの量と方法を守りましょう。区分の考え方は<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>、料理の例は<Link href="/blog/aromatic-table">オイルで香りづけする料理</Link>で紹介しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>レモンは香りの立ち上がりを担うトップノートのオイルです。ミント系やハーブ系と合わせると、キッチンに合うすっきりした香りになります。</p>
      <PairingList
        items={[
          { name: "ペパーミント", en: "Peppermint", color: oilColors.peppermint, note: "清涼感が加わり、朝の台所に合う香りに" },
          { name: "ユーカリプタス", en: "Eucalyptus", color: oilColors.peppermint, note: "葉の青さが加わり、掃除のあとに合う香りに" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花の甘さで、酸味の印象が丸くなる" },
          { name: "オレンジ", en: "Wild Orange", color: oilColors.wildOrange, note: "甘さが加わり、やわらかな柑橘の香りに" },
        ]}
      />
      <BlendRecipe
        title="朝のキッチンに"
        drops={[
          { name: "レモン", color: oilColors.lemon, count: 3 },
          { name: "ペパーミント", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <BlendRecipe
        title="掃除のあとに"
        drops={[
          { name: "レモン", color: oilColors.lemon, count: 2 },
          { name: "ユーカリプタス", color: oilColors.peppermint, count: 2 },
          { name: "ペパーミント", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>どちらもディフューザーの例です。ラルツディフューザーの目安は5〜10滴です。ほかの機種は説明書に合わせ、コンロから離れた場所に置きましょう。</p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "協会はレモンを光毒性の例に挙げています。紫外線に反応して肌に炎症などを起こす性質のことです。肌につけないようにし、ついたら洗い流しましょう。",
          "精油には引火性があります。コンロの火のそばでボトルを開けたり、スプレーを使ったりしないでください。",
          "オイルが家具や布につくと、色や跡が残ることがあります。目立たない場所で試してから使いましょう。",
          "飲食に使うのは「食品添加物」の表示がある製品だけです。原液をそのまま飲まないでください。",
          "妊娠中、授乳中の方、薬を飲んでいる方、通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "酢やクエン酸を使う掃除スプレーやエタノール入りのスプレーは、塩素系の洗浄剤と混ぜないでください。",
          "柑橘のオイルは成分が変わりやすいので、開封後は早めに使います。協会の目安は1年以内です。子どもやペットの手の届かない場所に保管しましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "スプレーの水とオイルが分かれてしまいます。",
            a: "オイルは水と混ざらないので、使う前によく振ってください。分離したら、そのつど振り直します。",
          },
          {
            q: "レモンを入れると汚れが落ちやすくなりますか？",
            a: "この記事では、掃除の仕上げに香りを添える使い方として紹介しています。汚れは洗剤と拭き取りで落としましょう。",
          },
        ]}
      />

      <p>
        レモンは、いつもの家事に香りを足す入り口になるオイルです。まずは今日の片づけのあと、カウンターを拭くスプレーに数滴から試してみてください。酢を使う本格的なスプレーは、<Link href="/blog/cleaning-spray">手作り掃除スプレーの作り方</Link>で紹介しています。
      </p>
      <NextStepBox />
    </>
  ),
};
