
import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const moveElements = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      // Adjust these values to control movement intensity
      const icons = el.querySelectorAll('.floating-icon');
      icons.forEach(icon => {
        const iconEl = icon as HTMLElement;
        iconEl.style.transform = `translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px)`;
      });
    };
    
    window.addEventListener('mousemove', moveElements);
    return () => window.removeEventListener('mousemove', moveElements);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden bg-portfolio-dark">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-dark via-portfolio-dark to-[#150d1a] z-0"></div>
      
      {/* Floating icons */}
      <div className="floating-icon absolute top-[25%] left-[15%] w-14 h-14 bg-[#1f1f1f] rounded-lg opacity-30 rotate-12 animate-float"></div>
      <div className="floating-icon absolute top-[40%] right-[20%] w-16 h-16 bg-[#1f1f1f] rounded-xl opacity-20 -rotate-12 animate-float animation-delay-1000"></div>
      <div className="floating-icon absolute bottom-[25%] left-[25%] w-10 h-10 bg-[#1f1f1f] rounded-lg opacity-40 rotate-45 animate-float animation-delay-2000"></div>
      <div className="floating-icon absolute top-[15%] right-[30%] w-12 h-12 bg-portfolio-purple/10 rounded-lg opacity-30 -rotate-12 animate-float animation-delay-2500"></div>
      <div className="floating-icon absolute bottom-[30%] right-[15%] w-14 h-14 bg-portfolio-purple/10 rounded-lg opacity-30 rotate-12 animate-float animation-delay-1500"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            I Do UI design that <span className="gradient-text">Wipe off the User Frustration</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 animate-fade-in-up animation-delay-200">
            A highly experienced designer with a passion for creating intuitive user experiences. I believe that great design should simplify complex problems, making digital products a joy to use. My approach combines aesthetic beauty with functional elegance, resulting in interfaces that users love to interact with.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-400">
            <Badge className="bg-white/10 hover:bg-white/20 text-white py-2 px-4">UX Research</Badge>
            <Badge className="bg-portfolio-purple/20 hover:bg-portfolio-purple/30 text-portfolio-purple-light py-2 px-4">UI Design</Badge>
            <Badge className="bg-white/10 hover:bg-white/20 text-white py-2 px-4">Interaction Design</Badge>
            <Badge className="bg-white/10 hover:bg-white/20 text-white py-2 px-4">Prototyping</Badge>
            <Badge className="bg-portfolio-purple/20 hover:bg-portfolio-purple/30 text-portfolio-purple-light py-2 px-4">Design Systems</Badge>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#b375ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white/80">UX Research</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#b375ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white/80">User Testing</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#b375ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white/80">Prototyping</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-portfolio-dark mask-wave-bottom"></div>
    </section>
  );
};

export default HeroSection;
