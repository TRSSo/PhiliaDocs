---
title: HTTP 协议
icon: code
order: 4
category:
  - 开发指南
  - 通信协议
---

HTTP 用于只需要单向请求 API 的情况，作为附加协议。

::: important
HTTP 协议仅可单向请求服务端，请勿调用需反向请求客户端的 API，如：接收事件(receiveEvent)
:::

## 请求格式

请求的 API 名作为请求路径，不需要请求参数的 API 可用 GET 方法，否则使用 POST。

POST 支持的编码格式为：[JSON](https://json.org) 和 [MsgPack](https://msgpack.org)，并默认使用`JSON`。

使用 MsgPack 时需加请求头:`Content-Type: application/vnd.msgpack`

### 请求 URL 参数

- id 请求标识符：若存在此参数，则结果会缓存5分钟(idle)，缓存时间内请求同一标识符，直接返回缓存结果。
- async 异步处理：若存在此参数，并且该 API 会返回[正在执行](../call.md#_2-正在执行)，则提交异步处理，响应 202 无结果，若该 API 直接返回[响应](../call.md#_1-响应)，则仍响应 200 结果，用于：

1. 只需要执行，不需要结果
2. API 处理时间很长，为防止连接断开丢失结果，与 id 参数配合，轮询得到结果。

## 响应格式

- 200 正常响应
- 202 异步处理
- 400 请求格式错误
- 404 API 不存在
- 500 API 处理错误

响应格式编码与请求相同，默认 JSON，使用 MsgPack 需加请求头。

## 压缩格式

POST 请求压缩需加请求头：[Content-Encoding](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Encoding)

::: important
协议没有规定必须支持压缩，请先检查服务端支持的压缩算法，在响应头：[Accept-Encoding](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Accept-Encoding)
:::

响应的压缩格式按请求的 `Content-Encoding` `Accept-Encoding` 从前往后匹配服务端支持的压缩格式，若使用了压缩格式，则会写在响应头`Content-Encoding`，若无则不压缩。
