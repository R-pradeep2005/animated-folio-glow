
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArticleCard = ({ 
  title, 
  excerpt 
}: { 
  title: string; 
  excerpt: string; 
}) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-portfolio-purple transition-colors duration-300">{title}</h3>
        <p className="text-white/70 mb-4 flex-grow">{excerpt}</p>
        <Button variant="subtle" className="mt-auto w-full card-hover-effect">
          Read Article
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

const WritingsSection = () => {
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
    <section id="writing" ref={sectionRef} className="py-24 relative bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">WRITINGS</h2>
          <h3 className="section-subtitle">My Digital Artifacts</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            I write about design, user experience, and creative processes. Check out some of my thoughts below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="reveal-item opacity-0">
            <ArticleCard 
              title="The Psychology Behind Effective UI Design"
              excerpt="Exploring how understanding human psychology can lead to more intuitive and satisfying user experiences."
            />
          </div>
          
          <div className="reveal-item opacity-0" style={{ animationDelay: '200ms' }}>
            <ArticleCard 
              title="Creating Design Systems That Scale"
              excerpt="How to build robust design systems that grow with your product and maintain consistency across platforms."
            />
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-portfolio-dark mask-wave-bottom"></div>
    </section>
  );
};

export default WritingsSection;
