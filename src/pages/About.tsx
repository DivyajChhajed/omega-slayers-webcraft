
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisionMission from '@/components/VisionMission';
import CompanyValues from '@/components/CompanyValues';
import ServiceHighlights from '@/components/ServiceHighlights';
import TestimonialsSection from '@/components/TestimonialsSection';
import ImageCarousel from '@/components/ImageCarousel';
import VideoCarousel from '@/components/VideoCarousel';
import QuoteSection from '@/components/QuoteSection';

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
  const historyImages = [
    {
      src: "/lovable-uploads/a7b4d665-ae42-4f02-995f-1df939836690.png",
      alt: "Omega Slayers founding team",
      caption: "The founding team at our first major tournament in 2018"
    },
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      alt: "Esports arena setup",
      caption: "Our flagship tournament setup at SuperGames 2022"
    },
    {
      src: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      alt: "Team collaboration",
      caption: "Our team working with pro players at Global Gaming Championship"
    }
  ];
  
  const promotionalVideos = [
    {
      src: "https://cdn.gpteng.co/uploads/video/8e00c36f-59cf-4a4a-bdc0-2b9078458304-b593b10.mp4",
      poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      title: "Omega Slayers: Our Story",
      description: "A glimpse into our journey from startup to industry leader"
    },
    {
      src: "https://cdn.gpteng.co/uploads/video/49ea0b39-0a31-4f2e-a067-89c9ea1a36f9-2a5a99b.mp4",
      poster: "https://images.unsplash.com/photo-1599488029190-f9e879e49f1e?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      title: "The Art of Tournament Management",
      description: "Behind the scenes of our world-class events"
    }
  ];

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

      {/* Quote Section */}
      <QuoteSection 
        quote="Gaming is not just about playing; it's about creating unforgettable moments and communities that transcend the digital realm."
        author="Alex Chen"
        position="Founder, Omega Slayers"
        darkBackground={false}
      />

      {/* Company History */}
      <section className="py-20 bg-omega-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <ImageCarousel images={historyImages} className="mb-6" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-1 lg:order-2"
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
                Our tournaments have drawn millions of viewers worldwide, establishing new standards for 
                production quality and player experience.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <motion.div 
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-omega-gray/20 p-4 rounded-lg"
                >
                  <h3 className="font-bold text-omega-red text-2xl mb-1">150+</h3>
                  <p className="text-gray-400">Events Organized</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-omega-gray/20 p-4 rounded-lg"
                >
                  <h3 className="font-bold text-omega-red text-2xl mb-1">50+</h3>
                  <p className="text-gray-400">Partner Brands</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-omega-gray/20 p-4 rounded-lg"
                >
                  <h3 className="font-bold text-omega-red text-2xl mb-1">500K+</h3>
                  <p className="text-gray-400">Community Members</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-omega-gray/20 p-4 rounded-lg"
                >
                  <h3 className="font-bold text-omega-red text-2xl mb-1">10M+</h3>
                  <p className="text-gray-400">Content Views</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <VisionMission />
      
      {/* Video Section */}
      <section className="py-24 bg-omega-black relative overflow-hidden">
        <div className="absolute -right-20 top-40 w-80 h-80 bg-omega-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-40 w-80 h-80 bg-omega-red/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-omega-red">Story</span> in Motion
            </h2>
            <p className="text-gray-300 text-lg">
              Experience the energy and passion that drives Omega Slayers through our promotional videos
            </p>
          </motion.div>
          
          <VideoCarousel videos={promotionalVideos} className="max-w-4xl mx-auto" />
        </div>
      </section>
      
      {/* Quote Section */}
      <QuoteSection 
        quote="In the world of esports, the difference between good and great is in the details. We obsess over those details."
        author="Sarah Johnson"
        position="Head of Tournament Operations"
      />

      <CompanyValues />
      <ServiceHighlights />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default About;
