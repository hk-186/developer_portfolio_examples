import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import { useTheme } from '../i18n/ThemeContext';
import { navRoutes } from '../data/nav';
import { useScroll, useScrollTo, useCurrentSection } from '../hooks/useScroll';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  
  const { isScrolled } = useScroll(50);
  const scrollTo = useScrollTo();
  const currentSection = useCurrentSection(['#home', '#about', '#projects', '#contact']);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollTo(href);
  };

  const isActive = (href: string) => currentSection === href;

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
      role="navigation"
      aria-label="Main navigation"
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
            aria-label="Home"
          >
            Kevin
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {navRoutes.map((route) => (
              <motion.a
                key={route.label}
                href={route.href}
                className={`transition-colors duration-200 relative ${
                  isActive(route.href)
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-foreground'
                }`}
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(route.href);
                }}
                aria-current={isActive(route.href) ? 'page' : undefined}
              >
                {t.nav[route.label as keyof typeof t.nav]}
                {isActive(route.href) && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-card border border-border text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : '切换到深色模式'}
              title={theme === 'dark' ? 'Switch to light mode' : '切换到深色模式'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-card border border-border text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
              title={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
            </motion.button>

            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
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
          <nav className="px-4 py-4 space-y-4" aria-label="Mobile navigation">
            {navRoutes.map((route) => (
              <a
                key={route.label}
                href={route.href}
                className={`block transition-colors duration-200 py-2 ${
                  isActive(route.href)
                    ? 'text-primary font-medium'
                    : 'text-text-secondary hover:text-foreground'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(route.href);
                }}
                aria-current={isActive(route.href) ? 'page' : undefined}
              >
                {t.nav[route.label as keyof typeof t.nav]}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;