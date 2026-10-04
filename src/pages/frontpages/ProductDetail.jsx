import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductDetail = () => {
  const { selectedProduct, setActivePage, addToCart } = useContext(CartContext);

  if (!selectedProduct) {
    return (
      <div className="text-center p-12">
        <h2 className="text-xl font-bold mb-4">Produk tidak ditemukan</h2>
        <button 
          onClick={() => setActivePage('dashboard')} 
          className="px-4 py-2 bg-gold text-navy-dark font-bold rounded"
        >
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-navy-card border border-gold rounded-lg p-8 max-w-2xl mx-auto">
      <button 
        onClick={() => setActivePage('dashboard')} 
        className="bg-transparent text-gold border border-gold px-3 py-1 rounded mb-4 hover:bg-navy-light transition-colors"
      >
        ← Kembali
      </button>

      <h1 className="text-2xl font-bold text-gold-light mb-1">{selectedProduct.name}</h1>
      <h2 className="text-3xl font-extrabold text-gold mb-4">Rp {selectedProduct.priceDisplay}</h2>

      <hr className="border-gold mb-6" />

      <h3 className="text-lg font-semibold text-gold mb-2">Spesifikasi Komponen Utama:</h3>
      <ul className="space-y-2 text-slate-300 mb-6 list-disc list-inside">
        <li><strong>Baterai:</strong> {selectedProduct.specs.battery}</li>
        <li><strong>Panel Surya:</strong> {selectedProduct.specs.solarPanel}</li>
        <li><strong>Inverter:</strong> {selectedProduct.specs.inverter}</li>
      </ul>

      <h3 className="text-lg font-semibold text-gold mb-2">Perkiraan Performa:</h3>
      <p className="text-slate-200">⚡ Estimasi kWh harian: <strong>{selectedProduct.dailyKwh}</strong></p>
      <p className="text-slate-200">💰 Setara penghematan bulanan: <strong>{selectedProduct.monthlySavings}*</strong></p>
      <small className="text-slate-400 block mt-1">*Asumsi load factor 40%</small>

      <div className="mt-8">
        <button
          onClick={() => {
            addToCart(selectedProduct);
            setActivePage('cart');
          }}
          className="w-full py-3 bg-gold text-navy-dark font-bold text-lg rounded hover:bg-gold-light transition-colors"
        >
          Pilih Paket Ini & Ajukan Konsultasi
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;