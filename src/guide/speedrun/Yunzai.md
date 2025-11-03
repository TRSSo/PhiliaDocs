---
title: Yunzai
icon: circle-info
order: 2
category:
  - 使用指南
  - 速通教程
  - Yunzai
---

## 介绍

本教程说明 [Philia 实现端](../../dev/design.md#philia-实现端-implementation) 与 [Yunzai 应用端](https://github.com/TimeRainStarSky/Yunzai) 的连接

## 准备

安装 [Philia](../install/README.md) 和 [Yunzai](https://github.com/TimeRainStarSky/Yunzai)

## Philia

1. 打开 Philia 项目管理器，创建实现端项目
2. Philia 协议类型推荐选择`Socket`
3. Philia 协议端类型

- Yunzai 选择客户端时，选择服务端（推荐）
- Yunzai 选择服务端时，选择客户端→自定义，填入 Yunzai 的服务端地址

## Yunzai

1. Yunzai 目录下终端输入（Philia 安装路径替换为实际路径）

::: code-tabs#install

@tab GitHub（国外推荐）

```sh
git clone --depth 1 https://github.com/TRSSo/Yunzai-Philia-Plugin plugins/Philia-Plugin
cd plugins/Philia-Plugin
pnpm i philia@link:Philia安装路径
cd ../..
```

@tab Gitee（国内推荐）

```sh
git clone --depth 1 https://gitee.com/TRSSo/Yunzai-Philia-Plugin plugins/Philia-Plugin
cd plugins/Philia-Plugin
pnpm i philia@link:Philia安装路径
cd ../..
```

@tab GitLab

```sh
git clone --depth 1 https://gitlab.com/TRSSo/Yunzai-Philia-Plugin plugins/Philia-Plugin
cd plugins/Philia-Plugin
pnpm i philia@link:Philia安装路径
cd ../..
```

@tab GitCode

```sh
git clone --depth 1 https://gitcode.com/TRSSo/Yunzai-Philia-Plugin plugins/Philia-Plugin
cd plugins/Philia-Plugin
pnpm i philia@link:Philia安装路径
cd ../..
```

:::

2. 启动 Yunzai，输入`#Philia设置`
3. Philia 协议类型推荐选择`Socket`
4. Philia 协议端类型

- Philia 选择服务端时，选择客户端，并选择创建好的项目（推荐）
- Philia 选择客户端时，选择服务端，Philia 实现端创建时填入这里得到的地址
