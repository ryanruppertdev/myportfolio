import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <div className="text-2xl font-bold gradient-bg bg-clip-text text-transparent">
              <FaCode className="inline mr-2 text-primary" />
              Portfolio
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card hover:bg-muted transition-colors"
              data-testid="theme-toggle"
            >
              {theme === 'dark' ? (
                <FaSun className="text-foreground" />
              ) : (
                <FaMoon className="text-foreground" />
              )}
            </motion.button>
            
            <button
              className="md:hidden p-2 rounded-lg bg-card hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-foreground" />
              ) : (
                <FaBars className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        className="md:hidden glass-effect border-t border-border overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
