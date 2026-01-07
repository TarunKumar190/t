// Batch convert all images in public/images to WebP using Node.js and sharp

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_DIR = path.join(__dirname, 'public', 'images');
const exts = ['.jpg', '.jpeg', '.png'];

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (exts.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

async function convertToWebP(filePath) {
  const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  await sharp(filePath)
    .webp({ quality: 80 })
    .toFile(outPath);
  console.log(`Converted: ${filePath} -> ${outPath}`);
}

(async () => {
  const images = getAllImages(IMAGE_DIR);
  for (const img of images) {
    await convertToWebP(img);
  }
  console.log('All images converted to WebP!');
})();
