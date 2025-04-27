
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Twitch, Youtube, ArrowUp, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-omega-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-omega-red/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/9d380099-8cb4-4a90-bda3-ef227b54930e.png" 
                alt="Omega Slayers Logo" 
                className="h-12"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Premier esports management and event organization company dedicated to elevating the gaming experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-omega-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-omega-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/omega.slayers" className="text-gray-400 hover:text-omega-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/osesports/" className="text-gray-400 hover:text-omega-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a href="https://www.linkedin.com/company/osesports/" className="text-gray-400 hover:text-omega-red transition-colors">
                <Twitch className="h-5 w-5" />
              </a> */}
              <a href="#" className="text-gray-400 hover:text-omega-red transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-omega-red transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-omega-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-omega-red transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-omega-red transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-omega-red transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/tournament-management" className="text-gray-400 hover:text-omega-red transition-colors">
                  Tournament Management
                </Link>
              </li>
              <li>
                <Link to="/services/team-management" className="text-gray-400 hover:text-omega-red transition-colors">
                  Team Management
                </Link>
              </li>
              <li>
                <Link to="/services/event-organization" className="text-gray-400 hover:text-omega-red transition-colors">
                  Event Organization
                </Link>
              </li>
              <li>
                <Link to="/services/media-production" className="text-gray-400 hover:text-omega-red transition-colors">
                  Media Production
                </Link>
              </li>
              <li>
                <Link to="/services/influencer-collaborations" className="text-gray-400 hover:text-omega-red transition-colors">
                  Influencer Collaborations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on the latest esports events and news.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-omega-gray/30 text-white border border-omega-gray/50 rounded-l-lg px-4 py-2 focus:outline-none focus:border-omega-red"
              />
              <button
                type="submit"
                className="bg-omega-red text-white px-4 py-2 rounded-r-lg hover:bg-omega-red/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-omega-gray/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Omega Slayers. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-omega-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-omega-red transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-omega-red p-3 rounded-full text-white hover:bg-omega-red/90 transition-colors"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
