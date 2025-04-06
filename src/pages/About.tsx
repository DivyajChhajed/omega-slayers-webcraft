
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisionMission from '@/components/VisionMission';
import CompanyValues from '@/components/CompanyValues';
import ServiceHighlights from '@/components/ServiceHighlights';
import TestimonialsSection from '@/components/TestimonialsSection';

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

const About = () => {
  return (
    <div className="min-h-screen bg-omega-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/de1346f2-a4a3-4706-8815-bf093c67f0ff.png')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-omega-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Dominating the <span className="text-omega-red">Esports</span> Arena
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Since our founding in 2018, Omega Slayers has been revolutionizing 
              the competitive gaming landscape with our innovative approach to 
              tournament management and event organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-omega-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 border-l-2 border-t-2 border-omega-red"></div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r-2 border-b-2 border-omega-red"></div>
                
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/a7b4d665-ae42-4f02-995f-1df939836690.png" 
                    alt="Omega Slayers Team" 
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-omega-red">Journey</span>
              </h2>
              
              <p className="text-gray-300 mb-4">
                Founded in 2018, Omega Slayers has rapidly evolved into a leading force in the esports industry, 
                specializing in tournament management, team development, and event organization.
              </p>
              
              <p className="text-gray-300 mb-4">
                What began as a passionate group of gaming enthusiasts has transformed into a professional 
                organization with a global reach. Our dedicated team combines technical expertise with a deep 
                understanding of gaming culture to create unparalleled experiences.
              </p>
              
              <p className="text-gray-300 mb-6">
                Through strategic partnerships with major brands, gaming publishers, and content creators, 
                we've built a reputation for excellence in every aspect of esports management and promotion.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-omega-gray/20 p-4 rounded-lg">
                  <h3 className="font-bold text-omega-red text-2xl mb-1">150+</h3>
                  <p className="text-gray-400">Events Organized</p>
                </div>
                <div className="bg-omega-gray/20 p-4 rounded-lg">
                  <h3 className="font-bold text-omega-red text-2xl mb-1">50+</h3>
                  <p className="text-gray-400">Partner Brands</p>
                </div>
                <div className="bg-omega-gray/20 p-4 rounded-lg">
                  <h3 className="font-bold text-omega-red text-2xl mb-1">500K+</h3>
                  <p className="text-gray-400">Community Members</p>
                </div>
                <div className="bg-omega-gray/20 p-4 rounded-lg">
                  <h3 className="font-bold text-omega-red text-2xl mb-1">10M+</h3>
                  <p className="text-gray-400">Content Views</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <VisionMission />
      <CompanyValues />
      <ServiceHighlights />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default About;
