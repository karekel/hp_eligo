import Link from "next/link";
import { CautionBox, DataTable, Faq, NextStepBox, ProductPhotos, Steps, type ArticleContent } from "../ArticleParts";

/** 日本で買えるドテラのスキンケア製品（化粧水、クリーム、ハンド＆ボディローション、リップなど）を一覧にした記事 */
export const doterraSkincare: ArticleContent = {
  summary: [
    "ドテラのスキンケア製品の種類、容量、価格（2026年11月時点、税込）",
    "化粧水からクリーム、ハンド＆ボディローション、リップまで、表示どおりの使い方",
    "使う前のパッチテストと、販売を終えた日焼け止めのこと",
  ],
  toc: [
    { id: "kinds", title: "ドテラの化粧品にはどんな種類がある？" },
    { id: "face", title: "顔のスキンケア｜IKISEの化粧水、美容液、クリーム" },
    { id: "body", title: "手と体のケア｜ハンド＆ボディローション、ボディバター、リップ" },
    { id: "sun", title: "日焼け止めは2026年11月時点で販売終了" },
    { id: "caution", title: "使う前と使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "IKISE",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/ikise/",
      note: "IKISEのクレンジング、洗顔、化粧水、美容液、クリーム、ボディ、ヘアの製品が並ぶこと（2026年11月時点）",
    },
    {
      title: "ボディケア",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/body-care/",
      note: "ハンド＆ボディローション、ローズハンドローション、ボディバター、ボディミスト、ベース クリームなどが並ぶこと",
    },
    {
      title: "ドテラスパ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/doterra-spa-products/",
      note: "ドテラスパのボディバター、ボディミスト、リップバームなどが並ぶこと",
    },
    {
      title: "IKISE クレンジング オイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-cleansing-oil/",
      note: "120mL、会員価格と参考小売価格（税込）、乾いた顔になじませて洗い流す使い方、香り（プチグレン、ライム、リツェア）、化粧品の使用上の注意",
    },
    {
      title: "IKISE クレンジング バーム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-cleansing-balm/",
      note: "70g、会員価格と参考小売価格（税込）、チェリー粒大を乾いた手で顔全体にのばしてぬるま湯で洗い流す使い方",
    },
    {
      title: "IKISE フェイス ウォッシュ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-face-wash/",
      note: "100g、会員価格と参考小売価格（税込）、パール粒大をぬるま湯で泡立てて洗う使い方",
    },
    {
      title: "IKISE ブースター オイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-booster-oil/",
      note: "27mL、会員価格と参考小売価格（税込）、洗顔後に1〜2滴をなじませてから化粧水を使う順番、香り（ゼラニウム）",
    },
    {
      title: "IKISE ローション ＜クリア ＆ ライト＞",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-lotion-clear-and-light/",
      note: "化粧水であること、150mL、会員価格と参考小売価格（税込）、さらっとした使用感、500円玉大を顔全体になじませる使い方、香り（ネロリ、ベルガモット）",
    },
    {
      title: "IKISE ローション ＜スムーズ ＆ リッチ＞",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-lotion-smooth-and-rich/",
      note: "化粧水であること、150mL、会員価格と参考小売価格（税込）、しっとりした使用感、香り（フランキンセンス）",
    },
    {
      title: "IKISE デュアル セラム ＜クリア ＆ ライト＞",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-dual-serum-clear-and-light/",
      note: "2層タイプの美容液であること、28mL、会員価格と参考小売価格（税込）、よく振って2〜3プッシュを顔から首元になじませる使い方",
    },
    {
      title: "IKISE デュアル セラム ＜スムーズ ＆ リッチ＞",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-dual-serum-smooth-and-rich/",
      note: "2層タイプの美容液であること、28mL、会員価格と参考小売価格（税込）",
    },
    {
      title: "IKISE デイ ＆ ナイト フェイス クリーム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-day-and-night-face-cream/",
      note: "45g、会員価格と参考小売価格（税込）、朝と夜に使えること、小豆粒大を顔全体から首元になじませる使い方、香り（ブンタン、コパイバ）",
    },
    {
      title: "IKISE インテンシブ アイ クリーム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-intensive-eye-cream/",
      note: "20g、会員価格と参考小売価格（税込）、米粒大を朝と夜のお手入れの最後に目もとになじませる使い方、香り（ローズ）",
    },
    {
      title: "IKISE スリーピング マスク",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-sleeping-mask/",
      note: "48g、会員価格と参考小売価格（税込）、夜のスキンケアの最後にパール2粒大をなじませて洗い流さない使い方、香り（フランキンセンス、ベチバー）",
    },
    {
      title: "IKISE ベース クリーム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-base-cream/",
      note: "無香料のボディ用クリームであること、100g、会員価格と参考小売価格（税込）、オイルを混ぜるときの使い方",
    },
    {
      title: "ハンド＆ボディローション",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hand-and-body-lotion/",
      note: "200mL、会員価格と参考小売価格（税込）、手や全身にのばす使い方、化粧品カテゴリのオイルを手のひらで混ぜる使い方、化粧品の使用上の注意（パッチテスト、異常が出たときの中止と相談）",
    },
    {
      title: "ハンド&ボディローション（3 本）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hand-and-body-lotion-3pk/",
      note: "200mL×3本、会員価格と参考小売価格（税込）",
    },
    {
      title: "ローズハンドローション",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/rose-hand-lotion/",
      note: "95g、会員価格と参考小売価格（税込）、ローズのオイルが入ること、売上金が全額ドテラ・ヒーリングハンズ基金に寄付されること",
    },
    {
      title: "ドテラスパ リプレニッシング ボディバター",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-spa-replenishing-body-butter/",
      note: "198g、会員価格と参考小売価格（税込）、全身や手、ひじ、ひざになじませる使い方、オレンジ、ダグラスファー、フランキンセンスのオイルが入ること",
    },
    {
      title: "ドテラスパ ハイドレイティング ボディミスト",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-spa-hydrating-body-mist/",
      note: "125mL、会員価格と参考小売価格（税込）、入浴後などに肌に直接スプレーする使い方、逆さでも噴霧できること、ビューティフルの香り",
    },
    {
      title: "ドテラスパ リップバーム オリジナル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-spa-lip-balm-original/",
      note: "4.5g、会員価格と参考小売価格（税込）、乾燥が気になるときに唇に塗る使い方、オレンジとペパーミントのオイル",
    },
    {
      title: "ドテラスパ リップバームN トロピカル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-spa-lip-balm-n-tropical/",
      note: "4.5g、会員価格と参考小売価格（税込）、ライム、クレメンタイン、イランイランのオイル",
    },
    {
      title: "ドテラスパ リップバームN ハーバル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-spa-lip-balm-n-herbal/",
      note: "4.5g、会員価格と参考小売価格（税込）、レモンバーベナ、マジョラム、スペアミントのオイル",
    },
    {
      title: "ドテラスパ リップバーム（3 種セット）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-spa-lip-balm-original-3type/",
      note: "4.5g×3本、会員価格と参考小売価格（税込）",
    },
    {
      title: "販売終了：ドテラ ミネラル サンスクリーン モイスチャライザー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2025年6月3日）",
      url: "https://www.doterra-info.jp/media/2843042/",
      note: "ドテラ ミネラル サンスクリーン モイスチャライザーの販売終了",
    },
    {
      title: "販売終了：サンダルウッド、ドテラ ミネラル サンスクリーン ローション",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2025年7月3日）",
      url: "https://www.doterra-info.jp/media/2850112/",
      note: "ドテラ ミネラル サンスクリーン ローションの販売終了",
    },
    {
      title: "ドテラ ミネラル サンスクリーン モイスチャライザー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-mineral-sunscreen-moisturizer/",
      note: "50g、SPF28・PA+++の表示、限定販売を終えたこと",
    },
    {
      title: "ドテラ ミネラル サンスクリーン ローション",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-mineral-sunscreen-lotion/",
      note: "150g、SPF30・PA+++の表示、限定販売を終えたこと",
    },
    {
      title: "エッセンシャル クレンジングオイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/essential-cleansing-oil/",
      note: "2026年2月3日に販売を終えたこと",
    },
    {
      title: "化粧品の効能効果の範囲について",
      publisher: "新潟県 福祉保健部 感染症対策・薬務課",
      url: "https://www.pref.niigata.lg.jp/sec/iyakukokuho/202011204.html",
      note: "化粧品の効能の範囲が厚生労働省の通知で56項目に定められていること（日やけを防ぐ、皮膚にうるおいを与える、口唇の乾燥を防ぐなど）",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、目に入れないこと、柑橘の精油の光毒性、皮膚刺激に注意が必要な精油",
    },
  ],
  Body: () => (
    <>
      <p>
        ドテラ（dōTERRA）は、エッセンシャルオイルのほかに、化粧水やクリームなどのスキンケア製品も扱っています。2026年11月時点で日本で買える製品を、顔用と、手や体用に分けて紹介します。
      </p>
      <p>
        容量と価格は2026年11月時点のもので、価格はすべて税込です。製品は入れ替わるので、買う前に製品ページで確かめてください。
      </p>

      <h2 id="kinds">ドテラの化粧品にはどんな種類がある？</h2>
      <p>
        ドテラのスキンケア製品には、化粧品としての使用上の注意が示されています。化粧品は、肌を清潔にする、うるおいを与えるなど、決められた範囲の働きをもつ製品です。表示できる効能の範囲は、厚生労働省の通知で56項目に定められています。薬用（医薬部外品）は、化粧品とは別の区分です。
      </p>
      <DataTable
        caption="ドテラのスキンケア製品の分け方（2026年11月時点）"
        headers={["使う場所", "主な製品"]}
        rows={[
          ["顔", "IKISE（クレンジング、洗顔、ブースターオイル、化粧水、美容液、クリーム、アイクリーム、スリーピングマスク）"],
          ["手と体", "ハンド＆ボディローション、ローズハンドローション、ドテラスパのボディバターとボディミスト、IKISE ベース クリーム"],
          ["唇", "ドテラスパ リップバーム（3種類）"],
        ]}
      />
      <p>
        このほか、オイルを薄めるのに使うドテラ ココナッツオイルやドテラ ホホバオイルもあります。薄め方は<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と濃度の計算</Link>へ。体を洗う石けんやボディウォッシュは、<Link href="/blog/doterra-shampoo-toothpaste">ドテラのシャンプー、歯磨き粉、石鹸</Link>で紹介しています。
      </p>
      <ProductPhotos names={["ドテラ ココナッツオイル"]} />

      <h2 id="face">顔のスキンケア｜IKISEの化粧水、美容液、クリーム</h2>
      <p>
        顔用の製品は、IKISEというシリーズにまとまっています。どの製品にもエッセンシャルオイルが入っていて、製品ごとに香りが違います。
      </p>
      <DataTable
        caption="IKISEの顔用の製品（2026年11月時点、税込）"
        headers={["製品", "種類", "容量", "会員価格／参考小売価格"]}
        rows={[
          ["IKISE クレンジング オイル", "メイク落とし", "120mL", "4,000円／6,000円"],
          ["IKISE クレンジング バーム", "メイク落とし", "70g", "4,400円／6,600円"],
          ["IKISE フェイス ウォッシュ", "洗顔料", "100g", "3,000円／4,500円"],
          ["IKISE ブースター オイル", "洗顔後に使うオイル", "27mL", "5,500円／8,300円"],
          ["IKISE ローション ＜クリア ＆ ライト＞", "化粧水", "150mL", "4,600円／6,900円"],
          ["IKISE ローション ＜スムーズ ＆ リッチ＞", "化粧水", "150mL", "4,600円／6,900円"],
          ["IKISE デュアル セラム ＜クリア ＆ ライト＞", "美容液（2層）", "28mL", "9,900円／14,900円"],
          ["IKISE デュアル セラム ＜スムーズ ＆ リッチ＞", "美容液（2層）", "28mL", "9,900円／14,900円"],
          ["IKISE デイ ＆ ナイト フェイス クリーム", "クリーム", "45g", "6,000円／9,000円"],
          ["IKISE インテンシブ アイ クリーム", "目もと用クリーム", "20g", "4,500円／6,800円"],
          ["IKISE スリーピング マスク", "夜用のジェルマスク", "48g", "5,300円／8,000円"],
        ]}
      />
      <p>
        化粧水と美容液は2種類あります。＜クリア ＆ ライト＞はさらっとした使い心地で、ネロリとベルガモットの香りです。＜スムーズ ＆ リッチ＞はしっとりした使い心地で、フランキンセンスの香りです。同じ名前の化粧水と美容液を組み合わせて使うよう示されています。
      </p>
      <h3>使う順番と量</h3>
      <p>表示されている使い方を、使う順に並べます。</p>
      <Steps
        steps={[
          { title: "メイクを落とす", text: "クレンジング オイルは適量、バームはチェリー粒大を、乾いた顔になじませます。ぬるま湯で洗い流します。" },
          { title: "洗顔する", text: "フェイス ウォッシュをパール粒大とり、少量のぬるま湯で泡立てて洗います。" },
          { title: "ブースター オイルをなじませる", text: "洗顔後、1〜2滴を軽くなじませてから、化粧水に進みます。" },
          { title: "化粧水をつける", text: "500円玉大を手のひらにとり、顔全体になじませて、手のひらでやさしく押さえます。" },
          { title: "美容液をつける", text: "よく振って混ぜ、2〜3プッシュを顔全体から首元になじませます。" },
          { title: "クリームで仕上げる", text: "フェイス クリームを小豆粒大とり、顔全体から首元になじませます。アイ クリームは米粒大を目もとに、お手入れの最後に使います。" },
        ]}
      />
      <p>
        スリーピング マスクは、夜のスキンケアの最後に使います。パール2粒大を顔全体になじませ、拭き取らずにそのまま休みます。翌朝は洗い流しましょう。
      </p>

      <h2 id="body">手と体のケア｜ハンド＆ボディローション、ボディバター、リップ</h2>
      <p>
        ドテラには「ハンドクリーム」という名前の製品はありません。手に使う製品は、ハンド＆ボディローションとローズハンドローションです（2026年11月時点）。
      </p>
      <DataTable
        caption="手、体、唇に使う製品（2026年11月時点、税込）"
        headers={["製品", "種類", "容量", "会員価格／参考小売価格"]}
        rows={[
          ["ハンド＆ボディローション", "手と体用のローション", "200mL", "2,500円／3,800円"],
          ["ハンド&ボディローション（3 本）", "上のローションの3本セット", "200mL×3本", "6,600円／9,900円"],
          ["ローズハンドローション", "手用のローション", "95g", "3,000円／3,000円"],
          ["ドテラスパ リプレニッシング ボディバター", "体用のクリーム", "198g", "2,800円／4,200円"],
          ["ドテラスパ ハイドレイティング ボディミスト", "体用のミスト", "125mL", "4,100円／6,200円"],
          ["IKISE ベース クリーム", "無香料の体用クリーム", "100g", "2,700円／4,100円"],
          ["ドテラスパ リップバーム（オリジナル、N トロピカル、N ハーバル）", "リップバーム", "各4.5g", "各1,200円／1,800円"],
          ["ドテラスパ リップバーム（3 種セット）", "上の3種類のセット", "4.5g×3本", "2,250円／3,400円"],
        ]}
      />
      <ProductPhotos names={["ローズハンドローション"]} />
      <h3>それぞれの使い方</h3>
      <ul>
        <li>ハンド＆ボディローション: 適量を手にとり、乾燥が気になる部分や、手、全身にのばします。</li>
        <li>ローズハンドローション: 適量を手にとってなじませます。ローズのオイルが入っていて、売上金は全額ドテラ・ヒーリングハンズ基金に寄付されます。</li>
        <li>ボディバター: 乾燥が気になるときに、全身や、手、ひじ、ひざになじませます。オレンジ、ダグラスファー、フランキンセンスのオイルが入っています。</li>
        <li>ボディミスト: 入浴後などに、肌に直接スプレーしてなじませます。逆さにしても噴霧できます。</li>
        <li>リップバーム: 乾燥が気になるときに、唇に塗ります。オリジナルはオレンジとペパーミント、トロピカルはライム、クレメンタイン、イランイラン、ハーバルはレモンバーベナ、マジョラム、スペアミントのオイルが入っています。</li>
      </ul>
      <h3>好きなオイルを混ぜるとき</h3>
      <p>
        ハンド＆ボディローションとIKISE ベース クリームは、好きなエッセンシャルオイルを混ぜて使う方法が示されています。混ぜてよいのは、「化粧品」の表示があるオイルだけです。手のひらにローションやクリームをとり、オイルとよく混ぜてから使います。
      </p>
      <p>
        日本アロマ環境協会は、ペパーミント、ティートリー、ユーカリについて、肌への使用を控えるとしています。柑橘のオイルには、日光に当たると肌に炎症などを起こす光毒性があるものもあります。オイルを肌に使うときの考え方は<Link href="/blog/oils-on-skin">オイルを肌に使うときの注意点</Link>に、手作りのクリームは<Link href="/blog/handmade-cream">手作りクリームの作り方</Link>にまとめています。
      </p>

      <h2 id="sun">日焼け止めは2026年11月時点で販売終了</h2>
      <p>
        ドテラの日焼け止めには、「ドテラ ミネラル サンスクリーン モイスチャライザー」（50g、SPF28・PA+++）と、「ドテラ ミネラル サンスクリーン ローション」（150g、SPF30・PA+++）がありました。どちらも限定販売の製品で、2026年11月時点では販売を終えています。
      </p>
      <p>
        日焼け止めを選ぶときは、販売中の製品の表示で、SPFとPAの値と使い方を確かめましょう。なお、メイク落としのエッセンシャル クレンジングオイルも、2026年2月3日に販売を終えました。
      </p>

      <h2 id="caution">使う前と使うときの注意点</h2>
      <CautionBox
        items={[
          "初めて使うときは、表示どおりパッチテストなどで試してから使いましょう。",
          "使っている間に、赤み、はれ、かゆみ、刺激、色抜け（白斑など）、黒ずみなどが出たら、使うのをやめて皮膚科専門医などに相談してください。使った肌に直射日光が当たって同じような異常が出たときも同じです。",
          "傷、はれもの、湿疹など異常のある部分や、耳の中などには使いません。目に入らないようにし、入ったときはこすらずにすぐ洗い流します。",
          "柑橘系のオイルを多く含む製品は、外出前など、直射日光に当たる前の使用はすすめられていません。",
          "オイルを混ぜるときは「化粧品」の表示があるオイルだけを使います。協会は原液を肌につけないよう案内しています。",
          "直射日光と高温多湿をさけ、乳幼児の手の届かない場所に保管します。開封後は早めに使い切りましょう。",
          "肌の治療中の方や、妊娠中、授乳中の方は、使う前に医師に相談すると安心です。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ドテラにハンドクリームはありますか？",
            a: "「ハンドクリーム」という名前の製品はありません。手に使う製品は、ハンド＆ボディローション（200mL）とローズハンドローション（95g）です（2026年11月時点）。",
          },
          {
            q: "ドテラの化粧品は医薬部外品ですか？",
            a: "この記事で紹介した製品には、化粧品としての使用上の注意が示されています。お手元の製品の区分は、容器の表示で確かめてください。",
          },
          {
            q: "ドテラの日焼け止めは買えますか？",
            a: "ドテラ ミネラル サンスクリーンの2製品は、2026年11月時点で販売を終えています。販売の開始や終了は、ドテラ・ジャパンのお知らせで確かめられます。",
          },
          {
            q: "spa doTERRA（ドテラスパ）とは何ですか？",
            a: "ボディバター、ボディミスト、リップバーム、石けん、ボディウォッシュなど、体に使う製品をまとめたシリーズです。",
          },
        ]}
      />

      <p>
        ドテラのスキンケアは、顔用のIKISEと、手や体、唇に使う製品に分かれています。まずは使う場所を決めて、容量と価格、使い方を比べてみてください。初めての製品は、少しの量で試してから使いましょう。
      </p>
      <NextStepBox />
    </>
  ),
};
