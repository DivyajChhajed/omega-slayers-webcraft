
import { ArrowRight, Trophy, Users, Calendar, Tv, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  className,
  path
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  className?: string;
  path: string;
}) => {
  return (
    <div className={cn(
      "bg-omega-gray/20 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg relative overflow-hidden group border border-omega-gray/30",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-tr from-omega-red/0 to-omega-red/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-omega-red/10 text-omega-red">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link to={path} className="group-hover:text-omega-red transition-colors duration-300 text-white flex items-center font-medium">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Tournament Management",
      description: "Complete tournament planning, execution and production for all gaming platforms.",
      icon: Trophy,
      path: "/services/tournament-management"
    },
    {
      title: "Team Management",
      description: "Professional esports team management and player development services.",
      icon: Users,
      path: "/services/team-management"
    },
    {
      title: "Event Organization",
      description: "Full-scale esports events from small local tournaments to major competitions.",
      icon: Calendar,
      path: "/services/event-organization"
    },
    {
      title: "Media Production",
      description: "High-quality streaming, video production and content creation for esports.",
      icon: Tv,
      path: "/services/media-production"
    },
    {
      title: "Influencer Collaborations",
      description: "Connect and collaborate with gaming influencers and content creators.",
      icon: Star,
      path: "/services/influencer-collaborations"
    },
    {
      title: "Gaming Community Building",
      description: "Strategies and tools to build and grow your gaming community.",
      icon: Zap,
      path: "/services/gaming-community"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-omega-black to-omega-gray/50 clip-diagonal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our <span className="text-omega-red">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive esports management and event organization services 
            to take your gaming experience to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className={index === 0 ? "border-omega-red/50" : ""}
              path={service.path}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-omega-red hover:bg-omega-red/90 text-white button-glow" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
