import React from 'react';
import { MessageSquareText, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <MessageSquareText className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold text-white">PropAI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing property management with AI-powered solutions. Automate guest communications and deliver exceptional experiences.
            </p>
          </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} PropAI. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <Button
                  key={item}
                  variant="outlined"
                  size="sm"
                  className="border-0 hover:bg-white/5 text-gray-400 hover:text-cyan-400"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
