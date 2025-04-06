
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
    quote: "Omega Slayers transformed our gaming tournament into a professional spectacle. Their attention to detail and technical expertise exceeded all expectations.",
    author: "Sarah Johnson",
    title: "Marketing Director, TechGiant Games"
  },
  {
    quote: "Working with the Omega Slayers team was seamless. They understood our brand vision and executed flawlessly on our esports series.",
    author: "Michael Chen",
    title: "CEO, NextLevel Competitions"
  },
  {
    quote: "Our partnership with Omega Slayers has been instrumental in growing our presence in the esports community. Truly world-class professionals.",
    author: "Elena Rodriguez",
    title: "Brand Manager, Pulse Energy Drinks"
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
    <section className="py-24 bg-omega-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-400">What our partners say about working with us</p>
          </div>

          <div className="relative bg-omega-gray/20 rounded-xl p-8 md:p-12">
            <Quote className="text-omega-red/20 w-20 h-20 absolute top-6 left-6" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic relative z-10">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-white">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].title}</p>
                </div>
                
                <div className="flex items-center space-x-3 mt-4 md:mt-0">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-omega-gray/30 text-white hover:bg-omega-red transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex space-x-1">
                    {testimonials.map((_, index) => (
                      <span 
                        key={index} 
                        className={`block h-2 rounded-full transition-all ${
                          index === currentIndex ? 'w-6 bg-omega-red' : 'w-2 bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-omega-gray/30 text-white hover:bg-omega-red transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
