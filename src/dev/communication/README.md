---
dir: { order: 5 }
title: 通信协议
icon: code
order: 1
category:
  - 开发指南
  - 通信协议
---

## 元信息

客户端/服务端连接信息。

::: tabs

@tab 定义

| 参数名  | 类型     | 描述                      |
| ------- | -------- | ------------------------- |
| id      | string   | 端唯一标识符（推荐 ULID） |
| name    | string   | 端名称                    |
| version | number   | 端版本号                  |
| encode  | string[] | 支持的编码格式数组        |
| verify  | string[] | 支持的校验格式数组        |

@tab 示例

```js
{
  id: "01JSRN5WPSWXW7P6EHP8Q65FGB",
  name: "Client",
  version: 1,
  encode: ["MsgPack", "CBOR", "V8Serializer", "JSON"],
  verify: ["None", "CRC32", "MD5", "SHA256", "SHA3-512", "ZSTD", "GZIP"]
}
```

:::

## 编码格式

编码格式数组按优先级从大到小排序。

标准规定必须支持的编码格式为：[JSON](https://json.org) 和 [MsgPack](https://msgpack.org)，并优先使用 `MsgPack`。

TypeScript 实现支持的编码格式（按优先级排序）：

[MsgPack](https://msgpack.org) [CBOR](https://cbor.io) [V8Serializer](https://nodejs.org/api/v8.html) [JSON](https://json.org)

## 校验格式

标准规定必须支持的校验格式为：`None` 和 `CRC32`。

`None` 表示不使用校验，如果通信协议自带校验，则优先使用 `None`，否则使用 `CRC32`。

校验数据拼接在编码数据前，`CRC32` 编码使用无符号、大端 32 位整数 (UInt32BE)。

TypeScript 实现支持的校验格式（按强度和消耗性能程度排序）：

`None` `CRC32` `MD5` `SHA256` `SHA3-512`

## 压缩格式

由于压缩格式一般提供了校验，所以压缩格式包含在校验格式内。

如果是本地通信，优先使用校验；远程通信，则优先使用压缩。

标准不规定必须支持压缩格式，TypeScript 实现支持的压缩格式：[ZSTD](https://zstd.net) [GZIP](https://gzip.org)

## 通信格式协商

1. 客户端-服务端连接建立后，发送与接收的第一条消息为元信息。

::: important
元信息规定为使用 `JSON` 编码，`CRC32` 校验。
:::

2. 收到元信息后，先检查版本号是否一致，然后检查编码格式与校验格式。

3. **发送**的编码格式：以自身支持的格式数组开始遍历，使用第一个对方支持的格式。

```js
encode = local.encode.find(i => remote.encode.includes(i))
verify = local.verify.find(i => remote.verify.includes(i))
```

4. **接收**的解码格式：以对方支持的格式数组开始遍历，使用第一个自身支持的格式。

5. 若出现以下问题，则认为连接失败，并立即关闭连接：

- 连接建立后5秒(send)未收到元信息

- 元信息解码错误

- 没有双方都支持的编码、校验格式

<Catalog />
