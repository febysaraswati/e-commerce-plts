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
    <div style={{
      backgroundColor: '#112240',
      border: '1px solid #D4AF37',
      borderRadius: '8px',
      padding: '1.5rem',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
    }}>
      <div>
        <span style={{
          backgroundColor: '#D4AF37',
          color: '#0A192F',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}>
          {product.category}
        </span>
        <h3 style={{ color: '#F4E071', marginTop: '10px' }}>{product.name}</h3>
        <h2 style={{ color: '#D4AF37', margin: '10px 0' }}>Rp {product.priceDisplay}</h2>
        <p style={{ fontSize: '0.9rem', color: '#8892B0' }}>
          ⚡ Estimasi harian: <strong>{product.dailyKwh}</strong>
        </p>
        <p style={{ fontSize: '0.9rem', color: '#8892B0' }}>
          💰 Penghematan: <strong>{product.monthlySavings}/bln</strong>
        </p>
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={handleDetail}
          style={{
            flex: 1,
            padding: '0.5rem',
            backgroundColor: 'transparent',
            color: '#D4AF37',
            border: '1px solid #D4AF37',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Spesifikasi
        </button>
        <button
          onClick={() => addToCart(product)}
          disabled={isAdded}
          style={{
            flex: 1,
            padding: '0.5rem',
            backgroundColor: isAdded ? '#444' : '#D4AF37',
            color: isAdded ? '#AAA' : '#0A192F',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: isAdded ? 'not-allowed' : 'pointer'
          }}
        >
          {isAdded ? 'Dipilih' : '+ Pilih'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;