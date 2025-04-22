import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How does the AI guest communication work?',
      answer: 'Our AI analyzes the content and context of each guest message and generates personalized responses based on your property details, house rules, and preferences. It can handle inquiries about check-in/out, amenities, local recommendations, and troubleshooting common issues. For complex situations, it will alert you to step in.',
    },
    {
      question: 'Can I customize the AI responses?',
      answer: 'Absolutely! You can set your preferred tone of voice, common responses to specific questions, and even create templates for different scenarios. The AI will learn from your edits over time and adapt to your communication style.',
    },
    {
      question: 'How accurate is the dynamic pricing feature?',
      answer: 'Our dynamic pricing algorithm analyzes over 50 factors including local events, seasonality, day of week, competitor pricing, historical booking patterns, and real-time demand. Most clients see a 15-30% increase in revenue within the first few months of implementation.',
    },
    {
      question: 'Which booking platforms do you integrate with?',
      answer: 'We integrate with all major booking platforms including Airbnb, VRBO, Booking.com, Expedia, TripAdvisor, and Guestly. We also offer API integrations with other property management software and can develop custom integrations for Enterprise clients.',
    },
    {
      question: 'Is there a limit to how many properties I can manage?',
      answer: 'No, our platform is designed to scale with your business. The Starter plan supports up to 5 properties, Professional up to 15, and Enterprise is unlimited. As you add more properties, the AI becomes more efficient across your entire portfolio.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All plans include standard email support with 24-hour response times. Professional plans include chat support during business hours. Enterprise plans receive priority support with dedicated account managers and 24/7 emergency assistance.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about PropAI and how it can transform your property management business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;