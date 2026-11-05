import Link from "next/link";
import { CautionBox, DataTable, Faq, NextStepBox, PointBox, ProductPhotos, Steps, type ArticleContent } from "../ArticleParts";

/** エッセンシャルオイルの使い道を見渡し、手順は各記事へ渡す案内の記事 */
export const howToUseAromaOils: ArticleContent = {
  summary: [
    "エッセンシャルオイルは何に使うのか、香り、肌、お風呂、掃除、クラフト、料理の使い道",
    "方法ごとの道具と滴数の早見表と、始める前に確かめること",
    "初心者が今日からできる最初の一歩と、よくある質問",
  ],
  toc: [
    { id: "uses", title: "エッセンシャルオイルは何に使う？使い道の一覧" },
    { id: "amount", title: "方法ごとの道具と滴数の早見表" },
    { id: "scent", title: "香りを楽しむ｜最初に試したい使い方" },
    { id: "skin", title: "肌とお風呂で使う｜表示を確かめて薄める" },
    { id: "home", title: "掃除、洗濯、クラフト、料理に使う" },
    { id: "start", title: "初心者が今日からできる最初の一歩" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
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
      note: "芳香、塗布、摂取の3つの使い方、特別なディフューザーがなくてもコットンやティッシュに数滴垂らせること、洗濯や家具の拭き掃除に使う例、カテゴリに従って使うこと",
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
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "製品ページの表示と使用方法、使用上の注意、保管の注意",
    },
    {
      title: "アロマスプレーの作り方｜保存方法や注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1886/",
      note: "ルームスプレーの材料と分量（無水エタノール5mL、精製水45mL、精油3〜10滴）、混ぜる順番、1〜2週間の使用目安",
    },
    {
      title: "お風呂でアロマを楽しもう！アロマバスの方法や効果、注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/health/1812/",
      note: "無水エタノールか植物油に溶かしてから使うこと、全身浴で合計1〜5滴、無水エタノール5mL",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "オイルを5〜10滴水タンクに垂らすこと",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴＝0.05mLで計算すること（キャリアオイル5mLに1滴で約1%）",
    },
  ],
  Body: () => (
    <>
      <p>
        アロマオイルの使い方を調べると、香り、肌、掃除、手作りと、たくさんの話が出てきます。エッセンシャルオイルは何に使うものなのか、最初は迷うかもしれません。初心者が今日から試すなら、香りを楽しむ使い方が手軽です。
      </p>
      <p>
        この記事では、エッセンシャルオイルやアロマオイルの使い道の全体と、方法ごとの滴数の目安をまとめます。気になる使い方から読み進めてください。「アロマオイル」と呼ばれる製品には、合成香料を含み、精油ではないものもあります。違いは<Link href="/blog/what-is-essential-oil">エッセンシャルオイルとは</Link>で説明しています。この記事で扱うのは、植物から抽出したエッセンシャルオイル（精油）です。
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
        区分のくわしい説明は、<Link href="/blog/doterra-drinkable">ドテラのオイルは飲める？</Link>にあります。表示は<Link href="/blog/doterra-how-to-use">ドテラのオイルの使い方</Link>へ。まず手元のボトルのラベルを見てみましょう。
      </p>

      <h2 id="amount">方法ごとの道具と滴数の早見表</h2>
      <p>
        はじめてのときに迷いやすいのが、何滴使うかです。ドテラは、最初は少量から始めるよう案内し、香りを楽しむならコットンやティッシュに数滴垂らす方法を紹介しています。方法ごとの目安は、日本アロマ環境協会の目安もあわせて、次のとおりです。
      </p>
      <DataTable
        caption="方法ごとの道具と滴数の目安"
        headers={["方法", "道具", "滴数の目安"]}
        rows={[
          ["ティッシュやハンカチに垂らす", "ティッシュ、ハンカチ", "ドテラは数滴、協会は1〜2滴"],
          ["マグカップのお湯に垂らす", "マグカップ、お湯", "半分ほどのお湯に1滴から"],
          ["ルームスプレーにする", "スプレーボトル、無水エタノール、精製水", "無水エタノール5mLと精製水45mLに3〜10滴"],
          ["ディフューザーで香らせる", "ディフューザー", "機器の説明書の目安。ドテラ ラルツディフューザーは5〜10滴"],
          ["お風呂に入れる", "無水エタノール", "全身浴で合計1〜5滴。無水エタノール5mLに混ぜてから入れる"],
          ["マッサージ用のオイルにする", "キャリアオイル", "体は濃度1%以下。キャリアオイル5mLに1滴で約1%"],
        ]}
      />
      <ProductPhotos names={["ドテラ ラルツディフューザー"]} />
      <p>
        どの方法も、少ない滴数から始めて、香りの強さを確かめながら1滴ずつ足します。お風呂とマッサージの手順は、<Link href="/blog/bath-oils">お風呂での使い方</Link>と<Link href="/blog/massage-oil-recipe">マッサージ用オイルの作り方</Link>にまとめています。
      </p>
      <PointBox>表の滴数は、香りを楽しむための目安です。香りが強いと感じたら、次は1滴減らして、窓を開けて換気しましょう。</PointBox>

      <h2 id="scent">香りを楽しむ｜最初に試したい使い方</h2>
      <p>
        香りを楽しむ方法は、オイルを肌につけず、道具も少なくて済みます。ドテラはコットンやティッシュに数滴、日本アロマ環境協会はティッシュやハンカチに1〜2滴垂らすよう案内しています。やりたいことに合わせて、次の記事へ進んでください。
      </p>
      <ul>
        <li>道具を買わずに試したい: <Link href="/blog/no-diffuser">ディフューザーなしで香りを楽しむ4つの方法</Link></li>
        <li>部屋全体に香らせたい: <Link href="/blog/diffuser-guide">ディフューザーの選び方</Link></li>
        <li>仕事や家事の時間に合わせて選びたい: <Link href="/blog/oils-by-scene">シーン別の香りの選び方</Link></li>
          <li>部屋ごとに置きたい: <Link href="/blog/oils-by-room">部屋別の使い方</Link></li>
          <li>車の中で楽しみたい: <Link href="/blog/oils-in-car">車で楽しむ方法</Link></li>
          <li>おやすみ前に楽しみたい: <Link href="/blog/bedtime-scents">寝室での使い方</Link></li>
          <li>贈り物にしたい: <Link href="/blog/oil-gifts">プレゼントの選び方</Link></li>
        <li>香りを組み合わせたい: <Link href="/blog/blend-basics">ブレンドの基本</Link></li>
        <li>滴数の感覚をつかみたい: <Link href="/blog/drop-count">1滴の量と滴数</Link></li>
      </ul>
      <PointBox>香りの感じ方は人によって違います。1本目は、説明の言葉よりも、自分が好きだと思える香りで選びましょう。</PointBox>

      <h2 id="skin">肌とお風呂で使う｜表示を確かめて薄める</h2>
      <p>
        「塗」の表示がある製品は肌に使えます。敏感肌、子どもの肌、初めて肌に使うオイルはキャリアオイルで薄めます。順番は<Link href="/blog/oils-on-skin">肌につけていい？</Link>へ。協会は原液を肌につけないよう案内し、目安はボディ用で1%以下、顔用で0.5%以下です。何滴になるかは、<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と濃度の計算</Link>で確かめてください。
      </p>
      <p>
        薄めたオイルは、腕や脚の<Link href="/blog/massage-oil-recipe">マッサージ用オイル</Link>や、おやすみ前の<Link href="/blog/foot-self-massage">足裏のセルフマッサージ</Link>に使えます。持ち歩くなら、<Link href="/blog/roll-on">ロールオン</Link>を作る方法もあります。
      </p>
      <p>
        「塗」の表示と入浴剤の案内がある製品は、お風呂に使えます。協会は2020年に方法を見直し、無水エタノールなどに混ぜてから入れる案内にしました。別の見解もあるので、最後はご自身で判断してください。分量と手順は、<Link href="/blog/bath-oils">お風呂での使い方</Link>にまとめました。
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
          <strong>料理</strong>: ドテラの「食品添加物」の表示がある製品は、ラベルどおりの量と方法で料理の香りづけに使えます。一方で、協会は、薄めても飲むことや料理に使うことをすすめていません。別の見解もあるので、最後はご自身で判断してください。例は<Link href="/blog/aromatic-table">アロマティックテーブル</Link>へ。
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
          "協会は、原液を肌につけないよう案内し、肌についたら清潔な大量の流水で洗い流すとしています。",
          "目に入れないでください。入ったら大量の水で洗い、こすらずに受診します。",
          "飲食に使えるのは「食品添加物」の表示がある製品だけです。協会は、精油の飲用をすすめていません。",
          "火のそばで使わないでください。子どもやペットの手の届かない場所に置きましょう。",
          "妊娠中や授乳中の方、薬を服用中や通院中の方、お子さまは、使う前に医師または薬剤師に相談してください。お年寄りや既往歴のある方は、基準の半分以下の量で試してください。",
          "協会の目安に合わせ、3歳未満の子どもには、香りを楽しむ以外の使い方をしないでください。ペットには安易に使わないでください。",
          "オイル入りのスプレーを、ほかの洗剤と混ぜないでください。洗剤を使ったあとは、水で流してから使います。",
          "オイルがついたタオルは、乾燥機にかけないでください。",
          "香りで気分が悪くなったら、使うのをやめて換気してください。体の不調が気になるときは、オイルで対処しようとせず、医師に相談してください。",
        ]}
      />
      <p>
        注意点は<Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>と<Link href="/blog/pets-safety">ペットのいる家での注意点</Link>にもまとめています。全体は<Link href="/blog/oil-precautions">注意点まとめ</Link>へ。
      </p>

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "はじめは何滴から使えばいいですか？",
            a: "ティッシュやマグカップなら、1滴からで十分です。ドテラは最初は少量から始めるよう案内し、協会はティッシュやハンカチに1〜2滴垂らす方法を紹介しています。香りが弱いと感じたら、1滴ずつ足しましょう。",
          },
          {
            q: "アロマオイルとエッセンシャルオイルは同じものですか？",
            a: (
              <>
                同じとは限りません。「アロマオイル」と呼ばれる製品には、合成香料などを混ぜたものもあります。植物から抽出したものがエッセンシャルオイル（精油）です。違いは<Link href="/blog/what-is-essential-oil">エッセンシャルオイルとは</Link>で説明しています。
              </>
            ),
          },
          {
            q: "1本目は、どのオイルを選べばいいですか？",
            a: (
              <>
                説明の言葉より、香りをかいで好きだと思えるものを選びましょう。ドテラのオイルを香りの系統で見比べるなら、<Link href="/blog/oil-guide">ドテラのオイル図鑑の一覧</Link>が便利です。買ったら、ラベルで使い方の表示を確かめます。
              </>
            ),
          },
          {
            q: "使ったあとのボトルは、どこに置けばいいですか？",
            a: (
              <>
                ふたをしっかり閉めて、直射日光を避けた涼しい場所に置きます。子どもやペットの手の届かない場所を選びましょう。くわしくは<Link href="/blog/oil-storage">オイルの保管方法</Link>へ。
              </>
            ),
          },
        ]}
      />

      <p>まずはラベルを読んで、ティッシュに1滴。そこから、使いたい場面に合う記事を読み進めてみてください。</p>
      <NextStepBox />
    </>
  ),
};
