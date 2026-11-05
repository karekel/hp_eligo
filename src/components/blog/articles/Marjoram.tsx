import Link from "next/link";
import { BlendRecipe, CautionBox, DataTable, Faq, MemberVoice, NextStepBox, OilProfile, PairingList, ProductPhotos, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: マジョラム */
export const marjoram: ArticleContent = {
  summary: [
    "マジョラムの基本情報と、温かみのあるハーブの香りの特徴",
    "オレガノとの呼び名の違いと、おやすみ前や料理で楽しむ方法",
    "相性のよい香りのブレンド例と、「香・食」の表示で気をつけたいこと",
  ],
  toc: [
    { id: "scent", title: "ドテラのマジョラムの香りの特徴" },
    { id: "enjoy", title: "ドテラのマジョラムの使い方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "マジョラム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/marjoram-15ml/",
      note: "学名、抽出部位と抽出方法、香りの表示、主成分、「香・食」の表示、「ウィンタースウィート」などの呼び名、ドライマジョラムの代わりに使う案内、使用上の注意",
    },
    {
      title: "Marjoram",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/marjoram",
      note: "産地がエジプトであること、ナイルデルタと上エジプトの栽培環境、乾燥した葉の蒸留、スイートマジョラムとワイルドマジョラムの呼び名、象徴としての意味",
    },
    {
      title: "マジョラム インフォグラフィック",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/infographics/marjoram-15ml.pdf",
      note: "15mLに約1.6kgの葉を使うこと、「ガチョウのハーブ」の呼び名、染色ハーブの話、相性のよいオイル",
    },
    {
      title: "アロマの種類と効果を徹底解説！購入時のポイントも紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2062/",
      note: "スイートマージョラムの呼び名、すっきりしたハーバル感にかすかな甘みがある香りという説明",
    },
    {
      title: "ドテラセレニティー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-15ml/",
      note: "「塗・香」の表示、成分にマジョラムとラベンダーが含まれること",
    },
    {
      title: "アロマタッチ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/aromatouch-15ml/",
      note: "「塗」の表示、成分にマジョラムが含まれること",
    },
    {
      title: "精油を1%以下に希釈する理由とは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年6月16日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/stepup/2448/",
      note: "枕に精油を垂らす習慣で首の赤みや顔のはれが出た例",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "香りの強いオイルを爪楊枝の先でごく少量使う方法",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして計算すること（15mLで300滴）",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせた使い方、少量から始めること、医師または薬剤師への相談",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らして香りを楽しむ方法",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "飲用や食品との摂取、料理への利用をすすめていないこと、3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、目に入れないこと、火気、保管",
    },
    {
      title: "【部屋別】おすすめのアロマ｜毎日をよい香りで過ごす方法を紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1875/",
      note: "香りに違和感があるときは中止して換気すること",
    },
  ],
  Body: () => (
    <>
      <p>
        マジョラムは、温かみのあるハーブの香りのオイルです。すっきりしていながら、かすかな甘みがあり、1日の終わりの静かな時間によく合います。
      </p>

      <h2 id="scent">ドテラのマジョラムの香りの特徴</h2>
      <OilProfile
        name="マジョラム"
        en="Marjoram"
        image="/assets/products/marjoram-15ml.jpg"
        color={oilColors.peppermint}
        rows={[
          { label: "学名", value: "Origanum majorana" },
          { label: "抽出部位", value: "葉（水蒸気蒸留法）" },
          { label: "香り", value: "ウォーム、ハーベイシャス、ウッディー" },
          { label: "主成分", value: "テルピネン-4-オール、サビネン水和物、γ-テルピネン" },
          { label: "表示", value: "15mLは「香・食」" },
        ]}
      />
      <p>
        香りの特徴は、ウォーム、ハーベイシャス、ウッディーの3つです。ハーブの香りに、温かみと木の気配が重なります。日本アロマ環境協会は、すっきりとしたハーバル感の中にかすかな甘みを感じる香りと紹介しています。
      </p>
      <p>マジョラムは呼び名が多く、検索すると混乱しやすいハーブです。よく見かける名前を整理しました。</p>
      <DataTable
        caption="マジョラムの呼び名"
        headers={["呼び名", "使われ方"]}
        rows={[
          ["ウィンタースウィート、山の喜び", "ドテラが紹介する古い呼び名"],
          ["ガチョウのハーブ", "ローストに使われてきたドイツでの呼び名"],
          ["ワイルドマジョラム", "一部の地域でのオレガノの呼び名"],
          ["スイートマージョラム", "協会の記事での呼び名。スイートマジョラムとも書きます"],
        ]}
      />
      <p>
        地域によっては、オレガノをワイルドマジョラムと呼ぶことがあります。料理のレシピを読むときは、どちらのハーブを指すのか確かめましょう。
      </p>
      <p>
        産地はエジプトです。ナイルデルタと上エジプトの温暖な気候で育つシソ科の多年生ハーブで、オイルは乾燥した葉から水蒸気蒸留で取り出します。
      </p>
      <p>
        古代ギリシャやローマでは、平和、調和、幸福の象徴として知られていました。染料にも使われたハーブで、ウールは紫がかった色に、リネンは赤褐色に染まります。
      </p>
      <p>
        15mLのボトル1本に使う葉は約1.6kgです。15mLは、1滴0.05mLで計算すると<Link href="/blog/drop-count">約300滴</Link>なので、1滴あたり約5.3gの計算です。
      </p>

      <h2 id="enjoy">ドテラのマジョラムの使い方</h2>
      <UsageCards
        items={[
          {
            en: "Bedtime",
            title: "おやすみ前のひととき",
            text: "ティッシュに1滴垂らし、枕元から少し離して置きます。香りが弱ければ1滴足します。ドテラはコットンやティッシュに数滴と案内し、協会の目安は1〜2滴です。",
          },
          {
            en: "Evening",
            title: "夕方の切り替えに",
            text: "仕事や家事がひと区切りついた時間に、ディフューザーで香らせます。合わせるオイルは下で紹介します。",
          },
          {
            en: "Kitchen",
            title: "煮込み料理の香りづけに",
            text: "「食品添加物」の表示がある製品に限った使い方です。ドライマジョラムの代わりに、ごく少量を加えます。",
          },
        ]}
      />
      <p>
        「食品添加物」の表示がある製品は、ドライマジョラムの代わりに料理に加えられます。量はお手元のラベルで確認してください。
      </p>
      <p>
        ドテラは、香りづけが目的なので大量に使う必要はないとしています。香りが特に強いオイルは清潔な爪楊枝の先につけ、ごく少量を使います。味を見ながら足しましょう。
      </p>
      <p>
        ドテラの「食品添加物」の表示がある製品は、ラベルどおりの量と方法で料理の香りづけに使えます。一方で、日本アロマ環境協会は、薄めたものでも精油を飲むことや食品と一緒にとることをすすめておらず、料理への利用についても同じ立場です。別の見解もあるので、最後はご自身で判断してください。考え方は<Link href="/blog/aromatic-table">オイルで香りづけする料理</Link>で解説しています。
      </p>
      <MemberVoice>
        <p>
          ELIGŌのメンバーが講座で作ったランチには、マジョラムで香りづけしたきのこのソテーが並びました。好きなきのこを3種類焼き、火を止めてから、マジョラムを1滴垂らした箸やヘラで全体を混ぜて、香りをなじませます。
        </p>
        <p>
          オイルを直接料理に垂らさず、箸やヘラにつけてから混ぜると、マジョラムの香りが全体になじみます。使うのは「食」の表示がある製品だけにして、味を見ながら少しずつ足しましょう。
        </p>
      </MemberVoice>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>
        ドテラは、相性のよいオイルとしてバジル、レモン、ドテラセレニティー、サイプレス、ローズマリーを挙げています。
      </p>
      <ProductPhotos names={["バジル", "ドテラセレニティー"]} />
      <PairingList
        items={[
          { name: "サイプレス", en: "Cypress", color: oilColors.peppermint, note: "木の香りが重なり、森の夕暮れのような印象に" },
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "皮の明るさが、温かい香りに軽さを足します" },
          { name: "ローズマリー", en: "Rosemary", color: oilColors.peppermint, note: "ハーブどうしで、輪郭がはっきりします" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花のやわらかさが重なり、穏やかな香りに" },
        ]}
      />
      <BlendRecipe
        title="夕暮れの部屋に"
        drops={[
          { name: "サイプレス", color: oilColors.peppermint, count: 3 },
          { name: "マジョラム", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <BlendRecipe
        title="おやすみ前のひとときに"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 3 },
          { name: "マジョラム", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>
        どちらもディフューザーに使う合計5滴の例で、肌には使いません。組み立て方は<Link href="/blog/blend-basics">香りのブレンドの基本</Link>で解説しています。
      </p>
      <MemberVoice note="メンバー個人の感じ方です。香りの好みには個人差があります。">
        <p>
          ELIGŌのメンバーには、グレープフルーツ、ベルガモット、ラベンダー、レモン、マジョラム、イランイランの6種類を合わせた香りがお気に入りの人が何人もいます。柑橘を多めにしてディフューザーで香らせる人や、「高級なホテルのような香り」と感じる人もいます。
        </p>
        <p>
          夜の時間に、ベルガモットとマジョラムを合わせて焚くメンバーもいます。別のメンバーは、好きな映画を見ながらフランキンセンス、マジョラム、サンダルウッドを焚いて、好きな香りの中で過ごしました。
        </p>
        <p>
          マジョラムを、カレーの隠し味のインスタントコーヒーのように、ブレンドにピリッとしたアクセントを足す香りと表現するメンバーもいます。合計の滴数は、ディフューザーの説明書の目安の範囲にしましょう。
        </p>
      </MemberVoice>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "マジョラム15mLの表示は「香・食」です。「塗」の表示がなく、肌に塗る使い方はありません。肌にはつけないでください。",
          "原液が肌についたら、清潔な大量の流水で洗い流します。目に入らないようにしましょう。",
          "枕や寝具に原液を直接垂らすのは控えましょう。枕に数滴垂らす習慣を続けて、首の赤みや顔のはれが出た例を、協会が紹介しています。",
          "口に入れてよいのは「食品添加物」の表示がある製品だけです。ラベルに書かれた量と方法を守ります。",
          "妊娠中、授乳中の方、薬を服用中、通院中の方、お子さまは、使用前に医師または薬剤師に相談してください。",
          "協会は、3歳未満の子どもには芳香浴以外を行わないよう案内しています。",
          "香りで気分が悪くなったら使うのをやめて、部屋の空気を入れ替えてください。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。直射日光と湿気を避け、開封後は早めに使い切りましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "マッサージオイルに使えますか？",
            a: "単品の15mLは「香・食」の表示で、肌に塗る使い方はありません。肌に使う製品では、ドテラセレニティー（塗・香）とアロマタッチ（塗）の成分にマジョラムが含まれています。それぞれのラベルどおりに使ってください。",
          },
        ]}
      />
      <ProductPhotos names={["アロマタッチ"]} />

      <p>
        マジョラムは、強く主張せず、夜の時間に寄り添ってくれるオイルです。まずは今夜、ティッシュに1滴から試してみてください。<Link href="/blog/serenity">ドテラセレニティー</Link>の成分にもマジョラムが含まれています。
      </p>
      <NextStepBox />
    </>
  ),
};
