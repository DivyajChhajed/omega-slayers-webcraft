
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PartnersSection = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our <span className="text-omega-red">Partners</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've collaborated with leading brands and organizations in the gaming and tech industry.
          </p>
        </div>

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
    </section>
  );
};

export default PartnersSection;
