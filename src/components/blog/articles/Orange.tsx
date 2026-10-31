import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, MethodCard, NextStepBox, OilProfile, PairingList, PointBox, Steps, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: オレンジ */
export const orange: ArticleContent = {
  summary: [
    "オレンジの基本情報と、みかんを思わせる甘く明るい香りの特徴",
    "リビング、車の中、飲み物で楽しむ方法",
    "15mLと5mLの表示の違いと、柑橘のオイルで気をつけたいこと",
  ],
  toc: [
    { id: "profile", title: "オレンジはどんなオイル？" },
    { id: "usage", title: "甘く明るい香りの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "オレンジ（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "学名、抽出部位、香りの表示、「香・食」の表示、拭き掃除、飲料水に1滴、ディフューズの使い方、使用上の注意",
    },
    {
      title: "オレンジ（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-5ml/",
      note: "5mLの表示が「塗・香」であること、柑橘系は塗布後12時間ほど直射日光を避ける注意",
    },
    {
      title: "オレンジ",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/wild-orange",
      note: "産地がブラジルとギリシャであること、皮からコールドプレスで得ること、小規模農家の支援",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "コットンに垂らす方法、車の送風口での香りの楽しみ方、強い香りは爪楊枝の先でごく少量を使う方法",
    },
    {
      title: "Part 5: Packaging and Storage",
      publisher: "doTERRA（米国公式）",
      url: "https://www.doterra.com/US/en/essential-oil-production-packaging-and-storage-overview",
      note: "高温を避け、夏の車内や窓辺に置かないこと",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "オレンジとフランキンセンスを合わせるブレンドの組み合わせ",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、医師または薬剤師への相談",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "希釈しても飲用や食品との摂取をすすめていないこと、柑橘系は成分変化が起こりやすいこと、開封後1年以内の目安、3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "一般の精油は雑品で飲食は認められていないという説明",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、保管",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュなどに1〜2滴垂らす目安",
    },
  ],
  Body: () => (
    <>
      <p>
        みかんの皮をむいたときのような、甘くて明るい香り。オレンジは、部屋に広がると、やわらかな雰囲気が生まれるオイルです。
      </p>
      <p>
        この記事では、オレンジの香りの特徴と、リビング、車の中、飲み物での楽しみ方を紹介します。15mLと5mLで製品ページの表示が違うので、その点も確認しましょう。
      </p>

      <h2 id="profile">オレンジはどんなオイル？</h2>
      <OilProfile
        name="オレンジ"
        en="Wild Orange"
        image="/assets/products/orange-15ml.jpg"
        color={oilColors.wildOrange}
        rows={[
          { label: "学名", value: "Citrus sinensis" },
          { label: "抽出部位", value: "果皮（低温圧搾法）" },
          { label: "香り", value: "スイート、フレッシュ、シトラス" },
          { label: "製品ページの表示", value: "15mLは「香・食」、5mLは「塗・香」" },
        ]}
      />
      <p>
        日本の製品名は「オレンジ」で、米国ではWild Orangeと呼ばれています。香りの表示の中心にあるのはスイート、つまり甘さです。酸味より甘さが先に立つので、レモンよりも丸い印象に感じます。
      </p>
      <p>
        産地はブラジルとギリシャで、果皮からコールドプレスでオイルを得ます。
      </p>

      <h2 id="usage">甘く明るい香りの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Living",
            title: "リビングの香りに",
            text: "家族が集まる時間に、ディフューザーの水に垂らします。甘さが強いと感じたら、ほかの香りを1滴混ぜて軽くします。",
          },
          {
            en: "Chores",
            title: "拭き掃除のスプレーに",
            text: "水を入れたボトルに少量加え、よく振ってテーブルなどに吹き、布で拭きます。製品ページでも案内されている使い方です。",
          },
          {
            en: "Drink",
            title: "飲み物の香りづけ",
            text: "飲料水に1滴。「食品添加物」の表示がある製品に限り、ラベルどおりに使います。",
          },
        ]}
      />

      <MethodCard no={1} title="コットンで車に香りを置く" items={["コットン", "小皿か小さな容器", "オレンジ1〜2滴"]}>
        <Steps
          steps={[
            { title: "コットンにオイルを垂らす", text: "まずは1滴から。香りが足りなければ1滴足します。" },
            { title: "小皿にのせる", text: "内装にオイルがつくと跡が残ることがあります。必ず容器に入れましょう。" },
            { title: "送風口の近くに置く", text: "運転のじゃまにならず、動かない場所を選びます。降りるときは持ち帰ります。" },
          ]}
        />
        <PointBox>オイルのボトルは車の中に置きっぱなしにしないでください。夏の車内のような高温は避けて保管します。</PointBox>
      </MethodCard>

      <h3>飲み物に使うときは</h3>
      <p>
        飲み物に使う話には前提があります。協会は、精油を薄めて飲むことも、食品と一緒にとることもすすめていません。市販の精油は一般に雑品で、飲食は認められていないと説明しています。オレンジを飲み物に使えるのは、ドテラの「食品添加物」の表示がある製品に限ります。
      </p>
      <p>
        オレンジの15mLの製品ページには、飲料水に1滴加える使い方があります。香りが強いと感じたら、爪楊枝の先につけて混ぜる程度にしましょう。ラベルの表示どおりの量と方法を守ります。5mLの製品ページに摂取の案内はありません。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>オレンジの甘さは、スパイスや樹脂のような温かい香りとよくなじみます。季節に合わせて組み合わせを変えると、同じオイルでも印象が変わります。</p>
      <PairingList
        items={[
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "樹脂の温かみで、奥行きのある香りに" },
          { name: "ペパーミント", en: "Peppermint", color: oilColors.peppermint, note: "清涼感が加わり、甘さがすっきりする" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花の香りが重なり、やさしい印象に" },
          { name: "シナモンバーク、クローブ", en: "Spice", color: oilColors.frankincense, note: "スパイスの温かみで、冬に合う香りに" },
        ]}
      />
      <BlendRecipe
        title="明るい午後に"
        drops={[
          { name: "オレンジ", color: oilColors.wildOrange, count: 1 },
          { name: "ペパーミント", color: oilColors.peppermint, count: 1 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <BlendRecipe
        title="冬のリビングに"
        drops={[
          { name: "オレンジ", color: oilColors.wildOrange, count: 3 },
          { name: "シナモンバーク", color: oilColors.frankincense, count: 1 },
          { name: "クローブ", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <p>
        最初の例は3滴で試すブレンド、次の例はディフューザーの合計5滴です。ラルツディフューザーの目安は5〜10滴です。スパイスと柑橘で香りを楽しむ工作は、<Link href="/blog/potpourri">ポプリの作り方</Link>でも紹介しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "15mLの製品ページに、肌に塗る案内はありません。肌につけないようにしましょう。",
          "5mLの製品ページは「塗・香」です。肌に使う場合は「化粧品」の表示を確認し、原液のままつけず、塗布後12時間ほど直射日光を避けます。",
          "飲食に使うのは「食品添加物」の表示がある製品だけです。原液をそのまま飲まないでください。",
          "妊娠中、授乳中の方、薬を飲んでいる方、通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。",
          "目に入らないようにしましょう。布や車の内装に色移りすることがあります。",
          "柑橘のオイルは成分が変わりやすいので、開封後は早めに使います。協会の目安は1年以内です。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ワイルドオレンジとは別の製品ですか？",
            a: "ワイルドオレンジは米国などでの呼び方で、日本の製品名は「オレンジ」です。探すときは日本の製品名で確認してください。",
          },
          {
            q: "15mLと5mLのどちらを見ればいいですか？",
            a: "お手元のボトルの容量とラベルを確認してください。同じ名前でも、製品ページの表示は違います。",
          },
          {
            q: "お風呂に入れてもいいですか？",
            a: "15mLの製品ページに入浴の案内はありません。お湯を通して肌に触れる使い方になるので、湯船には入れないようにしましょう。",
          },
        ]}
      />

      <p>
        オレンジは、香りのある暮らしを始めるときに手に取りやすいオイルです。まずは今日のリビングで、甘く明るい香りを確かめてみてください。ほかの柑橘との違いが気になったら、<Link href="/blog/lemon">レモンの香りの特徴</Link>も読んでみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
