import Link from "next/link";
import { BlendRecipe, CautionBox, DataTable, Faq, NextStepBox, OilProfile, PairingList, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: オンガード */
export const onGuard: ArticleContent = {
  summary: [
    "オンガードの内容と、オレンジとスパイスが重なる香りの特徴",
    "部屋の香り、掃除の仕上げ、飲食の香りづけで楽しむ3つの方法",
    "相性のよい香りとブレンド例、使うときの注意点",
  ],
  toc: [
    { id: "scent", title: "オンガードはどんな香り？" },
    { id: "enjoy", title: "暮らしで楽しむ3つの方法" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "オンガード",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-15ml/",
      note: "ブレンドの内容、香りの特徴、香・食の表示、水に加えて拭き掃除に使う方法、スライスしたりんごの使い方、使用上の注意",
    },
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "単品のユーカリプタスは香のみの表示で、肌につけない、摂取しない製品であること",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "香りの強いオイルを爪楊枝の先でごく少量使う方法、ラベルの使用方法に従うこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "製品の区分と使用方法、注意表示の確認、医師または薬剤師への相談",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "希釈しても飲用や食品との摂取、うがいをすすめていないこと、3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "精油が一般に雑品に分類され、飲食は認められていないという説明",
    },
    {
      title: "精油はどのようにして作られる？主な抽出方法や具体的な活用法について紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年9月17日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4572/",
      note: "精油が水に溶けにくいこと",
    },
    {
      title: "住宅用塩素系洗浄剤の使い方－まぜるな危険！浴室などで事故が発生しています－",
      publisher: "独立行政法人 国民生活センター（2026年3月18日）",
      url: "https://www.kokusen.go.jp/news/data/n-20260318_1.html",
      note: "塩素系の製品が酸やエタノールなどと混ざると塩素ガスが発生すること",
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
      note: "オイルは5〜10滴であること、適用床面積が約16畳であること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "飲用しないこと、目に入れないこと、火気、子どもやペットの手の届かない場所での保管",
    },
    {
      title: "アロマで部屋をいいにおいにする方法！インテリアに合わせた香りコーディネート術も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年2月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4072/",
      note: "手荒れしやすい人はゴム手袋を使うこと",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があること",
    },
    {
      title: "アロマタッチ ハンドテクニックに使用するオイルの選び方",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-hand-technique-how-to-choose-an-oil",
      note: "ハンドテクニックでは化粧品カテゴリのオイルを使うこと、例にオンガードが挙がっていること",
    },
  ],
  Body: () => (
    <>
      <p>
        オレンジの甘さのあとから、クローブやシナモンの温かい香りが追いかけてくる。オンガードは、焼き菓子やチャイを思わせるスパイスの香りのブレンドオイルです。
      </p>
      <p>この記事では、内容と香りの特徴に加えて、部屋の香り、掃除の仕上げ、飲食の香りづけでの使い方を紹介します。</p>

      <OilProfile
        name="オンガード"
        en="On Guard"
        image="/assets/products/on-guard-15ml.jpg"
        color={oilColors.wildOrange}
        rows={[
          { label: "主な内容", value: "オレンジ、クローブ、シナモンリーフ、シナモンバーク、ユーカリプタス、ローズマリー" },
          { label: "香り", value: "ウォーム、スパイシー、カンファー、ウッディー" },
          { label: "製品ページの表示", value: "香・食（15mL）" },
        ]}
      />

      <h2 id="scent">オンガードはどんな香り？</h2>
      <p>
        オンガードは、複数のオイルを組み合わせたドテラのブレンドオイルです。内容は6種類で、果皮、スパイス、葉の香りが重なっています。
      </p>
      <p>
        製品ページの香りの特徴は、ウォーム、スパイシー、カンファー、ウッディーの4つです。カンファーは、樟脳のようなツンとした香りのことです。スパイスの温かさの奥にユーカリプタスやローズマリーの涼しさがあるので、甘いだけの香りになりません。
      </p>
      <p>香りの主張がはっきりしているオイルなので、どの使い方でも少なめから始めると、好みの強さを探しやすくなります。</p>

      <h2 id="enjoy">暮らしで楽しむ3つの方法</h2>
      <UsageCards
        items={[
          {
            en: "Diffuse",
            title: "部屋に香らせる",
            text: "来客の前や、家族が集まる時間に。機器の説明書の滴数の範囲で、少なめの量から試します。",
          },
          {
            en: "Clean",
            title: "掃除の仕上げに",
            text: "バケツの水に数滴加えてよくかき混ぜ、布を絞ってテーブルや棚を拭きます。香りを添える仕上げの使い方です。",
          },
          {
            en: "Snack",
            title: "りんごの香りづけに",
            text: "「食品添加物」の表示がある製品に限った使い方です。水にスライスしたりんごを浸し、数滴加えます。",
          },
        ]}
      />
      <p>
        ドテラのラルツディフューザーの説明書では、オイルは5〜10滴、適用床面積は約16畳です。まず下限の5滴で試し、足すときは1滴ずつにします。香りの感じ方には個人差があるので、来客がある日は少なめにしましょう。
      </p>
      <p>
        オイルは水に溶けにくいので、拭き掃除の水は使う直前に混ぜます。スプレーの作り方は<Link href="/blog/cleaning-spray">手作り掃除スプレーの作り方</Link>で紹介しています。
      </p>
      <p>
        飲食に使うときは、クローブやシナモンを含むので、爪楊枝の先につけたごく少量から試してください。量と方法は、お手元のラベルの表示に従います。
      </p>
      <p>
        日本アロマ環境協会は、希釈した精油であっても、飲用や食品と一緒の摂取、うがいをすすめていません。一般の精油は雑品に分類され、飲食は認められていないとも説明しています。オンガードを口にする話は、ドテラの「食品添加物」の表示がある製品に限ります。うがいには使わないでください。詳しくは<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>をご覧ください。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>スパイスの香りは、柑橘、花、木の香りと組み合わせると、強さの角が取れて部屋になじみます。</p>
      <PairingList
        items={[
          { name: "オレンジ", en: "Wild Orange", color: oilColors.wildOrange, note: "甘さが前に出て、親しみやすい香りになります" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花のやわらかさが、スパイスの刺激感を包みます" },
          { name: "ヒノキ", en: "Hinoki", color: oilColors.frankincense, note: "木の香りが重なり、落ち着いた印象になります" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "樹脂の深みが加わり、スパイスの温かさが引き立ちます" },
        ]}
      />
      <BlendRecipe
        title="甘さを強めたい日に"
        drops={[
          { name: "オンガード", color: oilColors.wildOrange, count: 2 },
          { name: "オレンジ", color: oilColors.wildOrange, count: 3 },
        ]}
      />
      <BlendRecipe
        title="来客前の玄関に"
        drops={[
          { name: "オンガード", color: oilColors.wildOrange, count: 2 },
          { name: "ヒノキ", color: oilColors.frankincense, count: 3 },
        ]}
      />
      <p>ディフューザーで合計5滴にした例です。オンガードの割合を抑えると、スパイスが強くなりすぎません。</p>
      <DataTable
        caption="オレンジと合わせるときの割合（合計5滴）"
        headers={["オンガード", "オレンジ", "香りの印象"]}
        rows={[
          ["3滴", "2滴", "スパイスがはっきり残ります"],
          ["2滴", "3滴", "甘さが前に出ます"],
          ["1滴", "4滴", "スパイスがほんのり香ります"],
        ]}
      />

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="オンガードを使う前に確認したいこと"
        items={[
          "15mLの製品ページの表示は「香・食」で、肌に塗る案内はありません。肌には使わないでください。",
          "内容に含まれるオイルの単品が、同じ表示とは限りません。単品のユーカリプタス15mLは「香」のみで、肌につけない、摂取しない製品です。",
          "容量が違うボトルは、表示も違う場合があります。手元のボトルのラベルで確かめましょう。",
          "オンガードは香りづけに使うものです。体のことは製品ラベルの表示に従い、医師や薬剤師に相談してください。",
          "原液を直接なめたり、飲み込んだりしないでください。目にも入れないでください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。",
          "妊娠中、授乳中の方、薬を服用中、通院中の方、子どもは、口にする前に医師または薬剤師へ相談しましょう。",
          "テーブルや床は、素材によって色や跡が残ることがあります。掃除の前に目立たない場所で試します。手が荒れやすい方はゴム手袋を使います。",
          "塩素系の洗浄剤と一緒に使わないでください。酸やエタノールなどと混ざると塩素ガスが発生します。",
          "火のそばでは使わず、子どもやペットの手の届かない場所で保管します。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "同じ名前の洗剤などとは別の製品ですか？",
            a: "別の製品です。用途も使い方も製品ごとに違うので、それぞれのラベルで確かめてください。この記事で紹介しているのは15mLのオイルです。",
          },
          {
            q: "ハンドテクニックに使えますか？",
            a: "公式ページの例に名前がありますが、同じページで化粧品カテゴリのオイルを使うよう案内しています。15mLの製品ページの表示は「香・食」なので、手には塗りません。別の容量のボトルは、ラベルで確かめましょう。",
          },
        ]}
      />

      <p>
        まずはティッシュに1滴たらして、オレンジとスパイスの重なりを確かめてみてください。スパイスが強いと感じたら、オレンジを足して調整しましょう。
      </p>
      <NextStepBox />
    </>
  ),
};
