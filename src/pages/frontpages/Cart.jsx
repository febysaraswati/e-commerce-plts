import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, setActivePage } = useContext(CartContext);

  // Conditional Rendering jika keranjang kosong
  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2 style={{ color: '#D4AF37' }}>Belum ada paket PLTS yang dipilih</h2>
        <p style={{ color: '#8892B0' }}>Pilih paket instalasi PLTS dari katalog untuk mengajukan konsultasi.</p>
        <button
          onClick={() => setActivePage('dashboard')}
          style={{ padding: '0.6rem 1.2rem', backgroundColor: '#D4AF37', color: '#0A192F', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}
        >
          Lihat Katalog Paket
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#D4AF37', marginBottom: '1.5rem' }}>Daftar Paket Konsultasi PLTS</h2>

      {cartItems.map(item => (
        <div key={item.id} style={{
          backgroundColor: '#112240',
          border: '1px solid #D4AF37',
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ margin: 0, color: '#F4E071' }}>{item.name}</h3>
            <p style={{ margin: '5px 0 0 0', color: '#D4AF37' }}>Rp {item.priceDisplay}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{ backgroundColor: '#FF4D4D', color: '#FFF', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
          >
            Hapus
          </button>
        </div>
      ))}

      <div style={{ textAlign: 'right', marginTop: '2rem' }}>
        <button
          onClick={() => setActivePage('checkout')}
          style={{ padding: '0.8rem 2rem', backgroundColor: '#D4AF37', color: '#0A192F', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
        >
          Lanjut ke Formulir Konsultasi →
        </button>
      </div>
    </div>
  );
};

export default Cart;