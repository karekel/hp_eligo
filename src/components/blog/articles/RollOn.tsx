import Link from "next/link";
import { oilColors } from "../Botanicals";
import { BlendRecipe, CautionBox, DataTable, Faq, MethodCard, NextStepBox, PointBox, Steps, type ArticleContent } from "../ArticleParts";

/** 10mLのボトルで作るロールオンのレシピとブレンド例 */
export const rollOn: ArticleContent = {
  summary: [
    "10mLのロールオンに入れるオイルの量は、合計1〜2滴が目安",
    "ココナッツオイルで作るロールオンの手順",
    "2種類で作る香りの組み合わせと、持ち歩くときの注意点",
  ],
  toc: [
    { id: "amount", title: "まず覚えたい「10mLに1〜2滴」" },
    { id: "recipe", title: "ロールオンの作り方" },
    { id: "blend", title: "香りの組み合わせ" },
    { id: "caution", title: "作るときと持ち歩くときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ワークショップキット（天然石入りロールオン）の発売【プロダクトセンター限定】",
      publisher: "doTERRA TIMES（2026年4月22日）",
      url: "https://www.doterra-info.jp/media/3110726/",
      note: "公式のキットのロールオン容器が10mLであること",
    },
    {
      title: "ドテラ ココナッツオイル（フラクショネイティッド）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-coconut-oil-fractionated/",
      note: "ココナッツオイルがキャリアオイルであること",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "製品ページの塗・香の表示、香りの説明",
    },
    {
      title: "ゼラニウム",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/geranium-15ml/",
      note: "製品ページの塗・香の表示、香りの説明",
    },
    {
      title: "フランキンセンス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/frankincense-15ml/",
      note: "製品ページの塗・香の表示、香りの説明",
    },
    {
      title: "ヒノキ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/hinoki-5ml/",
      note: "製品ページの塗・香の表示、香りの説明",
    },
    {
      title: "ドテラバランス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-balance-15ml/",
      note: "製品ページの塗・香の表示、手首や首に塗布する使い方",
    },
    {
      title: "Part 5: Packaging and Storage",
      publisher: "doTERRA（米国公式）",
      url: "https://www.doterra.com/US/en/essential-oil-production-packaging-and-storage-overview",
      note: "夏の車内や窓辺など高温の場所を避けること",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（News Letter、2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "植物油10mLに精油1〜2滴のロールオン、手首などに使うこと、肌に使うときは1%以下",
    },
    {
      title: "アロマと一般的な香水の違いは？アロマを使ったナチュラルフレグランスの作り方も解説",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/beauty/1826/",
      note: "ロールオンの手順、ホホバ油やスイートアーモンド油などの化粧品向けの植物油",
    },
    {
      title: "精油はどのようにして作られる？主な抽出方法や具体的な活用法について紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2026年9月17日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/4572/",
      note: "顔に使う場合は0.5%以下にすること、手作り品のラベルに作製日と精油名を書くこと、保存料が入っていないものは1カ月以内に使い切ること",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとする計算と、全体量で割る濃度の計算式",
    },
    {
      title: "自分でできるアロマテラピートリートメント",
      publisher: "公益社団法人 日本アロマ環境協会（News Letter、2013年8月5日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/81/%E3%80%90Web%E3%80%91130805_%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%86%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88_v5.pdf",
      note: "ナッツアレルギーの人は植物油に注意すること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液の扱い、光毒性と皮膚刺激の例、火気、高齢の人や既往歴のある人の量、保管",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満には芳香浴以外を行わないこと、3歳以上12歳以下は大人の10分の1程度から、多くても2分の1程度とすること",
    },
    {
      title: "消費者安全調査委員会からの一葉 第16号「エッセンシャルオイルのトリセツ」",
      publisher: "消費者庁 消費者安全調査委員会",
      url: "https://www.caa.go.jp/policies/council/csic/activity_report/2024/assets/csic_cms201_250327_01.pdf",
      note: "精油は必ず薄めること、肌が弱い人は低い濃度から試すこと、症状があれば受診すること",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があり、公共の場所では周囲に配慮すること",
    },
    {
      title: "化粧品を選ぶ前に知っておきたい知識 最終回 化粧品を安全に選ぶには",
      publisher: "独立行政法人 国民生活センター『国民生活』2025年9月号",
      url: "https://www.kokusen.go.jp/wko/pdf/wko-202509_04.pdf",
      note: "腕の内側など目立たない所で小さく試すこと、におい、色、質感が変わったら捨てること",
    },
    {
      title: "手作り石けんの取り扱いにご注意を",
      publisher: "三重県 医療保健部 薬務課（令和7年11月27日更新）",
      url: "https://www.pref.mie.lg.jp/YAKUMUS/HP/0001213310003.htm",
      note: "手作り石けんの案内で、他人へのプレゼントや販売が規制の対象とされていること",
    },
    {
      title: "フリマ・オークションサイト（アプリ）で許可なく医薬品等を販売することはできません",
      publisher: "東京都保健医療局（2019年9月10日）",
      url: "https://www.hokeniryo.metro.tokyo.lg.jp/anzen/iyaku/koukokukisei/zenpanfrima/furimakisei",
      note: "許可を取らずに作った手作りコスメは販売できないこと",
    },
  ],
  Body: () => (
    <>
      <p>ころころと転がして塗るロールオンは、バッグに入れて持ち歩ける香りの小瓶です。好きなオイルを選べば、自分だけの1本になります。</p>
      <p>この記事では、10mLのボトルで作る手順と香りの組み合わせを紹介します。個人で楽しむためのレシピです。</p>

      <h2 id="amount">まず覚えたい「10mLに1〜2滴」</h2>
      <p>
        ロールオンは肌に直接つけるので、最初に濃度を決めます。日本アロマ環境協会の目安は、植物油10mLにオイル1〜2滴です。1滴は0.05mLとして計算します。
      </p>
      <DataTable
        caption="10mLのロールオンのオイルの濃度"
        headers={["ココナッツオイル", "オイル", "濃度の目安", "使う場所"]}
        rows={[
          ["10mL", "1滴", "約0.5%", "手首など。顔に使うならこの量まで"],
          ["10mL", "2滴", "約1%", "手首など。顔には使いません"],
        ]}
      />
      <p>
        たとえば2滴なら、0.1mL ÷ 10.1mL × 100で約1%です。香りが物足りなくても、滴数はそのままにします。計算のしかたは
        <Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と希釈の計算</Link>で詳しく紹介しています。
      </p>
      <p>
        ボトルの大きさが違うときも、同じ式で確かめます。5mLのボトルなら、1滴で約1%、2滴で約2%です。2滴では目安を超えるので、5mLは1滴までにします。香りは1種類になります。
      </p>

      <h2 id="recipe">ロールオンの作り方</h2>
      <MethodCard
        no={1}
        title="10mLのロールオン"
        items={[
          "遮光ガラスのロールオンボトル 10mL",
          "ドテラ ココナッツオイル 10mL（小さじ2）",
          "エッセンシャルオイル 合計1〜2滴",
          "小さなガラス容器",
          "ガラス棒",
          "ラベル",
        ]}
      >
        <Steps
          steps={[
            { title: "ココナッツオイルを量る", text: "小さなガラス容器に10mL入れます。小さじ2で量れます。" },
            { title: "オイルを垂らす", text: "1滴ずつ垂らし、ガラス棒でよく混ぜます。" },
            { title: "ボトルに移す", text: "ボトルの9割まで注ぎます。ローラーを押し込むので、口までは入れません。" },
            { title: "ふたをして混ぜる", text: "ローラーを押し込んでふたを閉め、やさしく上下を返して混ぜます。" },
            { title: "ラベルを貼る", text: "作った日とオイルの名前を書いて貼ります。" },
          ]}
        />
        <PointBox>ボトルに直接垂らすと、中身が約9mLになる分だけ濃くなります。2滴なら約1.1%で、目安を超えます。少し手間でも、10mLを量って混ぜてから移すと濃度がぶれません。容器に残る約1mLは、腕の内側などに少量つけて、使う前の試しに回しましょう。</PointBox>
      </MethodCard>

      <h2 id="blend">香りの組み合わせ</h2>
      <p>
        滴数が少ないので、組み合わせは2種類までにします。製品ページの表示が「塗・香」のオイルから選び、お手元のラベルの「化粧品」の表示も確かめてください。迷ったら、ティッシュに1滴ずつ垂らして香りを比べましょう。
      </p>
      <p>
        製品ページの説明では、ラベンダーはパウダリーでライト、ゼラニウムはフローラルでスイート、ヒノキはウッディーでエアリー、フランキンセンスはウォームでクリーンな香りです。軽さがほしいならラベンダーやヒノキ、甘さならゼラニウム、温かみならフランキンセンスを軸にしましょう。
      </p>
      <BlendRecipe
        title="花の香り"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 1 },
          { name: "ゼラニウム", color: oilColors.wildOrange, count: 1 },
        ]}
      />
      <BlendRecipe
        title="森の香り"
        drops={[
          { name: "ヒノキ", color: oilColors.peppermint, count: 1 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <BlendRecipe
        title="花と樹脂の香り"
        drops={[
          { name: "ラベンダー", color: oilColors.lavender, count: 1 },
          { name: "フランキンセンス", color: oilColors.frankincense, count: 1 },
        ]}
      />
      <p>
        1本で香りを決めたいなら、最初から香りが組まれたドテラバランスを1〜2滴でも楽しめます。レモンなど光毒性のある柑橘と、協会が皮膚刺激の例に挙げるペパーミント、ティーツリー、ユーカリは入れないでください。
      </p>

      <h2 id="caution">作るときと持ち歩くときの注意点</h2>
      <CautionBox
        title="手作りするときの注意点"
        items={[
          "個人で楽しむためのレシピです。自分で使う分だけ作り、販売や譲渡はしないでください。無償のプレゼントも許可の対象とする自治体の案内があります。",
          "肌に塗るものに使うのは、「化粧品」の表示がある製品だけにします。原液を肌につけたり、目に入れたりしないでください。",
          "使う前に腕の内側などに少量つけて様子を見ましょう。オイルの濃度は低いものから試します。",
          "目のまわり、耳の中、傷や湿疹のある所には使いません。赤みやかゆみが出たらすぐにやめ、皮膚科などに相談してください。",
          "妊娠中、授乳中の人、治療中の人、子どもは、使う前に医師または薬剤師に相談してください。高齢の人や既往歴のある人は、半分以下の量から試します。",
          "道具とボトルは洗って乾かした清潔なものを使い、オイルは火のそばで扱いません。",
          "冷暗所に置き、1カ月を目安に使い切ります。夏の車内など高温になる所に置かないでください。におい、色、質感が変わったら捨てます。",
          "子どもやペットの手の届かない場所に保管してください。外出先では周りの人への香りにも配慮しましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ココナッツオイル以外でも作れますか？",
            a: "協会は、ホホバ油やスイートアーモンド油などの化粧品向けの植物油を挙げています。ナッツのアレルギーがある人は、ナッツ由来の油を避けてください。",
          },
          {
            q: "子どもに使ってもいいですか？",
            a: "3歳未満には使いません。3歳以上12歳以下は、大人の10分の1程度から、多くても2分の1程度が協会の目安です。このレシピの大人の量をそのまま使わず、使う前に医師または薬剤師に相談してください。",
          },
          {
            q: "もっとしっかり香らせたいときは？",
            a: "滴数は増やしません。香りを長く変化させて楽しみたいときは、ナチュラルパフュームの記事も参考にしてください。",
          },
          {
            q: "残り少なくなったら、つぎ足してもいいですか？",
            a: "つぎ足すと、いつ作った分か分からなくなります。使い切ってから、洗って乾かしたボトルで作り直しましょう。1カ月で使い切れないときは、5mLのボトルに1滴で小さく作る方法もあります。",
          },
        ]}
      />

      <p>
        ロールオンは、10mLに1〜2滴という量さえ守れば、組み合わせを変えて何本でも試せます。まずは1滴で作り、香りの強さを確かめてみてください。肌につける香りをもっと楽しみたい人は
        <Link href="/blog/natural-perfume">ナチュラルパフュームの作り方</Link>へどうぞ。
      </p>
      <NextStepBox />
    </>
  ),
};
