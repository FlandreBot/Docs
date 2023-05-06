# 认识指令

指令是一个机器人的灵魂。指令系统是整个 Flandre 框架中最精华的部分，也是灵活度最高的部分。通过指令，开发者无需再繁琐地在事件处理里写判断逻辑，仅需简单的定义就能方便掌握用户提供的参数信息。

一条指令必须定义在一个插件里，并使用 `[Command]` 特性标注：

```csharp
public class ExamplePlugin : Plugin
{
    [Command("test")]
    public string OnTest(CommandContext ctx, string name, int age)
    {
        return $"Name: {name}, Age: {age}";
    }
}

builder.Plugins.Add<ExamplePlugin>();
```

Flandre 会自动解析指令方法的参数列表，在用户调用指令时，便会在解析成功后，将解析结果自动作为实参传入该方法。

