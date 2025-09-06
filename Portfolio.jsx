import React, { useState, useEffect } from 'react';
import { Mail, Code, User, Briefcase, GraduationCap, ExternalLink, Github, ChevronDown, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Eine moderne E-Commerce-Plattform mit React und responsivem Design. Inkludiert Warenkorb-Funktionalität und Benutzerregistrierung.",
      tech: ["React", "CSS", "JavaScript"],
      demo: "#",
      code: "#"
    },
    {
      title: "Task Management App",
      description: "Eine intuitive To-Do-App mit drag-and-drop Funktionalität, lokaler Datenspeicherung und modernem UI Design.",
      tech: ["JavaScript", "HTML", "CSS"],
      demo: "#",
      code: "#"
    },
    {
      title: "Portfolio Template",
      description: "Ein responsives Portfolio-Template für Entwickler mit dunklem/hellem Modus und Smooth-Scrolling Navigation.",
      tech: ["React", "CSS", "JavaScript"],
      demo: "#",
      code: "#"
    }
  ];

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Webentwicklung", level: 80 },
    { name: "Responsive Design", level: 85 }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-lg ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center`}>
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">Ryan Ruppert</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-500 ${
                    activeSection === section ? 'text-blue-500 font-medium' : ''
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`w-24 h-24 mx-auto mb-8 rounded-full ${darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-purple-500'} flex items-center justify-center shadow-lg`}>
            <Code className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ryan Ruppert
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Kaufmännischer Assistent in Informationsverarbeitung
          </p>
          <p className={`text-lg mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            Leidenschaftlicher Webentwickler mit Fokus auf moderne Technologien und kreative Lösungen
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-transform hover:scale-105 shadow-lg"
            >
              Meine Projekte ansehen
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`border-2 ${darkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-50'} px-8 py-4 rounded-lg font-medium transition-colors`}
            >
              Kontakt aufnehmen
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Über mich</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-8 rounded-2xl shadow-lg`}>
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Mein Profil</h3>
              </div>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ich absolviere derzeit mein Fachabitur als kaufmännischer Assistent in Informationsverarbeitung 
                und entwickle nebenbei leidenschaftlich gerne Webseiten und Anwendungen.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Interessen</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Informatik, Anwendungsentwicklung, moderne Webtechnologien
                </p>
              </div>
              
              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                <h4 className="text-lg font-semibold mb-3 text-purple-600">Stärken</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
                    Kreativität
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
                    Organisation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologien</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-sm text-blue-600 font-medium">{skill.level}%</span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meine Projekte</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105`}>
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                    <button className={`flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} px-4 py-2 rounded-lg transition-colors`}>
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Schule & Coding</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Ausbildung</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Fachabitur</h4>
                  <p className="text-blue-600">Kaufmännischer Assistent in Informationsverarbeitung</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>11. Klasse - Aktuell</p>
                </div>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold">Nebentätigkeit</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Coding auf Anfrage</h4>
                  <p className="text-purple-600">Webentwicklung & Custom Solutions</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Entwicklung von Webseiten und Anwendungen nach Kundenwunsch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Kontakt</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-xl p-8 text-center`}>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lass uns zusammenarbeiten!</h3>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Hast du ein spannendes Projekt oder möchtest mehr über meine Arbeit erfahren? 
              Schreib mir gerne eine E-Mail!
            </p>
            <a
              href="mailto:ryanruppert.bussines@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              ryanruppert.bussines@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 Ryan Ruppert. Alle Rechte vorbehalten.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;