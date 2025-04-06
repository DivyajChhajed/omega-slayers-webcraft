
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Team = () => {
  return (
    <div className="min-h-screen bg-omega-black">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-gray-400">Full Team page content coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
