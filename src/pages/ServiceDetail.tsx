
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Calendar, Tv, Star, Zap } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const getServiceData = () => {
    const services = {
      'tournament-management': {
        title: "Tournament Management",
        description: "Complete tournament planning, execution and production for all gaming platforms.",
        icon: Trophy,
        content: [
          "Professional tournament organization from start to finish",
          "Custom rule sets and format creation",
          "Player registration and bracket management",
          "Live streaming and broadcasting",
          "Prize pool management and distribution"
        ]
      },
      'team-management': {
        title: "Team Management",
        description: "Professional esports team management and player development services.",
        icon: Users,
        content: [
          "Player scouting and recruitment",
          "Training regime development",
          "Team branding and identity creation",
          "Sponsorship acquisition and management",
          "Competition scheduling and logistics"
        ]
      },
      'event-organization': {
        title: "Event Organization",
        description: "Full-scale esports events from small local tournaments to major competitions.",
        icon: Calendar,
        content: [
          "Venue selection and setup",
          "Equipment sourcing and technical support",
          "Audience engagement activities",
          "Security and crowd management",
          "Food and beverage coordination"
        ]
      },
      'media-production': {
        title: "Media Production",
        description: "High-quality streaming, video production and content creation for esports.",
        icon: Tv,
        content: [
          "Professional live streaming services",
          "Highlight creation and editing",
          "Social media content development",
          "Post-event video production",
          "Broadcasting talent coordination"
        ]
      },
      'influencer-collaborations': {
        title: "Influencer Collaborations",
        description: "Connect and collaborate with gaming influencers and content creators.",
        icon: Star,
        content: [
          "Influencer outreach and partnership building",
          "Collaborative campaign development",
          "Performance tracking and analytics",
          "Contract negotiation and management",
          "Sponsored content creation"
        ]
      },
      'gaming-community': {
        title: "Gaming Community Building",
        description: "Strategies and tools to build and grow your gaming community.",
        icon: Zap,
        content: [
          "Discord server setup and management",
          "Community event organization",
          "Moderation team training",
          "Engagement strategies development",
          "Growth and retention planning"
        ]
      }
    };

    return services[serviceId as keyof typeof services] || {
      title: "Service Not Found",
      description: "The requested service could not be found.",
      icon: Trophy,
      content: []
    };
  };

  const service = getServiceData();
  const ServiceIcon = service.icon;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-omega-black">
      <Header />
      <main className="pt-32">
        {/* Hero section */}
        <section className="py-16 bg-gradient-to-r from-omega-black via-omega-gray/20 to-omega-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-4xl mx-auto"
            >
              <Link 
                to="/services" 
                className="inline-flex items-center text-gray-400 hover:text-omega-red mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-omega-red/10 text-omega-red">
                  <ServiceIcon className="h-8 w-8" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white">{service.title}</h1>
              </div>
              
              <p className="text-gray-400 text-xl mb-10">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service content */}
        <section className="py-16 bg-omega-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-omega-gray/10 to-omega-black rounded-xl p-8 border border-omega-gray/20">
                    <h2 className="text-2xl font-bold text-white mb-6">What We Offer</h2>
                    <ul className="space-y-4">
                      {service.content.map((item, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                          className="flex items-start"
                        >
                          <div className="h-6 w-6 rounded-full bg-omega-red/20 text-omega-red flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                            <span className="text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-omega-gray/10 to-omega-black rounded-xl p-8 border border-omega-gray/20">
                    <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us</h2>
                    <p className="text-gray-400 mb-6">
                      Our experienced team has managed events and tournaments across multiple platforms and game genres.
                      We understand what makes gaming communities thrive and how to create engaging experiences.
                    </p>
                    <div className="bg-omega-red/10 rounded-lg p-5 border border-omega-red/30">
                      <h3 className="text-lg font-bold text-white mb-2">Ready to level up?</h3>
                      <p className="text-gray-400 mb-4">Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.</p>
                      <Link 
                        to="/contact" 
                        className="inline-block bg-omega-red text-white px-6 py-2 rounded-full hover:bg-omega-red/90 transition-colors"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-16 bg-gradient-to-t from-omega-black to-omega-gray/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Related Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our other services to enhance your gaming experience
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/services/tournament-management"
                className="bg-omega-gray/10 border border-omega-gray/20 hover:border-omega-red/50 p-4 rounded-lg transition-all duration-300 w-64 text-center"
              >
                <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-omega-red/10 text-omega-red">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Tournament Management</h3>
              </Link>

              <Link 
                to="/services/team-management"
                className="bg-omega-gray/10 border border-omega-gray/20 hover:border-omega-red/50 p-4 rounded-lg transition-all duration-300 w-64 text-center"
              >
                <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-omega-red/10 text-omega-red">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Team Management</h3>
              </Link>

              <Link 
                to="/services/media-production"
                className="bg-omega-gray/10 border border-omega-gray/20 hover:border-omega-red/50 p-4 rounded-lg transition-all duration-300 w-64 text-center"
              >
                <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-omega-red/10 text-omega-red">
                  <Tv className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Media Production</h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
