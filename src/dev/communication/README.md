---
title: 通信协议
icon: laptop-code
order: 1
category:
  - 开发指南
  - 通信协议
---

## 元信息

客户端/服务端连接信息。

::: tabs

@tab 定义

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| id | string | 端唯一标识符（推荐 ULID） |
| name | string | 端名称 |
| version | number | 端版本号 |
| encode | Array\<string> | 支持的编码格式数组 |
| verify | Array\<string> | 支持的校验格式数组 |

@tab 示例

```json
{
  "id": "01JSRN5WPSWXW7P6EHP8Q65FGB",
  "name": "Client",
  "version": 1,
  "encode": ["MsgPack", "CBOR", "V8Serializer", "JSON"],
  "verify": ["None", "CRC32", "MD5", "SHA256", "SHA3-512"]
}
```

:::

## 编码格式

编码格式数组按优先级从大到小排序。

标准规定必须支持的编码格式为：[JSON](https://json.org) 和 [MsgPack](https://msgpack.org)，并优先使用 `MsgPack`。

## 校验格式

标准规定必须支持的校验格式为：`None` 和 `CRC32`。

`None` 表示不使用校验，如果通信协议自带校验，则优先使用 `None`，否则使用 `CRC32`。

校验数据拼接在编码数据前，`CRC32` 编码使用无符号、大端 32 位整数 (UInt32BE)。

## 通信格式协商

1. 客户端-服务端连接建立后，发送与接收的第一条消息为元信息。

::: important
元信息规定为使用 `JSON` 编码，`CRC32` 校验。
:::

2. 先检查版本号，然后检查编码格式与校验格式，若出现错误，则立即关闭连接。

3. **发送**的编码格式：以自身支持的格式数组开始遍历，使用第一个对方支持的格式。

```js
encode = local.encode.find(i => remote.encode.includes(i))
verify = local.verify.find(i => remote.verify.includes(i))
```

4. **接收**的解码格式：以对方支持的格式数组开始遍历，使用第一个自身支持的格式。

<Catalog />