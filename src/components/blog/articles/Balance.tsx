import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, NextStepBox, OilProfile, PairingList, PointBox, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ドテラバランス */
export const balance: ArticleContent = {
  summary: [
    "ドテラバランスの内容と、木の香りを中心にした香りの特徴",
    "足裏、手首、車内で朝の香りを楽しむ3つの方法",
    "相性のよい香りとブレンド例、使うときの注意点",
  ],
  toc: [
    { id: "scent", title: "ドテラバランスはどんな香り？" },
    { id: "enjoy", title: "朝に楽しむ3つの使い方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ドテラバランス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-balance-15ml/",
      note: "ブレンドの内容、香りの特徴、塗・香の表示、一日の始まりに足裏に塗る、手首や首に塗る、車内で香りを楽しむ、ハンドテクニックに使う案内、使用上の注意",
    },
    {
      title: "アロマタッチ ハンドテクニックに使用するオイルの選び方",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-hand-technique-how-to-choose-an-oil",
      note: "ハンドテクニックでは化粧品カテゴリのオイルを使うこと、ドテラバランスが例に挙がっていること",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "コットンやティッシュに垂らす方法、車での香り、足裏が塗布に適した部位であること、薄めて少量から試すこと",
    },
    {
      title: "取扱説明書 V2 ドテラ® ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "天然の純粋なオイルを使うこと、ミストプレートのオイル汚れがミストの出ない原因になること",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "植物油10mLに精油1〜2滴、肌に使うときは1%以下にすること",
    },
    {
      title: "精油はどのようにして作られる？主な抽出方法や具体的な活用法について紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年9月17日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4572/",
      note: "植物油を使う手作り品（アロマバーム）を1カ月以内に使い切ること",
    },
    {
      title: "消費者庁からの精油の使い方に関する注意喚起について",
      publisher: "公益社団法人 日本アロマ環境協会（2025年4月2日）",
      url: "https://www.aromakankyo.or.jp/aeaj-news/detail/2296",
      note: "オイルがついたタオルを乾燥機にかけず干すこと、オイルがついたティッシュを水で湿らせて処分すること",
    },
    {
      title: "Part 5: Packaging and Storage | doTERRA Essential Oils",
      publisher: "doTERRA（米国公式、英語）",
      url: "https://www.doterra.com/US/en/essential-oil-production-packaging-and-storage-overview",
      note: "夏の車内や窓辺などの高温を避けて保管すること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "低い濃度から試すこと、目に入れないこと、保管、お年寄りや既往歴のある人の量",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと、開封後1年以内を目安に使い切ること",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "ヒノキ5mLの塗・香の表示、香りの特徴、抽出部位",
    },
    {
      title: "オレンジ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "オレンジ15mLの香・食の表示",
    },
    {
      title: "手作り石けんの取り扱いにご注意を",
      publisher: "三重県 医療保健部 薬務課",
      url: "https://www.pref.mie.lg.jp/YAKUMUS/HP/0001213310003.htm",
      note: "自分で使う場合と、プレゼントや販売の場合で扱いが違うこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "製品の区分と使用方法、異常が出たときの対応、医師または薬剤師への相談",
    },
    {
      title: "How to Use an Entire Bottle of Lavender Oil",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/healthy-living-how-to-use-an-entire-bottle-of-lavender",
      note: "15mLのボトルに約250滴入っているという記載",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があり、公共の場所では周囲に配慮すること",
    },
    {
      title: "アロマタッチ テクニック エッセンシャルオイル",
      publisher: "doTERRA Essential Oils（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-technique-get-to-know-oils",
      note: "アロマタッチ テクニックで使う8種類のオイルにドテラバランスが含まれること",
    },
  ],
  Body: () => (
    <>
      <p>
        朝の支度の途中で、足元からふわりと木の香りが立ちのぼる。ドテラバランスは、製品ページで一日の始まりの使い方が案内されている、木の香りのブレンドオイルです。
      </p>
      <p>ボトルの中にココナッツオイルが入っているのも、このオイルの特徴です。この記事では、香りの特徴と朝の使い方を紹介します。</p>

      <OilProfile
        name="ドテラバランス"
        en="Balance"
        image="/assets/products/doterra-balance-15ml.jpg"
        color={oilColors.peppermint}
        rows={[
          { label: "主な内容", value: "ココナッツオイル、ブラックスプルース、ホーリーフ、フランキンセンス、ブルータンジー、ジャーマンカモミール、オスマンタスエキス" },
          { label: "香り", value: "エアリー、フレッシュ、スイート、ウッディー" },
          { label: "製品ページの表示", value: "塗・香（15mL）" },
        ]}
      />

      <h2 id="scent">ドテラバランスはどんな香り？</h2>
      <p>
        製品ページの香りの特徴は、エアリー、フレッシュ、スイート、ウッディーの4つです。説明文では、あたたかくウッディーな香りと紹介されています。ブラックスプルースやフランキンセンスの木と樹脂の香りに、ジャーマンカモミールやオスマンタスのエキスのやわらかな甘さが重なります。
      </p>
      <p>
        ほかのオイルと違うのは、内容にココナッツオイルが含まれていることです。ボトルからはゆっくり出てくるので、急いで振らず、傾けて待ちましょう。色は青みがかっています。
      </p>

      <h2 id="enjoy">朝に楽しむ3つの使い方</h2>
      <UsageCards
        items={[
          {
            en: "Feet",
            title: "靴下をはく前に足裏へ",
            text: "少量を足裏になじませます。はじめはキャリアオイルで薄めて試し、手を洗ってから靴下をはきます。",
          },
          {
            en: "Wrist",
            title: "着替えの前に手首へ",
            text: "少量を手首や首になじませ、香りを確かめます。色が移らないよう、服を着る前につけます。",
          },
          {
            en: "Car",
            title: "出発前の車内に",
            text: "停車中にティッシュへ1滴たらして、車内に置きます。運転中はオイルに触れません。",
          },
        ]}
      />
      <PointBox>
        製品ページの使い方に、ディフューズの案内はありません。ココナッツオイルを含むので、ディフューザーに入れる前に機器の説明書を確認してください。
      </PointBox>
      <p>足裏は、公式サイトで塗布に適した部位のひとつに挙げられています。顔から離れているぶん、ふとした瞬間に立ちのぼる香りを楽しめます。</p>
      <p>
        手首や首は顔に近いので、香りをはっきり感じます。ただ、香りの感じ方には個人差があり、消費者庁は公共の場所での配慮を呼びかけています。電車や職場へ向かう朝は足裏を選ぶか、手首の量を控えめにしましょう。
      </p>
      <p>車内に置いたティッシュは、降りるときに持ち帰ります。オイルがついた紙は、水で湿らせてから捨てるよう協会が案内しています。</p>
      <p>
        製品ページでは、アロマタッチのハンドテクニックに使う方法も案内されています。家族と手のタッチを楽しみたい方は、<Link href="/blog/aromatouch-hand">アロマタッチのハンドテクニック</Link>を参考にしてください。ドテラバランスは、<Link href="/blog/aromatouch-technique">アロマタッチ テクニック</Link>で使う8種類のオイルのひとつでもあります。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>木の香りが土台にあるので、花、樹脂、柑橘の香りとなじみます。ティッシュやキャリアオイルで合わせると手軽です。</p>
      <PairingList
        items={[
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "内容にも含まれる樹脂の香りが強まります" },
          { name: "ヒノキ", en: "Hinoki", color: oilColors.frankincense, note: "木の香りが軽やかに重なります" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花のやわらかさが加わります" },
          { name: "オレンジ", en: "Wild Orange", color: oilColors.wildOrange, note: "甘く明るい朝の香りになります。ティッシュで楽しみます" },
        ]}
      />
      <BlendRecipe
        title="朝の手首に"
        drops={[
          { name: "ドテラバランス", color: oilColors.peppermint, count: 1 },
          { name: "ヒノキ", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <BlendRecipe
        title="車内のティッシュに"
        drops={[
          { name: "ドテラバランス", color: oilColors.peppermint, count: 1 },
          { name: "オレンジ", color: oilColors.wildOrange, count: 1 },
        ]}
      />
      <p>
        手首用は、キャリアオイル10mLに合計2滴混ぜる例で、協会の目安の1%以下に収まります。オレンジ15mLの製品ページの表示は「香・食」なので、肌には使わず、ティッシュで香りだけを楽しみます。持ち歩き用の作り方は<Link href="/blog/roll-on">ロールオンアロマの作り方</Link>で紹介しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="朝の習慣にする前に確認したいこと"
        items={[
          "製品ページの表示は15mLのボトルで「塗・香」です。ラベルの「化粧品」の表示と使用方法に沿って使います。",
          "ココナッツオイルを含むブレンドですが、はじめて肌につけるときはキャリアオイルでさらに薄め、少量から試してください。",
          "肌に異常が出たら使うのをやめ、皮膚科専門医などに相談します。目に入れず、耳の中や傷、湿疹のある部位にも使わないでください。",
          "食品ではありません。製品ページの表示に「食」はないので、口に入れないでください。",
          "ココナッツなどにアレルギーがある方、妊娠中、授乳中の方、持病や服用中の薬がある方は、医師または薬剤師に相談してから使いましょう。",
          "3歳未満の子どもの肌には使いません。子どもに使いたいときは、事前に医師または薬剤師へ確認します。お年寄りは協会の目安の半分以下の量で試してください。",
          "青みのある色なので、白い服やタオルに色が移ることがあります。",
          "オイルがついたタオルや靴下は、洗濯のあとも乾燥機にかけず、自然に乾かしましょう。",
          "混ぜて作ったものは自分で使う分だけにして、販売や譲渡はしません。清潔な道具を使い、1か月以内に使い切ります。",
          "直射日光と高温を避けて保管します。夏の車内にボトルを置いたままにせず、子どもやペットの手の届かない場所に置いてください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "1本でどのくらい楽しめますか？",
            a: "15mLのボトルは約250滴入りと、ドテラのカナダ向け公式ブログに書かれています。朝に1滴ずつ使うと、約8か月の計算です。開封後1年以内という協会の目安にも収まります。",
          },
          {
            q: "ヒノキとはどう違いますか？",
            a: "どちらも製品ページの表示は「塗・香」で、ウッディー、エアリー、フレッシュの言葉が共通しています。違いは甘さです。ドテラバランスにはスイートが加わり、7種類の内容を重ねたブレンドです。ヒノキは木部から採ったオイルで、容量は5mLです。",
          },
        ]}
      />

      <p>
        まずは明日の朝、キャリアオイルで薄めたものを足裏に少しだけ試してみてください。靴下をはく前のひと手間で、香りのある朝を楽しめます。
      </p>
      <NextStepBox />
    </>
  ),
};
