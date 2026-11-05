import Link from "next/link";
import { CautionBox, DataTable, Faq, MemberVoice, NextStepBox, ProductPhotos, Steps, type ArticleContent } from "../ArticleParts";

/** ドテラのシャンプー、ヘアケア、石けん、ボディウォッシュ、ハンドソープ、歯みがき剤の種類と使い方を整理した記事 */
export const doterraShampooToothpaste: ArticleContent = {
  summary: [
    "ドテラのシャンプー、コンディショナー、ヘアオイルなどの種類と価格（2026年11月時点、税込）",
    "シャンプーからヘアミストまで、表示どおりの使い方の順番",
    "石けん、ボディウォッシュ、ハンドソープの種類と、歯磨き粉（トゥースペイスト）の販売状況",
  ],
  toc: [
    { id: "hair", title: "ドテラのシャンプーとヘアケア製品" },
    { id: "hair-use", title: "シャンプーとヘアオイルの使い方" },
    { id: "soap", title: "石鹸、ボディウォッシュ、ハンドソープ" },
    { id: "toothpaste", title: "歯磨き粉（トゥースペイスト）は販売停止中" },
    { id: "caution", title: "使うときの注意点" },
    { id: "faq", title: "よくある質問" },
  ],
  sources: [
    {
      title: "ヘアケア",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product_category/doterra-hair-care/",
      note: "ドテラとIKISEのシャンプー、コンディショナー、トリートメント、ヘアオイル、ヘアミスト、スカルプケア ブラシ、つめかえ用容器が並ぶこと（2026年11月時点）",
    },
    {
      title: "ドテラ プロテクティング シャンプー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-protecting-shampoo/",
      note: "350mL、会員価格と参考小売価格（税込）、ペパーミント、ユーカリプタス、ティーツリー、スペアミントのオイルが入ること、ぬるま湯ですすいでから泡立てて洗う使い方、化粧品の使用上の注意",
    },
    {
      title: "ドテラ デイリー コンディショナー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-daily-conditioner/",
      note: "350mL、会員価格と参考小売価格（税込）、シャンプー後に髪全体になじませてしばらく置いてすすぐ使い方",
    },
    {
      title: "ドテラ リーブイン トリートメント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-leave-in-treatment/",
      note: "洗い流さないタイプであること、237mL、会員価格と参考小売価格（税込）、タオルドライした髪にスプレーする使い方、シトラスとフローラルの香り",
    },
    {
      title: "ドテラ スカルプケア ブラシ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-scalp-care-brush/",
      note: "シリコン製であること、会員価格と参考小売価格（税込）、シャンプーブラシとしての使い方、こすりすぎや目への注意",
    },
    {
      title: "つめかえ用容器（シャンプー専用）",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/refill-container-for-shampoo/",
      note: "500mLの容量、会員価格と参考小売価格（税込）",
    },
    {
      title: "IKISE シャンプー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-shampoo/",
      note: "390mL、会員価格と参考小売価格（税込）、限定販売の製品であること、予洗いしてから指の腹で洗う使い方、配合されたオイルと香り",
    },
    {
      title: "IKISE トリートメント",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-treatment/",
      note: "390mL、会員価格と参考小売価格（税込）、限定販売の製品であること、毛先を中心になじませて数分おいてすすぐ使い方",
    },
    {
      title: "IKISE ヘア オイル",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-hair-oil/",
      note: "28mL、会員価格と参考小売価格（税込）、限定販売の製品であること、毛先を中心に1滴ずつ調整してなじませる使い方",
    },
    {
      title: "IKISE ヘア ミスト",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-hair-mist/",
      note: "100mL、会員価格と参考小売価格（税込）、限定販売の製品であること、よく振って15〜20cm離してスプレーし、ドライヤーで乾かす使い方",
    },
    {
      title: "IKISE ヘアケア セット",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-hair-care-set/",
      note: "IKISEのヘアケア4製品、ドテラ カスターオイル30mL、フラゴニア5mL、ポーチの中身、会員価格と参考小売価格（税込）",
    },
    {
      title: "ドテラシトラスブリス バスバー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-citrus-bliss-bath-bar/",
      note: "113g、会員価格と参考小売価格（税込）、濡れた手でよく泡立てて使い、乾燥した場所で保管すること、シャワールームや浴室で使うこと",
    },
    {
      title: "ドテラスパ モイスチャライジング バスバー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-spa-moisturizing-bath-bar/",
      note: "113g、会員価格と参考小売価格（税込）、ベルガモットとグレープフルーツの香り、泡立ててやさしく洗う使い方",
    },
    {
      title: "ドテラセレニティー バスバー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-serenity-bath-bar/",
      note: "113g、会員価格と参考小売価格（税込）、ラベンダー、シダーウッドなど8種類のオイルのブレンド",
    },
    {
      title: "ドテラスパ リフレッシング ボディウォッシュ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-spa-refreshing-body-wash/",
      note: "250mL、会員価格と参考小売価格（税込）、ベルガモット、グレープフルーツ、シダーウッドのオイル、ジェル状であること、使い方",
    },
    {
      title: "IKISE ボディ ウォッシュ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-body-wash/",
      note: "400mL、会員価格と参考小売価格（税込）、ライム、リツェア、プチグレンの香り、ポンプ2〜3押し分を泡立てて洗う使い方",
    },
    {
      title: "IKISE ボディ ウォッシュ つめかえ用",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/ikise-body-wash-refill/",
      note: "400mL、会員価格と参考小売価格（税込）",
    },
    {
      title: "オンガード フォーミングハンドウォッシュ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-foaming-hand-wash/",
      note: "473mL、会員価格と参考小売価格（税込）、専用ディスペンサーに詰め替えて泡で洗う使い方、化粧品の使用上の注意",
    },
    {
      title: "オンガード フォーミングディスペンサー",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-foaming-dispenser/",
      note: "会員価格と参考小売価格（税込）",
    },
    {
      title: "ドテラ トゥースペイスト",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/doterra-toothpaste/",
      note: "125g、会員価格と参考小売価格（税込）、販売停止の表示、オンガードのブレンドとペパーミント、ウィンターグリーン、キシリトールが入ること、フッ素不使用、使い方と使用上の注意",
    },
    {
      title: "販売停止：ドテラ トゥースペイスト、ミト2マックス",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2025年10月31日）",
      url: "https://www.doterra-info.jp/media/2946568/",
      note: "輸入遅延のため2025年10月31日11時から販売を停止したこと、再開時期はわかり次第知らせるとしていること",
    },
    {
      title: "オンガード マウスウォッシュ 販売終了のお知らせ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社、2026年2月3日）",
      url: "https://www.doterra-info.jp/media/3045424/",
      note: "オンガード マウスウォッシュの販売終了",
    },
    {
      title: "オンガード マウスウォッシュ",
      publisher: "doTERRA TIMES（doTERRA CPTG Essential Oils Japan合同会社）",
      url: "https://www.doterra-info.jp/product/on-guard-mouth-wash/",
      note: "2026年2月4日に販売を終えたこと",
    },
    {
      title: "化粧品の効能効果の範囲について",
      publisher: "新潟県 福祉保健部 感染症対策・薬務課",
      url: "https://www.pref.niigata.lg.jp/sec/iyakukokuho/202011204.html",
      note: "化粧品の効能の範囲が56項目に定められ、頭皮や毛髪、皮膚の洗浄、歯みがき類の項目が含まれること",
    },
    {
      title: "安全に楽しむために",
      publisher: "公益社団法人 日本アロマ環境協会",
      url: "https://www.aromakankyo.or.jp/basics/safety/",
      note: "原液を肌につけないこと、目に入れないこと",
    },
  ],
  Body: () => (
    <>
      <p>
        ドテラ（dōTERRA）には、エッセンシャルオイルのほかに、シャンプーや石けんなど、毎日使う製品もあります。2026年11月時点で日本で扱われている製品の種類、価格、使い方を紹介します。
      </p>
      <p>
        価格はすべて税込で、2026年11月時点のものです。製品は入れ替わるので、買う前に製品ページで確かめてください。
      </p>

      <h2 id="hair">ドテラのシャンプーとヘアケア製品</h2>
      <p>
        ヘアケア製品は、ドテラの名前がついた製品と、IKISEシリーズの製品の2つに分かれます。ブラシと容器のほかは、化粧品としての使用上の注意が示されています。
      </p>
      <DataTable
        caption="ドテラのヘアケア製品（2026年11月時点、税込）"
        headers={["製品", "種類", "容量", "会員価格／参考小売価格"]}
        rows={[
          ["ドテラ プロテクティング シャンプー", "シャンプー", "350mL", "3,000円／4,500円"],
          ["ドテラ デイリー コンディショナー", "コンディショナー", "350mL", "3,000円／4,500円"],
          ["ドテラ リーブイン トリートメント", "洗い流さないトリートメント", "237mL", "3,000円／4,500円"],
          ["ドテラ スカルプケア ブラシ", "シリコン製のシャンプーブラシ", "1個", "1,800円／2,700円"],
          ["つめかえ用容器（シャンプー専用、コンディショナー専用）", "詰め替え用の容器", "500mL", "各400円／600円"],
        ]}
      />
      <p>
        プロテクティング シャンプーとデイリー コンディショナーには、ペパーミント、ユーカリプタス、ティーツリー、スペアミントのオイルが入っています。リーブイン トリートメントは、オレンジ、ライム、ブルータンジー、マグノリアなどを合わせた、シトラスとフローラルの香りです。
      </p>
      <h3>IKISEのヘアケア</h3>
      <DataTable
        caption="IKISEのヘアケア製品（2026年11月時点、税込）"
        headers={["製品", "容量", "会員価格／参考小売価格", "香り"]}
        rows={[
          ["IKISE シャンプー", "390mL（つめかえ用350mL）", "4,900円／7,399円（つめかえ用4,000円／6,000円）", "グリーンハーブとウッディ"],
          ["IKISE トリートメント", "390mL（つめかえ用350mL）", "4,900円／7,399円（つめかえ用4,000円／6,000円）", "シトラスとフローラル"],
          ["IKISE ヘア ミスト", "100mL", "3,900円／5,900円", "フレッシュシトラス"],
          ["IKISE ヘア オイル", "28mL", "3,900円／5,900円", "フローラルとウッディ"],
        ]}
      />
      <p>
        IKISEのヘアケアは、限定販売の製品です。4製品にドテラ カスターオイル30mLとフラゴニア5mLなどを合わせた「IKISE ヘアケア セット」（20,200円／30,300円）もあります。単品で買えるか、セットで買えるかは時期によって変わるので、製品ページで確かめましょう。
      </p>

      <h2 id="hair-use">シャンプーとヘアオイルの使い方</h2>
      <p>表示されている使い方を、使う順に並べます。</p>
      <Steps
        steps={[
          { title: "髪と頭皮をすすぐ", text: "ぬるま湯で、髪と頭皮を十分に予洗いします。" },
          { title: "シャンプーで洗う", text: "適量を手にとって髪全体になじませ、泡立てて指の腹で頭皮をやさしく洗います。プロテクティング シャンプーは、スカルプケア ブラシで洗うこともできます。" },
          { title: "よくすすぐ", text: "頭皮や髪にシャンプーが残らないように、十分にすすぎます。" },
          { title: "コンディショナーやトリートメントをなじませる", text: "髪の水気を軽くとり、適量をなじませます。しばらく、または数分おいてから、よくすすぎます。" },
          { title: "タオルドライ後に整える", text: "リーブイン トリートメントは髪に直接スプレーするか、手にとってなじませます。IKISE ヘア ミストはよく振って、15〜20cm離して髪全体にスプレーし、ドライヤーで乾かします。" },
          { title: "ヘアオイルで仕上げる", text: "IKISE ヘア オイルを手のひらでよくのばし、毛先を中心になじませます。量は1滴ずつ調整します。" },
        ]}
      />
      <p>
        スカルプケア ブラシは、シャンプーを泡立てた状態で頭皮に軽く当て、小刻みに動かして使います。こすりすぎないようにし、頭皮に傷やはれもの、湿疹などがあるときは使いません。
      </p>
      <p>
        ヘアオイルを植物油で用意する方法もあります。ドテラ ホホバオイルは、好きなエッセンシャルオイルを1〜2滴加えて、毛先になじませる使い方が示されています。加えるのは「化粧品」の表示があるオイルだけにしましょう。植物油の選び方は<Link href="/blog/carrier-oil-dilution">キャリアオイルの選び方と濃度の計算</Link>へ。
      </p>
      <MemberVoice>
        <p>
          ELIGŌのメンバーの一人は、ドテラのシャンプーを、香りと泡切れのよさで気に入って使っています。シャンプーのあとはコンディショナーを髪になじませ、しばらくおいてから流しています。ペパーミントの爽やかな香りは、夏だけでなく1年を通して楽しめます。
        </p>
        <p>
          別のメンバーは、少しの量でもよく泡立つと感じています。家族で使うと、1本を使い終わるころには液がゆるくなってくるので、2つのボトルに分けて使っています。開けたあとは、早めに使い切れる分ずつ出しておきましょう。
        </p>
      </MemberVoice>

      <h2 id="soap">石鹸、ボディウォッシュ、ハンドソープ</h2>
      <p>体と手を洗う製品は、次のとおりです。</p>
      <DataTable
        caption="体と手を洗う製品（2026年11月時点、税込）"
        headers={["製品", "種類", "容量", "会員価格／参考小売価格"]}
        rows={[
          ["ドテラシトラスブリス バスバー", "固形石けん", "113g", "1,300円／2,000円"],
          ["ドテラスパ モイスチャライジング バスバー", "固形石けん", "113g", "1,300円／2,000円"],
          ["ドテラセレニティー バスバー", "固形石けん", "113g", "1,300円／2,000円"],
          ["ドテラスパ リフレッシング ボディウォッシュ", "ジェル状のボディウォッシュ", "250mL", "2,200円／3,300円"],
          ["IKISE ボディ ウォッシュ", "ボディウォッシュ", "400mL（つめかえ用400mL）", "3,000円／4,500円（つめかえ用2,800円／4,200円）"],
          ["オンガード フォーミングハンドウォッシュ", "泡で出るハンドソープの詰め替え液", "473mL", "3,000円／4,500円"],
          ["オンガード フォーミングディスペンサー", "ハンドソープ用の容器", "237mL", "700円／1,100円"],
        ]}
      />
      <ProductPhotos names={["オンガード フォーミングハンドウォッシュ"]} />
      <h3>香りの違い</h3>
      <ul>
        <li>ドテラシトラスブリス バスバー: オレンジ、レモン、グレープフルーツなどの柑橘の香り</li>
        <li>ドテラスパ モイスチャライジング バスバー: ベルガモットとグレープフルーツの香り</li>
        <li>ドテラセレニティー バスバー: ラベンダー、シダーウッドなど8種類のオイルのブレンド</li>
        <li>ドテラスパ リフレッシング ボディウォッシュ: ベルガモット、グレープフルーツ、シダーウッドの香り</li>
        <li>IKISE ボディ ウォッシュ: ライム、リツェア、プチグレンの香り</li>
      </ul>
      <h3>使い方</h3>
      <p>
        バスバーは、濡れた手でよく泡立ててから使います。シャワールームや浴室で使い、使ったあとは乾燥した場所に置くと長持ちします。ボディウォッシュは、適量をボディタオルやスポンジにとり、泡立てて洗ってから十分に流します。ハンドウォッシュは専用のディスペンサーに詰め替え、ポンプを1〜2回押して、ぬれた手に泡をとって洗います。
      </p>
      <MemberVoice>
        <p>
          ELIGŌのメンバーの一人は、ハンドウォッシュと石けんを何種類か置いて、使い回しています。ドテラスパ リフレッシング ボディウォッシュは、よく泡立ち、香りも気に入っています。ボトルの口から出しにくいので、付け替え用のポンプをつけて使っています。
        </p>
        <p>
          別のメンバーは、オンガード フォーミングハンドウォッシュを水で薄めてスプレーボトルに入れ、毎日の浴槽の掃除に使っています。好きな香りの中で掃除ができます。製品の表示にある使い方ではないので、まねするときは、浴槽の素材に合うかを目立たない所で確かめてからにしましょう。
        </p>
      </MemberVoice>
      <p>
        オイルを使った手作り石けんは、<Link href="/blog/gem-soap">ジェムソープの作り方</Link>で紹介しています。
      </p>

      <h2 id="toothpaste">歯磨き粉（トゥースペイスト）は販売停止中</h2>
      <p>
        ドテラの歯磨き粉は「ドテラ トゥースペイスト」（125g、会員価格1,800円／参考小売価格2,700円）です。輸入の遅れのため、2025年10月31日から販売を止めています。2026年11月時点で、再開の時期は示されていません。
      </p>
      <ProductPhotos names={["ドテラ トゥースペイスト"]} />
      <p>
        オンガードのブレンドに、ペパーミント、ウィンターグリーン、キシリトールを合わせたシナモンミントの香りで、フッ素は入っていません。使い方は、食後または朝と夜に、適量を歯ブラシにつけてていねいに磨き、そのあと口をよくすすぎます。
      </p>
      <p>
        歯みがき剤には、化粧品のものと、薬用（医薬部外品）のものがあります。区分は容器の表示で確かめられます。あわせて使うものとして売られていたオンガード マウスウォッシュは、2026年2月4日に販売を終えました。
      </p>

      <h2 id="caution">使うときの注意点</h2>
      <CautionBox
        items={[
          "初めて使う製品は、表示どおりパッチテストなどで試してから使いましょう。",
          "赤み、はれ、かゆみ、刺激、色抜け（白斑など）、黒ずみなどが出たら、使うのをやめて皮膚科専門医などに相談してください。",
          "傷、はれもの、湿疹など異常のある部分には使いません。目に入らないようにし、入ったときはこすらずにすぐ洗い流します。",
          "スカルプケア ブラシは先がとがっています。目に当たらないよう注意し、頭皮をこすりすぎないでください。",
          "トゥースペイストは、発疹などの異常が出たら使うのをやめて歯科医師に相談し、口の中に傷があるときは使いません。",
          "シャンプーや石けんにオイルを足すときは「化粧品」の表示があるオイルだけを使い、原液を直接肌や頭皮につけません。",
          "直射日光と高温多湿をさけ、乳幼児の手の届かない場所に保管します。開封後は早めに使い切りましょう。",
        ]}
      />

      <h2 id="faq">よくある質問</h2>
      <Faq
        items={[
          {
            q: "ドテラのシャンプーはどれを選べばいいですか？",
            a: "2026年11月時点では、ドテラ プロテクティング シャンプー（350mL）と、限定販売のIKISE シャンプー（390mL）があります。香りと、組み合わせるコンディショナーやトリートメントで選ぶと比べやすくなります。",
          },
          {
            q: "ドテラの歯磨き粉はいつ買えるようになりますか？",
            a: "2026年11月時点で、再開の時期は示されていません。販売の再開は、ドテラ・ジャパンのお知らせで確かめてください。",
          },
          {
            q: "シャンプーの詰め替えはありますか？",
            a: "IKISE シャンプーとIKISE トリートメントには350mLのつめかえ用があります。このほか、500mL容量のつめかえ用容器（シャンプー専用、コンディショナー専用）も売られています。",
          },
          {
            q: "子どもも使えますか？",
            a: (
              <>
                使う前に表示の注意をよく読み、心配なときは医師や薬剤師に相談してください。子どもとオイルの注意は<Link href="/blog/kids-safety">子どもとエッセンシャルオイル</Link>にまとめています。
              </>
            ),
          },
        ]}
      />

      <p>
        ドテラの毎日使う製品は、シャンプーなどのヘアケア、石けんやボディウォッシュ、ハンドソープに分かれます。歯磨き粉は2026年11月時点で販売を止めています。まずは香りの好みで1つ選び、表示どおりの量と使い方で試してみてください。
      </p>
      <NextStepBox />
    </>
  ),
};
