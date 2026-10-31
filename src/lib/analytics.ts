/**
 * アクセス解析の設定と、クリックなどのイベント送信。
 *
 * 計測 ID は環境変数で渡す。NEXT_PUBLIC_ 付きはビルド時にページへ埋め込まれるので、
 * `npm run deploy`（= next build）を実行する環境の .env.local か .env.production に書く。
 *   NEXT_PUBLIC_GA_ID            … Google アナリティクス 4 の測定 ID（例: G-XXXXXXXXXX）
 *   NEXT_PUBLIC_CF_BEACON_TOKEN  … Cloudflare Web Analytics のトークン（任意）
 *   GOOGLE_SITE_VERIFICATION     … Search Console「HTML タグ」の content の値（DNS で確認する場合は不要）
 * 未設定のときは何も読み込まない（手元の開発では計測されない）。
 */
const gaIdRaw = process.env.NEXT_PUBLIC_GA_ID ?? "";
const cfTokenRaw = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ?? "";

export const analyticsConfig = {
  /** 形式が合わないものは無視する（インラインスクリプトに埋め込むため） */
  gaId: /^G-[A-Z0-9]+$/.test(gaIdRaw) ? gaIdRaw : "",
  cfBeaconToken: /^[a-f0-9]{32}$/.test(cfTokenRaw) ? cfTokenRaw : "",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "",
};

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export type TrackParams = Record<string, string | number | undefined>;

/** GA4 にイベントを送る。GA4 が読み込まれていなければ何もしない */
export function track(name: string, params: TrackParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
