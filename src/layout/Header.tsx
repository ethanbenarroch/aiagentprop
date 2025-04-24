import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquareText } from 'lucide-react';
import { Link } from '../components/Link';

const Header: React.FC = () => {
   const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:aiagentproprety@gmail.com?subject=request';
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageSquareText
              className={`h-8 w-8 ${
                isScrolled ? 'text-indigo-900' : 'text-white'
              }`}
            />
            <span
              className={`ml-2 text-xl font-bold ${
                isScrolled ? 'text-indigo-900' : 'text-white'
              }`}
            >
              PropAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Features', 'Pricing', 'Testimonials', 'FAQ'].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled ? 'text-gray-700 hover:text-indigo-800' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <button
               onClick={handleEmailClick}
              className={`px-5 py-2 rounded-full transition-all duration-200 font-medium ${
                isScrolled
                  ? 'bg-indigo-900 text-white hover:bg-indigo-800'
                  : 'bg-white text-indigo-900 hover:bg-white/90'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-xl animate-slideDown">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['Features', 'Pricing', 'Testimonials', 'FAQ'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <div className="pt-2">
              <button className="w-full py-3 px-4 rounded-full bg-indigo-900 text-white font-medium hover:bg-indigo-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
