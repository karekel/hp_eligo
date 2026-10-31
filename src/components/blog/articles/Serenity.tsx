import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, NextStepBox, OilProfile, PairingList, PointBox, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ドテラセレニティー */
export const serenity: ArticleContent = {
  summary: [
    "ドテラセレニティーの内容と、甘く温かい香りの特徴",
    "寝室、ティッシュ、足裏でおやすみ前の香りを楽しむ3つの方法",
    "相性のよい香りとブレンド例、使うときの注意点",
  ],
  toc: [
    { id: "scent", title: "ドテラセレニティーはどんな香り？" },
    { id: "enjoy", title: "おやすみ前に楽しむ3つの方法" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "正式名、ブレンドの内容、香りの特徴、塗・香の表示、ディフューズや足裏、エプソムソルトに2〜3滴加える使い方、使用上の注意",
    },
    {
      title: "ベルガモット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/bergamot-15ml/",
      note: "ベルガモット15mLの香・食の表示",
    },
    {
      title: "取扱説明書 V2 ドテラ® ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "オイルは5〜10滴であること、平らで硬い場所に置くこと、噴出口から直接吸引しないこと",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴、トリートメントは1%以下",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "植物油10mLに精油1〜2滴、肌に使うときは1%以下にすること、ノートが揮発しやすさの分類で、イランイランがミドル、サンダルウッドがベースであること",
    },
    {
      title: "精油を1%以下に希釈する理由とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年6月16日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/stepup/2448/",
      note: "原液を枕に垂らす習慣で皮膚炎が起きた例、濃度の目安",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "アロマキャンドルを就寝時に使わないこと、違和感があれば中止して換気すること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、目に入れないこと、火気、保管、お年寄りや既往歴のある人の量",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと",
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
      note: "ラベンダーの抽出部位と香りの特徴",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があること",
    },
  ],
  Body: () => (
    <>
      <p>
        一日の終わりに、照明を落として香りだけを味わう時間をつくる。ドテラセレニティーは、そんなおやすみ前のひとときに合わせたい、甘く温かい香りのブレンドオイルです。
      </p>
      <p>
        「セレニティー」はシリーズの名前で、この記事で紹介するのは15mLのオイル、ドテラセレニティーです。香りの特徴と、おやすみ前の楽しみ方をまとめます。
      </p>

      <OilProfile
        name="ドテラセレニティー"
        en="Serenity"
        image="/assets/products/doterra-serenity-15ml.jpg"
        color={oilColors.lavender}
        rows={[
          {
            label: "主な内容",
            value: "ラベンダー、シダーウッド、コリアンダー、イランイラン、マジョラム、ローマンカモミール、ベチバー、サンダルウッド、トンカビーンズエキス、バニラビーンズエキス",
          },
          { label: "香り", value: "ウォーム、フローラル、ハーバル" },
          { label: "製品ページの表示", value: "塗・香（15mL）" },
        ]}
      />

      <h2 id="scent">ドテラセレニティーはどんな香り？</h2>
      <p>
        製品ページの香りの特徴は、ウォーム、フローラル、ハーバルの3つです。10種類の内容を分けてみると、香りの層が見えてきます。ラベンダー、イランイラン、ローマンカモミールの花、マジョラムとコリアンダーのハーブ、シダーウッドとサンダルウッドの木、ベチバーの根の香りに、トンカビーンズとバニラビーンズのエキスの甘さが重なります。
      </p>
      <p>
        最初に感じるのは花と甘さで、そのあとに木や根の深い香りが残ります。お菓子のような軽い甘さではなく、濃厚で存在感のある香りです。少量でも十分に香るので、1滴から試してください。
      </p>
      <p>
        この順番は、ティッシュに1滴たらすと確かめられます。協会の分類では、イランイランはミドル、サンダルウッドはベースで、ベースは揮発しにくい香りです。たらした直後と、少し時間をおいたあとで比べてみてください。
      </p>

      <h2 id="enjoy">おやすみ前に楽しむ3つの方法</h2>
      <UsageCards
        items={[
          {
            en: "Diffuse",
            title: "寝室に香らせる",
            text: "ベッドに入る少し前に、ディフューザーで香らせます。ベッドから離れた平らで硬い台に置き、滴数は機器の説明書に従います。",
          },
          {
            en: "Tissue",
            title: "ティッシュをそばに置く",
            text: "ティッシュに1滴たらし、サイドテーブルの小皿にのせます。枕には直接たらしません。",
          },
          {
            en: "Foot",
            title: "足裏になじませる",
            text: "キャリアオイル10mLに2滴までを混ぜて薄めます。少量を手に取り、足裏にゆっくりなじませます。",
          },
        ]}
      />
      <PointBox>
        明かりを落とす、香りを出す、本を閉じる。自分なりの順番を決めて、香りの時間を楽しみましょう。
      </PointBox>
      <p>手のひらに取って香りをかぐ方法もありますが、原液が肌につくので、ここではティッシュを使います。</p>
      <p>
        寝室を家族と分け合っている日は、香りを出す前にひと声かけましょう。香りの感じ方には個人差があります。相手が苦手なら、ティッシュを自分のそばに置く方法に替えます。
      </p>
      <p>
        足裏の手順は<Link href="/blog/foot-self-massage">足裏セルフマッサージのやり方</Link>で紹介しています。製品ページには、エプソムソルトなどに2〜3滴加えて入浴する使い方も載っています。お湯に入れる前に<Link href="/blog/bath-oils">お風呂でのオイルの使い方</Link>も確認してください。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>甘さが濃いと感じる日は、軽い香りを足すと印象が変わります。花の香りを強めたい日は、内容にも含まれるラベンダーを重ねます。</p>
      <PairingList
        items={[
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "内容にも含まれる香りで、花の印象が強まります" },
          { name: "ベルガモット", en: "Bergamot", color: oilColors.lemon, note: "柑橘が加わり、甘さが軽くなります" },
          { name: "ヒノキ", en: "Hinoki", color: oilColors.frankincense, note: "木の香りが前に出て、すっきりします" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "樹脂の深みが、静かな余韻を残します" },
        ]}
      />
      <BlendRecipe
        title="甘さを軽くしたい日に"
        drops={[
          { name: "ドテラセレニティー", color: oilColors.lavender, count: 3 },
          { name: "ベルガモット", color: oilColors.lemon, count: 2 },
        ]}
      />
      <BlendRecipe
        title="木の香りを楽しむ日に"
        drops={[
          { name: "ドテラセレニティー", color: oilColors.lavender, count: 3 },
          { name: "ヒノキ", color: oilColors.frankincense, count: 2 },
        ]}
      />
      <p>ブレンドはディフューザーに合計5滴入れる想定です。ベルガモット15mLの製品ページの表示は「香・食」なので、足裏に使う組み合わせには入れません。</p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="おやすみ前に使う前に確認したいこと"
        items={[
          "製品ページの表示は15mLで「塗・香」です。足裏などに使う前に、ラベルの「化粧品」の表示と使用方法を確かめてください。",
          "原液のまま塗らず、キャリアオイルで薄めます。はじめは濃度を低くして、少しだけ試しましょう。",
          "かゆみや赤みなどの異常が出たら中止し、皮膚科専門医などに相談します。目や耳の中、傷やはれもの、湿疹のある部位には使いません。",
          "飲食には使いません。製品ページの表示に「食」はありません。",
          "妊娠中や授乳中の方、持病や服用中の薬がある方は、使う前に医師または薬剤師に相談してください。子どもに使うときも同じです。",
          "3歳未満の子どもには芳香浴以外を行いません。お年寄りや持病のある方は、協会の目安の半分以下の量で試してください。",
          "ディフューザーの噴出口に顔を近づけず、香りで気分が悪くなったら止めて換気します。",
          "アロマキャンドルは就寝時に使わないでください。ボトルは子どもやペットの手の届かない場所に置きます。",
          "この記事は香りを楽しむ話です。眠りのことで悩みがあるときは、医師に相談してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ラベンダーとはどう使い分けますか？",
            a: "香りの好みで選びます。ラベンダーは花から採るシングルオイルで、製品ページの香りの特徴はパウダリー、フローラル、ライトです。ドテラセレニティーは10種類を重ねたブレンドで、温かみと甘さがあります。軽い花の香りならラベンダー、甘く濃い香りならドテラセレニティーです。",
          },
          {
            q: "枕に1滴たらしてもいいですか？",
            a: "たらさないでください。協会の記事には、ラベンダーの原液を枕にたらす習慣で皮膚炎が起きた例が載っています。ティッシュを小皿にのせて、枕元の台に置きましょう。",
          },
        ]}
      />

      <p>
        まずは今夜、ティッシュに1滴たらして、明かりを落とした部屋で香りを確かめてみてください。好みに合うと感じたら、ディフューザーや足裏へと楽しみ方を広げていきましょう。
      </p>
      <NextStepBox />
    </>
  ),
};
