import { GitBranch, ExternalLink, MessageCircle, Mail, Globe, Code2, Type, Layout, Server, Terminal, Database, Container, Cloud, Package, Zap } from 'lucide-react';

export const iconMap: Record<string, React.ReactNode> = {
  Github: <GitBranch size={20} />,
  Linkedin: <ExternalLink size={20} />,
  Twitter: <MessageCircle size={20} />,
  Mail: <Mail size={20} />,
  Globe: <Globe size={20} />,
  React: <Code2 size={20} />,
  TypeScript: <Type size={20} />,
  Vue: <Layout size={20} />,
  Node: <Server size={20} />,
  Python: <Terminal size={20} />,
  Database: <Database size={20} />,
  Container: <Container size={20} />,
  Cloud: <Cloud size={20} />,
  GitBranch: <GitBranch size={20} />,
  Package: <Package size={20} />,
  Zap: <Zap size={20} />
};

export const iconMapLarge: Record<string, React.ReactNode> = {
  Github: <GitBranch size={24} />,
  Linkedin: <ExternalLink size={24} />,
  Twitter: <MessageCircle size={24} />,
  Mail: <Mail size={24} />,
  Globe: <Globe size={24} />
};

export const iconMapSmall: Record<string, React.ReactNode> = {
  Github: <GitBranch size={16} />,
  ExternalLink: <ExternalLink size={16} />
};