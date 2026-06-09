// 用 sharp 生成示例文章的渐变封面图（WebP）。
// 纯渐变 + 抽象图形，不含文字，避免 CJK 字体在 SVG 渲染时的兼容问题。
// 运行：bun run scripts/generate-covers.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'src', 'assets', 'covers');

// 每篇文章一组配色（主色 / 辅色）
const covers = [
	{ id: 'welcome', from: '#7c3aed', to: '#db2777' },
	{ id: 'astro-tailwind', from: '#6d28d9', to: '#2563eb' },
	{ id: 'content-collections', from: '#9333ea', to: '#0ea5e9' },
	{ id: 'tailwind-v4-tips', from: '#7c3aed', to: '#0d9488' },
	{ id: 'markdown-guide', from: '#c026d3', to: '#7c3aed' },
	{ id: 'reading-notes', from: '#4f46e5', to: '#db2777' },
];

const W = 1200;
const H = 630;

function svgFor({ from, to }) {
	return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.22" cy="0.18" r="0.9">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <circle cx="990" cy="110" r="200" fill="#ffffff" opacity="0.10"/>
  <circle cx="1110" cy="540" r="260" fill="#000000" opacity="0.08"/>
  <circle cx="170" cy="520" r="120" fill="#ffffff" opacity="0.07"/>
</svg>`;
}

await mkdir(OUT_DIR, { recursive: true });

for (const cover of covers) {
	const out = join(OUT_DIR, `${cover.id}.webp`);
	await sharp(Buffer.from(svgFor(cover)))
		.webp({ quality: 82 })
		.toFile(out);
	console.log(`✓ ${cover.id}.webp`);
}

console.log(`\nDone. ${covers.length} covers written to src/assets/covers/`);
