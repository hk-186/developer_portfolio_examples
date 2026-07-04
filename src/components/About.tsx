import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Code2, Type, Layout, Server, Terminal, Database, Container, Cloud, GitBranch, Package, Zap } from 'lucide-react';
import type { PersonalInfo, Skill } from '../types';

interface AboutProps {
  personalInfo: PersonalInfo;
  skills: Skill[];
}

const About = ({ personalInfo, skills }: AboutProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iconMap: Record<string, React.ReactNode> = {
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

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="about" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            {personalInfo.bio}
          </p>
          {personalInfo.location && (
            <div className="flex items-center justify-center text-text-muted">
              <MapPin size={18} className="mr-2" />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Skills</h3>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-card border border-border text-text-secondary hover:text-foreground hover:border-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {iconMap[skill.icon || 'Package']}
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-text-muted text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;