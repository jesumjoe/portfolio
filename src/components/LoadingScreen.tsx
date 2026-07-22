import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loading screen after the animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation to finish before calling onComplete
    }, 4500); // Total display time before starting exit

    return () => clearTimeout(timer);
  }, [onComplete]);

  // J Path: M 38 20 L 48 20 L 30 80 L 15 60 L 23 60 L 25.1 62.8 Z
  // D Path: M 54 20 L 70 20 L 76 30 L 64 70 L 58 80 L 36 80 Z M 59 32 L 47 68 L 53 68 L 67 32 Z
  
  const jPath = "M 38 20 L 48 20 L 30 80 L 15 60 L 23 60 L 25.1 62.8 Z";
  const dPath = "M 54 20 L 70 20 L 76 30 L 64 70 L 58 80 L 36 80 Z M 59 32 L 47 68 L 53 68 L 67 32 Z";

  return (
    <AnimatePresence>
      {isVisible && (
        <React.Fragment>
          {/* Background Dissolve */}
          <motion.div
            className="fixed inset-0 z-[90] bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          />
          {/* Logo Container */}
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.div 
              layoutId="main-logo"
              className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8"
            >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* J */}
              <motion.path
                d={jPath}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="miter"
                fill="currentColor"
                className="text-foreground"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1], 
                  fillOpacity: [0, 0, 1] 
                }}
                transition={{ 
                  duration: 2.5, 
                  ease: "easeInOut",
                  times: [0, 0.6, 1],
                  delay: 0.2
                }}
              />
              
              <motion.path
                d={dPath}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="miter"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                className="text-foreground"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1], 
                  fillOpacity: [0, 0, 1] 
                }}
                transition={{ 
                  duration: 2.5, 
                  ease: "easeInOut",
                  times: [0, 0.6, 1],
                  delay: 0.4
                }}
              />
            </svg>
            </motion.div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
