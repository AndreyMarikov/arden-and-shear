import sharp from "sharp"; import fs from "node:fs";
const B = "public/brand", S = "public/assets/social", BG = "#f4ecdc";
const src = (f) => fs.readFileSync(`${B}/${f}`), T = { r: 0, g: 0, b: 0, alpha: 0 };
const fit = (f, out, o) => sharp(src(f), { density: 400 }).resize({ ...o, fit: "contain", background: T }).png({ compressionLevel: 9 }).toFile(out);
const icon = async (size, out, k = 0.62) => {
  const m = await sharp(src("brand-mark.svg"), { density: 600 }).resize({ height: Math.round(size * k) }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: BG } }).composite([{ input: m, gravity: "center" }]).png({ compressionLevel: 9 }).toFile(out);
};
await Promise.all([
  fit("logo-full.svg", `${B}/logo-full.png`, { width: 1400 }), fit("logo-full-light.svg", `${B}/logo-full-light.png`, { width: 1400 }),
  fit("logo-compact.svg", `${B}/logo-compact.png`, { width: 800 }), fit("logo-compact-light.svg", `${B}/logo-compact-light.png`, { width: 800 }),
  fit("brand-mark.svg", `${B}/brand-mark.png`, { height: 640 }),
  fit("favicon.svg", `${B}/favicon-16x16.png`, { width: 16, height: 16 }), fit("favicon.svg", `${B}/favicon-32x32.png`, { width: 32, height: 32 }),
  fit("favicon.svg", `${B}/favicon-256.tmp.png`, { width: 256, height: 256 }),
  icon(180, `${B}/apple-touch-icon.png`), icon(192, `${B}/android-chrome-192x192.png`), icon(512, `${B}/android-chrome-512x512.png`),
  sharp(src("social-card.svg"), { density: 192 }).resize(1200, 630).png({ compressionLevel: 9 }).toFile(`${S}/og-image.png`),
]);
console.log("brand PNGs written");
