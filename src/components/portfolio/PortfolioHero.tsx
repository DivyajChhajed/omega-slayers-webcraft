
import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">OUR <span className="text-[#ff0000]">PORTFOLIO</span></h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our past events, product launches, and tournaments that showcase our expertise in event management and marketing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
