---
title: '欢迎来到我的博客'
description: '第一篇文章 —— 介绍这个博客是怎么搭起来的，以及之后会写些什么。'
pubDate: 2026-06-09
tags: ['公告', 'Astro']
heroImage: ../../assets/covers/welcome.webp
---

这是博客的第一篇文章 🎉

这个站点使用 **Astro** + **Tailwind CSS** 搭建,主打**内容优先**和**极快的加载速度**。Astro 默认不向浏览器发送任何 JavaScript,所以页面天然轻快。

## 这里会写些什么

- 技术学习笔记与踩坑记录
- 工具、框架的使用心得
- 一些阅读和生活的随笔

## 怎么新增一篇文章

在 `src/content/blog/` 目录下新建一个 `.md` 或 `.mdx` 文件,并在顶部写好 frontmatter:

```markdown
---
title: '文章标题'
description: '一句话简介'
pubDate: 2026-06-09
tags: ['标签一', '标签二']
---

正文从这里开始……
```

保存后,首页和博客列表会自动出现这篇文章。就这么简单!
