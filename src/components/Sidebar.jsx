import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Sidebar = () => {
  const { setActivePage, activePage } = useContext(CartContext);

  return (
    <aside style={{
      width: '220px',
      backgroundColor: '#0A192F',
      borderRight: '1px solid #D4AF37',
      padding: '1.5rem',
      color: '#FFF',
      minHeight: 'calc(100vh - 80px)'
    }}>
      <h3 style={{ color: '#D4AF37', marginBottom: '1rem' }}>Menu Admin</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <button
            onClick={() => setActivePage('admin')}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '0.5rem',
              backgroundColor: activePage === 'admin' ? '#D4AF37' : 'transparent',
              color: activePage === 'admin' ? '#0A192F' : '#FFF',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            📊 Dashboard Ringkasan
          </button>
        </li>
        <li>
          <button
            onClick={() => setActivePage('about')}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '0.5rem',
              backgroundColor: activePage === 'about' ? '#D4AF37' : 'transparent',
              color: activePage === 'about' ? '#0A192F' : '#FFF',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ℹ️ Info Perusahaan
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;