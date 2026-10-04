import React from 'react';
import { solarPackages } from '../../utils/data';

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gold mb-1">Dashboard Admin VelaSolaris</h2>
      <p className="text-slate-400 mb-6">Ringkasan Paket PLTS yang Tersedia Sistem:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-navy-card border border-gold p-6 rounded-lg">
          <h3 className="text-slate-400 text-sm font-medium">Total Paket Active</h3>
          <h1 className="text-4xl font-extrabold text-gold mt-2">{solarPackages.length} Paket</h1>
        </div>
        <div className="bg-navy-card border border-gold p-6 rounded-lg">
          <h3 className="text-slate-400 text-sm font-medium">Sistem Operasional</h3>
          <h1 className="text-4xl font-extrabold text-green-400 mt-2">Off-Grid Hybrid</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;