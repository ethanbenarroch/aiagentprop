import React from 'react';
import Button from '../components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:aiagentproprety@gmail.com?subject=request';
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-violet-950 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-violet-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-fuchsia-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-lg rounded-full text-white text-sm font-medium">
            <span className="bg-purple-500 w-2 h-2 rounded-full mr-2"></span>
            Revolutionizing Property Management
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI-Powered Agents for <span className="text-purple-400">Smart Property Management</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Streamline your rental property business with intelligent AI agents that automate communications, optimize pricing, and handle routine tasks across all your properties.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button size="lg" className="w-full sm:w-auto" onClick={handleEmailClick}>
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outlined" size="lg" className="w-full sm:w-auto bg-white/10 border-white/40 text-white hover:bg-white/20" onClick={handleEmailClick}>
              Book a Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80">
            {['14-day free trial', 'No credit card required', '24/7 support'].map((item) => (
              <div key={item} className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-purple-400 mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative bg-gradient-to-br from-black to-purple-950 rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <div className="aspect-video relative overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI Property Management Dashboard" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
              </button>
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm uppercase tracking-wider text-purple-400 mb-1">Featured Demo</p>
              <h3 className="text-xl font-bold mb-2">See PropAI in action</h3>
              <p className="text-white/80 text-sm">Watch how our AI agents manage guest communications, pricing, and tasks.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="bg-black/30 backdrop-blur-md py-6 mt-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70 text-sm uppercase tracking-wider mb-6">Trusted by property managers around the world</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center opacity-70">
            {['Airbnb', 'VRBO', 'Booking.com', 'Guestly', 'Lodgify'].map((company) => (
              <div key={company} className="text-white font-bold text-xl">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;