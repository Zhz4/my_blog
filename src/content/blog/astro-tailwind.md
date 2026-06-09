---
title: '为什么选择 Astro + Tailwind CSS'
description: '聊聊 Astro 的群岛架构、零 JS 默认值,以及 Tailwind v4 带来的开发体验。'
pubDate: 2026-06-07
tags: ['Astro', 'Tailwind', '前端']
heroImage: ../../assets/covers/astro-tailwind.webp
---

搭建个人博客时,我最看重三件事:**加载快**、**好维护**、**写起来舒服**。Astro + Tailwind 恰好都能满足。

## Astro:内容优先的框架

Astro 的核心理念是「服务端优先」。它在构建时把组件渲染成静态 HTML,默认**不带任何客户端 JavaScript**,因此首屏极快。

如果某个组件确实需要交互,可以用 `client:*` 指令按需「激活」它 —— 这就是所谓的**群岛架构(Islands Architecture)**:

```astro
<!-- 仅这个组件会加载 JS,其余页面保持静态 -->
<Counter client:visible />
```

## Tailwind CSS v4:更快、更简

Tailwind v4 用 Vite 插件接入,配置几乎为零。在这个项目里只需要两步:

1. 在 `astro.config.mjs` 注册 `@tailwindcss/vite` 插件
2. 在全局 CSS 里写一行 `@import "tailwindcss";`

文章正文则交给官方的 **Typography 插件**,套一个 `prose` 类就能得到排版精良的阅读体验。

## 小结

| 需求 | 方案 |
| --- | --- |
| 快 | Astro 零 JS 默认值 |
| 好维护 | Content Collections + 类型安全 |
| 写得爽 | Markdown / MDX + Tailwind |

下一篇会展开讲讲内容集合(Content Collections)的用法。
