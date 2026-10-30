import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogSidebar, Breadcrumb, CategoryCards, PostCard, SectionTitle } from "@/components/blog/BlogParts";
import { BotanicalCluster } from "@/components/blog/Botanicals";
import { blogCategories, getCategory, getPostsByCategory } from "@/lib/blogData";

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name}の記事一覧`,
    description: `${category.description}。ELIGŌ Oil Journalの「${category.name}」の記事をまとめています。`,
    alternates: { canonical: `/blog/category/${category.slug}` },
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const posts = getPostsByCategory(category.slug);

  return (
    <main className="relative overflow-x-clip pb-24">
      <BotanicalCluster variant="left-a" className="-left-[110px] top-[60px]" />
      <BotanicalCluster variant="right-a" className="-right-[100px] top-[40px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
        <Breadcrumb items={[{ label: "ブログトップ", href: "/blog" }, { label: category.name }]} />
        <div className="py-14 md:py-20">
          <SectionTitle en={category.en} ja={category.name} as="h1" />
          <p className="mt-5 text-center text-[14px] text-[#666]">{category.description}</p>
        </div>
        <CategoryCards current={category.slug} />

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
          <div>
            <p className="text-[13px] text-[#888]">{posts.length}件の記事</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
