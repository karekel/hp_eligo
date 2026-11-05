import Link from "next/link";
import { oilColors } from "../Botanicals";
import { BlendRecipe, CautionBox, CheckPoints, DataTable, Faq, NextStepBox, PointBox, ProductPhotos, type ArticleContent } from "../ArticleParts";

/** 2026年11月時点で買えるドテラのディフューザーと、販売を終えた機種、選び方、最初のレシピをまとめた記事 */
export const doterraDiffusers: ArticleContent = {
  summary: [
    "2026年11月時点で単品で買えるドテラのディフューザーと、その仕様",
    "バブル、ペブル、森の音、セラミックなど、販売を終えた機種と終了の時期",
    "選ぶときに確かめたいことと、ラルツで試せる最初のレシピ",
  ],
  toc: [
    { id: "now", title: "2026年11月時点で買えるのはラルツ" },
    { id: "ended", title: "販売を終えた機種｜バブル、ペブル、森の音、セラミックなど" },
    { id: "choose", title: "ディフューザーを選ぶときに確かめたい4つのこと" },
    { id: "humidifier", title: "加湿器にオイルを入れる前に" },
    { id: "recipe", title: "最初に試したいディフューズのレシピ" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "オイルアクセサリー - dōTERRA Product Line",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/pl/doterra-oil-accessories",
      note: "2026年11月時点の一覧に並ぶディフューザーがドテラ ラルツディフューザーであること",
    },
    {
      title: "ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/p/doterra-laluz-diffuser",
      note: "超音波振動で水とオイルをミストにして広げること、稼働は最大8時間、ライトの色、会員価格6,600円と参考小売価格9,900円（税込、2026年11月時点）",
    },
    {
      title: "ドテラ ラルツディフューザー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-laluz-diffuser/",
      note: "水タンク120mL、適用床面積約16畳、連続運転の時間、1・2・4時間のタイマー、自動安全停止機能",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "オイルを5〜10滴水タンクに垂らすこと、天然の純粋なエッセンシャルオイルを使うこと、医療用ではなく噴出口から直接吸い込まないこと、設置場所、子どもの使用",
    },
    {
      title: "ディフューザー（製品カテゴリ）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/diffuser/",
      note: "ペブルディフューザーと森の音ディフューザーに販売終了の表示があること（2026年11月時点）",
    },
    {
      title: "ドテラ ルモ ディフューザーの販売終了について",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社・2024年6月11日）",
      url: "https://www.doterra-info.jp/media/2551311/",
      note: "ルモ ディフューザーの販売を2024年6月14日に終了したこと",
    },
    {
      title: "ドテラ バブルディフューザーの販売終了について",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社・2025年1月15日）",
      url: "https://www.doterra-info.jp/media/2691551/",
      note: "バブルディフューザーの単品の販売を2025年1月16日に終了したこと",
    },
    {
      title: "販売終了：ドテラ ライズディフューザー（ウッド）、ドテラ ライズディフューザー（ウォールナットデザイン）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社・2025年12月15日）",
      url: "https://www.doterra-info.jp/media/3005995/",
      note: "ライズディフューザー2種の販売を2025年12月15日に終了したこと",
    },
    {
      title: "ドテラ ペブルディフューザー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-pebble-diffuser/",
      note: "2026年3月14日に販売を終了したこと、超音波式、水タンク100mL、適用床面積約14畳",
    },
    {
      title: "ドテラ 森の音ディフューザー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-morino-to-diffuser/",
      note: "2026年10月9日に販売を終了したこと、限定販売製品であったこと、水タンク120mL、適用床面積約16畳、森の模様のガラスカバー",
    },
    {
      title: "ドテラ セラミックディフューザー 10%オフ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社・2025年12月1日）",
      url: "https://www.doterra-info.jp/media/2966125/",
      note: "直噴式で充電式のディフューザーであること、LEDライトの間接照明、数量限定の製品として2025年12月2日に割引価格で販売したこと",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "水を用いるディフューザーが望ましいこと、特別なディフューザーがなくてもコットンやティッシュに数滴垂らせること",
    },
    {
      title: "ペパーミント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "オレンジ、フランキンセンスと1滴ずつ合わせてディフューズする組み合わせ、15mLの「香・食」の表示、妊娠中や服薬中の方などは医師または薬剤師に相談すること",
    },
    {
      title: "オレンジ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "15mLの「香・食」の表示、ディフューズする使い方",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "15mLの「塗・香」の表示",
    },
    {
      title: "熱い蒸気と内部の湯に注意 ～知って防ごう加湿器の事故～",
      publisher: "独立行政法人 製品評価技術基盤機構（2022年1月27日）",
      url: "https://www.nite.go.jp/data/000131937.pdf",
      note: "加湿器の給水タンクには指示された液体以外を入れないこと、多くの製品がアロマオイルなどの使用を禁止していること",
    },
  ],
  Body: () => (
    <>
      <p>
        「ドテラ ディフューザー」と調べると、ラルツ、バブル、ペブル、森の音、セラミックなど、いくつもの名前が出てきます。ただ、販売を終えた機種も多く、いま買えるものは限られます。
      </p>
      <p>
        ここでは、2026年11月時点で日本で買えるドテラのディフューザーと、販売を終えた機種、選ぶときに見るところ、最初に試したいレシピをまとめます。
      </p>

      <h2 id="now">2026年11月時点で買えるのはラルツ</h2>
      <p>
        2026年11月時点で、日本のドテラが単品で販売しているディフューザーは、ドテラ ラルツディフューザーです。超音波の振動で、水とオイルを細かいミストにして広げるタイプです。
      </p>
      <DataTable
        caption="ドテラ ラルツディフューザーの基本（2026年11月時点）"
        headers={["項目", "内容"]}
        rows={[
          ["方式", "超音波式（水を使う）"],
          ["水タンク", "120mL"],
          ["適用床面積", "約16畳（30平方メートル）"],
          ["連続運転", "最高出力で最大約4時間、最低出力で最大約8時間"],
          ["タイマー", "1時間、2時間、4時間"],
          ["ライト", "暖かい色とラベンダー色。明るさを選べる"],
          ["安全機能", "自動安全停止機能"],
          ["価格（税込）", "会員価格6,600円、参考小売価格9,900円"],
        ]}
      />
      <ProductPhotos names={["ドテラ ラルツディフューザー"]} />
      <p>
        オイルは、満水目印まで入れた水に5〜10滴です。ボタンの押し方、お手入れ、動かないときに確かめることは、<Link href="/blog/laluz-diffuser">ラルツディフューザーの使い方</Link>で詳しく紹介しています。価格は変わることがあるので、買う前に製品ページで最新の価格を確かめましょう。
      </p>

      <h2 id="ended">販売を終えた機種｜バブル、ペブル、森の音、セラミックなど</h2>
      <p>
        ドテラのディフューザーには、すでに販売を終えた機種もあります。日本で販売を終えた時期を表にしました。
      </p>
      <DataTable
        caption="日本で販売を終えたドテラのディフューザー"
        headers={["機種", "販売を終えた日"]}
        rows={[
          ["ドテラ ルモ ディフューザー", "2024年6月14日"],
          ["ドテラ バブルディフューザー", "2025年1月16日（単品の販売）"],
          ["ドテラ ライズディフューザー（ウッド、ウォールナットデザイン）", "2025年12月15日"],
          ["ドテラ ペブルディフューザー", "2026年3月14日"],
          ["ドテラ 森の音ディフューザー", "2026年10月9日"],
        ]}
      />
      <p>
        ペブルは水タンク100mL、適用床面積約14畳の小さめの超音波式でした。森の音は、森の模様のガラスカバーが光る限定販売の機種で、水タンク120mL、適用床面積約16畳です。
      </p>
      <ProductPhotos names={["ドテラ 森の音ディフューザー"]} />
      <p>
        セラミックディフューザーは、白いデザインの直噴式のディフューザーです。充電式で、LEDライトの間接照明がついています。数量限定の製品で、2025年12月2日に割引価格で再び販売されましたが、2026年11月時点では販売していません。パイロットディフューザーなど、ほかの名前を見かけることもありますが、2026年11月時点で日本のドテラが単品で販売しているディフューザーはラルツです。
      </p>
      <p>
        これらの機種をお持ちの場合は、その機種の取扱説明書に従ってください。水の量、オイルの滴数、お手入れの方法は機種ごとに違います。ラルツの手順をそのまま当てはめないようにしましょう。説明書が見当たらないときは、ドテラのお客様相談室に問い合わせると確実です。
      </p>

      <h2 id="choose">ディフューザーを選ぶときに確かめたい4つのこと</h2>
      <p>ラルツを選ぶときも、手元の機器で試すときも、次の4つを見ておくと迷いません。</p>
      <CheckPoints
        items={[
          { title: "水を使うタイプか", text: "ドテラは、香りを広げるには水を用いるディフューザーが望ましいとしています。ラルツも水を使う超音波式です。" },
          { title: "部屋の広さに合うか", text: "適用床面積を見ます。ラルツは約16畳です。寝室や書斎なら、広すぎないかも考えます。" },
          { title: "運転時間とタイマー", text: "ラルツは最低出力で最大約8時間動き、1・2・4時間のタイマーを選べます。使う時間に合わせて設定します。" },
          { title: "オイルを入れてよい機器か", text: "ドテラ以外の機器を使うときは、説明書でエッセンシャルオイルが使えるか、何滴までかを確かめます。" },
        ]}
      />
      <p>
        水を使わずにオイルを広げるネブライザー式もあります。仕組みと違いは<Link href="/blog/waterless-diffuser">水なしアロマディフューザーとは</Link>へ。ディフューザーの種類を広く知りたいときは、<Link href="/blog/diffuser-guide">ディフューザーの選び方</Link>をご覧ください。
      </p>
      <p>
        機器がなくても香りは楽しめます。ドテラは、特別なディフューザーがなくても、コットンやティッシュに数滴垂らす方法を紹介しています。手順は<Link href="/blog/no-diffuser">ディフューザーなしの使い方</Link>にまとめました。
      </p>

      <h2 id="humidifier">加湿器にオイルを入れる前に</h2>
      <p>
        「ドテラ 加湿器」と検索されることがあります。加湿器とディフューザーは別の機器です。製品評価技術基盤機構は、加湿器の給水タンクには指示された液体以外を入れないよう呼びかけ、多くの製品がアロマオイルなどの使用を禁止していると説明しています。
      </p>
      <p>
        手元の加湿器でエッセンシャルオイルやアロマオイルを使いたいときは、まず説明書を開き、使えると書かれていなければ入れないでください。確かめる手順は<Link href="/blog/oils-in-humidifier">加湿器にエッセンシャルオイルやアロマオイルは入れていい？</Link>で紹介しています。
      </p>

      <h2 id="recipe">最初に試したいディフューズのレシピ</h2>
      <p>
        ラルツでは、オイルの合計を5〜10滴に収めます。はじめは1種類を5滴で試し、香りの強さをつかみましょう。ドテラは、ペパーミント、オレンジ、フランキンセンスを1滴ずつ合わせてディフューズする組み合わせを紹介しています。ラルツの目安に合わせるなら、同じ割合で2滴ずつにすると合計6滴です。
      </p>
      <BlendRecipe
        title="午後のひとときに（ラルツで合計6滴）"
        drops={[
          { name: "ペパーミント", color: oilColors.peppermint, count: 2 },
          { name: "オレンジ", color: oilColors.wildOrange, count: 2 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 2 },
        ]}
      />
      <p>
        3本とも、15mLのボトルには「香」の表示があります。ほかのオイルを使うときも、ボトルのラベルに「香」の表示があるかを確かめてから入れましょう。朝、昼、夜に合わせた組み合わせは<Link href="/blog/diffuser-blends">ディフューザーのレシピ</Link>で紹介しています。
      </p>
      <PointBox>
        香りが強いと感じたら、次の回は1滴減らすか、タイマーで運転時間を短くしましょう。物足りないときも、1滴ずつ増やします。
      </PointBox>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "ディフューザーは医療用の機器ではありません。噴出口に顔を近づけず、ミストを直接吸い込まないでください。",
          "天然の純粋なエッセンシャルオイルを使います。化学物質を含む香水や香料は入れないでください。",
          "平らで硬い場所に置きます。浴室など水のかかる場所や湿気の多い場所、直射日光の当たる場所は避けてください。",
          "子どもだけで使わせないでください。お手入れも保護者が見ているところで行います。",
          "香りで気分が悪くなったら運転を止めて、換気してください。",
          "ペットのいる部屋で使うか迷ったときは使わず、獣医師に相談してください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方は、使う前に医師または薬剤師に相談してください。",
          "使い方はオイルの区分で変わります。お手元のラベルの使用方法と注意表示に従ってください。",
        ]}
      />
      <p>
        子どもやペットのいる家では、<Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>と<Link href="/blog/pets-safety">精油と猫・犬の注意点</Link>もあわせてご覧ください。
      </p>

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "バブルディフューザーは、もう買えませんか？",
            a: "単品の販売は2025年1月16日に終了しました。2026年11月時点で、ドテラが単品で販売しているディフューザーはラルツです。",
          },
          {
            q: "セラミックディフューザーは、まだ買えますか？",
            a: "数量限定の製品で、2026年11月時点では販売していません。お持ちの場合は、その機種の取扱説明書に従って使ってください。",
          },
          {
            q: "ペブルや森の音を持っています。オイルは何滴入れればいいですか？",
            a: "その機種の取扱説明書に従ってください。水タンクの大きさが違うので、ラルツの5〜10滴をそのまま当てはめないようにしましょう。説明書がないときは、ドテラのお客様相談室に確かめます。",
          },
          {
            q: "ドテラ以外のディフューザーで、ドテラのオイルを使えますか？",
            a: "機器の説明書で、エッセンシャルオイルを使えるか、量と入れる場所を確かめ、そのとおりに使います。オイルの使い方は、ボトルのラベルの表示に従ってください。",
          },
        ]}
      />

      <p>
        2026年11月時点で単品で買えるドテラのディフューザーはラルツです。お持ちの機種があれば、まずその説明書を開いて、1種類のオイルを少ない滴数から試してみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
