
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const TeamMember = ({ 
  name, 
  position, 
  image, 
  socials
}: { 
  name: string; 
  position: string; 
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  }
}) => {
  return (
    <div className="bg-omega-gray/20 rounded-lg overflow-hidden group">
      <div className="h-80 overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-omega-black via-transparent to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-omega-red mb-4">{position}</p>
        
        <div className="flex space-x-3">
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-omega-red transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-omega-red transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {socials.instagram && (
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-omega-red transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sarah Johnson",
      position: "Tournament Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Chang",
      position: "Head of Production",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      socials: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Emily Walker",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-omega-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Meet Our <span className="text-omega-red">Team</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team of gaming enthusiasts and industry professionals is dedicated to creating 
            exceptional esports experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
