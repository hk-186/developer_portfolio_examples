# 技术设计

## 技术栈
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion（动画效果）
- React Context（国际化语言管理）

## 项目结构
src/
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
  data/
    en.ts          # 英文数据
    zh.ts          # 中文数据
  i18n/
    LanguageContext.tsx   # 语言上下文和 hook
    translations.ts       # UI 文本翻译映射
  types/
    index.ts       # TypeScript 类型定义
  App.tsx
  main.tsx

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