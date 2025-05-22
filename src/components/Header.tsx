import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-10 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">DZ</div>
            <span className="text-xl font-bold">DataZen</span>
          </motion.div>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/apply" label="Apply" />
          <NavLink href="/#about" label="About Us" />
          <NavLink href="/#testimonials" label="Testimonials" />
        </nav>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-4 py-2 bg-white shadow-lg md:hidden"
        >
          <nav className="flex flex-col space-y-3 py-3">
            <NavLink href="/" label="Home" mobile />
            <NavLink href="/apply" label="Apply" mobile />
            <NavLink href="/#about" label="About Us" mobile />
            <NavLink href="/#testimonials" label="Testimonials" mobile />
          </nav>
        </motion.div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
}

const NavLink = ({ href, label, mobile = false }: NavLinkProps) => {
  const [location] = useLocation();
  const isActive = location === href || (href !== "/" && location.startsWith(href));
  
  return (
    <Link href={href}>
      <span className={`${mobile ? 'block py-2' : ''} ${
        isActive
          ? "text-primary font-medium"
          : "text-secondary hover:text-primary transition-colors"
      } cursor-pointer`}>
        {label}
      </span>
    </Link>
  );
};

export default Header;
