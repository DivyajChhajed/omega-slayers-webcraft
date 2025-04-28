
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServiceHighlights from '@/components/ServiceHighlights';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7,
      ease: "easeOut" 
    } 
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-omega-black">
      <Header />
      <HeroSection />
      
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ServiceHighlights />
      </AnimatedSection>
      
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <PortfolioSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <PartnersSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

// Reusable animated section component
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default Index;
