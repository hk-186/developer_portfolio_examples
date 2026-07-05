export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';

export type ProjectStatus = 'completed' | 'in-progress' | 'paused';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  icon?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  tags?: string[];
  status?: ProjectStatus;
  startDate?: string;
  endDate?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  blog?: string;
  resume?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  location?: string;
  summary?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}