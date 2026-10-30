// Cloudflare Workers のエントリーポイント。
// OpenNext が生成するハンドラーを包み、次の処理を追加する。
//   - /cdn-cgi/_next_cache/（生成済みページの保存領域）への直接アクセスを遮断する
// /_next/image（画像最適化）では次の2点を追加する。
//   1. 変換結果をエッジにキャッシュし、Cloudflare Images の変換回数（無料枠）を節約する
//      ※ Cache API は独自ドメインでのみ有効。workers.dev では毎回変換される
//   2. 変換に失敗したとき（無料枠の上限など）は、元画像をそのまま返して画像切れを防ぐ

// @ts-expect-error `.open-next/worker.js` はビルド時に生成される
import { default as handler } from "./.open-next/worker.js";

type Env = {
  ASSETS: { fetch(input: Request | URL | string): Promise<Response> };
};

type Ctx = { waitUntil(promise: Promise<unknown>): void };

// 変換結果をエッジに置いておく期間（元画像の中身が変わればキーも変わる）
const IMAGE_CACHE_SECONDS = 60 * 60 * 24 * 30;

export default {
  async fetch(request: Request, env: Env, ctx: Ctx): Promise<Response> {
    const url = new URL(request.url);
    // 生成済みページの保存領域（会員ページの中身を含む）は Worker 内部からのみ読む
    if (url.pathname.startsWith("/cdn-cgi/_next_cache/")) {
      return new Response("Not Found", { status: 404 });
    }
    if (url.pathname !== "/_next/image" || request.method !== "GET") {
      return handler.fetch(request, env, ctx);
    }

    const src = url.searchParams.get("url") ?? "";
    // サイト内の画像だけ扱う。/cdn-cgi/ 以下は Worker 専用の領域なので外部に出さない
    const localSrc = src.startsWith("/") && !src.startsWith("//") ? new URL(src, url) : null;
    if (localSrc && (localSrc.origin !== url.origin || localSrc.pathname.startsWith("/cdn-cgi/"))) {
      return new Response("Invalid image url", { status: 400 });
    }

    // キャッシュキー: 画像URL・幅・画質 + 出力形式 + 元画像の ETag（差し替え検知用）
    const accept = request.headers.get("accept") ?? "";
    const cacheUrl = new URL(url);
    cacheUrl.searchParams.set("_f", accept.includes("image/webp") ? "webp" : "orig");
    if (localSrc) {
      const original = await env.ASSETS.fetch(localSrc);
      await original.body?.cancel();
      cacheUrl.searchParams.set("_e", original.headers.get("etag") ?? "");
    }
    const cacheKey = new Request(cacheUrl.toString());
    const cache = (caches as unknown as { default: Cache }).default;

    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    let res: Response | undefined;
    try {
      res = await handler.fetch(request, env, ctx);
    } catch (e) {
      console.error("image optimization failed", e);
    }

    if (res?.ok) {
      const toCache = new Response(res.clone().body, res);
      toCache.headers.set("Cache-Control", `public, max-age=${IMAGE_CACHE_SECONDS}`);
      ctx.waitUntil(cache.put(cacheKey, toCache));
      return res;
    }

    // 変換側のエラー（5xx・例外）のときだけ元画像にフォールバックする
    if (!res || res.status >= 500) {
      if (localSrc) {
        const original = await env.ASSETS.fetch(localSrc);
        if (original.ok && original.headers.get("content-type")?.startsWith("image/")) {
          return original;
        }
        await original.body?.cancel();
      } else {
        // 外部画像（YouTube サムネイル等）は next.config.ts の許可チェックを通過済みなので元URLへ転送
        return Response.redirect(src, 302);
      }
    }
    return res ?? new Response("Image optimization failed", { status: 502 });
  },
};
