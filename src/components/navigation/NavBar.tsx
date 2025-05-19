
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { NavItem } from '@/data/navigationItems';
import { useEffect } from 'react';
import gsap from 'gsap';

interface NavBarProps {
  navItems: NavItem[];
}

const NavBar = ({ navItems }: NavBarProps) => {
  
  useEffect(() => {
    // GSAP animation for navbar items on load
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5
    });
  }, []);
  
  return (
    <div className="hidden md:flex justify-center items-center w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            className="nav-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className="text-white hover:text-omega-red transition-colors duration-300 font-medium text-sm lg:text-base"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Contact Button - Desktop */}
      <div className="hidden md:block ml-6">
        <motion.div
          className="nav-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-omega-red hover:bg-omega-red/90 text-white button-glow rounded-full text-sm lg:text-base px-4 lg:px-6" asChild>
            <Link to="/contact">
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
