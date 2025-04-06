
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ServiceHighlights = () => {
  const services = [
    {
      title: "Tournament Management",
      description: "Full-service esports tournament planning, execution, and broadcasting.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&q=80&auto=format&fit=crop"
    },
    {
      title: "Team Development",
      description: "Build and nurture professional esports teams with coaching, training, and management.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&q=80&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 clip-diagonal bg-gradient-to-br from-omega-black to-omega-gray/40 relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c962cff5-b071-46c9-8358-f796039c6b85.png')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 mb-4">
            We provide comprehensive esports solutions that help brands, teams, and events reach their full potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-omega-black via-transparent to-transparent z-10"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Button variant="ghost" className="border-b-2 border-omega-red text-white hover:bg-omega-red/20 px-0 rounded-none">
                  Learn More 
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
