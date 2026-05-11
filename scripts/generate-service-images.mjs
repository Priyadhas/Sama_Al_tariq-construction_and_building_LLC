import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.resolve("src/assets/services");
const width = 3840;
const height = 2160;

const palette = {
  onyx: "#0c0d0d",
  ink: "#171817",
  stone: "#b9b0a0",
  alabaster: "#eee8dc",
  warm: "#c7a56b",
  brass: "#a1783e",
  teal: "#0d9aa4",
  deepTeal: "#07555c",
  water: "#10aebb",
  shadow: "#050606",
  concrete: "#8e8b82",
};

function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function grain(seed = 4, opacity = 0.18) {
  return `
    <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" seed="${seed}" />
      <feColorMatrix type="saturate" values="0" />
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 ${opacity}" />
      </feComponentTransfer>
    </filter>
  `;
}

function defs(scene, seed) {
  return `
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${scene.bg1}" />
        <stop offset="0.52" stop-color="${scene.bg2}" />
        <stop offset="1" stop-color="${scene.bg3}" />
      </linearGradient>
      <radialGradient id="depth" cx="${scene.depthX ?? "68%"}" cy="${scene.depthY ?? "38%"}" r="72%">
        <stop offset="0" stop-color="${scene.glow ?? palette.teal}" stop-opacity="0.28" />
        <stop offset="0.42" stop-color="${scene.glow ?? palette.teal}" stop-opacity="0.08" />
        <stop offset="1" stop-color="#000000" stop-opacity="0.58" />
      </radialGradient>
      <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#31e0df" stop-opacity="0.92" />
        <stop offset="0.55" stop-color="#0a8d98" stop-opacity="0.96" />
        <stop offset="1" stop-color="#02393f" stop-opacity="1" />
      </linearGradient>
      <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f0d49a" />
        <stop offset="0.4" stop-color="${palette.brass}" />
        <stop offset="1" stop-color="#3f2c17" />
      </linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#dff9f7" stop-opacity="0.32" />
        <stop offset="0.55" stop-color="#12a8b0" stop-opacity="0.26" />
        <stop offset="1" stop-color="#061b1e" stop-opacity="0.52" />
      </linearGradient>
      <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="38" stdDeviation="36" flood-color="#000000" flood-opacity="0.38" />
      </filter>
      <filter id="blurGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="34" />
      </filter>
      ${grain(seed, scene.grain ?? 0.14)}
    </defs>
  `;
}

function grid() {
  let lines = "";
  for (let x = 0; x <= width; x += 240) {
    lines += `<path d="M${x} 0 L${x + 460} ${height}" stroke="#ffffff" stroke-opacity="0.035" stroke-width="2"/>`;
  }
  for (let y = 180; y < height; y += 220) {
    lines += `<path d="M0 ${y} C920 ${y - 80} 1860 ${y + 90} 3840 ${y - 40}" fill="none" stroke="#ffffff" stroke-opacity="0.035" stroke-width="2"/>`;
  }
  return `<g>${lines}</g>`;
}

function slab(points, fill, opacity = 1, extra = "") {
  return `<polygon points="${points}" fill="${fill}" opacity="${opacity}" ${extra}/>`;
}

function vein(x1, y1, x2, y2, opacity = 0.26, color = "#315752") {
  return `<path d="M${x1} ${y1} C${(x1 + x2) / 2 - 140} ${y1 - 90}, ${(x1 + x2) / 2 + 180} ${y2 + 120}, ${x2} ${y2}" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="8" stroke-linecap="round"/>`;
}

const services = [
  {
    file: "service-interior-fit-out.png",
    seed: 12,
    bg1: "#111413",
    bg2: "#352d22",
    bg3: "#071b1e",
    glow: "#15a9aa",
    scene: () => `
      ${slab("350,480 1760,250 3450,780 2060,1110", "#dacfbf", 0.8, 'filter="url(#softShadow)"')}
      ${slab("760,1010 2520,650 3520,1180 1760,1720", "#202322", 0.72)}
      ${slab("1660,280 1880,240 1880,1820 1660,1880", "url(#brass)", 0.78)}
      ${slab("1960,360 2240,410 2240,1710 1960,1660", "url(#glass)", 0.68)}
      ${slab("240,1420 1740,1050 3660,1390 1950,2040", "#b7aa96", 0.42)}
      ${vein(560, 570, 1680, 900, 0.22)}
      ${vein(920, 520, 2120, 1080, 0.18)}
      <g stroke="#f7efe2" stroke-opacity="0.22" stroke-width="3">
        <path d="M480 1500 L1920 1160 L3380 1410" />
        <path d="M860 1630 L2080 1320 L3240 1510" />
        <path d="M1320 1780 L2320 1510 L3060 1620" />
      </g>
    `,
  },
  {
    file: "service-maintenance-asset-care.png",
    seed: 14,
    bg1: "#0a0d0d",
    bg2: "#202622",
    bg3: "#072527",
    glow: "#0fa5a7",
    scene: () => `
      ${slab("520,420 3380,240 3440,1620 560,1840", "#151a19", 0.78, 'filter="url(#softShadow)"')}
      ${slab("690,560 1590,500 1600,1490 700,1580", "#252927", 0.76)}
      ${slab("1740,485 2530,430 2540,1430 1750,1510", "#1a201f", 0.82)}
      ${slab("2680,420 3210,380 3220,1380 2690,1440", "#2b2f2a", 0.72)}
      <g fill="none" stroke="#c4f4ee" stroke-opacity="0.16" stroke-width="4">
        <rect x="780" y="660" width="680" height="560" />
        <rect x="1850" y="625" width="540" height="490" />
        <path d="M950 1330 H2360 M950 1400 H2360 M2820 560 V1320" />
      </g>
      <g fill="${palette.teal}" opacity="0.72">
        <circle cx="1340" cy="750" r="14" /><circle cx="2180" cy="720" r="14" /><circle cx="2910" cy="560" r="12" />
      </g>
      <path d="M840 1710 C1280 1560 1850 1620 2420 1480 C2820 1380 3110 1450 3380 1320" fill="none" stroke="#8fe8df" stroke-opacity="0.18" stroke-width="5"/>
    `,
  },
  {
    file: "service-ceiling-partition-systems.png",
    seed: 18,
    bg1: "#11100f",
    bg2: "#3b372f",
    bg3: "#071f22",
    glow: "#13a0a8",
    scene: () => `
      ${slab("0,170 3840,0 3840,810 0,1040", "#c9c0af", 0.54)}
      <g stroke="#ffffff" stroke-opacity="0.28" stroke-width="5">
        <path d="M120 350 H3600" /><path d="M260 520 H3720" /><path d="M410 690 H3840" />
      </g>
      <g stroke="#0d0d0d" stroke-opacity="0.28" stroke-width="16">
        <path d="M680 210 L1120 950" /><path d="M1460 130 L1830 870" /><path d="M2260 80 L2520 780" /><path d="M3120 20 L3260 700" />
      </g>
      ${slab("760,1000 1600,820 1600,1950 760,2110", "#e6ded0", 0.62, 'filter="url(#softShadow)"')}
      ${slab("1760,840 2540,750 2540,1860 1760,1970", "#b7b0a5", 0.5)}
      ${slab("2680,760 3330,720 3330,1760 2680,1840", "url(#glass)", 0.5)}
      <path d="M0 1120 C760 980 1180 1040 1880 900 C2480 780 3100 840 3840 700" fill="none" stroke="#d8ffff" stroke-opacity="0.18" stroke-width="3"/>
    `,
  },
  {
    file: "service-architectural-finishes.png",
    seed: 22,
    bg1: "#f0eadf",
    bg2: "#b7afa0",
    bg3: "#172020",
    glow: "#0e9aa2",
    scene: () => `
      ${slab("360,360 1820,220 1940,1820 430,1980", "#efe9df", 0.82, 'filter="url(#softShadow)"')}
      ${slab("1980,310 3320,460 3140,1850 1840,1740", "#161818", 0.76)}
      ${slab("1720,260 1900,240 1810,1760 1620,1800", "url(#brass)", 0.86)}
      ${vein(520, 620, 1640, 920, 0.3)}
      ${vein(640, 860, 1760, 1340, 0.22)}
      ${vein(720, 1180, 1520, 1640, 0.18)}
      <g opacity="0.38">
        ${slab("2160,520 3060,620 2990,1180 2090,1090", "url(#glass)", 0.78)}
        ${slab("2210,1250 3050,1320 2980,1650 2160,1600", "#85745c", 0.58)}
      </g>
    `,
  },
  {
    file: "service-landscape-environments.png",
    seed: 26,
    bg1: "#0d1110",
    bg2: "#2b342b",
    bg3: "#073033",
    glow: "#0c9c84",
    scene: () => `
      ${slab("180,1320 1460,770 3520,980 2240,2050", "#867a65", 0.66, 'filter="url(#softShadow)"')}
      ${slab("680,1350 1560,1030 3160,1160 2240,1720", "url(#water)", 0.64)}
      <g fill="#284a34" opacity="0.92">
        <ellipse cx="610" cy="1040" rx="210" ry="430" transform="rotate(-18 610 1040)" />
        <ellipse cx="970" cy="830" rx="160" ry="330" transform="rotate(18 970 830)" />
        <ellipse cx="3190" cy="780" rx="190" ry="390" transform="rotate(12 3190 780)" />
        <ellipse cx="3460" cy="1020" rx="150" ry="310" transform="rotate(-24 3460 1020)" />
      </g>
      <g fill="#c5b483" opacity="0.44">
        <circle cx="760" cy="1540" r="24" /><circle cx="1070" cy="1410" r="18" /><circle cx="2890" cy="1280" r="22" /><circle cx="3270" cy="1160" r="16" />
      </g>
      <g stroke="#e9dfcd" stroke-opacity="0.2" stroke-width="4">
        <path d="M260 1510 C1180 1300 2040 1300 3500 1490" />
        <path d="M460 1760 C1520 1540 2300 1560 3300 1680" />
      </g>
    `,
  },
  {
    file: "service-civil-structural-works.png",
    seed: 31,
    bg1: "#0e0f0f",
    bg2: "#36342d",
    bg3: "#0a2528",
    glow: "#0c949d",
    scene: () => `
      <g fill="#a9a397" opacity="0.42" filter="url(#softShadow)">
        ${slab("520,300 860,260 820,1960 480,2060", "#918d84", 0.72)}
        ${slab("1480,160 1840,130 1800,1840 1440,1920", "#b0aa9f", 0.62)}
        ${slab("2580,240 2940,280 2900,1960 2540,1880", "#8f8a80", 0.68)}
      </g>
      ${slab("240,660 3560,430 3840,690 520,950", "#5d5a52", 0.72)}
      ${slab("0,1250 3300,960 3840,1240 620,1640", "#2d3030", 0.76)}
      <g stroke="${palette.brass}" stroke-opacity="0.52" stroke-width="10">
        <path d="M520 1080 L3440 760" /><path d="M620 1190 L3520 870" /><path d="M720 1300 L3600 980" />
      </g>
      <g stroke="#d6ffff" stroke-opacity="0.18" stroke-width="3">
        <path d="M460 420 L3380 1840" /><path d="M1280 260 L3010 1930" /><path d="M2420 210 L880 2000" />
      </g>
    `,
  },
  {
    file: "service-stone-tile-installation.png",
    seed: 37,
    bg1: "#ece7de",
    bg2: "#9c9488",
    bg3: "#101615",
    glow: "#0a8d92",
    scene: () => `
      ${slab("160,450 3620,220 3840,640 420,940", "#e6dfd3", 0.85, 'filter="url(#softShadow)"')}
      ${slab("300,980 3740,640 3660,1850 140,2090", "#c8bfb0", 0.72)}
      <g stroke="#272727" stroke-opacity="0.18" stroke-width="5">
        <path d="M780 930 L650 2050" /><path d="M1450 860 L1340 1990" /><path d="M2120 790 L2060 1910" /><path d="M2820 720 L2830 1840" />
        <path d="M220 1220 L3700 900" /><path d="M180 1520 L3680 1220" /><path d="M140 1830 L3660 1540" />
      </g>
      ${vein(420, 600, 1640, 850, 0.28, "#2d5b55")}
      ${vein(1180, 990, 2820, 780, 0.22, "#2d5b55")}
      ${vein(860, 1650, 3120, 1280, 0.18, "#2d5b55")}
      ${slab("2460,520 3190,470 3240,640 2510,700", "url(#brass)", 0.66)}
    `,
  },
  {
    file: "service-surface-preparation-plaster.png",
    seed: 41,
    bg1: "#f2eee6",
    bg2: "#b8b0a3",
    bg3: "#191a18",
    glow: "#118f95",
    scene: () => `
      ${slab("360,280 3220,180 3340,1820 460,1980", "#d8d1c4", 0.88, 'filter="url(#softShadow)"')}
      <g opacity="0.42">
        ${slab("740,480 1560,430 1600,1680 780,1750", "#eee8dd", 0.52)}
        ${slab("1700,380 2420,360 2470,1590 1740,1660", "#b7aea0", 0.45)}
      </g>
      <path d="M680 680 C1160 610 1500 620 2140 520 C2540 460 2860 500 3180 430" fill="none" stroke="#fff8ec" stroke-opacity="0.55" stroke-width="28" stroke-linecap="round"/>
      <path d="M780 930 C1280 860 1840 900 2460 790 C2800 730 3060 740 3240 690" fill="none" stroke="#efe6d6" stroke-opacity="0.62" stroke-width="38" stroke-linecap="round"/>
      ${slab("2140,1220 2900,1160 3020,1290 2260,1370", "url(#brass)", 0.5)}
      <g stroke="#20201d" stroke-opacity="0.13" stroke-width="2">
        <path d="M520 530 H3260" /><path d="M520 830 H3280" /><path d="M520 1130 H3300" /><path d="M520 1430 H3320" />
      </g>
    `,
  },
  {
    file: "service-waterproofing-systems.jpg",
    seed: 47,
    bg1: "#111211",
    bg2: "#3a352d",
    bg3: "#062c31",
    glow: "#09a9b2",
    scene: () => `
      ${slab("340,760 3440,520 3740,910 640,1250", "#736b5c", 0.78, 'filter="url(#softShadow)"')}
      ${slab("520,880 3280,680 3470,900 720,1120", "#1d6f76", 0.74)}
      ${slab("710,1130 3450,900 3620,1280 880,1570", "#111918", 0.84)}
      ${slab("900,1260 3180,1060 3340,1300 1060,1540", "#b9b0a2", 0.54)}
      <g stroke="#66f2ed" stroke-opacity="0.23" stroke-width="5">
        <path d="M580 1000 L3340 770" /><path d="M760 1210 L3520 980" /><path d="M960 1430 L3340 1230" />
      </g>
      <path d="M480 690 C1180 610 1580 660 2260 560 C2780 480 3220 520 3560 440" fill="none" stroke="#c8ffff" stroke-opacity="0.18" stroke-width="7"/>
      <g fill="#0bb0bb" opacity="0.45">
        <circle cx="1090" cy="870" r="16" /><circle cx="2210" cy="780" r="14" /><circle cx="3020" cy="720" r="18" />
      </g>
    `,
  },
  {
    file: "service-pool-leisure-environments.png",
    seed: 53,
    bg1: "#b6ad9e",
    bg2: "#6e675b",
    bg3: "#062e35",
    glow: "#12c9cf",
    scene: () => `
      ${slab("0,740 3840,520 3840,2160 0,2160", "#8f8677", 0.58)}
      ${slab("420,1030 3550,760 3840,1680 740,2010", "#37352f", 0.84, 'filter="url(#softShadow)"')}
      ${slab("720,1110 3310,910 3520,1560 980,1800", "url(#water)", 0.95)}
      ${slab("950,1480 1470,1430 1320,1630 820,1680", "#d7d3c7", 0.86)}
      ${slab("1720,1410 2370,1350 2220,1560 1580,1610", "#d7d3c7", 0.86)}
      <g fill="#292721" opacity="0.48">
        <rect x="370" y="650" width="220" height="1230" />
        <rect x="2920" y="540" width="230" height="1220" />
        <rect x="3310" y="480" width="260" height="1360" />
      </g>
      <g stroke="#ffffff" stroke-opacity="0.18" stroke-width="4">
        <path d="M810 1210 C1420 1110 2040 1160 3270 990" />
        <path d="M770 1350 C1520 1220 2140 1320 3340 1140" />
        <path d="M760 1510 C1600 1380 2240 1470 3380 1300" />
      </g>
    `,
  },
];

function svg(service) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      ${defs(service, service.seed)}
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect width="${width}" height="${height}" fill="url(#depth)" />
      ${grid()}
      <g opacity="0.98">${service.scene()}</g>
      <rect width="${width}" height="${height}" fill="#000000" opacity="0.08" />
      <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.75" />
      <g opacity="0.14" fill="none" stroke="#ffffff" stroke-width="2">
        <rect x="320" y="300" width="3200" height="1560" />
        <path d="M320 540 H3520 M320 1620 H3520" />
      </g>
      <title>${esc(service.file)}</title>
    </svg>
  `;
}

await fs.mkdir(outDir, { recursive: true });

const requested = new Set(process.argv.slice(2));
const selectedServices = requested.size
  ? services.filter((service) => requested.has(service.file))
  : services;

for (const service of selectedServices) {
  const buffer = Buffer.from(svg(service));
  const output = path.join(outDir, service.file);
  await sharp(buffer, { density: 144 })
    .resize(width, height, { fit: "cover" })
    .jpeg({
      quality: 91,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(output);
  console.log(`generated ${output}`);
}
