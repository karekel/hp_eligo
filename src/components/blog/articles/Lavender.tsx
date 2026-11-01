import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, MethodCard, NextStepBox, OilProfile, PairingList, PointBox, Steps, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ラベンダー */
export const lavender: ArticleContent = {
  summary: [
    "ラベンダーの基本情報と、おしろいのような甘さをもつ香りの特徴",
    "寝室、リネン、バスタイムで楽しむ方法と分量",
    "相性のよい香りのブレンド例と、使うときの注意点",
  ],
  toc: [
    { id: "profile", title: "ラベンダーはどんなオイル？" },
    { id: "usage", title: "暮らしでの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "学名、抽出部位、香りの表示、「塗・香」の表示、入浴に使う案内、使用上の注意",
    },
    {
      title: "ラベンダー",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/lavender",
      note: "産地、ブルガリアでの7月の収穫、収穫から1日以内の蒸留",
    },
    {
      title: "エッセンシャルオイルで作る『リネンスプレー』レシピ",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/tools/product-center/Display/odor%20control-recipe.pdf",
      note: "リネンスプレーの材料、分量、混ぜる順番、使う場所",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "ラベンダーをミドルノートに分類していること",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、少量から始めること、異常が出たときの対応、医師または薬剤師への相談",
    },
    {
      title: "精油を1%以下に希釈する理由とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年6月16日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/stepup/2448/",
      note: "枕に精油を垂らす習慣で首の赤みや顔のはれが出た例、ボディとフェイスの濃度の目安",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、保管、お年寄りや既往歴のある人の使用量",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らす方法、無水エタノールに混ぜて湯に入れる沐浴の方法と滴数、肌に使うときの濃度の目安",
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
      note: "手作りスプレーを1〜2週間で使い切る目安、容器の材質",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会 News Letter（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "植物油20mLに精油4滴以内、顔に使う場合は2滴までとすること",
    },
  ],
  Body: () => (
    <>
      <p>
        ラベンダーは、やわらかな花の香りのオイルです。穏やかな印象で、1日の終わりや、ひと息つきたい時間によく合います。
      </p>
      <p>この記事では、ドテラのラベンダーを例に、香りの特徴と、寝室、リネン、バスタイムで楽しむ方法を、分量つきで紹介します。</p>

      <h2 id="profile">ラベンダーはどんなオイル？</h2>
      <OilProfile
        name="ラベンダー"
        en="Lavender"
        image="/assets/products/lavender-15ml.jpg"
        color={oilColors.lavender}
        rows={[
          { label: "学名", value: "Lavandula angustifolia" },
          { label: "抽出部位", value: "花（水蒸気蒸留法）" },
          { label: "香り", value: "パウダリー、フローラル、ライト" },
          { label: "製品ページの表示", value: "15mLは「塗・香」" },
        ]}
      />
      <p>
        香りの表示にあるパウダリーは、おしろいに似た甘さのことです。そこに花の香りが重なり、軽やかに消えていきます。
      </p>
      <p>
        産地はブルガリア、フランス、アルバニア、中国です。ブルガリアでは花を7月に収穫し、1日以内に蒸留します。「塗・香」は製品ページの表示なので、使い方はお手元のラベルでも確認しましょう。
      </p>

      <h2 id="usage">暮らしでの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Bedtime",
            title: "おやすみ前のひととき",
            text: "ティッシュに1〜2滴垂らし、枕元の少し離れた場所に置きます。香りが強いと感じたら、次は1滴に減らします。",
          },
          {
            en: "Linen",
            title: "リネンの香りづけ",
            text: "カーテンやベッドカバーに、手作りのスプレーを軽く吹きかけます。作り方は下で紹介します。",
          },
          {
            en: "Bath",
            title: "バスタイム",
            text: "無水エタノール5mLにオイル1〜5滴を混ぜてから湯に入れ、よくかき混ぜます。",
          },
        ]}
      />
      <PointBox>
        枕や寝具に原液を直接垂らすのは控えましょう。枕に数滴垂らす習慣を続けて、首の赤みや顔のはれが出た例を、協会が紹介しています。
      </PointBox>

      <MethodCard
        no={1}
        title="リネンスプレーを作る"
        items={["50mLのスプレーボトル（ガラスかアルコール対応）", "無水エタノール10mL", "精製水40mL", "ラベンダー5滴", "ローズマリー5滴", "レモン5滴"]}
      >
        <Steps
          steps={[
            { title: "無水エタノールにオイルを混ぜる", text: "ボトルに無水エタノールを入れ、3種類のオイルを5滴ずつ加えてよく混ぜます。" },
            { title: "精製水を加える", text: "精製水を注いでふたを閉め、よく振ります。" },
            { title: "布の端で試す", text: "カーテンやベッドカバーに使う前に、目立たない場所で色移りがないか確かめます。肌に直接触れる衣類やシーツ、枕カバーには使いません。" },
          ]}
        />
        <PointBox>水を含むスプレーは、1〜2週間で使い切りましょう。作った日と中身をボトルに書いておくと、迷いません。</PointBox>
      </MethodCard>
      <p>
        入浴の手順は<Link href="/blog/bath-oils">お風呂でのオイルの使い方</Link>でくわしく紹介しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>
        ラベンダーは、香りの中間を作るミドルノートのオイルです。柑橘系や樹木系を合わせると、香りに輪郭が生まれます。最初は2種類を1滴ずつ試して、好みのバランスを探しましょう。
      </p>
      <PairingList
        items={[
          { name: "オレンジ", en: "Wild Orange", color: oilColors.wildOrange, note: "甘さが重なり、丸みのある香りに" },
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "皮の明るさが、花の甘さを引き締める" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "温かみが加わり、落ち着いた印象に" },
          { name: "ローズマリー", en: "Rosemary", color: oilColors.peppermint, note: "ハーブの青さで、すっきりした香りに" },
        ]}
      />
      <BlendRecipe
        title="くつろぎの夜に"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 3 },
          { name: "オレンジ", color: oilColors.wildOrange, count: 2 },
        ]}
      />
      <BlendRecipe
        title="木の温かみを足す"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 3 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 2 },
        ]}
      />
      <p>
        どちらもディフューザーに使う合計5滴の例です。ドテラのラルツディフューザーの目安は5〜10滴なので、ほかの機種は説明書に合わせてください。組み立て方は<Link href="/blog/blend-basics">香りのブレンドの基本</Link>で解説しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "原液を直接肌につけないようにしましょう。肌に使うときはラベルの「化粧品」の表示を確認し、植物油で薄めます。協会の目安はボディ1%以下、顔0.5%以下です。",
          "初めて肌に使うときは、低い濃度で少量から試します。赤み、はれ、かゆみなどが出たら使うのをやめ、皮膚科に相談してください。",
          "目に入らないようにしましょう。耳の中や、傷、しっしんのある部分には使いません。",
          "妊娠中、授乳中の方、持病がある方、薬を飲んでいる方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。お年寄りは、基準の半分以下の量で試します。",
          "布や家具に色移りすることがあります。目立たない場所で試してから使いましょう。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ラベンダーを飲み物や料理に使えますか？",
            a: "製品ページの表示は「塗・香」で、「食」の表示はありません。口に入れないでください。",
          },
          {
            q: "肌に使うときは何滴までですか？",
            a: "協会の目安では、植物油20mLに合計4滴以内がボディ用、合計2滴までが顔用です。",
          },
          {
            q: "ティッシュに垂らしても香りを感じにくいときは？",
            a: "香りの感じ方は人によって違います。1滴ずつ足して、ちょうどよい量を探してください。",
          },
        ]}
      />

      <p>
        ラベンダーは、1日の終わりに香りの時間を作りたいときの入り口になるオイルです。まずは今夜、ティッシュに1滴から試してみてください。足元にも香りを使ってみたくなったら、<Link href="/blog/foot-self-massage">足裏セルフマッサージのやり方</Link>もあわせてどうぞ。
      </p>
      <NextStepBox />
    </>
  ),
};
