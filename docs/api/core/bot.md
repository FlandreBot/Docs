# 机器人 Bot API

编写插件时，可以通过上下文对象获取到 Bot 实例 (`ctx.Bot`)。

如果需要使用平台专属的特殊 API，可以通过模式匹配的方法来进行筛选，并转为对应平台的 Bot 实例。例如：

```csharp
if (ctx.Bot is KonataBot kntBot)
    kntBot.InnerBot.SendFriendPoke(/* ... */);
```

## 生命周期

### 启动 Bot 实例

```csharp
public Task Start();
```

### 停止 Bot 实例

```csharp
public Task Stop();
```

## 发送消息

### 发送消息

```csharp
public Task SendMessage(MessageSourceType sourceType, string guildId, string channelId, string userId, MessageContent content);
```

指定消息类型和目标参数。如果 `sourceType` 为 `MessageSourceType.Private`，则 `guildId` 和 `channelId` 不会被使用。

- **sourceType** : `MessageSourceType` - 消息类型（Channel / Private）
- **guildId** : `string` - 群组 ID
- **channelId** : `string` - 频道 ID
- **userId** : `string` - 用户 ID
- **content** : `MessageContent` - 消息内容

```csharp
public Task SendMessage(Message message);
```

发送传入的消息对象。

- **message** : `Message` - 要发送的消息

### 发送频道消息

```csharp
public Task SendChannelMessage(string guildId, string channelId, MessageContent content);
```

- **guildId** : `string` - 群组 ID
- **channelId** : `string` - 频道 ID
- **content** : `MessageContent` - 消息内容

### 发送私聊消息

```csharp
public Task SendPrivateMessage(string userId, MessageContent content);
```

- **userId** : `string` - 用户 ID
- **content** : `MessageContent` - 消息内容

## 用户相关

### 获取自身信息

```csharp
public Task<User> GetSelf();
```

- 返回值 : `Task<User>` - 自身信息

### 获取用户信息

```csharp
public Task<User?> GetUser(string userId);
```

- **userId** : `string` - 用户 ID
- 返回值 : `Task<User?>` - 获取到的用户信息，若用户不存在或无法获取则返回 null

### 获取好友列表

```csharp
public Task<IEnumerable<User>> GetFriendList();
```

- 返回值 : `Task<IEnumerable<User>>` - Bot 的好友列表

## 群组相关

### 获取群组消息

```csharp
public Task<Guild?> GetGuild(string guildId);
```

- **guildId** : `string` - 群组 ID
- 返回值 : `Task<Guild?>` - 群组信息，若群组不存在或无法获取则返回 null

### 获取群组列表

```csharp
public Task<IEnumerable<Guild>> GetGuildList();
```

- 返回值 : `Task<IEnumerable<Guild>>` - Bot 加入的群组列表

### 获取群组成员

```csharp
public Task<GuildMember?> GetGuildMember(string guildId, string userId);
```

- **guildId** : `string` - 群组 ID
- **userId** : `string` - 用户 ID
- 返回值 : `Task<GuildMember?>` - 群组成员信息，若成员不存在或无法获取则返回 null

### 获取群组成员列表

```csharp
public Task<IEnumerable<GuildMember>> GetGuildMemberList(string guildId);
```

- **guildId** : `string` - 群组 ID
- 返回值 : `Task<IEnumerable<GuildMember>>` - 该群组群成员列表

## 频道相关

### 获取频道信息

```csharp
public Task<Channel?> GetChannel(string channelId);
```

- **channelId** : `string` - 频道 ID
- 返回值 : `Task<Channel?>` - 频道信息，若频道不存在或无法获取则返回 null

### 获取频道列表

```csharp
public Task<IEnumerable<Channel>> GetChannelList();
```

- 返回值 : `Task<IEnumerable<Channel>>` - Bot

## 事件

### Bot 事件委托

```csharp
public delegate void BotEventHandler<in TEvent>(IBot bot, TEvent e);
```

- **bot** : `IBot` - 当前 Bot 实例
- **e** : `TEvent` - 当前事件 EventArgs，继承自 `BaseEvent`

### 消息接收

```csharp
public event BotEventHandler<BotMessageReceivedEvent> OnMessageReceived;
```

Bot 收到消息。

- `BotMessageReceivedEvent` - 消息接收事件
- **e.Message** : `Message` - 接收到的消息

### 邀请加入群组

```csharp
public event BotEventHandler<BotGuildInvitedEvent> OnGuildInvited;
```

Bot 被他人邀请进入某群组。

- `BotGuildInvitedEvent` - 群组邀请事件
- **e.GuildName** : `string` - 群组名称
- **e.GuildId** : `string` - 群组 ID
- **e.InviterName** : `string` - 邀请人名称
- **e.InviterId** : `string` - 邀请人用户 ID
- **e.InviterIsAdmin** : `bool` - 邀请人是否为管理员。在无对应概念的适配器中，此项应始终返回 `true`

### 群组加入申请

```csharp
public event BotEventHandler<BotGuildRequestedEvent> OnGuildRequested;
```

他人申请加入某群组。

- `BotGuildRequestedEvent` - 群组申请事件
- **e.GuildName** : `string` - 群组名称
- **e.GuildId** : `string` - 群组 ID
- **e.RequesterName** : `string` - 申请人名称
- **e.RequesterId** : `string` - 申请人用户 ID
- **e.Comment** : `string` - 申请备注

### 好友申请

```csharp
public event BotEventHandler<BotFriendRequestedEvent> OnFriendRequested;
```

- `BotFriendRequestedEvent` - 好友申请事件
- **e.RequesterName** : `string` - 申请人名称
- **e.RequesterId** : `string` - 申请人用户 ID
- **e.Comment** : `string` - 申请备注

## 事件处理

### 处理群组邀请

```csharp
public Task HandleGuildInvitation(BotGuildInvitedEvent e, bool approve, string? comment = null);
```

- **e** : `BotGuildInvitedEvent` - 群组邀请事件
- **approve** : `bool` - 是否同意
- **comment** : `string?` - 附带备注

### 处理群组申请

```csharp
public Task HandleGuildRequest(BotGuildRequestedEvent e, bool approve, string? comment = null);
```

- **e** : `BotGuildRequestedEvent` - 群组申请事件
- **approve** : `bool` - 是否同意
- **comment** : `string?` - 附带备注

### 处理好友申请

```csharp
public Task HandleFriendRequest(BotFriendRequestedEvent e, bool approve, string? comment = null);
```

- **e** : `BotFriendRequestedEvent` - 好友申请事件
- **approve** : `bool` - 是否同意
- **comment** : `string?` - 附带备注
