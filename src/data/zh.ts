import type { PersonalInfo, Skill, Project, ContactInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Kevin',
  title: '全栈开发工程师',
  bio: '我是一名充满热情的全栈开发者，拥有多年构建可扩展Web应用的经验。我专注于React、Node.js和云原生技术。热爱编程，善于解决问题。',
  avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20software%20developer%20portrait%20headshot%20dark%20background%20modern%20style%20asian%20male&image_size=square',
  location: '中国武汉',
  summary: '打造令人愉悦的数字体验'
};

export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'frontend', level: 95, icon: 'React' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', level: 90, icon: 'TypeScript' },
  { id: 'vue', name: 'Vue.js', category: 'frontend', level: 85, icon: 'Vue' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', level: 88, icon: 'Node' },
  { id: 'python', name: 'Python', category: 'backend', level: 75, icon: 'Python' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', level: 82, icon: 'Database' },
  { id: 'mongodb', name: 'MongoDB', category: 'database', level: 78, icon: 'Database' },
  { id: 'docker', name: 'Docker', category: 'devops', level: 80, icon: 'Container' },
  { id: 'aws', name: 'AWS', category: 'devops', level: 70, icon: 'Cloud' },
  { id: 'git', name: 'Git', category: 'tools', level: 92, icon: 'GitBranch' },
  { id: 'webpack', name: 'Webpack', category: 'tools', level: 80, icon: 'Package' },
  { id: 'vite', name: 'Vite', category: 'tools', level: 85, icon: 'Zap' }
];

export const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    name: '电商平台',
    description: '一个全栈电商平台，具有实时库存管理和安全支付集成功能。',
    longDescription: '使用React、Node.js和PostgreSQL构建了一个可扩展的电商平台。功能包括：实时库存跟踪、安全的Stripe支付处理、基于JWT的用户认证以及带分析功能的管理后台。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20website%20dashboard%20dark%20theme%20clean%20UI%20design&image_size=landscape_16_9',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/alexchen/e-commerce-platform',
    demoUrl: 'https://demo.ecommerce.com',
    tags: ['电商', '全栈', 'react'],
    status: 'completed',
    startDate: '2024-01-15',
    endDate: '2024-06-30'
  },
  {
    id: 'task-management-app',
    name: '任务管理应用',
    description: '一个协作任务管理应用，具有拖放功能和团队工作空间。',
    longDescription: '开发了一个任务管理应用，功能包括：看板视图、拖放任务管理、团队协作、实时通知和可定制的工作流程。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kanban%20task%20management%20board%20dark%20theme%20productivity%20app%20UI&image_size=landscape_16_9',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/alexchen/task-management-app',
    demoUrl: 'https://demo.taskmanager.com',
    tags: ['生产力', 'vue', '协作'],
    status: 'completed',
    startDate: '2024-03-01',
    endDate: '2024-08-15'
  },
  {
    id: 'weather-app',
    name: '天气应用',
    description: '一个精美的天气应用，具有7天预报和天气地图功能。',
    longDescription: '使用React和OpenWeatherMap API创建了一个天气应用。功能包括：当前天气状况、7天预报、交互式天气地图和基于位置的天气更新。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=weather%20application%20interface%20dark%20theme%20modern%20design%20clouds%20sun&image_size=landscape_16_9',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/alexchen/weather-app',
    demoUrl: 'https://demo.weatherapp.com',
    tags: ['react', 'api', '天气'],
    status: 'completed',
    startDate: '2024-05-20',
    endDate: '2024-07-10'
  },
  {
    id: 'portfolio-website',
    name: '个人作品集网站',
    description: '展示项目和技能的个人作品集网站。',
    longDescription: '构建了一个现代化的个人作品集网站，具有流畅的动画和响应式设计。功能包括：深色主题、滚动动画、项目展示和联系部分。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20developer%20portfolio%20website%20dark%20theme%20professional%20clean%20design&image_size=landscape_16_9',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/alexchen/portfolio',
    demoUrl: 'https://alexchen.dev',
    tags: ['作品集', 'react', '动画'],
    status: 'in-progress',
    startDate: '2024-09-01'
  },
  {
    id: 'api-gateway',
    name: 'API网关',
    description: '一个微服务API网关，具有认证和限流功能。',
    longDescription: '为微服务架构设计并实现了一个API网关。功能包括：JWT认证、速率限制、请求日志和服务发现。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=api%20gateway%20dashboard%20microservices%20dark%20theme%20tech%20infrastructure&image_size=landscape_16_9',
    technologies: ['Node.js', 'Express', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/alexchen/api-gateway',
    tags: ['后端', 'api', '微服务'],
    status: 'completed',
    startDate: '2024-02-10',
    endDate: '2024-04-30'
  },
  {
    id: 'chat-app',
    name: '实时聊天应用',
    description: '一个实时聊天应用，支持私人消息和群组聊天。',
    longDescription: '使用WebSocket技术开发了一个实时聊天应用。功能包括：私人消息、群组聊天、消息已读回执和在线状态指示。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=real-time%20chat%20application%20interface%20dark%20theme%20messaging%20app%20UI&image_size=landscape_16_9',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/alexchen/chat-app',
    demoUrl: 'https://demo.chatapp.com',
    tags: ['实时', '聊天', 'websocket'],
    status: 'paused',
    startDate: '2024-07-01'
  }
];

export const contactInfo: ContactInfo = {
  email: 'hk186626169@163.com',
  github: 'https://github.com/hk-186',
  linkedin: 'https://linkedin.com/in/huangkang',
  twitter: 'https://twitter.com/huangkang_dev',
  website: 'https://huangkang.dev'
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/hk-186', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/huangkang', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/huangkang_dev', icon: 'Twitter' },
  { name: '邮箱', url: 'mailto:hk186626169@163.com', icon: 'Mail' },
  { name: '网站', url: 'https://huangkang.dev', icon: 'Globe' }
];