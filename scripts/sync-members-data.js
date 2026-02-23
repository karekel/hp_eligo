const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const pdf = require('pdf-parse');

const MATERIALS_DIR = path.join(__dirname, '..', 'public', 'materials');
const ZOOM_EXCEL = path.join(__dirname, '..', 'public', 'zoomarchive', '動画倉庫.xlsx');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'lib', 'membersData.json');

async function processMaterials() {
    if (!fs.existsSync(MATERIALS_DIR)) return [];
    const files = fs.readdirSync(MATERIALS_DIR);
    const pdfFiles = files.filter(f => f.endsWith('.pdf'));
    const results = [];

    for (const fileName of pdfFiles) {
        const filePath = path.join(MATERIALS_DIR, fileName);
        const dataBuffer = fs.readFileSync(filePath);

        let summary = "資料の内容を読み取れませんでした。";
        try {
            const data = await pdf(dataBuffer);
            // Extract first 200 characters for summary
            summary = data.text.replace(/\s+/g, ' ').trim().substring(0, 200) + "...";
        } catch (e) {
            console.error(`Error parsing PDF ${fileName}:`, e);
        }

        // Parse filename: Title_Tag1・Tag2.pdf
        const nameWithoutExt = fileName.replace('.pdf', '');
        const parts = nameWithoutExt.split('_');
        const title = parts[0] || nameWithoutExt;
        const tags = parts[1] ? parts[1].split('・') : [];

        results.push({
            id: `m-${fileName}`,
            title,
            description: summary,
            tags,
            url: `/materials/${fileName}`,
            thumbnailUrl: `/materials/thumbnails/${fileName.replace('.pdf', '.png')}`,
            fileType: "pdf"
        });
    }
    return results;
}

function processZoomArchive() {
    if (!fs.existsSync(ZOOM_EXCEL)) return [];
    const workbook = XLSX.readFile(ZOOM_EXCEL);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Read with header: 1 to get raw rows as arrays
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Skip first row (Title row in Japanese "表1")
    // Header is in index 1: ["タイトル", "リンク", "説明", "タグ"]
    const dataRows = rows.slice(2);

    const results = dataRows
        .filter(row => row && row[1] && row[1] !== "リンク" && row[1] !== "#") // Must have a link and not be header/footer
        .map((row, index) => {
            const title = String(row[0] || "");
            const videoUrl = String(row[1] || "");
            const description = String(row[2] || "");

            // Collect tags from column 3 onwards
            const tags = [];
            for (let i = 3; i < row.length; i++) {
                if (row[i]) tags.push(String(row[i]));
            }

            let thumbnailUrl = "";
            const ytMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
            if (ytMatch) {
                thumbnailUrl = `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
            }

            // Extract date from title (e.g., 2024.02.10 or 2024.2.10)
            const dateMatch = title.match(/(\d{4})[\.\/](\d{1,2})[\.\/](\d{1,2})/);
            let dateStr = "";
            let sortValue = 0;
            if (dateMatch) {
                const y = dateMatch[1];
                const m = dateMatch[2].padStart(2, '0');
                const d = dateMatch[3].padStart(2, '0');
                dateStr = `${y}.${m}.${d}`;
                sortValue = parseInt(`${y}${m}${d}`);
            }

            return {
                id: `z-${index}`,
                title,
                description,
                tags,
                videoUrl,
                thumbnailUrl,
                date: dateStr,
                sortValue
            };
        });

    // Sort by sortValue descending (newest first)
    results.sort((a, b) => b.sortValue - a.sortValue);

    return results;
}

async function main() {
    console.log("Processing Materials...");
    const materials = await processMaterials();

    console.log("Processing Zoom Archive...");
    const zoomArchives = processZoomArchive();

    const output = {
        materials,
        zoomArchives
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log(`Success! Data written to ${OUTPUT_FILE}`);
}

main().catch(console.error);
