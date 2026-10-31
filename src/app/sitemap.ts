import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { leaders } from "@/lib/leadersData";
import { BLOG_DRAFT, blogCategories, blogPosts } from "@/lib/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  // ブログは公開後（BLOG_DRAFT = false）だけ載せる
  const blog: MetadataRoute.Sitemap = BLOG_DRAFT
    ? []
    : [
        { url: `${base}/blog`, priority: 0.9, changeFrequency: "weekly" },
        ...blogCategories.map((c) => ({
          url: `${base}/blog/category/${c.slug}`,
          priority: 0.5,
          changeFrequency: "weekly" as const,
        })),
        ...blogPosts.map((p) => ({
          url: `${base}/blog/${p.slug}`,
          lastModified: p.updatedAt ?? p.publishedAt,
          priority: 0.7,
          changeFrequency: "monthly" as const,
        })),
      ];

  return [
    { url: base, priority: 1 },
    ...leaders.map((l) => ({ url: `${base}/leaders/${l.slug}`, priority: 0.8 })),
    ...blog,
  ];
}
