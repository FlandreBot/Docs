# 中间件 (Middleware)

相比事件，中间件只能处理消息流。但其更为灵活，同时提供了事件所不具有的能力——截断处理。

定义一个中间件：

```csharp
app.UseMiddleware(async (ctx, next) => {
    if (ctx.Message.GetText() == "pass me!")
        await next();
});
```

上面的中间件达到了一个效果：只有在消息文本为 `pass me!` 的时候，消息才会被传送至下一步处理。否则，消息将在此处被截断，不会向下传播。

Flandre 的中间件设计参考了洋葱模型。如果你有使用 ASP.NET Core 中间件，或是 Node.js 框架 Koa 的经验，就很容易理解。这里采用一张来自 ASP.NET Core 文档的图片来说明：

![中间件模型](./middleware-model.png)