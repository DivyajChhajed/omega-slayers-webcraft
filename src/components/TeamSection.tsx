
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
      name: "Rishenra Kumar",
      position: "CEO & Founder",
      image: "/lovable-uploads/257e27df-8e19-45cf-bc20-46a9a22c36a8.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Rahul Gupta",
      position: "Tournament Director",
      image: "/lovable-uploads/25d1ca9d-b1d1-4965-867f-c1e68f065f7b.png",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Aryan Singh",
      position: "Head of Production",
      image: "/lovable-uploads/87515d48-382f-4290-922d-b1457cc74b9c.png",
      socials: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Priya Sharma",
      position: "Marketing Director",
      image: "/lovable-uploads/82fc3d1a-47f1-4b5c-8ea0-de3d74406a82.png",
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
