
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formState);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-purple-light">Let's be friends</h2>
            <p className="text-white/70">my inbox is always open</p>
          </div>
          
          <div className="card-highlight p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-2">Your Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white focus:border-portfolio-purple"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 mb-2">Your Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white focus:border-portfolio-purple"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/70 mb-2">Your Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white focus:border-portfolio-purple min-h-[120px]"
                  required
                />
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  variant="gradient"
                  animation="glow"
                  size="xl"
                  className="w-full md:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="text-center mt-24 text-white/50 text-sm">
        <p>© {new Date().getFullYear()} | All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default ContactSection;
