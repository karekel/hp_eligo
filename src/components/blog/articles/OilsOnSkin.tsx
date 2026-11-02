import Link from "next/link";
import { CautionBox, DataTable, Faq, NextStepBox, Steps, type ArticleContent } from "../ArticleParts";

/** エッセンシャルオイルを肌につけてよいかを判断するための記事 */
export const oilsOnSkin: ArticleContent = {
  summary: [
    "エッセンシャルオイルを肌に直接つけない理由",
    "肌に使える製品かどうかを確かめる手順",
    "肌に控えたいオイル、光毒性、薄めるときの基本",
  ],
  toc: [
    { id: "reason", title: "精油を肌に直接つけない理由" },
    { id: "check", title: "肌に使える製品か確かめる" },
    { id: "avoid", title: "肌に控えたいオイルと光毒性" },
    { id: "dilute", title: "薄め方の基本" },
    { id: "caution", title: "肌に使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "精油とは",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/oil/",
      note: "精油が植物から抽出した揮発性の芳香物質で、成分を高い濃度で含むこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液は刺激が強く皮膚には薄めて使うこと、原液がついたときの対処、光毒性と皮膚刺激の説明と精油の例、お年寄りや既往歴のある人の使用量",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "肌に塗ったあとの皮膚障害の事故、必ず薄めること、製品情報と取扱説明書の確認、塗布した日は紫外線を避けること、症状が軽くても受診すること",
    },
    {
      title: "精油を1%以下に希釈する理由とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年6月16日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/stepup/2448/",
      note: "5%で強い反応が出て1%では出なかった例、枕にラベンダーを垂らす習慣で赤みやはれが出た例",
    },
    {
      title: "化粧品を選ぶ前に知っておきたい知識 最終回 化粧品を安全に選ぶには",
      publisher: "独立行政法人 国民生活センター『国民生活』2025年9月号",
      url: "https://www.kokusen.go.jp/wko/pdf/wko-202509_04.pdf",
      note: "天然だから安全とは言えないこと",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "避ける部位、乳液やクリームに加える使い方、カテゴリに従うこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせて使うこと、赤味、はれ、かゆみなどが出たら中止して相談すること、医師または薬剤師に相談する人",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "注意文の「必要に応じてキャリアオイル等で希釈」、初回にパッチテスト等を行うこと",
    },
    {
      title: "ペパーミント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "15mLの製品ページの「香・食」の表示",
    },
    {
      title: "ペパーミント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLの製品ページの「塗・香」の表示",
    },
    {
      title: "ティーツリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/tea-tree-15ml/",
      note: "製品ページの「塗・香」の表示",
    },
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "「香」のみの表示、肌や粘膜につけないこと",
    },
    {
      title: "ユーカリプタス カテゴリ変更のお知らせ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）（2026年3月10日）",
      url: "https://www.doterra-info.jp/media/3078616/",
      note: "2026年3月11日の注文から化粧油が雑貨油に変わったこと",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "製品ページの「香・食」の表示",
    },
    {
      title: "ベルガモット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/bergamot-15ml/",
      note: "製品ページの「香・食」の表示",
    },
    {
      title: "ドテラシトラスブリス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-citrus-bliss-15ml/",
      note: "柑橘を含むブレンドで「塗・香」の表示があること、塗布後12時間ほど直射日光を避ける注意文",
    },
    {
      title: "アロマの種類と効果を徹底解説！購入時のポイントも紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2062/",
      note: "ペパーミント、ティートリー、ユーカリは皮膚刺激があり肌への使用を控えること",
    },
    {
      title: "アロマテラピー検定公式テキスト（2020年6月改訂版）について",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/licences/aroma/text/pdf/text_info_202006.pdf",
      note: "事前のパッチテストから低い濃度で試す案内に変わったこと、植物油などの油性の材料と無水エタノール以外には溶けにくいこと",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "植物性オイルで1%以下、顔は0.5%以下に薄めること、肌の弱い人は低い濃度で試すこと",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "原液を皮膚に塗ることをすすめていないこと、3歳未満と3歳以上12歳以下の目安",
    },
    {
      title: "消費者庁からの精油の使い方に関する注意喚起について",
      publisher: "公益社団法人 日本アロマ環境協会（2025年4月2日）",
      url: "https://www.aromakankyo.or.jp/aeaj-news/detail/2296",
      note: "オイルがついたタオルを乾燥機にかけないこと",
    },
  ],
  Body: () => (
    <>
      <p>
        エッセンシャルオイルは肌につけていいのか、迷う方もいると思います。答えは、原液を直接つけないことが基本です。肌に使うなら、肌用の表示がある製品を選び、植物油で薄めます。
      </p>
      <p>
        この記事では、精油の使い方のうち、肌に使ってよいかを判断する順番をまとめます。
      </p>

      <h2 id="reason">精油を肌に直接つけない理由</h2>
      <p>
        精油は、香りの成分を高い濃度で含む液体です。日本アロマ環境協会は、原液は刺激が強いため、皮膚には薄めて使うよう案内しています。消費者庁の消費者安全調査委員会も、肌に塗ったあとに皮膚障害などが起きた事故が散見されるとして、必ず薄めるよう呼びかけています。
      </p>
      <p>
        濃さによって反応が変わる例もあります。協会の記事は、アロマセラピストのパッチテストで、ゼラニウムやレモンなどが5%で強く反応し、1%では反応しなかった例を紹介しています。枕にラベンダーを数滴垂らす習慣を続けて、首の赤みや顔のはれが出た例もあります。天然のものだから肌に合うとは限りません。
      </p>
      <p>
        案内の書き方には違いがあります。ドテラの製品の注意文は「必要に応じて」薄めるとしていますが、協会と消費者庁は薄めて使うとしています。この記事では、より慎重な協会と消費者庁の案内に合わせて、必ず薄めると書きます。
      </p>

      <h2 id="check">肌に使える製品か確かめる</h2>
      <p>薄める前に、そのオイルを肌に使ってよい製品かを確かめます。ドテラのオイルなら、次の順番です。</p>
      <Steps
        steps={[
          { title: "ラベルの区分を見る", text: "肌に使うのは「化粧品」の表示がある製品だけです。「食品添加物」や「雑貨」の表示なら、肌に使いません。" },
          { title: "製品ページの表示を見る", text: "「塗」の表示が目安です。「香」や「食」だけのときは、肌に塗る案内がありません。" },
          { title: "容量まで確かめる", text: "ペパーミントは、15mLが「香・食」、5mLが「塗・香」です。名前だけで判断しません。" },
          { title: "買い替えたら見直す", text: "区分は変わることがあります。ユーカリプタスは、2026年3月11日の注文分から雑貨油になりました。" },
        ]}
      />
      <p>
        ほかのメーカーの製品も同じです。消費者庁の資料は、製品情報の表記があるものを選び、成分や使い方を説明書で確かめるよう案内しています。区分の考え方は<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>にあります。
      </p>

      <h2 id="avoid">肌に控えたいオイルと光毒性</h2>
      <p>
        協会は、皮膚刺激に注意が必要な精油の例として、イランイラン、ジャスミン、ティートリー、ブラックペッパー、ペパーミント、メリッサ、ユーカリを挙げています。このうちペパーミント、ティートリー、ユーカリは、肌への使用を控えるとしています。
      </p>
      <DataTable
        caption="製品ページの表示と、この記事での扱い"
        headers={["オイル", "表示", "この記事での扱い"]}
        rows={[
          ["ティーツリー 15mL", "塗・香", "協会の案内に合わせて、肌に使う案内はしない"],
          ["ペパーミント 15mL", "香・食", "肌に使わない"],
          ["ペパーミント 5mL", "塗・香", "協会の案内に合わせて、肌に使う案内はしない"],
          ["ユーカリプタス 15mL", "香", "肌につけない製品。香りで楽しむ"],
          ["レモン、ベルガモット 15mL", "香・食", "肌に塗る案内がない。香りで楽しむ"],
        ]}
      />
      <h3>光毒性とは</h3>
      <p>
        光毒性は、日光などの強い紫外線に反応して、肌に炎症などを起こす性質です。協会は、グレープフルーツ、ベルガモット、レモンなどを例に挙げ、日中の使用に注意するよう案内しています。
      </p>
      <p>
        単品の柑橘の多くは「香・食」の表示で、肌に塗る案内がありません。ドテラシトラスブリスのように、柑橘を含み「塗・香」の表示があるブレンドもあります。こうした製品を肌に使うときは、注意文のとおり、塗布後12時間ほど直射日光を避けます。
      </p>

      <h2 id="dilute">薄め方の基本</h2>
      <p>
        肌に使うと決めたら、植物油で薄めます。協会によると、精油は油性の材料と無水エタノール以外には溶けにくく、水では薄めたことになりません。濃度の目安は、ボディ用で1%以下、顔用で0.5%以下です。肌の弱い方は、さらに低い濃度から試します。
      </p>
      <p>
        滴数の計算と植物油の選び方は、<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と濃度の計算</Link>にまとめました。
      </p>
      <p>
        試し方にも違いがあります。ドテラの注意文は、初回にパッチテスト等を行うとしています。協会は2020年に、事前のパッチテストをやめ、低い濃度で試す案内に変えました。どちらの場合も、いきなり広い範囲に使わないでください。
      </p>

      <h2 id="caution">肌に使うときの注意点</h2>
      <CautionBox
        items={[
          "原液が肌についたら、清潔な大量の流水ですぐに洗い流します。赤み、刺激、発疹などがあれば受診してください。",
          "赤み、はれ、かゆみ、刺激、色抜け、黒ずみなどが出たら、すぐに使うのをやめて皮膚科専門医等に相談してください。症状が軽いと思っても、悪化する場合があります。",
          "目のまわり、目と耳の中、傷や炎症のある肌には使わないでください。",
          "3歳未満の子どもの肌には使わないでください。3歳以上12歳以下は、大人の使用量の10分の1程度から始め、多くても2分の1程度までにします。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。",
          "お年寄りや既往歴のある方は、基準の半分以下の量で試してください。",
          "オイルがついたタオルは、乾燥機にかけないでください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ラベンダーなら原液でつけてもいいですか？",
            a: "協会と消費者庁の案内は、オイルの種類を分けずに薄めて使うことです。ラベンダーも原液ではつけず、「化粧品」の表示を確かめて薄めましょう。",
          },
          {
            q: "持っているクリームに混ぜてもいいですか？",
            a: "ドテラの案内には、乳液やクリームに加える使い方があります。「化粧品」の表示がある製品に限り、顔に使うものは特に少量にしましょう。",
          },
        ]}
      />

      <p>
        まず手元のボトルの表示を確かめてください。迷うときは、<Link href="/blog/no-diffuser">肌につけずに香りを楽しむ方法</Link>から始めましょう。
      </p>
      <NextStepBox />
    </>
  ),
};
