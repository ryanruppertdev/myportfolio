import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { Project } from './Portfolio';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          data-testid="project-modal"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground">{project.title}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="modal-close-button"
                >
                  <FaTimes className="text-2xl" />
                </motion.button>
              </div>
              
              <div className="space-y-6">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                  data-testid="modal-project-image"
                />
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Beschreibung</h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Features</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} data-testid={`modal-feature-${index}`}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Technologien</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          data-testid={`modal-tech-${tech.toLowerCase()}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Herausforderungen</h4>
                    <p className="text-muted-foreground">{project.challenges}</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 pt-4 border-t border-border"
                  >
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                      data-testid="modal-github-link"
                    >
                      GitHub Repository
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                      data-testid="modal-demo-link"
                    >
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
