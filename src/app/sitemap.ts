import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { leaders } from "@/lib/leadersData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, priority: 1 },
    ...leaders.map((l) => ({ url: `${siteConfig.siteUrl}/leaders/${l.slug}`, priority: 0.8 })),
  ];
}
