import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from 'react-icons/fa';

export default function Hero() {
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
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Hi, ich bin <br />
                <span className="text-gradient">
                  Developer
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl mt-6 text-gray-200"
              >
                Fullstack-Entwickler mit Leidenschaft für moderne Webtechnologien und benutzerfreundliche Designs
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#projects')}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                data-testid="button-projects"
              >
                Projekte ansehen
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#contact')}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                data-testid="button-contact"
              >
                Kontakt aufnehmen
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex space-x-6"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#facc15' }}
                className="text-white hover:text-yellow-400 transition-colors duration-300"
                data-testid="link-github"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#facc15' }}
                className="text-white hover:text-yellow-400 transition-colors duration-300"
                data-testid="link-linkedin"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#facc15' }}
                className="text-white hover:text-yellow-400 transition-colors duration-300"
                data-testid="link-twitter"
              >
                <FaTwitter className="text-2xl" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-80 h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=1000"
                alt="Professional developer portrait from waist up"
                className="w-full h-full object-cover"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => handleNavClick('#about')}
          data-testid="scroll-indicator"
        >
          <FaChevronDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
