import { hopeTheme } from "vuepress-theme-hope"

import navbar from "./navbar.js"
import sidebar from "./sidebar.js"

const LOGO = "/assets/image/FRM_0505a.webp"
const LOGO_ = "/assets/image/FRM_0505a_.webp"
export default hopeTheme({
  hostname: "https://p.trss.me",
  author: {
    name: "🌌",
    url: "https://github.com/TimeRainStarSky",
  },

  favicon: LOGO,
  logo: LOGO,
  repo: "TRSSo/PhiliaDocs",
  docsDir: "src",

  navbar, // 导航栏
  sidebar, // 侧边栏

  // 页脚
  footer: '由 <a href="https://github.com/TRSSo" target="_blank">TRSSo</a> 开发 | LGPL-3.0 协议',
  displayFooter: true,

  // 多语言配置
  metaLocales: { editLink: "编辑此页" },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            }
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://Waline.TRSS.me",
      login: "force",
      reaction: true,
      pageview: true,
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    pwa: {
      favicon: LOGO,
      update: "force",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      maxSize: 4096,
      maxImageSize: 4096,
      manifest: {
        short_name: "Philia",
        icons: [{ src: LOGO_, sizes: "461x461" }],
        shortcuts: [
          {
            name: "使用指南",
            url: "/guide/",
            icons: [{ src: LOGO_, sizes: "461x461" }],
          },
          {
            name: "开发指南",
            url: "/dev/",
            icons: [{ src: LOGO_, sizes: "461x461" }],
          },
        ],
      },
    },
  },
})
