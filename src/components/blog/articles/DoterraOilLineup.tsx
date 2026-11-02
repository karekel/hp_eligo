import Link from "next/link";
import { CautionBox, DataTable, NextStepBox, type ArticleContent } from "../ArticleParts";

/** ドテラのオイルの全体像（シングル、ブレンド、サイズと区分、キット）を整理する記事 */
export const doterraOilLineup: ArticleContent = {
  summary: [
    "ドテラのオイルが「シングルオイル」と「ブレンドオイル」に分かれる理由と、見分け方",
    "シングルオイル15種とブレンドオイル3種を、香りの系統で並べた一覧",
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
      note: "シングルオイルの一覧が60件であること、紹介した10種類が掲載され、ラベンダー、ペパーミント、ティーツリー、オレンジが15mLと5mLの2件ずつ載っていること（2026年11月1日時点）",
    },
    {
      title: "ブレンドオイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/blend-oil/",
      note: "ブレンドオイルの一覧が38件であること、オンガード、ドテラセレニティー、ドテラバランスが掲載されていること（2026年11月1日時点）",
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
      title: "グレープフルーツ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/grapefruit-15ml/",
      note: "果皮を低温圧搾法で抽出すること、香りの表示（シトラス、フローラル、フルーティー）",
    },
    {
      title: "ローズマリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/rosemary-15ml/",
      note: "抽出部位が花と葉であること、香りの表示（カンファー、ハーベイシャス）",
    },
    {
      title: "レモングラス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemongrass-15ml/",
      note: "抽出部位が葉であること、香りの表示（シトラス、ハーベイシャス、スモーキー）",
    },
    {
      title: "マジョラム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/marjoram-15ml/",
      note: "抽出部位が葉であること、香りの表示（ウォーム、ハーベイシャス、ウッディー）",
    },
    {
      title: "サイプレス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/cypress-15ml/",
      note: "抽出部位が枝と葉であること、香りの表示（クリーン、フレッシュ、ウッディー、ハーベイシャス）",
    },
    {
      title: "オンガード",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-15ml/",
      note: "ブレンドオイルであること、成分にオレンジ、クローブ、シナモンが含まれること、香りの表示（ウォーム、スパイシー、カンファー、ウッディー）、「香・食」の表示",
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
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、目に入れないこと、火気への注意、子どもやペットの手の届かない所に保管すること",
    },
  ],
  Body: () => (
    <>
      <p>
        ドテラのアロマに興味をもって製品の一覧を開くと、シングルオイルだけで60件、ブレンドオイルも38件が並びます（2026年11月時点）。
      </p>
      <p>この記事では、シングル、ブレンド、サイズと区分、キットの4つの軸で全体像を整理します。</p>

      <h2 id="types">シングルオイルとブレンドオイルの違い</h2>
      <p>
        ドテラのエッセンシャルオイルは、大きく2つに分かれます。1種類の植物から採った「シングルオイル」と、複数のオイルを組み合わせた「ブレンドオイル」です。
      </p>
      <DataTable
        caption="シングルオイルとブレンドオイルの見分け方"
        headers={["比べる点", "シングルオイル", "ブレンドオイル"]}
        rows={[
          ["原料", "1種類の植物", "複数のオイルの組み合わせ"],
          ["表示", "学名、抽出部位、抽出方法", "成分としてオイルの名前が並ぶ"],
          ["例", "ラベンダー、レモン、フランキンセンス", "オンガード、ドテラセレニティー、ドテラバランス"],
        ]}
      />
      <p>
        シングルオイルには、学名と抽出部位の表示があります。
      </p>

      <h2 id="singles">シングルオイルの例を香りの系統で見る</h2>
      <p>「表示」は、ドテラが示す香りの言葉です。</p>

      <h3>フローラル（花）</h3>
      <ul>
        <li>
          <Link href="/blog/lavender">ラベンダー</Link>: 花から採るオイル。表示はパウダリー、フローラル、ライト。
        </li>
        <li>
          <Link href="/blog/geranium">ゼラニウム</Link>: 全草から採るオイル。表示はハーベイシャス、グリーン、フローラル、スイート、ドライ。
        </li>
      </ul>

      <h3>シトラス（柑橘）</h3>
      <ul>
        <li>
          <Link href="/blog/lemon">レモン</Link>: 果皮を圧搾したオイル。表示はクリーン、フレッシュ、シトラス、ブライト。
        </li>
        <li>
          <Link href="/blog/orange">オレンジ</Link>: 果皮から採るオイル。表示はスイート、フレッシュ、シトラス。
        </li>
        <li>
          <Link href="/blog/bergamot">ベルガモット</Link>: 果皮から採るオイル。表示はシトラス、スパイシー、わずかにフローラル。
        </li>
        <li>
          <Link href="/blog/grapefruit">グレープフルーツ</Link>: 果皮を低温圧搾したオイル。表示はシトラス、フローラル、フルーティー。
        </li>
      </ul>

      <h3>ハーブ（葉と草）</h3>
      <ul>
        <li>
          <Link href="/blog/peppermint">ペパーミント</Link>: 全草から採るオイル。表示はミンティー、フレッシュ、ハーベイシャス。
        </li>
        <li>
          <Link href="/blog/tea-tree">ティーツリー</Link>: 葉から採るオイル。表示はハーベイシャス、グリーン、レザリー。
        </li>
        <li>
          <Link href="/blog/eucalyptus">ユーカリプタス</Link>: 葉と茎から採るオイル。香りの表示はなく、アイコンは「香」だけです。
        </li>
        <li>
          <Link href="/blog/rosemary">ローズマリー</Link>: 花と葉から採るオイル。表示はカンファー、ハーベイシャス。
        </li>
        <li>
          <Link href="/blog/lemongrass">レモングラス</Link>: 葉から採るオイル。表示はシトラス、ハーベイシャス、スモーキー。
        </li>
        <li>
          <Link href="/blog/marjoram">マジョラム</Link>: 葉から採るオイル。表示はウォーム、ハーベイシャス、ウッディー。
        </li>
      </ul>

      <h3>樹木・樹脂（木）</h3>
      <ul>
        <li>
          <Link href="/blog/frankincense">フランキンセンス</Link>: 樹脂から採るオイル。表示はウォーム、スパイシー、クリーン。
        </li>
        <li>
          <Link href="/blog/hinoki">ヒノキ</Link>: 日本のヒノキの木部から採るオイル。表示はウッディー、エアリー、フレッシュ。
        </li>
        <li>
          <Link href="/blog/cypress">サイプレス</Link>: 枝と葉から採るオイル。表示はクリーン、フレッシュ、ウッディー、ハーベイシャス。
        </li>
      </ul>

      <h2 id="blends">ブレンドオイルの例</h2>
      <ul>
        <li>
          <Link href="/blog/on-guard">オンガード</Link>: オレンジ、クローブ、シナモンなどを合わせたブレンド。表示はウォーム、スパイシー、カンファー、ウッディー。
        </li>
        <li>
          <Link href="/blog/serenity">ドテラセレニティー</Link>: ラベンダー、シダーウッド、イランイランなどを合わせたブレンド。表示はウォーム、フローラル、ハーバルです。
        </li>
        <li>
          <Link href="/blog/balance">ドテラバランス</Link>: ブラックスプルース、フランキンセンスなどをココナッツオイルと合わせたブレンド。表示はエアリー、フレッシュ、スイート、ウッディーです。
        </li>
      </ul>

      <h2 id="size">サイズ、区分、キットの選択肢</h2>
      <h3>15mLと5mL</h3>
      <p>ボトルは15mLが中心で、ラベンダー、ペパーミント、ティーツリー、オレンジには5mLもあります。ヒノキは5mLの製品です。</p>

      <h3>区分は製品ごと、容量ごとに違う</h3>
      <p>
        ドテラのオイルは化粧品、食品添加物、雑貨の3つの区分に分かれ、区分によってできる使い方が変わります。使い方は「塗」「香」「食」のアイコンで示され、製品の一覧でも絞り込めます。区分の中身は<Link href="/blog/doterra-drinkable">ドテラのオイルは飲める？</Link>にまとめています。
      </p>
      <p>
        同じ名前でも、容量で表示が違うことがあります。ペパーミントは15mLが「香・食」、5mLが「塗・香」です。区分が変わることもあり、ユーカリプタスは2026年3月11日の注文分から化粧油から雑貨油になりました。買う前に、その容量の製品ページとラベルを確認しましょう。読み方は<Link href="/blog/doterra-how-to-use">ドテラのオイルの使い方</Link>へ。
      </p>

      <h3>キットでまとめて揃える</h3>
      <p>
        1本ずつ選ぶほかに、「登録キット」と「コレクション」のカテゴリがあり、複数のオイルをまとめた選択肢もあります。構成品は各キットのページで確認できます。
      </p>

      <h2 id="caution">選ぶとき、使うときの注意点</h2>
      <CautionBox
        items={[
          "使い方は製品の区分で変わります。肌に使うのは「化粧品」、飲食に使うのは「食品添加物」の表示がある製品に限り、ラベルの使用方法と注意表示どおりに使いましょう。",
          "「塗」の表示がある製品は肌に使えます。敏感肌、子どもの肌、初めて肌に使うオイルはキャリアオイルで薄めます。協会は原液を肌につけないよう案内しています。別の見解もあるので、最後はご自身で判断してください。目に入れないようにし、肌に異常が出たら使うのをやめて皮膚科に相談します。",
          "製品には販売終了や、名称、区分の変更があります。この記事の表示は2026年11月時点のもので、買う前に製品ページとお手元のラベルで確かめてください。",
          "妊娠中、授乳中の方、持病がある方、薬を飲んでいる方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "子どもやペットの手の届かない場所に保管し、火のそばでは使いません。",
        ]}
      />
      <p>
        子どもとペットについては、<Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>と<Link href="/blog/pets-safety">ペットのいる家でオイルを使うときの注意点</Link>で確認できます。
      </p>

      <p>
        種類の全体像がつかめたら、次は「最初の1本」です。使いたい場面で選ぶと迷いません。場面ごとの選び方は<Link href="/blog/oils-by-scene">シーン別オイルの選び方</Link>で紹介しています。ほかのメーカーも含めて比べるときは<Link href="/blog/choosing-oil-brands">メーカーの選び方</Link>へ。
      </p>
      <NextStepBox />
    </>
  ),
};
