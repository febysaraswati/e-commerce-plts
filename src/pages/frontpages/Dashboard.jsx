import React, { useState } from 'react';
import { solarPackages } from '../../utils/data';
import ProductCard from '../../components/ProductCard';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPackages = solarPackages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.capacity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gold mb-2">Energi Cerdas untuk Masa Depan</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          VelaSolaris membantu kebutuhan energi hunian modern dan sektor industri secara optimal melalui PLTS Off-Grid Hybrid.
        </p>

        <input
          type="text"
          placeholder="Cari kapasitas PLTS (contoh: 2600 Wp)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 rounded border border-gold bg-navy-card text-white mt-4 focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map(pkg => (
          <ProductCard key={pkg.id} product={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;