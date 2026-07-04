import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import { projects as enProjects } from '../data/en';
import { projects as zhProjects } from '../data/zh';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();
  const t = translations[language];
  const projects = language === 'en' ? enProjects : zhProjects;

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'paused':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status?: string) => {
    switch (status) {
      case 'completed':
        return t.projects.status.completed;
      case 'in-progress':
        return t.projects.status['in-progress'];
      case 'paused':
        return t.projects.status.paused;
      default:
        return 'Unknown';
    }
  };

  return (
    <section id="projects" ref={ref} className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.projects.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-glow transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {project.status && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background rounded text-xs text-text-secondary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-2 bg-background rounded-lg text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={t.projects.github}
                    >
                      <GitBranch size={16} />
                      <span className="text-sm">{t.projects.github}</span>
                    </motion.a>
                  )}
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-2 bg-primary rounded-lg text-white hover:bg-secondary transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={t.projects.demo}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">{t.projects.demo}</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;