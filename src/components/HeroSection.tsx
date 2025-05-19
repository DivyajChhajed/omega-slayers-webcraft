
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  
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

  useEffect(() => {
    // GSAP animations
    if (sectionRef.current) {
      gsap.to(".slide-bg", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });
      
      gsap.to(`.slide-bg-${currentSlide}`, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut"
      });
      
      // Hero content animations
      gsap.fromTo(".hero-title", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
      
      gsap.fromTo(".hero-subtitle", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.4 }
      );
      
      gsap.fromTo(".hero-buttons", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.6 }
      );
    }
  }, [currentSlide]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-omega-black">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`slide-bg slide-bg-${index} absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-omega-black/90 z-10" />
          <div className="absolute inset-0 bg-omega-black/50 z-10" />
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center container mx-auto px-4 pt-16 md:pt-20">
        <motion.div 
          className="max-w-3xl text-center px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 text-white leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-omega-red hover:bg-omega-red/90 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg button-glow" asChild>
              <Link to="/services">
                Our Services
              </Link>
            </Button>
            <Button variant="outline" className="border-omega-red text-white hover:bg-omega-red/10 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg" asChild>
              <Link to="/portfolio">
                View Portfolio
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-omega-red w-10' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
