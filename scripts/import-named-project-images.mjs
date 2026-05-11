import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.resolve("src/assets/projects");
const width = 3840;
const height = 2160;

const firstBatchDir =
  "C:/Users/Lenovo/.codex/generated_images/019e155b-fc81-7d20-9fc0-fc2d4e05f8d1";
const secondBatchDir =
  "C:/Users/Lenovo/.codex/generated_images/019e15bf-b664-7c51-bb31-e48fbe4f6dad";

const images = [
  [
    firstBatchDir,
    "ig_0d43a6bd74f8fe9c016a016fd0f33c819184d745f218dc8c28.png",
    "project-a-villa-259-dubai-hills-4k.jpg",
  ],
  [
    firstBatchDir,
    "ig_0d43a6bd74f8fe9c016a01702907e081919a963ccf4e4c16d2.png",
    "project-al-sahara-group-office-4k.jpg",
  ],
  [
    firstBatchDir,
    "ig_0d43a6bd74f8fe9c016a01707e2b0481919175edcf4fc7747b.png",
    "project-biz-hive-bussiness-center-4k.jpg",
  ],
  [
    firstBatchDir,
    "ig_0d43a6bd74f8fe9c016a0170d8748c8191a2ce3bb382857b4c.png",
    "project-cancan-office-renovation-4k.jpg",
  ],
  [
    firstBatchDir,
    "ig_0d43a6bd74f8fe9c016a0171296208819198741835645c36ff.png",
    "project-dubai-commercity-4k.jpg",
  ],
  [
    firstBatchDir,
    "ig_0d43a6bd74f8fe9c016a017181a8ec8191ae3a5fdf57838f9e.png",
    "project-gate-avenue-1-mall-4k.jpg",
  ],
  [
    firstBatchDir,
    "ig_0d43a6bd74f8fe9c016a0172014ad881918c9a705cae020d98.png",
    "project-seris-perfume-shop-4k.jpg",
  ],
  [
    firstBatchDir,
    "ig_0d43a6bd74f8fe9c016a01725c54588191af0a016068e998a5.png",
    "project-villa-59-dubai-hills-4k.jpg",
  ],
  [
    secondBatchDir,
    "ig_0d43a6bd74f8fe9c016a017c8c60ac8191aafafd5450c0d6c9.png",
    "project-villa-r69-emirates-hill-4k.jpg",
  ],
  [
    secondBatchDir,
    "ig_0d43a6bd74f8fe9c016a017cf2a0708191a3d997586226b7fb.png",
    "project-villa-sf22-4k.jpg",
  ],
  [
    secondBatchDir,
    "ig_0d43a6bd74f8fe9c016a017d771c288191beabc0e388a78f81.png",
    "project-villa-sf74-and-sf75-4k.jpg",
  ],
];

await fs.mkdir(outDir, { recursive: true });

for (const [sourceDir, sourceFile, outputFile] of images) {
  const source = path.join(sourceDir, sourceFile);
  const output = path.join(outDir, outputFile);

  await sharp(source)
    .resize(width, height, {
      fit: "cover",
      position: "attention",
      kernel: sharp.kernel.lanczos3,
    })
    .modulate({ saturation: 1.04, brightness: 1.01 })
    .sharpen({ sigma: 0.6, m1: 0.7, m2: 1.35 })
    .jpeg({
      quality: 94,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(output);

  console.log(`imported ${output}`);
}
