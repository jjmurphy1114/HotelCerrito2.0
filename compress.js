const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "./assets/images";
const outputDir = "./assets/compressed";

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, path.parse(file).name + ".webp");

  sharp(inputPath)
    .rotate() // normalize orientation
    .resize({ width: 1600 })
    .webp({ quality: 70 })
    .toFile(outputPath)
    .then(() => console.log(`✅ Compressed: ${file}`))
    .catch((err) => console.error(`❌ Failed: ${file}`, err));
});
