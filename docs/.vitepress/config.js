module.exports = {
	title: 'nraeax/dev',
	description: 'Lorem..',
	themeConfig: {
    nav: [
      { text: 'Articles', link: '/articles/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Contact', link: '/contact/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'Article 1', link: '/articles/article-1' },
          { text: 'Article 2', link: '/articles/article-2' },
        ],
        collapsed: true,
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Article 3', link: '/articles/article-3' },
          { text: 'Article 4', link: '/articles/article-4' },
        ],
        collapsed: true,
      }
    ]
  }
}
