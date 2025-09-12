import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaHtml5, FaJs, FaReact, FaServer } from 'react-icons/fa';

const skills = [
  {
    name: 'HTML/CSS',
    level: 95,
    icon: FaHtml5,
    color: 'text-orange-500'
  },
  {
    name: 'JavaScript',
    level: 90,
    icon: FaJs,
    color: 'text-yellow-500'
  },
  {
    name: 'React',
    level: 85,
    icon: FaReact,
    color: 'text-blue-500'
  },
  {
    name: 'APIs',
    level: 80,
    icon: FaServer,
    color: 'text-green-500'
  }
];

const technologies = ['React', 'TypeScript', 'Node.js', 'Tailwind'];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, index]);

  const IconComponent = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
      data-testid={`skill-card-${skill.name.toLowerCase().replace('/', '-')}`}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
          <IconComponent className={`text-2xl ${skill.color}`} />
        </div>
        <div>
          <h4 className="font-semibold text-card-foreground">{skill.name}</h4>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Über mich & <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ich bin ein leidenschaftlicher Fullstack-Entwickler mit über 3 Jahren Erfahrung in der Entwicklung 
            moderner Webanwendungen. Meine Expertise liegt in React, Node.js und modernen Web-Technologien.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">Mein Weg</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seit ich das erste Mal eine Webseite erstellt habe, war ich fasziniert von der Macht des Codes, 
              Ideen zum Leben zu erwecken. Was als Hobby begann, hat sich zu einer Leidenschaft entwickelt, 
              die mich täglich antreibt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ich spezialisiere mich auf die Entwicklung responsiver, benutzerfreundlicher Anwendungen 
              mit modernen Technologien wie React, TypeScript und Node.js. Dabei lege ich besonderen 
              Wert auf sauberen Code und optimale User Experience.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  data-testid={`tech-badge-${tech.toLowerCase()}`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
