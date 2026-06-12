import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章集合：从 src/content/blog 下读取所有 .md / .mdx 文件
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// schema 用函数形式，才能拿到 image() 助手，给封面图加上类型安全 + 构建期优化
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// 用 coerce.date() 让 frontmatter 里写的字符串日期自动转成 Date
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			// 分类：单选的主归属大类，不填则归到「未分类」
			category: z.string().default('未分类'),
			draft: z.boolean().default(false),
			// 封面图：相对当前 md 文件的路径，可选。不填则用确定性渐变占位
			heroImage: image().optional(),
		}),
});

export const collections = { blog };
