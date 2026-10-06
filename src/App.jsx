import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';


// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages - Front Office
import Dashboard from './pages/frontpages/Dashboard';
import ProductDetail from './pages/frontpages/ProductDetail';
import Cart from './pages/frontpages/Cart';
import Checkout from './pages/frontpages/Checkout';

// Pages - Back Office / Admin
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AboutPage from './pages/adminpages/AboutPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {/* Main Layout Routes (Public / Customer) */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

          {/* Admin Layout Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="about" element={<AboutPage />} />
          </Route>

          {/* Fallback Route - Redirect jika URL tidak ditemukan */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;