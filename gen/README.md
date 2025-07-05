# MCW Builder

一个用 Go 语言编写的 Markdown 到 Vue 的构建器，用于将 Markdown 文档转换为 Vue 组件。

## 功能特性

- 读取 `docs/` 文件夹中的所有 `.md` 文件
- 解析文件元数据（访问地址、导入地址、服务器类型）
- 解析 Sidebar 配置（标题和图片）
- 将 Markdown 内容转换为 HTML 并应用自定义样式类
- 生成 Vue 组件文件
- 生成 CMSMetadata.ts 元数据文件

## 使用方法

1. 确保你的项目结构如下：
```
your-project/
├── docs/                   # Markdown 文档目录
│   ├── Draft/
│   │   ├── 测试.md
│   │   └── Layout/
│   │       └── 测试.md
│   └── ...
├── src/
│   ├── views/
│   │   └── w/             # 生成的 Vue 文件目录
│   └── modules/
│       └── router/
│           └── CMSMetadata.ts  # 元数据文件
└── gen/               # 构建器目录
```

2. 在 `docs/` 目录中放置你的 Markdown 文件，支持以下格式：

```markdown
@start mcw-sidebar
{
    "title": "侧边栏标题",
    "image": ["图片1.jpg", "图片2.jpg"]
}
@end mcw-sidebar

# 标题

正文内容...
```

3. 运行构建器：
```bash
cd builder
go run main.go
```

## 生成的文件

### Vue 组件文件
生成在 `src/views/w/` 目录下，路径根据文件在 `docs/` 中的位置确定。

### CMSMetadata.ts
包含所有页面的元数据信息，用于路由配置。
