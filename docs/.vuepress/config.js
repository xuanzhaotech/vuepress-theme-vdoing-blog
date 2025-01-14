const nav = require('./config/nav.js');
const sidebar = require('./config/sidebar-auto.js');

module.exports = {
  title: "Evan's blog", // 标题
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。', // 描述,以 <meta> 标签渲染到页面html中
  // base: '/vuepress-theme-vdoing-blog/', // 默认'/' || github仓库名'/<仓库名>/',
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown'}],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc'}],
    ['meta', { name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色

    // 不蒜子访问量统计
    // ['script', { src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', async: 'async'}]

    // 以下是vuepress-plugin-demo-block插件所需依赖
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }], // 此文件会影响导航router-link-active样式的切换
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  markdown: {
    // lineNumbers: true // 代码行号
  },
  theme: require.resolve('../../theme-vdoing'), // 使用的主题
  themeConfig: { // 主题配置
    nav,
    sidebar, // 侧边栏    'auto' | 自定义
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/EB-logo.png', // 导航栏logo
    repo: 'xugaoyi/vuepress-theme-vdoing-blog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 编辑链接
    editLinkText: '编辑',

    // 以下配置为Vdoing主题新增配置
    author: { // 文章默认的作者信息，可在md文件中单独配置此信息
      name: 'Evan Xu', // 必需
      href: 'https://github.com/xugaoyi' // 可选的
    },
    blogger:{ // 博主信息，显示在首页侧边栏。以及社交信息显示在页面底部
      avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
      name: 'Evan Xu',
      slogan: '前端界的小学生',
      social:{ // 可选的，社交图标
        // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选的，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
        icons: [
          {
            iconClass: 'icon-youjian',
            title: '发邮件',
            link: 'mailto:894072666@qq.com'
          },
          {
            iconClass: 'icon-github',
            title: 'GitHub',
            link: 'https://github.com/xugaoyi'
          },
          {
            iconClass: 'icon-erji',
            title: '听音乐',
            link: 'https://music.163.com/#/playlist?id=755597173'
          }
        ]
      }
    },
    footer:{ // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: 'Evan Xu', // 博客版权信息，支持html标签
      // footerBgImg: '/img/footer.png' // 可选的，页脚背景图，只在首页显示
    }
  },
  plugins: [ // 插件
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],
    [require('./plugins/title-badge'), { // h1标题徽章
      // badges: [ // 替换默认的徽章图标
      //   'data:image/png;base64,**',
      //   'data:image/png;base64,***',
      // ]
    }], 
    [require('./plugins/enhanced-search'), { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
      thirdparty: [ // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        }
      ]
    }],
    
    'vuepress-plugin-baidu-autopush', // 百度自动推送
    // '@vuepress/back-to-top', // 返回顶部

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector:'.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: '503f098e7e5b3a5b5d8c5fc2938af002' // 嘿，朋友，请把我的这个统计hm码换掉或注释掉哦
      }
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk', 
        options: {
          clientID: 'a6e1355287947096b88b',
          clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
          repo: 'vuepress-theme-vdoing-blog', // GitHub 仓库
          owner: 'xugaoyi', // GitHub仓库所有者
          admin: ['xugaoyi'], // 对仓库有写权限的人
          distractionFreeMode: false,
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body:"页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
        }
      }
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
        }
      }
    ]
  ],
  // configureWebpack: {
  //   //webpack别名 如![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
