
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudyCard = () => {
  return (
    <div className="card-highlight p-8 group">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="bg-portfolio-purple/10 rounded-lg p-2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2936"
              alt="Banking App Case Study" 
              className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="bg-portfolio-purple/20 text-portfolio-purple-light inline-block px-3 py-1 rounded-full text-sm mb-3">
            UX/UI Case Study
          </div>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Digital Banking App Redesign</h3>
          <p className="text-white/70 mb-4">
            Redesigned a complex banking application to improve user satisfaction by 48% and reduce support tickets by 35%.
          </p>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/50">Scope of work</span>
              <span>UX Research, UI Design, Testing</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/50">Time frame</span>
              <span>3 months</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/50">Client</span>
              <span>FinTech Inc.</span>
            </div>
          </div>
          
          <Button variant="subtle" className="mt-6 card-hover-effect">
            View Case Study
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.reveal-item');
    childElements?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      childElements?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="cases" ref={sectionRef} className="py-24 relative bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">CASE STUDIES</h2>
          <h3 className="section-subtitle">Behind the Builds</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Dive deeper into my process and learn how I approach design problems to create effective solutions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="reveal-item opacity-0">
            <CaseStudyCard />
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-portfolio-dark mask-wave-bottom"></div>
    </section>
  );
};

export default CaseStudiesSection;
