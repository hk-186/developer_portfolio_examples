# 个人作品集网站开发指令

## 项目概述
使用 React + TypeScript + Tailwind CSS 开发的个人作品集网站。

## 技术栈要求
- React 18+
- TypeScript 5+
- Vite 6+
- Tailwind CSS 3+
- Framer Motion（动画）
- Lucide React（图标）

## 开发规范

### 代码规范
- 使用函数式组件 + Hooks
- 使用 TypeScript 严格模式
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case
- 变量命名使用 camelCase
- 常量命名使用 UPPER_CASE

### 样式规范
- 使用 Tailwind CSS 编写样式
- 复杂样式使用 CSS Modules
- 遵循 style-spec.md 定义的设计规范
- 优先使用 Tailwind 预设类，避免自定义样式

### 组件规范
- 组件要可复用
- 组件接口定义在 component-spec.md
- 纯展示组件与逻辑组件分离
- 组件职责单一

### 数据规范
- 数据结构定义在 data-spec.json
- 使用 sample-data.json 作为开发测试数据
- 数据验证使用 Zod 或 JSON Schema Validator

### 性能规范
- 图片使用懒加载
- 组件使用 React.memo 优化
- 使用 useCallback/useMemo 避免不必要的重渲染
- 路由组件按需加载

## 开发流程

### 分支策略
- main：生产分支
- develop：开发分支
- feature/xxx：功能分支
- fix/xxx：修复分支

### 提交规范
- feat: 添加新功能
- fix: 修复 bug
- refactor: 重构代码
- style: 样式调整
- docs: 文档更新
- test: 测试更新

### 代码审查
- 每次提交必须通过代码审查
- 审查重点：类型安全、代码质量、性能优化
- 禁止提交未通过类型检查的代码

## 环境要求

### 开发环境
- Node.js >= 18
- npm >= 9
- TypeScript >= 5

### 构建命令
```bash
npm install    # 安装依赖
npm run dev    # 开发模式
npm run build  # 生产构建
npm run lint   # 代码检查
npm run test   # 运行测试
```

## 部署要求

### 部署平台
- Vercel（推荐）或 Netlify
- 自动部署：main 分支推送触发构建

### 环境变量
- VITE_APP_NAME：应用名称
- VITE_APP_URL：应用 URL

## 注意事项

### 开发注意事项
- 确保所有链接可点击并正确跳转
- 确保移动端适配正常
- 确保动画效果流畅不卡顿
- 确保代码无 TypeScript 错误

### 安全注意事项
- 避免内联脚本执行
- 所有外部链接添加 rel="noopener noreferrer"
- 敏感信息不硬编码

### 维护注意事项
- 定期更新依赖版本
- 定期运行安全扫描
- 保持文档与代码同步