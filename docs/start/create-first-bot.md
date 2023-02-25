# 创建你的第一个 Bot

本章将会以一个简单的 QQ 机器人为例，介绍最基本的 Bot 搭建过程，来带领你初步认识 Flandre。

Flandre 最低需要 .NET 6 环境，使用前请确保自己的 .NET 版本没有过低。

## 创建应用

我们提供了一个模板项目，可以帮助你快速上手。（[仓库在这里](https://github.com/FlandreDevs/Templates)）

首先安装模板包：

```shell
$ dotnet new install Flandre.Templates
```

创建一个名为 `MyFirstFlandreApp` 的新项目：

```shell
$ dotnet new flandre -o MyFirstFlandreApp
```

::: tip
为了使我们的 Bot 能够成功在平台上正常工作，你需要添加一个适配器。这里使用 `Flandre.Adapters.Konata`（QQ 协议的 .NET 实现，基于 [Konata.Core](https://github.com/KonataDev/Konata.Core)）作为演示。
:::

使用包管理器或 .NET CLI 添加 `Flandre.Adapters.Konata` NuGet 包：
```shell
$ dotnet add package Flandre.Adapters.Konata
```

打开 `MyFirstFlandreApp/Program.cs`，加入我们的适配器：

```csharp
// 安装一个适配器，并添加在这里。

// 添加 Bot 配置
var config = new KonataAdapterConfig();
config.Bots.Add(new KonataBotConfig
{
    KeyStore = new BotKeyStore("<QQ 号>", "<密码>")
});

builder.AddAdapter(new KonataAdapter(config));
```

## 分析我们的程序

首先引入命名空间，不必多说。其次，我们创建了一个新的 `FlandreAppBuilder` 实例，是我们应用的基本构造器。在一个 `FlandreAppBuilder` 实例里，我们可以添加插件、适配器等一系列基础服务。

```csharp
var builder = new FlandreAppBuilder();
```

我们接着创建了 `Konata` 适配器的配置对象，并将 Bot 信息添加到其中。

```csharp
var config = new KonataAdapterConfig();
config.Bots.Add(new KonataBotConfig
{
    KeyStore = new BotKeyStore("<QQ 号>", "<密码>")
});
```

转到 `ExamplePlugin.cs` 文件。在这里，创建了一个新的插件类，并继承了 `Plugin` 基类。在其中，我们重写了基类的 `OnMessageReceived` 方法，接受消息并调用 Bot 的发送消息接口，如果 Bot 收到了一条“Hello!”消息，就发送一个“World!”回去。每当 Bot 收到消息时，该方法就会被调用。

```csharp
public sealed class ExamplePlugin : Plugin
{
    public override async Task OnMessageReceived(MessageContext ctx)
    {
        if (ctx.Message.GetText() == "Hello!")
        {
            await ctx.Bot.SendMessage(ctx.Message, "World!");
        }
    }
}
```

回到 `Program.cs`，在 `builder` 实例上注册我们自定义的插件，并构造为实际的 `FlandreApp` 实例：

```csharp
builder.AddPlugin<ExamplePlugin>();

var app = builder.Build();
```

接着添加维持 Flandre 正常运转所需的中间件，并启动应用：

```csharp
// 添加内置中间件。
// 这些中间件保证 Flandre 的正常运转。你也可以加入自己的中间件，并灵活调整其顺序。
app.UseCommandSession();
app.UseCommandParser();
app.UseCommandInvoker();

// 启动应用
app.Run();
```

将 Bot 的 QQ 号、密码填入相应空位，运行程序，可能会提示登录验证。按照要求登陆成功后，向 Bot 发送一条消息：

- <Badge text="发送" /> Hello!
- <Badge text="接收" /> World!

::: tip
至此你已经完成了第一个小 Bot 的开发！接下来的一节内容中，你将了解到 Flandre 的结构组成，以及各种实体模型的简单介绍。
:::
