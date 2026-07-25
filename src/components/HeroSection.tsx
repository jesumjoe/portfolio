import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { ShaderAnimation } from "./ui/shader-animation";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black pt-20"
    >
      <ShaderAnimation />
      <div className="w-full px-4 flex flex-col items-center justify-center relative z-10 select-none">
        {/* Massive Typography Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full leading-[0.85] text-center"
        >
          <div className="overflow-hidden flex items-center gap-4 md:gap-8 justify-center w-full px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="hidden md:flex h-2 md:h-3 lg:h-4 bg-primary flex-grow max-w-[60px] md:max-w-[120px] lg:max-w-[200px]"
            />
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[7.5vw] md:text-[5vw] lg:text-[4.5vw] font-bold text-foreground m-0 tracking-tight whitespace-nowrap flex items-center"
            >
              <span>J</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1.2, delay: 0.8, ease: "linear" }}
                className="overflow-hidden flex items-center"
              >
                <span>ESU MARIYA&nbsp;</span>
                <span className="text-primary">JOE&nbsp;</span>
              </motion.div>
              <span className="text-primary">D</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="hidden md:flex h-2 md:h-3 lg:h-4 bg-primary flex-grow max-w-[60px] md:max-w-[120px] lg:max-w-[200px]"
            />
          </div>
        </motion.div>

        {/* Subtitle / Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left max-w-4xl"
        >
          <div className="w-16 h-1 bg-foreground hidden md:block shrink-0" />
          <p className="text-xl md:text-2xl font-light text-muted-foreground uppercase tracking-widest leading-relaxed">
            Crafting fast, beautiful, and scalable web products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-display text-xl uppercase tracking-widest text-background bg-primary hover:bg-foreground hover:text-background transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Work
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-0 bg-foreground group-hover:w-full transition-all duration-300 ease-out z-0" />
          </button>
        </motion.div>
      </div>

      {/* Side social links - Stark styling */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-40"
      >
        <a
          href="https://github.com/jesumjoe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/jesumjoe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="Twitter"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
