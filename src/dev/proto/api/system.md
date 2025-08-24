---
title: 系统 API
icon: code
order: 2
category:
  - 开发指南
  - 应用协议
  - API
---

## getVersion 获取版本信息

::: tabs

@tab 定义

请求参数：无

返回参数：

| 参数名 | 类型   | 描述       |
| ------ | ------ | ---------- |
| impl   | 结构体 | 实现端信息 |
| proto  | 结构体 | 协议端信息 |

结构体：

| 参数名  | 类型   | 描述   |
| ------- | ------ | ------ |
| id      | string | 标识符 |
| name    | string | 名称   |
| version | string | 版本   |

@tab 示例

返回参数：

```js
{
  impl: { id: "TTY", name: "终端", version: "1" },
  proto: {
    id: "linux",
    name: "Linux x86_64 6.16.1-2-cachyos",
    version: "node v24.5.0 x64"
  }
}
```

:::
