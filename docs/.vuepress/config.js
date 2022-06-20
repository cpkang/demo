const moment = require('moment');

moment.locale("zh-cn");

module.exports = {
    base:"/demo/",
    title:"好心情",
    description:"博客的描述",
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {
              return moment(timestamp).format("LLLL")
            }
          }
        ]
      ],
    themeConfig: { 
      lastUpdated: '更新时间',
      logo: '/assets/img/logo.png',
    //   navbar: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: '篮球', link: '/about' },
        {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] },
              { text: 'Group2', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] }
            ]
          },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: [
        '',
        'about',
        'about1'
      ]
    }
  }