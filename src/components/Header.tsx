import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(() => {
    return !!sessionStorage.getItem('appLoaded');
  });

  useEffect(() => {
    if (!showLogo) {
      const timer = setTimeout(() => setShowLogo(true), 4500);
      return () => clearTimeout(timer);
    }
  }, [showLogo]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleNav = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-background border-white/10 py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {showLogo ? (
            <motion.div
              layoutId="main-logo"
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer flex items-center justify-center w-12 h-12"
              onClick={() => handleNav("hero")}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-foreground"
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
            </motion.div>
          ) : (
            <div className="w-12 h-12" />
          )}

          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate("/projects")}
              className="font-display text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => handleNav("contact")}
              className="font-display text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
