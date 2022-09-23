# Flandre

[![License](https://img.shields.io/github/license/FlandreDevs/Flandre?label=License&style=flat-square&color=42a5f5)](https://github.com/FlandreDevs/Flandre/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/FlandreDevs/Flandre?label=Stars&style=flat-square&color=1976d2)](https://github.com/FlandreDevs/Flandre/stargazers)
[![Contributors](https://img.shields.io/github/contributors/FlandreDevs/Flandre?label=Contributors&style=flat-square&color=ab47bc)](https://github.com/FlandreDevs/Flandre/graphs/contributors)
[![NuGet](https://img.shields.io/nuget/vpre/Flandre.Core?style=flat-square&label=NuGet&color=f06292)](https://www.nuget.org/packages/Flandre.Core/)
[![NuGet Downloads](https://img.shields.io/nuget/dt/Flandre.Core?style=flat-square&label=Downloads&color=ffb300)](https://www.nuget.org/packages/Flandre.Core/)
[![.NET Version](https://img.shields.io/badge/.NET-6-ffe57f?style=flat-square)](https://www.nuget.org/packages/Flandre.Core/)

欢迎来到 Flandre 项目的官方文档！

本项目的名称来源于东方 Project 中的角色芙兰朵露 · 斯卡雷特 (Flandre Scarlet)。

如果你是第一次接触 Flandre 框架，建议你先查看 [创建你的第一个 Bot](start/create-first-bot.md)。如果在开发过程中遇到问题，你可以查阅 [API 文档](api/)，或是去 [GitHub 仓库](https://github.com/FlandreDevs/Flandre/) 发表新的 Issue。

文档正在不断完善中~

**项目仍在早期开发阶段，功能尚未完善，且处于快速迭代过程中，可能带来 API 的非兼容性变更。**  
**如果您对项目的开发感兴趣，诚挚欢迎您的改进建议或 PR 贡献。**

## 特性

### 跨平台

Flandre 自设计之初就是为了跨平台，对聊天平台的结构进行抽象化，采用适配器模式兼容各大聊天平台，同时提供了良好的开发体验。

目前已经实现的适配器：

- [Flandre.Adapters.Konata](https://github.com/FlandreDevs/Flandre/blob/main/Flandre.Adapters.Konata/README.md) - QQ 协议适配，基于 [Konata.Core](https://github.com/KonataDev/Konata.Core)

### 指令系统

得益于内置的指令解析系统，开发者可以方便地掌控指令的参数信息，包括但不限于参数数量检查，类型检查，参数默认值等等。而所有的定义可以在一个字符串内完成，例如：

```csharp
[Command("example <foo:string> [bar:double] [baz:int=114514]")]
```

### 事件驱动

Flandre 内部采用各类事件控制，开发者可以轻松地通过订阅事件/重写相关方法的方式控制应用的运行流程。  
_注：事件系统仍在完善当中_

## 分支说明

项目目前有两个主要分支：

- `main` 分支 - 包含上一个发布版本的源代码，`dev` 分支会在版本发布时合并过来
- `dev` 分支 - 开发分支，包含最新更改，但可能不稳定。

向仓库贡献代码时，请确保目前正处于 `dev` 分支上。

## 致谢

项目编写过程中参考了许多开源项目，没有它们就没有 Flandre 的诞生：

- [koishijs/koishi](https://github.com/koishijs/koishi)
- [KonataDev/Konata.Core](https://github.com/KonataDev/Konata.Core)

（按字母排序）

## 联系我们

您可以加入我们的 QQ 群进行项目相关的交流：

[![QQ](https://img.shields.io/badge/Flandre.Community-164189664-blue?style=flat-square&logo=tencent-qq&logoColor=white)](https://jq.qq.com/?_wv=1027&k=tTNVlDR6)

**本群只交流程序开发，拒绝任何形式的伸手党或商业行为。提问前请确保已经阅读过[提问的智慧](https://github.com/tvvocold/How-To-Ask-Questions-The-Smart-Way)。**

## License

本项目以 [MIT 许可证](https://github.com/FlandreDevs/Flandre/blob/main/LICENSE) 开源 (′▽\`)╭(′▽\`)╯
