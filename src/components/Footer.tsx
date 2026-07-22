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
        <span className="font-display text-3xl font-bold text-foreground uppercase tracking-widest">
          JMJ.
        </span>
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
