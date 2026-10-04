import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductDetail = () => {
  const { selectedProduct, setActivePage, addToCart } = useContext(CartContext);

  if (!selectedProduct) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Produk tidak ditemukan</h2>
        <button onClick={() => setActivePage('dashboard')} style={{ padding: '0.5rem 1rem', background: '#D4AF37', border: 'none', borderRadius: '4px' }}>
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#112240', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <button onClick={() => setActivePage('dashboard')} style={{ background: 'transparent', color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer', marginBottom: '1rem' }}>
        ← Kembali
      </button>

      <h1 style={{ color: '#F4E071' }}>{selectedProduct.name}</h1>
      <h2 style={{ color: '#D4AF37' }}>Rp {selectedProduct.priceDisplay}</h2>

      <hr style={{ borderColor: '#D4AF37', margin: '1.5rem 0' }} />

      <h3 style={{ color: '#D4AF37' }}>Spesifikasi Komponen Utama:</h3>
      <ul style={{ lineHeight: '1.8', color: '#CCD6F6' }}>
        <li><strong>Baterai:</strong> {selectedProduct.specs.battery}</li>
        <li><strong>Panel Surya:</strong> {selectedProduct.specs.solarPanel}</li>
        <li><strong>Inverter:</strong> {selectedProduct.specs.inverter}</li>
      </ul>

      <h3 style={{ color: '#D4AF37', marginTop: '1.5rem' }}>Perkiraan Performa:</h3>
      <p>⚡ Estimasi kWh harian: <strong>{selectedProduct.dailyKwh}</strong></p>
      <p>💰 Setara penghematan bulanan: <strong>{selectedProduct.monthlySavings}*</strong></p>
      <small style={{ color: '#8892B0' }}>*Asumsi load factor 40%</small>

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={() => {
            addToCart(selectedProduct);
            setActivePage('cart');
          }}
          style={{
            width: '100%',
            padding: '0.8rem',
            backgroundColor: '#D4AF37',
            color: '#0A192F',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Pilih Paket Ini & Ajukan Konsultasi
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;