---
title: Socket 协议
icon: laptop-code
order: 2
category:
  - 开发指南
  - 通信协议
---

使用 Socket 协议作为默认通信协议。

## 本地进程间通信路径定义

- 在 Unix 上：`\0项目路径`，如 `␀/home/user/project`
- 在 Windows 上：`\\?\pipe\项目路径`，如 `\\?\pipe\D:\project`