# 从模板创建项目

Flandre 的开发至少需要 .NET 6 SDK，确保你已经正常安装完毕。如果不确定自己安装的是什么版本，可以使用 `dotnet --info` 命令查看。

我们提供了一个模板项目，可以帮助你快速上手 Flandre 的开发。[仓库在这里](https://github.com/FlandreDevs/Templates)

首先，打开终端（如 PowerShell），键入以下命令：

```shell
dotnet new install Flandre.Templates
```

创建一个名为 `MyFirstFlandreApp` 的新项目：

```shell
dotnet new flandre -o MyFirstFlandreApp
```

接下来，你需要结合自身的需求，挑选一个合适的平台适配器 (Adapter) 并加入到应用中。你可以在[适配器列表](./../../ecosystem/index.md)中寻找一个合适的。

在新创建项目中的 `Program.cs`，加入新的适配器：

```csharp
// 安装一个适配器，并添加在这里。
var config = new YourAdapterConfig();
// ...
builder.Adapters.Add(new YourAdapter(config));
```

接下来，你将了解到和 Flandre 进行基础交互的知识。
