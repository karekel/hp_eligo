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
            image: "/assets/Leaders/IMG_1498.jpeg",
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
    {
        slug: "leader-f",
        name: "深澤ゆきみ",
        role: "Platinum",
        bio: "",
        image: "/assets/Leaders/ゆきみ.png",
        nameEn: "Yukimi Fukasawa",
        nameJp: "深澤 ゆきみ",
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
