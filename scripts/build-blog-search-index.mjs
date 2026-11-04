// ブログ記事の本文から日本語の文を抜き出し、検索ページが読む public/blog-search-index.json を作る。
// npm run build / npm run dev の前に自動で実行される（package.json の prebuild / predev）。
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const articlesDir = join(root, "src/components/blog/articles");
const index = readFileSync(join(articlesDir, "index.ts"), "utf8");

// import { lavender } from "./Lavender"; と "lavender": lavender, から slug → ファイル名を作る
const fileOf = Object.fromEntries([...index.matchAll(/import \{ (\w+) \} from "\.\/(\w+)";/g)].map((m) => [m[1], m[2]]));
const entries = [...index.matchAll(/^\s+"([\w-]+)": (\w+),/gm)].map((m) => [m[1], fileOf[m[2]]]);

// 日本語を含むひと続きの文字列（タグ、括弧、引用符で区切る）
const japaneseRun = /[^<>{}"'`\n]*[぀-ヿ㐀-鿿][^<>{}"'`\n]*/g;

const result = {};
for (const [slug, file] of entries) {
  if (!file) continue;
  const source = readFileSync(join(articlesDir, `${file}.tsx`), "utf8");
  // 参考資料の欄は除き、本文だけを対象にする
  const body = source.slice(Math.max(0, source.indexOf("Body:")));
  const text = (body.match(japaneseRun) ?? []).map((s) => s.replace(/\s+/g, " ").trim()).filter(Boolean);
  result[slug] = [...new Set(text)].join(" ");
}

writeFileSync(join(root, "public/blog-search-index.json"), JSON.stringify(result));
console.log(`blog-search-index.json: ${Object.keys(result).length} articles`);
