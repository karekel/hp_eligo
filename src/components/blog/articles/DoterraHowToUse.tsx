import Link from "next/link";
import { ArticleFigure, CautionBox, DataTable, Faq, NextStepBox, ProductPhotos, Steps, type ArticleContent } from "../ArticleParts";

/** ドテラの製品ページの「塗・香・食」の表示の見方と、最初の一歩をまとめた記事 */
export const doterraHowToUse: ArticleContent = {
  summary: [
    "「塗・香・食」の表示の読み方",
    "同じ名前でも容量で表示が変わる例と、表示ごとの使い方の基本",
    "手元の1本で今日からできる、香りから始める最初の一歩",
  ],
  toc: [
    { id: "marks", title: "「塗・香・食」の表示とは" },
    { id: "examples", title: "表示の例｜同じ名前でも容量で変わる" },
    { id: "uses", title: "ドテラのオイルの使い方｜表示ごとの基本" },
    { id: "first", title: "最初の一歩｜香りから始める" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "芳香、塗布、摂取の3つの方法、水を用いるディフューザーとコットンやティッシュの使い方、塗布の希釈、1〜2滴、4〜6時間の間隔、部位と避ける部位、摂取は香料としての使用でラベルに従うこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "オイルが化粧品、食品添加物、雑貨の3種類に分かれること、届いたら使用方法と注意表示を確認すること、少量から始めること、医師または薬剤師への相談、肌の異常が出たときの対応",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "15mLの製品ページの「塗・香」の表示、初回のパッチテストなどの注意",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "15mLの製品ページの「香・食」の表示",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "15mLの製品ページの「香・食」の表示",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLの製品ページの「塗・香」の表示",
    },
    {
      title: "オレンジ（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "15mLの製品ページの「香・食」の表示",
    },
    {
      title: "オレンジ（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-5ml/",
      note: "5mLの製品ページの「塗・香」の表示",
    },
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "製品ページの「香」のみの表示",
    },
    {
      title: "ユーカリプタス カテゴリ変更のお知らせ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社・2026年3月10日）",
      url: "https://www.doterra-info.jp/media/3078616/",
      note: "2026年3月11日以降の注文から化粧油から雑貨油へ変わったこと",
    },
    {
      title: "アロマタッチ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/aromatouch-15ml/",
      note: "製品ページの「塗」のみの表示",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "水タンクにオイルを5〜10滴垂らすこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を皮膚につけないこと、ペパーミント、ティートリー、ユーカリを皮膚刺激の例に挙げていること、目に入れないこと、火気、手の届かない場所での保管、光毒性の説明",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "薄めたものでも飲用、食品との摂取、うがいをすすめないこと",
    },
  ],
  Body: () => (
    <>
      <p>
        ドテラのオイルの使い方で最初に迷うのは、「塗」「香」「食」の表示ではないでしょうか。香りを楽しむだけのつもりでも、この表示を読めるようになると、手元の1本でできることがはっきりします。
      </p>
      <p>
        最後に確かめるのは、お手元のラベルです。ドテラ以外のオイルも含めた使い道の全体は、<Link href="/blog/how-to-use-aroma-oils">エッセンシャルオイルやアロマオイルの使い方</Link>で紹介しています。
      </p>

      <h2 id="marks">「塗・香・食」の表示とは</h2>
      <p>
        ドテラは、オイルの使い方を芳香、塗布、摂取の3つに大きく分け、製品ごとに使用方法が異なると説明しています。これに合わせて、各製品に「塗」「香」「食」の表示があります。
      </p>
      <DataTable
        caption="表示の読み方"
        headers={["表示", "読み方"]}
        rows={[
          ["香", "香りを楽しむ使い方（芳香）の案内がある"],
          ["塗", "肌に塗る使い方（塗布）の案内がある"],
          ["食", "料理や飲み物の香りづけ（摂取）の案内がある"],
        ]}
      />
      <p>
        読み方の基本は、「書かれていない文字の使い方はしない」です。「香・食」の製品に肌に塗る使い方はなく、「塗・香」の製品に飲食の使い方はありません。
      </p>

      <h2 id="examples">表示の例｜同じ名前でも容量で変わる</h2>
      <p>実際の表示を並べてみます。</p>
      <DataTable
        caption="表示の例"
        headers={["製品", "容量", "表示"]}
        rows={[
          ["ラベンダー", "15mL", "塗・香"],
          ["レモン", "15mL", "香・食"],
          ["ペパーミント", "15mL", "香・食"],
          ["ペパーミント", "5mL", "塗・香"],
          ["オレンジ", "15mL", "香・食"],
          ["オレンジ", "5mL", "塗・香"],
          ["ユーカリプタス", "15mL", "香"],
          ["アロマタッチ", "15mL", "塗"],
        ]}
      />
      <ProductPhotos names={["ラベンダー", "レモン", "ペパーミント", "オレンジ", "ユーカリプタス", "アロマタッチ"]} />
      <p>
        注目したいのは、ペパーミントとオレンジです。同じ名前でも、15mLと5mLで表示が違います。「ペパーミントは食べられる」と名前で覚えず、ボトルごとに確かめましょう。
      </p>
      <p>
        表示は変わることもあります。ユーカリプタスは2026年3月11日以降の注文から、化粧油から雑貨油に変わりました。人から聞いた情報や古いメモより、いま手元にあるボトルのラベルを優先してください。
      </p>

      <h2 id="uses">ドテラのオイルの使い方｜表示ごとの基本</h2>
      <h3>「香」がある製品</h3>
      <p>
        ドテラは、水を用いるディフューザーが望ましいとしていますが、コットンやティッシュに数滴垂らす方法も紹介しています。道具なしの方法は<Link href="/blog/no-diffuser">ディフューザーがなくても大丈夫！</Link>に、部屋に広げる方法は<Link href="/blog/diffuser-guide">ディフューザーの選び方</Link>にまとめました。
      </p>
      <h3>「塗」がある製品</h3>
      <p>
        「塗」の表示がある製品は、ラベルに従って肌に使えます。ドテラは、敏感肌、子どもの肌、初めて肌に使うオイルは、ドテラ ココナッツオイルのようなキャリアオイルで薄めるよう案内しています。初回は1〜2滴で、4〜6時間ほど間隔をあけます。目のまわり、目と耳の中、傷や炎症のある肌は避けます。
      </p>
      <ProductPhotos names={["ドテラ ココナッツオイル"]} />
      <p>
        一方で、日本アロマ環境協会は、原液を皮膚につけないよう案内し、ペパーミント、ティートリー、ユーカリを皮膚刺激の例に挙げています。別の見解もあるので、最後はご自身で判断してください。濃度の計算は<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方</Link>をご覧ください。
      </p>
      <h3>「食」がある製品</h3>
      <p>
        ドテラは、摂取を香料として料理の風味をよくする使い方と説明しています。ラベルに書かれた使用方法を守ります。一方で、日本アロマ環境協会は、薄めても飲用や食品と一緒にとることをすすめていません。別の見解もあるので、最後はご自身で判断してください。「食」の表示がある製品に限った話として、詳しくは<Link href="/blog/doterra-drinkable">こちらの記事</Link>で確かめてください。
      </p>

      <h2 id="first">最初の一歩｜香りから始める</h2>
      <p>手元の1本で、次の順に進めましょう。</p>
      <Steps
        steps={[
          { title: "製品名と容量を確かめる", text: "ボトルのラベルで、名前と15mLか5mLかを見ます。" },
          { title: "表示と使用方法を読む", text: "製品ページの表示と、ラベルの使用方法、注意表示を確認します。" },
          { title: "ティッシュに1滴垂らす", text: "「香」の表示があれば1滴垂らしてデスクなどに置き、感じたことをメモします。" },
          { title: "ディフューザーを試す", text: "お持ちの場合は、機種の説明書に従います。ラルツなら5〜10滴の範囲で、5滴から試します。" },
        ]}
      />
      <ArticleFigure src="/assets/blog/inline/doterra-how-to-use-tissue-7563fecd.jpg" alt="1滴垂らしたティッシュをデスクに置き、ノートとペンを用意した様子" caption="ティッシュに1滴垂らしてデスクなどに置き、感じたことをメモします" />
      <p>「香」の表示がない製品は、ラベルの使用方法に従ってください。迷った製品は、確かめるまで使わないのが確実です。</p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "使い方は製品の区分で変わります。お手元のラベルの使用方法と注意表示を確認してください。",
          "協会は、原液を直接肌につけないよう案内しています。目に入れないでください。",
          "最初は少量から始めます。赤み、はれ、かゆみ、刺激などが出たら、すぐに使用をやめて皮膚科専門医などに相談してください。",
          "柑橘系のオイルには、日光などの強い紫外線で肌に炎症を起こす性質（光毒性）を持つものがあります。肌につけるものは製品の注意表示に従ってください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "オイルには引火性があります。火のそばで使わないでください。",
          "子どもやペットの手の届かない場所に保管しましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "製品ページとラベルの内容が違うときは？",
            a: "お手元のラベルを優先し、わからないときはドテラのお客様相談室に確認してください。購入した時期によって、表示が変わっていることがあります。",
          },
          {
            q: "表示が多いオイルのほうがよいのですか？",
            a: "表示の数は使い方の種類を示すもので、よしあしを示すものではありません。自分が使いたい方法の表示があるかを見ましょう。",
          },
        ]}
      />

      <p>
        まず手元の1本のラベルを見て、「香」の表示があれば、ティッシュに1滴から試してみてください。製品の全体像は<Link href="/blog/doterra-oil-lineup">ドテラのオイルの種類</Link>、ディフューザーは<Link href="/blog/laluz-diffuser">ラルツディフューザーの使い方</Link>で紹介しています。
      </p>
      <NextStepBox />
    </>
  ),
};
