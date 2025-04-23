import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  frequency: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  //buttonText?: string;
  //buttonTo?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  frequency,
  description,
  features,
  isPopular = false,
  //buttonText = 'Get Started',
  //buttonTo = '/get-started',
}) => {
  return (
    <div 
      className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
        isPopular 
          ? 'border-2 border-purple-600 shadow-lg transform hover:-translate-y-1' 
          : 'border border-gray-200 shadow-md'
      }`}
    >
      {isPopular && (
        <div className="bg-purple-600 text-white text-xs font-bold uppercase tracking-widest py-2 text-center">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-500 ml-2">/{frequency}</span>
        </div>
        
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check 
                className={`h-5 w-5 mr-3 ${
                  feature.included ? 'text-green-500' : 'text-gray-300'
                }`} 
              />
              <span 
                className={feature.included ? 'text-gray-700' : 'text-gray-400'}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
