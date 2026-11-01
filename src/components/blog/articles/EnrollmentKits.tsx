import Link from "next/link";
import { CautionBox, CheckPoints, DataTable, Faq, NextStepBox, PointBox, type ArticleContent } from "../ArticleParts";

/** はじめての方向け: ドテラの登録キットの種類と選び方 */
export const enrollmentKits: ArticleContent = {
  summary: [
    "登録キットとは何か、会員登録とどう結びついているか",
    "公式サイトで確認できる、オイルが中心の3つの登録キットの内容",
    "目的別の選び方と最初に開ける1本、キットを選ばない始め方",
  ],
  toc: [
    { id: "what", title: "登録キットとは？登録と同時に最初のオイルがそろう" },
    { id: "lineup", title: "現行の登録キットの一覧と内容" },
    { id: "choose", title: "目的別のおすすめと選び方｜最初の1本をどう決めるか" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/enrollment-kit/",
      note: "現行の登録キットの一覧、目的に合わせて選べる3つのラインナップがあるという説明、キットの価格を登録料と単品の会員価格の合計と比べていること",
    },
    {
      title: "WA オイル登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/wa-oil-enrollment-kit/",
      note: "オイル登録キットの内容（ファミリー エッセンシャルズキット、オレンジ、アロマタッチ、ドテラ ラルツディフューザー、ドテラ ココナッツオイル、キャップステッカー）、登録料とWAサインアップキットが含まれること",
    },
    {
      title: "WC オイル登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/wc-oil-enrollment-kit/",
      note: "WA版と同じ内容であること、登録料が含まれること",
    },
    {
      title: "WA オイル デラックス登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/wa-oil-deluxe-enrollment-kit/",
      note: "オイル デラックス登録キットの内容（オイル13種類、ドテラ ラルツディフューザー、ドテラ ココナッツオイル、ウッドボックス、キャップステッカー）",
    },
    {
      title: "WC オイル デラックス登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/wc-oil-deluxe-enrollment-kit/",
      note: "WA版と同じ内容であること",
    },
    {
      title: "WA オイル コレクション登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/wa-oil-collection-enrollment-kit/",
      note: "51種類のオイルがそろうという説明、内容の一覧（ドテラセレニティー、ヒノキ、ベルガモット、ゼラニウム、ドテラ ホホバオイル、ハンド＆ボディローションなど）",
    },
    {
      title: "WC オイル コレクション登録キット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/wc-oil-collection-enrollment-kit/",
      note: "WA版と同じ内容であること",
    },
    {
      title: "ファミリー エッセンシャルズキット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/family-essentials-kit/",
      note: "5mL×10本の内訳（ラベンダー、レモン、ペパーミント、ティーツリー、フランキンセンス、オンガード、ゼンジェスト、イージーエア、ディープブルー、ドテラバランス）",
    },
    {
      title: "会員登録について",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/member/",
      note: "会員制度があること、WCとWAの2つの会員種別、WCの説明、登録できる年齢が満20歳以上であること、参考小売価格で購入する方法があること",
    },
    {
      title: "【重要】キット製品 一部内容変更のお知らせ ＜12月25日より＞",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2024年12月24日）",
      url: "https://www.doterra-info.jp/media/2665586/",
      note: "輸入の遅れでオイル コレクション登録キットのタンジェリンがシダーウッドに差し替えられた実例",
    },
    {
      title: "アロマタッチ オンライン認定コースのご案内",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2454059/",
      note: "オイル デラックス登録キットとオイル コレクション登録キットの購入者が受講の対象であること、アロマタッチ テクニックはアロマタッチキットのオイルで行うと案内されていること",
    },
    {
      title: "アロマタッチキット（ココナッツオイル専用ポンプ付）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/aromatouch-kit-with-jp-fco-pump/",
      note: "アロマタッチキットの内容（8種類の5mLとドテラ ココナッツオイル、専用ポンプ）",
    },
    {
      title: "ペパーミント（15mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-15ml/",
      note: "15mLの製品ページの表示が「香・食」であること",
    },
    {
      title: "ペパーミント（5mL）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/peppermint-5ml/",
      note: "5mLの製品ページの表示が「塗・香」であること（同じ名前でも容量で表示が違う例）",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "オイルが化粧品、食品添加物、雑貨の3つに分かれ使い方が異なること、届いたら使用方法と注意表示を確認すること、少量から始めること、異常が出たときの対応、医師または薬剤師への相談",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "ラベルの使用方法とカテゴリに従って使うこと、初めて使うオイルや子どもの肌にはキャリアオイルで薄めること、避ける部位",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を皮膚につけない、目に入れない、火気に注意、子どもやペットの手の届かない場所に保管、3歳未満は芳香浴以外を行わない、初めての人は低い濃度から試す、通院中や服薬中は医師や薬剤師に相談",
    },
  ],
  Body: () => (
    <>
      <p>
        「ドテラの登録キットを一覧で比べたいけれど、どれがおすすめか分からない」。登録キットは、会員登録のときに選ぶオイルのセットで、選び方しだいで最初に手元にそろうオイルが決まります。
      </p>
      <p>
        この記事では、公式サイトで内容を確認できる登録キットを表で整理し、目的別の選び方と、キットを選ばない始め方を紹介します。価格は変わるため数字は書きません。公式サイトの登録キットのページで確認してください。
      </p>

      <h2 id="what">登録キットとは？登録と同時に最初のオイルがそろう</h2>
      <p>
        ドテラの製品は会員制度のもとで販売されています。登録キットは、会員登録と最初の製品をひとつにしたセットで、公式の製品ページには価格に登録料が含まれると書かれています。
      </p>
      <p>
        会員の種類はWC（ホールセール・カスタマー）とWA（ウェルネス・アドボケイト）の2つで、キットも種類ごとに用意されていますが、中身は同じです。WCは、紹介や販売の活動をせずに製品を愛用する人のための種別と説明されています。
      </p>

      <h2 id="lineup">現行の登録キットの一覧と内容</h2>
      <p>
        公式の一覧ページは、目的に合わせて選べる3つのラインナップがあると説明しています。2026年11月1日時点のオイルが中心の3つを表にしました（WA、WCの区別は省略）。
      </p>
      <DataTable
        caption="登録キットの内容（2026年11月1日時点）"
        headers={["キット名", "入っているオイル", "オイル以外のもの"]}
        rows={[
          [
            "オイル登録キット",
            "ファミリー エッセンシャルズキット（5mL×10本: ラベンダー、レモン、ペパーミント、ティーツリー、フランキンセンス、オンガード、ゼンジェスト、イージーエア、ディープブルー、ドテラバランス）、オレンジ、アロマタッチ",
            "ドテラ ラルツディフューザー、ドテラ ココナッツオイル、キャップステッカー",
          ],
          ["オイル デラックス登録キット", "上の12種類に森の音を加えた13種類", "ドテラ ラルツディフューザー、ドテラ ココナッツオイル、ウッドボックス、キャップステッカー"],
          [
            "オイル コレクション登録キット",
            "公式の説明で51種類。ドテラセレニティー、ヒノキ、ベルガモット、ゼラニウムなどが加わる",
            "デラックスの4点に、ドテラ ホホバオイル、ハンド＆ボディローション",
          ],
        ]}
      />
      <p>
        オイル以外が中心のニュートリション、ウェルネス、ビューティー、プレミアム、フルケアの登録キットもあります。内容は公式の一覧ページで確認してください。
      </p>
      <p>
        内容は変わることがあります。2024年12月には、輸入の遅れでコレクションのタンジェリンがシダーウッドに差し替えられた告知が出ました。申し込む前に、公式ページの「内容」を見直しましょう。
      </p>

      <h2 id="choose">目的別のおすすめと選び方｜最初の1本をどう決めるか</h2>
      <p>「どんな場面で香りを使いたいか」を1つ思い浮かべると、キットも、届いて最初に開ける1本も決めやすくなります。</p>
      <CheckPoints
        items={[
          {
            title: "まず香りを楽しみたい → オイル登録キット",
            text: "5mLの10本で香りを比べられます。最初の1本はラベンダー。ティッシュに1滴垂らせば、おやすみ前の香りを試せます。次はレモンをキッチンで、ペパーミントをデスクで。",
          },
          {
            title: "家族で日常的に使いたい → オイル デラックス登録キット",
            text: "朝はドテラバランス、掃除の仕上げにレモンやオンガード、夜はラベンダーと、場面ごとに使い分けられる本数です。",
          },
          {
            title: "アロマタッチを学びたい → オイル デラックス以上のキット",
            text: "公式のオンライン認定コースの案内では、デラックスとコレクションの購入者が受講の対象です。技法はアロマタッチキット（8種類の5mLとココナッツオイル）で行うと案内されているので、キットは別に用意します。",
          },
        ]}
      />
      <p>
        各オイルの香りと使い方は、<Link href="/blog/lavender">ラベンダー</Link>、<Link href="/blog/lemon">レモン</Link>、<Link href="/blog/peppermint">ペパーミント</Link>、<Link href="/blog/frankincense">フランキンセンス</Link>、<Link href="/blog/on-guard">オンガード</Link>、<Link href="/blog/balance">ドテラバランス</Link>、<Link href="/blog/serenity">ドテラセレニティー</Link>の記事で紹介しています。アロマタッチ テクニックの流れは<Link href="/blog/aromatouch-technique">アロマタッチ テクニックとは？</Link>へ。子どもやペットがいる家庭は、<Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>と<Link href="/blog/pets-safety">ペットのいる家での注意点</Link>も先に読んでおくと安心です。
      </p>
      <PointBox>
        迷ったら、入っているオイルを図鑑の記事で眺めて、使う場面が思い浮かぶ本数の多いキットを選びましょう。思い浮かばなければ、小さいキットか単品からで十分です。
      </PointBox>

      <h3>キットを選ばない始め方</h3>
      <p>
        登録キットは必須ではありません。公式の一覧ページはキットの価格を「登録料と単品の会員価格の合計」と比べているので、登録料を払って単品を選ぶ始め方もあります。会員にならず参考小売価格で買う方法もあり、登録できるのは満20歳以上です。登録の流れは、ELIGŌ公式サイトの「How to join」で案内しています。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "キットの内容と価格は変わることがあります。申し込む前に、公式サイトの登録キットのページで最新の内容を確認してください。",
          "オイルは化粧品、食品添加物、雑貨の区分に分かれ、使い方が異なります。届いたら、ラベルの使用方法と注意表示を確認し、区分どおりに使いましょう。同じ名前でも容量で表示が違うことがあります。",
          "原液を肌につけず、目に入れず、火のそばで使わないでください。肌に使うのは「化粧品」の表示がある製品だけにし、初めて使うオイルはキャリアオイルで薄めて、低い濃度で少量から試します。赤み、はれ、かゆみなどが出たら使うのをやめ、皮膚科に相談してください。",
          "3歳未満の子どもには、香りを楽しむ以外の使い方をしません。オイルは子どもやペットの手の届かない場所に保管します。",
          "妊娠中、授乳中の方、持病がある方、薬を飲んでいる方、お子さまは、使う前に医師または薬剤師に相談してください。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "WAとWCで、キットの中身は違いますか？",
            a: "中身は同じで、違うのは登録の種類に合わせた付属の書類だけです。種別の違いは公式の「会員登録について」で確認してください。",
          },
          {
            q: "5mLと15mLでは、量のほかに違いがありますか？",
            a: "製品ページの表示が違うことがあります。ペパーミントは15mLが「香・食」、5mLが「塗・香」です。表示の見方は「ドテラのオイルはなぜ飲めると言われるの？」の記事で説明しています。",
          },
        ]}
      />

      <p>
        大きいキットほど多くの香りに触れられますが、使う場面が思い浮かぶオイルが入っているかを先に確かめましょう。まずは1本、ティッシュに1滴から始めてみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
