import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Sidebar = () => {
  const { setActivePage, activePage } = useContext(CartContext);

  return (
    <aside className="w-56 bg-navy-dark border-r border-gold p-6 text-white min-h-[calc(100vh-80px)]">
      <h3 className="text-gold font-bold text-lg mb-4">Menu Admin</h3>
      <ul className="space-y-2 p-0 list-none">
        <li>
          <button
            onClick={() => setActivePage('admin')}
            className={`w-full text-left p-2 rounded transition-colors ${
              activePage === 'admin'
                ? 'bg-gold text-navy-dark font-semibold'
                : 'bg-transparent text-white hover:bg-navy-light'
            }`}
          >
            📊 Dashboard Ringkasan
          </button>
        </li>
        <li>
          <button
            onClick={() => setActivePage('about')}
            className={`w-full text-left p-2 rounded transition-colors ${
              activePage === 'about'
                ? 'bg-gold text-navy-dark font-semibold'
                : 'bg-transparent text-white hover:bg-navy-light'
            }`}
          >
            ℹ️ Info Perusahaan
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;