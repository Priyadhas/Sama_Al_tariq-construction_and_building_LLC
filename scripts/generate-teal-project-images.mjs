import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.resolve("src/assets/projects");
const width = 3840;
const height = 2160;

const images = [
  ["../src/assets/teal-luxury-detail.png", "teal-philosophy-detail-4k.jpg"],
  ["../src/assets/teal-luxury-staircase.png", "teal-staircase-4k.jpg"],
  ["../src/assets/teal-luxury-living.png", "teal-living-4k.jpg"],
  ["../src/assets/teal-luxury-hero.png", "teal-hero-4k.jpg"],
  ["../src/assets/teal-luxury-boardroom.png", "teal-boardroom-4k.jpg"],
  ["../src/assets/teal-luxury-bathroom.png", "teal-bathroom-4k.jpg"],
];

await fs.mkdir(outDir, { recursive: true });

for (const [source, file] of images) {
  const input = path.resolve(import.meta.dirname, source);
  const output = path.join(outDir, file);

  await sharp(input)
    .resize(width, height, {
      fit: "cover",
      position: "attention",
      kernel: sharp.kernel.lanczos3,
    })
    .modulate({ saturation: 1.04, brightness: 1.01 })
    .sharpen({ sigma: 0.65, m1: 0.7, m2: 1.4 })
    .jpeg({
      quality: 94,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(output);

  console.log(`generated ${output}`);
}
