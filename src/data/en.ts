import type { PersonalInfo, Skill, Project, ContactInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Kevin',
  title: 'Full Stack Developer',
  bio: 'I\'m a passionate full-stack developer with years of experience building scalable web applications. I specialize in React, Node.js, and cloud-native technologies. I love coding and solving problems.',
  avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20software%20developer%20portrait%20headshot%20dark%20background%20modern%20style%20asian%20male&image_size=square',
  location: 'Wuhan, China',
  summary: 'Building digital experiences that delight users'
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
    name: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and secure payment integration.',
    longDescription: 'Built a scalable e-commerce platform using React, Node.js, and PostgreSQL. Features include: real-time inventory tracking, secure Stripe payment processing, user authentication with JWT, and admin dashboard with analytics.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20website%20dashboard%20dark%20theme%20clean%20UI%20design&image_size=landscape_16_9',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/alexchen/e-commerce-platform',
    demoUrl: 'https://demo.ecommerce.com',
    tags: ['e-commerce', 'full-stack', 'react'],
    status: 'completed',
    startDate: '2024-01-15',
    endDate: '2024-06-30'
  },
  {
    id: 'task-management-app',
    name: 'Task Management App',
    description: 'A collaborative task management application with drag-and-drop functionality and team workspaces.',
    longDescription: 'Developed a task management application with features like: Kanban board view, drag-and-drop task management, team collaboration, real-time notifications, and customizable workflows.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kanban%20task%20management%20board%20dark%20theme%20productivity%20app%20UI&image_size=landscape_16_9',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/alexchen/task-management-app',
    demoUrl: 'https://demo.taskmanager.com',
    tags: ['productivity', 'vue', 'collaboration'],
    status: 'completed',
    startDate: '2024-03-01',
    endDate: '2024-08-15'
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    description: 'A beautiful weather application with 7-day forecast and weather maps.',
    longDescription: 'Created a weather application using React and OpenWeatherMap API. Features include: current weather conditions, 7-day forecast, interactive weather maps, and location-based weather updates.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=weather%20application%20interface%20dark%20theme%20modern%20design%20clouds%20sun&image_size=landscape_16_9',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/alexchen/weather-app',
    demoUrl: 'https://demo.weatherapp.com',
    tags: ['react', 'api', 'weather'],
    status: 'completed',
    startDate: '2024-05-20',
    endDate: '2024-07-10'
  },
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills.',
    longDescription: 'Built a modern personal portfolio website with smooth animations and responsive design. Features include: dark theme, scroll animations, project showcase, and contact section.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20developer%20portfolio%20website%20dark%20theme%20professional%20clean%20design&image_size=landscape_16_9',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/alexchen/portfolio',
    demoUrl: 'https://alexchen.dev',
    tags: ['portfolio', 'react', 'animation'],
    status: 'in-progress',
    startDate: '2024-09-01'
  },
  {
    id: 'api-gateway',
    name: 'API Gateway',
    description: 'A microservices API gateway with authentication and rate limiting.',
    longDescription: 'Designed and implemented an API gateway for microservices architecture. Features include: JWT authentication, rate limiting, request logging, and service discovery.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=api%20gateway%20dashboard%20microservices%20dark%20theme%20tech%20infrastructure&image_size=landscape_16_9',
    technologies: ['Node.js', 'Express', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/alexchen/api-gateway',
    tags: ['backend', 'api', 'microservices'],
    status: 'completed',
    startDate: '2024-02-10',
    endDate: '2024-04-30'
  },
  {
    id: 'chat-app',
    name: 'Real-time Chat App',
    description: 'A real-time chat application with private messaging and group chats.',
    longDescription: 'Developed a real-time chat application with WebSocket technology. Features include: private messaging, group chats, message read receipts, and online status indicators.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=real-time%20chat%20application%20interface%20dark%20theme%20messaging%20app%20UI&image_size=landscape_16_9',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/alexchen/chat-app',
    demoUrl: 'https://demo.chatapp.com',
    tags: ['real-time', 'chat', 'websocket'],
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
  { name: 'Email', url: 'mailto:hk186626169@163.com', icon: 'Mail' },
  { name: 'Website', url: 'https://huangkang.dev', icon: 'Globe' }
];