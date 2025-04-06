
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-omega-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-40 w-80 h-80 bg-omega-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-40 w-80 h-80 bg-omega-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 border-l-2 border-t-2 border-omega-red"></div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r-2 border-b-2 border-omega-red"></div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&q=80&auto=format&fit=crop" 
                alt="Esports Tournament" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-omega-red">Omega Slayers</span>
            </h2>
            
            <p className="text-gray-300 mb-4">
              Founded in 2018, Omega Slayers has rapidly evolved into a leading force in the esports industry, 
              specializing in tournament management, team development, and event organization.
            </p>
            
            <p className="text-gray-300 mb-6">
              Our mission is to elevate the esports ecosystem by creating professional, engaging, and 
              memorable experiences for players, audiences, and partners alike. With a team of passionate 
              gaming enthusiasts and industry professionals, we bridge the gap between competitive gaming 
              and mainstream entertainment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-omega-gray/20 p-4 rounded-lg">
                <h3 className="font-bold text-omega-red text-xl mb-1">150+</h3>
                <p className="text-gray-400">Events Organized</p>
              </div>
              <div className="bg-omega-gray/20 p-4 rounded-lg">
                <h3 className="font-bold text-omega-red text-xl mb-1">50+</h3>
                <p className="text-gray-400">Partner Brands</p>
              </div>
              <div className="bg-omega-gray/20 p-4 rounded-lg">
                <h3 className="font-bold text-omega-red text-xl mb-1">500K+</h3>
                <p className="text-gray-400">Community Members</p>
              </div>
              <div className="bg-omega-gray/20 p-4 rounded-lg">
                <h3 className="font-bold text-omega-red text-xl mb-1">10M+</h3>
                <p className="text-gray-400">Content Views</p>
              </div>
            </div>
            
            <Button className="bg-omega-red hover:bg-omega-red/90 text-white button-glow">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
