import Link from "next/link";
import { BlendRecipe, CautionBox, CheckPoints, DataTable, Faq, NextStepBox, OilProfile, PairingList, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ベルガモット */
export const bergamot: ArticleContent = {
  summary: [
    "ベルガモットの基本情報と、柑橘の中で少し変わった香りの特徴",
    "部屋、デスク、紅茶の時間に香りを楽しむ3つの方法",
    "光毒性や製品ごとの表示の違いなど、柑橘オイルで気をつけたいこと",
  ],
  toc: [
    { id: "scent", title: "ベルガモットはどんな香り？" },
    { id: "enjoy", title: "暮らしの中で楽しむ3つの方法" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "柑橘オイルで気をつけたいこと" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ベルガモット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/bergamot-15ml/",
      note: "学名、抽出部位と抽出方法、香りの特徴、主成分、香・食の表示、ディフューズや紅茶、サラダに2滴、食品や飲み物に1〜3滴の案内、使用上の注意",
    },
    {
      title: "ベルガモット | Source To You",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/bergamot",
      note: "大半がイタリア南部のレッジョ・カラブリアで栽培されること、果実の味、オイルを取り出す工程",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "光毒性の説明とグレープフルーツ、ベルガモット、レモンの例、原液がついたときの対応、火気、保管",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "光毒性のある精油を塗布した日はできるだけ紫外線を避けること",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "希釈しても飲用や食品との摂取、うがいをすすめていないこと、開封後1年以内の目安、柑橘系の成分変化、3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "精油が一般に雑品に分類され、飲食は認められていないという説明",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "製品の区分と使用方法、注意表示の確認、医師または薬剤師への相談",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "ラベンダーの主成分",
    },
    {
      title: "オレンジ（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "オレンジ15mLの香・食の表示、香りの特徴",
    },
    {
      title: "オレンジ（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-5ml/",
      note: "オレンジ5mLの塗・香の表示",
    },
    {
      title: "ドテラシトラスブリス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-citrus-bliss-15ml/",
      note: "塗・香の表示、内容にベルガモットが含まれること、柑橘系の塗布後12時間ほどの日光の注意",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "香りの強いオイルを爪楊枝の先でごく少量使う方法",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らして香りを楽しむ方法",
    },
    {
      title: "取扱説明書 V2 ドテラ® ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "オイルは5〜10滴であること",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "香りに違和感があるときは中止して換気すること",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "レモンの香りの特徴",
    },
    {
      title: "How to Use an Entire Bottle of Lavender Oil",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/healthy-living-how-to-use-an-entire-bottle-of-lavender",
      note: "15mLのボトルに約250滴入っているという記載",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "ノートが揮発しやすさの分類で、ベルガモットがトップ、フランキンセンスがベースであること",
    },
  ],
  Body: () => (
    <>
      <p>
        ベルガモットは、紅茶に加えるとアールグレイ風の香りになる柑橘のオイルです。レモンやオレンジとは少し違う、落ち着いた表情を持っています。
      </p>
      <p>
        一方で、柑橘ならではの注意点もあります。この記事では、香りの特徴と楽しみ方、柑橘オイルで気をつけたいことをまとめます。
      </p>

      <OilProfile
        name="ベルガモット"
        en="Bergamot"
        image="/assets/products/bergamot-15ml.jpg"
        color={oilColors.lemon}
        rows={[
          { label: "学名", value: "Citrus bergamia" },
          { label: "抽出部位", value: "果皮（低温圧搾法）" },
          { label: "香り", value: "シトラス、スパイシー、わずかにフローラル" },
          { label: "製品ページの表示", value: "香・食（15mL）" },
        ]}
      />

      <h2 id="scent">ベルガモットはどんな香り？</h2>
      <p>
        製品ページの香りの特徴は、シトラス、スパイシー、わずかにフローラルの3つです。柑橘のさわやかさの中に、ほんのりと青みがあります。甘さは控えめで、皮のほろ苦さを感じる大人びた香りです。
      </p>
      <p>
        製品ページの主成分には、リモネンのほかに酢酸リナリルとリナロールが並びます。この2つはラベンダーの主成分にも挙げられています。柑橘なのに花の気配がすると感じたら、この顔ぶれを思い出してみてください。
      </p>
      <p>
        大半はイタリア南部のレッジョ・カラブリアで栽培されています。果実は苦みが強く、イタリアでは通常そのまま食べません。果皮に傷をつける器具でオイルを水中に出し、遠心分離で水と分けて取り出します。
      </p>
      <p>製品ページの言葉を並べると、スパイシーとフローラルが入るのはベルガモットだけです。</p>
      <DataTable
        caption="柑橘3種の香りの特徴（製品ページの表記）"
        headers={["オイル", "香りの特徴"]}
        rows={[
          ["ベルガモット", "シトラス、スパイシー、わずかにフローラル"],
          ["レモン", "クリーン、フレッシュ、シトラス、ブライト"],
          ["オレンジ", "スイート、フレッシュ、シトラス"],
        ]}
      />

      <h2 id="enjoy">暮らしの中で楽しむ3つの方法</h2>
      <UsageCards
        items={[
          {
            en: "Diffuse",
            title: "夕方の切り替えに",
            text: "仕事や家事がひと区切りついた時間に、ディフューザーで香らせます。滴数は機器の説明書に従います。",
          },
          {
            en: "Tissue",
            title: "デスクの端に置く",
            text: "ティッシュに1滴たらして小皿にのせ、手元から少し離して置きます。香りが弱ければ1滴足します。",
          },
          {
            en: "Tea",
            title: "紅茶の香りづけに",
            text: "「食品添加物」の表示がある製品に限った使い方です。ポットの紅茶に1滴から試します。",
          },
        ]}
      />
      <p>
        ベルガモット15mLの製品ページの表示は「香・食」で、紅茶に加える使い方、サラダに2滴、食品や飲み物に1〜3滴という目安が載っています。香りが強いと感じたら、爪楊枝の先につけたごく少量から試します。必ずお手元のラベルで「食品添加物」の表示を確認し、記載の量と方法で使ってください。
      </p>
      <p>
        日本アロマ環境協会は、薄めたものでも精油を飲むことや食品と一緒にとること、うがいをすすめていません。また、日本の法律では精油は一般に雑品に分類され、飲食は認められていないと解説しています。ここで紹介した飲食の話は、ドテラの「食品添加物」の表示がある製品に限ったものです。迷うときは香りを楽しむ使い方にとどめてください。考え方は<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>で解説しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>柑橘の明るさがありながら甘さが控えめなので、花や樹脂、木の香りと合わせやすいオイルです。</p>
      <PairingList
        items={[
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "主成分が重なり、なじみのよい組み合わせです" },
          { name: "ゼラニウム", en: "Geranium", color: oilColors.lavender, note: "花の甘さが加わり、華やかになります" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "樹脂の深みが、ほろ苦さを引き立てます" },
          { name: "ヒノキ", en: "Hinoki", color: oilColors.frankincense, note: "柑橘の軽さに、木の香りが重なります" },
        ]}
      />
      <BlendRecipe
        title="夕方のひと区切りに"
        drops={[
          { name: "ベルガモット", color: oilColors.lemon, count: 3 },
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
        ]}
      />
      <BlendRecipe
        title="本を読む時間に"
        drops={[
          { name: "ベルガモット", color: oilColors.lemon, count: 3 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 2 },
        ]}
      />
      <p>どちらもディフューザーで5滴を使う例です。香りを楽しむ範囲の組み合わせで、肌には使いません。</p>
      <p>
        ベルガモットは協会の分類でトップにあたり、揮発しやすい香りです。ベースのフランキンセンスを合わせると、柑橘が薄れたあとも樹脂の香りが残ります。
      </p>

      <h2 id="caution">柑橘オイルで気をつけたいこと</h2>
      <CheckPoints
        items={[
          {
            title: "光毒性を知っておく",
            text: "協会は、精油の成分の一部が日光などの強い紫外線に反応し、皮膚に炎症などを起こす性質と説明しています。例はグレープフルーツ、ベルガモット、レモンです。",
          },
          {
            title: "ベルガモットは肌に塗らない",
            text: "15mLの製品ページに、肌に塗る使い方の案内はありません。香りと、表示に沿った飲食の範囲で使います。",
          },
          {
            title: "製品ごとに表示を見る",
            text: "同じ柑橘でも表示は違います。オレンジは15mLが「香・食」、5mLが「塗・香」です。ドテラシトラスブリスは「塗・香」で、塗布後12時間ほどは直射日光を避けるよう案内されています。",
          },
          {
            title: "開封後は早めに使う",
            text: "協会は、柑橘系はほかより成分が変わりやすいとし、開封後1年以内を使い切りの目安にしています。",
          },
        ]}
      />
      <CautionBox
        title="あわせて守りたいこと"
        items={[
          "原液が肌についたら、清潔な大量の流水で洗い流します。その日はできるだけ紫外線を避け、異常があれば医療機関を受診してください。",
          "原液をそのまま飲んだり、目に入れたりしないでください。",
          "飲食に使う前に、妊娠中、授乳中の方、薬を服用中、通院中の方、子どもは、医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。",
          "引火性があるので火のそばを避け、子どもやペットが触れない場所に置きましょう。",
          "香りで気分が悪くなったら使うのをやめて、部屋の空気を入れ替えてください。",
        ]}
      />
      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "1本はどのくらいのペースで使えばいいですか？",
            a: "15mLは約250滴と、ドテラのカナダ向け公式ブログにあります。ブレンド例の3滴ずつなら約83回分で、週に2回使うと約10か月です。協会の開封後1年以内の目安に収まります。",
          },
          {
            q: "肌でベルガモットの香りを楽しみたいときは？",
            a: "単品の15mLは肌に塗りません。ティッシュやディフューザーなど、肌につけない方法で香りを楽しみましょう。柑橘系には日光に関わる注意もあるので、この記事の注意点も確認してください。",
          },
        ]}
      />

      <p>
        保管のしかたは<Link href="/blog/oil-storage">エッセンシャルオイルの保管方法と、使用期限の目安</Link>で紹介しています。まずはティッシュに1滴で、皮のほろ苦さと花の気配を確かめてみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
