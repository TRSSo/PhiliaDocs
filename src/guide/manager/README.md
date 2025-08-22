---
dir: { order: 3 }
title: 项目管理器
icon: lightbulb
order: 1
category:
  - 使用指南
---

## 介绍

项目管理器用于创建、启动、管理项目

## 📂 项目文件夹示意图

```text
Philia
├── lib      # 运行库
├── plugin   # 插件
├── Log      # 管理器日志
└── Project  # 项目实例
    ├── Impl # 实现端项目
    │   ├── 项目A
    │   │   ├── config.yml # 配置
    │   │   ├── Data       # 数据
    │   │   └── Log        # 日志
    │   └── 项目B
    └── App  # 应用端项目
```

::: info
可以看到所有自动创建的文件夹都是大写的，这些文件夹可以进行删改操作，而小写的就不要乱动了。
:::

<Catalog />
