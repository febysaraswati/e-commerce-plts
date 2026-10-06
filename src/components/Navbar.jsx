import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname.startsWith('/product');
  const isCart = location.pathname === '/cart' || location.pathname === '/checkout';
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <header className="bg-navy-dark border-b-2 border-gold px-8 py-4 flex justify-between items-center text-white shadow-md">
      <Link to="/" className="no-underline">
        <h2 className="m-0 text-gold text-2xl font-bold tracking-wider hover:opacity-90 transition-opacity">
          VELASOLARIS
        </h2>
        <span className="text-xs text-gold-accent">
          Solusi Energi Terintegrasi PLTS
        </span>
      </Link>

      <nav className="flex gap-4 items-center">
        <Link
          to="/"
          className={`px-4 py-2 rounded font-bold border border-gold transition-colors inline-block ${
            isHome && !isCart && !isAdmin
              ? 'bg-gold text-navy-dark'
              : 'bg-transparent text-white hover:bg-navy-light'
          }`}
        >
          Katalog Paket
        </Link>

        <Link
          to="/cart"
          className={`px-4 py-2 rounded font-bold border border-gold relative transition-colors inline-block ${
            isCart
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
        </Link>

        <Link
          to="/admin"
          className={`px-4 py-2 rounded border border-gold-accent font-bold transition-colors inline-block ${
            isAdmin
              ? 'bg-gold text-navy-dark'
              : 'bg-transparent text-gold-accent hover:bg-navy-light'
          }`}
        >
          Admin Mode
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;