import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems, setActivePage, activePage } = useContext(CartContext);

  return (
    <header className="bg-navy-dark border-b-2 border-gold px-8 py-4 flex justify-between items-center text-white shadow-md">
      <div>
        <h2 className="m-0 text-gold text-2xl font-bold tracking-wider">
          VELASOLARIS
        </h2>
        <span className="text-xs text-gold-accent">
          Solusi Energi Terintegrasi PLTS
        </span>
      </div>

      <nav className="flex gap-4 items-center">
        <button
          onClick={() => setActivePage('dashboard')}
          className={`px-4 py-2 rounded font-bold border border-gold transition-colors ${
            activePage === 'dashboard'
              ? 'bg-gold text-navy-dark'
              : 'bg-transparent text-white hover:bg-navy-light'
          }`}
        >
          Katalog Paket
        </button>

        <button
          onClick={() => setActivePage('cart')}
          className={`px-4 py-2 rounded font-bold border border-gold relative transition-colors ${
            activePage === 'cart'
              ? 'bg-gold text-navy-dark'
              : 'bg-transparent text-white hover:bg-navy-light'
          }`}
        >
          Konsultasi
          {cartItems.length > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
              {cartItems.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActivePage('admin')}
          className={`px-4 py-2 rounded border border-gold-accent transition-colors ${
            activePage === 'admin'
              ? 'bg-gold text-navy-dark'
              : 'bg-transparent text-gold-accent hover:bg-navy-light'
          }`}
        >
          Admin Mode
        </button>
      </nav>
    </header>
  );
};

export default Navbar;