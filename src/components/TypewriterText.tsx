import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 0, speed = 50, className = "" }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Typing complete, blink cursor a few times then hide
      const blinkInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      const hideCursor = setTimeout(() => {
        clearInterval(blinkInterval);
        setShowCursor(false);
      }, 3000);

      return () => {
        clearInterval(blinkInterval);
        clearTimeout(hideCursor);
      };
    }
  }, [displayedText, text, speed, isTyping]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block w-0.5 h-[1.2em] bg-primary ml-1 align-middle"
      />
    </motion.span>
  );
};

export default TypewriterText;
