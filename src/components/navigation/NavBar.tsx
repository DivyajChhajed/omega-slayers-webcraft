
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { NavItem } from '@/data/navigationItems';

interface NavBarProps {
  navItems: NavItem[];
}

const NavBar = ({ navItems }: NavBarProps) => {
  return (
    <div className="hidden md:flex justify-between items-center w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <motion.img 
          src="/lovable-uploads/9d380099-8cb4-4a90-bda3-ef227b54930e.png" 
          alt="Omega Slayers Logo" 
          className="h-10 md:h-12"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className="text-white hover:text-omega-red transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Contact Button - Desktop */}
      <div className="hidden md:block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-omega-red hover:bg-omega-red/90 text-white button-glow rounded-full" asChild>
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
