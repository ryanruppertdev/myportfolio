import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from './Portfolio';

interface ProjectsProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

type FilterType = 'all' | 'webapp' | 'website' | 'mobile';

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'webapp', label: 'Web Apps' },
  { value: 'website', label: 'Websites' },
  { value: 'mobile', label: 'Mobile' }
];

function ProjectCard({ project, index, onSelect }: { 
  project: Project; 
  index: number; 
  onSelect: (project: Project) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
      data-testid={`project-card-${project.id}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(project)}
            className="px-6 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            data-testid={`button-details-${project.id}`}
          >
            Details ansehen
          </motion.button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
              data-testid={`tech-tag-${tech.toLowerCase()}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.05 }}
            className="text-primary hover:text-primary/80 transition-colors flex items-center"
            data-testid={`link-github-${project.id}`}
          >
            <FaGithub className="mr-1" />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.05 }}
            className="text-primary hover:text-primary/80 transition-colors flex items-center"
            data-testid={`link-demo-${project.id}`}
          >
            <FaExternalLinkAlt className="mr-1" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ projects, onProjectSelect }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meine <span className="text-primary">Projekte</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eine Auswahl meiner besten Arbeiten - von Webseiten bis hin zu komplexen Webanwendungen
          </p>
        </motion.div>
        
        {/* Project Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.value}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full border-2 border-primary font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-primary text-primary-foreground'
                  : 'text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
              data-testid={`filter-button-${filter.value}`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={onProjectSelect}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
