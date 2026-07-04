# 样式规格文档

## 颜色系统

### 主题色
| 变量名 | 值 | 用途 |
|--------|-----|------|
| --color-primary | #6366f1 | 主色调（靛蓝色） |
| --color-secondary | #8b5cf6 | 次色调（紫色） |
| --color-accent | #ec4899 | 强调色（粉色） |

### 背景色
| 变量名 | 值 | 用途 |
|--------|-----|------|
| --color-bg-primary | #0a0a0a | 主背景 |
| --color-bg-secondary | #111111 | 次背景 |
| --color-bg-card | #1a1a1a | 卡片背景 |
| --color-bg-hover | #242424 | 悬停背景 |

### 文字色
| 变量名 | 值 | 用途 |
|--------|-----|------|
| --color-text-primary | #ffffff | 主文字 |
| --color-text-secondary | #9ca3af | 次文字 |
| --color-text-muted | #6b7280 | 辅助文字 |

### 边框色
| 变量名 | 值 | 用途 |
|--------|-----|------|
| --color-border | #27272a | 边框 |
| --color-border-light | #3f3f46 | 浅色边框 |

### 渐变色
| 名称 | 值 | 用途 |
|------|-----|------|
| gradient-primary | linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) | 主渐变 |
| gradient-accent | linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%) | 强调渐变 |
| gradient-text | linear-gradient(135deg, #6366f1, #ec4899) | 文字渐变 |
| gradient-card | linear-gradient(145deg, #1a1a1a, #111111) | 卡片渐变 |

---

## 字体系统

### 字体族
| 用途 | 字体 |
|------|------|
| 标题 | 'Inter', system-ui, sans-serif |
| 正文 | 'Inter', system-ui, sans-serif |
| 代码 | 'JetBrains Mono', monospace |

### 字体大小
| 变量名 | 值 | 用途 |
|--------|-----|------|
| --font-size-xs | 0.75rem (12px) | 小文字 |
| --font-size-sm | 0.875rem (14px) | 辅助文字 |
| --font-size-base | 1rem (16px) | 正文 |
| --font-size-lg | 1.125rem (18px) | 大正文 |
| --font-size-xl | 1.25rem (20px) | 小标题 |
| --font-size-2xl | 1.5rem (24px) | 中标题 |
| --font-size-3xl | 1.875rem (30px) | 大标题 |
| --font-size-4xl | 2.25rem (36px) | Hero 标题 |
| --font-size-5xl | 3rem (48px) | 主标题 |
| --font-size-6xl | 3.75rem (60px) | 超大标题 |

### 字体粗细
| 变量名 | 值 | 用途 |
|--------|-----|------|
| --font-weight-normal | 400 | 正文 |
| --font-weight-medium | 500 | 小标题 |
| --font-weight-semibold | 600 | 中标题 |
| --font-weight-bold | 700 | 大标题 |

---

## 间距系统

### 基础间距
| 变量名 | 值 |
|--------|-----|
| --spacing-1 | 0.25rem (4px) |
| --spacing-2 | 0.5rem (8px) |
| --spacing-3 | 0.75rem (12px) |
| --spacing-4 | 1rem (16px) |
| --spacing-5 | 1.25rem (20px) |
| --spacing-6 | 1.5rem (24px) |
| --spacing-8 | 2rem (32px) |
| --spacing-10 | 2.5rem (40px) |
| --spacing-12 | 3rem (48px) |
| --spacing-16 | 4rem (64px) |
| --spacing-20 | 5rem (80px) |
| --spacing-24 | 6rem (96px) |

### 区域间距
| 区域 | 顶部间距 | 底部间距 |
|------|---------|---------|
| Hero | --spacing-24 | --spacing-24 |
| About | --spacing-24 | --spacing-24 |
| Projects | --spacing-24 | --spacing-24 |
| Contact | --spacing-24 | --spacing-24 |

---

## 圆角系统

| 变量名 | 值 | 用途 |
|--------|-----|------|
| --radius-sm | 0.375rem (6px) | 小按钮 |
| --radius-md | 0.5rem (8px) | 按钮、输入框 |
| --radius-lg | 0.75rem (12px) | 卡片 |
| --radius-xl | 1rem (16px) | 大卡片、模态框 |
| --radius-full | 9999px | 圆形 |

---

## 阴影系统

| 变量名 | 值 | 用途 |
|--------|-----|------|
| --shadow-sm | 0 1px 2px 0 rgb(0 0 0 / 0.5) | 小阴影 |
| --shadow-md | 0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5) | 中阴影 |
| --shadow-lg | 0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5) | 大阴影 |
| --shadow-xl | 0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5) | 超大阴影 |
| --shadow-glow | 0 0 20px rgba(99, 102, 241, 0.3) | 发光效果 |
| --shadow-glow-hover | 0 0 30px rgba(99, 102, 241, 0.5) | 悬停发光 |

---

## 过渡动画

### 过渡时长
| 变量名 | 值 | 用途 |
|--------|-----|------|
| --transition-fast | 150ms | 快速过渡 |
| --transition-normal | 300ms | 标准过渡 |
| --transition-slow | 500ms | 慢速过渡 |

### 过渡曲线
| 变量名 | 值 | 用途 |
|--------|-----|------|
| --transition-ease | cubic-bezier(0.4, 0, 0.2, 1) | 标准缓动 |
| --transition-bounce | cubic-bezier(0.34, 1.56, 0.64, 1) | 弹跳效果 |

---

## 组件样式规范

### Header
- 高度：64px
- 背景：rgba(10, 10, 10, 0.8)
- 背景模糊：backdrop-blur-md
- 边框：底部 1px solid --color-border
- 导航项间距：--spacing-8

### Hero
- 最小高度：100vh
- 内容居中：flex items-center justify-center
- 头像尺寸：128px（桌面端）/ 96px（移动端）
- 头像边框：3px solid --color-primary
- 社交图标尺寸：24px
- 社交图标间距：--spacing-4

### About
- 内容最大宽度：1280px
- 内容居中：margin 0 auto
- 内边距：0 --spacing-6
- 技能卡片间距：--spacing-4
- 进度条高度：8px
- 进度条圆角：--radius-full

### Projects
- 内容最大宽度：1280px
- 内容居中：margin 0 auto
- 内边距：0 --spacing-6
- 卡片间距：--spacing-6
- 卡片圆角：--radius-xl
- 卡片边框：1px solid --color-border
- 图片高度：200px
- 图片圆角：--radius-lg

### Contact
- 内容最大宽度：1280px
- 内容居中：margin 0 auto
- 内边距：0 --spacing-6
- 社交图标尺寸：32px
- 社交图标间距：--spacing-6

### Footer
- 高度：80px
- 内容居中：flex items-center justify-center
- 顶部边框：1px solid --color-border

---

## 响应式样式

### 桌面端 (> 1280px)
- Hero 标题：--font-size-6xl
- 项目卡片：3列布局
- Header 导航：完整展示

### 平板端 (768px - 1280px)
- Hero 标题：--font-size-5xl
- 项目卡片：2列布局
- Header 导航：完整展示

### 移动端 (< 768px)
- Hero 标题：--font-size-4xl
- 项目卡片：1列布局
- Header 导航：汉堡菜单
- 区域内边距：0 --spacing-4
- 社交图标尺寸：24px

---

## Tailwind CSS 配置

```javascript
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        card: '#1a1a1a',
        border: '#27272a',
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#ec4899',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-hover': '0 0 30px rgba(99, 102, 241, 0.5)',
      },
    },
  },
}
```