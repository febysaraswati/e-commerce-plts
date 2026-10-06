import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-navy-dark min-h-screen text-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
