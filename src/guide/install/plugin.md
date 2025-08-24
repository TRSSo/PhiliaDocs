---
title: 安装插件
icon: lightbulb
order: 2
category:
  - 使用指南
---

::: code-tabs#install

@tab 使用

```sh
git clone -b lib --depth 1 https://github.com/TRSSo/Philia-App-Template plugin/template
pnpm i -P
```

@tab 开发

```sh
git clone -b dev --single-branch https://github.com/TRSSo/Philia-App-Template plugin/template
cd plugin/template
pnpm i
pnpm build
```

:::
