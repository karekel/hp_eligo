import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, MethodCard, NextStepBox, OilProfile, PairingList, PointBox, Steps, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: ユーカリプタス */
export const eucalyptus: ArticleContent = {
  summary: [
    "ユーカリプタスの基本情報と、5種類を合わせた森のような香り",
    "2026年3月の区分の変更で、肌につけない製品になったこと",
    "シャワー、朝のディフューズ、拭き掃除で香りを楽しむ方法",
  ],
  toc: [
    { id: "profile", title: "ユーカリプタスはどんなオイル？" },
    { id: "usage", title: "森のような香りの楽しみ方" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "学名、抽出部位、「香」のみの表示、肌や粘膜につけないこと、摂取しないこと、シャワーの床に1〜2滴垂らす使い方、レモンとペパーミントを合わせた拭き掃除",
    },
    {
      title: "ユーカリプタス カテゴリ変更のお知らせ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2026年3月10日）",
      url: "https://www.doterra-info.jp/media/3078616/",
      note: "2026年3月11日の注文分から化粧油から雑貨油へ変更されたこと、肌質によって刺激を感じる場合があるという理由",
    },
    {
      title: "ユーカリプタス リニューアルのお知らせ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2024年1月10日）",
      url: "https://www.doterra-info.jp/media/2520904/",
      note: "ラディアータのみの処方から5種類の処方へ変わったこと",
    },
    {
      title: "ユーカリ",
      publisher: "Source To You（doTERRA International）",
      url: "https://sourcetoyou.com/jp/stories/story/eucalyptus-blend",
      note: "5種類のユーカリの産地（オーストラリア、南アフリカ、ルワンダ）",
    },
    {
      title: "取扱説明書 V2 ドテラ ラルツディフューザー",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "ディフューザーに入れるオイルの量（5〜10滴）、噴出口から直接吸引しないこと、浴室など湿気の多い場所で使わないこと",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "区分に合わせて使うこと、使用方法と注意表示の確認、医師または薬剤師への相談",
    },
    {
      title: "玄関におすすめのアロマ｜来客に好印象を与える香りとは？",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年8月29日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2953/",
      note: "ユーカリはシャープで透明感のある香りという説明",
    },
    {
      title: "アロマスプレーの作り方｜保存方法や注意点も紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/1886/",
      note: "50mLのスプレーの分量（精油3〜10滴、無水エタノール5mL、水45mL）、混ぜる順番、容器の材質、1〜2週間で使い切ること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "ユーカリを皮膚刺激の例に挙げていること、目に入れないこと、火気、保管",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと、3歳以上12歳以下は大人の10分の1程度から始めること",
    },
  ],
  Body: () => (
    <>
      <p>
        葉をこすったときのような、青く澄んだ清涼感。ユーカリプタスは、森の空気を思い浮かべたくなる香りのオイルです。朝のシャワーや、掃除のあとの部屋によく合います。
      </p>
      <p>
        ただし、2026年3月に製品の区分が変わり、製品ページの表示は「香」だけになりました。肌につけないこと、口に入れないことを確認しながら、楽しみ方を見ていきましょう。
      </p>

      <h2 id="profile">ユーカリプタスはどんなオイル？</h2>
      <OilProfile
        name="ユーカリプタス"
        en="Eucalyptus"
        image="/assets/products/eucalyptus-15ml.jpg"
        color={oilColors.peppermint}
        rows={[
          { label: "学名", value: "Eucalyptus radiata, polybractea, kochii, loxophleba, globulus" },
          { label: "抽出部位", value: "葉と茎（水蒸気蒸留法）" },
          { label: "製品ページの表示", value: "15mLは「香」のみ" },
        ]}
      />
      <p>
        ドテラのユーカリプタスは、5種類のユーカリを合わせたオイルです。2024年1月に、ラディアータだけの処方から今の5種類に変わりました。産地はオーストラリア、南アフリカ、ルワンダです。
      </p>
      <p>
        製品ページに香りの特徴の欄はありません。日本アロマ環境協会はユーカリ精油について、シャープで透明感のある香りと表現しています。
      </p>
      <h3>区分の変更を確認しましょう</h3>
      <p>
        2026年3月11日の注文分から、区分が化粧油から雑貨油に変わりました。肌質によって刺激を感じる場合があるためです。製品ページには、肌や粘膜につけないこと、摂取しないことが書かれています。ネットなどの古い情報に、肌に塗る使い方が残っていることがあるので注意しましょう。
      </p>

      <h2 id="usage">森のような香りの楽しみ方</h2>
      <UsageCards
        items={[
          {
            en: "Shower",
            title: "朝のシャワーに",
            text: "シャワーの床の、湯が直接当たらず足も触れない隅に1〜2滴垂らします。立ちのぼる香りを楽しみます。",
          },
          {
            en: "Morning",
            title: "朝のディフューズ",
            text: "身支度の時間に、ディフューザーの水に垂らします。レモンを合わせると、葉の香りに明るさが加わります。",
          },
          {
            en: "Wipe",
            title: "拭き掃除の香りに",
            text: "レモンとペパーミントを合わせたスプレーで、台所やお風呂場の拭き掃除の仕上げに。作り方は下で紹介します。",
          },
        ]}
      />

      <MethodCard no={1} title="3種の香りのスプレーを作る" items={["50mLのスプレーボトル", "無水エタノール5mL", "ユーカリプタス4滴", "レモン3滴", "ペパーミント3滴", "水45mL"]}>
        <Steps
          steps={[
            { title: "無水エタノールにオイルを混ぜる", text: "ボトルは遮光のガラス製か、アルコールに対応した素材を選びます。" },
            { title: "水を加える", text: "水を注いでふたを閉め、よく振ります。" },
            { title: "布に吹いて拭く", text: "人や顔に向けず、布に吹いてから拭きます。目立たない場所で試してください。" },
          ]}
        />
        <PointBox>手作りのスプレーは空間と物に使うもので、肌には使いません。1〜2週間で使い切りましょう。手順の考え方は<Link href="/blog/no-diffuser">ディフューザーがなくても大丈夫！</Link>も参考にしてください。</PointBox>
      </MethodCard>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>ユーカリプタスの香りはくっきりしているので、柑橘でやわらげたり、ハーブや花の香りで奥行きを足したりすると使いやすくなります。</p>
      <PairingList
        items={[
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "明るさが加わり、朝に合う香りに" },
          { name: "ペパーミント", en: "Peppermint", color: oilColors.peppermint, note: "ミントの清涼感が重なり、葉の香りが際立つ" },
          { name: "ティーツリー", en: "Tea Tree", color: oilColors.peppermint, note: "葉の青さが重なり、掃除のあとに合う香りに" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花のやわらかさが、鋭い葉の香りを包む" },
        ]}
      />
      <BlendRecipe
        title="朝の森の香り"
        drops={[
          { name: "ユーカリプタス", color: oilColors.peppermint, count: 3 },
          { name: "レモン", color: oilColors.lemon, count: 2 },
        ]}
      />
      <BlendRecipe
        title="ハーブの森の香り"
        drops={[
          { name: "ユーカリプタス", color: oilColors.peppermint, count: 2 },
          { name: "ラベンダー", color: oilColors.lavender, count: 2 },
          { name: "ローズマリー", color: oilColors.peppermint, count: 2 },
        ]}
      />
      <p>どちらもディフューザーの例です。ラルツディフューザーの目安は5〜10滴で、浴室など湿気の多い場所では使えません。お使いの機種の説明書に合わせてください。</p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "肌や粘膜につけないでください。薄めたものも同じです。協会もユーカリを皮膚刺激の例に挙げています。ついたら洗い流します。",
          "口に入れないでください。料理や飲み物には使えません。",
          "手作りのクリーム、ロールオン、入浴剤など、肌に触れるものには使いません。",
          "目に入らないようにしましょう。オイルがついた手で顔や目に触れないでください。",
          "ディフューザーの噴出口に顔を近づけて、直接吸い込まないでください。香りで気分が悪くなったら、使うのをやめて換気します。",
          "3歳未満の子どもには香りを楽しむ以外の使い方をしません。3歳以上12歳以下は、大人の10分の1程度の量から始めます。",
          "体調に不安がある方、ぜんそくのある方、妊娠中、授乳中の方、薬を飲んでいる方は、使う前に医師または薬剤師に相談してください。",
          "火のそばでは使わず、子どもやペットの手の届かない場所に保管します。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "以前に買ったユーカリプタスは肌に使えますか？",
            a: "告知には、変更前の製品の扱いは書かれていません。区分が変わった理由が肌への刺激なので、肌には使わないようにしましょう。迷ったら購入元に確認してください。",
          },
          {
            q: "料理や飲み物に使えますか？",
            a: "使えません。製品ページには摂取しないことが書かれています。",
          },
        ]}
      />

      <p>
        ユーカリプタスは、肌に使わないと決めれば、香りの楽しみに集中できるオイルです。まずは朝のシャワーで、1滴から試してみてください。掃除に使う香りをもっと知りたい方は、<Link href="/blog/tea-tree">ティーツリーの香りの特徴</Link>もあわせてどうぞ。
      </p>
      <NextStepBox />
    </>
  ),
};
