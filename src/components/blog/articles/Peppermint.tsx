import Link from "next/link";
import { BlendRecipe, CautionBox, DataTable, Faq, MemberVoice, NextStepBox, OilProfile, PairingList, PointBox, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ペパーミント */
export const peppermint: ArticleContent = {
  summary: [
    "ペパーミントの基本情報と、清涼感のある香りの特徴",
    "デスク、外出先、ディフューザーで清涼感を楽しむ量の目安",
    "15mLと5mLで表示が違うことと、肌に使うときの注意",
  ],
  toc: [
    { id: "profile", title: "ドテラのペパーミントはどんなオイル？" },
    { id: "usage", title: "ドテラのペパーミントの使い方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "学名、抽出部位、香りの表示とその説明、「香・食」の表示、オレンジとフランキンセンスを合わせるディフューズ、スムージーに1滴加える使い方、使用上の注意",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLの表示が「塗・香」であること、摂取の案内がないこと",
    },
    {
      title: "ペパーミント",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/peppermint",
      note: "産地、ウォーターミントとスペアミントの交配種であること、約450gの葉から15mLができること",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "強い香りは爪楊枝の先でごく少量を使う方法",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "ペパーミントをトップノートに分類していること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、少量から始めること、医師または薬剤師への相談",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "希釈しても飲用や食品との摂取をすすめていないこと、3歳未満の子どもには芳香浴以外を行わないこと、動物は人間と体の仕組みが異なること",
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
      note: "ペパーミントを皮膚刺激の例に挙げていること、原液の扱い、目に入れないこと、火気、保管",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "お湯に1〜3滴垂らして目を閉じて香りを楽しむ方法、長い時間は避けること",
    },
  ],
  Body: () => (
    <>
      <p>
        甘さを抑えた、すっきりと涼しげな清涼感。ペパーミントならではの香りです。午後のデスクや、気分を切り替えたいときに、まずは1滴から試してみてください。
      </p>
      <p>
        同じ名前でも容量で表示が変わるので、その点も一緒に確認しましょう。
      </p>

      <h2 id="profile">ドテラのペパーミントはどんなオイル？</h2>
      <OilProfile
        name="ペパーミント"
        en="Peppermint"
        image="/assets/products/peppermint-15ml.jpg"
        color={oilColors.peppermint}
        rows={[
          { label: "学名", value: "Mentha piperita" },
          { label: "抽出部位", value: "全草（水蒸気蒸留法）" },
          { label: "香り", value: "ミンティー、フレッシュ、ハーベイシャス" },
          { label: "表示", value: "15mLは「香・食」、5mLは「塗・香」" },
        ]}
      />
      <p>
        ミンティーはフレッシュで清涼感を与える香り、ハーベイシャスはハーブのようなスーッとする香りのことです。甘さは控えめで、少量でも輪郭がはっきり伝わります。
      </p>
      <p>
        ペパーミントは、ウォーターミントとスペアミントの交配種です。産地は米国の太平洋岸北西部とインド北部で、約450gの葉から15mLのボトル1本ができます。
      </p>

      <h2 id="usage">ドテラのペパーミントの使い方</h2>
      <UsageCards
        items={[
          {
            en: "Desk",
            title: "午後のデスクで",
            text: "ティッシュに1滴垂らして、デスクの端に置きます。顔に近づけすぎず、そっと香りを感じるくらいで十分です。",
          },
          {
            en: "Diffuser",
            title: "部屋の香りを変えたいときに",
            text: "ドテラは、オレンジとフランキンセンスを1滴ずつ合わせる組み合わせを紹介しています。",
          },
          {
            en: "Drink",
            title: "飲み物の香りづけ",
            text: "スムージーに1滴。「食品添加物」の表示がある製品に限り、ラベルどおりに使います。",
          },
        ]}
      />
      <DataTable
        caption="ペパーミントを香りで楽しむときの量の目安"
        headers={["場面", "方法", "量の目安"]}
        rows={[
          ["デスク", "ティッシュに垂らす", "1滴から、多くても2滴まで"],
          ["外出先", "ハンカチに垂らしてバッグの中へ", "1〜2滴"],
          ["リビング", "ディフューザーの水に垂らす", "機種の説明書どおり（ラルツは5〜10滴）"],
          ["休憩中", "マグカップのお湯に垂らす", "1〜2滴"],
        ]}
      />
      <PointBox>
        オイルを含ませたハンカチで、汗を拭かないようにしましょう。香り専用のハンカチを決めておくと間違えません。
      </PointBox>
      <MemberVoice>
        <p>
          ELIGŌのメンバーの一人は、ペパーミントとラベンダーに、レモンユーカリとオンガードを足して、布に吹きかけるリネンスプレーを作っています。細かい霧が出るスプレーボトルを選ぶと、使いやすくなります。まねするときは、肌に直接かからないようにし、布は目立たない所で試してから吹きかけましょう。
        </p>
      </MemberVoice>
      <p>
        手軽な道具の使い方は<Link href="/blog/no-diffuser">ディフューザーがなくても大丈夫！</Link>で紹介しています。
      </p>

      <h3>飲み物に使うときは</h3>
      <p>
        ドテラの「食品添加物」の表示がある製品は、ラベルどおりの量と方法で飲み物の香りづけに使えます。ペパーミントの15mLは表示が「香・食」で、スムージーに1滴加える例があります。5mLに口に入れる使い方はありません。香りが強いので、爪楊枝の先につけて混ぜる程度から始めましょう。
      </p>
      <p>
        日本アロマ環境協会は、希釈した精油でも、飲むことや食品と一緒にとることをすすめていません。日本の法律では一般に雑品に分類され、飲食は認められていないという説明です。別の見解もあるので、最後はご自身で判断してください。
      </p>
      <MemberVoice>
        <p>
          ELIGŌのメンバーの一人は、レモンで香りをつけた水を毎日持ち歩いていて、暑い日には「食」の表示があるペパーミント15mLを1滴だけ足しています。香りが強いので、1滴で十分です。5mLのボトルは口に入れる使い方がないので、飲み物には使いません。
        </p>
      </MemberVoice>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>ペパーミントは香りの立ち上がりを担うトップノートのオイルです。主張が強いので、ほかの香りより少なめに入れるとバランスがとれます。ペパーミントやユーカリプタスを含むドテラのブレンドには、<Link href="/blog/easy-air">イージーエア</Link>もあります。</p>
      <PairingList
        items={[
          { name: "オレンジ", en: "Wild Orange", color: oilColors.wildOrange, note: "甘さが加わり、親しみやすい清涼感に" },
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "さっぱり同士で、軽快な香りに" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "温かみが土台になり、落ち着いた清涼感に" },
          { name: "ユーカリプタス", en: "Eucalyptus", color: oilColors.peppermint, note: "葉の青さが重なり、森のような香りに" },
        ]}
      />
      <BlendRecipe
        title="午後の切り替えに"
        drops={[
          { name: "ペパーミント", color: oilColors.peppermint, count: 1 },
          { name: "オレンジ", color: oilColors.wildOrange, count: 1 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <BlendRecipe
        title="朝の窓辺に"
        drops={[
          { name: "レモン", color: oilColors.lemon, count: 3 },
          { name: "ペパーミント", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>
        最初の例は、ドテラが紹介している組み合わせです。部屋が広くて香りが弱いと感じたら、同じ比率で増やしてください。
      </p>
      <MemberVoice note="メンバー個人の感じ方です。香りの好みには個人差があります。">
        <p>
          ELIGŌのメンバーの一人も、フランキンセンス、オレンジ、ペパーミントの組み合わせをディフューズしています。部屋中が香りに包まれて、家で過ごす日を心地よく過ごせる、お気に入りのブレンドです。
        </p>
        <p>
          別のメンバーは、最近、ディフューザーにペパーミントを入れていて、爽やかな香りがお気に入りです。滴数は、お使いのディフューザーの説明書の目安に合わせましょう。
        </p>
      </MemberVoice>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "15mLは「香・食」の表示で肌に塗る使い方がないので、肌につけないようにしましょう。ついたら洗い流します。5mLは「塗・香」の表示どおり肌に使えます。協会はペパーミントに皮膚刺激があるとして、皮膚への使用を控えるよう説明しています。",
          "目に入らないようにしましょう。オイルがついた手で顔や目に触れないでください。",
          "香りが強いオイルです。少量から始め、気分が悪くなったら使うのをやめて換気します。",
          "飲食に使うのは「食品添加物」の表示がある製品だけです。原液をそのまま飲まないでください。",
          "妊娠中、授乳中の方、薬を飲んでいる方、通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。",
          "マグカップのお湯の香りを楽しむときは目を閉じ、長い時間は続けません。誤って飲まないよう注意し、使ったあとはよく洗います。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "暑い日に、首すじや肩につけてもいいですか？",
            a: "5mLには、首筋や肩につける使い方があります。初めて肌に使うときや敏感肌の方は、キャリアオイルで薄めます。15mLは「香・食」の表示で、肌に塗る使い方がありません。協会は皮膚への使用を控えるよう説明しています。別の見解もあるので、最後はご自身で判断してください。",
          },
          {
            q: "15mLと5mLは同じ使い方ができますか？",
            a: "表示が違うため、同じ使い方はできません。使う前にお手元のボトルの容量とラベルを確認してください。",
          },
          {
            q: "ペットがいる部屋でも使えますか？",
            a: "動物は人と体の仕組みが異なるので、人の感覚で判断しないようにしましょう。使う前に、ペットのいる家の注意点の記事を確認してください。",
          },
        ]}
      />

      <p>
        ペパーミントは、少しの量で部屋の香りの印象が変わるオイルです。まずは午後のデスクで、ティッシュに1滴から試してみてください。ペットのいるご家庭は<Link href="/blog/pets-safety">ペットのいる家でオイルを使うときの注意点</Link>もあわせて確認しましょう。
      </p>
      <NextStepBox />
    </>
  ),
};
