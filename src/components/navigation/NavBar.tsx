
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { NavItem } from '@/data/navigationItems';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-omega-red hover:bg-transparent focus:bg-transparent">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="origin-top-center"
                >
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
                          <Link
                            to={item.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-omega-red/10 hover:text-omega-red focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none text-white">{subItem.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              {subItem.description}
                            </p>
                          </Link>
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
