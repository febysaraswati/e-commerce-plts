import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname === '/admin' || location.pathname === '/admin/';
  const isAboutPage = location.pathname.includes('/admin/about');

  return (
    <aside className="w-56 bg-navy-dark border-r border-gold p-6 text-white min-h-[calc(100vh-80px)]">
      <h3 className="text-gold font-bold text-lg mb-4">Menu Admin</h3>
      <ul className="space-y-2 p-0 list-none">
        <li>
          <Link
            to="/admin"
            className={`block w-full text-left p-2 rounded transition-colors ${
              isAdminDashboard
                ? 'bg-gold text-navy-dark font-semibold'
                : 'bg-transparent text-white hover:bg-navy-light'
            }`}
          >
            📊 Dashboard Ringkasan
          </Link>
        </li>
        <li>
          <Link
            to="/admin/about"
            className={`block w-full text-left p-2 rounded transition-colors ${
              isAboutPage
                ? 'bg-gold text-navy-dark font-semibold'
                : 'bg-transparent text-white hover:bg-navy-light'
            }`}
          >
            ℹ️ Info Perusahaan
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;