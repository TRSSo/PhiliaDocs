---
dir: { order: 2 }
title: 安装指南
icon: lightbulb
order: 1
category:
  - 使用指南
---

## 环境安装

1. [Node.js](https://nodejs.org) 安装 https://nodejs.org/zh-cn/download/current

::: important
由于使用了最新特性，请安装 v24 以上版本。
:::

2. [pnpm](https://pnpm.io) 安装 https://pnpm.io/zh/installation

```sh
npm i -g pnpm
```

3. [Git](https://git-scm.com) 安装 https://git-scm.com/downloads

## 项目安装

4. 终端进入准备安装项目的位置，克隆项目并安装依赖

::: code-tabs#install

@tab 使用

```sh
git clone -b lib --depth 1 https://github.com/TRSSo/Philia
cd Philia
pnpm i -P
```

@tab 开发

```sh
git clone -b dev --single-branch https://github.com/TRSSo/Philia
cd Philia
pnpm i
pnpm build
```

:::

## 启动

5. 启动项目管理器

```sh
node . tui
```

<Catalog />
