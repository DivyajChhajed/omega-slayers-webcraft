
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    } 
  }
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      title: "Dominate The Esports Arena",
      subtitle: "Premier Esports Management & Event Organization",
      image: "https://images.unsplash.com/photo-1605236865533-86807e896563?ixlib=rb-4.0.3&q=80&auto=format&fit=crop"
    },
    {
      title: "Level Up Your Events",
      subtitle: "Professional Tournaments & Gaming Competitions",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&q=80&auto=format&fit=crop"
    },
    {
      title: "Influencer Collaborations",
      subtitle: "Connect With The Best Gaming Talent",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&q=80&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-omega-black">
      {/* Background slides with parallax effect */}
      {slides.map((slide, index) => (
        <motion.div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ scale: 1.1 }}
          animate={{ 
            scale: currentSlide === index ? 1 : 1.1,
            transition: { duration: 6 }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-omega-black/90 z-10" />
          <div className="absolute inset-0 bg-omega-black/50 z-10" />
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center container mx-auto px-4 pt-20">
        <motion.div 
          className="max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.6, 0.01, -0.05, 0.95]
            }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              className="bg-omega-red hover:bg-omega-red/90 text-white px-8 py-6 text-lg button-glow"
              onClick={() => navigate('/services')}
            >
              Our Services
            </Button>
            <Button 
              variant="outline" 
              className="border-omega-red text-white hover:bg-omega-red/10 px-8 py-6 text-lg"
              onClick={() => navigate('/portfolio')}
            >
              View Portfolio
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Slide indicators with animation */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-omega-red w-10' : 'bg-gray-500 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
