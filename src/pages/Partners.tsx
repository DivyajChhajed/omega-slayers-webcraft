
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Partners = () => {
  // Partner logos from PartnersSection
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

  // Additional partners for the detailed partner profiles
  const featuredPartners = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/300x200/333333/FFFFFF?text=TechCorp",
      description: "A leading technology provider specializing in esports infrastructure and solutions.",
      partnerSince: "2018",
      website: "https://example.com"
    },
    {
      name: "GameStream",
      logo: "https://via.placeholder.com/300x200/333333/FFFFFF?text=GameStream",
      description: "Premier streaming platform focused on gaming content and live event broadcasts.",
      partnerSince: "2019",
      website: "https://example.com"
    },
    {
      name: "PixelPlay",
      logo: "https://via.placeholder.com/300x200/333333/FFFFFF?text=PixelPlay",
      description: "Top gaming peripheral manufacturer supporting pro gamers worldwide.",
      partnerSince: "2020",
      website: "https://example.com"
    },
    {
      name: "NexusGaming",
      logo: "https://via.placeholder.com/300x200/333333/FFFFFF?text=NexusGaming",
      description: "Game development studio with popular competitive titles in the esports scene.",
      partnerSince: "2019",
      website: "https://example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-omega-black">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-omega-red">Partners</span></h1>
          <p className="text-gray-400 max-w-2xl mb-16">
            We've collaborated with leading brands and organizations in the gaming and tech industry
            to create exceptional esports experiences and deliver world-class events.
          </p>
          
          {/* Partners slider/carousel */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Our Collaborators</h2>
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
                  <div className="bg-omega-gray/10 hover:bg-omega-gray/20 transition-colors p-6 rounded-lg flex items-center justify-center h-32">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-16 filter grayscale hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Featured Partners */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPartners.map((partner, index) => (
                <div key={index} className="bg-omega-gray/10 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <img src={partner.logo} alt={partner.name} className="w-full rounded-lg" />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-400 mb-4">{partner.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <span className="text-sm text-gray-500">Partner since: {partner.partnerSince}</span>
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-omega-red hover:bg-omega-red/90 text-white text-sm py-2 px-4 rounded-full inline-block transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
