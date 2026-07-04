import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, ExternalLink, MessageCircle, Mail, Globe, Copy, Check } from 'lucide-react';
import type { ContactInfo, SocialLink } from '../types';

interface ContactProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

const Contact = ({ contactInfo, socialLinks }: ContactProps) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iconMap: Record<string, React.ReactNode> = {
    Github: <GitBranch size={24} />,
    Linkedin: <ExternalLink size={24} />,
    Twitter: <MessageCircle size={24} />,
    Mail: <Mail size={24} />,
    Globe: <Globe size={24} />
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            
            <motion.button
              onClick={copyEmail}
              className="w-full flex items-center justify-center space-x-3 p-4 bg-primary/10 border border-primary rounded-xl hover:bg-primary/20 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="text-primary" size={24} />
              <span className="text-lg font-medium">{contactInfo.email}</span>
              <div className="ml-auto">
                {copied ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center space-x-1 text-green-500"
                  >
                    <Check size={20} />
                    <span className="text-sm">Copied!</span>
                  </motion.span>
                ) : (
                  <Copy size={20} className="text-text-muted" />
                )}
              </div>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-text-muted mt-8 text-lg"
          >
            Let's build something amazing together!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;