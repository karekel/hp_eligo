import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorBox, ComingSoon, Disclosure, ProductStrip, Sources, SummaryBox, TableOfContents } from "@/components/blog/ArticleParts";
import { articles } from "@/components/blog/articles";
import { BlogSidebar, Breadcrumb, CategoryIcon, LinkBanners, PostCard, SectionTitle } from "@/components/blog/BlogParts";
import { BotanicalCluster } from "@/components/blog/Botanicals";
import { blogConfig, blogPosts, formatDate, getCategory, getPost, getRelatedPosts } from "@/lib/blogData";
import { productImages, SHOW_PRODUCT_IMAGES } from "@/lib/productImages";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, images: [{ url: post.thumbnail }] },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.thumbnail] },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const category = post && getCategory(post.category);
  if (!post || !category) notFound();

  const { author } = blogConfig;
  const article = articles[post.slug];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    image: `${siteConfig.siteUrl}${encodeURI(post.thumbnail)}`,
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
    author: { "@type": "Organization", name: author.name, url: siteConfig.siteUrl },
    publisher: { "@type": "Organization", name: siteConfig.siteName, url: siteConfig.siteUrl },
  };

  return (
    <main className="relative overflow-x-clip pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BotanicalCluster variant="left-a" className="-left-[120px] top-[140px]" />
      <BotanicalCluster variant="right-b" className="-right-[110px] top-[760px]" />
      <BotanicalCluster variant="left-b" className="-left-[120px] top-[1500px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
        <Breadcrumb
          items={[
            { label: "ブログトップ", href: "/blog" },
            { label: category.name, href: `/blog/category/${category.slug}` },
            { label: post.title },
          ]}
        />

        <div className="mt-5 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
          <article className="rounded-3xl bg-white px-5 py-8 shadow-[0_4px_30px_rgba(70,55,30,0.08)] md:px-12 md:py-12">
            <Link
              href={`/blog/category/${category.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-blog-tint px-3.5 py-1 text-[12px] tracking-wider text-blog-accent hover:bg-blog-tint-dark"
            >
              <CategoryIcon icon={category.icon} className="h-3.5 w-3.5" />
              {category.name}
            </Link>
            <h1 className="font-serif-jp mt-4 text-[22px] leading-[1.65] tracking-[0.04em] text-[#2b2b2b] md:text-[30px]">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-black/5 pb-5 text-[12px] text-[#999]">
              <span>公開日 {formatDate(post.publishedAt)}</span>
              {post.updatedAt && <span>更新日 {formatDate(post.updatedAt)}</span>}
              <Link href="/" className="ml-auto flex items-center gap-2 text-[#555] hover:text-blog-accent">
                <span className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image src={author.image} alt="" fill sizes="32px" className="object-cover" />
                </span>
                監修 {author.name}
              </Link>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={post.thumbnail} alt="" fill priority sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
            </div>

            {article ? (
              <>
                <SummaryBox items={article.summary} />
                <TableOfContents items={article.toc} />
                {SHOW_PRODUCT_IMAGES && productImages[post.slug] && <ProductStrip items={productImages[post.slug]} />}
                <div className="blog-prose mt-4">
                  <article.Body />
                </div>
                <Sources items={article.sources} />
              </>
            ) : (
              <ComingSoon excerpt={post.excerpt} />
            )}

            <Disclosure />
            <AuthorBox />
          </article>
          <BlogSidebar />
        </div>

        <section className="mt-24">
          <SectionTitle en="Related" ja="あわせて読みたい" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getRelatedPosts(post).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <LinkBanners layout="wide" />
        </section>
      </div>
    </main>
  );
}
