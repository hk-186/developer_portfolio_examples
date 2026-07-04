import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

interface FooterProps {
  year?: number;
}

const Footer = ({ year = new Date().getFullYear() }: FooterProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
          <p className="text-text-muted text-sm">
            © {year} Kevin. {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;