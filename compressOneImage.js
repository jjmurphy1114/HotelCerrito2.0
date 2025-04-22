const sharp = require('sharp');

sharp('./assets/compressed/Parque.webp')
  .rotate() // fix orientation from EXIF
  .resize({ width: 1600 }) // optional: resize to max width
  .webp({ quality: 70 }) // re-encode with lower quality
  .toFile('./assets/compressed/Parque.compressed.webp')
  .then(() => console.log('✅ Compressed .webp image'))
  .catch(err => console.error('❌ Error:', err));
