import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, NextStepBox, OilProfile, PairingList, PointBox, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ヒノキ */
export const hinoki: ArticleContent = {
  summary: [
    "ドテラのヒノキの基本情報と、木部から生まれる香りの特徴",
    "和室や玄関、床の仕上げ、浴室で香りを楽しむ3つの方法",
    "相性のよい香りとブレンド例、使うときの注意点",
  ],
  toc: [
    { id: "scent", title: "ヒノキはどんな香り？" },
    { id: "enjoy", title: "和の空間で楽しむ3つの方法" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "学名、抽出部位と抽出方法、香りの特徴、塗・香の表示、床や木製品の仕上げ磨きとバスソルトの使い方、原料の調達、使用上の注意",
    },
    {
      title: "オリジナル フレグランス作り（PDF）",
      publisher: "doTERRA",
      url: "https://media.doterra.com/jp-otg/ja/2018/fragrance-recipe-2.pdf",
      note: "ヒノキがベースに分類されていること、ベースの配分が全体の5〜20%であること",
    },
    {
      title: "アロマと一般的な香水の違いは？アロマを使ったナチュラルフレグランスの作り方も解説",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/beauty/1826/",
      note: "ベースが最後まで残る香りであること",
    },
    {
      title: "ヒノキの香りって、どんな香り？（季刊 森林総研 No.49 研究の森から）",
      publisher: "国立研究開発法人 森林研究・整備機構 森林総合研究所（2020年）",
      url: "https://www.ffpri.go.jp/pubs/kikan/documents/kikanffpri49-research1.pdf",
      note: "木材と葉で精油の成分の構成が違い、香りの印象も異なること",
    },
    {
      title: "森林総合研究所 九州支所／ヒノキ",
      publisher: "国立研究開発法人 森林研究・整備機構 森林総合研究所 九州支所",
      url: "https://www.ffpri.go.jp/kys/business/jumokuen/jumoku/zukan/hinoki.html",
      note: "本州、四国、九州に自生すること、材が建築や器具に使われること",
    },
    {
      title: "取扱説明書 V2 ドテラ® ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "オイルは5〜10滴であること、適用床面積が約16畳であること、カーペットやラグを避けて平らで硬い場所に置くこと、水のかかる場所や湿気の多い場所で使わないこと",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴、沐浴は約5mLの無水エタノールに混ぜて全身浴で1〜5滴",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "精油が家具やカーテンの変色などの原因になることへの注意",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、保管、お年寄りや既往歴のある人の量",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "製品の区分と使用方法、注意表示の確認、医師または薬剤師への相談",
    },
    {
      title: "アロマテラピー検定公式テキスト（2020年6月改訂版）について",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/licences/aroma/text/pdf/text_info_202006.pdf",
      note: "無水エタノールに混ぜたオイルを塩に吹きかけ、すぐ浴槽に入れる方法",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして計算すること",
    },
    {
      title: "全国に広がる和精油の生産",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/oil/waseiyu/",
      note: "和精油のヒノキに葉や枝葉から採ったものがあること",
    },
  ],
  Body: () => (
    <>
      <p>
        ふたを開けると、白木の建具や檜のお風呂を思わせる木の香りが立ちのぼります。畳のある部屋はもちろん、洋室の玄関や浴室にも取り入れやすいオイルです。
      </p>
      <p>この記事では、ヒノキの香りの特徴と、和の空間で今日から試せる使い方を紹介します。</p>

      <OilProfile
        name="ヒノキ"
        en="Hinoki"
        image="/assets/products/hinoki-5ml.jpg"
        color={oilColors.frankincense}
        rows={[
          { label: "学名", value: "Chamaecyparis obtusa" },
          { label: "抽出部位", value: "木部（水蒸気蒸留法）" },
          { label: "香り", value: "ウッディー、エアリー、フレッシュ" },
          { label: "製品ページの表示", value: "塗・香（5mL）" },
        ]}
      />

      <h2 id="scent">ヒノキはどんな香り？</h2>
      <p>
        製品ページでは、香りの特徴をウッディー、エアリー、フレッシュの3つで示しています。どっしりした木の香りというより、乾いた木肌に風が通るような軽さのある香りです。
      </p>
      <p>
        ドテラのヒノキは、日本特産のヒノキの木部を水蒸気蒸留したオイルです。森林総合研究所によると、同じヒノキでも木材と葉では精油の成分の構成がまったく違い、葉はさわやかな香り、木材はやや落ち着いた香りになります。森の葉の香りより、削りたての木材に近い香りを思い浮かべるとイメージしやすいでしょう。
      </p>
      <p>
        ヒノキは本州、四国、九州に自生する針葉樹で、建築や器具に広く使われてきました。製品ページによると、原料は山間部の雇用や森林の保護につながる調達の仕組みを通じて集められ、間伐材や廃材も活用されています。
      </p>

      <h2 id="enjoy">和の空間で楽しむ3つの方法</h2>
      <UsageCards
        items={[
          {
            en: "Diffuse",
            title: "和室や玄関に香らせる",
            text: "来客の前や帰宅の時間に、ディフューザーで香らせます。滴数は機器の説明書に従います。ドテラのラルツディフューザーの説明書では5〜10滴です。",
          },
          {
            en: "Wipe",
            title: "床の仕上げ拭きに",
            text: "水で固く絞った布に1滴たらし、掃除の最後に床や木の棚を拭きます。製品ページでは、床や木製品の仕上げ磨きが案内されています。",
          },
          {
            en: "Bath",
            title: "檜風呂の気分を楽しむ",
            text: "約5mLの無水エタノールに1〜5滴を混ぜてから湯に入れ、よくかき混ぜます。製品ページには、バスソルトと合わせる使い方も載っています。",
          },
        ]}
      />
      <PointBox>
        畳やラグの上にディフューザーを直接置かないようにしましょう。ラルツディフューザーの説明書では、カーペットやラグの上を避け、平らで硬い場所に置くよう案内されています。
      </PointBox>
      <p>
        ラルツの適用床面積は約16畳なので、六畳の和室や玄関では、まず下限の5滴で試してみてください。床材や家具は、素材によって色や跡が残ることがあります。目立たない場所で試してから広げてください。
      </p>
      <p>
        バスソルトにするなら、無水エタノール5mLに混ぜたヒノキを天然塩に吹きかけ、すぐ湯に入れます。ディフューザーは浴室では使いません。ラルツの説明書が、水のかかる場所や湿気の多い場所を避けるよう案内しています。入浴の手順は<Link href="/blog/bath-oils">お風呂でのオイルの使い方</Link>で紹介しています。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>
        ドテラのフレグランスのレシピでは、ヒノキはベースに分類されています。ベースは最後まで残る香りのことです。木の香りを土台にして、軽い香りを重ねると組み立てやすくなります。
      </p>
      <PairingList
        items={[
          { name: "ユズ", en: "Yuzu", color: oilColors.lemon, note: "皮の明るさが加わり、木の香りが軽くなります" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花のやわらかさが、白木の香りに重なります" },
          { name: "ペパーミント", en: "Peppermint", color: oilColors.peppermint, note: "涼しさが加わり、夏の和室に合います" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "樹脂の深みが加わり、静かな印象になります" },
        ]}
      />
      <BlendRecipe
        title="朝の玄関に"
        drops={[
          { name: "ヒノキ", color: oilColors.frankincense, count: 3 },
          { name: "ユズ", color: oilColors.lemon, count: 2 },
        ]}
      />
      <BlendRecipe
        title="夕方の和室に"
        drops={[
          { name: "ヒノキ", color: oilColors.frankincense, count: 3 },
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
        ]}
      />
      <p>
        どちらもディフューザー用で、合計5滴の例です。香りの組み立て方は<Link href="/blog/diffuser-blends">ディフューザーのブレンド例</Link>も参考にしてください。
      </p>
      <p>
        ほかの香りを主役にしたい日は、ヒノキを控えめにします。ドテラのフレグランスのレシピでは、ベースの配分は全体の5〜20%です。合計5滴なら1滴が20%に当たるので、ラベンダー4滴にヒノキ1滴で試してみてください。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="ヒノキを使う前に確認したいこと"
        items={[
          "製品ページの表示は5mLのボトルで「塗・香」です。肌に使うなら、お手元のラベルで「化粧品」の表示と使用方法を確かめます。",
          "肌につけるときは原液のままにせず、キャリアオイルで薄めて、低い濃度で少量から試してください。",
          "目のまわりや耳の中、傷やはれもの、湿疹のある部位は避けてください。",
          "表示に「食」はないので、口に入れないでください。",
          "妊娠中、授乳中の方、持病や服用中の薬がある方、子どもは、使う前に医師または薬剤師へ相談しましょう。",
          "3歳未満の子どもには香りを楽しむ方法だけにします。お年寄りや持病のある方は、協会の目安の半分以下の量で試します。",
          "無水エタノールとオイルは火のそばで扱わず、ボトルは子どもやペットの手の届かない場所に置きます。",
          "取り扱いの状況は変わることがあります。購入を考えるときは、最新の製品ページを確かめてください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "5mLのボトルで何回くらい使えますか？",
            a: "協会が計算に使う1滴0.05mLで数えると、5mLは約100滴です。ディフューザーに5滴ずつなら約20回分、床の仕上げに1滴ずつなら約100回分になります。",
          },
          {
            q: "ほかのヒノキの精油と香りが違うのはなぜですか？",
            a: "理由のひとつは、採る部位です。協会が紹介する全国の和精油には、葉や枝葉から採ったヒノキもあります。ドテラのヒノキは木部のオイルです。",
          },
        ]}
      />

      <p>
        まずはティッシュに1滴たらして、いつもの部屋に置いてみてください。木の香りが好みに合うと感じたら、玄関や床の仕上げへと使う場所を広げていきましょう。
      </p>
      <NextStepBox />
    </>
  ),
};
