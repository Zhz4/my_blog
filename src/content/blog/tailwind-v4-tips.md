---
title: 'Tailwind CSS v4 的几个新变化'
description: '从 v3 到 v4:CSS 配置、@theme 令牌,以及重命名的工具类。'
pubDate: 2026-06-04
tags: ['Tailwind', 'CSS', '前端']
heroImage: ../../assets/covers/tailwind-v4-tips.webp
---

Tailwind CSS v4 是一次比较大的升级,这里记录几个在搭这个博客时实际用到的变化。

## 配置搬进了 CSS

v4 不再强制需要 `tailwind.config.js`。在这个项目里,Tailwind 通过 Vite 插件接入,入口只要一行:

```css
@import "tailwindcss";
```

## 用 @theme 定义设计令牌

主题变量直接写在 CSS 里,会同时生成对应的工具类和 CSS 变量:

```css
@theme {
  --font-sans: 'Inter Variable', system-ui, sans-serif;
}
```

之后 `font-sans` 工具类、`var(--font-sans)` 都能用。

## 插件用 @plugin 引入

排版插件不再写进 config,而是:

```css
@plugin "@tailwindcss/typography";
```

## 部分工具类被重命名

最容易踩的一个:渐变方向类改了名。

| v3 | v4 |
| --- | --- |
| `bg-gradient-to-r` | `bg-linear-to-r` |
| `bg-gradient-to-br` | `bg-linear-to-br` |

编辑器装了 Tailwind 插件的话,会直接提示你改成新写法。

## 小结

v4 更"CSS 原生":配置即 CSS,变量即令牌。迁移时重点检查渐变、阴影等被重命名的工具类即可。
