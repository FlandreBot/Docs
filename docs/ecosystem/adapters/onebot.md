# OneBot 适配器

OneBot 适配器适配 OneBot v11 协议，主要对 QQ 平台提供支持。

[[toc]]

## 注意事项
- 当前只支持正向 WebSocket 通信方式。
- 暂时仅支持了常用的 CQ 码。

## 启动 OneBot 服务
本节以 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp/) 为例，搭建一个正常运行的 OneBot 服务。

前往 go-cqhttp 的 [Release 页面](https://github.com/Mrs4s/go-cqhttp/releases)，根据自己设备的架构选择合适的安装包或压缩包下载。

::: tip 没有找到对应的文件？
由于 GitHub 限制了单个 Release 默认能显示的文件数量，你可能需要点击 Show all assets 来查看所有文件。
:::

例如我的设备是 64 位 Windows 系统，选择 `go-cqhttp_windows_amd64.zip` 下载。

下载后解压到一个空文件夹，运行 `go-cqhttp.exe`（或其他可执行文件）。首次打开会创建一个配置文件 `config.yml`，使用文本编辑器打开它，**至少**更改或添加以下内容：

```yaml{2-3}
account: # 账号相关
  uin: 12345678 # QQ账号
  password: '你的密码' # 密码为空时使用扫码登录

# 连接服务列表
servers:
  # 在这里添加
  - ws: // [!code ++]
      # 正向 WebSocket 服务器监听地址 // [!code ++]
      address: 127.0.0.1:8080 // [!code ++]
      middlewares: // [!code ++]
        <<: *default # 引用默认中间件 // [!code ++]
```

重新打开 `go-cqhttp.exe`，可能会提示登录验证，根据终端输出照做即可。输出以下信息则说明登陆成功：

```
[2023-03-04 22:21:35] [INFO]: 登录成功 欢迎使用: [机器人名称]
[2023-03-04 22:21:35] [INFO]: 开始加载好友列表...
[2023-03-04 22:21:35] [INFO]: 共加载 1 个好友.
[2023-03-04 22:21:35] [INFO]: 开始加载群列表...
[2023-03-04 22:21:35] [INFO]: 共加载 1 个群.
[2023-03-04 22:21:35] [INFO]: 资源初始化完成, 开始处理信息.
[2023-03-04 22:21:35] [INFO]: アトリは、高性能ですから!
[2023-03-04 22:21:35] [INFO]: 正在检查更新.
[2023-03-04 22:21:35] [INFO]: CQ WebSocket 服务器已启动: 127.0.0.1:8080
```

## 添加适配器

搭建好 OneBot 服务端后，我们需要在 Flandre 应用中添加 OneBot 适配器，来和服务端进行交互：

```csharp
var config = new OneBotAdapterConfig();
config.Bots.Add(new OneBotBotConfig
{
    Protocol = OneBotProtocol.WebSocket,
    Endpoint = "ws://127.0.0.1:8080" // 配置的 WebSocket 监听地址
});

builder.AddAdapter(new OneBotAdapter(config));
```

如果你更倾向于使用独立的配置文件，你也可以这样做：

```json
// appsettings.json
{
  "Adapters": {
    "OneBot": {
      "Bots": [
        {
          "Protocol": "WebSocket",
          "Endpoint": "ws://127.0.0.1:8080"
        }
      ]
    }
  }
}
```

```csharp
builder.AddAdapter(new OneBotAdapter(
    builder.Configuration
        .GetSection("Adapters:OneBot")
        .Get<OneBotAdapterConfig>()
    ?? new OneBotAdapterConfig()));
```