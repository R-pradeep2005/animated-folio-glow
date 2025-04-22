
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-portfolio-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-portfolio-purple flex items-center justify-center animate-pulse-soft">
            <span className="font-bold text-white">A</span>
          </div>
          <span className="font-display text-white text-lg font-semibold">name</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white/70 hover:text-white transition">home</a>
          <a href="#work" className="text-white/70 hover:text-white transition">work</a>
          <a href="#cases" className="text-white/70 hover:text-white transition">cases</a>
          <a href="#writing" className="text-white/70 hover:text-white transition">writing</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-white/70 hover:text-white transition">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              <Mail size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
          <Button variant="gradient" animation="pulse">
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
