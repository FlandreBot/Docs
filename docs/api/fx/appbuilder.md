# 应用建造 (FlandreAppBuilder)

一个应用建造者实例是一切的开始，其提供了加入适配器、插件的能力，同时提供依赖注入容器的服务集合可供手动注入。

[[toc]]

## 属性

```csharp
public IServiceCollection Services { get; }
```
依赖注入容器的服务集合，通过它可以方便注册与控制自己想要的服务。

## 添加插件

```csharp
public FlandreAppBuilder UsePlugin<TPlugin>()
    where TPlugin : Plugin
```
添加一个不带配置的插件。

```csharp
public FlandreAppBuilder UsePlugin<TPlugin>(object? config)
    where TPlugin : Plugin
```
添加一个带配置的插件。

```csharp
public FlandreAppBuilder UsePlugin<TPlugin, TPluginConfig>(TPluginConfig? config) 
    where TPlugin : Plugin
```
添加一个带配置的插件，并使用泛型限定插件配置类型。

## 添加适配器

```csharp
public FlandreAppBuilder UseAdapter(IAdapter adapter)
```
添加一个适配器实例。
