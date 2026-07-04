export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      summary: 'Building digital experiences that delight users'
    },
    about: {
      title: 'About Me',
      skills: 'Skills',
      categories: {
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        devops: 'DevOps',
        tools: 'Tools'
      }
    },
    projects: {
      title: 'Projects',
      status: {
        completed: 'Completed',
        'in-progress': 'In Progress',
        paused: 'Paused'
      },
      github: 'GitHub',
      demo: 'Demo'
    },
    contact: {
      title: 'Contact',
      getInTouch: 'Get In Touch',
      copied: 'Copied!',
      cta: "Let's build something amazing together!"
    },
    footer: {
      copyright: 'All rights reserved.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      projects: '项目',
      contact: '联系'
    },
    hero: {
      summary: '打造令人愉悦的数字体验'
    },
    about: {
      title: '关于我',
      skills: '技能',
      categories: {
        all: '全部',
        frontend: '前端',
        backend: '后端',
        database: '数据库',
        devops: '运维',
        tools: '工具'
      }
    },
    projects: {
      title: '项目作品',
      status: {
        completed: '已完成',
        'in-progress': '进行中',
        paused: '已暂停'
      },
      github: 'GitHub',
      demo: '演示'
    },
    contact: {
      title: '联系方式',
      getInTouch: '联系我',
      copied: '已复制!',
      cta: '让我们一起打造精彩的项目！'
    },
    footer: {
      copyright: '保留所有权利。'
    }
  }
};

export type TranslationKey = keyof typeof translations.en;