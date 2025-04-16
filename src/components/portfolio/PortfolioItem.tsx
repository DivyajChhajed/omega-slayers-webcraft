
import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from '@/components/CountUp';

interface Stat {
  value: string;
  label: string;
}

interface PortfolioItemProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: {
    challenge: string;
    execution: string;
    outcome: string;
    stats: Stat[];
  };
  index: number;
}

const PortfolioItem = ({ id, title, subtitle, image, description, index }: PortfolioItemProps) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-16 bg-white relative"
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
          {/* Project Image with Special Shape */}
          <div className="lg:w-1/2 relative">
            <div className="bg-[#ff0000] absolute -top-4 -left-4 p-4 z-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
              <p className="text-xl text-white">{subtitle}</p>
            </div>
            
            <div className="relative mt-8">
              {/* Image with custom clip path */}
              <div className={`
                overflow-hidden relative z-10 
                ${index % 2 === 0 
                  ? "clip-portfolio-right" 
                  : "clip-portfolio-left"}
              `}>
                <motion.img 
                  src={image} 
                  alt={title} 
                  className="w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Red accent block */}
              <div className={`
                absolute bg-[#ff0000] z-0 w-24 h-24 
                ${index % 2 === 0 
                  ? "bottom-0 right-0 rounded-tl-xl" 
                  : "bottom-0 left-0 rounded-tr-xl"}
              `}></div>
            </div>
          </div>
          
          {/* Project Description */}
          <div className="lg:w-1/2 bg-gray-100 p-8 flex flex-col justify-center rounded-xl">
            <div className="mb-6">
              <p className="text-gray-800 mb-4">{description.challenge}</p>
              <p className="text-gray-800 mb-4">{description.execution}</p>
              <p className="text-gray-800 mb-4">{description.outcome}</p>
            </div>
            
            {description.stats.length > 0 && (
              <div className="flex flex-wrap gap-8 mt-4">
                {description.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-[#ff0000]">
                      <CountUp end={stat.value} />
                    </h3>
                    <p className="text-lg font-medium text-gray-700">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioItem;
