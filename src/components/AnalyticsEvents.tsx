"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * `data-track="..."` が付いたリンクのクリックを GA4 の `cta_click` イベントとして送る。
 * 付けられる属性:
 *   data-track        … CTA の識別子（例: article_next_step, howtojoin_3, leader_instagram）
 *   data-track-group  … まとまり（任意。例: blog, top, leader）
 *   data-track-leader … リーダーページなど、どのリーダーのリンクか（任意）
 * 送るパラメータ: cta_id, cta_group, cta_leader, link_url, page_path, article_slug
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest?.("[data-track]") as HTMLElement | null;
      if (!el) return;
      const path = window.location.pathname;
      const slug = path.startsWith("/blog/") ? (path.split("/")[2] ?? "") : "";
      track("cta_click", {
        cta_id: el.dataset.track,
        cta_group: el.dataset.trackGroup,
        cta_leader: el.dataset.trackLeader,
        link_url: el.getAttribute("href") ?? undefined,
        page_path: path,
        article_slug: slug || undefined,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
