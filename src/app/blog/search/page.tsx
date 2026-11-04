import type { Metadata } from "next";
import { Suspense } from "react";
import { articles } from "@/components/blog/articles";
import { BlogSidebar, Breadcrumb, PostCard, SectionTitle } from "@/components/blog/BlogParts";
import { BlogSearchResults, type SearchItem } from "@/components/blog/BlogSearch";
import { blogPosts, getCategory } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "記事を検索",
  alternates: { canonical: "/blog/search" },
  // 検索結果のページは検索エンジンに載せない
  robots: { index: false, follow: true },
};

export default function BlogSearchPage() {
  // 題、説明文、カテゴリー名、記事冒頭の要約、見出しを検索の対象にする
  const items: SearchItem[] = blogPosts.map((post) => {
    const article = articles[post.slug];
    return {
      slug: post.slug,
      title: post.title,
      text: [post.excerpt, getCategory(post.category)?.name ?? "", ...(article?.summary ?? []), ...(article?.toc.map((t) => t.title) ?? [])].join("\n"),
      publishedAt: post.publishedAt,
    };
  });
  const cards = Object.fromEntries(blogPosts.map((post) => [post.slug, <PostCard key={post.slug} post={post} />]));

  return (
    <main className="relative overflow-x-clip pb-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
        <Breadcrumb items={[{ label: "ブログトップ", href: "/blog" }, { label: "記事を検索" }]} />
        <div className="py-14 md:py-16">
          <SectionTitle en="Search" ja="記事を検索" as="h1" />
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
          <Suspense>
            <BlogSearchResults items={items} cards={cards} />
          </Suspense>
          <BlogSidebar search={false} />
        </div>
      </div>
    </main>
  );
}
