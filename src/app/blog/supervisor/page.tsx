import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, BlogSidebar, Breadcrumb, InstagramIcon, SectionTitle } from "@/components/blog/BlogParts";
import { BotanicalCluster } from "@/components/blog/Botanicals";
import { blogConfig } from "@/lib/blogData";
import { siteConfig } from "@/lib/siteConfig";

const { author } = blogConfig;
const PAGE_TITLE = "監修者について";
const ELIZABETH_PHOTO = "/assets/blog/supervisor-elizabeth-6082fe53.jpg";

const description = `${blogConfig.name}の記事は、チームELIGŌが監修しています。チームELIGŌと、主宰のエリザベスを紹介します。`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description,
  alternates: { canonical: author.url },
  openGraph: { type: "profile", title: PAGE_TITLE, description },
};

const linkClass = "text-blog-accent underline underline-offset-2 hover:no-underline";

export default function SupervisorPage() {
  const pageUrl = `${siteConfig.siteUrl}${author.url}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: PAGE_TITLE,
    url: pageUrl,
    description,
    mainEntity: {
      "@type": "Organization",
      "@id": `${pageUrl}#team`,
      name: author.name,
      url: pageUrl,
      logo: `${siteConfig.siteUrl}${author.image}`,
      member: [
        {
          "@type": "Person",
          name: "エリザベス",
          alternateName: "Elizabeth",
          jobTitle: "チームELIGŌ 主宰、アロマタッチ テクニック認定トレーナー",
          image: `${siteConfig.siteUrl}${ELIZABETH_PHOTO}`,
          sameAs: [blogConfig.elizabethInstagram.url],
        },
      ],
    },
  };

  return (
    <main className="relative overflow-x-clip pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BotanicalCluster variant="left-a" className="-left-[110px] top-[60px]" />
      <BotanicalCluster variant="right-a" className="-right-[100px] top-[40px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
        <Breadcrumb items={[{ label: "ブログトップ", href: "/blog" }, { label: PAGE_TITLE }]} />
        <div className="py-14 md:py-20">
          <SectionTitle en="Supervisor" ja={PAGE_TITLE} as="h1" />
          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-[2.1] text-[#555] md:text-[15px]">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
          <div className="space-y-10">
            <section className="rounded-3xl bg-white px-5 py-8 shadow-[0_4px_30px_rgba(70,55,30,0.08)] md:px-10 md:py-10">
              <p className="font-script text-[18px] leading-none text-blog-accent">Team</p>
              <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white shadow">
                  <Image src={author.image} alt={author.name} fill sizes="96px" className="object-cover" />
                </span>
                <div>
                  <h2 className="font-serif-jp text-[20px] tracking-wider text-[#2b2b2b]">監修 {author.name}</h2>
                  <p className="mt-3 text-[14px] leading-[2.1] text-[#444]">
                    チームELIGŌ（エリゴ）は、dōTERRA（ドテラ）のウェルネスアドボケイト（会員）が集まる、エッセンシャルオイルのチームです。毎月のZoom勉強会やワークショップで、ドテラのオイルを暮らしに取り入れる方法を一緒に学んでいます。このブログでは、ドテラの案内をもとに、エッセンシャルオイルやアロマオイルの使い方、道具、保管のコツをお伝えしています。
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white px-5 py-8 shadow-[0_4px_30px_rgba(70,55,30,0.08)] md:px-10 md:py-10">
              <p className="font-script text-[18px] leading-none text-blog-accent">Leader</p>
              <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-2xl shadow sm:w-44">
                  <Image src={ELIZABETH_PHOTO} alt="エリザベス" fill sizes="176px" className="object-cover" />
                </span>
                <div>
                  <h2 className="font-serif-jp text-[20px] tracking-wider text-[#2b2b2b]">主宰 エリザベス（Elizabeth）</h2>
                  <ul className="mt-3 flex flex-wrap gap-2 text-[12px] tracking-wider text-blog-accent">
                    <li className="rounded-full bg-blog-tint px-3 py-1">チームELIGŌ 主宰</li>
                    <li className="rounded-full bg-blog-tint px-3 py-1">アロマタッチ テクニック認定トレーナー</li>
                  </ul>
                  <p className="mt-4 text-[14px] leading-[2.1] text-[#444]">
                    チームELIGŌを主宰しています。ドテラのアロマタッチ テクニックの認定トレーナーとして、毎月のZoom勉強会やワークショップで、エッセンシャルオイルを暮らしに活かす方法を伝えています。ドテラ歴4年目。東京都在住で、4人の子どもの母です。
                  </p>
                  <p className="mt-3 text-[14px] leading-[2.1] text-[#444]">
                    アロマタッチ テクニックの内容は
                    <Link href="/blog/aromatouch-technique" className={linkClass}>ドテラのアロマタッチ テクニック</Link>
                    で紹介しています。
                  </p>
                  <a
                    href={blogConfig.elizabethInstagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="supervisor_instagram"
                    data-track-group="blog"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-blog-peach px-4 py-1.5 text-[12px] tracking-wider text-blog-ink transition hover:bg-blog-tint-dark"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" /> {blogConfig.elizabethInstagram.handle}
                  </a>
                </div>
              </div>
            </section>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 rounded-full border border-blog-accent px-5 py-2 text-[13px] tracking-wider text-blog-accent transition hover:border-blog-peach hover:bg-blog-peach hover:text-blog-ink"
              >
                ブログトップへ <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
