
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import NavBar from './navigation/NavBar';
import MobileMenu from './navigation/MobileMenu';
import { navItems } from '@/data/navigationItems';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine scroll direction and update visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:py-6 transition-transform duration-300",
      !isVisible && !isMobileMenuOpen && "transform -translate-y-full"
    )}>
      <div 
        className={cn(
          "container mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3",
          isScrolled 
            ? "bg-omega-black/80 backdrop-blur-md shadow-lg border border-omega-gray/20" 
            : "bg-transparent"
        )}
      >
        {/* Logo - Mobile & Desktop - Now larger */}
        <Link to="/" className="relative z-50 flex items-center gap-2">
          <motion.img 
            src="/lovable-uploads/9d380099-8cb4-4a90-bda3-ef227b54930e.png" 
            alt="Omega Slayers Logo" 
            className="h-10 sm:h-14"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <NavBar navItems={navItems} />
        
        {/* Mobile Menu */}
        <MobileMenu 
          navItems={navItems} 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
      </div>
    </header>
  );
};

export default Header;
