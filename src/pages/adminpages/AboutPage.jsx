import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-navy-card border border-gold rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gold mb-3">Tentang VelaSolaris</h2>
      <p className="text-slate-300 leading-relaxed">
        VelaSolaris membantu memenuhi kebutuhan energi hunian modern dan sektor industri secara optimal melalui PLTS baik On-Grid maupun Off-Grid Hybrid yang Efisien, Hemat, dan Berkelanjutan.
      </p>

      <hr className="border-gold my-6" />

      <h3 className="text-lg font-bold text-gold-accent mb-3">Kontak Resmi:</h3>
      <div className="space-y-1 text-slate-400">
        <p>📞 WhatsApp: +62 813 1837 4450</p>
        <p>✉️ Email: sales.velasolaris@gmail.com</p>
        <p>🌐 Instagram: @velasolaris.id</p>
      </div>
    </div>
  );
};

export default AboutPage;