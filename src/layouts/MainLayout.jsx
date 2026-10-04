import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-navy-dark min-h-screen text-white">
      <Navbar />
      <main className="p-8 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
