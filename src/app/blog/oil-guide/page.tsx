import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar, Breadcrumb, SectionTitle } from "@/components/blog/BlogParts";
import { BotanicalCluster } from "@/components/blog/Botanicals";
import { oilFamilies, oilGuide } from "@/lib/blogData";

const description = `ドテラのオイル${oilGuide.length}本を、香りの系統ごとの表にまとめました。香りの表示と、製品ページの「塗・香・食」の表示を見比べて、気になるオイルの記事を探せます。`;

export const metadata: Metadata = {
  title: `ドテラのオイル図鑑の一覧｜香りの系統で探す${oilGuide.length}本`,
  description,
  alternates: { canonical: "/blog/oil-guide" },
};

export default function OilGuidePage() {
  return (
    <main className="relative overflow-x-clip pb-24">
      <BotanicalCluster variant="left-a" className="-left-[110px] top-[60px]" />
      <BotanicalCluster variant="right-a" className="-right-[100px] top-[40px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
        <Breadcrumb items={[{ label: "ブログトップ", href: "/blog" }, { label: "ドテラのオイル図鑑", href: "/blog/category/oils" }, { label: "ドテラのオイル図鑑の一覧" }]} />
        <div className="py-14 md:py-20">
          <SectionTitle en="Oil Guide" ja="ドテラのオイル図鑑の一覧" as="h1" />
          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-[2.1] text-[#555] md:text-[15px]">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
          <div className="space-y-12">
            {oilFamilies.map((family) => (
              <section key={family}>
                <h2 className="font-serif-jp text-[20px] tracking-wider text-[#2b2b2b]">{family}</h2>
                <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">
                  <table className="w-full border-collapse text-left text-[13px] leading-7 text-[#444] max-sm:block">
                    <thead className="bg-blog-tint text-blog-accent max-sm:sr-only">
                      <tr>
                        <th scope="col" className="px-4 py-2.5 font-medium">オイル</th>
                        <th scope="col" className="px-4 py-2.5 font-medium">香りの表示</th>
                        <th scope="col" className="px-4 py-2.5 font-medium">製品ページの表示</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5 bg-white max-sm:block">
                      {oilGuide
                        .filter((oil) => oil.family === family)
                        .map((oil) => (
                          <tr key={oil.slug} className="max-sm:block max-sm:py-2">
                            <td className="whitespace-nowrap px-4 py-2.5 max-sm:block max-sm:py-0.5">
                              <Link href={`/blog/${oil.slug}`} className="text-blog-accent underline underline-offset-2 hover:no-underline">
                                {oil.name}
                              </Link>
                            </td>
                            <td className="px-4 py-2.5 max-sm:block max-sm:py-0.5">{oil.scent}</td>
                            <td className="whitespace-nowrap px-4 py-2.5 max-sm:block max-sm:py-0.5 max-sm:whitespace-normal">{oil.label}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
            <p className="text-[13px] leading-7 text-[#666]">
              香りの言葉と「塗・香・食」は、2026年11月時点のドテラの製品ページの表示です。表示は変わることがあるので、使う前に製品ページとお手元のラベルを確かめてください。ドテラのオイル全体の種類は
              <Link href="/blog/doterra-oil-lineup" className="text-blog-accent underline underline-offset-2 hover:no-underline">ドテラのオイルの種類</Link>
              、表示の見方は
              <Link href="/blog/doterra-how-to-use" className="text-blog-accent underline underline-offset-2 hover:no-underline">ドテラのオイルの使い方</Link>
              にまとめています。
            </p>
          </div>
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
