import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { MessageSquareText, Bot, Globe, Zap, Languages, ShieldCheck, BarChart3, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Smart AI Responses',
      description: 'Advanced AI that understands context and provides personalized responses to guest inquiries 24/7.',
      icon: MessageSquareText,
    },
    {
      title: 'Custom AI Training',
      description: 'Train the AI with your preferred response style and specific property details for consistent communication.',
      icon: Bot,
    },
    {
      title: 'Platform Integration',
      description: 'Seamlessly connect with Airbnb, VRBO, Booking.com, and other platforms through our API.',
      icon: Globe,
    },
    {
      title: 'Instant Responses',
      description: 'Lightning-fast automated responses to common guest inquiries, improving satisfaction rates.',
      icon: Zap,
    },
    {
      title: 'Multi-Language Support',
      description: 'AI-powered communication in multiple languages to serve international guests effectively.',
      icon: Languages,
    },
    {
      title: 'Smart Filtering',
      description: 'Advanced message routing and prioritization to ensure critical issues get immediate attention.',
      icon: ShieldCheck,
    },
    {
      title: 'Response Analytics',
      description: 'Comprehensive insights into response times, guest satisfaction, and communication patterns.',
      icon: BarChart3,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your AI communication system runs smoothly.',
      icon: Headphones,
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            AI-Powered Guest Communication
          </h2>
          <p className="text-lg text-gray-600">
            Our advanced AI handles all your guest communications, providing quick, accurate responses while maintaining your personal touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;