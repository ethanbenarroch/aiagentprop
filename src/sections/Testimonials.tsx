import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

const Testimonials: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:aiagentproprety@gmail.com?subject=request';
  };
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Owner',
      company: 'Coastal Retreats',
      content: 'PropAI has transformed how I manage my 12 beach properties. The AI response system handles 90% of guest questions, and the dynamic pricing has increased my revenue by 23% in just three months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'UrbanStay Properties',
      content: 'We manage over 50 units across three cities, and PropAI has allowed us to scale without adding more staff. The multi-platform integration is seamless, and the analytics help us make data-driven decisions.',
      rating: 5,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Operations Manager',
      company: 'Luxury Rentals Inc.',
      content: 'The task automation feature alone is worth the investment. Our cleaning and maintenance scheduling is now entirely automated, and the AI catches details we might have missed. Highly recommended!',
      rating: 4,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Loved by property managers everywhere
          </h2>
          <p className="text-lg text-gray-600">
            Discover how PropAI is helping property managers increase efficiency, boost revenue, and deliver exceptional guest experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to transform your property management business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful property managers who are saving time, increasing revenue, and growing their businesses with PropAI.
          </p>
          <Button size="lg" onClick={handleEmailClick} >
            Contact us !
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
