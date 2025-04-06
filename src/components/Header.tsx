
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

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
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/9d380099-8cb4-4a90-bda3-ef227b54930e.png" 
            alt="Omega Slayers Logo" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white hover:text-omega-red transition-colors relative overflow-hidden group text-sm uppercase font-medium tracking-wide"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-omega-red transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <Button className="bg-omega-red hover:bg-omega-red/90 text-white button-glow rounded-full">
            Get In Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-1 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-omega-black z-40 md:hidden transition-transform duration-300 flex flex-col pt-20',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-omega-red transition-colors text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-omega-red hover:bg-omega-red/90 text-white mt-4 w-full button-glow rounded-full">
              Get In Touch
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
