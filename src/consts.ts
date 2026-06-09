// 全站通用的常量配置，在多个页面 / 组件里复用
export const SITE_TITLE = '我的博客';
export const SITE_DESCRIPTION = '用 Astro + Tailwind CSS 搭建的个人博客 —— 记录技术、阅读与生活。';

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
	repo: '' as `${string}/${string}` | '', // 例如 'zhanghuizhong/my_blog'
	repoId: '',
	category: 'Announcements',
	categoryId: '',
	mapping: 'pathname',
	reactionsEnabled: '1',
	lang: 'zh-CN',
} as const;
