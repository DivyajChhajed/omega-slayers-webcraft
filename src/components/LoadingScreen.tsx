
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3.5 seconds before hiding the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: {
              duration: 1.5
            }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [0.8, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 mb-6"
          >
            <svg 
              id="svg" 
              className="w-full h-full" 
              viewBox="0 0 500 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 314 144 L 316 144 L 429 144 L 430 144 L 430 146 L 430 254 L 430 256 L 428 256 L 311 256 L 309 256 L 309 254 L 309 146 L 309 144 Z"
                stroke="white"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 188 95 L 190 95 L 303 95 L 305 95 L 305 97 L 305 209 L 305 211 L 303 211 L 224 211 L 224 213 L 224 325 L 224 327 L 222 327 L 188 327 L 186 327 L 186 325 L 186 97 L 186 95 Z"
                stroke="white"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 70 173 L 72 173 L 161 173 L 163 173 L 163 175 L 163 405 L 163 407 L 161 407 L 72 407 L 70 407 L 70 405 L 70 175 L 70 173 Z"
                stroke="white"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />
              <motion.path
                d="M 430 144 L 432 144 L 475 144 L 477 144 L 477 146 L 477 178 L 477 180 L 475 180 L 432 180 L 430 180 L 430 178 L 430 146 L 430 144 Z"
                stroke="#e61b23"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
          
          <motion.div className="name-container h-10 overflow-hidden">
            <motion.h2
              className="logo-name font-display text-white text-xl tracking-widest uppercase font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                  delay: 1.5
                }
              }}
            >
              Omega Slayers
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
