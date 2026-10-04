import React from 'react';
import { solarPackages } from '../../utils/data';

const AdminDashboard = () => {
  return (
    <div>
      <h2 style={{ color: '#D4AF37' }}>Dashboard Admin VelaSolaris</h2>
      <p style={{ color: '#8892B0' }}>Ringkasan Paket PLTS yang Tersedia Sistem:</p>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#112240', border: '1px solid #D4AF37', padding: '1.5rem', borderRadius: '8px', flex: 1 }}>
          <h3 style={{ margin: 0, color: '#8892B0' }}>Total Paket Active</h3>
          <h1 style={{ color: '#D4AF37', margin: '10px 0 0 0' }}>{solarPackages.length} Paket</h1>
        </div>
        <div style={{ backgroundColor: '#112240', border: '1px solid #D4AF37', padding: '1.5rem', borderRadius: '8px', flex: 1 }}>
          <h3 style={{ margin: 0, color: '#8892B0' }}>Sistem Operasional</h3>
          <h1 style={{ color: '#00E676', margin: '10px 0 0 0' }}>Off-Grid Hybrid</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;