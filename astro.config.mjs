// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
	// TODO: 部署前改成你自己的站点地址（RSS / sitemap 会用到）
	site: 'https://example.com',
	// pagefind 会在 build 后自动为 dist/ 生成全文检索索引，并在 dev 下提供 /pagefind 代理
	integrations: [mdx(), sitemap(), pagefind()],
	markdown: {
		shikiConfig: {
			// 双主题：浅色用 github-light，深色用 github-dark，
			// 配合 global.css 里的 .dark 规则自动切换。
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			wrap: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
