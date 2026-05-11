import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const generatedDir =
  "C:/Users/Lenovo/.codex/generated_images/019e155b-fc81-7d20-9fc0-fc2d4e05f8d1";
const outDir = path.resolve("src/assets/projects");
const width = 3840;
const height = 2160;

const images = [
  [
    "ig_0d43a6bd74f8fe9c016a016ba8f0e88191bd049d68d2d1e7c4.png",
    "ai-luxury-stair-foyer-4k.jpg",
  ],
  [
    "ig_0d43a6bd74f8fe9c016a016bf79b748191affc092129f9bb25.png",
    "ai-luxury-living-room-4k.jpg",
  ],
  [
    "ig_0d43a6bd74f8fe9c016a016c4465f881919826f6bff0f71f47.png",
    "ai-executive-boardroom-4k.jpg",
  ],
  [
    "ig_0d43a6bd74f8fe9c016a016c9ad4988191b5d7575a1ac5ead8.png",
    "ai-boutique-retail-4k.jpg",
  ],
  [
    "ig_0d43a6bd74f8fe9c016a016d0ef7c081918988444526621d96.png",
    "ai-spa-bathroom-4k.jpg",
  ],
  [
    "ig_0d43a6bd74f8fe9c016a016d74666c8191a49fdb363a24c235.png",
    "ai-master-bedroom-study-4k.jpg",
  ],
];

await fs.mkdir(outDir, { recursive: true });

for (const [sourceFile, outputFile] of images) {
  const source = path.join(generatedDir, sourceFile);
  const output = path.join(outDir, outputFile);

  await sharp(source)
    .resize(width, height, {
      fit: "cover",
      position: "attention",
      kernel: sharp.kernel.lanczos3,
    })
    .modulate({ saturation: 1.03, brightness: 1.01 })
    .sharpen({ sigma: 0.6, m1: 0.7, m2: 1.35 })
    .jpeg({
      quality: 94,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(output);

  console.log(`imported ${output}`);
}
