import Link from "next/link";
import { CautionBox, CheckPoints, DataTable, Faq, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** 1滴の量の目安、滴数の数え方、オイルが出にくいときの記事 */
export const dropCount: ArticleContent = {
  summary: [
    "1滴は約0.05mL。滴数とmLの換算の目安",
    "使い方ごとの滴数の目安と、ボトルから1滴ずつ落とす手順",
    "オイルが出にくいときに試すこと",
  ],
  toc: [
    { id: "volume", title: "1滴は約0.05mL" },
    { id: "uses", title: "使い方ごとの滴数の目安" },
    { id: "count", title: "滴数の数え方" },
    { id: "slow", title: "オイルが出にくいとき" },
    { id: "caution", title: "扱うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "種類に関係なく1滴＝0.05mLで計算すること、濃度の計算式",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会（2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "1滴は約0.05mLという目安",
    },
    {
      title: "How to Use an Entire Bottle of Lavender Oil",
      publisher: "doTERRA（カナダ向け公式、英語）",
      url: "https://www.doterra.com/CA/en/blog/healthy-living-how-to-use-an-entire-bottle-of-lavender",
      note: "15mLのボトルに約250滴入っているという記載",
    },
    {
      title: "ドテラバランス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-balance-15ml/",
      note: "成分にココナッツオイルが含まれること",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "揮発しやすいのでしっかりふたをすること、高温や極端な温度変化を避けること、開封後1年以内を目安に使い切ること",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュやハンカチに1〜2滴、沐浴は5mL程度の無水エタノールに混ぜて全身浴1〜5滴、半身浴、手浴、足浴1〜3滴",
    },
    {
      title: "アロマスプレーの作り方｜保存方法や注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1886/",
      note: "50mLの容器に精油3〜10滴という分量",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "満水のタンクにオイル5〜10滴という目安",
    },
    {
      title: "オイルアクセサリー - dōTERRA Product Line",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/pl/doterra-oil-accessories",
      note: "2mLのミニボトルが掲載されていること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、原液がついたときや目に入ったときの対応、火気、保管",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "精油が家具やカーテンの変色の原因になること",
    },
    {
      title: "消費者庁からの精油の使い方に関する注意喚起について",
      publisher: "公益社団法人 日本アロマ環境協会（2025年4月2日）",
      url: "https://www.aromakankyo.or.jp/aeaj-news/detail/2296",
      note: "オイルがついたティッシュの捨て方",
    },
  ],
  Body: () => (
    <>
      <p>
        エッセンシャルオイルのレシピは、「5滴」や「0.5mL」のように書かれています。滴数の感覚がつかめると、レシピの量がすぐに読み取れるようになります。
      </p>
      <p>この記事では、1滴が何mLかの目安と、使い方ごとの滴数、ボトルから1滴ずつ落とす手順、オイルが出にくいときに試すことをまとめます。</p>

      <h2 id="volume">1滴は約0.05mL</h2>
      <p>
        計算の目安は、1滴＝約0.05mLです。日本アロマ環境協会の資料では、精油の種類に関係なく1滴を0.05mLとして濃度を計算します。つまり、20滴で1mLです。
      </p>
      <DataTable
        caption="滴数とmLの換算の目安"
        headers={["滴数", "量の目安"]}
        rows={[
          ["1滴", "0.05mL"],
          ["5滴", "0.25mL"],
          ["10滴", "0.5mL"],
          ["20滴", "1mL"],
          ["100滴", "5mL"],
        ]}
      />
      <p>
        ただし、これは計算用の目安です。ドテラのカナダ向け公式ブログには、15mLのボトルに約250滴入っていると書かれています。この数字で割ると1滴は約0.06mLになり、協会の目安より少し多くなります。
      </p>
      <p>
        15mLのボトルなら、250〜300滴ほどと考えておくとよいでしょう。ディフューザーに1回5滴使うなら、約50〜60回分の計算です。同じ考え方で、5mLなら約80〜100滴、3mLなら約50〜60滴、2mLのミニボトルなら約30〜40滴です。
      </p>
      <p>
        協会は、開封後1年以内を目安に使い切るよう案内しています。週に1回5滴使うと、1年で約260滴になり、15mLをほぼ使い切ります。詳しくは<Link href="/blog/oil-storage">オイルの保管方法</Link>を確認してください。
      </p>

      <h2 id="uses">使い方ごとの滴数の目安</h2>
      <p>主な使い方の目安を、滴数と量で並べました。はじめは少ない滴数から試しましょう。</p>
      <DataTable
        caption="1回に使う滴数の目安"
        headers={["使い方", "滴数", "量の目安"]}
        rows={[
          ["ティッシュやハンカチに垂らす", "1〜2滴", "0.05〜0.1mL"],
          ["ドテラ ラルツディフューザーの満水のタンクに入れる", "5〜10滴", "0.25〜0.5mL"],
          ["全身浴（無水エタノール約5mLに混ぜる）", "1〜5滴", "0.05〜0.25mL"],
          ["半身浴、手浴、足浴（同上）", "1〜3滴", "0.05〜0.15mL"],
          ["50mLのスプレーを作る", "3〜10滴", "0.15〜0.5mL"],
        ]}
      />
      <p>
        入浴は肌に触れる使い方です。使えるオイルと手順は、<Link href="/blog/bath-oils">お風呂でのオイルの使い方</Link>で確認してください。スプレーの作り方は、<Link href="/blog/no-diffuser">ディフューザーがなくても香りを楽しむ方法</Link>で紹介しています。
      </p>

      <h2 id="count">滴数の数え方</h2>
      <p>中栓から1滴ずつ出るボトルは、傾け方で出方が変わります。次の順番で試してみてください。</p>
      <div className="mt-6">
        <Steps
          steps={[
            { title: "キャップのリングを外す", text: "開封後にふたの下に残るリングは、外しておくとオイルがたまりにくく、清潔に使えます。" },
            { title: "受けるものの上で斜めに傾ける", text: "ボトルは振りません。振ると勢いよく出て、飛び散ることがあります。" },
            { title: "静かに待って1滴ずつ数える", text: "ボトルをたたく必要はありません。傾けたまま、落ちた数を数えます。" },
            { title: "すぐにふたを閉める", text: "オイルは揮発しやすいので、開けたままにすると減ってしまいます。" },
          ]}
        />
      </div>
      <PointBox>入れすぎた分は戻せません。レシピの量より少なめに落として、香りを確かめながら足しましょう。</PointBox>

      <h2 id="slow">オイルが出にくいとき</h2>
      <p>
        オイルには、さらさらしたものと粘りのあるものがあります。柑橘系はさらさらしていて、すぐに落ちてきます。ココナッツオイルを含むドテラバランスや、ベチバー、ミルラは、落ちてくるまでに時間がかかります。
      </p>
      <p>すぐに出なくても、粘りのせいかもしれません。次のことを試してみてください。</p>
      <CheckPoints
        items={[
          { title: "傾けたまま少し待つ", text: "粘りのあるオイルは、ゆっくり落ちてきます。少し長めに待ってみましょう。" },
          { title: "お湯であたためない", text: "高温や急な温度変化は、オイルの変化を進めます。ボトルをお湯につけるのは避けましょう。" },
          { title: "スポイトを使う", text: "粘りのあるオイルをよく使うなら、市販のスポイトを使う方法もあります。オイルごとに分けると、香りが混ざりません。" },
        ]}
      />
      <p>
        小分けの容器を選ぶときは、<Link href="/blog/oil-containers">オイルの容器の選び方</Link>も確認してください。
      </p>

      <h2 id="caution">扱うときの注意点</h2>
      <CautionBox
        title="滴数を数えるときの注意点"
        items={[
          "原液を肌につけないでください。ついたときは、清潔な大量の流水で洗います。",
          "オイルが目に入ったときは、こすらずに大量の水で洗い、医療機関を受診してください。",
          "オイルがついた手で目や顔を触らないようにしましょう。",
          "こぼしたオイルは、家具や布に跡や変色を残すことがあります。ボトルは小皿の上で扱うと安心です。",
          "オイルがついたティッシュは、水で湿らせてから捨ててください。",
          "火のそばで扱わないでください。使い終わったら、子どもやペットの手の届かない場所にしまいます。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "mLで書かれたレシピを滴数にするには？",
            a: "mLの数に20を掛けます。たとえば0.25mLなら5滴です。",
          },
          {
            q: "小さじ1杯は何滴ですか？",
            a: "小さじ1杯を5mLとすると、計算上は100滴です。",
          },
          {
            q: "オイルの種類で1滴の量は変わりますか？",
            a: "計算では、種類に関係なく1滴を0.05mLとして扱います。実際の量が種類ごとにどれだけ違うかを示した資料は、確認できていません。",
          },
          {
            q: "1滴多く落としてしまったときは？",
            a: "香りを楽しむだけなら、そのまま使ってかまいません。肌に使うものは濃度の目安を超えることがあるので、作り直しましょう。",
          },
        ]}
      />

      <p>
        1滴は約0.05mL、20滴で1mL。この2つを覚えておくと、レシピの量がすぐにわかります。肌に使うオイルの薄め方は、<Link href="/blog/carrier-oil-dilution">キャリアオイルの希釈の計算</Link>で確認してください。
      </p>
      <NextStepBox />
    </>
  ),
};
