# 事件 (Event)

Flandre 中存在着许许多多的事件，监控着应用内各项数据的流动。

在一个插件中，我们可以十分方便地通过重写插件方法的方式来订阅一个事件：

```csharp
public class ExamplePlugin : Plugin
{
    /// <summary>
    /// 每次收到消息时触发。
    /// </summary>
    public override async Task OnMessageReceived(MessageContext ctx)
    {
        // 如果消息文本为 "Hello!"，
        if (ctx.Message.GetText() == "Hello!")
        {
            // 则发送一条 "World!" 消息作为回复。
            await ctx.Bot.SendMessage(ctx.Message, "World!");
        }
    }
}

builder.AddPlugin<ExamplePlugin>();
```

如果想要使用更加传统的 `+=` 式事件订阅方式，Flandre 同样支持，只是可能更加麻烦：

```csharp
app.Bots.ForEach(bot =>
    bot.OnMessageReceived +=(bot, e) => { /* ... */ });
```