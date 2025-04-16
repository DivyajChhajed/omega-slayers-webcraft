import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteSection from '@/components/QuoteSection';
import { CountUp } from '@/components/CountUp';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const portfolioItems = [
    {
      id: 1,
      title: "NVIDIA AI EVENT",
      subtitle: "TOP 5 CITIES INDIA",
      image: "/lovable-uploads/a1dace14-a760-40df-b1a0-4c1866550145.png",
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
      image: "/lovable-uploads/0e63d387-d7a6-4164-a919-fbdfcc02d8f2.png",
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
      image: "/lovable-uploads/20657afc-0b07-40ca-84ba-ac8ee1b6e6f9.png",
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
      image: "/lovable-uploads/6860608e-97b8-4651-a55d-1edc9f7b8767.png",
      description: {
        challenge: "With only 2-3 days notice, our team at Omega Slayers was tasked with organizing a large-scale event in Hyderabad for Physics Wallah's \"Meet Up with Alakh Sir.\"",
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
      image: "/lovable-uploads/82c3ceb0-cd73-4bd2-82ea-993eedbb44b2.png",
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
      image: "/lovable-uploads/dbbf4564-5360-46d4-bd02-8a88e5bce41a.png",
      quote: "I am glad to have Omega Slayers as my marketing agency. Very professional and result driven team. Great hold on online and offline marketing. Omega Slayers understands the unique challenges of our industry and consistently delivers results that exceed our expectations. We're grateful for their support and look forward to continuing our successful partnership."
    },
    {
      id: 2,
      name: "HARSH VARDHAN PRABHU",
      position: "Marketing Manager at MSI INDIA",
      image: "/lovable-uploads/6e954a15-4e3e-4d4e-b5b0-91323ccbcd76.png",
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
                {/* Project Image with Special Shape */}
                <div className="lg:w-1/2 relative">
                  <div className="bg-[#ff0000] absolute -top-4 -left-4 p-4 z-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{item.title}</h2>
                    <p className="text-xl text-white">{item.subtitle}</p>
                  </div>
                  
                  <div className="relative mt-8">
                    {/* Image with custom clip path */}
                    <div className={`
                      overflow-hidden relative z-10 
                      ${index % 2 === 0 
                        ? "clip-portfolio-right" 
                        : "clip-portfolio-left"}
                    `}>
                      <motion.img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    {/* Red accent block */}
                    <div className={`
                      absolute bg-[#ff0000] z-0 w-24 h-24 
                      ${index % 2 === 0 
                        ? "bottom-0 right-0 rounded-tl-xl" 
                        : "bottom-0 left-0 rounded-tr-xl"}
                    `}></div>
                  </div>
                </div>
                
                {/* Project Description */}
                <div className="lg:w-1/2 bg-gray-100 p-8 flex flex-col justify-center rounded-xl">
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

        {/* Testimonials Section - Updated with new design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 relative"
            >
              <div className="inline-block bg-gray-100 px-12 py-8 rounded-xl relative">
                <h2 className="text-6xl font-bold">
                  <span className="text-[#ff0000]">CLIENTS</span>
                  <br/>
                  <span className="text-black">TESTIMONIALS</span>
                </h2>
                <div className="absolute right-6 top-6">
                  <MessageSquare className="w-12 h-12 text-[#ff0000]" />
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className={`
                    bg-gray-100 p-8 relative z-10
                    ${index % 2 === 0 ? 'clip-testimonial-left' : 'clip-testimonial-right'}
                  `}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="mb-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-24 h-24 rounded-full object-cover border-2 border-[#ff0000]" 
                          />
                        </div>
                        <h3 className="text-xl font-bold text-[#ff0000]">{item.name}</h3>
                        <p className="text-sm text-gray-700">{item.position}</p>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-gray-800 italic relative">
                          "{item.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`
                    absolute bg-[#ff0000] w-24 h-12 z-0
                    ${index % 2 === 0 ? 'bottom-0 left-0 rounded-tr-xl' : 'bottom-0 right-0 rounded-tl-xl'}
                  `}></div>
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
