// ELIGŌ ファビコン生成スクリプト
//
// 公式アイコン（public/apple-touch-icon.png）のコンパス部分を正方形に切り出し、
// その上に線画ロゴ（public/assets/ロゴ/mark_center.png）を白で少し太らせて重ねる。
// 元ロゴの線は 16〜48px ではほぼ消えてしまうため、タブで判別できる太さにしている。
// 16 / 32 / 48px を 1 つの ICO にまとめて src/app/favicon.ico に書き出す。
//
// 実行: node scripts/generate-favicon.mjs
import { createCanvas, loadImage } from "@napi-rs/canvas";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const GRADIENT = path.join(root, "public/apple-touch-icon.png");
const MARK = path.join(root, "public/assets/ロゴ/mark_center.png");
const OUT = path.join(root, "src/app/favicon.ico");

const SIZES = [16, 32, 48];
/** 公式アイコン(1500px)内でコンパスが収まる正方形 */
const CROP = { x: 238, y: 134, size: 1200 };
/** 出力サイズ S での線の太さ = max(MIN_LINE, S / LINE_DIV) px */
const LINE_DIV = 34;
const MIN_LINE = 0.7;
/** 元ロゴの線の太さ（画像幅に対する比率） */
const ORIG_LINE = 0.0065;
/** ロゴ周囲の余白（比率） */
const PAD = 0.02;
/** 作業解像度 */
const WORK = 512;

const hq = (ctx) => {
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
};

/** 2 段階で縮小してジャギーを抑える */
function downscale(src, size) {
  const midSize = Math.max(size * 4, 64);
  const mid = createCanvas(midSize, midSize);
  const mctx = mid.getContext("2d");
  hq(mctx);
  mctx.drawImage(src, 0, 0, midSize, midSize);
  const out = createCanvas(size, size);
  const octx = out.getContext("2d");
  hq(octx);
  octx.drawImage(mid, 0, 0, size, size);
  return out;
}

function renderIcon(gradient, mark, size) {
  const targetLine = Math.max(MIN_LINE, size / LINE_DIV);
  const radius = Math.max(0, (targetLine - ORIG_LINE * size) / 2) * (WORK / size);

  // 線画を白で太らせる（小さくずらしながら重ね描き）
  const layer = createCanvas(WORK, WORK);
  const lctx = layer.getContext("2d");
  hq(lctx);
  const pad = WORK * PAD;
  const markSize = WORK - pad * 2;
  const step = Math.max(1, radius / 4);
  let drawn = 0;
  for (let dx = -radius; dx <= radius; dx += step) {
    for (let dy = -radius; dy <= radius; dy += step) {
      if (dx * dx + dy * dy <= radius * radius + 0.01) {
        lctx.drawImage(mark, pad + dx, pad + dy, markSize, markSize);
        drawn++;
      }
    }
  }
  if (drawn === 0) lctx.drawImage(mark, pad, pad, markSize, markSize);
  lctx.globalCompositeOperation = "source-in";
  lctx.fillStyle = "#ffffff";
  lctx.fillRect(0, 0, WORK, WORK);

  // グラデーション背景 + 白い線画
  const work = createCanvas(WORK, WORK);
  const wctx = work.getContext("2d");
  hq(wctx);
  wctx.drawImage(gradient, CROP.x, CROP.y, CROP.size, CROP.size, 0, 0, WORK, WORK);
  wctx.drawImage(layer, 0, 0);
  return downscale(work, size);
}

/** 32bit BGRA の BMP フレーム（ICO 用） */
function bmpFrame(canvas) {
  const s = canvas.width;
  const px = canvas.getContext("2d").getImageData(0, 0, s, s).data;
  const rowBytes = s * 4;
  const maskRow = Math.ceil(s / 32) * 4;
  const buf = Buffer.alloc(40 + rowBytes * s + maskRow * s);
  buf.writeUInt32LE(40, 0);
  buf.writeInt32LE(s, 4);
  buf.writeInt32LE(s * 2, 8); // 高さは XOR + AND マスクの合計
  buf.writeUInt16LE(1, 12);
  buf.writeUInt16LE(32, 14);
  buf.writeUInt32LE(0, 16);
  buf.writeUInt32LE(rowBytes * s + maskRow * s, 20);
  let o = 40;
  for (let y = s - 1; y >= 0; y--) {
    for (let x = 0; x < s; x++) {
      const i = (y * s + x) * 4;
      buf[o++] = px[i + 2];
      buf[o++] = px[i + 1];
      buf[o++] = px[i];
      buf[o++] = px[i + 3];
    }
  }
  return buf; // AND マスクは 0 のまま（透明はアルファで表現）
}

function writeIco(frames, outPath) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  const dir = Buffer.alloc(16 * frames.length);
  let offset = 6 + dir.length;
  frames.forEach(({ size, data }, i) => {
    const e = i * 16;
    dir[e] = size >= 256 ? 0 : size;
    dir[e + 1] = size >= 256 ? 0 : size;
    dir.writeUInt16LE(1, e + 4);
    dir.writeUInt16LE(32, e + 6);
    dir.writeUInt32LE(data.length, e + 8);
    dir.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  fs.writeFileSync(outPath, Buffer.concat([header, dir, ...frames.map((f) => f.data)]));
  return offset;
}

const gradient = await loadImage(GRADIENT);
const mark = await loadImage(MARK);
const frames = SIZES.map((size) => ({ size, data: bmpFrame(renderIcon(gradient, mark, size)) }));
const bytes = writeIco(frames, OUT);
console.log(`wrote ${path.relative(root, OUT)} (${SIZES.join("/")}px, ${bytes} bytes)`);
