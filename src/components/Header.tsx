
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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

  const navItems = [
    { 
      name: 'Home', 
      path: '/',
      description: 'Return to our homepage',
      subItems: [
        { name: 'Latest Events', description: 'Check out our most recent tournaments' },
        { name: 'Featured Games', description: 'Popular titles we specialize in' },
        { name: 'News & Updates', description: 'Stay current with Omega Slayers' }
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      description: 'Learn about our company',
      subItems: [
        { name: 'Our Story', description: 'The journey of Omega Slayers' },
        { name: 'Our Vision', description: 'What drives us forward' },
        { name: 'Core Values', description: 'The principles we live by' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      description: 'Explore our offerings',
      subItems: [
        { name: 'Tournament Management', description: 'Full-service event organization' },
        { name: 'Team Development', description: 'Professional coaching & training' },
        { name: 'Content Creation', description: 'High-quality esports content' }
      ]
    },
    { 
      name: 'Portfolio', 
      path: '/portfolio',
      description: 'See our past work',
      subItems: [
        { name: 'Major Tournaments', description: 'Flagship competitive events' },
        { name: 'Partner Events', description: 'Collaborations with leading brands' },
        { name: 'Success Stories', description: "Teams we've helped succeed" }
      ]
    },
    { 
      name: 'Team', 
      path: '/team',
      description: 'Meet our experts',
      subItems: [
        { name: 'Leadership', description: 'Our executive team' },
        { name: 'Event Managers', description: 'Tournament specialists' },
        { name: 'Coaches & Analysts', description: 'Gaming professionals' }
      ]
    },
    { 
      name: 'Partners', 
      path: '/partners',
      description: 'Our collaborators',
      subItems: [
        { name: 'Gaming Publishers', description: 'Official game partners' },
        { name: 'Sponsors', description: 'Brands that support us' },
        { name: 'Technology Partners', description: 'Powering our operations' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact',
      description: 'Get in touch with us',
      subItems: [
        { name: 'General Inquiries', description: 'Questions about our services' },
        { name: 'Event Booking', description: 'Host a tournament with us' },
        { name: 'Career Opportunities', description: 'Join our growing team' }
      ]
    }
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
          <motion.img 
            src="/lovable-uploads/9d380099-8cb4-4a90-bda3-ef227b54930e.png" 
            alt="Omega Slayers Logo" 
            className="h-10 md:h-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-omega-red hover:bg-transparent focus:bg-transparent">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.ul 
                      className="grid gap-3 p-4 w-[220px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.path}
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-omega-red/50 to-omega-black p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">{item.name}</div>
                            <p className="text-sm leading-tight text-white/90">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-omega-red/10 hover:text-omega-red focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none text-white">{subItem.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-white/70">
                                {subItem.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </motion.ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-omega-red hover:bg-omega-red/90 text-white button-glow rounded-full">
              Get In Touch
            </Button>
          </motion.div>
        </div>

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
      </div>
    </header>
  );
};

export default Header;
