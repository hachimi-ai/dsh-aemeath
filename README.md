# dsh-aemeath

爱弥斯主题皮肤 + 像素桌宠（鸣潮 Aemeath / Wuthering Waves），用于 DeepSeek Harness Web GUI。

- 🖼️ **皮肤**：4K 鸣潮爱弥斯壁纸背景（锐利、不压缩降质）+ 独立暗化遮罩 + 冰蓝/粉紫/深空蓝配色 + 半透明毛玻璃面板
- 🐾 **桌宠**：Q 版像素爱弥斯（15 帧精灵表），待机呼吸、跑动、挥手、跳跃、思考、庆祝等动画，随对话状态实时联动（发消息→组织回复、工具执行→对应忙碌动画、完成→庆祝），支持拖拽摆放、右键菜单、气泡
- 🧩 **完全独立**：不依赖 `@linxin666/dsh-web-ui` 家族，可单独安装、单独落库

## 安装

```bash
# 链接安装到你的 web profile
dsh plugin --profile web add link:/path/to/dsh-aemeath

# 重启 DSH 后生效
```

安装后，web GUI 会自动加载皮肤背景与桌宠；桌宠出现在右下角，可拖拽、右键打开菜单。

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

## 路线

| 路径 | 用途 |
|------|------|
| `/aemeath-skin/wallpaper.jpg` | 皮肤背景壁纸 |
| `/aemeath-skin/spritesheet.webp` | 桌宠精灵表 |
| `/aemeath-skin/status` | 桌宠状态（JSON：animation/bubble/core） |

## 授权

- 壁纸与精灵表素材来自第三方（鸣潮 / 爱弥斯），仅供个人学习交流使用，版权归原权利人所有。
- 插件代码 MIT License。
