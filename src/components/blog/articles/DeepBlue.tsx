import Link from "next/link";
import { BlendRecipe, CautionBox, DataTable, Faq, NextStepBox, OilProfile, PairingList, PointBox, ProductPhotos, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ディープブルー */
export const deepBlue: ArticleContent = {
  summary: [
    "ディープブルーの内容と、ミントとカンファーが重なる香りの特徴",
    "5mLのオイルと、クリームのディープブルーラブの違いと使い分け",
    "ココナッツオイルで薄める使い方、相性のよい香り、使うときの注意点",
  ],
  toc: [
    { id: "scent", title: "ドテラのディープブルーはどんな香り？" },
    { id: "rub", title: "オイルとラブ（クリーム）の違い" },
    { id: "enjoy", title: "ディープブルーの使い方と相性のよい香り" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ディープブルー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/deep-blue-5ml/",
      note: "5mLの容量、価格（2026年11月時点、税込）、ブレンドの内容、香りの特徴、塗のみの表示、ココナッツオイルで薄めて塗る使い方、一日の終わりや体を動かす前後に塗る使い方、使用上の注意と保管方法",
    },
    {
      title: "ディープブルーラブ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/deep-blue-rub/",
      note: "115gのクリームであること、価格（2026年11月時点、税込）、ディープブルーのブレンドを配合していること、成分、使い心地、適量をなじませる使い方とオイルを先に塗る使い方、持ち歩きやバスルームでの置き方、使用上の注意",
    },
    {
      title: "ディープブルーシリーズ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/deep-blue/",
      note: "日本で扱うディープブルーの製品がオイルとラブの2つであること（2026年11月時点）",
    },
    {
      title: "ファミリー エッセンシャルズキット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/family-essentials-kit/",
      note: "5mL×10本のキットにディープブルーが含まれること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "オイルが化粧品、食品添加物、雑貨の3つに分かれること、使用方法と注意表示の確認、医師または薬剤師への相談",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "初めて塗布で使うオイルや敏感肌ではキャリアオイルで薄めること、足裏が塗布に適した部位であること",
    },
    {
      title: "アロマタッチ テクニック エッセンシャルオイル",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-technique-get-to-know-oils",
      note: "アロマタッチ テクニックで使う8種類のオイルにディープブルーが含まれること",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "ラベンダー15mLの塗・香の表示",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "フランキンセンス15mLの塗・香の表示",
    },
    {
      title: "ドテラバランス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-balance-15ml/",
      note: "ドテラバランス15mLの塗・香の表示",
    },
    {
      title: "ペパーミント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "ペパーミント15mLの香・食の表示",
    },
    {
      title: "雑貨等の広告について（薬事該当性）",
      publisher: "東京都保健医療局健康安全部 薬務課監視指導担当",
      url: "https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/r5zakka",
      note: "医薬品医療機器等法の化粧品の定義、承認を受けていない製品の効能や効果の広告の禁止、エッセンシャルオイルが化粧品に当たる場合",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、低い濃度から試すこと、イランイランやペパーミントが皮膚刺激の例に挙がっていること、お年寄りや既往歴のある人の量、保管",
    },
    {
      title: "アロマの種類と効果を徹底解説！購入時のポイントも紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2062/",
      note: "ペパーミントに皮膚刺激があり、肌への使用を控えるとしていること",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "植物油10mLに精油1〜2滴、肌に使うときは1%以下にすること",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして計算すること（5mLで約100滴）",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと",
    },
  ],
  Body: () => (
    <>
      <p>
        ミントの清涼感に、樟脳のようなツンとした香りが重なる。ディープブルーは、肌に塗って香りと使い心地を楽しむドテラのブレンドオイルです。
      </p>
      <p>同じ名前のクリーム「ディープブルーラブ」もあります。オイルとラブの違い、使い分け、薄め方を順に紹介します。</p>

      <OilProfile
        name="ディープブルー"
        en="Deep Blue"
        image="/assets/products/deep-blue-5ml.jpg"
        color={oilColors.lavender}
        rows={[
          { label: "主な内容", value: "ウィンターグリーン、カンファー、ペパーミント、イランイラン、ヘリクリサム、ブルータンジー、オスマンタスエキス、ジャーマンカモミール" },
          { label: "香り", value: "ミンティー、カンファー" },
          { label: "表示", value: "5mLは「塗」のみ" },
          { label: "価格", value: "会員価格5,600円、参考小売価格8,400円（いずれも税込、2026年11月時点）" },
        ]}
      />

      <h2 id="scent">ドテラのディープブルーはどんな香り？</h2>
      <p>
        ディープブルーは、8種類の植物の香りを合わせたブレンドオイルです。ペパーミントやウィンターグリーン、カンファーに、イランイランやオスマンタスエキスなどの花の香りが加わります。
      </p>
      <p>
        香りの特徴は、ミンティーとカンファーの2つです。ミンティーはフレッシュで清涼感のある香り、カンファーは樟脳のようなツンとした香りを指します。甘さは控えめで、すっとした印象がはっきり残る香りです。
      </p>
      <p>
        表示は5mLのボトルで「塗」のみです。「香」と「食」の表示はないので、ディフューザーで香らせたり、口に入れたりする使い方はありません。肌になじませたときに立ちのぼる香りを楽しむオイルです。
      </p>
      <p>
        日本アロマ環境協会が計算に使う1滴0.05mLで数えると、5mLは約100滴です。ココナッツオイル10mLに2滴ずつ混ぜるなら、約50回分の計算になります。
      </p>

      <h2 id="rub">オイルとラブ（クリーム）の違い</h2>
      <p>
        2026年11月時点で、日本のドテラが扱うディープブルーの製品は、5mLのオイルと、115gのクリーム「ディープブルーラブ」の2つです。ラブは、ディープブルーのブレンドを配合したクリームです。
      </p>
      <ProductPhotos names={["ディープブルーラブ"]} />
      <DataTable
        caption="ディープブルーのオイルとラブの違い（2026年11月時点）"
        headers={["項目", "オイル", "ラブ"]}
        rows={[
          ["形", "液体のブレンドオイル", "クリーム"],
          ["容量", "5mL", "115g"],
          ["会員価格（税込）", "5,600円", "5,700円"],
          ["参考小売価格（税込）", "8,400円", "8,600円"],
          ["内容", "8種類の植物の香り", "ディープブルーのブレンドに、水、アーモンド油、メントール、トウガラシ果実エキスなどを合わせたもの"],
          ["塗・香・食の表示", "「塗」のみ", "表示なし（肌に塗るクリーム）"],
          ["使い方", "必要に応じてココナッツオイルなどで薄めて塗る", "適量を手に取り、そのままなじませる"],
        ]}
      />
      <p>
        使い分けの目安は、手軽さと濃さの調整です。オイルは少量で、薄める濃さを自分で決められます。ラブはクリームなので、薄めずにそのまま手に取れます。ドテラは、ラブをバスルームに置いたり、運動用のバッグに入れて持ち歩いたりする使い方を紹介しています。
      </p>
      <p>
        ドテラは、ラブを塗る前にオイルを重ねる使い方も紹介しています。ラブの使い心地は、ひんやりした清涼感と、じんわりした温かさを感じるものとされています。重ねるときは、それぞれ少量から試しましょう。
      </p>
      <p>
        どちらも肌に使う製品で、注意表示は化粧品向けの内容です。肌に合わないときは使うのをやめ、皮膚科専門医などに相談しましょう。区分は、お手元の容器の表示で確かめてください。区分ごとの使い方は<Link href="/blog/doterra-how-to-use">ドテラのオイルの使い方と表示の読み方</Link>で紹介しています。
      </p>

      <h3>ディープブルーの「効能」は表示できる？</h3>
      <p>
        「ディープブルー 効能」と検索されることがあります。ドテラのオイルは、化粧品、食品添加物、雑貨のいずれかに分かれます。医薬品医療機器等法では、化粧品は体を清潔にしたり、肌や髪を健やかに保ったりするためのもので、体への作用が穏やかなものとされています。
      </p>
      <p>
        体の構造や働きに影響することを目的とするものは、化粧品には当たりません。承認を受けていない製品が、効能や効果を広告することも禁じられています。そのため、化粧品や雑貨のオイルは、体の不調に効くといった効能を表示できません。
      </p>
      <p>
        ディープブルーを選ぶときは、香り、使い心地、使い方、注意表示を手がかりにしましょう。体の不調が続くときは、オイルやクリームで様子を見ず、医師に相談してください。
      </p>

      <h2 id="enjoy">ディープブルーの使い方と相性のよい香り</h2>
      <UsageCards
        items={[
          {
            en: "Dilute",
            title: "ココナッツオイルで薄める",
            text: "ココナッツオイル10mLに2滴を混ぜると、協会の目安の1%以下に収まります。よく混ぜてから、少量を手に取ります。",
          },
          {
            en: "Evening",
            title: "長い一日の終わりに",
            text: "家でくつろぐ時間に、薄めたものを足裏などに少量なじませます。手のひらで温めてからのばすと、清涼感のある香りが立ちのぼります。",
          },
          {
            en: "Active",
            title: "体を動かす日の前後に",
            text: "ドテラは、体を動かす前後に足に塗る使い方も紹介しています。外出前は香りが強くなりすぎないよう、量を控えめにします。",
          },
        ]}
      />
      <ProductPhotos names={["ココナッツオイル"]} />
      <PointBox>塗ったあとは手をよく洗いましょう。手に残ったまま目のまわりに触れないようにします。</PointBox>
      <p>
        ドテラは、はじめて使うときはパッチテストなどで試し、必要に応じてキャリアオイルで薄めるとしています。敏感肌の方も、薄めてから使いましょう。薄め方の基本は<Link href="/blog/carrier-oil-dilution">キャリアオイルでの薄め方</Link>、足裏での手順は<Link href="/blog/foot-self-massage">足裏セルフマッサージのやり方</Link>にまとめています。
      </p>
      <p>
        ディープブルーは、<Link href="/blog/aromatouch-technique">アロマタッチ テクニック</Link>で使う8種類のオイルのひとつでもあります。家族の背中にオイルをのばしていく手順の中で使います。
      </p>

      <h3>相性のよい香りとブレンド例</h3>
      <p>
        ディープブルーと合わせるのは、同じく「塗」の表示があるオイルにします。ラベンダー15mL、フランキンセンス15mL、ドテラバランス15mLは、いずれも表示が「塗・香」です。ミントの清涼感に花や木の香りを重ねると、印象がやわらぎます。
      </p>
      <PairingList
        items={[
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花の香りが加わり、清涼感がやわらかくなります" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "樹脂の落ち着いた香りが重なります" },
          { name: "ドテラバランス", en: "Balance", color: oilColors.peppermint, note: "木の香りが加わり、深みが出ます" },
        ]}
      />
      <BlendRecipe
        title="くつろぎの時間に（ココナッツオイル10mL）"
        drops={[
          { name: "ディープブルー", color: oilColors.lavender, count: 1 },
          { name: "ラベンダー", color: oilColors.lavender, count: 1 },
        ]}
      />
      <BlendRecipe
        title="木の香りを足したい日に（ココナッツオイル10mL）"
        drops={[
          { name: "ディープブルー", color: oilColors.lavender, count: 1 },
          { name: "ドテラバランス", color: oilColors.peppermint, count: 1 },
        ]}
      />
      <p>
        どちらもココナッツオイル10mLに合計2滴で、1%以下に収まります。作ったものは自分で使う分だけにして、清潔な容器に入れ、早めに使い切りましょう。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="ディープブルーを使う前に確認したいこと"
        items={[
          "オイルの表示は5mLで「塗」のみです。ディフューザーには入れず、口にも入れないでください。",
          "はじめて使うときはパッチテストなどで試し、ココナッツオイルなどで薄めます。協会は、原液を肌につけず、低い濃度から試すよう案内しています。",
          "協会は、内容に含まれるペパーミントやイランイランを皮膚刺激の例に挙げ、ペパーミントは肌への使用を控えるとしています。別の見解もあるので、最後はご自身で判断してください。",
          "赤み、はれ、かゆみ、刺激、色抜けや黒ずみなどが出たら使うのをやめ、皮膚科専門医などに相談します。塗った肌に直射日光があたって異常が出た場合も同じです。",
          "傷やはれもの、湿疹のある部位、耳の中など敏感なところには使いません。目に入らないよう注意し、ラブが目に入ったときは、こすらずにすぐ洗い流します。",
          "ラブの成分には、アーモンド油、メントール、トウガラシ果実エキスなどが含まれます。アレルギーがある方は、使う前に成分を確かめ、医師に相談しましょう。",
          "治療中、妊娠中、授乳中の方、子どもは、使う前に医師または薬剤師に相談してください。協会は、3歳未満の子どもには芳香浴以外を行わないよう案内しています。",
          "お年寄りや持病のある方は、協会の目安の半分以下の量で試してください。",
          "直射日光と湿気を避けてしっかり閉め、乳幼児の手の届かない場所に保管します。開封後は早めに使い切りましょう。",
          "体の不調があるときは、オイルやクリームで様子を見ず、医師に相談してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ディープブルーに効能はありますか？",
            a: "ドテラのオイルは、化粧品、食品添加物、雑貨のいずれかに分かれます。どの区分でも、体の不調に効くといった効能は表示できません。香り、使い心地、使い方で選び、体の不調は医師に相談してください。",
          },
          {
            q: "ディフューザーで香らせてもいいですか？",
            a: (
              <>
                表示は「塗」のみで、「香」の表示はありません。部屋にミントの香りを広げたいときは、表示が「香・食」の<Link href="/blog/peppermint">ペパーミント15mL</Link>など、「香」の表示があるオイルを選びましょう。
              </>
            ),
          },
          {
            q: "オイルとラブ、はじめにどちらを選べばいいですか？",
            a: "薄める濃さを自分で調整したい方はオイル、薄める手間をかけずにそのまま使いたい方はラブが向いています。価格は2026年11月時点で、オイル5mLが会員価格5,600円、ラブ115gが会員価格5,700円です（いずれも税込）。5mL×10本のファミリー エッセンシャルズキットにも、5mLのディープブルーが入っています。",
          },
        ]}
      />
      <ProductPhotos names={["ペパーミント"]} />

      <p>
        まずはココナッツオイル10mLに1滴を混ぜ、腕の内側など目立たないところに少しなじませて、香りと使い心地を確かめてみてください。好みに合えば、くつろぎの時間に足裏へと広げていきましょう。
      </p>
      <NextStepBox />
    </>
  ),
};
