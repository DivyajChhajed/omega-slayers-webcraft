
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ServiceHighlights from '@/components/ServiceHighlights';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-omega-black">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ServiceHighlights />
      <AboutSection />
      <TestimonialsSection />
      <PortfolioSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
