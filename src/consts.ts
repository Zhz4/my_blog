// 全站通用的常量配置，在多个页面 / 组件里复用
export const SITE_TITLE = 'Smooth の 空间';
export const SITE_DESCRIPTION = '前端开发者 Smooth 的博客，记录 React、Vue 与 AI Agent 开发中的笔记和踩过的坑。';

export const NAV_LINKS = [
	{ href: '/', label: '首页' },
	{ href: '/blog', label: '博客' },
	{ href: '/tags', label: '标签' },
	{ href: '/about', label: '关于' },
] as const;

// 博客列表每页显示的文章数
export const POSTS_PER_PAGE = 4;

// Giscus 评论配置。
// 使用步骤：
//   1. 把博客代码推到一个【公开】的 GitHub 仓库
//   2. 在该仓库开启 Discussions（Settings → General → Features）
//   3. 安装 giscus app：https://github.com/apps/giscus
//   4. 打开 https://giscus.app，填入仓库，复制生成的 repoId / categoryId 填到下面
// 在 repoId 填好之前，文章页会显示一个“未配置”的占位提示，不影响其他功能。
export const GISCUS = {
	repo: 'Zhz4/my_blog' as `${string}/${string}` | '',
	repoId: 'R_kgDOS1GcTw',
	category: 'Q&A',
	categoryId: 'DIC_kwDOS1GcT84C--CC',
	mapping: 'pathname',
	reactionsEnabled: '1',
	lang: 'zh-CN',
} as const;
