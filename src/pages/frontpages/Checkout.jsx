import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const { cartItems, clearCart, setActivePage } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDone = () => {
    clearCart();
    setActivePage('dashboard');
  };

  // Conditional Rendering setelah submit
  if (submitted) {
    return (
      <div style={{ textAlign: 'center', backgroundColor: '#112240', border: '1px solid #D4AF37', borderRadius: '8px', padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ color: '#D4AF37' }}>Pengajuan Konsultasi Berhasil!</h2>
        <p style={{ color: '#CCD6F6' }}>Terima kasih, <strong>{formData.name}</strong>. Tim <strong>Velasolaris</strong> akan segera menghubungi Anda di nomor <strong>{formData.phone}</strong>.</p>
        <button onClick={handleDone} style={{ padding: '0.6rem 1.5rem', backgroundColor: '#D4AF37', color: '#0A192F', border: 'none', borderRadius: '4px', fontWeight: 'bold', marginTop: '1.5rem', cursor: 'pointer' }}>
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#112240', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem' }}>
      <h2 style={{ color: '#D4AF37', marginBottom: '1rem' }}>Formulir Permintaan Konsultasi</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#E6C200' }}>Nama Lengkap:</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #D4AF37', backgroundColor: '#0A192F', color: '#FFF' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#E6C200' }}>No. WhatsApp / HP:</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #D4AF37', backgroundColor: '#0A192F', color: '#FFF' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#E6C200' }}>Alamat Lokasi Instalasi:</label>
          <textarea
            required
            rows="3"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #D4AF37', backgroundColor: '#0A192F', color: '#FFF' }}
          />
        </div>

        <button type="submit" style={{ padding: '0.8rem', backgroundColor: '#D4AF37', color: '#0A192F', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }}>
          Kirim Pengajuan
        </button>
      </form>
    </div>
  );
};

export default Checkout;