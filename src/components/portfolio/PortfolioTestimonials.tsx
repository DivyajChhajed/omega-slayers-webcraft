
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

interface TestimonialProps {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
}

interface PortfolioTestimonialsProps {
  testimonials: TestimonialProps[];
}

const PortfolioTestimonials = ({ testimonials }: PortfolioTestimonialsProps) => {
  return (
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
  );
};

export default PortfolioTestimonials;
