/**
 * 計測 ID の置き場。
 * 測定 ID や Search Console の確認コードはページのソースに出る公開情報なので、
 * ここに書いてコミットしてよい（.env.local は公開ビルド前に外す運用のため、ここが本番の値になる）。
 * 環境変数（NEXT_PUBLIC_GA_ID など）が設定されていればそちらが優先される。
 */
export const analyticsIds = {
  /** Google アナリティクス 4 の測定 ID。例: "G-XXXXXXXXXX" */
  gaId: "",
  /** Search Console「HTML タグ」の content の値。DNS（TXT）で確認する場合は空のままでよい */
  googleSiteVerification: "",
  /** Cloudflare Web Analytics のトークン（32 桁の英数字）。使わなければ空 */
  cfBeaconToken: "",
};
