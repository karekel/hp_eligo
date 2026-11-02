import Link from "next/link";
import { BlendRecipe, CautionBox, DataTable, Faq, MethodCard, NextStepBox, OilProfile, PairingList, PointBox, Steps, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: サイプレス */
export const cypress: ArticleContent = {
  summary: [
    "サイプレスの基本情報と、ヒノキに似た清潔感のある香りの特徴",
    "玄関、ディフューザー、ハンドオイルで楽しむ方法と分量",
    "相性のよい香りのブレンド例と、「塗・香」の表示で気をつけたいこと",
  ],
  toc: [
    { id: "scent", title: "サイプレスの香りの特徴" },
    { id: "enjoy", title: "暮らしでの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "サイプレス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/cypress-15ml/",
      note: "学名、和名、抽出部位と抽出方法、香りの表示、主成分、「塗・香」の表示、ライムと一緒にディフューズする案内、使用上の注意",
    },
    {
      title: "サイプレス",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/cypress",
      note: "産地がスペインとケニアであること、ケニアで木材用の木を育てる途中の枝を蒸留すること、木材として売れるまで10〜20年かかること、防風林としての利用",
    },
    {
      title: "サイプレス インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/cypress-15ml.pdf",
      note: "15mLに約4kgの葉を使うこと、モロッコを含む産地の表示、ゴッホの代表作に描かれていること、相性のよいオイル",
    },
    {
      title: "アロマの種類と効果を徹底解説！購入時のポイントも紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2062/",
      note: "ヒノキのような清潔感のある香りという説明、「天高く昇る聖木」と呼ばれ寺院や墓地、防風林に植えられてきたこと",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "ヒノキの抽出部位、香りの表示、「塗・香」の表示",
    },
    {
      title: "オリジナル フレグランス作り",
      publisher: "doTERRA（日本向け資料）",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "サイプレスをベースノートに分類していること",
    },
    {
      title: "ローズマリー インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/rosemary-15ml.pdf",
      note: "ローズマリーと相性のよいオイルにサイプレスが挙げられていること",
    },
    {
      title: "ライム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lime-15ml/",
      note: "ライム15mLの「香・食」の表示",
    },
    {
      title: "ローズマリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/rosemary-15ml/",
      note: "ローズマリー15mLの「香・食」の表示",
    },
    {
      title: "How to Use an Entire Bottle of Lavender Oil",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/healthy-living-how-to-use-an-entire-bottle-of-lavender",
      note: "15mLのボトルに約250滴入っているという記載",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして計算すること（15mLで300滴）",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会 News Letter（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "植物油20mLに精油4滴以内、顔に使う場合は2滴までとすること、1滴を約0.05mLとすること",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らす方法、肌に使うときの濃度の目安",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "開封後1年以内の目安、3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、保管、お年寄りや既往歴のある人の使用量",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、少量から始めること、異常が出たときの対応、医師または薬剤師への相談",
    },
  ],
  Body: () => (
    <>
      <p>
        サイプレスは、常緑の高い木の枝と葉から生まれる、みずみずしくクリーンな香りのオイルです。森に入ったときの空気を思わせ、玄関や仕事部屋に取り入れやすい香りです。
      </p>
      <p>この記事では、ドテラのサイプレス15mLを例に、香りの特徴と楽しみ方を分量つきで紹介します。製品ページの表示は「塗・香」なので、肌に使う場合の分量も確認します。</p>

      <h2 id="scent">サイプレスの香りの特徴</h2>
      <OilProfile
        name="サイプレス"
        en="Cypress"
        image="/assets/products/cypress-15ml.jpg"
        color={oilColors.peppermint}
        rows={[
          { label: "学名", value: "Cupressus sempervirens, lusitanica" },
          { label: "抽出部位", value: "枝、葉（水蒸気蒸留法）" },
          { label: "香り", value: "クリーン、フレッシュ、ウッディー、ハーベイシャス" },
          { label: "主成分", value: "α-ピネン、δ-カレン、リモネン" },
          { label: "製品ページの表示", value: "15mLは「塗・香」" },
        ]}
      />
      <p>
        製品ページの香りの表示は4つです。さっぱりした清々しさに、樹木とハーブの香りが重なります。日本アロマ環境協会は、ヒノキのような清潔感のある香りと紹介しています。和名はイタリアイトスギです。ヒノキのオイルと比べると、次のような違いがあります。
      </p>
      <DataTable
        caption="サイプレスとヒノキの違い（製品ページの表記）"
        headers={["項目", "サイプレス", "ヒノキ"]}
        rows={[
          ["抽出部位", "枝、葉", "木部"],
          ["香り", "クリーン、フレッシュ、ウッディー、ハーベイシャス", "ウッディー、エアリー、フレッシュ"],
          ["表示", "15mLは「塗・香」", "5mLは「塗・香」"],
        ]}
      />
      <p>
        ヒノキが白木のような香りなら、サイプレスは枝葉の青さが加わった香りです。空間を和の印象にしたいときはヒノキ、森の空気に近づけたいときはサイプレスと考えると選びやすいでしょう。
      </p>
      <p>
        協会によると、イタリアンサイプレスは「天高く昇る聖木」として寺院や墓地に植えられ、南仏では防風林にも使われてきました。ドテラの資料は、ゴッホの代表作にも描かれた木として紹介しています。
      </p>
      <p>
        産地はスペインとケニアです。インフォグラフィックにはモロッコも示されています。ケニアでは、木材用の木をまっすぐ育てるために下の枝を切り落とします。以前は捨てられていたこの枝を蒸留することで、木が売れるまでの10〜20年を待たずに、農家が毎年の収入を得られるようになりました。産地と生産者の関わりは<Link href="/blog/co-impact-sourcing">コ・インパクトソーシングとは？</Link>で解説しています。
      </p>
      <p>
        15mLのボトル1本に使う葉は約4kgです。15mLは<Link href="/blog/drop-count">約250〜300滴</Link>なので、1滴あたり約13〜16gの計算です。
      </p>

      <h2 id="enjoy">暮らしでの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Entrance",
            title: "玄関の香りに",
            text: "ティッシュに1〜2滴垂らして小皿にのせ、靴箱の上に置きます。帰ってきたときに、森の空気が迎えてくれます。",
          },
          {
            en: "Diffuse",
            title: "仕事部屋の空気に",
            text: "ライムと合わせてディフューザーで香らせます。製品ページにも、ライムと一緒に使う案内があります。",
          },
          {
            en: "Hand",
            title: "ハンドオイルの香りに",
            text: "「化粧品」の表示を確認し、植物油で薄めて手に伸ばします。分量は下で紹介します。",
          },
        ]}
      />
      <MethodCard no={1} title="ハンドオイルを作る" items={["10mLの遮光性のガラスびん", "植物油10mL", "サイプレス1〜2滴"]}>
        <Steps
          steps={[
            { title: "ラベルを確認する", text: "お手元のボトルに「化粧品」の表示があるか確かめます。" },
            { title: "植物油に混ぜる", text: "清潔なびんに植物油を入れ、オイルを加えて混ぜます。1滴は約0.05mLなので、2滴で濃度は1%です。顔には使いません。" },
            { title: "少量を試す", text: "腕の内側に少量伸ばして様子を見ます。赤みやかゆみが出たら使いません。" },
          ]}
        />
        <PointBox>作った日と中身をびんに書き、1か月以内に使い切りましょう。自分で楽しむためのもので、販売や譲渡はしないでください。</PointBox>
      </MethodCard>
      <p>
        濃度の考え方は<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と濃度1%は何滴？</Link>で解説しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>
        ドテラの資料では、サイプレスはベースノートに分類されています。ブレンドの土台になるので、軽い柑橘やハーブと組み合わせやすいオイルです。インフォグラフィックには、スパイクナード、ドテラバランス、ティーツリー、イージーエア、ジャスミンタッチが相性のよい香りとして並びます。
      </p>
      <PairingList
        items={[
          { name: "ライム", en: "Lime", color: oilColors.lemon, note: "爽快な柑橘が加わり、軽い香りに" },
          { name: "ローズマリー", en: "Rosemary", color: oilColors.peppermint, note: "ハーブの清涼感が、枝葉の青さと重なります" },
          { name: "ティーツリー", en: "Tea Tree", color: oilColors.peppermint, note: "シャープな香りで、すっきりした印象に" },
          { name: "ドテラバランス", en: "Balance", color: oilColors.frankincense, note: "木の香りが重なり、落ち着いた印象に" },
        ]}
      />
      <BlendRecipe
        title="午前の窓辺に"
        drops={[
          { name: "サイプレス", color: oilColors.peppermint, count: 3 },
          { name: "ライム", color: oilColors.lemon, count: 2 },
        ]}
      />
      <BlendRecipe
        title="森の散歩を思わせて"
        drops={[
          { name: "サイプレス", color: oilColors.peppermint, count: 3 },
          { name: "ローズマリー", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>
        どちらもディフューザーに使う合計5滴の例で、ライムとローズマリーの15mLは「香・食」の表示なので肌には使いません。組み立て方は<Link href="/blog/blend-basics">香りのブレンドの基本</Link>で解説しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "原液を直接肌につけないようにしましょう。肌に使うときはラベルの「化粧品」の表示を確認し、植物油で薄めます。協会の目安はボディ1%以下、顔0.5%以下です。",
          "初めて肌に使うときは、低い濃度で少量から試します。赤み、はれ、かゆみなどが出たら使うのをやめ、皮膚科に相談してください。",
          "目に入らないようにしましょう。耳の中や、傷、しっしんのある部分には使いません。",
          "治療中、妊娠中、授乳中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。お年寄りは、基準の半分以下の量で試します。",
          "製品ページの表示に「食」はありません。口に入れないでください。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。直射日光と湿気を避け、開封後は早めに使い切りましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "飲み物や料理に使えますか？",
            a: "製品ページの表示は「塗・香」で、「食」の表示はありません。口に入れないでください。",
          },
        ]}
      />

      <p>
        サイプレスは、部屋に森の空気を呼び込みたいときに頼れるオイルです。まずは玄関で、ティッシュに1滴から試してみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
