import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import IntroCTA from '../components/IntroCTA';
import Gallery from '../components/Gallery';
import Partners from '../components/Partners';
import Ambassadors from '../components/Ambassadors';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingChatButtons from '../components/FloatingChatButtons';

const LandingPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16">
        <HeroSlider />
        <IntroCTA />
        <Gallery />
        <Partners />
        <Ambassadors />
        <Features />
        <Pricing />
        <ContactForm />
      </main>

      <Footer />

      <FloatingChatButtons />
    </div>
  );
};

export default LandingPage;
