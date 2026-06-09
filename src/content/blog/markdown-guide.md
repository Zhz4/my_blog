---
title: 'Markdown 写作速查'
description: '一篇用来检验博客排版效果的示例文章,顺便复习常用 Markdown 语法。'
pubDate: 2026-06-05
updatedDate: 2026-06-08
tags: ['Markdown', '写作']
heroImage: ../../assets/covers/markdown-guide.webp
---

这篇文章演示常见的 Markdown 元素,方便你检查主题样式是否正常。

## 标题

用 `#` 的数量表示层级,从 `#`(H1)到 `######`(H6)。

## 文本样式

可以使用 **加粗**、*斜体*、~~删除线~~,以及 `行内代码`。

> 这是一段引用(blockquote)。适合用来强调要点或引用他人的话。

## 列表

无序列表:

- 苹果
- 香蕉
  - 嵌套项也支持
- 橙子

有序列表:

1. 第一步
2. 第二步
3. 第三步

## 代码块

```ts
// TypeScript 示例
function greet(name: string): string {
  return `你好,${name}!`;
}

console.log(greet('世界'));
```

## 表格

| 框架 | 语言 | 特点 |
| --- | --- | --- |
| Astro | JS/TS | 内容优先、零 JS |
| Next.js | JS/TS | 全栈 React |
| Hugo | Go | 构建极快 |

## 链接与图片

这是一个[指向 Astro 文档的链接](https://docs.astro.build/)。

---

如果以上元素都显示正常,说明博客的排版样式已经配置妥当 ✅
