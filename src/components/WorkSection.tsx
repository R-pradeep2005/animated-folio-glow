
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const WorkItem = ({ 
  image, 
  title, 
  description, 
  buttonText = "View Project" 
}: { 
  image: string; 
  title: string; 
  description: string; 
  buttonText?: string;
}) => {
  return (
    <div className="card group">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        <Button variant="subtle" className="card-hover-effect">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const WorkSection = () => {
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
    <section id="work" ref={sectionRef} className="py-24 relative bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">WORK</h2>
          <h3 className="section-subtitle">what I've been up to</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are a few design projects I've worked on recently. Want to see more? Email me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="reveal-item opacity-0">
            <WorkItem 
              image="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574"
              title="Task Management Mobile App"
              description="A clean and intuitive interface for managing daily tasks with smart prioritization."
            />
          </div>
          
          <div className="reveal-item opacity-0" style={{ animationDelay: '200ms' }}>
            <WorkItem 
              image="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974"
              title="E-commerce Website Redesign"
              description="Complete overhaul of user flow and interface for a premium fashion brand."
            />
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-portfolio-dark mask-wave-bottom"></div>
    </section>
  );
};

export default WorkSection;
