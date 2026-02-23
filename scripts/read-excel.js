const XLSX = require('xlsx');
const path = require('path');

const excelPath = path.join('public', 'zoomarchive', '動画倉庫.xlsx');
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

console.log(JSON.stringify(data, null, 2));
