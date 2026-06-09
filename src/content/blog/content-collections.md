---
title: '用内容集合管理文章'
description: 'Astro 的 Content Collections 如何用 schema 给 Markdown 加上类型安全。'
pubDate: 2026-06-03
tags: ['Astro', '教程']
heroImage: ../../assets/covers/content-collections.webp
---

随着文章变多,手动维护每篇的 frontmatter 很容易出错。Astro 的**内容集合(Content Collections)**用一份 schema 统一约束所有文章的元数据。

## 定义集合

在 `src/content.config.ts` 里用 `glob` 加载器读取文件,并用 [Zod](https://zod.dev) 描述 frontmatter:

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

## 查询文章

任意页面都能用 `getCollection` 拿到类型安全的数据:

```ts
import { getCollection } from 'astro:content';
const posts = await getCollection('blog', ({ data }) => !data.draft);
```

## 好处

- **类型安全**:字段写错、类型不对,构建时直接报错
- **自动补全**:`post.data.` 会提示所有字段
- **解耦**:内容和渲染逻辑分离,换主题不动文章

下次写文章时,frontmatter 漏填必填字段会被立刻拦下 —— 这正是 schema 的价值。
