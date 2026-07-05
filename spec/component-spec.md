# 组件规格文档

## Header 组件

### 接口定义
```typescript
interface HeaderProps {
  navItems: {
    label: string;
    href: string;
  }[];
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| navItems | Array | 是 | 导航菜单项数组 |

### 功能要求
- 固定在页面顶部
- 滚动时背景模糊效果
- 移动端响应式菜单（汉堡按钮）
- 平滑滚动到对应区域
- 主题切换按钮（深色/亮色模式）
- 语言切换按钮（中文/英文）

---

## Hero 组件

### 接口定义
```typescript
interface HeroProps {
  name: string;
  title: string;
  summary: string;
  avatar: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | 是 | 姓名 |
| title | string | 是 | 职位/头衔 |
| summary | string | 是 | 一句话介绍 |
| avatar | string | 否 | 头像URL |
| socialLinks | Array | 否 | 社交链接数组 |

### 功能要求
- 大标题展示
- 渐变色文字效果
- 头像展示（圆形）
- 社交图标链接
- 向下滚动提示动画

---

## About 组件

### 接口定义
```typescript
interface AboutProps {
  bio: string;
  location: string;
  skills: {
    id: string;
    name: string;
    category: string;
    level: number;
    icon?: string;
  }[];
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| bio | string | 是 | 个人简介 |
| location | string | 否 | 所在地 |
| skills | Array | 是 | 技能列表 |

### 功能要求
- 详细介绍文本
- 技能分类展示
- 技能熟练度进度条
- 技能图标展示

---

## Projects 组件

### 接口定义
```typescript
interface ProjectsProps {
  projects: {
    id: string;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    tags?: string[];
    status?: string;
  }[];
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| projects | Array | 是 | 项目列表 |

### 功能要求
- 项目卡片网格布局
- 项目截图懒加载
- 悬停动画效果
- 技术栈标签展示
- GitHub/Demo 链接按钮

---

## Contact 组件

### 接口定义
```typescript
interface ContactProps {
  email: string;
  github: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| email | string | 是 | 邮箱地址 |
| github | string | 是 | GitHub链接 |
| socialLinks | Array | 否 | 社交链接数组 |

### 功能要求
- 联系方式展示
- 邮箱链接可点击
- 社交图标链接
- 复制邮箱功能

---

## Footer 组件

### 接口定义
```typescript
interface FooterProps {
  year?: number;
  copyright?: string;
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| year | number | 否 | 年份（默认当前年份） |
| copyright | string | 否 | 版权信息 |

### 功能要求
- 版权信息展示
- 简单装饰线条

---

## ProjectCard 组件（子组件）

### 接口定义
```typescript
interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  tags?: string[];
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | 是 | 项目ID |
| name | string | 是 | 项目名称 |
| description | string | 是 | 项目描述 |
| image | string | 是 | 项目截图 |
| technologies | Array | 是 | 技术栈列表 |
| githubUrl | string | 否 | GitHub链接 |
| demoUrl | string | 否 | 演示链接 |
| tags | Array | 否 | 标签列表 |

---

## SkillCard 组件（子组件）

### 接口定义
```typescript
interface SkillCardProps {
  id: string;
  name: string;
  category: string;
  level: number;
  icon?: string;
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | 是 | 技能ID |
| name | string | 是 | 技能名称 |
| category | string | 是 | 技能分类 |
| level | number | 是 | 熟练度(0-100) |
| icon | string | 否 | 图标名称 |

---

## SocialIcon 组件（子组件）

### 接口定义
```typescript
interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | 是 | 平台名称 |
| url | string | 是 | 链接地址 |
| icon | string | 是 | Lucide图标名称 |

---

## ThemeContext（主题管理）

### 接口定义
```typescript
type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
```

### 功能要求
- 支持深色/亮色主题切换
- 主题状态持久化到 localStorage
- 通过 CSS 变量实现主题配色切换
- 提供 useTheme hook 供组件使用

---

## icons 工具（图标映射）

### 文件路径
`src/utils/icons.tsx`

### 导出内容
| 导出名称 | 类型 | 说明 |
|----------|------|------|
| iconMap | Record<string, ReactNode> | 标准尺寸图标映射（20px） |
| iconMapLarge | Record<string, ReactNode> | 大尺寸图标映射（24px） |
| iconMapSmall | Record<string, ReactNode> | 小尺寸图标映射（16px） |

### 支持图标
- Github, Linkedin, Twitter, Mail, Globe
- React, TypeScript, Vue, Node, Python
- Database, Container, Cloud, GitBranch, Package, Zap

---

## BackToTop 组件

### 接口定义
```typescript
interface BackToTopProps {}
```

### 功能要求
- 滚动超过阈值后显示
- 点击平滑滚动到顶部
- 浮动定位（右下角）
- 渐入渐出动画

---

## ProjectModal 组件

### 接口定义
```typescript
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| project | Project | 是 | 项目数据 |
| isOpen | boolean | 是 | 是否打开 |
| onClose | function | 是 | 关闭回调 |

### 功能要求
- 项目详情展示
- 项目图片、名称、状态
- 技术栈标签、项目标签
- GitHub/Demo 链接
- 动画过渡效果
- ESC键关闭

---

## Helmet 组件

### 接口定义
```typescript
interface HelmetProps {}
```

### 功能要求
- 页面标题
- 页面描述
- SEO meta标签（OG、Twitter）
- 语言切换支持
- 图标设置

---

## ErrorBoundary 组件

### 接口定义
```typescript
interface ErrorBoundaryProps {
  children: ReactNode;
}
```

### 属性说明
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| children | ReactNode | 是 | 子组件 |

### 功能要求
- 捕获子组件错误
- 优雅错误展示
- 重试按钮
- 错误日志记录

---

## useScroll Hook

### 文件路径
`src/hooks/useScroll.ts`

### 导出内容
| 导出名称 | 返回类型 | 说明 |
|----------|----------|------|
| useScroll | { isScrolled, scrollY } | 滚动状态检测 |
| useScrollTo | (selector, behavior) => void | 平滑滚动到指定元素 |
| useScrollProgress | number | 滚动进度百分比 |
| useCurrentSection | string | 当前可见区域 |

### 参数说明
- useScroll(threshold): threshold 为触发阈值，默认50px
- useScrollTo(selector, behavior): selector 为CSS选择器，behavior 为滚动行为