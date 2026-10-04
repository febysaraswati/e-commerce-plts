import React, { useState } from 'react';
import { solarPackages } from '../../utils/data';
import ProductCard from '../../components/ProductCard';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Conditional Filtering
  const filteredPackages = solarPackages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.capacity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#D4AF37' }}>Energi Cerdas untuk Masa Depan</h1>
        <p style={{ color: '#8892B0' }}>
          VelaSolaris membantu kebutuhan energi hunian modern dan sektor industri secara optimal melalui PLTS Off-Grid Hybrid.
        </p>

        <input
          type="text"
          placeholder="Cari kapasitas PLTS (contoh: 2600 Wp)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid #D4AF37',
            backgroundColor: '#112240',
            color: '#FFF',
            marginTop: '1rem'
          }}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredPackages.map(pkg => (
          <ProductCard key={pkg.id} product={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;