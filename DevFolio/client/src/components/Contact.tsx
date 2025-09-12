import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane, FaSpinner, FaCheck } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'E-Mail',
    value: 'developer@example.com'
  },
  {
    icon: FaPhone,
    title: 'Telefon',
    value: '+49 123 456 789'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Standort',
    value: 'Berlin, Deutschland'
  }
];

const socialLinks = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' }
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Ich werde mich bald bei Ihnen melden.",
    });

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lass uns <span className="text-primary">zusammenarbeiten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hast du ein spannendes Projekt im Kopf? Ich freue mich darauf, von dir zu hören und gemeinsam etwas Großartiges zu erschaffen.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Kontakt Informationen</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-4"
                      data-testid={`contact-info-${info.title.toLowerCase()}`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-primary text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{info.title}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Folge mir</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      data-testid={`social-link-${social.label.toLowerCase()}`}
                    >
                      <IconComponent className="text-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-card-foreground"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-card-foreground"
                    data-testid="input-email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-card-foreground"
                  data-testid="input-subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-card-foreground resize-none"
                  data-testid="textarea-message"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.95 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-green-600 text-white cursor-default'
                    : isSubmitting
                    ? 'bg-primary/50 text-primary-foreground cursor-wait'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
                data-testid="button-submit"
              >
                {isSubmitted ? (
                  <>
                    <FaCheck />
                    <span>Gesendet!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <span>Nachricht senden</span>
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
