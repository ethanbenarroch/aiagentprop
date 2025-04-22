import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-violet-950 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-purple-500/20">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-lg text-gray-300 mb-8">
              We've received your request and will get back to you within 24 hours.
            </p>
            <Button variant="primary" to="/" className="w-full">
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;