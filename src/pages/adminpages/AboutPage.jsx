import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#112240', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem' }}>
      <h2 style={{ color: '#D4AF37' }}>Tentang VelaSolaris</h2>
      <p style={{ color: '#CCD6F6', lineHeight: '1.6' }}>
        VelaSolaris membantu memenuhi kebutuhan energi hunian modern dan sektor industri secara optimal melalui PLTS baik On-Grid maupun Off-Grid Hybrid yang Efisien, Hemat, dan Berkelanjutan.
      </p>
      <hr style={{ borderColor: '#D4AF37', margin: '1.5rem 0' }} />
      <h3 style={{ color: '#E6C200' }}>Kontak Resmi:</h3>
      <p style={{ color: '#8892B0' }}>📞 WhatsApp: +62 823 1000 1567</p>
      <p style={{ color: '#8892B0' }}>✉️ Email: sales.velasolaris@gmail.com</p>
    </div>
  );
};

export default AboutPage;