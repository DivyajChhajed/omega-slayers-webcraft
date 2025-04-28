
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Calendar, Tv, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Tournament Management",
      description: "Complete tournament planning, execution and production for all gaming platforms. Our team of experts will help you organize and run successful tournaments from start to finish.",
      icon: Trophy,
      path: "/services/tournament-management",
      featured: true
    },
    {
      title: "Team Management",
      description: "Professional esports team management and player development services. We help teams grow, improve, and achieve their competitive goals.",
      icon: Users,
      path: "/services/team-management"
    },
    {
      title: "Event Organization",
      description: "Full-scale esports events from small local tournaments to major competitions. We handle venue selection, technical setup, and event promotion.",
      icon: Calendar,
      path: "/services/event-organization",
      featured: true
    },
    {
      title: "Media Production",
      description: "High-quality streaming, video production and content creation for esports. Our production team ensures your events look professional and engaging.",
      icon: Tv,
      path: "/services/media-production"
    },
    {
      title: "Influencer Collaborations",
      description: "Connect and collaborate with gaming influencers and content creators. We'll help you find the right partners to promote your brand or event.",
      icon: Star,
      path: "/services/influencer-collaborations",
      featured: true
    },
    {
      title: "Gaming Community Building",
      description: "Strategies and tools to build and grow your gaming community. We'll help you create an engaged community around your brand or organization.",
      icon: Zap,
      path: "/services/gaming-community"
    }
  ];

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
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-omega-red">Services</span></h1>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                We offer comprehensive esports management and event organization services 
                to take your gaming experience to the next level. Explore our services below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 bg-omega-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl bg-omega-gray/10 border ${service.featured ? 'border-omega-red/50' : 'border-omega-gray/20'} hover:border-omega-red/50 transition-all duration-300`}
                >
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-omega-red/10 text-omega-red">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-white hover:text-omega-red transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-t from-omega-black to-omega-gray/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-gradient-to-r from-omega-red/10 to-omega-gray/10 p-10 rounded-xl border border-omega-gray/20"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Level Up Your Gaming Events?</h2>
              <p className="text-gray-400 mb-6">
                Contact us today to discuss how we can help you create unforgettable gaming experiences.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-omega-red text-white px-8 py-3 rounded-full hover:bg-omega-red/90 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
