import { motion, AnimatePresence } from 'framer-motion';
import { X, GitBranch, ExternalLink, Calendar } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

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

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            aria-label="Close modal"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 max-w-4xl w-full max-h-[90vh] bg-card border border-border rounded-2xl overflow-hidden z-50 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${project.id}`}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-4 left-4 right-4">
                <h2 id={`modal-title-${project.id}`} className="text-2xl md:text-3xl font-bold mb-2">
                  {project.name}
                </h2>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  {(project.startDate || project.endDate) && (
                    <div className="flex items-center text-text-muted text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.startDate && formatDate(project.startDate)}
                      {project.startDate && project.endDate && ' - '}
                      {project.endDate && formatDate(project.endDate)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <p className="text-lg text-text-secondary mb-6">
                {project.longDescription || project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background rounded-lg text-sm text-text-secondary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.tags && project.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 rounded-lg text-sm text-primary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-background rounded-xl text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <GitBranch size={18} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-primary rounded-xl text-white hover:bg-secondary transition-colors"
                    aria-label="View demo"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;