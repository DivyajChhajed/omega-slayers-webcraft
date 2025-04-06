
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-omega-black/90 z-10" />
          <div className="absolute inset-0 bg-omega-black/50 z-10" />
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center container mx-auto px-4 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-omega-red hover:bg-omega-red/90 text-white px-8 py-6 text-lg button-glow">
              Our Services
            </Button>
            <Button variant="outline" className="border-omega-red text-white hover:bg-omega-red/10 px-8 py-6 text-lg">
              View Portfolio
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

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
