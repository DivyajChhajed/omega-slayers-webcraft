
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const VisionMission = () => {
  return (
    <section className="py-24 bg-omega-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-40 w-80 h-80 bg-omega-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-40 w-80 h-80 bg-omega-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 border-l-2 border-t-2 border-omega-red"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r-2 border-b-2 border-omega-red"></div>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                whileHover={{ 
                  textShadow: "0 0 8px rgba(230, 27, 35, 0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                Our Vision
              </motion.h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To be the premier force in esports management, revolutionizing how events are organized, 
                teams are developed, and audiences engage with competitive gaming.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative">
              <svg className="absolute -top-20 -right-20 w-64 h-64 text-omega-red/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fill="currentColor" 
                  d="M100,15 A85,85 0 1,1 15,100 A85,85 0 1,1 100,15 z"
                  strokeWidth="2"
                  stroke="rgba(230, 27, 35, 0.3)"
                />
              </svg>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                whileHover={{ 
                  textShadow: "0 0 8px rgba(230, 27, 35, 0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                Our Mission
              </motion.h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To elevate the esports ecosystem by creating professional, engaging, and 
                memorable experiences for players, audiences, and partners, bridging the gap between 
                competitive gaming and mainstream entertainment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
