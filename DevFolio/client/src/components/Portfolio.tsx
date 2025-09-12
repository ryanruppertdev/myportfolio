import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ProjectModal from './ProjectModal';
import { useState } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'webapp' | 'website' | 'mobile';
  technologies: string[];
  features: string[];
  challenges: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-Commerce Platform',
    description: 'Moderne Shopping-Plattform mit React, Stripe-Integration und responsivem Design',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500',
    category: 'webapp',
    technologies: ['React', 'Stripe', 'Tailwind'],
    features: ['Responsive Design', 'Stripe-Integration', 'Produktverwaltung', 'Warenkorb-System', 'User Authentication'],
    challenges: 'Die größte Herausforderung war die Integration verschiedener Zahlungsmethoden und die Optimierung der Performance.',
    github: '#',
    demo: '#'
  },
  {
    id: 'project2',
    title: 'Task Manager',
    description: 'Kollaborative Projektmanagement-App mit Real-time Updates und Team-Features',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500',
    category: 'webapp',
    technologies: ['React', 'Socket.io', 'Node.js'],
    features: ['Real-time Collaboration', 'Task Assignment', 'Progress Tracking', 'Team Management', 'Notifications'],
    challenges: 'Die Integration von Socket.io für Real-time Updates und die Skalierung für mehrere Teams.',
    github: '#',
    demo: '#'
  },
  {
    id: 'project3',
    title: 'Restaurant Website',
    description: 'Elegante Restaurant-Website mit Online-Bestellsystem und Reservierungsmanagement',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500',
    category: 'website',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Online Reservierung', 'Menü-Verwaltung', 'Kontaktformular', 'Bildergalerie', 'Mobile Optimierung'],
    challenges: 'Die Herausforderung war die nahtlose Integration des Reservierungssystems und die Optimierung für mobile Geräte.',
    github: '#',
    demo: '#'
  },
  {
    id: 'project4',
    title: 'Fitness Tracker',
    description: 'Mobile-First Fitness-App mit Tracking-Features und personalisierten Trainingsplänen',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Charts'],
    features: ['Workout Tracking', 'Progress Charts', 'Personal Training Plans', 'Social Features', 'Nutrition Tracking'],
    challenges: 'Die Entwicklung einer benutzerfreundlichen Mobile-App mit komplexen Chart-Funktionen.',
    github: '#',
    demo: '#'
  },
  {
    id: 'project5',
    title: 'Creative Portfolio',
    description: 'Animierte Portfolio-Website für Kreative mit interaktiven Elementen und Parallax-Effekten',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500',
    category: 'website',
    technologies: ['Framer Motion', 'GSAP', 'React'],
    features: ['Parallax Effects', 'Smooth Animations', 'Interactive Gallery', 'Contact Form', 'SEO Optimized'],
    challenges: 'Die Implementation komplexer Animationen und die Optimierung der Performance bei vielen visuellen Effekten.',
    github: '#',
    demo: '#'
  },
  {
    id: 'project6',
    title: 'Analytics Dashboard',
    description: 'Interaktives Dashboard für Datenvisualisierung mit Charts und Real-time Updates',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500',
    category: 'webapp',
    technologies: ['D3.js', 'Chart.js', 'API'],
    features: ['Real-time Data', 'Interactive Charts', 'Export Functions', 'User Management', 'Custom Dashboards'],
    challenges: 'Die Integration verschiedener Chart-Libraries und die Optimierung der Datenverarbeitung für große Datensätze.',
    github: '#',
    demo: '#'
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} onProjectSelect={setSelectedProject} />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Developer Portfolio. Alle Rechte vorbehalten. 
              <span className="text-primary ml-2">Made with ❤️ and code</span>
            </p>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
