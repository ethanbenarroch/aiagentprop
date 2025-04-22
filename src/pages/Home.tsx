import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;