---
title: 调用协议
icon: laptop-code
order: 4
category:
  - 开发指南
---

## 基本参数

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| id | string | 调用唯一标识符（推荐 ULID） |
| code | number | 调用类型码 |

## 0. 请求

发起一个请求调用。

::: tabs

@tab 定义

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| code | 0 | 请求码 |
| name | string | 请求调用的方法名 |
| data? | 请求方法提供 | 请求的参数 |

@tab 示例

```json
{
  "id": "01JSRMV07VY3B4H227FYWEMKM9",
  "code": 0,
  "name": "getUserInfo",
  "data": {
    "id": "1234567890"
  }
}
```

:::

## 1. 响应

请求处理响应，代表请求完成。

::: tabs

@tab 定义

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| code | 1 | 响应码 |
| data? | 请求方法提供 | 响应的结果 |

@tab 示例

```json
{
  "id": "01JSRMV07VY3B4H227FYWEMKM9",
  "code": 1,
  "data": {
    "id": "1234567890",
    "name": "匿名用户"
  }
}
```

:::

## 2. 正在执行

已收到请求，代表请求**未完成**，请等待执行结果。

::: tabs

@tab 定义

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| code | 2 | 正在执行码 |

@tab 示例

```json
{
  "id": "01JSRMV07VY3B4H227FYWEMKM9",
  "code": 2,
}
```

:::

## 3. 错误

请求处理错误，代表请求完成。

::: tabs

@tab 定义

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| code | 3 | 错误码 |
| data | object | 错误信息 |
| data\.name | string | 错误名称 |
| data.message | string | 错误信息 |
| data.error? | 请求方法提供 | 错误堆栈信息（如果存在） |

@tab 示例

```json
{
  "id": "01JSRMV07VY3B4H227FYWEMKM9",
  "code": 3,
  "data": {
    "name": "NotFoundError",
    "message": "用户不存在",
    "error": "NotFoundError: 用户不存在\n    at makeError (/root/Philia/src/util/common.ts:12:24)"
  }
}
```

:::