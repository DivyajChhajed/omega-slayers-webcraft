
import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-omega-black">
      <Header />
      <main className="pt-24">
        <div className="py-8 bg-gradient-to-r from-omega-black via-omega-gray/50 to-omega-black">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-gray-400">Get in touch with our team</p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
