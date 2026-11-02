import Link from "next/link";
import { oilColors } from "../Botanicals";
import { CautionBox, DataTable, Faq, NextStepBox, PairingList, PointBox, type ArticleContent } from "../ArticleParts";

/** 仕事、家事、リラックスタイムのシーン別にオイルを選ぶ記事 */
export const oilsByScene: ArticleContent = {
  summary: [
    "仕事、家事、リラックスタイムに合わせたオイルの選び方",
    "シーンごとの具体的な楽しみ方と滴数",
    "まわりの人と香りを分け合うときの配慮",
  ],
  toc: [
    { id: "basic", title: "選ぶときの基本" },
    { id: "work", title: "仕事の時間に" },
    { id: "housework", title: "家事の時間に" },
    { id: "relax", title: "リラックスタイムに" },
    { id: "caution", title: "まわりへの配慮と注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があること、公共の場所では周囲に配慮すること",
    },
    {
      title: "レモン",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/p/lemon-oil",
      note: "水を入れたスプレーボトルに加えて、テーブルや台所カウンターの表面を掃除する使い方",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "香りの特徴",
    },
    {
      title: "ペパーミント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "香りの特徴",
    },
    {
      title: "オレンジ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/orange-15ml/",
      note: "香りの特徴、拭き掃除にスプレーする使い方",
    },
    {
      title: "ティーツリー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/tea-tree-15ml/",
      note: "香りの特徴、水の入ったスプレーボトルに数滴入れて使う方法",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "香りの特徴",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "香りの特徴",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "香りの特徴、就寝時にディフューズする使い方",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "満水のタンクにオイル5〜10滴という目安",
    },
    {
      title: "アロマスプレーの作り方｜保存方法や注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1886/",
      note: "使う前によく振ること、手作りスプレーは1〜2週間で使い切ること",
    },
    {
      title: "精油を1%以下に希釈する理由とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年6月16日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/stepup/2448/",
      note: "ラベンダーの原液を枕に垂らす習慣で皮膚炎が起きた例",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、ペパーミントを皮膚刺激に注意が必要な精油の例に挙げていること、火気、子どもやペットの手の届かない場所での保管",
    },
    {
      title: "アロマで部屋をいいにおいにする方法！インテリアに合わせた香りコーディネート術も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年2月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4072/",
      note: "手荒れしやすい人はゴム手袋を使うこと、素材によって変色する場合があること",
    },
    {
      title: "身近にある洗剤の事故に注意！",
      publisher: "東京消防庁",
      url: "https://www.tfd.metro.tokyo.lg.jp/lfe/nichijo/detergent.html",
      note: "別の洗剤を使う前に水やお湯で流すこと",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らして香りを楽しむ方法",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "ハンカチに使うときは目立たない所で試すこと",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "ストーンなど電気を使わない道具は狭い範囲向けで、電気式は広い範囲向けであること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "妊娠中、授乳中、服薬中、通院中の方は使用前に医師または薬剤師に相談すること",
    },
  ],
  Body: () => (
    <>
      <p>
        エッセンシャルオイルやアロマオイルが何本か手元にあると、部屋や場面ごとの使い方に迷います。正解は1つではありません。使う場面と道具を決めてから選ぶと、手に取りやすくなります。
      </p>
      <p>この記事では、仕事、家事、リラックスタイムの3つの場面に分けて、選び方と楽しみ方を紹介します。部屋や玄関、トイレでの使い方もまとめました。</p>

      <h2 id="basic">選ぶときの基本</h2>
      <p>
        いちばん大切なのは、自分が心地よいと感じる香りを選ぶことです。香りの感じ方は人によって違います。この記事のオイルは香りの印象で選んだ例で、気分や体の変化を約束するものではありません。好きな香りに置き換えてください。
      </p>
      <p>使い方は製品の区分で変わります。ここでは香りを楽しむ方法だけを紹介します。肌に使いたいときは、「化粧品」の表示がある製品に限り、ラベルどおりに使ってください。</p>
      <p>道具は、香りを届けたい範囲で決めます。ストーンやティッシュは狭い範囲向け、ディフューザーは広い範囲向けです。</p>
      <DataTable
        caption="部屋と場面ごとの道具と滴数の目安"
        headers={["場面", "道具", "滴数の目安"]}
        rows={[
          ["職場のデスク", "ティッシュ、アロマストーン", "ティッシュなら1〜2滴"],
          ["自宅の仕事部屋", "ディフューザー", "説明書の目安"],
          ["テーブルの拭き掃除", "ガラスのスプレーボトル", "水に数滴"],
          ["読書やおやすみ前", "ティッシュ、ディフューザー", "ティッシュなら1〜2滴"],
          ["玄関、トイレ", "アロマストーン、ティッシュ", "1滴から"],
        ]}
      />

      <h2 id="work">仕事の時間に</h2>
      <p>仕事の前や合間に、すっきりした香りをそばに置いてみましょう。</p>
      <PairingList
        items={[
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "クリーンでフレッシュな柑橘の香り" },
          { name: "ペパーミント", en: "Peppermint", color: oilColors.peppermint, note: "ミントらしいフレッシュな香り" },
        ]}
      />
      <p>
        職場では、自分のまわりだけで香らせます。ティッシュに1〜2滴垂らしてデスクの端に置く方法や、電気を使わないアロマストーンは、<Link href="/blog/no-diffuser">ディフューザーがなくても香りを楽しむ方法</Link>で紹介しています。まずは1滴からで十分です。
      </p>
      <p>
        自宅で仕事をする日は、始める前にディフューザーを使う方法もあります。組み合わせの滴数は、<Link href="/blog/diffuser-blends">朝・昼・夜のブレンド例</Link>を参考にしてください。
      </p>
      <PointBox>ペパーミントは肌につけずに、香りだけを楽しみましょう。</PointBox>

      <h2 id="housework">家事の時間に</h2>
      <p>掃除の仕上げに香りを添えると、家事の時間が少し楽しくなります。</p>
      <PairingList
        items={[
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "テーブルやカウンターの拭き掃除に" },
          { name: "オレンジ", en: "Orange", color: oilColors.wildOrange, note: "スイートでフレッシュな柑橘の香り" },
          { name: "ティーツリー", en: "Tea Tree", color: oilColors.peppermint, note: "グリーンでハーブのような香り" },
        ]}
      />
      <p>
        ガラスのスプレーボトルに水を入れ、オイルを数滴加えてよく振ります。オイルは水と分離するので、使うたびに振ってください。テーブルやカウンターに吹きかけて、布で拭き取ります。作ったものは1〜2週間で使い切りましょう。
      </p>
      <p>
        素材によっては変色することがあるので、目立たない場所で試します。分量を決めて作りたいときは、<Link href="/blog/cleaning-spray">手作り掃除スプレーの作り方</Link>を参考にしてください。
      </p>
      <p>
        玄関は、来客の前にアロマストーンやティッシュに1滴から。トイレは狭いので、ティッシュに1滴で足ります。どちらも小皿にのせて置きましょう。リビングならディフューザーを少なめに使います。
      </p>

      <h2 id="relax">リラックスタイムに</h2>
      <p>読書やストレッチ、おやすみ前のひとときは、落ち着いた印象の香りを選んでみましょう。</p>
      <PairingList
        items={[
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "パウダリーで軽やかなフローラルの香り" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "温かく、スパイシーでクリーンな香り" },
          { name: "ドテラセレニティー", en: "Serenity", color: oilColors.lavender, note: "温かみのあるフローラルとハーブの香り" },
        ]}
      />
      <p>
        ディフューザーがあれば、説明書の目安の滴数で香らせます。ドテラ ラルツディフューザーなら、満水のタンクに5〜10滴です。ティッシュを使うときは1〜2滴垂らし、枕から少し離れた場所に置きましょう。
      </p>
      <p>
        1本で香りを決めたい夜は、ドテラセレニティーを選べます。製品ページにも、就寝時にディフューズする使い方があります。お風呂の時間に香りを楽しみたいときは、<Link href="/blog/bath-oils">お風呂でのオイルの使い方</Link>を読んでから試してください。
      </p>

      <h2 id="caution">まわりへの配慮と注意点</h2>
      <p>自分に心地よい香りでも、ほかの人には強く感じられることがあります。職場や共有の場所では、香りが広がらない方法を選びましょう。</p>
      <CautionBox
        items={[
          "原液を肌につけないでください。枕や寝具に直接垂らすのも避けましょう。",
          "香りで気分が悪くなったときは、使うのをやめて換気してください。",
          "オイル入りのスプレーを、ほかの洗剤と混ぜないでください。洗剤を使ったあとは、水で流してから使います。",
          "手荒れしやすい方は、掃除のときにゴム手袋を使いましょう。",
          "火のそばで使わないでください。子どもやペットの手の届かない場所に置きます。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方は、使う前に医師または薬剤師に相談してください。",
          "体の不調が気になるときは、オイルで対処しようとせず、医師に相談してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "1本だけで始めるなら、どの場面から考えますか？",
            a: "いちばん長く過ごす場面から考えてみましょう。この記事の例では、レモンを仕事と家事の両方に挙げています。迷ったら、好きな香りを優先してください。",
          },
          {
            q: "ティッシュの代わりにハンカチを使えますか？",
            a: "使えます。シミになることがあるので、目立たない場所で試してから使いましょう。",
          },
        ]}
      />

      <p>
        まずは、よく過ごす場面を1つ選んで、合いそうな香りを試してみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
