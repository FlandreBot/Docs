import { DefaultTheme } from 'vitepress'
import { makeLink } from './utils'

const nav: DefaultTheme.NavItem[] = [
  makeLink("指南", "/guide/"),
  makeLink("生态", "/ecosystem/"),
]

export default nav
