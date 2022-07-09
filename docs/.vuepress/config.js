module.exports = {
  title:"不凡学院",
  description: 'Just playing around',
  themeConfig: {
    // 导航栏图标
    logo: '/assets/img/logo1.jpg',
    // 禁用所有的导航栏
    // navbar: false,
    // 导航栏链接
    nav: [
      {
        text: '课程体系',
        ariaLabel: '课程目录',
        // 下拉列表
        items: [
          { text: 'HTML', link: '/language/chinese/' },
          { text: 'CSS', link: '/language/japanese/' },
          { text: 'Javascript', link: '/language/japanese/' },
          { text: 'Javascript进阶', link: '/language/japanese/' },
          { text: 'ES6', link: '/language/japanese/' },
          { text: 'VUE', link: '/language/japanese/' },
          { text: '微信小程序', link: '/language/japanese/' },
          { text: 'UNIAPP', link: '/language/japanese/' },
          { 
            text: '中后台管理系统',
            // 嵌套的items实现分组
            items:[
              {text:'文章管理',link:'/language/japanese/'},
              {text:'文章管理',link:'/language/japanese/'},
              {text:'文章管理',link:'/language/japanese/'},
              {text:'文章管理',link:'/language/japanese/'},
              {text:'文章管理',link:'/language/japanese/'},
              {text:'文章管理',link:'/language/japanese/'}
            ]
          }
        ]
      },
      { text: '首页', link: '/' },
      { text: '引导', link: '/guide/' },
      { text: '不凡官网', link: 'http://www.bufanui.com', target:'_blank' }
      
    ],
    // 自动生成侧栏
    // sidebar: 'auto',
    // 侧边栏
    // sidebar: [
    //   // '/', // 以  /  结尾的路径将会被视为 */README.md
    //   // '/page-a',
    //   // ['/guide/', '指南'],
    //   // ['/guide/html/', 'html'],
    //   // ['/css/', 'css文档'],
    //   // ['/js', 'js文档']
    //   // {
    //   //   title: 'Group 1',   // 必要的
    //   //   path: '/html/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   //   collapsable: false, // 可选的, 默认值是 true,
    //   //   sidebarDepth: 1,    // 可选的, 默认值是 1
    //   //   children: [
    //   //     '/html/demo1/' // 需要是绝对路径
    //   //   ]
    //   // },
    //   // {
    //   //   title: 'Group 2',   // 必要的
    //   //   path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   //   collapsable: false, // 可选的, 默认值是 true,
    //   //   sidebarDepth: 1,    // 可选的, 默认值是 1
    //   //   children: [
    //   //     '/'
    //   //   ]
    //   // },
    // ],

    sidebar:{
      '/foo/':[
        '',
        'one',
        'two'
      ],
      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    },
    // 显示所有页面的标题链接
    // displayAllHeaders: true // 默认值：false
    // 最后更新时间
    lastUpdated: '最后更新', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}