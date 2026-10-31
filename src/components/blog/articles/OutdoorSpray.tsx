import Link from "next/link";
import { oilColors } from "../Botanicals";
import { BlendRecipe, CautionBox, DataTable, Faq, MethodCard, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** 持ち物に香りを添えるアウトドアスプレーのレシピ */
export const outdoorSpray: ArticleContent = {
  summary: [
    "肌につけず、リュックや帽子の外側に香りを添えるスプレーの考え方",
    "30mLと50mLのボトルで作る分量と手順、濃度の計算",
    "外に持ち出すときの火気と高温の注意",
  ],
  toc: [
    { id: "rule", title: "肌につけず、持ち物に香りを添える" },
    { id: "recipe", title: "基本のアウトドアスプレーの作り方" },
    { id: "amount", title: "ボトルの大きさと濃度の決め方" },
    { id: "blend", title: "外遊びに合う香りの組み合わせ" },
    { id: "caution", title: "持ち歩くときと使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "エッセンシャルオイルで作る『リネンスプレー』レシピ（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/tools/product-center/Display/odor%20control-recipe.pdf",
      note: "50mLのボトルに無水エタノール10mL、精製水40mLで作るスプレーの分量と混ぜる順番、洋服などの布に使えること。この記事ではオイルの種類と滴数を変えています",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "製品ページの香の表示",
    },
    {
      title: "ゼラニウム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/geranium-15ml/",
      note: "製品ページの香の表示",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "製品ページの香の表示",
    },
    {
      title: "アロマで部屋をいいにおいにする方法！インテリアに合わせた香りコーディネート術も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年2月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4072/",
      note: "かんきつ系や樹脂系の精油は布に色がつくおそれがあること、保存料が入っていないものは冷暗所に置いて2週間以内に使い切ること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、火気、保管、3歳未満の扱い",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "動物は人間と身体の仕組みが異なるので注意をすすめていること、精油の航空機への持ち込みと、規則で持ち込めない場合があること",
    },
    {
      title: "消毒用アルコールの安全な取扱いについて",
      publisher: "総務省消防庁",
      url: "https://www.fdma.go.jp/mission/prevention/alcohol/items/alcohol_leaflet.pdf",
      note: "アルコールの火気、高温の場所、換気、容器の表示の注意。消毒用アルコールについての案内",
    },
    {
      title: "アルコールの増産等に係る消防法令の運用に関する留意事項及び運用事例（令和２年５月１日版）",
      publisher: "総務省消防庁",
      url: "https://www.fdma.go.jp/mission/prevention/alcohol/items/alcohol_jirei200501.pdf",
      note: "エタノール（100%）の引火点が13℃であること",
    },
    {
      title: "石油ストーブ「12.近くでアルコール消毒液を使用して引火」",
      publisher: "独立行政法人 製品評価技術基盤機構（NITE）",
      url: "https://www.nite.go.jp/jiko/chuikanki/poster/nenshou/2020112603.html",
      note: "火気の近くで吹きかけたアルコールに引火すること",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があり、公共の場所では周囲に配慮すること",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして濃度を計算すること、濃度はオイルの量÷全体の量×100で求めること",
    },
    {
      title: "身近な危険物の事故を防ぐために",
      publisher: "東京消防庁",
      url: "https://www.tfd.metro.tokyo.lg.jp/inf/k_week/jikken.html",
      note: "消毒用エタノールなどの炎は青白く、明るい場所では見えにくいこと",
    },
  ],
  Body: () => (
    <>
      <p>公園やキャンプに出かける日は、持ち物にも好きな香りを連れていきませんか。無水エタノールと水にオイルを混ぜるだけで、外遊び用のスプレーが作れます。</p>
      <p>この記事では、基本の分量と香りの組み合わせ、外に持ち出すときの注意点を紹介します。</p>

      <h2 id="rule">肌につけず、持ち物に香りを添える</h2>
      <p>
        このスプレーは、体ではなく持ち物に香りを添えるものです。リュックの外側、帽子の外側、レジャーシートの端など、肌に触れない場所に軽く吹きかけます。帽子の内側や襟元など、肌に触れる場所には使いません。
      </p>
      <p>肌につけないので、製品ページに「香」の表示があるオイルから選べます。お手元のラベルの使用方法も確かめてください。出かける前に、火のない風通しのよい場所で吹きかけておくと、外で周りを気にせずにすみます。</p>
      <p>
        吹きかける場所は、体に当たる面を避けて選びます。リュックなら背中に当たらない外ポケットのあたり、帽子ならつばの外側です。レジャーシートは、座る場所や食べ物を置く場所から離れた端にしましょう。どれも1か所に軽く吹きかけ、乾いてから身につけたり広げたりします。
      </p>

      <h2 id="recipe">基本のアウトドアスプレーの作り方</h2>
      <MethodCard
        no={1}
        title="50mLのアウトドアスプレー"
        items={["無水エタノール 10mL", "精製水 40mL", "エッセンシャルオイル 合計3〜10滴", "遮光ガラスのスプレーボトル 50mL", "ラベル"]}
      >
        <Steps
          steps={[
            { title: "エタノールとオイルを混ぜる", text: "ボトルに無水エタノールとオイルを入れ、振り混ぜます。オイルは水に溶けにくいので、ここで先に混ぜます。" },
            { title: "精製水を加える", text: "精製水を加えて、さらに振り混ぜます。" },
            { title: "ラベルを貼る", text: "作った日、オイルの名前と滴数を書いて貼ります。消防庁の案内にならって「火気厳禁」とも書いておくと、家族にも伝わります。" },
            { title: "よく振って吹きかける", text: "使うたびによく振ります。初めての生地は、目立たない場所で試してからにしましょう。" },
          ]}
        />
        <PointBox>まずは合計3滴で作り、香りが足りなければ次に作るときに増やします。10滴で濃度は約1%です。</PointBox>
      </MethodCard>

      <h2 id="amount">ボトルの大きさと濃度の決め方</h2>
      <p>
        手作りのスプレーは長く置けないので、出かける回数が少ないなら小さなボトルが向いています。無水エタノールと精製水を1対4の割合にすれば、30mLでも同じ手順で作れます。
      </p>
      <DataTable
        caption="ボトルの大きさごとの分量と濃度の目安"
        headers={["ボトル", "無水エタノール", "精製水", "オイルの合計"]}
        rows={[
          ["30mL", "6mL", "24mL", "2〜6滴（約0.3〜1%）"],
          ["50mL", "10mL", "40mL", "3〜10滴（約0.3〜1%）"],
        ]}
      />
      <p>
        濃度は、日本アロマ環境協会の計算式で確かめられます。1滴を0.05mLとして、オイルの量÷全体の量×100です。50mLに10滴なら、オイルは0.5mL、全体は50.5mLなので約1%です。
      </p>

      <h2 id="blend">外遊びに合う香りの組み合わせ</h2>
      <p>レモンやオレンジなどの柑橘系と、フランキンセンスなどの樹脂系は布に色が移ることがあるので、このスプレーには入れません。次の組み合わせから試してみましょう。</p>
      <BlendRecipe
        title="木かげの香り"
        drops={[
          { name: "ヒノキ", color: oilColors.peppermint, count: 3 },
          { name: "ラベンダー", color: oilColors.lavender, count: 3 },
        ]}
      />
      <BlendRecipe
        title="草花の香り"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 4 },
          { name: "ゼラニウム", color: oilColors.wildOrange, count: 2 },
        ]}
      />
      <p>
        どちらも合計6滴なので、50mLなら濃度は約0.6%、30mLなら約1%です。オイルが1本だけなら、ラベンダーを合計3〜5滴で作っても楽しめます。
      </p>

      <h2 id="caution">持ち歩くときと使うときの注意点</h2>
      <CautionBox
        title="火と高温に注意"
        items={[
          "エタノール（100%）の引火点は13℃で、火がつきやすい液体です。バーベキュー、たき火、カセットコンロ、たばこのそばで作ったり吹きかけたりしないでください。",
          "吹きかけた直後の持ち物を、火に近づけないでください。",
          "夏の車内や直射日光の当たる場所に置かないでください。テントの中など閉めきった場所で多量に吹きかけるのも避けましょう。",
        ]}
      />
      <CautionBox
        title="使うときの注意点"
        items={[
          "肌や顔、人に向けて吹きかけないでください。原液を肌につけたり、目に入れたりしないでください。",
          "肌についたら水で洗い流します。赤みやかゆみが出たら、皮膚科などに相談してください。",
          "3歳未満の子どもの持ち物や衣類には使わないでください。子どもと出かけるときは、スプレーを大人が管理します。",
          "日本アロマ環境協会は、動物は人間と身体の仕組みが異なるとして、注意をすすめています。犬の散歩などには使わないでください。",
          "生地によっては色が変わったり跡が残ったりします。必ず目立たない場所で試してください。",
          "妊娠中、授乳中の人、持病がある人、服薬中の人は、使う前に医師または薬剤師に相談してください。",
          "公園や電車など人の集まる場所では、吹きかけないようにしましょう。香りの感じ方には個人差があります。",
          "保存料が入っていないので、冷暗所に置いて2週間以内に使い切ります。飲み物と間違えないようラベルを貼り、子どもの手の届かない場所に置いてください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "肌にスプレーしてもいいですか？",
            a: "この記事のスプレーは肌につけません。外出先で肌に使う香りを楽しみたいときは、ロールオンの記事を参考にしてください。",
          },
          {
            q: "飛行機に持ち込めますか？",
            a: "協会は、精油は手荷物で持ち込めるとしながら、引火点が60℃以下の精油は規則で持ち込めない場合があると案内しています。無水エタノールを含む手作りのスプレーは、利用する航空会社に事前に確認してください。",
          },
          {
            q: "水道水で作ってもいいですか？",
            a: "水でも作れます。保存料が入っていないので、精製水の場合と同じように早めに使い切ってください。",
          },
          {
            q: "屋外なら、火の近くで吹きかけてもいいですか？",
            a: "いいえ。東京消防庁は、エタノールなどの炎は青白く、明るい場所では見えにくいと説明しています。日中の屋外では火がついても気づきにくいので、火を使う場所から離れて使いましょう。",
          },
        ]}
      />

      <p>
        いつもの香りをリュックに添えるだけで、外遊びの支度が少し楽しくなります。まずは3滴から作ってみてください。ボトル選びは
        <Link href="/blog/oil-containers">オイルの容器の選び方</Link>を、肌に使う香りは
        <Link href="/blog/roll-on">ロールオンアロマの作り方</Link>を参考にしてください。
      </p>
      <NextStepBox />
    </>
  ),
};
