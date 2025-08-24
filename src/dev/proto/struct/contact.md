---
title: 用户和群结构
icon: code
order: 2
category:
  - 开发指南
  - 应用协议
  - 结构体
---

## 机器人自身信息

| 参数名  | 类型   | 描述   |
| ------- | ------ | ------ |
| id      | string | 标识符 |
| name    | string | 用户名 |
| avatar? | string | 头像   |

## 用户信息

继承自[机器人自身信息](#机器人自身信息)

| 参数名  | 类型    | 描述     |
| ------- | ------- | -------- |
| remark? | string  | 备注     |
| block?  | boolean | 是否拉黑 |

## 群信息

| 参数名      | 类型    | 描述         |
| ----------- | ------- | ------------ |
| id          | string  | 标识符       |
| name        | string  | 群名         |
| avatar?     | string  | 头像         |
| remark?     | string  | 备注         |
| whole_mute? | boolean | 是否全员禁言 |

## 群成员信息

继承自[用户信息](#用户信息)

| 参数名     | 类型                     | 描述           |
| ---------- | ------------------------ | -------------- |
| card       | string                   | 群名片         |
| role       | `owner` `admin` `member` | 权限           |
| title?     | string                   | 头衔           |
| mute_time? | number                   | 禁言到期时间戳 |
