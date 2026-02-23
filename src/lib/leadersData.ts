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
    name: string;
    role: string;
    bio: string;
    image: string;
};

export const leaders: Leader[] = [
    {
        slug: "leader-s",
        name: "エリザベス",
        role: "Presidential Diamond",
        bio: "",
        image: "/assets/Leaders/s.png",
    },
    {
        slug: "leader-b",
        name: "前田沙織",
        role: "Diamond",
        bio: "",
        image: "/assets/Leaders/b.jpg",
    },
    {
        slug: "leader-d",
        name: "大槻愛",
        role: "Diamond",
        bio: "",
        image: "/assets/Leaders/d.png",
    },
    {
        slug: "leader-a",
        name: "宮下葵",
        role: "Diamond",
        bio: "",
        image: "/assets/Leaders/a.jpg",
    },
    {
        slug: "leader-e",
        name: "杉之原祐佳子",
        role: "Platinum",
        bio: "",
        image: "/assets/Leaders/e.png",
    },
    {
        slug: "leader-c",
        name: "根本桂都",
        role: "Platinum",
        bio: "",
        image: "/assets/Leaders/c.png",
    },
];

/** slug からリーダーを検索 */
export function getLeaderBySlug(slug: string): Leader | undefined {
    return leaders.find((l) => l.slug === slug);
}
