
import { motion, useAnimation } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ServiceHighlights = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current && titleRef.current && cardsRef.current) {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Cards animation
      gsap.fromTo(".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  const services = [
    {
      title: "Tournament Management",
      description: "Full-service esports tournament planning, execution, and broadcasting.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      path: "/services/tournament-management"
    },
    {
      title: "Team Development",
      description: "Build and nurture professional esports teams with coaching, training, and management.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      path: "/services/team-management"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 clip-diagonal bg-gradient-to-br from-omega-black to-omega-gray/40 relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c962cff5-b071-46c9-8358-f796039c6b85.png')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            We provide comprehensive esports solutions that help brands, teams, and events reach their full potential
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-omega-black via-transparent to-transparent z-10"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Button variant="ghost" className="border-b-2 border-omega-red text-white hover:bg-omega-red/20 px-0 rounded-none" asChild>
                  <Link to={service.path}>
                    Learn More 
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
