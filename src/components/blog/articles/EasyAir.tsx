import Link from "next/link";
import { BlendRecipe, CautionBox, Faq, NextStepBox, OilProfile, PairingList, PointBox, ProductPhotos, UsageCards, type ArticleContent } from "../ArticleParts";
import { oilColors } from "../Botanicals";

/** オイル図鑑: イージーエア */
export const easyAir: ArticleContent = {
  summary: [
    "イージーエアの内容と、ミントやレモンが重なるすっきりした香りの特徴",
    "寝室、ティッシュ、足裏で香りを楽しむ3つの方法",
    "相性のよい香りとブレンド例、使うときの注意点",
  ],
  toc: [
    { id: "scent", title: "ドテラのイージーエアはどんな香り？" },
    { id: "enjoy", title: "イージーエアの使い方｜寝室、ティッシュ、足裏" },
    { id: "pairing", title: "相性のよい香りとブレンド例" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "イージーエア",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/easy-air-15ml/",
      note: "15mLの容量、価格（2026年11月時点、税込）、ブレンドの内容、香りの特徴、塗・香の表示、ディフューズや就寝時のディフューズ、足などに塗る使い方、柑橘系を塗ったあとの直射日光の注意、使用上の注意と保管方法",
    },
    {
      title: "イージーエア ドロップ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/easy-air-drops/",
      note: "限定販売の製品であること、30粒、価格（2026年11月時点、税込）、原材料、1粒4gあたりの熱量",
    },
    {
      title: "ファミリー エッセンシャルズキット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/family-essentials-kit/",
      note: "5mL×10本のキットにイージーエアが含まれること",
    },
    {
      title: "ユーカリプタス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/eucalyptus-15ml/",
      note: "単品のユーカリプタス15mLは香のみの表示で、肌や粘膜につけない、摂取しない製品であること",
    },
    {
      title: "レモン",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lemon-15ml/",
      note: "レモン15mLの香・食の表示",
    },
    {
      title: "ラベンダー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/lavender-15ml/",
      note: "ラベンダー15mLの塗・香の表示",
    },
    {
      title: "取扱説明書 V2 ドテラ® ラルツディフューザー（PDF）",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra-info.jp/pm/doterra-laluz-diffuser-users-manual.pdf",
      note: "オイルは5〜10滴であること、適用床面積が約16畳であること、噴出口から直接吸引しないこと",
    },
    {
      title: "エッセンシャルオイルの安全な使用方法",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/using-essential-oils",
      note: "コットンやティッシュに垂らす方法、初めて塗布で使うオイルや敏感肌ではキャリアオイルで薄めること、足裏が塗布に適した部位であること",
    },
    {
      title: "アロマタッチ ハンドテクニックに使用するオイルの選び方",
      publisher: "doTERRA CPTG Essential Oils Japan合同会社",
      url: "https://www.doterra.com/JP/ja_JP/aromatouch-hand-technique-how-to-choose-an-oil",
      note: "ハンドテクニックでは化粧品カテゴリのオイルを使うこと、例にイージーエアが挙がっていること",
    },
    {
      title: "ドテラでは、皆さまがエッセンシャルオイルを長く楽しくご使用いただけるようにご案内しています。",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/lp/2401919/",
      note: "オイルが化粧品、食品添加物、雑貨の3つに分かれること、使用方法と注意表示の確認、医師または薬剤師への相談",
    },
    {
      title: "雑貨等の広告について（薬事該当性）",
      publisher: "東京都保健医療局健康安全部 薬務課監視指導担当",
      url: "https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/r5zakka",
      note: "空間の香りづけが目的なら化粧品に当たらないこと、香りの吸入で体の調子をよくするとうたう表示が問題になる例",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、低い濃度から試すこと、レモンが光毒性の例、ティートリー、ペパーミント、ユーカリが皮膚刺激の例に挙がっていること、お年寄りや既往歴のある人の量、保管",
    },
    {
      title: "アロマの種類と効果を徹底解説！購入時のポイントも紹介",
      publisher: "公益社団法人 日本アロマ環境協会 sense of AROMA（2025年3月27日）",
      url: "https://media.aromakankyo.or.jp/senseofaroma/article/life/2062/",
      note: "ペパーミント、ティートリー、ユーカリに皮膚刺激があり、肌への使用を控えるとしていること",
    },
    {
      title: "アロマテラピーの楽しみ方",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/howto/",
      note: "ティッシュに1〜2滴垂らして香りを楽しむ方法",
    },
    {
      title: "天然アロマで作る、ナチュラルフレグランス",
      publisher: "公益社団法人 日本アロマ環境協会（2015年5月21日）",
      url: "https://www.aromakankyo.or.jp/pdf/news/40/150521_%E5%A4%A9%E7%84%B6%E3%82%A2%E3%83%AD%E3%83%9E%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9_WEB%E7%94%A8.pdf",
      note: "植物油10mLに精油1〜2滴、肌に使うときは1%以下にすること",
    },
    {
      title: "AEAJイメージフレグランスコンテストについてのQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/other/fragrance/",
      note: "1滴を0.05mLとして計算すること（15mLで約300滴）",
    },
    {
      title: "アロマテラピーに関するQ&A",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/faq/aroma/",
      note: "3歳未満の子どもには芳香浴以外を行わないこと",
    },
    {
      title: "Vol.679 知ってください!その香り困っている人もいます",
      publisher: "消費者庁 消費者安全課",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20260216/",
      note: "香りの感じ方には個人差があること",
    },
  ],
  Body: () => (
    <>
      <p>
        ミントとユーカリの清涼感に、レモンの明るさが重なる。イージーエアは、すっきりとした香りのドテラのブレンドオイルです。部屋に香らせることも、薄めて肌になじませることもできます。
      </p>
      <p>内容と香りの特徴、寝室やティッシュ、足裏での楽しみ方、相性のよい香りを順に紹介します。</p>

      <OilProfile
        name="イージーエア"
        en="Easy Air"
        image="/assets/products/easy-air-15ml.jpg"
        color={oilColors.peppermint}
        rows={[
          { label: "主な内容", value: "ローレルリーフ、ユーカリプタス、ペパーミント、ティーツリー、レモン、カルダモン、ラヴィンサラ、ラベンサラ" },
          { label: "香り", value: "ミンティー、フレッシュ、エアリー" },
          { label: "表示", value: "塗・香（15mL）" },
          { label: "価格", value: "会員価格4,400円、参考小売価格6,600円（いずれも税込、2026年11月時点）" },
        ]}
      />

      <h2 id="scent">ドテラのイージーエアはどんな香り？</h2>
      <p>
        イージーエアは、8種類の植物の香りを合わせたブレンドオイルです。ユーカリプタス、ペパーミント、ティーツリーなどのすっきりした香りに、レモンとカルダモンが加わります。
      </p>
      <p>
        香りの特徴は、ミンティー、フレッシュ、エアリーの3つです。ミンティーはフレッシュで清涼感のある香り、フレッシュはさわやかで清々しい香り、エアリーは軽やかですっきりした香りを指します。甘さは控えめで、軽く澄んだ印象の香りです。
      </p>
      <p>
        表示は15mLのボトルで「塗・香」です。部屋に香らせることも、薄めて肌に使うこともできます。「食」の表示はないので、口には入れません。
      </p>
      <p>日本アロマ環境協会が計算に使う1滴0.05mLで数えると、15mLは約300滴です。</p>

      <h2 id="enjoy">イージーエアの使い方｜寝室、ティッシュ、足裏</h2>
      <UsageCards
        items={[
          {
            en: "Bedroom",
            title: "おやすみ前の寝室に",
            text: "ドテラは、就寝時にディフューズする使い方を紹介しています。ディフューザーはベッドから離れた平らな台に置き、滴数は機器の説明書に従います。",
          },
          {
            en: "Tissue",
            title: "ティッシュに1滴",
            text: "ティッシュに1滴たらし、デスクやサイドテーブルの小皿にのせます。ディフューザーがなくても、手軽に香りを楽しめます。",
          },
          {
            en: "Feet",
            title: "薄めて足裏に",
            text: "ココナッツオイル10mLに2滴を混ぜると、協会の目安の1%以下に収まります。少量を手に取り、足裏になじませます。",
          },
        ]}
      />
      <PointBox>香りの感じ方には個人差があります。寝室を家族と分け合っている日は、香りを出す前にひと声かけましょう。</PointBox>
      <p>
        ドテラのラルツディフューザーは、オイルが5〜10滴、適用床面積が約16畳です。まず下限の5滴で試し、足すときは1滴ずつにします。機器の選び方は<Link href="/blog/diffuser-guide">ディフューザーの選び方</Link>、ラルツの使い方は<Link href="/blog/laluz-diffuser">ラルツディフューザーの使い方</Link>で紹介しています。
      </p>
      <ProductPhotos names={["ココナッツオイル", "ラルツディフューザー"]} />
      <p>
        ドテラは、足などに塗る使い方も紹介しています。はじめて肌に使うときや敏感肌の方は、キャリアオイルで薄めてから試しましょう。薄め方は<Link href="/blog/carrier-oil-dilution">キャリアオイルでの薄め方</Link>、足裏での手順は<Link href="/blog/foot-self-massage">足裏セルフマッサージのやり方</Link>にまとめています。
      </p>
      <p>
        ドテラは、アロマタッチのハンドテクニックに使うオイルの例にイージーエアを挙げています。ハンドテクニックでは、化粧品カテゴリのオイルを使うよう求めています。家族と手のタッチを楽しみたい方は、<Link href="/blog/aromatouch-hand">アロマタッチのハンドテクニック</Link>を参考にしてください。
      </p>

      <h2 id="pairing">相性のよい香りとブレンド例</h2>
      <p>すっきりした香りは、柑橘、花、木の香りと重ねると印象が変わります。ディフューザーで合わせると手軽です。</p>
      <PairingList
        items={[
          { name: "レモン", en: "Lemon", color: oilColors.lemon, note: "内容にも含まれる柑橘が強まり、明るい香りになります" },
          { name: "ラベンダー", en: "Lavender", color: oilColors.lavender, note: "花のやわらかさで、清涼感が穏やかになります" },
          { name: "ヒノキ", en: "Hinoki", color: oilColors.frankincense, note: "木の香りが重なり、落ち着いた印象になります" },
          { name: "フランキンセンス", en: "Frankincense", color: oilColors.frankincense, note: "樹脂の深みが加わります" },
        ]}
      />
      <BlendRecipe
        title="朝の部屋に"
        drops={[
          { name: "イージーエア", color: oilColors.peppermint, count: 3 },
          { name: "レモン", color: oilColors.lemon, count: 2 },
        ]}
      />
      <BlendRecipe
        title="おやすみ前の寝室に"
        drops={[
          { name: "イージーエア", color: oilColors.peppermint, count: 2 },
          { name: "ラベンダー", color: oilColors.lavender, count: 3 },
        ]}
      />
      <p>
        どちらもディフューザーに合計5滴入れる例です。レモン15mLの表示は「香・食」なので、足裏などに塗るブレンドには入れません。ラベンダー15mLは「塗・香」の表示です。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        title="イージーエアを使う前に確認したいこと"
        items={[
          "表示は15mLで「塗・香」です。「食」の表示はないので、口に入れないでください。",
          "肌に使う前にパッチテストなどで試し、ココナッツオイルなどで薄めます。協会は、原液を肌につけず、低い濃度から試すよう案内しています。",
          "協会は、内容に含まれるペパーミント、ティートリー、ユーカリについて、皮膚刺激があるとして肌への使用を控えるとしています。別の見解もあるので、最後はご自身で判断してください。",
          "内容にレモンが含まれます。ドテラは、柑橘系のオイルを塗ったあと12時間ほど直射日光を避けるよう注意しています。協会もレモンを光毒性の例に挙げています。",
          "赤み、はれ、かゆみ、刺激、色抜けや黒ずみなどが出たら使うのをやめ、皮膚科専門医などに相談します。",
          "傷やはれもの、湿疹のある部位、耳の中など敏感なところには使いません。目に入らないよう注意してください。",
          "治療中、妊娠中、授乳中の方、子どもは、使う前に医師または薬剤師に相談してください。協会は、3歳未満の子どもには芳香浴以外を行わないよう案内しています。",
          "お年寄りや持病のある方は、協会の目安の半分以下の量で試してください。",
          "ディフューザーの噴出口に顔を近づけないでください。香りで気分が悪くなったら止めて、換気します。",
          "直射日光と湿気を避けてしっかり閉め、乳幼児の手の届かない場所に保管します。開封後は早めに使い切りましょう。",
          "イージーエアは香りを楽しむオイルです。体の調子が気になるときは、医師に相談してください。",
        ]}
      />
      <p>
        ペットのいる部屋で使うときは、<Link href="/blog/pets-safety">ペットのいる家でオイルを使うときの注意点</Link>も確認しましょう。
      </p>

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "イージーエアに効能はありますか？",
            a: "ドテラのオイルは、化粧品、食品添加物、雑貨のいずれかに分かれます。どの区分でも、体の不調に効くといった効能は表示できません。東京都は、香りを吸い込むことで体の調子がよくなるとうたう表示を、問題になる例に挙げています。イージーエアは、香りと使い心地で楽しみましょう。",
          },
          {
            q: "単品のユーカリプタスとはどう違いますか？",
            a: (
              <>
                <Link href="/blog/eucalyptus">ユーカリプタス15mL</Link>は単品のオイルで、表示は「香」のみです。肌や粘膜につけない、摂取しない製品です。イージーエアは8種類のブレンドで、表示は「塗・香」です。同じ植物を含んでいても、使い方は製品ごとのラベルで確かめましょう。
              </>
            ),
          },
          {
            q: "イージーエアの名前がつく製品は、ほかにありますか？",
            a: "2026年11月時点で、日本のドテラには、限定販売のキャンディ「イージーエア ドロップ」があります。30粒入りで、会員価格3,000円、参考小売価格4,500円（いずれも税込）です。砂糖と玄米シロップをベースにしたもので、1粒4gあたりの熱量は16kcalです。5mL×10本のファミリー エッセンシャルズキットにも、イージーエアが入っています。限定品は取り扱いが変わることがあるので、購入前に確かめましょう。",
          },
        ]}
      />
      <ProductPhotos names={["ユーカリプタス"]} />

      <p>
        まずはティッシュに1滴たらして、ミントとレモンの重なりを確かめてみてください。好みに合えば、おやすみ前の寝室へと楽しみ方を広げていきましょう。
      </p>
      <NextStepBox />
    </>
  ),
};
