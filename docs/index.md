# Flandre

<a href="https://github.com/FlandreDevs/Flandre/blob/dev/LICENSE"><img class="badge" src="https://img.shields.io/github/license/FlandreDevs/Flandre?label=License&color=42a5f5" /></a>
<a href="https://github.com/FlandreDevs/Flandre/stargazers"><img class="badge" src="https://img.shields.io/github/stars/FlandreDevs/Flandre?label=Stars&color=1976d2" /></a>
<a href="https://github.com/FlandreDevs/Flandre/graphs/contributors"><img class="badge" src="https://img.shields.io/github/contributors/FlandreDevs/Flandre?label=Contributors&color=9866ca" /></a>
<a href="https://www.nuget.org/packages/Flandre.Framework/"><img class="badge" src="https://img.shields.io/nuget/vpre/Flandre.Framework?style=flat&label=Framework&color=f06292" /></a>
<a href="https://www.nuget.org/packages/Flandre.Core/"><img class="badge" src="https://img.shields.io/nuget/vpre/Flandre.Core?style=flat&label=Core&color=e65943" /></a>
<img class="badge" src="https://img.shields.io/badge/.NET-6-ffe57f" />
<a href="https://app.codecov.io/gh/FlandreDevs/Flandre"><img class="badge" src="https://img.shields.io/codecov/c/gh/FlandreDevs/Flandre/dev?style=flat&color=a5d6a7&label=Coverage" /></a>

欢迎来到 Flandre 项目的官方文档！

本项目的名称来源于东方 Project 中的角色芙兰朵露 · 斯卡雷特 (Flandre Scarlet)。

如果你是第一次接触 Flandre 框架，建议你先查看 [创建你的第一个 Bot](start/create-first-bot.md)。如果在开发过程中遇到问题，你可以查阅 [API 文档](api/)，或是去 [GitHub 仓库](https://github.com/FlandreDevs/Flandre/) 发表新的 Issue。

## 🚧 注意

项目仍在早期开发阶段，功能尚未完善，且处于快速迭代过程中。
如果您对项目的开发感兴趣，诚挚欢迎您的改进建议或 PR 贡献。

**1.0 版本发布前随时可能发生 API 的非兼容性变更，不建议用于生产环境。**

## ⭐ 特性

### 🌐 原生跨平台

Flandre 为跨平台而生，对聊天平台的结构进行抽象化，采用适配器模式进行兼容，同时提供了良好的开发体验。
目前已经实现的适配器：

| 平台 | 介绍 |
|:--:|:--:|
| [OneBot](https://github.com/FlandreDevs/Flandre/blob/dev/src/Flandre.Adapters.OneBot/README.md) | [OneBot](https://github.com/botuniverse/onebot) v11 协议封装，主要对 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp) 提 供支持。支持 QQ 协议，同时基于 go-cqhttp 对 QQ 频道也进行了一定的支持。 |
| [Konata](https://github.com/FlandreDevs/Flandre/blob/dev/src/Flandre.Adapters.Konata/README.md) | QQ 协议适 配，基于 [Konata.Core](https://github.com/KonataDev/Konata.Core) |
| Telegram | 计划中... |
| Discord | 计划中... |

### 🧩 灵活的开发方式
Flandre 提供两种开发方式，分别是完整的开发框架 `Framework`，以及易于嵌入已有程序的 `Core`。
#### Flandre.Framework
<a href="https://www.nuget.org/packages/Flandre.Framework/"><img class="badge" src="https://img.shields.io/nuget/vpre/Flandre.Framework?style=flat&label=NuGet&color=9866ca" /></a>
<a href="https://www.nuget.org/packages/Flandre.Framework"><img class="badge" src="https://img.shields.io/nuget/dt/Flandre.Framework?style=flat&label=Downloads&color=42a5f5" /></a>

`Flandre.Framework` 是一个使用方便、功能全面的 Bot 开发框架，在核心包 `Core` 的基础上集成了插件、指令、中间件 等系统，并提供依赖注入、日志管理等等实用功能。对于一个全新的 Bot 项目，我们推荐您直接使用 `Framework` 进行开发。

#### Flandre.Core
<a href="https://www.nuget.org/packages/Flandre.Core/"><img class="badge" src="https://img.shields.io/nuget/vpre/Flandre.Core?style=flat&label=NuGet&color=9866ca" /></a>
<a href="https://www.nuget.org/packages/Flandre.Core/"><img class="badge" src="https://img.shields.io/nuget/dt/Flandre.Core?style=flat&label=Downloads&color=42a5f5" /></a>

`Flandre.Core` 是整个框架的核心组件，包含了适配器、机器人等重要内容，提供直接操作 Bot 进行平台交互的功能。相比 `Framework`，`Core` 作为一个轻量化的模块，能更容易地嵌入进已有项目中，成为功能的一部分。

> 不需要代入 .NET Framework / Core 命名方式的意义。在 Flandre 中，两者只意味着开发方式的不同，都处于积极维护中。

下文将主要介绍 `Flandre.Framework` 的各类特性。如果你需要关于 `Flandre.Core` 的详细说明，请~~参照这里的文档~~ 。(还没写x)

### 📦 开箱即用的指令系统

Flandre.Framework 实现了一套开箱即用的指令解析系统，而无需开发者自己造轮子。
开发者可以方便地掌控指令的参数信息，包括但不限于参数数量检查，类型检查，参数默认值等等。而所有的定义可以在一个字符串内完成，例如：

```csharp
[Command("example <foo:string> [bar:double] [baz:int=114514]")]
```

### 🏗 事件驱动

Flandre 内部采用各类事件控制，开发者可以轻松地通过订阅事件/重写相关方法的方式控制应用的运行流程。

## 💻 分支

项目目前有两个主要分支：

- `main` 分支 - 包含上一个发布版本的源代码，`dev` 分支会在版本发布时合并过来
- `dev` 分支 - 开发分支，包含最新更改，但可能不稳定。

向仓库贡献代码时，请确保目前正处于 `dev` 分支上。

## ❤️ 致谢

项目编写过程中参考了许多开源项目，没有它们就没有 Flandre 的诞生：

- [koishijs/koishi](https://github.com/koishijs/koishi)
- [KonataDev/Konata.Core](https://github.com/KonataDev/Konata.Core)

（按字母排序）

## 💬 交流

GitHub 是我们的主要活动场地。您也可以加入我们的 QQ 群进行项目相关的交流：

[![QQ](https://img.shields.io/badge/Flandre.Community-164189664-blue?style=flat&logo=tencent-qq&logoColor=white)](https://jq.qq.com/?_wv=1027&k=tTNVlDR6)

本群只交流程序开发，拒绝任何形式的伸手党或商业行为。

## 📄 开源

本项目以 [MIT 许可证](https://github.com/FlandreDevs/Flandre/blob/main/LICENSE) 开源 (′▽\`)╭(′▽\`)╯

<style>
.badge {
    display: inline;
    margin-right: 0.3em;
}
</style>
