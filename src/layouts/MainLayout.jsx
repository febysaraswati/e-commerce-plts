import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-navy-dark min-h-screen text-white">
      <Navbar />
      <main className="p-8 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
