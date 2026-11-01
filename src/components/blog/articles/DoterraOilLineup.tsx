import Link from "next/link";
import { CautionBox, DataTable, NextStepBox, type ArticleContent } from "../ArticleParts";

/** ドテラのオイルの全体像（シングル、ブレンド、サイズと区分、キット）を整理する記事 */
export const doterraOilLineup: ArticleContent = {
  summary: [
    "ドテラのオイルが「シングルオイル」と「ブレンドオイル」に分かれる理由と、見分け方",
    "図鑑記事のあるシングルオイル10種とブレンドオイル3種を、香りの系統で並べた一覧",
    "15mLと5mLのサイズ、化粧品・食品添加物・雑貨の区分、キットという選択肢",
  ],
  toc: [
    { id: "types", title: "シングルオイルとブレンドオイルの違い" },
    { id: "singles", title: "シングルオイルの例を香りの系統で見る" },
    { id: "blends", title: "ブレンドオイルの例" },
    { id: "size", title: "サイズ、区分、キットの選択肢" },
    { id: "caution", title: "選ぶとき、使うときの注意点" },
  ],
  sources: [
    {
      title: "シングルオイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/single-oil/",
      note: "シングルオイルの一覧が60件であること、「塗」33件、「食」23件、「香」60件の絞り込み表示、紹介した10種類が掲載され、ラベンダー、ペパーミント、ティーツリー、オレンジが15mLと5mLの2件ずつ載っていること（2026年11月1日確認）",
    },
    {
      title: "ブレンドオイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/blend-oil/",
      note: "ブレンドオイルの一覧が38件であること、オンガード、ドテラセレニティー、ドテラバランスが掲載されていること（2026年11月1日確認）",
    },
    {
      title: "キット＆コレクション製品",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/kit-and-collections/",
      note: "製品情報に「登録キット」と「コレクション」のカテゴリがあること",
    },
    {
      title: "登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/enrollment-kit/",
      note: "オイル登録キット、オイル コレクション登録キットなど、オイルをまとめた登録キットがあること",
    },
    {
      title: "コレクション",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/kit-and-collection/",
      note: "イントロキット、ファミリー エッセンシャルズキットなど、複数のオイルをまとめたコレクションがあること",
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
      note: "果皮を低温圧搾法で抽出すること、香りの表示（クリーン、フレッシュ、シトラス、ブライト）、「香・食」の表示",
    },
    {
      title: "オレンジ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "果皮から抽出すること、香りの表示（スイート、フレッシュ、シトラス）、15mLの「香・食」の表示",
    },
    {
      title: "ベルガモット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/bergamot-15ml/",
      note: "果皮から抽出すること、香りの表示（シトラス、スパイシー、わずかにフローラル）、「香・食」の表示",
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
      note: "同じ名前でも5mLは「塗・香」の表示であること",
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
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "抽出部位が樹脂であること、香りの表示（ウォーム、スパイシー、クリーン）、「塗・香」の表示",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "抽出部位が木部であること、日本特産のヒノキから抽出すること、香りの表示（ウッディー、エアリー、フレッシュ）、5mLで「塗・香」の表示",
    },
    {
      title: "オンガード",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-15ml/",
      note: "ブレンドオイルであること、成分（オレンジ、クローブ、シナモンリーフ、シナモンバーク、ユーカリプタス、ローズマリー）、香りの表示（ウォーム、スパイシー、カンファー、ウッディー）、「香・食」の表示",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "成分にラベンダー、シダーウッド、イランイランなどが含まれること、香りの表示（ウォーム、フローラル、ハーバル）、「塗・香」の表示",
    },
    {
      title: "ドテラバランス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-balance-15ml/",
      note: "成分にココナッツオイル、ブラックスプルース、フランキンセンスなどが含まれること、香りの表示（エアリー、フレッシュ、スイート、ウッディー）、「塗・香」の表示",
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
      note: "オイルが化粧品、食品添加物、雑貨の3種類に分かれ使用方法が異なること、使用方法と注意表示を確認すること、医師または薬剤師への相談、異常が出たときの対応",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "芳香、塗布、摂取の3つの使い方があり、ラベルの使用方法とカテゴリに従って使うこと",
    },
    {
      title: "精油とは",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/oil/",
      note: "精油が植物の花、葉、果皮、心材、樹脂などから抽出した揮発性の芳香物質であるという説明",
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
        ドテラのアロマに興味をもって公式サイトの製品情報を開くと、シングルオイルだけで60件、ブレンドオイルも38件が一覧に並びます（2026年11月時点）。ドテラのオイルの種類を調べ始めた人が、まず立ち止まるところです。
      </p>
      <p>この記事では、シングル、ブレンド、サイズと区分、キットの4つの軸で全体像を整理します。1本ずつの詳しい話は、図鑑記事に渡します。</p>

      <h2 id="types">シングルオイルとブレンドオイルの違い</h2>
      <p>
        ドテラのエッセンシャルオイルは、大きく2つに分かれます。1種類の植物から採った「シングルオイル」と、複数のオイルを組み合わせた「ブレンドオイル」です。公式の製品一覧も、この2つに分かれています。
      </p>
      <DataTable
        caption="シングルオイルとブレンドオイルの見分け方"
        headers={["比べる点", "シングルオイル", "ブレンドオイル"]}
        rows={[
          ["原料", "1種類の植物", "複数のオイルの組み合わせ"],
          ["製品ページの表示", "学名、抽出部位、抽出方法", "成分としてオイルの名前が並ぶ"],
          ["例", "ラベンダー、レモン、フランキンセンス", "オンガード、ドテラセレニティー、ドテラバランス"],
        ]}
      />
      <p>
        シングルオイルの製品ページには、学名と抽出部位が載っています。ラベンダーは花、レモンは果皮、フランキンセンスは樹脂、ヒノキは木部と、採る部位はオイルごとに違います。日本アロマ環境協会も、精油は植物の花、葉、果皮、樹脂などから抽出した芳香物質だと説明しています。
      </p>
      <p>
        ブレンドオイルの製品ページには、成分の欄にオイルの名前が並びます。オンガードなら、オレンジ、クローブ、シナモンリーフ、シナモンバーク、ユーカリプタス、ローズマリーの6つです。
      </p>

      <h2 id="singles">シングルオイルの例を香りの系統で見る</h2>
      <p>ここでは、図鑑記事のある10種類を、香りの系統で4つに分けて並べます。香りの言葉は製品ページの表示です。</p>

      <h3>フローラル（花）</h3>
      <ul>
        <li>
          <Link href="/blog/lavender">ラベンダー</Link>: 花から採るオイル。表示はパウダリー、フローラル、ライトで、おしろいのような甘さをもつ花の香りです。
        </li>
        <li>
          <Link href="/blog/geranium">ゼラニウム</Link>: 全草から採るオイル。表示はハーベイシャス、グリーン、フローラル、スイート、ドライで、草の青さに花の甘さが重なります。
        </li>
      </ul>

      <h3>シトラス（柑橘）</h3>
      <ul>
        <li>
          <Link href="/blog/lemon">レモン</Link>: 果皮を圧搾したオイル。表示はクリーン、フレッシュ、シトラス、ブライトで、明るい皮の香りです。
        </li>
        <li>
          <Link href="/blog/orange">オレンジ</Link>: 同じく果皮から。表示はスイート、フレッシュ、シトラスで、甘さが前に出ます。
        </li>
        <li>
          <Link href="/blog/bergamot">ベルガモット</Link>: 表示はシトラス、スパイシー、わずかにフローラル。柑橘にスパイスの気配が加わります。
        </li>
      </ul>

      <h3>ハーブ（葉と草）</h3>
      <ul>
        <li>
          <Link href="/blog/peppermint">ペパーミント</Link>: 全草から採るオイル。表示はミンティー、フレッシュ、ハーベイシャスで、清涼感のある香りです。
        </li>
        <li>
          <Link href="/blog/tea-tree">ティーツリー</Link>: 葉から採るオイル。表示はハーベイシャス、グリーン、レザリーで、草に革のような渋みが混ざります。
        </li>
        <li>
          <Link href="/blog/eucalyptus">ユーカリプタス</Link>: 葉と茎から採るオイル。製品ページに香りの表示欄はなく、アイコンは「香」だけです。
        </li>
      </ul>

      <h3>樹木・樹脂（木）</h3>
      <ul>
        <li>
          <Link href="/blog/frankincense">フランキンセンス</Link>: 樹脂から採るオイル。表示はウォーム、スパイシー、クリーンで、温かみのある香りです。
        </li>
        <li>
          <Link href="/blog/hinoki">ヒノキ</Link>: 日本のヒノキの木部から採るオイル。表示はウッディー、エアリー、フレッシュで、軽やかな木の香りです。
        </li>
      </ul>

      <h2 id="blends">ブレンドオイルの例</h2>
      <p>ブレンドオイルは公式の一覧に38件あります。図鑑記事のある3つを紹介します。</p>
      <ul>
        <li>
          <Link href="/blog/on-guard">オンガード</Link>: オレンジ、クローブ、シナモンなどを合わせたブレンド。表示はウォーム、スパイシー、カンファー、ウッディーで、スパイスの香りが立ちます。
        </li>
        <li>
          <Link href="/blog/serenity">ドテラセレニティー</Link>: ラベンダー、シダーウッド、イランイランなどを合わせたブレンド。表示はウォーム、フローラル、ハーバルです。
        </li>
        <li>
          <Link href="/blog/balance">ドテラバランス</Link>: ブラックスプルース、フランキンセンスなどをココナッツオイルと合わせたブレンド。表示はエアリー、フレッシュ、スイート、ウッディーです。
        </li>
      </ul>
      <p>
        複数のオイルを合わせる考え方は、<Link href="/blog/blend-basics">香りのブレンドの基本</Link>で解説しています。自分で混ぜる前に、ブレンドオイルで完成した香りを知るのも、よい入り口です。
      </p>

      <h2 id="size">サイズ、区分、キットの選択肢</h2>
      <h3>15mLと5mL</h3>
      <p>ボトルは15mLが中心で、ラベンダー、ペパーミント、ティーツリー、オレンジには5mLもあります。ヒノキは5mLの製品です。</p>

      <h3>区分は製品ごと、容量ごとに違う</h3>
      <p>
        ドテラのオイルは化粧品、食品添加物、雑貨の3つの区分に分かれ、区分によってできる使い方が変わります。製品ページでは「塗」「香」「食」のアイコンで示され、一覧ページでも絞り込めます。シングルオイル60件では「塗」が33件、「食」が23件、「香」は60件すべてです。区分の中身は<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>にまとめています。
      </p>
      <p>
        同じ名前でも、容量で表示が違うことがあります。ペパーミントは15mLが「香・食」、5mLが「塗・香」です。区分が変わることもあり、ユーカリプタスは2026年3月11日の注文分から化粧油から雑貨油になりました。買う前に、その容量の製品ページとラベルを確認しましょう。
      </p>

      <h3>キットでまとめて揃える</h3>
      <p>
        1本ずつ選ぶほかに、公式の製品情報には「登録キット」と「コレクション」のカテゴリがあり、複数のオイルをまとめた選択肢もあります。構成品は各キットのページで確認できます。
      </p>

      <h2 id="caution">選ぶとき、使うときの注意点</h2>
      <CautionBox
        items={[
          "使い方は製品の区分で変わります。肌に使うのは「化粧品」、飲食に使うのは「食品添加物」の表示がある製品に限り、ラベルの使用方法と注意表示どおりに使いましょう。",
          "原液を直接肌につけないでください。目に入れないようにし、肌に異常が出たら使うのをやめて皮膚科に相談します。",
          "製品には販売終了や、名称、区分の変更があります。この記事の表示は2026年11月時点のもので、買う前に製品ページとお手元のラベルで確かめてください。",
          "妊娠中、授乳中の方、持病がある方、薬を飲んでいる方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "子どもやペットの手の届かない場所に保管し、火のそばでは使いません。",
        ]}
      />
      <p>
        子どもとペットについては、<Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>と<Link href="/blog/pets-safety">ペットのいる家でオイルを使うときの注意点</Link>で、年齢や香りとの距離の取り方までまとめています。
      </p>

      <p>
        種類の全体像がつかめたら、次は「最初の1本」です。シングルかブレンドか、15mLか5mLか、どの区分かを見ながら、使いたい場面で選ぶと迷いません。場面ごとの選び方は<Link href="/blog/oils-by-scene">シーン別オイルの選び方</Link>で紹介しています。
      </p>
      <NextStepBox />
    </>
  ),
};
