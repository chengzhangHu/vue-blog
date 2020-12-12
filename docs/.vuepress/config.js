module.exports = {
  base: '/',
  title: '前端漫谈',
  description: '前端可视化、技术实践、性能优化、技术原理、源码分析',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    displayAllHeaders: true,
    sidebar: 'auto',
    lastUpdated: 'Last Updated', // string | boolean
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/',target:'_self', rel:''  },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'GitHub', link: 'https://google.com' },
    ],
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'one', /* /bar/three.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/images'
      }
    }
  }
}