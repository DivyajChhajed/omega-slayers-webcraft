
import { motion } from 'framer-motion';

interface QuoteSectionProps {
  quote: string;
  author: string;
  position?: string;
  darkBackground?: boolean;
}

const QuoteSection = ({ quote, author, position, darkBackground = true }: QuoteSectionProps) => {
  return (
    <section className={`py-20 relative overflow-hidden ${
      darkBackground 
        ? 'bg-omega-black' 
        : 'bg-gray-100'
    }`}>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f8c08f3f-0ec7-4cc8-90c0-36146fec6e71.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="relative mb-8">
            <svg className={`w-12 h-12 mx-auto ${
              darkBackground ? 'text-[#ff0000]/80' : 'text-[#ff0000]'
            }`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11C10 8.79086 8.20914 7 6 7H4V9H6C7.10457 9 8 9.89543 8 11V16H13V11H10Z" fill="currentColor"/>
              <path d="M21 11C21 8.79086 19.2091 7 17 7H15V9H17C18.1046 9 19 9.89543 19 11V16H24V11H21Z" fill="currentColor"/>
            </svg>
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight italic ${
            darkBackground ? 'text-white' : 'text-gray-800'
          }`}>
            "{quote}"
          </h2>
          
          <div className="flex flex-col items-center">
            <p className={`text-xl font-semibold ${
              darkBackground ? 'text-[#ff0000]' : 'text-[#ff0000]'
            }`}>{author}</p>
            {position && <p className={
              darkBackground ? 'text-gray-400' : 'text-gray-600'
            }>{position}</p>}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
