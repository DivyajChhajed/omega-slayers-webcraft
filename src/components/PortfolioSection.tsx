
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'tournaments', name: 'Tournaments' },
    { id: 'events', name: 'Events' },
    { id: 'collaborations', name: 'Collaborations' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'NVIDIA AI EVENT',
      category: 'events',
      image: '/lovable-uploads/a1dace14-a760-40df-b1a0-4c1866550145.png',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      path: '/portfolio/nvidia-ai-event'
    },
    {
      id: 2,
      title: 'MSI PRODUCT LAUNCH',
      category: 'events',
      image: '/lovable-uploads/0e63d387-d7a6-4164-a919-fbdfcc02d8f2.png',
      path: '/portfolio/msi-product-launch'
    },
    {
      id: 3,
      title: 'OS INVITATIONAL S1',
      category: 'tournaments',
      image: '/lovable-uploads/20657afc-0b07-40ca-84ba-ac8ee1b6e6f9.png',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      path: '/portfolio/os-invitational-s1'
    },
    {
      id: 4,
      title: 'PHYSICS WALLAH',
      category: 'events',
      image: '/lovable-uploads/6860608e-97b8-4651-a55d-1edc9f7b8767.png',
      path: '/portfolio/physics-wallah'
    },
    {
      id: 5,
      title: 'PROJECT SYNERGY',
      category: 'collaborations',
      image: '/lovable-uploads/82c3ceb0-cd73-4bd2-82ea-993eedbb44b2.png',
      path: '/portfolio/project-synergy'
    },
    {
      id: 6,
      title: 'MSI THE LEAP',
      category: 'events',
      image: '/lovable-uploads/bfcbc660-fa88-4442-b44a-11b6ffd3a36a.png',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      path: '/portfolio/msi-the-leap'
    },
  ];
  
  const filteredItems = category === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === category);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-omega-gray/50 to-omega-black clip-diagonal-reverse">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our <span className="text-omega-red">Portfolio</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our past tournaments, events, and collaborations that showcase our expertise in the esports industry.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={category === cat.id ? "default" : "outline"}
              className={category === cat.id 
                ? "bg-omega-red hover:bg-omega-red/90 text-white"
                : "border-omega-gray/50 text-white hover:bg-omega-red/10 hover:text-white hover:border-omega-red"}
              onClick={() => setCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="relative group cursor-pointer"
              variants={item}
              onClick={() => navigate(item.path)}
            >
              <div className="overflow-hidden relative">
                {/* Custom shape with diagonal cuts and rounded corners */}
                <div className={`
                  relative z-10 
                  ${item.id % 2 === 0 
                    ? "clip-portfolio-right" 
                    : "clip-portfolio-left"}
                `}>
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Red block for accent */}
                <div className={`
                  absolute bg-omega-red z-0 w-24 h-24 
                  ${item.id % 2 === 0 
                    ? "bottom-0 right-0 rounded-tl-xl" 
                    : "bottom-0 left-0 rounded-tr-xl"}
                `}></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-4">{item.title}</h3>
              <p className="text-gray-400 text-sm capitalize">{item.category}</p>
              
              {item.video && (
                <Dialog>
                  <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
                    <motion.button 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-omega-red flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 z-20"
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: "0 0 25px rgba(230, 27, 35, 0.8)"
                      }}
                    >
                      <Play className="h-6 w-6" />
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                    <div className="relative pt-[56.25%] w-full">
                      <iframe 
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={item.video} 
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button 
            className="bg-omega-red hover:bg-omega-red/90 text-white button-glow"
            onClick={() => navigate('/portfolio')}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
