import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, setSelectedProduct, setActivePage } = useContext(CartContext);
  const isAdded = cartItems.some(item => item.id === product.id);

  const handleDetail = () => {
    setSelectedProduct(product);
    setActivePage('detail');
  };

  return (
    <div className="bg-navy-card border border-gold rounded-lg p-6 text-white flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow">
      <div>
        <span className="bg-gold text-navy-dark px-2 py-1 rounded text-xs font-bold inline-block mb-2">
          {product.category}
        </span>
        <h3 className="text-gold-light text-lg font-bold mt-1">{product.name}</h3>
        <h2 className="text-gold text-2xl font-extrabold my-2">Rp {product.priceDisplay}</h2>
        <p className="text-sm text-slate-400">
          ⚡ Estimasi harian: <strong className="text-slate-200">{product.dailyKwh}</strong>
        </p>
        <p className="text-sm text-slate-400">
          💰 Penghematan: <strong className="text-slate-200">{product.monthlySavings}/bln</strong>
        </p>
      </div>

      <div className="mt-6 flex gap-2">
        <button
          onClick={handleDetail}
          className="flex-1 py-2 bg-transparent text-gold border border-gold rounded hover:bg-navy-light transition-colors"
        >
          Spesifikasi
        </button>
        <button
          onClick={() => addToCart(product)}
          disabled={isAdded}
          className={`flex-1 py-2 rounded font-bold transition-colors ${
            isAdded
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
              : 'bg-gold text-navy-dark hover:bg-gold-light'
          }`}
        >
          {isAdded ? 'Dipilih' : '+ Pilih'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;