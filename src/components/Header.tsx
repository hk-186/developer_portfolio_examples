import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

const navRoutes = ['home', 'about', 'projects', 'contact'];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            {language === 'en' ? 'Alex Chen' : '陈亚历克斯'}
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {navRoutes.map((route) => (
              <motion.a
                key={route}
                href={`#${route}`}
                className="text-text-secondary hover:text-foreground transition-colors duration-200"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${route}`);
                }}
              >
                {t.nav[route as keyof typeof t.nav]}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-card border border-border text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
            </motion.button>

            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <nav className="px-4 py-4 space-y-4">
            {navRoutes.map((route) => (
              <a
                key={route}
                href={`#${route}`}
                className="block text-text-secondary hover:text-foreground transition-colors duration-200 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${route}`);
                }}
              >
                {t.nav[route as keyof typeof t.nav]}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;