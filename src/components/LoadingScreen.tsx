
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize text animation
    gsap.set(".logo-text", { y: 50, opacity: 0 });
    
    // Create animation timeline
    const tl = gsap.timeline();
    
    tl.to(".logo-text", { 
      y: 0, 
      opacity: 1, 
      duration: 1.2, 
      ease: "back.out(1.7)" 
    });

    // Wait for 2.5 seconds before hiding the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
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
          <div className="name-container overflow-hidden py-8">
            <motion.h1
              className="logo-text font-display text-white text-4xl sm:text-6xl tracking-widest uppercase font-bold"
              initial={{ y: 50, opacity: 0 }}
            >
              Omega Slayers
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
