
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CompanyValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of esports event management and production with cutting-edge solutions.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-omega-red" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M20.6602 17.0498L17.0498 20.6602C16.7583 20.9517 16.3266 21.0422 15.9428 20.8911C13.7105 19.9869 11.6628 18.6667 9.85907 16.9875C8.11157 15.3387 6.70845 13.3347 5.69351 11.0875C5.52326 10.6952 5.60054 10.2433 5.88356 9.94456L9.36396 6.46416C9.72208 6.10604 10.3287 6.07928 10.7147 6.40293L13.5984 8.84635C13.9828 9.16854 14.0117 9.76188 13.6602 10.1134L12.4885 11.2851C12.2722 11.5015 12.2225 11.8456 12.3661 12.1151C13.0266 13.4024 13.9303 14.5378 15.0104 15.4458C15.2661 15.6651 15.6352 15.6475 15.8711 15.4116L17.0147 14.268C17.3743 13.9084 17.9845 13.942 18.3033 14.343L20.5906 17.1373C20.9079 17.5366 20.8697 18.1311 20.5081 18.4927L20.6602 17.0498Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "Delivering world-class esports experiences with meticulous attention to detail.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-omega-red" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 14L12 7L15.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 11.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Community",
      description: "Fostering vibrant gaming communities that thrive through connection and engagement.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-omega-red" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 21C3 16.5817 6.58172 13 11 13H13C17.4183 13 21 16.5817 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "Upholding the highest standards of sportsmanship and transparency in all business dealings.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-omega-red" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Adaptability",
      description: "Evolving with the rapidly changing gaming landscape to stay at the cutting edge.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-omega-red" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Passion",
      description: "Driven by our love for gaming and commitment to the growth of esports worldwide.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-omega-red" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C7.5 21 5 17.8791 5 13.5C5 11.8285 5.40625 10.0781 6.09202 8.54749C6.7778 7.01686 7.7322 5.7186 8.90138 4.69434C9.7151 3.97852 11 3.5 11 3.5C11 3.5 11.1895 4.71504 10.9646 5.99485C10.7397 7.27466 10.2 8.5 9 9.5C11 8.5 13 7.73568 14.2135 6.52255C15.427 5.30942 16 4 16 4C16 4 16.1245 6.95262 14.0623 10.2263C12 13.5 15 13.5 15 15C15 16.5 13.5 18 11.5 18C12 18 13.3771 18.4393 14.2 20.25C14.3219 20.5048 14.0957 21 13.8219 21C13.2348 21 12.6 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-omega-black to-[#121212] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f8c08f3f-0ec7-4cc8-90c0-36146fec6e71.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="container mx-auto px-4 mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">Our Values</h2>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
          The principles that guide us in our mission to revolutionize the esports industry
        </p>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-omega-gray/20 backdrop-blur-sm border border-omega-gray/10 rounded-lg p-6 hover:bg-omega-gray/30 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-omega-black to-omega-gray/50 p-4 rounded-lg inline-block mb-4 group-hover:from-omega-red/20 group-hover:to-omega-black transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyValues;
