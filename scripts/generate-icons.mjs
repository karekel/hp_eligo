// サイトのファビコンとブログのホーム画面用アイコンの生成スクリプト
//
// 線画ロゴ（public/assets/ロゴ/mark_center.png）を白にして黒い背景へ中央に置く。
// ホーム画面やブラウザタブの大きさでは元の線が細すぎるので、太らせて重ねる。
// maskable は Android が丸く切り抜くので、余白を広く取る。
// favicon-192 は Google 検索の結果用。小さく丸く表示されるので、線を太くして余白も取る。
// 16 / 32 / 48px は 1 つの ICO にもまとめて public/favicon.ico に書き出す。
//
// 実行: node scripts/generate-icons.mjs
import { createCanvas, loadImage } from "@napi-rs/canvas";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MARK = path.join(root, "public/assets/ロゴ/mark_center.png");
const OUT_DIR = path.join(root, "public");

/** 作業解像度 */
const WORK = 1024;
/** thicken は線を太らせる量（作業解像度の px） */
const OUTPUTS = [
  { file: "blog-app/apple-touch-icon.png", size: 180, logoScale: 0.8, thicken: 2 },
  { file: "blog-app/icon-192.png", size: 192, logoScale: 0.8, thicken: 2 },
  { file: "blog-app/icon-512.png", size: 512, logoScale: 0.8, thicken: 2 },
  { file: "blog-app/icon-maskable-512.png", size: 512, logoScale: 0.64, thicken: 2 },
  { file: "favicon-16.png", size: 16, logoScale: 1, thicken: 17 },
  { file: "favicon-32.png", size: 32, logoScale: 0.98, thicken: 8 },
  { file: "favicon-48.png", size: 48, logoScale: 0.96, thicken: 6 },
  { file: "favicon-192.png", size: 192, logoScale: 0.82, thicken: 7 },
];

const mark = await loadImage(MARK);

/** ロゴを白に塗り替えた画像 */
function whiteMark() {
  const canvas = createCanvas(mark.width, mark.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(mark, 0, 0);
  ctx.globalCompositeOperation = "source-in";
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, mark.width, mark.height);
  return canvas;
}

function render(size, logoScale, thicken) {
  const work = createCanvas(WORK, WORK);
  const ctx = work.getContext("2d");
  ctx.imageSmoothingQuality = "high";
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, WORK, WORK);

  const logo = whiteMark();
  const logoSize = WORK * logoScale;
  const offset = (WORK - logoSize) / 2;
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    ctx.drawImage(logo, offset + Math.cos(angle) * thicken, offset + Math.sin(angle) * thicken, logoSize, logoSize);
  }

  // 一度に縮めると線が途切れるので、半分ずつ縮小する
  let current = work;
  let currentSize = WORK;
  while (currentSize > size) {
    const nextSize = Math.max(size, Math.ceil(currentSize / 2));
    const next = createCanvas(nextSize, nextSize);
    const nctx = next.getContext("2d");
    nctx.imageSmoothingQuality = "high";
    nctx.drawImage(current, 0, 0, nextSize, nextSize);
    current = next;
    currentSize = nextSize;
  }
  return current;
}

/** PNG をそのまま束ねた ICO */
function toIco(frames) {
  const header = Buffer.alloc(6 + 16 * frames.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  let offset = header.length;
  frames.forEach(({ size, data }, i) => {
    const entry = 6 + i * 16;
    header[entry] = size;
    header[entry + 1] = size;
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...frames.map((f) => f.data)]);
}

fs.mkdirSync(path.join(OUT_DIR, "blog-app"), { recursive: true });
const icoFrames = [];
for (const { file, size, logoScale, thicken } of OUTPUTS) {
  const data = render(size, logoScale, thicken).toBuffer("image/png");
  fs.writeFileSync(path.join(OUT_DIR, file), data);
  if (size <= 48) icoFrames.push({ size, data });
  console.log(file, size);
}
fs.writeFileSync(path.join(OUT_DIR, "favicon.ico"), toIco(icoFrames));
console.log("favicon.ico", icoFrames.map((f) => f.size).join("/"));
