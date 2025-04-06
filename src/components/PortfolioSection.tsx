
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const PortfolioSection = () => {
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
      title: 'National Gaming Championship',
      category: 'tournaments',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&q=80&auto=format&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Esports Convention 2023',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&q=80&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Pro Gamers Summit',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1531594652722-322f69df4fcf?ixlib=rb-4.0.3&q=80&auto=format&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      title: 'Streamer Collaboration Series',
      category: 'collaborations',
      image: 'https://images.unsplash.com/photo-1603481546238-487240415921?ixlib=rb-4.0.3&q=80&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Mobile Gaming Tournament',
      category: 'tournaments',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&q=80&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'College Esports League',
      category: 'tournaments',
      image: 'https://images.unsplash.com/photo-1605236865533-86807e896563?ixlib=rb-4.0.3&q=80&auto=format&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];
  
  const filteredItems = category === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === category);

  return (
    <section className="py-20 bg-gradient-to-b from-omega-gray/50 to-omega-black clip-diagonal-reverse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our <span className="text-omega-red">Portfolio</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our past tournaments, events, and collaborations that showcase our expertise in the esports industry.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-omega-gray/20 rounded-lg overflow-hidden group relative">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-omega-black to-transparent opacity-60"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm capitalize">{item.category}</p>
              </div>
              
              {item.video && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-omega-red flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6" />
                    </button>
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-omega-red hover:bg-omega-red/90 text-white button-glow">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
