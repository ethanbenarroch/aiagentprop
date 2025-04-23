import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                Get in touch with our team
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about PropAI or need help getting started? Our
                team is here to assist you with any inquiries or technical
                support.
              </p>

              <div className="space-y-6">
                <div className="flex items-center justify-center"> {/* Centering this div */}
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      aiagentproprety@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Monday - Friday: 9AM - 8PM PST
                  </p>
                  <p className="text-gray-600">Saturday: Closed</p>
                  <p className="text-gray-600">Sunday: 9AM - 4PM PST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
