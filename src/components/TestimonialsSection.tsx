
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquareStar } from 'lucide-react';

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
    quote: "I am glad to have Omega Slayers as my marketing agency. Very professional and result driven team. Great hold on online and offline marketing. Omega Slayers understands the unique challenges of our industry and consistently delivers results that exceed our expectations.",
    author: "Vikash Hisariya",
    title: "M.D of Vishal Peperipheral",
    image: "/lovable-uploads/dbb1985f-8fc1-422c-abe9-7f7b73e54307.png"
  },
  {
    quote: "We've been working with Omega Slayers for our digital marketing needs, and they've been exceptional. Their tailored approach to promoting our gaming products has been incredibly effective, driving sales and brand awareness.",
    author: "Harsh Vardhan Prabhu",
    title: "Marketing Manager at MSI INDIA",
    image: "/lovable-uploads/dbb1985f-8fc1-422c-abe9-7f7b73e54307.png"
  },
  {
    quote: "Omega Slayers doesn't just execute marketing campaigns—they truly understand the gaming industry and leverage their expertise to connect with our target audience authentically.",
    author: "Team MSI",
    title: "Brand Management",
    image: "/lovable-uploads/dbb1985f-8fc1-422c-abe9-7f7b73e54307.png"
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
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-[#ff0000]">CLIENTS</span> <span className="text-black">TESTIMONIALS</span>
            </h2>
            <MessageSquareStar className="w-10 h-10 mx-auto text-[#ff0000]" />
          </div>

          <div className="relative bg-gray-100 rounded-xl p-8 md:p-12">
            <div className="absolute -top-4 -right-4 h-8 w-8 bg-[#ff0000]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author}
                  className="w-24 h-24 rounded-full object-cover mb-4" 
                />
                <h3 className="text-xl font-bold text-[#ff0000]">{testimonials[currentIndex].author}</h3>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].title}</p>
              </div>
              
              <div className="md:w-3/4">
                <p className="text-xl text-gray-800 mb-8 italic relative z-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center justify-end space-x-3 mt-4">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-[#ff0000] hover:text-white transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex space-x-1">
                    {testimonials.map((_, index) => (
                      <span 
                        key={index} 
                        className={`block h-2 rounded-full transition-all ${
                          index === currentIndex ? 'w-8 bg-[#ff0000]' : 'w-2 bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-[#ff0000] hover:text-white transition-colors"
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
