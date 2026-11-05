import Link from "next/link";
import { CautionBox, DataTable, Faq, NextStepBox, ProductPhotos, type ArticleContent } from "../ArticleParts";

/** ドテラの製品の分類、オイルの種類、キットとコレクション、オイル以外の製品を2026年11月時点で整理する記事 */
export const doterraOilLineup: ArticleContent = {
  summary: [
    "ドテラの製品のカテゴリと、シングルオイル、ブレンドオイルの主な種類（2026年11月時点）",
    "キットとコレクションの中身と価格、販売を終えたキッズコレクションのこと",
    "スキンケア、サプリメント、ディフューザーなど、オイル以外の製品の分類",
  ],
  toc: [
    { id: "category", title: "ドテラの製品一覧｜カテゴリの分け方" },
    { id: "singles", title: "シングルオイルの種類｜香りの系統で見る" },
    { id: "blends", title: "ブレンドオイルとシリーズ製品" },
    { id: "kits", title: "キットとコレクション｜キッズコレクションは販売終了" },
    { id: "others", title: "オイル以外の製品｜スキンケア、サプリメント、ディフューザー" },
    { id: "caution", title: "選ぶとき、使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "製品情報",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/",
      note: "製品がシングルオイル、ブレンドオイル、各シリーズ、パーソナルケア、サプリメント、アクセサリー、限定製品、ホームケア、ヒーリングハンズ、キット＆コレクションに分かれていること（2026年11月時点）",
    },
    {
      title: "シングルオイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/single-oil/",
      note: "一覧に61件が並ぶこと、容量違いと価格のない5mLの製品が含まれること、15mLと5mLの容量（2026年11月時点）",
    },
    {
      title: "ブレンドオイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/blend-oil/",
      note: "一覧に39件が並ぶこと、名前に「タッチ」がつく10mLの製品があること（2026年11月時点）",
    },
    {
      title: "オンガード シリーズ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/on-guard/",
      note: "オンガードの名前で、オイルのほかにハンドウォッシュ、洗濯用洗剤、クリーナー、ソフトジェルなどがあること",
    },
    {
      title: "キット＆コレクション製品",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/kit-and-collections/",
      note: "キット＆コレクションが「登録キット」と「コレクション」に分かれていること",
    },
    {
      title: "コレクション",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/kit-and-collection/",
      note: "イントロキット、ファミリー エッセンシャルズキット、アロマタッチキット、IKISE ヘアケア セットなどが並ぶこと",
    },
    {
      title: "イントロキット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/intro-kit/",
      note: "ラベンダー、レモン、ペパーミントの5mL×3本であること、会員価格と参考小売価格（税込）",
    },
    {
      title: "ファミリー エッセンシャルズキット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/family-essentials-kit/",
      note: "シングルオイル5種とブレンドオイル5種の5mL×10本であること、会員価格と参考小売価格（税込）",
    },
    {
      title: "アロマタッチキット（ココナッツオイル専用ポンプ付）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/aromatouch-kit-with-jp-fco-pump/",
      note: "8種類の5mLのオイル、ドテラ ココナッツオイル115mL、専用ポンプの中身、会員価格と参考小売価格（税込）",
    },
    {
      title: "登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/enrollment-kit/",
      note: "オイル登録キット、オイル デラックス登録キット、オイル コレクション登録キットなどの種類",
    },
    {
      title: "WC オイル コレクション登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/wc-oil-collection-enrollment-kit/",
      note: "51種類のオイルをそろえられる内容であること、登録料が含まれること",
    },
    {
      title: "販売終了・販売停止：キッズコレクション",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2025年7月10日）",
      url: "https://www.doterra-info.jp/media/2851493/",
      note: "キッズコレクションが2025年7月11日に販売を終えたこと",
    },
    {
      title: "限定販売開始：キッズコレクション（単品）※完売しました",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2025年7月23日）",
      url: "https://www.doterra-info.jp/media/2860921/",
      note: "キッズコレクションの6製品の単品が数量限定で売られ、2025年7月から8月に販売を終えたこと",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "抽出部位が花であること、香りの表示（パウダリー、フローラル、ライト）、「塗・香」の表示",
    },
    {
      title: "ゼラニウム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/geranium-15ml/",
      note: "抽出部位が全草であること、香りの表示（ハーベイシャス、グリーン、フローラル、スイート、ドライ）、「塗・香」の表示",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "抽出部位が果皮であること、香りの表示（クリーン、フレッシュ、シトラス、ブライト）、「香・食」の表示",
    },
    {
      title: "オレンジ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "抽出部位が果皮であること、香りの表示（スイート、フレッシュ、シトラス）、15mLの「香・食」の表示、会員価格（税込）",
    },
    {
      title: "ベルガモット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/bergamot-15ml/",
      note: "抽出部位が果皮であること、香りの表示（シトラス、スパイシー、わずかにフローラル）、「香・食」の表示",
    },
    {
      title: "グレープフルーツ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/grapefruit-15ml/",
      note: "抽出部位が果皮であること、香りの表示（シトラス、フローラル、フルーティー）、「香・食」の表示",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "抽出部位が全草であること、香りの表示（ミンティー、フレッシュ、ハーベイシャス）、15mLの「香・食」の表示",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLは「塗・香」の表示であること、単品の価格の表示がないこと",
    },
    {
      title: "ティーツリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/tea-tree-15ml/",
      note: "抽出部位が葉であること、香りの表示（ハーベイシャス、グリーン、レザリー）、「塗・香」の表示",
    },
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "抽出部位が葉と茎であること、香りの表示欄がないこと、「香」のみの表示",
    },
    {
      title: "ローズマリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/rosemary-15ml/",
      note: "抽出部位が花と葉であること、香りの表示（カンファー、ハーベイシャス）、「香・食」の表示",
    },
    {
      title: "レモングラス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemongrass-15ml/",
      note: "抽出部位が葉であること、香りの表示（シトラス、ハーベイシャス、スモーキー）、「香・食」の表示",
    },
    {
      title: "マジョラム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/marjoram-15ml/",
      note: "抽出部位が葉であること、香りの表示（ウォーム、ハーベイシャス、ウッディー）、「香・食」の表示",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "抽出部位が樹脂であること、香りの表示（ウォーム、スパイシー、クリーン）、「塗・香」の表示、会員価格（税込）",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "抽出部位が木部であること、香りの表示（ウッディー、エアリー、フレッシュ）、5mLで「塗・香」の表示",
    },
    {
      title: "サイプレス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/cypress-15ml/",
      note: "抽出部位が枝と葉であること、香りの表示（クリーン、フレッシュ、ウッディー、ハーベイシャス）、「塗・香」の表示",
    },
    {
      title: "オンガード",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-15ml/",
      note: "15mLであること、香りの表示（ウォーム、スパイシー、カンファー、ウッディー）、「香・食」の表示",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "15mLであること、香りの表示（ウォーム、フローラル、ハーバル）、「塗・香」の表示",
    },
    {
      title: "ドテラバランス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-balance-15ml/",
      note: "15mLであること、香りの表示（エアリー、フレッシュ、スイート、ウッディー）、「塗・香」の表示",
    },
    {
      title: "ドテラシトラスブリス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-citrus-bliss-15ml/",
      note: "15mLであること、香りの表示（シトラス、スイート）、「塗・香」の表示",
    },
    {
      title: "イージーエア",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/easy-air-15ml/",
      note: "15mLであること、香りの表示（ミンティー、フレッシュ、エアリー）、「塗・香」の表示",
    },
    {
      title: "ディープブルー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/deep-blue-5ml/",
      note: "5mLであること、香りの表示（ミンティー、カンファー）、「塗」の表示",
    },
    {
      title: "アロマタッチ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/aromatouch-15ml/",
      note: "15mLであること、香りの表示（クリーン、フレッシュ、ミント、パウダリー）、「塗」の表示",
    },
    {
      title: "パーソナルケア製品",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/personal-care/",
      note: "スキンケア、ボディケア、ヘアケア、IKISEなどに分かれていること",
    },
    {
      title: "サプリメント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/supplements/",
      note: "ソフトジェル、ドロップ、PHOSSIL ミネラル、ドテラ ライフロング バイタリティーパックなどの製品があること",
    },
    {
      title: "ホームケア製品",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/home-care/",
      note: "クリーナー、洗濯用洗剤、柔軟仕上げ剤、ハンドウォッシュ、ルーム＆リネンスプレーなどの製品",
    },
    {
      title: "ローズハンドローション",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/rose-hand-lotion/",
      note: "売上金が全額ドテラ・ヒーリングハンズ基金に寄付されること",
    },
    {
      title: "ドテラ ラルツディフューザー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-laluz-diffuser/",
      note: "アクセサリーのディフューザーとして扱われていること",
    },
    {
      title: "ユーカリプタス カテゴリ変更のお知らせ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2026年3月10日）",
      url: "https://www.doterra-info.jp/media/3078616/",
      note: "2026年3月11日の注文分から、化粧油から雑貨油へ区分が変わったこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "オイルが化粧品、食品添加物、雑貨の3種類に分かれ使用方法が異なること、使用方法と注意表示を確認すること、医師または薬剤師への相談",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "芳香、塗布、摂取の3つの使い方があり、ラベルの使用方法とカテゴリに従って使うこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、目に入れないこと、火気への注意、子どもやペットの手の届かない所に保管すること",
    },
  ],
  Body: () => (
    <>
      <p>
        ドテラ（dōTERRA）の製品は、エッセンシャルオイルを中心に、スキンケア、ヘアケア、サプリメント、ディフューザーまで幅があります。2026年11月時点の製品の分け方と、主な製品を順に紹介します。
      </p>
      <p>
        製品は、新しく加わったり、販売を終えたりして入れ替わります。買う前には、ドテラ・ジャパンの製品情報で最新の一覧を確かめてください。
      </p>

      <h2 id="category">ドテラの製品一覧｜カテゴリの分け方</h2>
      <p>ドテラ・ジャパンの製品は、次のカテゴリに分かれています。</p>
      <DataTable
        caption="ドテラの製品のカテゴリ（2026年11月時点）"
        headers={["カテゴリ", "主な中身"]}
        rows={[
          ["シングルオイル", "ラベンダー、レモン、フランキンセンスなど、1種類の植物からとったオイル"],
          ["ブレンドオイル", "オンガード、ドテラセレニティーなど、複数のオイルを組み合わせたオイル"],
          ["シリーズ製品", "アダプティブ、オンガード、ディープブルー、セレニティー、メタPWR、森の音の名前でまとめた製品"],
          ["パーソナルケア", "スキンケア、ボディケア、ヘアケアの製品"],
          ["サプリメント", "ソフトジェル、ドロップ、PHOSSIL ミネラルなど"],
          ["ホームケア", "クリーナー、洗濯用洗剤、ハンドソープなど"],
          ["アクセサリー", "ディフューザー、ボトルケース、ミニボトルなど"],
          ["キット＆コレクション", "複数の製品をまとめたセットと、登録キット"],
          ["限定製品", "期間や数量を限って売る製品"],
          ["ヒーリングハンズ", "売上がドテラ・ヒーリングハンズ基金に寄付される製品"],
        ]}
      />

      <h2 id="singles">シングルオイルの種類｜香りの系統で見る</h2>
      <p>
        シングルオイルは、1種類の植物からとったオイルです。一覧には61件が並びます（2026年11月時点、容量違い、キット用のボトル、限定品、販売終了品を含む）。
      </p>
      <p>
        容量は15mLが中心で、ヒノキなど5mLのオイルもあります。15mLの会員価格は、オレンジが1,900円、フランキンセンスが11,700円です（税込）。下の表の「香り」はドテラが示す香りの言葉、「表示」は「塗」「香」「食」のマークです。
      </p>
      <DataTable
        caption="主なシングルオイル（15mL、ヒノキは5mL、2026年11月時点）"
        headers={["オイル", "とる部分", "香り", "表示"]}
        rows={[
          ["ラベンダー", "花", "パウダリー、フローラル、ライト", "塗・香"],
          ["ゼラニウム", "全草", "ハーベイシャス、グリーン、フローラル、スイート、ドライ", "塗・香"],
          ["レモン", "果皮", "クリーン、フレッシュ、シトラス、ブライト", "香・食"],
          ["オレンジ", "果皮", "スイート、フレッシュ、シトラス", "香・食"],
          ["ベルガモット", "果皮", "シトラス、スパイシー、わずかにフローラル", "香・食"],
          ["グレープフルーツ", "果皮", "シトラス、フローラル、フルーティー", "香・食"],
          ["ペパーミント", "全草", "ミンティー、フレッシュ、ハーベイシャス", "香・食"],
          ["ティーツリー", "葉", "ハーベイシャス、グリーン、レザリー", "塗・香"],
          ["ユーカリプタス", "葉、茎", "表示なし", "香"],
          ["ローズマリー", "花、葉", "カンファー、ハーベイシャス", "香・食"],
          ["レモングラス", "葉", "シトラス、ハーベイシャス、スモーキー", "香・食"],
          ["マジョラム", "葉", "ウォーム、ハーベイシャス、ウッディー", "香・食"],
          ["フランキンセンス", "樹脂", "ウォーム、スパイシー、クリーン", "塗・香"],
          ["ヒノキ", "木部", "ウッディー、エアリー、フレッシュ", "塗・香"],
          ["サイプレス", "枝、葉", "クリーン、フレッシュ、ウッディー、ハーベイシャス", "塗・香"],
        ]}
      />
      <ProductPhotos names={["ラベンダー", "レモン", "オレンジ", "ペパーミント", "ユーカリプタス", "フランキンセンス", "ヒノキ"]} />
      <p>
        各オイルの紹介は、<Link href="/blog/lavender">ラベンダー</Link>、<Link href="/blog/geranium">ゼラニウム</Link>、<Link href="/blog/lemon">レモン</Link>、<Link href="/blog/orange">オレンジ</Link>、<Link href="/blog/bergamot">ベルガモット</Link>、<Link href="/blog/grapefruit">グレープフルーツ</Link>、<Link href="/blog/peppermint">ペパーミント</Link>、<Link href="/blog/tea-tree">ティーツリー</Link>、<Link href="/blog/eucalyptus">ユーカリプタス</Link>、<Link href="/blog/rosemary">ローズマリー</Link>、<Link href="/blog/lemongrass">レモングラス</Link>、<Link href="/blog/marjoram">マジョラム</Link>、<Link href="/blog/frankincense">フランキンセンス</Link>、<Link href="/blog/hinoki">ヒノキ</Link>、<Link href="/blog/cypress">サイプレス</Link>へ。
      </p>
      <h3>同じ名前でも表示が違うことがある</h3>
      <p>
        ペパーミントは、単品の15mLが「香・食」、キットに入る5mLが「塗・香」です。区分が変わることもあり、ユーカリプタスは2026年3月11日の注文分から化粧油から雑貨油になりました。
      </p>
      <p>
        表示の読み方は<Link href="/blog/doterra-how-to-use">ドテラのオイルの使い方</Link>に、化粧品、食品添加物、雑貨の違いは<Link href="/blog/doterra-drinkable">ドテラのオイルは飲める？</Link>にまとめています。
      </p>

      <h2 id="blends">ブレンドオイルとシリーズ製品</h2>
      <p>
        ブレンドオイルは、複数のオイルを組み合わせた製品です。一覧には39件が並びます（2026年11月時点、容量違いや限定販売の製品を含む）。
      </p>
      <DataTable
        caption="主なブレンドオイル（2026年11月時点）"
        headers={["ブレンド", "容量", "香り", "表示"]}
        rows={[
          ["オンガード", "15mL", "ウォーム、スパイシー、カンファー、ウッディー", "香・食"],
          ["ドテラセレニティー", "15mL", "ウォーム、フローラル、ハーバル", "塗・香"],
          ["ドテラバランス", "15mL", "エアリー、フレッシュ、スイート、ウッディー", "塗・香"],
          ["ドテラシトラスブリス", "15mL", "シトラス、スイート", "塗・香"],
          ["イージーエア", "15mL", "ミンティー、フレッシュ、エアリー", "塗・香"],
          ["ディープブルー", "5mL", "ミンティー、カンファー", "塗"],
          ["アロマタッチ", "15mL", "クリーン、フレッシュ、ミント、パウダリー", "塗"],
        ]}
      />
      <ProductPhotos names={["オンガード", "ドテラセレニティー", "ドテラバランス", "ドテラシトラスブリス", "イージーエア", "ディープブルー", "アロマタッチ"]} />
      <p>
        名前に「タッチ」がつく10mLの製品（ローズタッチ、マグノリアタッチなど）も、ブレンドオイルの一覧に入っています。くわしくは<Link href="/blog/on-guard">オンガード</Link>、<Link href="/blog/serenity">ドテラセレニティー</Link>、<Link href="/blog/balance">ドテラバランス</Link>、<Link href="/blog/easy-air">イージーエア</Link>、<Link href="/blog/deep-blue">ディープブルー</Link>の記事へ。
      </p>
      <h3>シリーズ製品</h3>
      <p>
        オンガード、ディープブルー、セレニティー、アダプティブ、メタPWR、森の音は、同じ名前でオイル以外の製品もそろえたシリーズです。たとえばオンガードシリーズには、オイルのほかに、ハンドソープ、洗濯用洗剤、クリーナー、ソフトジェルなどがあります。
      </p>

      <h2 id="kits">キットとコレクション｜キッズコレクションは販売終了</h2>
      <p>
        「キット＆コレクション」には、複数の製品をまとめたセットが並びます。オイルが中心の主なセットです。
      </p>
      <DataTable
        caption="主なキットとコレクション（2026年11月時点、税込）"
        headers={["名前", "中身", "会員価格／参考小売価格"]}
        rows={[
          ["イントロキット", "5mL×3本（ラベンダー、レモン、ペパーミント）", "3,300円／5,000円"],
          [
            "ファミリー エッセンシャルズキット",
            "5mL×10本（ラベンダー、レモン、ペパーミント、ティーツリー、フランキンセンス、オンガード、ゼンジェスト、イージーエア、ディープブルー、ドテラバランス）",
            "19,000円／28,499円",
          ],
          [
            "アロマタッチキット（ココナッツオイル専用ポンプ付）",
            "5mL×8本（ラベンダー、ペパーミント、ティーツリー、オレンジ、ドテラバランス、アロマタッチ、オンガード、ディープブルー）、ドテラ ココナッツオイル115mL、専用ポンプ",
            "16,700円／25,100円",
          ],
        ]}
      />
      <p>
        アロマタッチキットは、アロマタッチ テクニックで使う8種類のオイルのセットです。テクニックは<Link href="/blog/aromatouch-technique">アロマタッチ テクニックとは</Link>へ。
      </p>
      <ProductPhotos names={["アロマタッチキット"]} />
      <h3>登録キットとオイル コレクション</h3>
      <p>
        会員登録と同時に申し込むセットを「登録キット」といいます。オイルを中心にした「オイル登録キット」「オイル デラックス登録キット」「オイル コレクション登録キット」などがあり、どれも登録料が含まれます。オイル コレクション登録キットは、51種類のオイルを一度にそろえられる内容です。
      </p>
      <h3>キッズコレクションは販売を終えています</h3>
      <p>
        「キッズコレクション」は、2025年7月11日に販売を終えました。中に入っていたドテラ ストロンガー、ドテラ コンフォーター、ドテラテイマー、ドテラ シンカー、ドテラ ステディー、ドテラ ブレイブの単品も、2025年7月から8月に数量限定で売られ、販売を終えています。
      </p>
      <p>
        子どものいる家でオイルを使うときの注意は、<Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>にまとめています。
      </p>

      <h2 id="others">オイル以外の製品｜スキンケア、サプリメント、ディフューザー</h2>
      <h3>パーソナルケア</h3>
      <p>
        化粧水、クリーム、ボディローション、リップバーム、シャンプーなど、肌や髪に使う製品です。IKISEは、スキンケアからヘアケアまでそろうシリーズです。種類と価格は<Link href="/blog/doterra-skincare">ドテラの化粧品一覧</Link>と<Link href="/blog/doterra-shampoo-toothpaste">ドテラのシャンプー、歯磨き粉、石鹸</Link>にまとめました。
      </p>
      <h3>サプリメント</h3>
      <p>
        ソフトジェル、ドロップ、PHOSSIL ミネラル、ドテラ ライフロング バイタリティーパックなどがあります。食品なので、表示の量と食べ方を守りましょう。体調に変化があるとき、病気の治療中の方、妊娠中や授乳中の方は、医師に相談してください。PHOSSIL ミネラルは<Link href="/blog/doterra-mineral">ドテラのミネラル</Link>で紹介しています。
      </p>
      <h3>アクセサリーとヒーリングハンズ</h3>
      <p>
        アクセサリーには、ドテラ ラルツディフューザーなどのディフューザーや、ボトルケースがあります。ディフューザーの選び方は<Link href="/blog/doterra-diffusers">ドテラのディフューザー</Link>へ。ヒーリングハンズのローズハンドローションは、売上金が全額ドテラ・ヒーリングハンズ基金に寄付されます。
      </p>
      <ProductPhotos names={["ドテラ ラルツディフューザー", "ローズハンドローション"]} />

      <h2 id="caution">選ぶとき、使うときの注意点</h2>
      <CautionBox
        items={[
          "使い方は製品の区分で変わります。肌に使うのは「化粧品」、飲食に使うのは「食品添加物」の表示がある製品に限り、ラベルの使用方法と注意表示どおりに使いましょう。",
          "「塗」の表示がある製品は肌に使えます。敏感肌、子どもの肌、初めて肌に使うオイルはキャリアオイルで薄めます。協会は原液を肌につけないよう案内しています。別の見解もあるので、最後はご自身で判断してください。目に入れないようにし、肌に異常が出たら使うのをやめて皮膚科に相談します。",
          "製品には販売終了や、名称、区分の変更があります。この記事の内容は2026年11月時点のもので、買う前に製品ページとお手元のラベルで確かめてください。",
          "妊娠中、授乳中の方、持病がある方、薬を飲んでいる方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "子どもやペットの手の届かない場所に保管し、火のそばでは使いません。",
        ]}
      />
      <p>
        ペットのいる家での注意は、<Link href="/blog/pets-safety">ペットのいる家でオイルを使うときの注意点</Link>で確認できます。
      </p>

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "最新の製品一覧はどこで見られますか？何種類ありますか？",
            a: "ドテラ・ジャパンの情報サイト「doTERRA TIMES」の製品情報で、カテゴリごとに見られます。製品は入れ替わるので、決まった数はありません。販売の開始や終了は、同じサイトのお知らせに載ります。",
          },
          {
            q: "キッズコレクションはもう買えませんか？",
            a: "2025年7月11日に販売を終え、単品も同じ年の8月までに販売を終えました。2026年11月時点で、日本では販売していません。",
          },
          {
            q: "5mLのラベンダーやペパーミントは単品で買えますか？",
            a: "2026年11月時点で、単品で売られているのは15mLです。5mLのボトルは、イントロキットやファミリー エッセンシャルズキットなどのキットに入っています。",
          },
        ]}
      />

      <p>
        ドテラの製品は、シングルオイルとブレンドオイルを中心に、キット、パーソナルケア、サプリメントなどに分かれています。使いたい場面からオイルを選ぶなら、<Link href="/blog/oils-by-scene">シーン別オイルの選び方</Link>も参考にしてください。
      </p>
      <NextStepBox />
    </>
  ),
};
