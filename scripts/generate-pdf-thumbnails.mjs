/**
 * PDFの1ページ目をPNG画像に変換してサムネイルとして保存するスクリプト
 * Usage: node scripts/generate-pdf-thumbnails.mjs
 */

import { createCanvas } from "@napi-rs/canvas";
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);

const MATERIALS_DIR = path.join(__dirname, "../public/materials");
const THUMBNAILS_DIR = path.join(__dirname, "../public/materials/thumbnails");
const SCALE = 1.5; // 解像度倍率
const THUMB_WIDTH = 800; // サムネイル最大幅 (px)

async function loadPdfJs() {
    const { getDocument, GlobalWorkerOptions } = await import(
        "pdfjs-dist/legacy/build/pdf.mjs"
    );
    // Node.js環境: workerのパスを絶対URLで指定
    const workerPath = new URL(
        "../node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs",
        import.meta.url
    ).href;
    GlobalWorkerOptions.workerSrc = workerPath;
    return { getDocument };
}

async function renderPdfFirstPage(pdfPath, outputPath) {
    const { getDocument } = await loadPdfJs();

    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const loadingTask = getDocument({
        data,
        // Canvasのエミュレーション用設定
        useSystemFonts: true,
        disableFontFace: true,
    });

    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);

    const viewport = page.getViewport({ scale: SCALE });
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext("2d");

    const renderContext = {
        canvasContext: context,
        viewport,
    };

    await page.render(renderContext).promise;

    const rawBuffer = await canvas.encode("png");
    // sharpでリサイズ・最適化
    await sharp(rawBuffer)
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .png({ compressionLevel: 9, quality: 80 })
        .toFile(outputPath);
    const size = fs.statSync(outputPath).size;
    console.log(`✅ Generated: ${path.basename(outputPath)} (${Math.round(size / 1024)}KB)`);
}

async function main() {
    if (!fs.existsSync(THUMBNAILS_DIR)) {
        fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
        console.log(`📁 Created: ${THUMBNAILS_DIR}`);
    }

    const pdfFiles = fs
        .readdirSync(MATERIALS_DIR)
        .filter((f) => f.endsWith(".pdf"));

    if (pdfFiles.length === 0) {
        console.log("No PDF files found in", MATERIALS_DIR);
        return;
    }

    for (const rawPdfFile of pdfFiles) {
        // NFC正規化: macOS由来のNFDファイル名をURLで使えるNFCに統一
        const pdfFile = rawPdfFile.normalize("NFC");
        if (rawPdfFile !== pdfFile) {
            fs.renameSync(
                path.join(MATERIALS_DIR, rawPdfFile),
                path.join(MATERIALS_DIR, pdfFile)
            );
            console.log(`  Renamed to NFC: ${pdfFile}`);
        }

        const pdfPath = path.join(MATERIALS_DIR, pdfFile);
        const thumbnailName = pdfFile.replace(".pdf", ".png");
        const outputPath = path.join(THUMBNAILS_DIR, thumbnailName);

        // すでにサムネイルがある場合はスキップ
        if (fs.existsSync(outputPath)) {
            console.log(`⏭️  Skip (exists): ${thumbnailName}`);
            continue;
        }

        console.log(`🔄 Processing: ${pdfFile}`);
        try {
            await renderPdfFirstPage(pdfPath, outputPath);
        } catch (err) {
            console.error(`❌ Failed: ${pdfFile}`, err.message);
        }
    }

    console.log("\n✨ Done! All thumbnails generated.");
}

main();
