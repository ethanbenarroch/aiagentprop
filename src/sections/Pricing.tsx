import React from 'react';
import PricingCard from '../components/PricingCard';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:aiagentproprety@gmail.com?subject=Sales request';
  };
  const plans = [
    {
      title: 'Basic',
      price: 49,
      frequency: 'month',
      description: 'Perfect for small property managers getting started with AI',
      features: [
        { text: 'AI guest response system', included: true },
        { text: 'Basic response templates', included: true },
        { text: 'Single platform integration', included: true },
        { text: 'Response time analytics', included: true },
        { text: 'Custom AI training', included: false },
        { text: 'Advanced message routing', included: false },
        { text: 'Multi-language support', included: false },
        { text: 'Priority support', included: false },
      ],
      isPopular: false,
    },
    {
      title: 'Professional',
      price: 149,
      frequency: 'month',
      description: 'Advanced AI features for growing property portfolios',
      features: [
        { text: 'Advanced AI communication', included: true },
        { text: 'Custom response templates', included: true },
        { text: 'Multi-platform integration', included: true },
        { text: 'Sentiment analysis', included: true },
        { text: 'Custom AI training', included: true },
        { text: 'Advanced message routing', included: true },
        { text: 'Multi-language support', included: false },
        { text: 'Priority support', included: false },
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 399,
      frequency: 'month',
      description: 'Full-featured AI solution for property management companies',
      features: [
        { text: 'Enterprise AI system', included: true },
        { text: 'Unlimited templates', included: true },
        { text: 'Full API access', included: true },
        { text: 'Advanced analytics suite', included: true },
        { text: 'Custom AI training', included: true },
        { text: 'Advanced message routing', included: true },
        { text: 'Multi-language support', included: true },
        { text: 'Priority support', included: true },
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Choose your AI communication plan
          </h2>
          <p className="text-lg text-gray-600">
            Powerful AI solutions to automate your guest communications.
            All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              frequency={plan.frequency}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              //buttonText="Get Started"
              //onClick={handleEmailClick}
            />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Need a custom AI solution?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our team for a custom AI implementation tailored to your specific needs.
            We offer specialized solutions for large property management companies.
          </p>
          <Button
            variant="outlined"
            className="inline-flex items-center justify-center"
            onClick={handleEmailClick}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
