# dsh-aemeath

爱弥斯主题皮肤 + 像素桌宠（鸣潮 Aemeath / Wuthering Waves），用于 DeepSeek Harness Web GUI。

- 🖼️ **皮肤**：4K 鸣潮爱弥斯壁纸背景（原始分辨率、锐利不压缩）+ 冰蓝/粉紫/深空蓝配色
  - 深色模式：壁纸清晰 + 半透明面板 + 毛玻璃
  - 浅色模式：壁纸清晰透出 + 高透明面板（无遮罩、无磨砂，避免暗图发灰发糊）
- 🐾 **桌宠**：Q 版像素爱弥斯（15 帧精灵表），待机呼吸 / 跑动 / 挥手 / 跳跃 / 思考 / 庆祝等动画，随对话状态实时联动
- 🖱️ **交互**：左键拖动换位（位置持久化）、左键点击随机反应（表情 + 气泡台词）、右键快捷菜单（换表情 / 打招呼 / 隐藏）

## 安装

```bash
# 链接安装到你的 web profile
dsh plugin --profile web add link:/path/to/dsh-aemeath

# 重启 DSH 后生效
```

安装后，web GUI 自动加载皮肤背景与桌宠；桌宠默认在右下角，可拖拽、左键点击互动、右键打开菜单。

## 目录结构

```
dsh-aemeath/
├── package.json        # dsh 插件清单（bundle.patch + client 声明）
├── cordis.patch.yml    # 插入插件行的 bundle patch
├── lib/
│   ├── index.js        # host 端：/aemeath-skin/* 路由 + 桌宠状态机
│   └── client.js       # client 端：皮肤 CSS + React 桌宠
└── assets/
    ├── wallpaper.jpg   # 4K 壁纸
    └── spritesheet.webp# 像素精灵表（1536×3120，8 列 × 15 行，单元 192×208）
```

## 路由

| 路径 | 用途 |
|------|------|
| `/aemeath-skin/wallpaper.jpg` | 皮肤背景壁纸 |
| `/aemeath-skin/spritesheet.webp` | 桌宠精灵表 |
| `/aemeath-skin/status` | 桌宠状态（JSON：animation/bubble/core） |

## 桌宠状态联动

| 事件 | 动画 | 气泡 |
|------|------|------|
| 收到消息 | chatting | 正在组织回复... |
| 读取/搜索文件 | running | 正在读取/搜索... |
| 写入/编辑 | building | 正在构建... |
| 执行命令 | running | 正在执行命令... |
| 分析/编排 | analyzing | 正在分析... |
| 获取/搜索网页 | fetching / searching | 正在获取/搜索网络... |
| 等待指示 | waving | 等待你的指示... |
| 完成 | celebrating | 太棒了! |

## 授权

- 壁纸与精灵表素材来自第三方（鸣潮 / 爱弥斯），仅供个人学习交流使用，版权归原权利人所有。
- 插件代码 MIT License。
