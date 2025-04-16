
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import NavBar from './navigation/NavBar';
import MobileMenu from './navigation/MobileMenu';
import { navItems } from '@/data/navigationItems';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 px-4 py-6 transition-transform duration-300",
      !isVisible && "transform -translate-y-full"
    )}>
      <div 
        className={cn(
          "container mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
          isScrolled 
            ? "bg-omega-black/80 backdrop-blur-md shadow-lg border border-omega-gray/20" 
            : "bg-transparent"
        )}
      >
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
