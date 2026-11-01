import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BotanicalCluster, BotanicalOrnament } from "@/components/blog/Botanicals";
import { ArrowIcon, BlogSidebar, CategoryCards, FeaturedPost, LinkBanners, PostCard, SectionTitle } from "@/components/blog/BlogParts";
import { blogConfig, blogPosts, starterGuideLinks } from "@/lib/blogData";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
};

export default function BlogTopPage() {
  const [featured, ...others] = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <main className="overflow-x-clip">
      {/* ヒーロー */}
      <section className="relative h-[360px] overflow-hidden md:h-[480px]">
        <Image src="/assets/背景/top backg.png" alt="" fill priority sizes="100vw" className="object-cover object-[60%_55%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1>
            <span className="font-script block text-[26px] md:text-[34px]">{blogConfig.name}</span>
            <span className="font-serif-jp mt-4 block text-[24px] leading-[1.8] tracking-[0.22em] md:text-[38px]">
              植物の香りと、
              <br className="md:hidden" />
              暮らしを編む。
            </span>
            <span className="mt-4 block text-[12px] tracking-[0.3em] text-white/90 md:text-[14px]">
              {/* スマホでは語の途中で折り返さず「や」の後で改行する */}
              {blogConfig.nameJp.split(/(?<=オイルや)/).map((part) => (
                <span key={part} className="inline-block">
                  {part}
                </span>
              ))}
            </span>
          </h1>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f1ebfa] to-transparent" />
      </section>

      {/* このブログについて */}
      <section className="relative py-20 md:py-28">
        <BotanicalCluster variant="left-a" className="-left-[30px] top-0" />
        <BotanicalCluster variant="right-a" className="-right-[30px] -top-6" />
        <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
          <SectionTitle en="About this journal" ja="はじめての一滴から、毎日の香りまで。" />
          <p className="mt-8 text-[14px] leading-[2.3] text-[#555] md:text-[15px]">
            エッセンシャルオイルやアロマオイルを、
            <br className="hidden md:inline" />
            毎日の暮らしにどう取り入れるか。
            <br />
            使い方・道具・保管のコツをまとめています。
          </p>
          <BotanicalOrnament className="mt-10 lg:hidden" />
        </div>
      </section>

      {/* カテゴリー */}
      <section id="category" className="relative scroll-mt-6 pb-20 md:pb-24">
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en="Category" ja="カテゴリーから探す" />
          <div className="mt-10">
            <CategoryCards />
          </div>
        </div>
      </section>

      {/* 新着記事 + サイドバー */}
      <section id="articles" className="relative scroll-mt-6 pb-24">
        <BotanicalCluster variant="left-b" className="-left-[110px] top-[260px]" />
        <BotanicalCluster variant="right-b" className="-right-[100px] top-[900px]" />
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
          <div>
            <SectionTitle en="New Articles" ja="新着記事" align="left" />
            <div className="mt-8">
              <FeaturedPost post={featured} />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          <BlogSidebar />
        </div>
      </section>

      {/* はじめに読みたい記事 */}
      <section className="relative pb-24">
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en="Getting Started" ja="はじめに読みたい記事" />
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-[2.1] text-[#555] md:text-[15px]">
            エッセンシャルオイル（精油）は、植物から抽出した香りの成分です。「アロマオイル」と呼ばれる製品には精油以外のものを混ぜたものもあるので、アロマオイルを探している方は、まず違いから読んでみてください。
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {starterGuideLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-full items-center gap-3 rounded-2xl bg-white/90 px-5 py-4 shadow-[0_2px_12px_rgba(70,55,30,0.07)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(70,55,30,0.12)]"
                >
                  <span className="min-w-0 flex-1">
                    <span className="font-serif-jp block text-[15px] leading-7 tracking-wider text-[#2b2b2b] group-hover:text-blog-accent">{link.title}</span>
                    <span className="mt-0.5 block text-[12px] leading-6 text-[#777]">{link.text}</span>
                  </span>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-blog-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 公式サイト・Instagram への導線 */}
      <section className="relative pb-24">
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en="Follow ELIGŌ" ja="ELIGŌをもっと知る" />
          <div className="mt-10">
            <LinkBanners layout="wide" />
          </div>
        </div>
      </section>
    </main>
  );
}
