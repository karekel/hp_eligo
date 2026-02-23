# ELIGO LP

Next.js (App Router) + Tailwind CSS + Framer Motion で構築したランディングページ。

## 起動

```bash
npm install
npm run dev
# http://localhost:3000
```

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx        # ルートレイアウト（SEO / OGP）
│   ├── page.tsx          # トップページ（1ページ完結）
│   └── globals.css       # Tailwind + カスタムテーマ
├── components/
│   ├── Header.tsx        # Sticky ヘッダー + モバイルメニュー
│   ├── HeroSection.tsx   # ファーストビュー
│   ├── TeamSection.tsx   # メンバー紹介カード
│   ├── ChatbotSection.tsx# QAチャット外部リンクCTA
│   ├── VideoSection.tsx  # 動画カード + タグフィルタ
│   ├── Footer.tsx        # フッター
│   ├── FadeIn.tsx        # スクロールフェードインラッパー
│   └── PlaceholderImage.tsx # 画像 or プレースホルダ切替
├── lib/
│   ├── siteConfig.ts     # 外部URL / ナビ / サイト設定
│   ├── siteCopy.ts       # テキストコピー一元管理
│   ├── siteAssets.ts     # 画像パス一元管理
│   ├── teamData.ts       # メンバーデータ
│   └── videoData.ts      # 動画データ + タグ
public/
└── assets/               # 画像ファイル置き場
    ├── hero_bg.jpg
    ├── hero_visual.png
    ├── chat_preview.png
    ├── logo.png
    ├── og_image.png
    ├── members/          # メンバーアイコン
    │   └── member_01.jpg ...
    └── videos/           # 動画サムネ
        └── thumb_01.jpg ...
```

## 差し替え手順

### 画像を差し替える

1. `/public/assets/` に画像ファイルを配置
2. `src/lib/siteAssets.ts` のパスを更新（メンバー画像は `src/lib/teamData.ts`、動画サムネは `src/lib/videoData.ts`）
3. 画像が無い場合はグラデーション+ラベルのプレースホルダが自動表示される

### テキストを差し替える

`src/lib/siteCopy.ts` の各セクションの文言を編集する。

### 外部URLを変更する

`src/lib/siteConfig.ts` の `externalLinks` を編集する。

### メンバーを追加・変更する

`src/lib/teamData.ts` の `members` 配列を編集する。JSON/スプレッドシート連携にも差し替え可能な構造。

### 動画を追加・変更する

`src/lib/videoData.ts` の `videos` 配列を編集する。タグは自動集計される。

## デプロイ

```bash
npm run build   # 本番ビルド
npx next start  # 本番起動
```

Vercel へのデプロイ: リポジトリを接続するだけで自動デプロイ。
