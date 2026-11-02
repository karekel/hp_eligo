import Link from "next/link";
import { CautionBox, DataTable, NextStepBox, type ArticleContent } from "../ArticleParts";

/** ドテラの製品ページの価格の読み方と、1滴あたりの計算をまとめた記事 */
export const doterraOilPrices: ArticleContent = {
  summary: [
    "製品ページに並ぶ「参考小売価格」と「会員価格」の読み方",
    "主なオイルの値段の例と、1mL、1滴あたりの計算",
    "本体のほかにかかる費用と、値段を見るときに気をつけたいこと",
  ],
  toc: [
    { id: "two", title: "ドテラのオイルの値段は2つ並んでいる" },
    { id: "list", title: "主なオイルの値段の例（2026年11月2日確認）" },
    { id: "calc", title: "1滴あたりの値段を計算する" },
    { id: "other", title: "本体のほかにかかる費用" },
    { id: "why", title: "オイルごとに値段が違うのはなぜ？" },
    { id: "caution", title: "値段を見るときの注意点" },
  ],
  sources: [
    {
      title: "オレンジ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "15mLの会員価格1,900円、参考小売価格2,900円（2026年11月2日確認）",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "15mLの会員価格2,300円、参考小売価格3,500円（2026年11月2日確認）",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "15mLの会員価格3,800円、参考小売価格5,700円（2026年11月2日確認）",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "15mLの会員価格4,400円、参考小売価格6,600円（2026年11月2日確認）",
    },
    {
      title: "ラベンダー（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-5ml/",
      note: "製品ページに価格の欄がないこと（2026年11月2日確認）",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "15mLの会員価格11,700円、参考小売価格17,600円（2026年11月2日確認）",
    },
    {
      title: "ユズ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/yuzu-5ml/",
      note: "5mLの会員価格8,600円、参考小売価格12,900円、限定販売製品の表示（2026年11月2日確認）",
    },
    {
      title: "会員登録について",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/member/",
      note: "会員制度があること、参考小売価格で購入できる窓口、初回登録料3,500円、更新料2,000円、登録は満20歳以上",
    },
    {
      title: "特定商取引法に基づく表記",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/specified-commercial-transaction-law",
      note: "登録に商品購入の義務がないこと、配送料600円、15,000円以上の通常注文の配送料、代金引換手数料324円",
    },
    {
      title: "登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/enrollment-kit/",
      note: "登録キットの価格が登録料と単品の合計と別に示されていること",
    },
    {
      title: "How to Use an Entire Bottle of Lavender Oil",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/healthy-living-how-to-use-an-entire-bottle-of-lavender",
      note: "15mLのボトルに約250滴入っているという記載",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "1滴は約0.05mLという目安",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "水タンクにオイルを5〜10滴垂らすこと",
    },
    {
      title: "精油とは",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/oil/",
      note: "精油1kgを得るのに必要な植物の量（ラベンダーの花穂100〜200kg、ローズの花3〜5トン）",
    },
    {
      title: "一部製品の価格改定のお知らせ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社・2025年12月1日）",
      url: "https://www.doterra-info.jp/media/2981276/",
      note: "2026年1月1日に一部製品の価格を改定したこと、理由として挙げられた原材料費や輸送コスト",
    },
    {
      title: "（訂正あり）価格改定のお知らせ ＜2024年9月2日より＞",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社・2024年8月2日）",
      url: "https://www.doterra-info.jp/media/2562264/",
      note: "2024年9月2日に会員価格と参考小売価格を改定したこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "オイルの区分と使用方法の確認",
    },
  ],
  Body: () => (
    <>
      <p>
        「ドテラ アロマ 値段」と調べると、1本の数字がいくつも出てきて戸惑うかもしれません。ドテラのオイルの値段は、製品ページに2つの価格が並ぶのが基本です。
      </p>
      <p>
        この記事では、2つの価格の読み方と、1滴あたりの計算の方法をまとめます。値段はすべて、<strong>2026年11月2日</strong>に公式の製品ページを開いて確認した税込の数字です。値段は変わることがあるので、買う前に必ず製品ページを確認してください。
      </p>

      <h2 id="two">ドテラのオイルの値段は2つ並んでいる</h2>
      <p>製品ページには、会員価格と参考小売価格が並んで書かれています。</p>
      <DataTable
        caption="2つの価格の違い"
        headers={["価格", "どんな値段か"]}
        rows={[
          ["会員価格", "ドテラに会員登録をした人が購入するときの価格"],
          ["参考小売価格", "登録せずに購入するときの参考の価格"],
        ]}
      />
      <p>
        公式の案内によると、登録をしなくても参考小売価格で買う方法があります。挙げられているのは、ショッピングサイト、プロダクトセンター、知り合いのWA会員に尋ねることの3つです。
      </p>

      <h2 id="list">主なオイルの値段の例（2026年11月2日確認）</h2>
      <p>いくつかのオイルの値段を、容量とあわせて表にしました。どれも製品ページに書かれた税込の価格です。</p>
      <DataTable
        caption="主なオイルの値段（税込）"
        headers={["オイル", "容量", "会員価格", "参考小売価格"]}
        rows={[
          ["オレンジ", "15mL", "1,900円", "2,900円"],
          ["レモン", "15mL", "2,300円", "3,500円"],
          ["ペパーミント", "15mL", "3,800円", "5,700円"],
          ["ラベンダー", "15mL", "4,400円", "6,600円"],
          ["フランキンセンス", "15mL", "11,700円", "17,600円"],
          ["ユズ（限定販売製品）", "5mL", "8,600円", "12,900円"],
        ]}
      />
      <p>
        この6本で計算すると、会員価格は参考小売価格のおよそ3分の2です。同じ15mLでも、オレンジとフランキンセンスでは6倍ほどの開きがあります。容量が小さいから安いとも限らず、ユズは5mLで8,600円です。
      </p>

      <h2 id="calc">1滴あたりの値段を計算する</h2>
      <p>
        ボトルの値段だけでは、使うときの感覚がつかめません。そこで1滴あたりに直してみます。ドテラのカナダ向け公式ブログには、15mLのボトルに約250滴入っていると書かれているので、この数字を使います。計算は「値段÷250滴」です。
      </p>
      <DataTable
        caption="1mLと1滴あたりの計算例（税込）"
        headers={["オイル", "1mLあたり（会員／参考）", "1滴あたり（会員／参考）"]}
        rows={[
          ["オレンジ 15mL", "約127円／約193円", "約7.6円／約11.6円"],
          ["レモン 15mL", "約153円／約233円", "約9.2円／14.0円"],
          ["ペパーミント 15mL", "約253円／380円", "約15.2円／約22.8円"],
          ["ラベンダー 15mL", "約293円／440円", "約17.6円／約26.4円"],
          ["フランキンセンス 15mL", "780円／約1,173円", "約46.8円／約70.4円"],
          ["ユズ 5mL", "1,720円／2,580円", "約103円／約155円"],
        ]}
      />
      <p>
        ユズは5mLなので、15mLと同じ割合と考えて約83滴で割りました。あくまで計算の例です。日本アロマ環境協会は1滴を約0.05mLとしていて、この数字なら15mLは300滴になり、1滴の値段は少し下がります。滴の大きさは<Link href="/blog/drop-count">1滴は何mL？</Link>でも説明しています。
      </p>
      <p>
        ドテラ ラルツディフューザーの説明書の目安は1回5〜10滴です。ラベンダー15mLを1回5滴使うなら、1回あたり会員価格で約88円、参考小売価格で約132円です。週に3回使うと、15mLは約4か月で使い切る計算です。
      </p>

      <h2 id="other">本体のほかにかかる費用</h2>
      <p>ボトルの値段のほかに、次の費用があります。公式の案内にある金額です。</p>
      <DataTable
        caption="本体のほかの費用（税込）"
        headers={["費用", "金額", "内容"]}
        rows={[
          ["初回登録料", "3,500円", "会員登録のとき。登録は満20歳以上"],
          ["更新料", "年2,000円", "登録を更新するとき"],
          ["配送料", "600円", "全国一律。15,000円以上の通常注文は無料"],
          ["代金引換手数料", "324円", "代金引換で支払うとき"],
        ]}
      />
      <p>
        たとえば、登録料だけを払ってラベンダー15mLを1本注文すると、本体4,400円、登録料3,500円、配送料600円で、合計8,500円です。本体の差だけを見ずに、こうした費用も含めて考えましょう。登録に商品の購入義務はなく、登録キットの価格は別に定められています。
      </p>
      <p>この記事は登録をすすめるものではありません。使う量が見えてから考えても遅くありません。</p>

      <h2 id="why">オイルごとに値段が違うのはなぜ？</h2>
      <p>
        製品ごとの価格の理由を説明した公式のページは見つかりませんでした。ひとつの手がかりは、必要な植物の量です。日本アロマ環境協会によると、精油1kgを得るのに、ラベンダーは花穂100〜200kg、ローズは花3〜5トンが必要で、産地などでも変わります。
      </p>
      <p>
        値段そのものも変わります。ドテラは2024年9月2日に価格を改定し、2026年1月1日にも一部製品を改定しました。公式のお知らせは、理由として原材料費や輸送コストの高騰を挙げています。値段を読むときは、確認した日付も見ましょう。
      </p>

      <h2 id="caution">値段を見るときの注意点</h2>
      <CautionBox
        title="値段を見るときに確かめたいこと"
        items={[
          "この記事の値段は2026年11月2日に製品ページで確認したものです。買う前に、最新の製品ページを確認してください。",
          "限定販売の製品など、販売状況は変わります。値段が載っていても、注文できるとは限りません。",
          "ラベンダー5mLのように、製品ページに価格の欄がない製品もあります。",
          "1滴あたりの金額は計算の例で、公式の数字ではありません。",
          "値段と使い方は関係がありません。使い方はお手元のラベルの使用方法と注意表示に従ってください。",
        ]}
      />

      <p>
        ドテラのオイルの値段は、会員価格と参考小売価格の2つを見て、1回に使う滴数で考えるとわかりやすくなります。まずは気になる1本の製品ページを開いて、今日の値段を確かめてみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
