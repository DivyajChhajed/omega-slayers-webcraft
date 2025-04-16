
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const testimonials = [
  {
    quote: "I am glad to have Omega Slayers as my marketing agency. Very professional and result driven team. Great hold on online and offline marketing. Omega Slayers understands the unique challenges of our industry and consistently delivers results that exceed our expectations. We're grateful for their support and look forward to continuing our successful partnership.",
    author: "Vikash Hisariya",
    title: "M.D of Vishal Peperipheral",
    image: "/lovable-uploads/dbbf4564-5360-46d4-bd02-8a88e5bce41a.png"
  },
  {
    quote: "We've been working with Omega Slayers for our digital marketing needs, and they've been exceptional. Their tailored approach to promoting our gaming products has been incredibly effective, driving sales and brand awareness. Omega Slayers doesn't just execute marketing campaigns—they truly understand the gaming industry and leverage their expertise to connect with our target audience authentically.",
    author: "Harsh Vardhan Prabhu",
    title: "Marketing Manager at MSI INDIA",
    image: "/lovable-uploads/6e954a15-4e3e-4d4e-b5b0-91323ccbcd76.png"
  },
  {
    quote: "Omega Slayers doesn't just execute marketing campaigns—they truly understand the gaming industry and leverage their expertise to connect with our target audience authentically.",
    author: "Team MSI",
    title: "Brand Management",
    image: "/lovable-uploads/3807e0a3-ffd4-4e0f-b278-a61f44fde5e1.png"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16 relative">
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
          </div>

          {/* Main testimonial */}
          <div className="grid md:grid-cols-2 gap-10">
            {[0, 1].map((idx) => {
              const testimonial = testimonials[(currentIndex + idx) % testimonials.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className={`
                    bg-gray-100 p-8 relative z-10
                    ${idx === 0 ? 'clip-testimonial-left' : 'clip-testimonial-right'}
                  `}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-24 h-24 rounded-full object-cover border-2 border-[#ff0000]" 
                          />
                        </div>
                        <h3 className="text-xl font-bold text-[#ff0000]">{testimonial.author}</h3>
                        <p className="text-sm text-gray-700">{testimonial.title}</p>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-gray-800 italic relative">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`
                    absolute bg-[#ff0000] w-24 h-12 z-0
                    ${idx === 0 ? 'bottom-0 left-0 rounded-tr-xl' : 'bottom-0 right-0 rounded-tl-xl'}
                  `}></div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Navigation controls */}
          <div className="flex items-center justify-center space-x-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-[#ff0000] hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? 'w-10 bg-[#ff0000]' : 'w-3 bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-[#ff0000] hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
