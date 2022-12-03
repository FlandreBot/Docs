import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/start/': [
    {
      text: '起步',
      items: [
        { text: '创建你的第一个 Bot', link: '/start/create-first-bot.md' },
        { text: '基本概念', link: '/start/basic-concepts.md' },
      ],
    },
  ],
  '/api/': [
    {
      text: 'Flandre.Core API',
      items: [
        { text: '机器人 (Bot)', link: '/api/core/bot.md' },
      ],
    },
    {
      text: 'Flandre.Framework API',
      items: [
        { text: '应用建造 (FlandreAppBuilder)', link: '/api/fx/appbuilder.md' },
        { text: '应用 (FlandreApp)', link: '/api/fx/app.md' },
      ],
    },
  ],
}

export default sidebar
