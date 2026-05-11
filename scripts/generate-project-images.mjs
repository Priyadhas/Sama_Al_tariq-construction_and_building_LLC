import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.resolve("src/assets/projects");
const width = 3840;
const height = 2160;

const palette = {
  ink: "#111413",
  black: "#050607",
  ivory: "#efe9df",
  warmStone: "#c8bda9",
  brass: "#b58a4d",
  teal: "#188b97",
  sage: "#69766c",
  rose: "#b98770",
  blue: "#0c7fa8",
  timber: "#9a6f43",
};

function grain(seed, opacity = 0.13) {
  return `
    <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.74" numOctaves="4" seed="${seed}" />
      <feColorMatrix type="saturate" values="0" />
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 ${opacity}" />
      </feComponentTransfer>
    </filter>
  `;
}

function defs(scene) {
  return `
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${scene.bg1}" />
        <stop offset="0.54" stop-color="${scene.bg2}" />
        <stop offset="1" stop-color="${scene.bg3}" />
      </linearGradient>
      <radialGradient id="glow" cx="${scene.glowX ?? "66%"}" cy="${scene.glowY ?? "34%"}" r="72%">
        <stop offset="0" stop-color="${scene.glow}" stop-opacity="0.28" />
        <stop offset="0.42" stop-color="${scene.glow}" stop-opacity="0.07" />
        <stop offset="1" stop-color="#000000" stop-opacity="0.48" />
      </radialGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#f5ffff" stop-opacity="0.52" />
        <stop offset="0.55" stop-color="#9ee8e7" stop-opacity="0.25" />
        <stop offset="1" stop-color="#081416" stop-opacity="0.56" />
      </linearGradient>
      <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f5dca2" />
        <stop offset="0.46" stop-color="${palette.brass}" />
        <stop offset="1" stop-color="#4b3217" />
      </linearGradient>
      <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#56e4ef" />
        <stop offset="0.5" stop-color="#0b8bb4" />
        <stop offset="1" stop-color="#063b5b" />
      </linearGradient>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="42" stdDeviation="38" flood-color="#000000" flood-opacity="0.36" />
      </filter>
      ${grain(scene.seed, scene.grain)}
    </defs>
  `;
}

function poly(points, fill, opacity = 1, extra = "") {
  return `<polygon points="${points}" fill="${fill}" opacity="${opacity}" ${extra}/>`;
}

function rect(x, y, w, h, fill, opacity = 1, extra = "") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" opacity="${opacity}" ${extra}/>`;
}

function lineGrid(color = "#ffffff", opacity = 0.045) {
  let lines = "";
  for (let x = 0; x < width + 260; x += 260) {
    lines += `<path d="M${x} 0 L${x - 420} ${height}" stroke="${color}" stroke-opacity="${opacity}" stroke-width="2"/>`;
  }
  for (let y = 170; y < height; y += 210) {
    lines += `<path d="M0 ${y} C860 ${y - 80} 1940 ${y + 92} 3840 ${y - 44}" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="2"/>`;
  }
  return `<g>${lines}</g>`;
}

const projects = [
  {
    file: "villa-dubai-hills-4k.jpg",
    seed: 15,
    bg1: "#f2eee5",
    bg2: "#c9bdac",
    bg3: "#20211e",
    glow: "#cda56b",
    scene: () => `
      ${poly("0,1320 3840,940 3840,2160 0,2160", "#ddd1bd", 0.82)}
      ${poly("430,460 1760,330 1840,1820 520,1990", "#f6f0e7", 0.9, 'filter="url(#shadow)"')}
      ${poly("1930,390 3320,540 3180,1850 1850,1740", "#1b1c1a", 0.82)}
      ${poly("560,740 1380,640 1420,1530 610,1650", "#b8946c", 0.56)}
      ${poly("760,820 1260,760 1280,1440 790,1510", "#fff8ec", 0.9)}
      ${poly("2050,690 3060,780 2980,1510 1970,1430", "#efe8dc", 0.78)}
      ${poly("1960,1480 3260,1330 3150,1650 1890,1810", "#8f6a3f", 0.56)}
      <g stroke="#2c2d2a" stroke-opacity="0.2" stroke-width="5">
        <path d="M480 1360 C1180 1240 1820 1220 3320 1330" />
        <path d="M520 1560 C1320 1430 2100 1460 3400 1510" />
        <path d="M610 1780 C1410 1620 2280 1680 3270 1740" />
      </g>
      <g fill="#315446" opacity="0.9">
        <ellipse cx="3090" cy="900" rx="130" ry="310" transform="rotate(-12 3090 900)" />
        <ellipse cx="3230" cy="1030" rx="100" ry="240" transform="rotate(18 3230 1030)" />
      </g>
    `,
  },
  {
    file: "business-office-fitout-4k.jpg",
    seed: 21,
    bg1: "#f3f3ef",
    bg2: "#a9ada7",
    bg3: "#101615",
    glow: "#188b97",
    scene: () => `
      ${poly("0,560 3840,260 3840,790 0,1070", "#ecece8", 0.84)}
      ${poly("320,940 3520,700 3840,1210 620,1690", "#f5f3ed", 0.72, 'filter="url(#shadow)"')}
      ${poly("420,600 930,560 930,1410 420,1510", "url(#glass)", 0.68)}
      ${poly("1120,500 1810,450 1810,1340 1120,1450", "#ffffff", 0.74)}
      ${poly("2010,440 2790,500 2790,1360 2010,1290", "url(#glass)", 0.72)}
      ${poly("2960,560 3420,620 3420,1250 2960,1200", "#e4ded3", 0.78)}
      <g fill="#252928" opacity="0.86">
        ${rect(760, 1250, 460, 90, "#252928")}
        ${rect(850, 1160, 260, 120, "#252928")}
        ${rect(2120, 1180, 530, 90, "#252928")}
        ${rect(2250, 1060, 250, 150, "#252928")}
      </g>
      <g stroke="#111" stroke-opacity="0.16" stroke-width="5">
        <path d="M0 790 H3840" />
        <path d="M590 585 V1500 M990 540 V1440 M1880 440 V1370 M2850 505 V1320" />
      </g>
      <g stroke="url(#brass)" stroke-width="12" opacity="0.72">
        <path d="M1860 420 V1390" />
        <path d="M2920 520 V1290" />
      </g>
    `,
  },
  {
    file: "seris-perfume-retail-4k.jpg",
    seed: 28,
    bg1: "#090909",
    bg2: "#2b2a27",
    bg3: "#f0ece4",
    glow: "#9fe9e4",
    glowX: "42%",
    scene: () => `
      ${rect(0, 0, 3840, 520, "#050505", 0.96)}
      <g fill="#f4f2ee" opacity="0.9" font-family="Arial, sans-serif" font-weight="700" letter-spacing="28">
        <text x="1080" y="285" font-size="220">SERIS</text>
        <text x="1040" y="455" font-size="116" letter-spacing="42">PARFUMS</text>
      </g>
      ${poly("540,560 1430,520 1430,1990 540,2030", "#f5f1e9", 0.9, 'filter="url(#shadow)"')}
      ${poly("1660,570 2720,540 2720,2020 1660,1980", "#f7f4ee", 0.86)}
      ${poly("2920,600 3480,660 3480,1900 2920,1960", "url(#glass)", 0.58)}
      <g stroke="#202020" stroke-opacity="0.42" stroke-width="16">
        <path d="M640 780 H1320 M640 1010 H1320 M640 1240 H1320 M640 1470 H1320" />
        <path d="M1780 790 H2600 M1780 1020 H2600 M1780 1250 H2600 M1780 1480 H2600" />
      </g>
      <g stroke="url(#brass)" stroke-width="8" opacity="0.52">
        <path d="M1460 560 V1980 M2770 560 V1980" />
      </g>
      ${poly("1360,1670 1860,1580 2440,1670 1900,1860", "#e6ddd0", 0.72)}
      ${rect(1790, 1450, 380, 310, "#1c1d1b", 0.82)}
    `,
  },
  {
    file: "pool-landscape-4k.jpg",
    seed: 35,
    bg1: "#d8c8ab",
    bg2: "#6f836e",
    bg3: "#063149",
    glow: "#26d0e8",
    scene: () => `
      ${poly("0,820 3840,560 3840,2160 0,2160", "#b8aa91", 0.76)}
      ${poly("420,950 3460,730 3730,1680 780,1990", "#1d4c66", 0.96, 'filter="url(#shadow)"')}
      ${poly("720,1060 3180,900 3410,1540 1040,1760", "url(#water)", 0.98)}
      <g stroke="#e7ffff" stroke-opacity="0.32" stroke-width="5">
        <path d="M760 1120 C1400 1030 2230 1050 3260 930" />
        <path d="M820 1270 C1550 1160 2260 1210 3330 1080" />
        <path d="M900 1430 C1740 1300 2390 1370 3380 1240" />
        <path d="M990 1600 C1760 1450 2550 1530 3310 1400" />
      </g>
      <g fill="#315f3a" opacity="0.9">
        <ellipse cx="520" cy="610" rx="150" ry="340" transform="rotate(-18 520 610)" />
        <ellipse cx="3320" cy="550" rx="180" ry="390" transform="rotate(14 3320 550)" />
        <ellipse cx="3580" cy="790" rx="120" ry="270" transform="rotate(-22 3580 790)" />
      </g>
      ${poly("580,840 3460,610 3560,760 680,1030", "#e5d7bc", 0.82)}
    `,
  },
  {
    file: "gate-avenue-mall-4k.jpg",
    seed: 42,
    bg1: "#111311",
    bg2: "#726e60",
    bg3: "#d9d3c8",
    glow: "#188b97",
    scene: () => `
      ${poly("0,250 3840,0 3840,620 0,950", "#2c2c28", 0.82)}
      ${poly("420,520 1260,460 1260,1960 420,2070", "#a79b83", 0.78, 'filter="url(#shadow)"')}
      ${poly("1450,450 2440,380 2440,1840 1450,1940", "#c3b99d", 0.72)}
      ${poly("2630,420 3420,480 3420,1740 2630,1830", "#ebe6db", 0.78)}
      <g stroke="#3a3d3a" stroke-opacity="0.55" stroke-width="12">
        <path d="M520 560 V1990 M730 540 V1960 M940 520 V1930 M1150 500 V1900" />
        <path d="M1550 500 V1880 M1780 480 V1850 M2010 455 V1820 M2240 435 V1790" />
        <path d="M2740 500 V1770 M2960 520 V1740 M3180 540 V1710" />
      </g>
      <g stroke="#fff7ed" stroke-opacity="0.18" stroke-width="18">
        <path d="M0 780 L3840 470" />
        <path d="M0 1010 L3840 700" />
      </g>
      ${poly("0,1640 3840,1280 3840,2160 0,2160", "#777069", 0.38)}
    `,
  },
  {
    file: "commercial-raised-floor-4k.jpg",
    seed: 49,
    bg1: "#f4f4f1",
    bg2: "#9a9b94",
    bg3: "#151816",
    glow: "#188b97",
    scene: () => `
      ${poly("0,520 3840,270 3840,820 0,1080", "#f1f1ec", 0.86)}
      ${poly("280,1050 3580,690 3840,1390 560,2040", "#6b6a64", 0.74, 'filter="url(#shadow)"')}
      <g fill="#f7f6f1" stroke="#262926" stroke-opacity="0.26" stroke-width="5">
        ${poly("480,940 1050,890 1100,1080 520,1130", "#f7f6f1", 0.92)}
        ${poly("1120,880 1700,820 1760,1010 1170,1080", "#f7f6f1", 0.92)}
        ${poly("1780,810 2370,750 2440,940 1840,1010", "#f7f6f1", 0.92)}
        ${poly("2460,740 3040,690 3130,880 2530,950", "#f7f6f1", 0.92)}
      </g>
      <g stroke="#202422" stroke-opacity="0.58" stroke-width="12">
        <path d="M620 1140 V1500 M1220 1090 V1480 M1870 1030 V1460 M2550 970 V1420 M3190 900 V1360" />
      </g>
      <g fill="#141716" opacity="0.82">
        ${rect(530, 660, 460, 390, "#141716")}
        ${rect(1060, 690, 220, 170, "#141716")}
      </g>
      <g stroke="#ffffff" stroke-opacity="0.3" stroke-width="3">
        <path d="M420 1260 C1240 1080 2180 1120 3560 920" />
        <path d="M520 1510 C1410 1290 2310 1370 3640 1120" />
      </g>
    `,
  },
];

function svg(project) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      ${defs(project)}
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect width="${width}" height="${height}" fill="url(#glow)" />
      ${lineGrid()}
      <g opacity="0.98">${project.scene()}</g>
      <rect width="${width}" height="${height}" fill="#000000" opacity="0.04" />
      <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.82" />
    </svg>
  `;
}

await fs.mkdir(outDir, { recursive: true });

const requested = new Set(process.argv.slice(2));
const selectedProjects = requested.size
  ? projects.filter((project) => requested.has(project.file))
  : projects;

for (const project of selectedProjects) {
  const output = path.join(outDir, project.file);
  await sharp(Buffer.from(svg(project)), { density: 144 })
    .resize(width, height, { fit: "cover" })
    .jpeg({
      quality: 92,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(output);
  console.log(`generated ${output}`);
}
