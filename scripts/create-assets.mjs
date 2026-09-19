import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
await mkdir('public/images', { recursive: true });
const box = (x, y, w, h, title, subtitle, accent = false) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${accent ? '#281c40' : '#191923'}" stroke="${accent ? '#a78bfa' : '#454253'}"/><text x="${x + w / 2}" y="${y + 39}" text-anchor="middle" fill="#f1f5f9" font-size="23" font-weight="600">${title}</text><text x="${x + w / 2}" y="${y + 69}" text-anchor="middle" fill="#cbd5e1" font-size="17">${subtitle}</text>`;
const frame = (content) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600"><defs><pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#454253"/></pattern></defs><rect width="960" height="600" fill="#101019"/><rect width="960" height="600" fill="url(#grid)" opacity=".45"/><g font-family="Segoe UI,Arial,sans-serif">${content}</g></svg>`;
const inventory = frame(
  `<text x="60" y="65" fill="#c4b5fd" font-size="16" letter-spacing="3">INVENTORY / SYSTEM DESIGN</text><path d="M480 194V226 M480 326V358 M480 458V490 M300 408H250 M710 408H660" stroke="#a78bfa" stroke-width="3" fill="none"/>${box(285, 94, 390, 100, 'Client requests', 'Dashboard · POS · Mobile')}${box(285, 226, 390, 100, 'JWT + role permissions', 'Express.js REST API', true)}${box(285, 358, 390, 100, 'Inventory operations', 'MongoDB session transactions', true)}<text x="480" y="525" text-anchor="middle" fill="#ddd6fe" font-size="23">Immutable stock ledger</text><text x="480" y="558" text-anchor="middle" fill="#cbd5e1" font-size="17">Purchases · Sales · Transfers · Adjustments</text><text x="60" y="400" fill="#c4b5fd" font-size="19">Low-stock</text><text x="60" y="430" fill="#cbd5e1" font-size="17">monitoring</text><text x="720" y="400" fill="#c4b5fd" font-size="19">Valuation</text><text x="720" y="430" fill="#cbd5e1" font-size="17">reporting</text>`,
);
const school = frame(
  `<text x="60" y="65" fill="#c4b5fd" font-size="16" letter-spacing="3">SCHOOL MANAGEMENT / CONCEPTUAL ARCHITECTURE</text>${box(280, 110, 400, 100, 'Authentication + roles', 'Node.js / Express.js REST API', true)}<path d="M480 210V255H170V285 M480 255V285 M480 255H790V285 M170 385V430H790V385 M480 385V465" stroke="#a78bfa" stroke-width="3" fill="none"/>${box(50, 285, 240, 100, 'Academic', 'Academic domain')}${box(360, 285, 240, 100, 'Financial', 'Transaction logic')}${box(670, 285, 240, 100, 'Operational', 'Operational domain')}<text x="480" y="505" text-anchor="middle" fill="#f1f5f9" font-size="30" font-weight="600">22-table relational model</text><text x="480" y="545" text-anchor="middle" fill="#cbd5e1" font-size="18">ERD planning · Actual ERD preview pending</text>`,
);
await writeFile('public/images/inventory.svg', inventory);
await writeFile('public/images/school.svg', school);
await writeFile(
  'public/favicon.svg',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#101019"/><text x="32" y="43" text-anchor="middle" fill="#ddd6fe" font-family="Arial,sans-serif" font-weight="700" font-size="30">AA</text></svg>',
);
await sharp(
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#09090f"/><circle cx="1060" cy="100" r="380" fill="#211333"/><rect x="70" y="75" width="100" height="80" rx="16" fill="#322044"/><g font-family="Arial,sans-serif"><text x="90" y="129" fill="#ddd6fe" font-size="42" font-weight="700">AA</text><text x="70" y="300" fill="#f1f5f9" font-size="78" font-weight="700">Ahmed Adeshina</text><text x="70" y="378" fill="#c4b5fd" font-size="44">Full-Stack Developer</text><text x="70" y="464" fill="#cbd5e1" font-size="28">React · Next.js · Node.js · Express.js · MongoDB</text><text x="70" y="553" fill="#cbd5e1" font-size="24">Abuja, Nigeria / adeshina-ahmed.vercel.app</text></g></svg>',
  ),
)
  .png()
  .toFile('public/og-image.png');
