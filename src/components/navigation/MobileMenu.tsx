
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavItem } from '@/data/navigationItems';

interface MobileMenuProps {
  navItems: NavItem[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ navItems, isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white p-1 focus:outline-none"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.div>
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-omega-black z-40 md:hidden transition-transform duration-300 flex flex-col pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center gap-6 p-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-omega-red transition-colors text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-omega-red hover:bg-omega-red/90 text-white mt-4 w-full button-glow rounded-full">
            Get In Touch
          </Button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
