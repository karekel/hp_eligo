import Link from "next/link";
import { CautionBox, DataTable, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** エッセンシャルオイルの使い道を見渡し、手順は各記事へ渡す案内の記事 */
export const howToUseAromaOils: ArticleContent = {
  summary: [
    "エッセンシャルオイルは何に使うのか、香り、肌、掃除、クラフトなどの使い道",
    "使い道ごとに、始める前に確かめること",
    "初心者が今日からできる最初の一歩と、次に読む記事",
  ],
  toc: [
    { id: "uses", title: "エッセンシャルオイルは何に使う？使い道の一覧" },
    { id: "scent", title: "香りを楽しむ｜最初に試したい使い方" },
    { id: "skin", title: "肌とお風呂で使う｜表示を確かめて薄める" },
    { id: "home", title: "掃除、洗濯、クラフト、料理に使う" },
    { id: "start", title: "初心者が今日からできる最初の一歩" },
    { id: "caution", title: "使うときの注意点" },
  ],
  sources: [
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュやハンカチに1〜2滴垂らす方法、肌に使う濃度の目安（1%以下、顔は0.5%以下）",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "芳香、塗布、摂取の3つの使い方、洗濯や家具の拭き掃除に使う例、カテゴリに従って使うこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "オイルが化粧品、食品添加物、雑貨に分かれ使い方が異なること、最初は少量から始めること、妊娠中や授乳中、服薬中、通院中の方は使用前に相談すること",
    },
    {
      title: "ペパーミント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "15mLの製品ページの「香・食」の表示（容量で表示が変わる例）",
    },
    {
      title: "ペパーミント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLの製品ページの「塗・香」の表示（容量で表示が変わる例）",
    },
    {
      title: "精油とアロマオイルの違いは？選び方や楽しみ方も解説",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1836/",
      note: "アロマオイルは精油や合成香料、無水エタノール、植物油などを混ぜた製品で、合成香料も含むこと",
    },
    {
      title: "【初心者必見】アロマの基本的な使い方と注意点とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1325/",
      note: "精油の引火性、ペットに安易に行わないこと",
    },
    {
      title: "アロマテラピー検定公式テキスト（2020年6月改訂版）について",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/licences/aroma/text/pdf/text_info_202006.pdf",
      note: "沐浴は原液を湯に直接入れず、無水エタノールに混ぜる方法に変わったこと",
    },
    {
      title: "精油はどのようにして作られる？主な抽出方法や具体的な活用法について紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年9月17日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4572/",
      note: "精油は水に溶けにくいこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液、目、火気、保管の注意、肌についたときと目に入ったときの対処、お年寄りや既往歴のある人の使用量",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "飲用と料理への使用をすすめていないこと、3歳未満は芳香浴以外を行わないこと",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があること",
    },
    {
      title: "身近にある洗剤の事故に注意！",
      publisher: "東京消防庁",
      url: "https://www.tfd.metro.tokyo.lg.jp/lfe/nichijo/detergent.html",
      note: "別の洗剤を使う前に水やお湯で流すこと",
    },
    {
      title: "消費者庁からの精油の使い方に関する注意喚起について",
      publisher: "公益社団法人 日本アロマ環境協会（2025年4月2日）",
      url: "https://www.aromakankyo.or.jp/aeaj-news/detail/2296",
      note: "オイルがついたタオルを乾燥機にかけないこと",
    },
    {
      title: "手作り石けんの取り扱いにご注意を",
      publisher: "三重県 医療保健部 薬務課",
      url: "https://www.pref.mie.lg.jp/YAKUMUS/HP/0001213310003.htm",
      note: "手作り品を人にプレゼントすることや販売することが規制の対象になる例",
    },
  ],
  Body: () => (
    <>
      <p>
        アロマオイルの使い方を調べると、香り、肌、掃除、手作りと、たくさんの話が出てきます。エッセンシャルオイルは何に使うものなのか、最初は迷うかもしれません。初心者が今日から試すなら、香りを楽しむ使い方が手軽です。
      </p>
      <p>
        この記事は、使い道の全体を見渡す地図です。手順はそれぞれの記事にまとめているので、気になるところから読み進めてください。「アロマオイル」と呼ばれる製品には、合成香料を含み、精油ではないものもあります。違いは<Link href="/blog/what-is-essential-oil">エッセンシャルオイルとは</Link>で説明しています。この記事で扱うのは、植物から抽出したエッセンシャルオイル（精油）です。
      </p>

      <h2 id="uses">エッセンシャルオイルは何に使う？使い道の一覧</h2>
      <p>
        使い道は、大きく6つに分けられます。ただし、どのオイルでも全部できるわけではありません。ドテラのオイルは「化粧品」「食品添加物」「雑貨」の区分で使い方が分かれ、同じ名前でも容量で区分が変わることがあります。ほかのメーカーの製品も、ラベルと説明書の案内に従います。
      </p>
      <DataTable
        caption="使い道の一覧と、始める前に確かめること"
        headers={["使い道", "主な例", "確かめること"]}
        rows={[
          ["香り", "ティッシュ、アロマストーン、ディフューザー", "香りを楽しむ使い方の案内があるか"],
          ["肌", "植物油で薄めたマッサージ用オイル、ロールオン", "「化粧品」の表示があるか"],
          ["お風呂", "オイルを混ぜてからお湯に入れる", "「化粧品」の表示があるか"],
          ["掃除、洗濯", "拭き掃除や洗濯の香りづけ", "素材に合うか、洗剤と混ぜないか"],
          ["クラフト", "バスボム、クリーム、香水", "肌に使うなら「化粧品」の表示があるか"],
          ["料理", "料理や飲み物の香りづけ", "「食品添加物」の表示があるか"],
        ]}
      />
      <p>
        区分のくわしい説明は、<Link href="/blog/doterra-drinkable">ドテラのオイルはなぜ「飲める」と言われるの？</Link>にあります。まず手元のボトルのラベルを見てみましょう。
      </p>

      <h2 id="scent">香りを楽しむ｜最初に試したい使い方</h2>
      <p>
        香りを楽しむ方法は、オイルを肌につけず、道具も少なくて済みます。日本アロマ環境協会の案内では、ティッシュやハンカチに1〜2滴垂らすだけでも楽しめます。やりたいことに合わせて、次の記事へ進んでください。
      </p>
      <ul>
        <li>道具を買わずに試したい: <Link href="/blog/no-diffuser">ディフューザーがなくても香りを楽しむ方法</Link></li>
        <li>部屋全体に香らせたい: <Link href="/blog/diffuser-guide">ディフューザーの選び方と使い方</Link></li>
        <li>仕事や家事の時間に合わせて選びたい: <Link href="/blog/oils-by-scene">シーン別の使い方</Link></li>
        <li>香りを組み合わせたい: <Link href="/blog/blend-basics">ブレンドの基本</Link></li>
        <li>滴数の感覚をつかみたい: <Link href="/blog/drop-count">1滴の量と滴数</Link></li>
      </ul>
      <PointBox>香りの感じ方は人によって違います。1本目は、説明の言葉よりも、自分が好きだと思える香りで選びましょう。</PointBox>

      <h2 id="skin">肌とお風呂で使う｜表示を確かめて薄める</h2>
      <p>
        肌に使うのは、ラベルに「化粧品」の表示がある製品だけです。原液は肌につけず、植物油で薄めます。協会の目安は、ボディ用で1%以下、顔用で0.5%以下です。何滴になるかは、<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と濃度の計算</Link>で確かめてください。
      </p>
      <p>
        薄めたオイルは、<Link href="/blog/foot-self-massage">足裏のセルフマッサージ</Link>に使えます。持ち歩くなら、<Link href="/blog/roll-on">ロールオン</Link>を作る方法もあります。
      </p>
      <p>
        お風呂では、オイルをお湯に直接入れません。オイルは水に溶けにくいので、無水エタノールなどに混ぜてから入れます。分量と手順は、<Link href="/blog/bath-oils">お風呂での使い方</Link>にまとめました。
      </p>

      <h2 id="home">掃除、洗濯、クラフト、料理に使う</h2>
      <p>香りに慣れてきたら、暮らしの中の使い道も広がります。どれも香りを添えて楽しむ使い方です。</p>
      <ul>
        <li>
          <strong>掃除</strong>: 拭き掃除の仕上げに香りを添えます。分量は<Link href="/blog/cleaning-spray">手作り掃除スプレーの作り方</Link>へ。
        </li>
        <li>
          <strong>洗濯</strong>: 柔軟剤スプレーやアイロンがけの香りづけは、<Link href="/blog/laundry-oils">洗濯での使い方</Link>へ。
        </li>
        <li>
          <strong>クラフト</strong>: <Link href="/blog/bath-bomb">バスボム</Link>、<Link href="/blog/handmade-cream">手作りクリーム</Link>、<Link href="/blog/natural-perfume">ナチュラルパフューム</Link>、<Link href="/blog/potpourri">ポプリ</Link>などがあります。
        </li>
        <li>
          <strong>料理</strong>: 協会は、薄めても飲むことや料理に使うことをすすめていません。料理の香りづけは、ドテラの「食品添加物」の表示がある製品に限った話で、ラベルどおりの量と方法で使います。例は<Link href="/blog/aromatic-table">アロマティックテーブル</Link>へ。
        </li>
      </ul>
      <p>手作りコスメは、自分で使う分だけにしましょう。販売や人への譲渡はしないでください。</p>

      <h2 id="start">初心者が今日からできる最初の一歩</h2>
      <p>一度に全部試す必要はありません。次の順番で、1つずつ進めましょう。</p>
      <Steps
        steps={[
          { title: "ラベルを読む", text: "手元のボトルの使用方法と注意書きを確かめます。" },
          { title: "ティッシュに1滴垂らす", text: "小皿にのせて、机の端に置きます。" },
          { title: "香りの強さを確かめる", text: "弱いと感じたら1滴足します。強いと感じたら離して、窓を開けます。" },
          { title: "次の使い道を1つ選ぶ", text: "部屋で香らせる、掃除に使うなど、興味のあるものを1つだけ足します。" },
        ]}
      />
      <p>
        ボトルの置き場所も、今日のうちに決めておきましょう。しまい方は<Link href="/blog/oil-storage">オイルの保管方法</Link>にまとめています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "原液を肌につけないでください。肌についたら、清潔な大量の流水で洗い流します。",
          "目に入れないでください。入ったら大量の水で洗い、こすらずに受診します。",
          "飲食に使えるのは「食品添加物」の表示がある製品だけです。協会は、精油の飲用をすすめていません。",
          "火のそばで使わないでください。子どもやペットの手の届かない場所に置きましょう。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしないでください。ペットには安易に使わないでください。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方は、使う前に医師または薬剤師に相談してください。お年寄りや既往歴のある方は、基準の半分以下の量で試してください。",
          "オイル入りのスプレーを、ほかの洗剤と混ぜないでください。洗剤を使ったあとは、水で流してから使います。",
          "オイルがついたタオルは、乾燥機にかけないでください。",
          "香りで気分が悪くなったら、使うのをやめて換気してください。体の不調が気になるときは、オイルで対処しようとせず、医師に相談してください。",
        ]}
      />
      <p>
        注意点は<Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>と<Link href="/blog/pets-safety">ペットのいる家での注意点</Link>にもまとめています。
      </p>

      <p>まずはラベルを読んで、ティッシュに1滴。そこから、使いたい場面に合う記事を読み進めてみてください。</p>
      <NextStepBox />
    </>
  ),
};
