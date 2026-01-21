import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="font-display text-xl font-bold text-foreground cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          JMJ
        </motion.span>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
          >
            Contact
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
