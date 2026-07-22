import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 border-t border-white/10 bg-transparent relative"
    >
      <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="cursor-pointer flex items-center justify-center w-12 h-12" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-foreground hover:text-primary transition-colors duration-300"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 38 20 L 48 20 L 30 80 L 15 60 L 23 60 L 25.1 62.8 Z" />
            <path 
              d="M 54 20 L 70 20 L 76 30 L 64 70 L 58 80 L 36 80 Z M 59 32 L 47 68 L 53 68 L 67 32 Z" 
              fillRule="evenodd" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Jesu Mariya Joe D. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/jesumjoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm font-display uppercase tracking-widest">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jesumjoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm font-display uppercase tracking-widest">
            LinkedIn
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
