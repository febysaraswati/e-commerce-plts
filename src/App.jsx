import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Dashboard from './pages/frontpages/Dashboard';
import ProductDetail from './pages/frontpages/ProductDetail';
import Cart from './pages/frontpages/Cart';
import Checkout from './pages/frontpages/Checkout';

import AdminDashboard from './pages/adminpages/AdminDashboard';
import AboutPage from './pages/adminpages/AboutPage';

function AppContent() {
  const { activePage } = useContext(CartContext);

  // Render berdasarkan activePage (Conditional Rendering untuk Routing)
  if (activePage === 'admin') {
    return (
      <AdminLayout>
        <AdminDashboard />
      </AdminLayout>
    );
  }

  if (activePage === 'about') {
    return (
      <AdminLayout>
        <AboutPage />
      </AdminLayout>
    );
  }

  return (
    <MainLayout>
      {activePage === 'dashboard' && <Dashboard />}
      {activePage === 'detail' && <ProductDetail />}
      {activePage === 'cart' && <Cart />}
      {activePage === 'checkout' && <Checkout />}
    </MainLayout>
  );
}

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;