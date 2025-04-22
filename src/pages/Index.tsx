
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WritingsSection from '@/components/WritingsSection';
import ContactSection from '@/components/ContactSection';

const ScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return null;
};

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize animations when the page loads
    const animateElements = (startDelay = 0) => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
        element.style.transitionDelay = `${startDelay + index * 0.15}s`;
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 100);
      });
    };
    
    animateElements(0.3);
    
    // Add parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const xOffset = (x - 0.5) * speed * 100;
        const yOffset = (y - 0.5) * speed * 100;
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-dark text-white">
      <ScrollReveal />
      <Navbar />
      <main>
        <HeroSection />
        <WorkSection />
        <CaseStudiesSection />
        <WritingsSection />
        <ContactSection />
      </main>
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-portfolio-purple/10 blur-[100px] animate-pulse-soft"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-portfolio-purple/5 blur-[100px] animate-pulse-soft"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-portfolio-purple/10 blur-[100px] animate-pulse-soft"></div>
      </div>
      
      {/* Custom cursor effect - enable if wanted */}
      {/* <div id="custom-cursor" className="fixed w-8 h-8 rounded-full border-2 border-portfolio-purple pointer-events-none z-50 transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div> */}
    </div>
  );
};

export default Index;
