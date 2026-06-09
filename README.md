# 我的博客

一个用 [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) 搭建的个人博客，现代简约风，支持明暗主题。

## ✨ 特性

- 📝 **内容集合（Content Collections）** —— 用类型安全的方式管理 Markdown / MDX 文章
- 🎨 **Tailwind CSS v4** + 官方 Typography 插件，文章排版开箱即用
- 🌙 **明暗主题切换** —— 跟随系统设置，记忆用户选择（localStorage），无闪烁
- 🏷️ **标签系统** —— `/tags` 标签总览 + 每个标签的独立文章列表页
- 📄 **文章列表分页** —— 自动按每页 N 篇分页（`/blog`、`/blog/page/2` …）
- 🧭 **文章目录 TOC** —— 大屏侧边栏自动生成目录，滚动高亮当前章节
- ⏱️ **阅读时间** —— 自动估算每篇文章的阅读时长
- 💬 **Giscus 评论** —— 基于 GitHub Discussions，主题随站点联动
- 🖍️ **代码高亮** —— Shiki 双主题，明暗模式下自动切换配色
- 📡 **RSS** + 🗺️ **Sitemap** —— 方便订阅与 SEO
- ⚡ **零 JS 默认值** —— 默认输出纯静态 HTML，加载极快

## 🚀 常用命令

> 本项目使用 [bun](https://bun.sh) 作为包管理器。

| 命令 | 作用 |
| --- | --- |
| `bun install` | 安装依赖 |
| `bun run dev` | 启动开发服务器（默认 http://localhost:4321） |
| `bun run build` | 构建生产版本到 `./dist/` |
| `bun run preview` | 本地预览构建结果 |

## ✍️ 如何写文章

在 `src/content/blog/` 下新建一个 `.md` 或 `.mdx` 文件，顶部写好 frontmatter：

```markdown
---
title: '文章标题'
description: '一句话简介'
pubDate: 2026-06-09
updatedDate: 2026-06-10   # 可选
tags: ['标签一', '标签二']
draft: false             # 设为 true 则不发布
---

正文从这里开始……
```

保存后，首页、博客列表和对应的标签页会自动收录这篇文章。

## 💬 启用评论（Giscus）

1. 把博客代码推到一个**公开**的 GitHub 仓库
2. 在该仓库开启 Discussions（Settings → General → Features）
3. 安装 [giscus app](https://github.com/apps/giscus)
4. 打开 [giscus.app](https://giscus.app)，填入仓库，复制生成的 `repoId` / `categoryId`
5. 把这些值填到 `src/consts.ts` 的 `GISCUS` 配置里

填好前，文章页会显示一个“未配置”的占位提示，不影响其他功能。

## 📁 项目结构

```
src/
├── components/        # 组件
│   ├── BaseHead · Header · Footer
│   ├── PostCard · PostList · FormattedDate
│   ├── Pagination · TableOfContents · Comments
├── content/blog/      # 博客文章（Markdown / MDX）
├── content.config.ts  # 内容集合的 schema 定义
├── layouts/           # BaseLayout（站点外壳）· BlogPost（文章页）
├── pages/             # 路由页面
│   ├── index.astro            # 首页
│   ├── about.astro            # 关于
│   ├── rss.xml.ts             # RSS 输出
│   ├── blog/
│   │   ├── index.astro        # 文章列表（第 1 页）
│   │   ├── [slug].astro       # 文章详情
│   │   └── page/[page].astro  # 文章列表（第 2 页起）
│   └── tags/
│       ├── index.astro        # 标签总览
│       └── [tag].astro        # 单个标签的文章
├── consts.ts          # 站点标题、导航、分页、Giscus 等配置
├── env.d.ts           # 类型声明
└── styles/global.css  # 全局样式 + Tailwind 入口 + 设计令牌
```

## ⚙️ 部署前请修改

- `astro.config.mjs` 里的 `site` 改成你自己的域名（RSS / sitemap 会用到）
- `src/consts.ts` 里的站点标题、描述、每页文章数、Giscus 配置
- `src/pages/about.astro` 里的关于页内容与社交链接

更多用法见 [Astro 官方文档](https://docs.astro.build)。
