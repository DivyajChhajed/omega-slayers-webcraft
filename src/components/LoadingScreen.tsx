
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize GSAP animation for the logo
    gsap.set("#logo-path-left", { drawSVG: "0%" });
    gsap.set("#logo-path-right", { drawSVG: "0%" });
    gsap.set("#logo-path-accent", { drawSVG: "0%", opacity: 0 });
    
    // Create animation timeline
    const tl = gsap.timeline();
    
    tl.to("#logo-path-left", { drawSVG: "100%", duration: 1.5, ease: "power2.inOut" })
      .to("#logo-path-right", { drawSVG: "100%", duration: 1.5, ease: "power2.inOut" }, "-=0.8")
      .to("#logo-path-accent", { drawSVG: "100%", opacity: 1, duration: 0.8, ease: "power2.inOut" })
      .to(".logo-text", { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");

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
            className="relative w-48 h-48 mb-6"
          >
            <svg 
              viewBox="0 0 800 800" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* OS Logo - Left side (O) */}
              <path
                id="logo-path-left"
                d="M330 150 L 330 650 L 180 650 L 180 150 L 330 150 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              
              {/* OS Logo - Right side (S) */}
              <path
                id="logo-path-right"
                d="M380 150 L 620 150 L 620 350 L 450 350 L 450 400 L 620 400 L 620 650 L 380 650 L 380 450 L 550 450 L 550 400 L 380 400 L 380 150 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              
              {/* Red accent */}
              <path
                id="logo-path-accent"
                d="M620 150 L 700 150 L 700 250 L 620 250 Z"
                stroke="#e61b23"
                strokeWidth="6"
                fill="none"
              />
            </svg>
          </motion.div>
          
          <div className="name-container h-10 overflow-hidden">
            <motion.h2
              className="logo-text font-display text-white text-xl tracking-widest uppercase font-bold"
              initial={{ y: 50, opacity: 0 }}
            >
              Omega Slayers
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
