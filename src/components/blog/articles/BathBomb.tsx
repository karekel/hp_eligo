import Link from "next/link";
import { oilColors } from "../Botanicals";
import { BlendRecipe, CautionBox, CheckPoints, DataTable, Faq, MethodCard, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** 手作りバスボムのレシピと香りの選び方 */
export const bathBomb: ArticleContent = {
  summary: [
    "重曹40gとクエン酸20gで作る、1回分のバスボムの手順",
    "オイルは合計5滴までという量の目安と、香りの選び方のコツ",
    "肌に触れるものとして守りたい点と、子どもと作るときの分担",
  ],
  toc: [
    { id: "recipe", title: "基本のバスボムの作り方" },
    { id: "scent", title: "香りの選び方のコツ" },
    { id: "caution", title: "作るときと使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "DIY Bath Bombs: A Winter Essential",
      publisher: "doTERRA（米国公式、2024年12月12日）",
      url: "https://www.doterra.com/US/en/blog/diy-bath-bombs",
      note: "粉にココナッツオイルと少量の水を少しずつ加え、型に詰める流れ、重曹とクエン酸を2対1で使うこと、乾いた場所で2〜3日固めること",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "製品ページの塗・香の表示、香りの説明、入浴剤に加える使い方",
    },
    {
      title: "ゼラニウム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/geranium-15ml/",
      note: "製品ページの塗・香の表示、香りの説明",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "製品ページの塗・香の表示、香りの説明、バスソルトとブレンドする使い方",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "製品ページの塗・香の表示、香りの説明、バスタイムに香らせる使い方",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "15mLは香・食の表示であること。同じ名前でも容量で表示が変わる例",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLは塗・香の表示であること。同じ名前でも容量で表示が変わる例",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "初めて肌に使うときは1〜2滴から始めること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しく ご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせて使うこと、妊娠中、授乳中、服薬中、通院中の人と子どもは使用前に相談すること",
    },
    {
      title: "お風呂でアロマを楽しもう！アロマバスの方法や効果、注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/health/1812/",
      note: "精油は合計1〜5滴、無水エタノールや植物油に溶かして使うこと、柑橘系やスパイス系の注意、敏感肌の人の方法、3歳以上の子どもの入浴の扱い",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "沐浴の滴数と、湯に入れてよくかき混ぜること",
    },
    {
      title: "アロマテラピー検定公式テキスト（2020年6月改訂版）について",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/licences/aroma/text/pdf/text_info_202006.pdf",
      note: "入浴剤の作り方を、原液を天然塩や重曹に混ぜる方法から、エタノールに混ぜた精油を吹きかけてすぐ浴槽に入れる方法へ変更したこと",
    },
    {
      title: "精油の使用法の一部見直しについて",
      publisher: "公益社団法人 日本アロマ環境協会 機関誌『AEAJ』No.95",
      url: "https://www.aromakankyo.or.jp/newsftp/20200528news95.pdf",
      note: "エタノールで作る入浴剤は、時間がたつとエタノールが揮発して原液が残る場合があるので、作成後すぐ使うこと",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "沐浴で無水エタノールの代わりに植物油を使えること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、光毒性の例、火気、高齢の人や既往歴のある人の量、保管",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満には芳香浴以外を行わないこと",
    },
    {
      title: "化粧品を選ぶ前に知っておきたい知識 最終回 化粧品を安全に選ぶには",
      publisher: "独立行政法人 国民生活センター『国民生活』2025年9月号",
      url: "https://www.kokusen.go.jp/wko/pdf/wko-202509_04.pdf",
      note: "腕の内側など目立たない所で小さく試すこと、異常があれば受診すること",
    },
    {
      title: "手作り石けんの取り扱いにご注意を",
      publisher: "三重県 医療保健部 薬務課（令和7年11月27日更新）",
      url: "https://www.pref.mie.lg.jp/YAKUMUS/HP/0001213310003.htm",
      note: "手作り石けんの案内で、他人へのプレゼントや販売が規制の対象とされていること",
    },
    {
      title: "手作り石鹸について",
      publisher: "佐賀県 薬務課",
      url: "https://www.pref.saga.lg.jp/kiji00334262/3_34262_1_handmaidsorpv2.pdf",
      note: "プレゼントする場合でも許可が必要とされていること",
    },
    {
      title: "フリマ・オークションサイト（アプリ）で許可なく医薬品等を販売することはできません",
      publisher: "東京都保健医療局（2019年9月10日）",
      url: "https://www.hokeniryo.metro.tokyo.lg.jp/anzen/iyaku/koukokukisei/zenpanfrima/furimakisei",
      note: "許可を取らずに作った手作りコスメは販売できないこと",
    },
    {
      title: "Vol.561 家庭内での医薬品や洗剤の誤飲を防止しましょう!",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20210810/",
      note: "食品に似た見た目の製品に注意し、手の届かない所に保管すること",
    },
  ],
  Body: () => (
    <>
      <p>お湯に入れると、しゅわしゅわと泡を立てながら香りが広がるバスボム。重曹とクエン酸があれば、家で作れます。</p>
      <p>
        この記事では、1回分のレシピと香りの選び方のコツを紹介します。個人で楽しむためのレシピなので、できたものは自分で使う分だけにしてください。
      </p>

      <h2 id="recipe">基本のバスボムの作り方</h2>
      <p>
        オイルは水に溶けにくいので、先にココナッツオイルに混ぜてから粉に加えます。日本アロマ環境協会も、精油は無水エタノールや植物油に溶かしてから使うよう案内しています。協会は2020年に入浴剤の作り方も見直し、原液を塩や重曹に混ぜる方法から変更しました。
      </p>
      <p>
        重曹とクエン酸は2対1の割合です。ドテラの英語のレシピも、この2つは同じ割合です。型が大きいときは、この割合のまま粉を増やします。たとえば重曹60g、クエン酸30gにしても、オイルは1回分で合計5滴までのままです。
      </p>

      <MethodCard
        no={1}
        title="1回分のバスボム"
        items={[
          "重曹 40g",
          "クエン酸 20g",
          "ココナッツオイル 小さじ1（5mL）",
          "エッセンシャルオイル 合計5滴まで",
          "水に溶かした食紅 少量",
          "水を入れた霧吹き",
          "ビニール袋",
          "スプーン",
          "バスボム型",
        ]}
      >
        <Steps
          steps={[
            { title: "粉を混ぜる", text: "ビニール袋に重曹とクエン酸を入れ、袋の上からもんでよく混ぜます。" },
            { title: "香りと色を加える", text: "ココナッツオイルにオイルを混ぜて袋に入れます。食紅も少しずつ加え、手早くもみ混ぜます。" },
            { title: "霧吹きで湿らせる", text: "ひと吹きごとに混ぜ、握ると少し固まるくらいで止めます。一度に水をかけると泡が出てしまいます。" },
            { title: "型に詰めて外す", text: "スプーンで型に詰め、数分おいてから外します。" },
            { title: "湯船に入れる", text: "泡が消えたらお湯をよくかき混ぜてから入ります。" },
          ]}
        />
        <PointBox>水加減が仕上がりの分かれ目です。目安は、少し湿った砂のような手触りです。ぼろぼろ崩れるときはもうひと吹きし、泡が出はじめたら水を足すのをやめます。湿らせすぎたときは、重曹を少し足して混ぜ直します。</PointBox>
      </MethodCard>

      <h2 id="scent">香りの選び方のコツ</h2>
      <p>好きな香りを選ぶ前に、次の3つを確かめます。</p>
      <CheckPoints
        items={[
          { title: "「化粧品」の表示を確認する", text: "湯船のオイルは肌に触れます。ラベルに「化粧品」の表示がある製品を選びます。同じ名前でも容量で表示が変わる製品があります。" },
          { title: "柑橘とスパイスは入れない", text: "レモン、ベルガモット、グレープフルーツには光毒性があります。柑橘系やスパイス系は、入浴で刺激を感じることもあります。" },
          { title: "合計5滴を超えない", text: "協会の目安は、家庭の浴槽で合計1〜5滴です。ブレンドでも合計で数えます。初めての香りは2滴以内にします。" },
        ]}
      />
      <DataTable
        caption="バスボムに合わせやすい香りの例"
        headers={["香りのタイプ", "オイルの例", "製品ページの説明"]}
        rows={[
          ["花の香り", "ラベンダー", "パウダリー、フローラル。入浴剤に加える使い方"],
          ["甘く華やかな香り", "ゼラニウム", "グリーン、フローラル、スイート"],
          ["木の香り", "ヒノキ", "ウッディー、エアリー。バスソルトとブレンドする使い方"],
          ["樹脂の香り", "フランキンセンス", "ウォーム、クリーン。バスタイムに香らせる使い方"],
        ]}
      />
      <p>いずれも製品ページの表示は「塗・香」です。表示は変わることがあるので、お手元のラベルも確認してください。2種類を混ぜるなら、次の配合から試してみましょう。</p>
      <BlendRecipe
        title="花の香り"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
          { name: "ゼラニウム", color: oilColors.wildOrange, count: 1 },
        ]}
      />
      <BlendRecipe
        title="森の香り"
        drops={[
          { name: "ヒノキ", color: oilColors.peppermint, count: 2 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 1 },
        ]}
      />

      <h2 id="caution">作るときと使うときの注意点</h2>
      <CautionBox
        title="手作りするときの注意点"
        items={[
          "個人で楽しむためのレシピです。自分で使う分だけ作り、販売や譲渡はしないでください。無償のプレゼントも許可の対象とする自治体の案内があります。",
          "使うオイルは「化粧品」の表示がある製品だけにします。原液を肌につけたり、目に入れたりしないでください。オイルを扱うときは火のそばを避けます。",
          "初めてのオイルは、ココナッツオイル小さじ1に1滴混ぜて、腕の内側などに少量つけて様子を見てから使いましょう。肌に異常を感じたらお湯から上がって洗い流し、症状が続くときは皮膚科などに相談してください。",
          "肌が敏感な人はオイルを入れずに作り、洗面器のお湯に1〜3滴垂らして浴室に置く方法で香りを楽しみましょう。",
          "3歳未満の子どもにオイル入りのバスボムは使わないでください。協会は、3歳以上でも入浴での使用はできるだけ避けるよう案内しています。",
          "妊娠中、授乳中の人、治療中の人、子どもは、使う前に医師または薬剤師に相談してください。高齢の人や既往歴のある人は、半分以下の量から試します。",
          "清潔な道具と乾いた手で作ります。湿気で泡が出る材料なので、使う分だけ作り、早めに使い切りましょう。",
          "お菓子に見える色や形は避け、子どもやペットの手の届かない場所に保管してください。",
          "お使いの浴槽や給湯器の説明書も確認してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "何個できますか？",
            a: "型の大きさで変わります。小さい型で2個できたときは2個まとめて1回分とし、オイルが合計5滴を超えないようにします。",
          },
          {
            q: "子どもと一緒に作れますか？",
            a: "袋の上から粉をもむ工程は一緒に楽しめます。オイルを入れるのは大人が担当し、粉やオイルが目に入らないよう見守ります。子どもが入るお風呂には、オイルを入れずに作ったものを使いましょう。",
          },
          {
            q: "無水エタノールで作ってもいいですか？",
            a: "協会の方法は、エタノールに混ぜたオイルを塩や重曹に吹きかけ、すぐ湯船に入れるものです。時間がたつとエタノールが揮発し、原液だけが残る場合があるためです。固めて置いておくバスボムは、ココナッツオイルで作りましょう。",
          },
          {
            q: "コーンスターチは入れなくてもいいですか？",
            a: "入れなくても作れます。この記事のレシピは、重曹とクエン酸だけで作ります。",
          },
          {
            q: "乾かす時間は必要ですか？",
            a: "このレシピは、数分おいて型から外します。ドテラの英語のレシピは配合が違い、乾いた場所で2〜3日固めます。レシピごとに時間が違うと考えてください。",
          },
        ]}
      />

      <p>
        バスボムは水加減さえつかめば、色と香りを自由に変えられます。まずはオイル2滴から、好きな香りで作ってみてください。お湯にオイルを入れる前に知っておきたいことは
        <Link href="/blog/bath-oils">お風呂でのオイルの使い方</Link>に、年齢ごとの注意は
        <Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>にまとめています。
      </p>
      <NextStepBox />
    </>
  ),
};
