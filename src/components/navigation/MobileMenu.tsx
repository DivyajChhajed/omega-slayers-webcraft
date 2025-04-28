
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '@/data/navigationItems';

interface MobileMenuProps {
  navItems: NavItem[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ navItems, isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps) => {
  const navigate = useNavigate();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-omega-black z-40 md:hidden flex flex-col pt-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants} className="w-full">
                  <Link
                    to={item.path}
                    className="text-white hover:text-omega-red transition-colors text-lg block w-full text-center py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path || "#"}
                        className="text-gray-400 hover:text-omega-red text-sm transition-colors px-2 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="w-full mt-4">
                <Button 
                  className="bg-omega-red hover:bg-omega-red/90 text-white mt-4 w-full button-glow rounded-full"
                  onClick={() => {
                    navigate('/contact');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
