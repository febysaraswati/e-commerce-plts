import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    if (!cartItems.some(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      activePage,
      setActivePage,
      selectedProduct,
      setSelectedProduct
    }}>
      {children}
    </CartContext.Provider>
  );
};