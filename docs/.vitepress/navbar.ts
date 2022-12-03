import { DefaultTheme } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
  {
    text: '起步',
    items: [
      { text: '创建你的第一个 Bot', link: '/start/create-first-bot.md' },
      { text: '基本概念', link: '/start/basic-concepts.md' },
    ],
  },
  {
    text: 'API',
    items: [
      {
        text: 'Flandre.Core',
        link: '/api/core/index.md'
      },
      {
        text: 'Flandre.Framework',
        link: '/api/fx/index.md'
      },
    ],
  },
]

export default navbar
