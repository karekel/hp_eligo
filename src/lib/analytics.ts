/**
 * アクセス解析の設定と、クリックなどのイベント送信。
 *
 * 計測 ID は src/lib/analyticsConfig.ts に書く（コミットしてよい公開情報）。
 * 環境変数が設定されていればそちらを優先する（手元でテスト用 ID を使うときなど）。
 *   NEXT_PUBLIC_GA_ID            … Google アナリティクス 4 の測定 ID（例: G-XXXXXXXXXX）
 *   NEXT_PUBLIC_CF_BEACON_TOKEN  … Cloudflare Web Analytics のトークン（任意）
 *   GOOGLE_SITE_VERIFICATION     … Search Console「HTML タグ」の content の値（DNS で確認する場合は不要）
 * どちらも未設定のときは何も読み込まない（計測されない）。
 */
import { analyticsIds } from "./analyticsConfig";

const gaIdRaw = process.env.NEXT_PUBLIC_GA_ID || analyticsIds.gaId;
const cfTokenRaw = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN || analyticsIds.cfBeaconToken;

export const analyticsConfig = {
  /** 形式が合わないものは無視する（インラインスクリプトに埋め込むため） */
  gaId: /^G-[A-Z0-9]+$/.test(gaIdRaw) ? gaIdRaw : "",
  cfBeaconToken: /^[a-f0-9]{32}$/.test(cfTokenRaw) ? cfTokenRaw : "",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || analyticsIds.googleSiteVerification,
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
