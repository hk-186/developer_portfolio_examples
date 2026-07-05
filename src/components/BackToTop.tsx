import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScroll, useScrollTo } from '../hooks/useScroll';

const BackToTop = () => {
  const { isScrolled } = useScroll(300);
  const scrollTo = useScrollTo();

  const handleClick = () => {
    scrollTo('#home');
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={isScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-glow hover:shadow-glow-hover hover:bg-secondary transition-all duration-300 z-50"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

export default BackToTop;