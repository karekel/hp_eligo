import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.siteName} のウェブサイトにおける個人情報とアクセス解析の取り扱いについて。`,
  alternates: { canonical: "/privacy" },
};

const UPDATED = "2026年10月31日";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-[#1a1a1a]">
      <p className="text-xs tracking-[0.2em] uppercase opacity-60">Privacy Policy</p>
      <h1 className="mt-3 text-2xl md:text-3xl font-bold">プライバシーポリシー</h1>
      <p className="mt-3 text-sm opacity-60">最終更新日 {UPDATED}</p>

      <div className="mt-10 space-y-10 text-[15px] leading-8">
        <section>
          <h2 className="text-lg font-bold">1. 運営者</h2>
          <p className="mt-2">
            本ウェブサイト（{siteConfig.siteUrl}、以下「本サイト」）は、dōTERRA（ドテラ）のウェルネスアドボケイト（会員）によるチーム「{siteConfig.siteName}」が運営しています。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">2. アクセス解析ツールについて（外部送信される情報）</h2>
          <p className="mt-2">
            本サイトでは、閲覧状況を把握してサイトを改善するために、次のアクセス解析ツールを利用しています。これらのツールは、閲覧者の端末から以下の情報を各事業者へ送信します。送信された情報は、各事業者のプライバシーポリシーに基づいて管理されます。
          </p>

          <h3 className="mt-6 font-bold">Google アナリティクス（Google LLC）</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>送信される情報: 閲覧したページの URL とタイトル、参照元、閲覧日時、ブラウザや端末の種類、画面サイズ、おおよその地域、クリックしたリンクやスクロール量、ブラウザに保存される識別子（Cookie）</li>
            <li>利用目的: 閲覧数や検索経由の流入、ページ内の行動を集計し、記事やサイトの改善に役立てるため</li>
            <li>情報の取り扱い: <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer" className="underline">Google のサービスを使用するサイトやアプリから収集した情報の Google による使用</a></li>
            <li>無効化: <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer" className="underline">Google アナリティクス オプトアウト アドオン</a> を利用するか、ブラウザの設定で Cookie を無効にしてください</li>
          </ul>

          <h3 className="mt-6 font-bold">Cloudflare Web Analytics（Cloudflare, Inc.）</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>送信される情報: 閲覧したページの URL、参照元、ブラウザや端末の種類、ページの表示速度。Cookie や端末を特定する識別子は使用しません</li>
            <li>利用目的: 閲覧数とページの表示速度を把握するため</li>
            <li>情報の取り扱い: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="underline">Cloudflare のプライバシーポリシー</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold">3. Cookie について</h2>
          <p className="mt-2">
            本サイトは、上記のアクセス解析のほか、メンバー限定ページへのログイン状態を保持するために Cookie を使用します。ログイン用の Cookie には個人を特定する情報は含まれません。ブラウザの設定で Cookie を無効にすると、メンバー限定ページを利用できないことがあります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">4. 外部サービスへのリンク</h2>
          <p className="mt-2">
            本サイトには、dōTERRA 公式サイト、Instagram、YouTube など外部サービスへのリンクや埋め込みが含まれます。リンク先や埋め込み先での情報の取り扱いは、各サービスのプライバシーポリシーに従います。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">5. 個人情報の取り扱い</h2>
          <p className="mt-2">
            本サイトは、お問い合わせフォームなどで個人情報を直接収集していません。Instagram のダイレクトメッセージ等でお寄せいただいた情報は、ご連絡への対応にのみ利用し、ご本人の同意なく第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">6. 改定</h2>
          <p className="mt-2">本ポリシーは、必要に応じて改定することがあります。改定後の内容は本ページに掲載した時点で効力を生じます。</p>
        </section>
      </div>

      <p className="mt-14 text-sm">
        <Link href="/" className="underline">トップページへ戻る</Link>
        <span className="mx-3 opacity-40">|</span>
        <Link href="/blog" className="underline">ブログへ戻る</Link>
      </p>
    </main>
  );
}
