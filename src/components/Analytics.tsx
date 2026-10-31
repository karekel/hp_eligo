import Script from "next/script";
import { analyticsConfig } from "@/lib/analytics";

/**
 * アクセス解析のスクリプト。ID が設定されているものだけ読み込む。
 *   - Google アナリティクス 4（gtag.js）: ページビュー・スクロール・外部リンククリックは
 *     GA4 側の「拡張計測機能」で自動計測。CTA のクリックは AnalyticsEvents が cta_click として送る
 *   - Cloudflare Web Analytics（任意）: Cookie を使わない軽量計測
 */
export default function Analytics() {
  const { gaId, cfBeaconToken } = analyticsConfig;
  if (!gaId && !cfBeaconToken) return null;

  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
      {cfBeaconToken && (
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: cfBeaconToken })}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
