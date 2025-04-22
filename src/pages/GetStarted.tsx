import React, { useState } from 'react';
import { Building2, MessageSquare, Globe } from 'lucide-react';
import Button from '../components/Button';

const GetStarted: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('/.netlify/functions/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid response format');
      }

      const result = await response.json();
      
      if (result.success) {
        window.location.href = '/success';
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-violet-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Get Started with PropAI</h1>
            <p className="text-lg text-gray-300">Tell us about your property management needs</p>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-purple-500/20">
            <form
              name="getStartedForm"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label htmlFor="properties" className="block text-sm font-medium text-gray-300 mb-1">
                  Number of Properties
                </label>
                <select
                  id="properties"
                  name="properties"
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="" className="bg-gray-900">
                    Select number of properties
                  </option>
                  <option value="1-5" className="bg-gray-900">
                    1-5 properties
                  </option>
                  <option value="6-20" className="bg-gray-900">
                    6-20 properties
                  </option>
                  <option value="21-50" className="bg-gray-900">
                    21-50 properties
                  </option>
                  <option value="51+" className="bg-gray-900">
                    51+ properties
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Platforms Used</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Airbnb', 'VRBO', 'Booking.com', 'Guesty', 'Other'].map((platform) => (
                    <label key={platform} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="platforms"
                        value={platform}
                        className="form-checkbox h-5 w-5 text-purple-500 rounded border-purple-500/30 bg-white/10"
                      />
                      <span className="text-gray-300">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Primary Needs</label>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start p-4 bg-white/5 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-400 mt-1" />
                    <div className="ml-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="primaryNeeds"
                          value="Guest Communication Automation"
                          className="form-checkbox h-5 w-5 text-purple-500"
                        />
                        <span className="ml-2 text-white">Guest Communication Automation</span>
                      </label>
                      <p className="text-gray-400 text-sm mt-1">AI-powered responses and guest support</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white/5 rounded-lg">
                    <Globe className="h-6 w-6 text-purple-400 mt-1" />
                    <div className="ml-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="primaryNeeds"
                          value="Platform Integration"
                          className="form-checkbox h-5 w-5 text-purple-500"
                        />
                        <span className="ml-2 text-white">Platform Integration</span>
                      </label>
                      <p className="text-gray-400 text-sm mt-1">Connect multiple booking platforms</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white/5 rounded-lg">
                    <Building2 className="h-6 w-6 text-purple-400 mt-1" />
                    <div className="ml-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="primaryNeeds"
                          value="Custom AI Training"
                          className="form-checkbox h-5 w-5 text-purple-500"
                        />
                        <span className="ml-2 text-white">Custom AI Training</span>
                      </label>
                      <p className="text-gray-400 text-sm mt-1">Personalized AI responses for your properties</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us more about your specific needs..."
                ></textarea>
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                className="w-full" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;