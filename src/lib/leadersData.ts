/**
 * リーダーデータ — 後でJSON / CMS に差し替え可能
 *
 * slug 命名ルール:
 *   - 半角英小文字 + ハイフンのみ（例: "leader-1"）
 *   - URLに使われるため日本語・スペース不可
 *   - 一意であること
 */
export type Leader = {
    slug: string;
    name: string; // 表示用のメインネーム（既存互換）
    role: string;
    bio: string;
    image: string;
    nameEn: string;
    nameJp: string;
    catchphrase: string;
    identity: {
        instagramUrl?: string;
        instagramId?: string;
        blogUrl?: string;
        vibeFinderType?: string;
        profile: string;
        place: string;
        image?: string;
    };
    myStory: {
        signatureOilsLabel?: string;
        signatureOils: { name: string; desc: string }[];
        reason: string;
        whyDoterra: string;
        image?: string;
        videoUrl?: string;
    };
    vision: {
        ourCulture: string;
        invite: string;
        image?: string;
    };
};

export const leaders: Leader[] = [
    {
        slug: "leader-s",
        name: "エリザベス",
        role: "Presidential Diamond",
        bio: "",
        image: "/assets/Leaders/s.png",
        nameEn: "Elizabeth",
        nameJp: "エリザベス",
        catchphrase: "変化と周りの目を恐れず、本質を追求する。",
        identity: {
            instagramUrl: "https://www.instagram.com/aroma_with_elizabeth/",
            instagramId: "13087810",
            vibeFinderType: "戦略的リーダー×攻め・創造の期",
            profile: `34歳。７歳長女、６歳双子男子、４歳次女の母。社会問題発信インフルエンサー。ドテラ４年目`,
            place: `東京都在住。年に数回ずつ、大阪や福岡、名古屋にも行きます。`,
            image: "/assets/Leaders/Eli_Iden.JPG",
        },
        myStory: {
            signatureOils: [
                { name: "・セレニティ", desc: "母が亡くなって最初に嗅いだ香り。身体に染み入る癒しの力に驚いた。" },
                { name: "・サンダルウッド", desc: "心がざわつく時に、どっしりグラウンディングさせてくれる香り。" },
                { name: "・ジャスミン", desc: "「自分は自分でいいんだ」という強さをくれる、気高く美しい香り。" },
            ],
            reason: `母が自死し、悲しみに暮れていた時に友人が私を慰めるために持ってきてくれた。
これまで嗅いできたあらゆるアロマや香水と全く性質の違う、身体の細胞が欲する「水のよう」な香りに感動。さらに、食べられる！飲める！美味しい！欲しい！とそのまま登録。`,
            whyDoterra: `ドテラが実践するコ・インパクトソーシングの仕組みと理念を知ったとき、私はこの企業が地球規模で必要であることを確信しました。
エッセンシャルオイルの医療活用という分野においても、ドテラが次世代のスタンダードを創り、業界を牽引していく未来はすでに明確です。
妥協のない本物のアイテムを伝え広め、人々の人生をより良く変えていけることが、私の何よりの誇りです。`,
            videoUrl: "https://youtu.be/dcTbfRdo6pk",
        },
        vision: {
            ourCulture: `単なる製品解説ではなく、背景にある根拠や最新の研究情報まで網羅。メンバー自身が深く納得し、自ら選び取れる知識を提供します。
全国のメンバーを繋ぐZoomでの学びや、いつでもアクセスできる学習資料・システムを完備しています。
美大出身のスキルを活かし、ハイクオリティで美しい独自資料や、ライフスタイルを彩るオリジナルグッズを制作。楽しみながら学べる豊富なリソースが自慢です。`,
            invite: `私たちのチームは、誰かが自分のために動いてくれるのを待っているだけの「クレクレさん」には合いません。
大前提としてあるのは、「まずは自分でやってみる」「自分で調べて、自分の責任で動く」という姿勢。 この主体性があるからこそ、『依存』ではなく、本当の『自立』が始まります。
誰かに満たしてもらうことを期待するのではなく、「自分を満足させられるのは自分自身だけだ」と自覚していること。
その覚悟を持ったあなたなら、私が本気で作り上げている圧倒的なリソースや学びの環境をフルに活用して、間違いなく自分自身の「最高の人生」をデザインしていけるはずです。`,
            image: "/assets/Leaders/IMG_8543.JPG",
        }
    },
    {
        slug: "leader-b",
        name: "前田沙織",
        role: "Diamond",
        bio: "",
        image: "/assets/Leaders/b.jpg",
        nameEn: "Saori Maeda",
        nameJp: "前田 沙織",
        catchphrase: "",
        identity: {
            instagramUrl: "https://www.instagram.com/saori_selfcare/",
            instagramId: "13804059",
            blogUrl: "https://www.oilandessencetokyo.com/",
            profile: `1983年東京生まれ。
タイとフィリピンで育った帰国子女。
男の子二人のママ。
現在は、独立系ファイナンシャルプランナーとして活動しながら、dōTERRAダイヤモンドリーダーとしてチーム運営をしています。`,
            place: `Tokyo`,
        },
        myStory: {
            signatureOils: [
                { name: "Frankincense", desc: "万能なお守りのような存在。整えたいときに。" },
                { name: "Rose Touch", desc: "波動と女性性を優しく引き上げてくれる特別な香り。" },
                { name: "Anchor", desc: "軸をしっかりと整え、自信を思い出させてくれる香り。" },
            ],
            reason: `エリザベスちゃんに紹介されたのがきっかけ。
ちょうど「本当に品質の良いアロマ」を探していたタイミングでした。

ネットでいくつも試していたけれど、
どこか納得できずにいた私に舞い降りたドテラ。
ドテラとの出会いは必然だったのかもしれません。`,
            whyDoterra: `初めて嗅いだラベンダーの香り。
その瞬間、「あ、これ今までのと違うわ」と。

同じく一瞬で魅せられた友人は、
今では大切なビジネスパートナーに。

遊びも、学びも、ビジネスも共有できる仲間が増え、
毎日がワクワクに変わりました。`,
        },
        vision: {
            ourCulture: `金融業界で長く働き、
"正解"や"数字"を追いかけてきた私。

左脳優位だった私が、
ドテラと出会い、"feel"する感覚を取り戻しました。

心が緩み、もっとこの世界はplaygroundとして楽しんでいいんだ！と気づきました。

チームzoomでは、使い方のシェアだけでなく、
引き寄せや在り方の話も人気です。

ドテラは、
「健康」と「経済」、そして「心の自由」を
同時に叶えられる新しい働き方を授けてくれました。

可能性は無限大。
どんな楽しみ方もOK。
すべて受け止めます。`,
            invite: `きっと、今まで知らなかった世界が
ぐんと広がります。
ようこそ、ドテラへ！`,
        }
    },
    {
        slug: "leader-d",
        name: "大槻愛",
        role: "Diamond",
        bio: "",
        image: "/assets/Leaders/d.png",
        nameEn: "Ai Otsuki",
        nameJp: "大槻 愛",
        catchphrase: "自分を整えることが、誰かを思いやる力につながる。",
        identity: {
            instagramUrl: "https://www.instagram.com/ai_otsuki/",
            vibeFinderType: "〇〇〇〇（診断結果のタイプ）",
            profile: "35歳。トルコ人旦那と4歳と3歳の年子ママ。ドテラ4年目",
            place: "埼玉在住。ですが、チームメンバーが多い東北（〜札幌）に行ったり、逆に南下したり。ご縁の際は必ず直接ご挨拶したいので、毎日車でどこかしらへ行っています。",
        },
        myStory: {
            signatureOils: [
                { name: "1.モチベート", desc: "自分の内側の力を信じ、向き合いたいと思う時に芳香" },
                { name: "2.シンリンヨク", desc: "心の呼吸を取り戻し、余白をつくりたいときに手のひらに１ドロップし深く呼吸する" },
                { name: "3.ディープブルー", desc: "頑張りすぎた日、抱え込みすぎた日にモチベートと1:1で頭頂指圧" },
            ],
            reason: "身体にいれるものが心と身体の細胞を作っていると知り、なるべく自然なものでセルフケアしたい。と思ったから。",
            whyDoterra: "「自分を大切にする生き方」を取り戻すきっかけを届け続けている。自分のことをケアし、整うと自然とまわりにも優しくでき良い循環になるから。",
        },
        vision: {
            ourCulture: `Care FirstというグループLINEがあり、自分のために相手のために何ができるか？どんな選択肢を伝えられるのか？徹底的に話し、ZOOMやオフ会でコミュニケーションを大切にしています。
一人ひとりの悩みが違うからこそ、ドテラ以外の知識をシェアしたり学びに力を入れています。エッセンシャルオイルは選択肢の一つであり、その先にあるのは、自分の感情に気づき、整え、選び直す力。私はそのプロセスを、ひとりではなく、安心できるコミュニティで分かち合っています。`,
            invite: `自分の人生を“自分の手”で編集したい人。自分という存在を大切にしながら、誰かのために自分がなにができるのか？を考えられる人と一緒にコミュニティを構築していきたい。
いろいろな情報に左右されず、全力で生きる！！そんな人と分かち合いたいです。`,
        }
    },
    {
        slug: "leader-a",
        name: "宮下葵",
        role: "Diamond",
        bio: "",
        image: "/assets/Leaders/a.jpg",
        nameEn: "Aoi Miyashita",
        nameJp: "宮下 葵",
        catchphrase: "",
        identity: {
            instagramUrl: "https://www.instagram.com/aoi.reco?igsh=MTk2Z3A5ZWYyYzIxcQ==",
            instagramId: "NO.13778902",
            profile: `44歳
7歳娘
9歳息子
夫
4人家族`,
            place: `東京都中央区、江東区、墨田区
でdoTERRA活動

メンバーさんは、関東中心
神奈川県、千葉県、埼玉県、が多い
福岡、群馬、沖縄にはチラホラ`,
        },
        myStory: {
            signatureOils: [
                { name: "フランキンセンス", desc: "" },
                { name: "ペパーミント", desc: "" },
                { name: "ローズマリー", desc: "" },
            ],
            reason: `なぜドテラを始めたか？
初めて香りを嗅いだ瞬間から
直感で自分の人生が変わる！
私にとって必要なもの！と
ビビビッと脳に直撃したから`,
            whyDoterra: `なぜドテラを続けているか？

doTERRAのオイルを使って
家族や大切な人の肌に触れたり、癒されたり癒したり、心も身体も元気になる、それだけではなく、地球の裏側から、日本の誰かの助けが必要な方に
お役に立てていることがまず嬉しいこと。

目の前にいる人に寄り添うことができることは、何よりも嬉しくて生き甲斐です。

日本でdoTERRAを広めて、一人でも
癒しを届け、助けが必要な人の役に
立ちたい。`,
        },
        vision: {
            ourCulture: "",
            invite: "",
        }
    },
    {
        slug: "leader-f",
        name: "深澤ゆきみ",
        role: "Diamond",
        bio: "",
        image: "/assets/Leaders/ゆきみ.png",
        nameEn: "Yukimi Fukasawa",
        nameJp: "深澤 ゆきみ",
        catchphrase: "",
        identity: {
            profile: "dōTERRAダイヤモンド。",
            place: "日本",
        },
        myStory: {
            signatureOils: [],
            reason: "",
            whyDoterra: "",
        },
        vision: {
            ourCulture: "",
            invite: "",
        }
    },
    {
        slug: "leader-e",
        name: "杉之原裕佳子",
        role: "Platinum",
        bio: "",
        image: "/assets/Leaders/e2.png",
        nameEn: "Yukako Suginohara",
        nameJp: "杉之原 祐佳子",
        catchphrase: "",
        identity: {
            profile: `40歳 / １１歳と7歳のママ） / dōTERRA歴４年目`,
            place: `大阪在住 / 関西エリアが多いです。`,
        },
        myStory: {
            signatureOilsLabel: "My Signature Palette： 私を象徴する3本のオイル",
            signatureOils: [
                { name: "オレンジ", desc: "「子どもの手のひらに落としたことのある数」が一番多いオイル。学校に行く前、塾に行く前、寝る前…離れる時に香りを持たせることで、私のことを思い出してくれたらいいなという願いをこめて使うオイルです。" },
                { name: "マグノリア", desc: "外出先で「スイッチオン」を入れるときに手のひらに塗り深呼吸をします。自分が何かに包まれている感じになるオイルです。" },
                { name: "ピューリファイ", desc: "一番好きな場所である「家」を一気に心地よい空間にするオイルです" },
            ],
            reason: `doTERRA の品質や背景、具体的な使い方を知ったとき、
「欲しい！」という気持ちが一気に湧き上がり、すぐに登録しました。
それが、私のはじまりです。

もともと自然派の考え方ではありましたが、
エッセンシャルオイルという、自分を整えるための"ツール"を手にすることに、
とてもワクワクしていました。`,
            whyDoterra: `私が doTERRA を伝えている理由はシンプルです。
"人生を、もっと楽しめる選択肢になると感じたから。

日々の小さな選択。
誰とつながるか。
何を大切にするか。

その積み重ねが私の人生を作ります。

香りも、つながりも、ビジネスも。
受け身ではなく、自分で選び、自分で楽しめる。

その可能性を知っているから、
私は伝えていきたいと思っています。`,
        },
        vision: {
            ourCulture: `私のチームでは、
月に一度「30分おしゃべりクラフトzoom」を開催しています。

そのほかにも、私やメンバーさん主体のチームzoomがあり、それぞれの得意や経験をシェアし合える場を大切にしています。

ふらっと立ち寄ってクラフトをしたり、お茶をしたりしていただける「ゆかこの部屋」を定期的に大阪市内で開いたり、ワークショップをメンバーさんと開催したりしています。

また、ビジネスや「伝えること」を頑張りたい方向けのグループラインでは、
Zoom勉強会や相談の時間を設け、お互いの凹凸を補い合える環境を整えています。

doTERRA を始めたことで、
「自分にプラスになった」と思える。
そんな実感を持てるチームづくりを心がけています。`,
            invite: `・子育てと仕事を分断しない生き方をしたい人
・MLMという仕組みを「人のつながり」として捉えられる人
・それぞれの経験を持ち寄り、共に育っていける人
・自分から楽しむ一歩を踏み出せる人

私は、「楽しむこと」を大切にしています。
私たちは生まれた瞬間から、限りある時間を生きています。
その途中で doTERRA に出会い、誰かを選び、登録する。
その選択をポジティブなものにできるかどうかは、自分自身の考え方次第だと思っています。

チームに入ってくださった方には、学びや経験、気づきや情報など、私が持っているものは惜しみなくシェアします。

それを受け取り、楽める方とご縁があれば嬉しいです。

そして…関西の方は、ぜひ我がチームへ！`,
        }
    },
    {
        slug: "leader-c",
        name: "根本桂都",
        role: "Platinum",
        bio: "",
        image: "/assets/Leaders/c.png",
        nameEn: "Keito Nemoto",
        nameJp: "根本 桂都",
        catchphrase: "",
        identity: {
            profile: "dōTERRAプラチナ。",
            place: "日本",
        },
        myStory: {
            signatureOils: [],
            reason: "",
            whyDoterra: "",
        },
        vision: {
            ourCulture: "",
            invite: "",
        }
    },
];

/** slug からリーダーを検索 */
export function getLeaderBySlug(slug: string): Leader | undefined {
    return leaders.find((l) => l.slug === slug);
}
