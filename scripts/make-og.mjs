// Composes the 1200x630 social card: brand panel on the left, hero photograph on the right.
import sharp from "sharp"; import fs from "node:fs";
const hero = "public/assets/hero/hero.webp";
if (!fs.existsSync(hero)) { console.log("no hero photo; keeping typographic social card"); process.exit(0); }
const W = 1200, H = 630, PW = 560;
const base = await sharp("public/brand/social-card-left.svg", { density: 192 }).resize(W, H).png().toBuffer();
const photo = await sharp(hero).extract({ left: 330, top: 0, width: 910, height: 1024 }).resize(PW, H).png().toBuffer();
const mask = Buffer.from(`<svg width="${PW}" height="${H}"><path d="M0 170A170 170 0 0 1 170 0H${PW}V${H}H0Z" fill="#fff"/></svg>`);
const rounded = await sharp(photo).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
await sharp(base).composite([{ input: rounded, left: W - PW, top: 0 }]).png({ compressionLevel: 9 }).toFile("public/assets/social/og-image.png");
console.log("social card with photography written");
