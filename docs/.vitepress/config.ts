import { DefaultTheme, defineConfigWithTheme } from 'vitepress'

import nav from './nav'
import sidebar from './sidebar'

export default defineConfigWithTheme<DefaultTheme.Config>({
  title: 'Flandre.Docs',
  description: 'Flandre 项目官方文档',
  lang: 'zh-CN',
  appearance: true,
  base: '/',
  lastUpdated: true,
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark"
    }
  },

  themeConfig: {
    lastUpdatedText: '最近更新',
    nav,
    sidebar,
    footer: {
      message: '所有文档均采用 CC-BY-NC-SA 4.0 许可协议',
      copyright: 'Copyright © 2022-2023 FlandreDevs',
    },
  },
})
