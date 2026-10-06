import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-12">
        <h2 className="text-2xl font-bold text-gold mb-2">Belum ada paket PLTS yang dipilih</h2>
        <p className="text-slate-400 mb-6">Pilih paket instalasi PLTS dari katalog untuk mengajukan konsultasi.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-gold text-navy-dark font-bold rounded hover:bg-gold-light transition-colors"
        >
          Lihat Katalog Paket
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gold mb-6">Daftar Paket Konsultasi PLTS</h2>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div 
            key={item.id} 
            className="bg-navy-card border border-gold p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-gold-light text-lg">{item.name}</h3>
              <p className="text-gold font-semibold">Rp {item.priceDisplay}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <button
          onClick={() => navigate('/checkout')}
          className="px-8 py-3 bg-gold text-navy-dark font-bold text-lg rounded hover:bg-gold-light transition-colors"
        >
          Lanjut ke Formulir Konsultasi →
        </button>
      </div>
    </div>
  );
};

export default Cart;