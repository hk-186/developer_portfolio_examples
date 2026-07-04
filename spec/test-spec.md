# 测试规格文档

## 测试框架

| 测试类型 | 框架 | 用途 |
|---------|------|------|
| 单元测试 | Vitest | 组件逻辑测试 |
| 集成测试 | Vitest + Testing Library | 组件交互测试 |
| E2E 测试 | Playwright | 端到端测试 |
| 数据验证 | Zod / JSON Schema Validator | 数据结构验证 |
| 视觉测试 | Percy / Chromatic | 视觉回归测试 |

---

## 数据验证测试

### 测试目标
确保所有数据符合 data-spec.json 定义的规格

### 测试用例

#### Skill 数据验证
```typescript
describe('Skill Data Validation', () => {
  test('should validate skill with all required fields', () => {
    const skill = {
      id: 'react',
      name: 'React',
      category: 'frontend',
      level: 90
    };
    expect(validateSkill(skill)).toBe(true);
  });

  test('should reject skill without required fields', () => {
    const skill = {
      name: 'React',
      category: 'frontend'
    };
    expect(validateSkill(skill)).toBe(false);
  });

  test('should reject skill with invalid level', () => {
    const skill = {
      id: 'react',
      name: 'React',
      category: 'frontend',
      level: 150
    };
    expect(validateSkill(skill)).toBe(false);
  });

  test('should reject skill with invalid category', () => {
    const skill = {
      id: 'react',
      name: 'React',
      category: 'invalid',
      level: 90
    };
    expect(validateSkill(skill)).toBe(false);
  });
});
```

#### Project 数据验证
```typescript
describe('Project Data Validation', () => {
  test('should validate project with all required fields', () => {
    const project = {
      id: 'portfolio',
      name: 'Portfolio',
      description: 'Personal portfolio website',
      image: 'https://example.com/image.png',
      technologies: ['React', 'TypeScript']
    };
    expect(validateProject(project)).toBe(true);
  });

  test('should reject project without required fields', () => {
    const project = {
      id: 'portfolio',
      name: 'Portfolio'
    };
    expect(validateProject(project)).toBe(false);
  });

  test('should reject project with invalid URL format', () => {
    const project = {
      id: 'portfolio',
      name: 'Portfolio',
      description: 'Personal portfolio website',
      image: 'invalid-url',
      technologies: ['React']
    };
    expect(validateProject(project)).toBe(false);
  });

  test('should validate project with optional fields', () => {
    const project = {
      id: 'portfolio',
      name: 'Portfolio',
      description: 'Personal portfolio website',
      image: 'https://example.com/image.png',
      technologies: ['React'],
      githubUrl: 'https://github.com/user/repo',
      demoUrl: 'https://demo.com',
      tags: ['react', 'portfolio'],
      status: 'completed'
    };
    expect(validateProject(project)).toBe(true);
  });
});
```

#### PersonalInfo 数据验证
```typescript
describe('PersonalInfo Data Validation', () => {
  test('should validate personal info with required fields', () => {
    const info = {
      name: 'John Doe',
      title: 'Software Engineer',
      bio: 'Experienced full-stack developer'
    };
    expect(validatePersonalInfo(info)).toBe(true);
  });

  test('should reject personal info without required fields', () => {
    const info = {
      name: 'John Doe'
    };
    expect(validatePersonalInfo(info)).toBe(false);
  });
});
```

---

## 组件单元测试

### Header 组件测试
```typescript
describe('Header Component', () => {
  test('should render all nav items', () => {
    const navItems = [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ];
    
    render(<Header navItems={navItems} />);
    
    navItems.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('should highlight active nav item based on scroll position', () => {
    // Mock scroll position
    window.scrollTo = jest.fn();
    
    render(<Header navItems={[{ label: 'Home', href: '#home' }]} />);
    
    // Simulate scroll to home section
    expect(screen.getByText('Home')).toHaveClass('active');
  });

  test('should toggle mobile menu when hamburger button is clicked', () => {
    render(<Header navItems={[{ label: 'Home', href: '#home' }]} />);
    
    const hamburger = screen.getByRole('button');
    fireEvent.click(hamburger);
    
    expect(screen.getByText('Home')).toBeVisible();
    
    fireEvent.click(hamburger);
    expect(screen.getByText('Home')).not.toBeVisible();
  });
});
```

### Hero 组件测试
```typescript
describe('Hero Component', () => {
  const defaultProps = {
    name: 'John Doe',
    title: 'Software Engineer',
    summary: 'Building amazing things with code',
    avatar: 'https://example.com/avatar.png',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com', icon: 'github' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' }
    ]
  };

  test('should render name, title, and summary', () => {
    render(<Hero {...defaultProps} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Building amazing things with code')).toBeInTheDocument();
  });

  test('should render avatar image', () => {
    render(<Hero {...defaultProps} />);
    
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.png');
    expect(avatar).toHaveAttribute('alt', 'John Doe');
  });

  test('should render social links', () => {
    render(<Hero {...defaultProps} />);
    
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', 'https://github.com');
    
    const linkedinLink = screen.getByLabelText('LinkedIn');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com');
  });

  test('should animate on scroll', () => {
    render(<Hero {...defaultProps} />);
    
    // Check animation classes are applied
    expect(screen.getByText('John Doe')).toHaveClass('animate-fadeIn');
  });
});
```

### Projects 组件测试
```typescript
describe('Projects Component', () => {
  const mockProjects = [
    {
      id: 'project-1',
      name: 'Project 1',
      description: 'Description of project 1',
      image: 'https://example.com/project1.png',
      technologies: ['React', 'TypeScript'],
      githubUrl: 'https://github.com/user/project1',
      demoUrl: 'https://demo.com/project1'
    }
  ];

  test('should render project cards', () => {
    render(<Projects projects={mockProjects} />);
    
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Description of project 1')).toBeInTheDocument();
  });

  test('should render technology tags', () => {
    render(<Projects projects={mockProjects} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  test('should render github and demo links', () => {
    render(<Projects projects={mockProjects} />);
    
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/user/project1');
    
    const demoLink = screen.getByLabelText('Demo');
    expect(demoLink).toHaveAttribute('href', 'https://demo.com/project1');
  });

  test('should lazy load images', () => {
    render(<Projects projects={mockProjects} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});
```

### Contact 组件测试
```typescript
describe('Contact Component', () => {
  const defaultProps = {
    email: 'john@example.com',
    github: 'https://github.com/john',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com', icon: 'github' }
    ]
  };

  test('should render email', () => {
    render(<Contact {...defaultProps} />);
    
    const emailLink = screen.getByText('john@example.com');
    expect(emailLink).toHaveAttribute('href', 'mailto:john@example.com');
  });

  test('should copy email to clipboard on click', async () => {
    navigator.clipboard.writeText = jest.fn();
    
    render(<Contact {...defaultProps} />);
    
    const email = screen.getByText('john@example.com');
    fireEvent.click(email);
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('john@example.com');
  });

  test('should show copy success message', async () => {
    navigator.clipboard.writeText = jest.fn().mockResolvedValue(undefined);
    
    render(<Contact {...defaultProps} />);
    
    const email = screen.getByText('john@example.com');
    fireEvent.click(email);
    
    expect(await screen.findByText('Copied!')).toBeInTheDocument();
  });
});
```

---

## E2E 测试

### 页面导航测试
```typescript
describe('Page Navigation', () => {
  test('should navigate to all sections via header', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=About');
    await expect(page).toHaveURL(/about/);
    
    await page.click('text=Projects');
    await expect(page).toHaveURL(/projects/);
    
    await page.click('text=Contact');
    await expect(page).toHaveURL(/contact/);
  });

  test('should scroll to section when clicking nav item', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=About');
    const aboutSection = await page.$('#about');
    const box = await aboutSection.boundingBox();
    
    expect(box.y).toBeLessThan(100);
  });
});
```

### 响应式测试
```typescript
describe('Responsive Design', () => {
  test('should show hamburger menu on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await page.click('[aria-label="Toggle menu"]');
    
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should show full nav on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('[aria-label="Toggle menu"]')).toBeHidden();
  });
});
```

### 交互测试
```typescript
describe('User Interactions', () => {
  test('should copy email to clipboard', async ({ page }) => {
    await page.goto('/');
    
    await page.click('#contact [data-testid="email"]');
    
    await expect(page.locator('text=Copied!')).toBeVisible();
  });

  test('should open github link in new tab', async ({ page }) => {
    await page.goto('/');
    
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('#contact [aria-label="GitHub"]')
    ]);
    
    await expect(newPage).toHaveURL(/github/);
  });
});
```

---

## 视觉回归测试

### 测试场景
| 场景 | 设备 | 尺寸 |
|------|------|------|
| 首页 Hero | 桌面端 | 1280x800 |
| 首页 Hero | 平板端 | 768x1024 |
| 首页 Hero | 移动端 | 375x667 |
| 项目列表 | 桌面端 | 1280x800 |
| 项目列表 | 移动端 | 375x667 |
| 技能展示 | 桌面端 | 1280x800 |
| 联系方式 | 桌面端 | 1280x800 |

### 测试命令
```bash
npm run test:visual
```

---

## 性能测试

### 测试指标
| 指标 | 目标值 |
|------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TTI (Time to Interactive) | < 3.8s |

### 测试命令
```bash
npm run test:performance
```

---

## 测试覆盖标准

### 单元测试覆盖
- 组件渲染：100%
- 组件交互：80%
- 数据验证：100%

### E2E 测试覆盖
- 主要用户流程：100%
- 响应式布局：100%
- 关键交互：100%

### 视觉测试覆盖
- 所有页面：100%
- 所有断点：100%

---

## 测试脚本

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest watch",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:visual": "percy exec -- npm run test:e2e",
    "test:performance": "lighthouse http://localhost:5173 --view"
  }
}
```