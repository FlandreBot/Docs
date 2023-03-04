import { DefaultTheme } from 'vitepress'
import { makeLink } from './utils'

const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [
    makeLink('概述', '/guide/'),
    {
      text: '快速上手',
      items: [
        makeLink('从模板创建项目', '/guide/start/setup.md')
      ],
    },
    {
      text: '基础交互',
      items: [
        makeLink('事件 (Event)', '/guide/basic/event.md'),
        makeLink('中间件 (Middleware)', '/guide/basic/middleware.md'),
      ],
    },
    {
      text: '指令系统',
      items: [
        makeLink('认识指令', '/guide/command/basic.md'),
      ],
    }
  ],
  '/ecosystem/': [
    makeLink('概述', '/ecosystem/'),
    {
      text: '适配器',
      items: [
        makeLink('OneBot 适配器', '/ecosystem/adapters/onebot.md'),
        makeLink('Konata 适配器', '/ecosystem/adapters/konata.md'),
      ],
    },
  ]
}

export default sidebar
