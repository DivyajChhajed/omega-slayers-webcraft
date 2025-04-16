
import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteSection from '@/components/QuoteSection';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioItem from '@/components/portfolio/PortfolioItem';
import PortfolioTestimonials from '@/components/portfolio/PortfolioTestimonials';
import { portfolioItems, testimonials } from '@/data/portfolioData';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <PortfolioHero />

        {/* Portfolio Items */}
        {portfolioItems.map((item, index) => (
          <PortfolioItem 
            key={item.id}
            {...item}
            index={index}
          />
        ))}

        {/* Quote Section */}
        <QuoteSection
          quote="Excellence in event management isn't just about logistics—it's about creating memorable experiences that drive results."
          author="Omega Slayers Team"
          position="Where Passion Meets Execution"
          darkBackground={false}
        />

        {/* Testimonials Section */}
        <PortfolioTestimonials testimonials={testimonials} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
