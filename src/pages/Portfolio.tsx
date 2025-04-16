
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteSection from '@/components/QuoteSection';
import { CountUp } from '@/components/CountUp';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const portfolioItems = [
    {
      id: 1,
      title: "NVIDIA AI EVENT",
      subtitle: "TOP 5 CITIES INDIA",
      image: "/lovable-uploads/a326b7af-b903-41ac-a281-4f0316c2e5bb.png",
      description: {
        challenge: "NVIDIA tasked us with an exciting challenge: to host an AI-focused event with creators from five major Indian cities, showcasing the power of their 40 Series RTX GPUs.",
        execution: "We carefully crafted an engaging experience featuring cutting-edge AI tools like Stable Diffusion, DLSS, and ChatRTX. From venue selection to flawless event execution, every detail was meticulously managed.",
        outcome: "The outcome was a dynamic and inspiring showcase that earned a highly positive response from creators and attendees alike.",
        stats: [
          { value: "555+", label: "5 STORE FOOTFALL" },
          { value: "60+", label: "AI PC SALE" }
        ]
      }
    },
    {
      id: 2,
      title: "MSI PRODUCT LAUNCH",
      subtitle: "NEW DELHI",
      image: "/lovable-uploads/ccafe33b-ee74-4957-aa10-7439e193861e.png",
      description: {
        challenge: "Team MSI approached us with a crucial task: executing a milestone event in New Delhi & Mumbai, where they unveiled their latest lineup of AI-Ready laptops.",
        execution: "We rose to the challenge by ensuring the best location selection, flawless event management and expert coverage of every aspect of the launch.",
        outcome: "The product launch was a tremendous success, resulting in significant media coverage and strong consumer interest.",
        stats: []
      }
    },
    {
      id: 3,
      title: "OS INVITATIONAL S1",
      subtitle: "BGMI ONLINE EVENT",
      image: "/lovable-uploads/5d3431e2-9b68-4551-ab0e-2f787e12e1fb.png",
      description: {
        challenge: "With the rapid growth of esports and gaming in India, we took on the exciting task of organizing the AMD Presents OS Invitational Series, featuring top teams like Soul, Godlike, Orangutan and other top teams across the country.",
        execution: "Our expert execution ensured the tournaments were a major hit, attracting huge viewership and engagement.",
        outcome: "This success not only showcased the best in gaming but also delivered maximum coverage for our partner brands.",
        stats: [
          { value: "25 MILLION+", label: "ENGAGEMENT" },
          { value: "5 MILLION+", label: "VIEWERSHIP" }
        ]
      }
    },
    {
      id: 4,
      title: "PHYSICS WALLAH",
      subtitle: "VIDYAPEETH HYDERABAD",
      image: "/lovable-uploads/4872634d-6965-48bd-8567-41db3943cbe7.png",
      description: {
        challenge: "With only 2-3 days notice, our team at Omega Slayers was tasked with organizing a large-scale event in Hyderabad for Physics Wallah's "Meet Up with Alakh Sir."",
        execution: "Despite the tight timeline, we flawlessly managed every aspect from stage setup to security ensuring a seamless experience making the event resounding success.",
        outcome: "The event was a tremendous success with outstanding attendance and engagement.",
        stats: [
          { value: "1500+", label: "ATTENDEES" },
          { value: "3 DAYS", label: "OF TURNAROUND TIME" }
        ]
      }
    },
    {
      id: 5,
      title: "PROJECT SYNERGY",
      subtitle: "NEW DELHI",
      image: "/lovable-uploads/e775bcbe-9023-402d-ba25-de438cae1431.png",
      description: {
        challenge: "We were tasked with organizing a workshop and demonstration area at a prestigious college in New Delhi.",
        execution: "Our team set up an engaging and interactive demonstration area that attracted significant student interest.",
        outcome: "The demonstration area was consistently filled with students, indicating a strong and sustained interest throughout the entire event.",
        stats: [
          { value: "1500+", label: "DEMO AREA FOOTFALL" },
          { value: "200+", label: "WORKSHOP FOOTFALL" }
        ]
      }
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "VIKASH HISARIYA",
      position: "M.D of Vishal Peperipheral",
      image: "/lovable-uploads/dbb1985f-8fc1-422c-abe9-7f7b73e54307.png",
      quote: "I am glad to have Omega Slayers as my marketing agency. Very professional and result driven team. Great hold on online and offline marketing. Omega Slayers understands the unique challenges of our industry and consistently delivers results that exceed our expectations. We're grateful for their support and look forward to continuing our successful partnership."
    },
    {
      id: 2,
      name: "HARSH VARDHAN PRABHU",
      position: "Marketing Manager at MSI INDIA",
      image: "/lovable-uploads/dbb1985f-8fc1-422c-abe9-7f7b73e54307.png",
      quote: "We've been working with Omega Slayers for our digital marketing needs, and they've been exceptional. Their tailored approach to promoting our gaming products has been incredibly effective, driving sales and brand awareness. Omega Slayers doesn't just execute marketing campaigns—they truly understand the gaming industry and leverage their expertise to connect with our target audience authentically."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">OUR <span className="text-[#ff0000]">PORTFOLIO</span></h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Explore our past events, product launches, and tournaments that showcase our expertise in event management and marketing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Items */}
        {portfolioItems.map((item, index) => (
          <motion.section 
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-16 bg-white relative"
          >
            <div className="container mx-auto px-4">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                <div className="lg:w-1/2 relative">
                  <div className="bg-[#ff0000] absolute -top-4 -left-4 p-4 z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{item.title}</h2>
                    <p className="text-xl text-white">{item.subtitle}</p>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-0 mt-8"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full object-cover"
                    />
                  </motion.div>
                </div>
                
                <div className="lg:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <p className="text-gray-800 mb-4">{item.description.challenge}</p>
                    <p className="text-gray-800 mb-4">{item.description.execution}</p>
                    <p className="text-gray-800 mb-4">{item.description.outcome}</p>
                  </div>
                  
                  {item.description.stats.length > 0 && (
                    <div className="flex flex-wrap gap-8 mt-4">
                      {item.description.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <h3 className="text-4xl md:text-5xl font-bold text-[#ff0000]">
                            <CountUp end={stat.value} />
                          </h3>
                          <p className="text-lg font-medium text-gray-700">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Quote Section */}
        <QuoteSection
          quote="Excellence in event management isn't just about logistics—it's about creating memorable experiences that drive results."
          author="Omega Slayers Team"
          position="Where Passion Meets Execution"
          darkBackground={false}
        />

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-6xl font-bold">
                <span className="text-[#ff0000]">CLIENTS</span>
                <br />
                <span className="text-black">TESTIMONIALS</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: item.id % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-6 bg-gray-100 p-8 rounded-lg">
                    <div className="md:w-1/4">
                      <div className="mb-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-24 h-24 rounded-full object-cover" 
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#ff0000]">{item.name}</h3>
                      <p className="text-sm text-gray-700">{item.position}</p>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-gray-800">{item.quote}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-10 h-10 bg-[#ff0000]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
