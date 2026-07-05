# 技术设计

## 技术栈
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion（动画效果）
- React Context（国际化语言管理、主题管理）

## 项目结构
src/
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
    Tooltip.tsx
  data/
    en.ts          # 英文数据
    zh.ts          # 中文数据
    nav.ts         # 导航配置
  i18n/
    LanguageContext.tsx   # 语言上下文和 hook
    ThemeContext.tsx      # 主题上下文和 hook
    translations.ts       # UI 文本翻译映射
  types/
    index.ts       # TypeScript 类型定义
  utils/
    icons.tsx      # 公共图标映射
  App.tsx
  main.tsx
  index.css

## 数据管理
- 项目数据和技能数据存储在 TypeScript 文件中
- 使用数组存储，方便后续添加和修改
- 支持多语言（英文/中文），数据按语言拆分到 en.ts 和 zh.ts

## 国际化（i18n）
- 使用 React Context 实现轻量级语言管理
- 语言状态持久化到 localStorage
- 数据层：src/data/en.ts 和 src/data/zh.ts 存储各语言的数据
- 文本层：src/i18n/translations.ts 存储 UI 固定文本的翻译
- 组件通过 useLanguage hook 获取当前语言并选择对应数据

## 主题管理（Theme）
- 使用 React Context 实现轻量级主题管理
- 主题状态持久化到 localStorage
- 通过 CSS 变量实现主题配色切换
- 支持深色（dark）和亮色（light）两种主题
- 组件通过 useTheme hook 获取当前主题并切换
- 主题切换通过 data-theme 属性应用到根元素

## 路径别名配置
- tsconfig.app.json 配置 baseUrl 和 paths
- vite.config.ts 配置 resolve.alias
- 支持 @/ 前缀导入模块，例如 @/components/Header
- 安装 @types/node 支持 path 模块

## 公共图标映射
- 统一管理所有 Lucide 图标
- 提供三种尺寸：标准（20px）、大（24px）、小（16px）
- 避免在多个组件中重复定义图标映射
- 导出：iconMap, iconMapLarge, iconMapSmall