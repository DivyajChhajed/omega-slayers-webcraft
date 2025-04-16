
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

// TeamMember component extracted from TeamSection
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

const Team = () => {
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
    },
    {
      name: "David Kim",
      position: "Technical Director",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Jessica Martinez",
      position: "Player Relations",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      socials: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Robert Wilson",
      position: "Lead Game Analyst",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      socials: {
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Anna Thompson",
      position: "Community Manager",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-omega-black">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-omega-red">Team</span></h1>
          <p className="text-gray-400 max-w-2xl mb-16">
            Our team of gaming enthusiasts and industry professionals is dedicated to creating 
            exceptional esports experiences. With combined decades of experience in gaming, event management,
            and production, we bring passion and expertise to every project.
          </p>
          
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
      </main>
      <Footer />
    </div>
  );
};

export default Team;
