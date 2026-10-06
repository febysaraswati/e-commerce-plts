import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDone = () => {
    clearCart();
    navigate('/');
  };

  if (submitted) {
    return (
      <div className="text-center bg-navy-card border border-gold rounded-lg p-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gold mb-4">Pengajuan Konsultasi Berhasil!</h2>
        <p className="text-slate-200 leading-relaxed mb-6">
          Terima kasih, <strong>{formData.name}</strong>. Tim <strong>Velasolaris</strong> akan segera menghubungi Anda di nomor <strong>{formData.phone}</strong>.
        </p>
        <button 
          onClick={handleDone} 
          className="px-6 py-3 bg-gold text-navy-dark font-bold rounded hover:bg-gold-light transition-colors"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-navy-card border border-gold rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gold mb-6">Formulir Permintaan Konsultasi</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-gold-accent font-medium">Nama Lengkap:</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2.5 rounded border border-gold bg-navy-dark text-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label className="block mb-1 text-gold-accent font-medium">No. WhatsApp / HP:</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2.5 rounded border border-gold bg-navy-dark text-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label className="block mb-1 text-gold-accent font-medium">Alamat Lokasi Instalasi:</label>
          <textarea
            required
            rows="3"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-2.5 rounded border border-gold bg-navy-dark text-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-3 bg-gold text-navy-dark font-bold text-lg rounded hover:bg-gold-light transition-colors mt-4"
        >
          Kirim Pengajuan
        </button>
      </form>
    </div>
  );
};

export default Checkout;