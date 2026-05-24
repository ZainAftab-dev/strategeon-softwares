const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PUBLIC = path.join(__dirname, '..', 'public');

// Active project images used in data/site.js
const activeProjects = [
  'restaurant', 'hotel', 'ecommerce', 'healthcare',
  'finance', 'strategeon', 'jobboard', 'property', 'logistics'
];

// Unused old images to delete
const unused = [
  'formbricks.png', 'formbricks.svg',
  'papermark.png', 'papermark.svg',
  'openstatus.png', 'openstatus.svg',
  'infisical.png', 'infisical.svg',
  'unkey.png', 'unkey.svg',
  'movies.png', 'movies.svg',
  'weather.png', 'weather.svg',
  'whiteboard.png', 'whiteboard.svg',
];

async function run() {
  // 1. Compress logo — resize to 300px wide (retina-ready for 48px display height)
  console.log('Compressing logo...');
  await sharp(path.join(PUBLIC, 'logo.png'))
    .resize(300, 300, { fit: 'inside', withoutEnlargement: true })
    .png({ quality: 85, compressionLevel: 9 })
    .toFile(path.join(PUBLIC, 'logo-opt.png'));
  fs.renameSync(path.join(PUBLIC, 'logo-opt.png'), path.join(PUBLIC, 'logo.png'));
  const logoSize = Math.round(fs.statSync(path.join(PUBLIC, 'logo.png')).size / 1024);
  console.log(`  logo.png → ${logoSize}KB`);

  // 2. Compress active project screenshots to WebP
  console.log('\nCompressing project images...');
  for (const name of activeProjects) {
    const src = path.join(PUBLIC, 'projects', `${name}.png`);
    const dest = path.join(PUBLIC, 'projects', `${name}.webp`);
    if (!fs.existsSync(src)) { console.log(`  SKIP ${name}.png (not found)`); continue; }
    await sharp(src)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dest);
    const orig = Math.round(fs.statSync(src).size / 1024);
    const opt = Math.round(fs.statSync(dest).size / 1024);
    console.log(`  ${name}: ${orig}KB PNG → ${opt}KB WebP`);
  }

  // 3. Delete unused images
  console.log('\nDeleting unused images...');
  for (const file of unused) {
    const p = path.join(PUBLIC, 'projects', file);
    if (fs.existsSync(p)) { fs.unlinkSync(p); console.log(`  Deleted ${file}`); }
  }

  console.log('\nDone.');
}

run().catch(console.error);
