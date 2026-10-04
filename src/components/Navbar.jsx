import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems, setActivePage, activePage } = useContext(CartContext);

  return (
    <header style={{
      backgroundColor: '#0A192F',
      borderBottom: '2px solid #D4AF37',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#FFFFFF'
    }}>
      <div>
        <h2 style={{ margin: 0, color: '#D4AF37', fontSize: '1.5rem', letterSpacing: '1px' }}>
          VELASOLARIS
        </h2>
        <span style={{ fontSize: '0.8rem', color: '#E6C200' }}>
          Solusi Energi Terintegrasi PLTS
        </span>
      </div>

      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={() => setActivePage('dashboard')}
          style={{
            background: activePage === 'dashboard' ? '#D4AF37' : 'transparent',
            color: activePage === 'dashboard' ? '#0A192F' : '#FFF',
            border: '1px solid #D4AF37',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Katalog Paket
        </button>

        <button
          onClick={() => setActivePage('cart')}
          style={{
            background: activePage === 'cart' ? '#D4AF37' : 'transparent',
            color: activePage === 'cart' ? '#0A192F' : '#FFF',
            border: '1px solid #D4AF37',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            position: 'relative'
          }}
        >
          Konsultasi
          {cartItems.length > 0 && (
            <span style={{
              marginLeft: '8px',
              backgroundColor: '#FF4D4D',
              color: '#FFF',
              borderRadius: '50%',
              padding: '2px 7px',
              fontSize: '0.75rem'
            }}>
              {cartItems.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActivePage('admin')}
          style={{
            background: activePage === 'admin' ? '#D4AF37' : 'transparent',
            color: activePage === 'admin' ? '#0A192F' : '#E6C200',
            border: '1px solid #E6C200',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Admin Mode
        </button>
      </nav>
    </header>
  );
};

export default Navbar;