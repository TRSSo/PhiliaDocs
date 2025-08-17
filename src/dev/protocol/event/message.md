---
title: 消息事件
icon: code
order: 2
category:
  - 开发指南
  - 应用协议
  - 事件
---

## 消息事件基类

| 参数名  | 类型           | 描述     |
| ------- | -------------- | -------- |
| type    | `message`      | 事件类型 |
| message | 消息段结构体[] | 消息段   |
| summary | string         | 消息摘要 |

## 用户消息事件

::: tabs

@tab 定义

继承自[用户事件基类](README.md#用户事件基类)和[消息事件基类](#消息事件基类)

| 参数名  | 类型    | 描述                 |
| ------- | ------- | -------------------- |
| scene   | `user`  | 事件场景             |
| is_self | boolean | 是否是自己发送给用户 |

@tab 示例

```js
{
  id: "01K2V46ZV3FDCGY5FDWPGCHT1B",
  type: "message",
  scene: "user",
  time: 1755404533.604,
  user: { id: "tty", name: "终端" },
  message: [ { type: "text", data: "你好" } ],
  summary: "你好"
}
```

:::

## 群消息事件

::: tabs

@tab 定义

继承自[群事件基类](README.md#群事件基类)和[消息事件基类](#消息事件基类)

| 参数名 | 类型    | 描述     |
| ------ | ------- | -------- |
| scene  | `group` | 事件场景 |

@tab 示例

```js
{
  id: "01K2V46ZV3FDCGY5FDWPGCHT1B",
  type: "message",
  scene: "group",
  time: 1755404533.604,
  user: { id: "tty", name: "终端" },
  group: { id: "tty", name: "终端" },
  message: [ { type: "text", data: "你好" } ],
  summary: "你好"
}
```

:::
