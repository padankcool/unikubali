'use client';

import { useState } from 'react';

export default function Navbar() {
  // State untuk melacak menu mana yang sedang aktif
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <nav style={{ 
      backgroundColor: '#ffffff', 
      borderBottom: '1px solid #e5e7eb', 
      padding: '20px 40px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      fontFamily: 'sans-serif',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      
      {/* Logo Unikubali */}
      <div style={{ fontSize: '26px', fontWeight: '900', letterSpacing: '3px', color: '#111827', cursor: 'pointer' }}>
        UNIKUBALI
      </div>

      {/* Menu Navigasi Tengah dengan Penanda Aktif */}
      <div style={{ display: 'flex', gap: '40px', fontWeight: '600', fontSize: '15px' }}>
        {['Home', 'Product', 'About Us'].map((menu) => {
          const isActive = activeMenu === menu;
          return (
            <a 
              key={menu}
              href={`#${menu.toLowerCase()}`}
              onClick={() => setActiveMenu(menu)}
              style={{ 
                textDecoration: 'none', 
                color: isActive ? '#111827' : '#4b5563',
                borderBottom: isActive ? '2px solid #111827' : '2px solid transparent',
                paddingBottom: '4px',
                transition: 'all 0.2s ease'
              }}
            >
              {menu}
            </a>
          );
        })}
      </div>

      {/* Tombol Sosial Media dengan Efek Warna Saat Hover */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e1306c'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}>IG</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={socialStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}>TikTok</a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={socialStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#25d366'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}>WA</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1877f2'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}>FB</a>
      </div>

    </nav>
  );
}

// Gaya dasar tombol sosmed
const socialStyle = {
  textDecoration: 'none',
  backgroundColor: '#f3f4f6',
  color: '#374151',
  padding: '6px 12px',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: '700',
  display: 'inline-block',
  transition: 'background-color 0.2s ease, color 0.2s ease',
  cursor: 'pointer',
};