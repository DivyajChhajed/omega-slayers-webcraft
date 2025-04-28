
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PartnersSection = () => {
  const navigate = useNavigate();
  
  // Placeholder partner logos (would be replaced with actual partners)
  const partners = [
    { name: "TechCorp", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=TechCorp" },
    { name: "GameStream", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=GameStream" },
    { name: "PixelPlay", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=PixelPlay" },
    { name: "NexusGaming", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=NexusGaming" },
    { name: "ByteMedia", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=ByteMedia" },
    { name: "CyberTech", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=CyberTech" },
    { name: "VirtualEdge", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=VirtualEdge" },
    { name: "GameForge", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=GameForge" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-omega-black to-omega-gray/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our <span className="text-omega-red">Partners</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've collaborated with leading brands and organizations in the gaming and tech industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="partner-swiper"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <motion.div 
                  className="bg-omega-gray/10 hover:bg-omega-gray/20 transition-colors p-6 rounded-lg flex items-center justify-center h-32"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.1), 0 8px 10px -6px rgba(255, 0, 0, 0.1)"
                  }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 filter grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button 
            className="bg-omega-red hover:bg-omega-red/90 text-white button-glow"
            onClick={() => navigate('/partners')}
          >
            View All Partners
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
