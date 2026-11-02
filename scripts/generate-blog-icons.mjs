// ブログのホーム画面用アイコン生成スクリプト
//
// 線画ロゴ（public/assets/ロゴ/mark_center.png）を白にして黒い背景へ中央に置く。
// ホーム画面の大きさでは元の線が細すぎるので、少し太らせて重ねる。
// maskable は Android が丸く切り抜くので、余白を広く取る。
//
// 実行: node scripts/generate-blog-icons.mjs
import { createCanvas, loadImage } from "@napi-rs/canvas";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MARK = path.join(root, "public/assets/ロゴ/mark_center.png");
const OUT_DIR = path.join(root, "public/blog-app");

/** 作業解像度 */
const WORK = 1024;
/** 線を太らせる量（作業解像度の px） */
const THICKEN = 2;
const OUTPUTS = [
  { file: "apple-touch-icon.png", size: 180, logoScale: 0.8 },
  { file: "icon-192.png", size: 192, logoScale: 0.8 },
  { file: "icon-512.png", size: 512, logoScale: 0.8 },
  { file: "icon-maskable-512.png", size: 512, logoScale: 0.64 },
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

function render(size, logoScale) {
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
    ctx.drawImage(logo, offset + Math.cos(angle) * THICKEN, offset + Math.sin(angle) * THICKEN, logoSize, logoSize);
  }

  const out = createCanvas(size, size);
  const octx = out.getContext("2d");
  octx.imageSmoothingQuality = "high";
  octx.drawImage(work, 0, 0, size, size);
  return out;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const { file, size, logoScale } of OUTPUTS) {
  fs.writeFileSync(path.join(OUT_DIR, file), render(size, logoScale).toBuffer("image/png"));
  console.log(file, size);
}
