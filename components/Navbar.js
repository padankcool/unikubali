'use client';

import { useState } from 'react';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ 
      backgroundColor: '#ffffff', 
      borderBottom: '1px solid #e5e7eb', 
      padding: '16px 40px', 
      fontFamily: 'sans-serif',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      {/* Pengaturan Responsif CSS */}
      <style>{`
        .desktop-navbar { display: flex; justify-content: space-between; align-items: center; width: 100%; }
        .mobile-navbar { display: none; }
        @media (max-width: 768px) {
          .desktop-navbar { display: none !important; }
          .mobile-navbar { display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; }
        }
      `}</style>

      {/* --- TAMPILAN DESKTOP (Logo Lebih Besar di Kiri) --- */}
      <div className="desktop-navbar">
        
        {/* 1. Logo di Kiri */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#home">
            <img 
              src="/logo.png" 
              alt="Unikubali Logo" 
              style={{ height: '55px', objectFit: 'contain', cursor: 'pointer' }} 
            />
          </a>
        </div>

        {/* 2. Menu di Tengah */}
        <div style={{ display: 'flex', gap: '35px', fontWeight: '600', fontSize: '15px' }}>
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

        {/* 3. Sosmed di Kanan */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <SocialIcons />
        </div>

      </div>

      {/* --- TAMPILAN MOBILE --- */}
      <div className="mobile-navbar">
        <a href="#home">
          <img 
            src="/logo.png" 
            alt="Unikubali Logo" 
            style={{ height: '42px', objectFit: 'contain', cursor: 'pointer' }} 
          />
        </a>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            width: '24px', 
            height: '18px', 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer',
            padding: 0
          }}
          aria-label="Menu"
        >
          <div style={{ width: '100%', height: '3px', backgroundColor: '#111827', borderRadius: '2px' }}></div>
          <div style={{ width: '100%', height: '3px', backgroundColor: '#111827', borderRadius: '2px' }}></div>
          <div style={{ width: '100%', height: '3px', backgroundColor: '#111827', borderRadius: '2px' }}></div>
        </button>
      </div>

      {/* Menu Dropdown khusus HP */}
      {isOpen && (
        <div style={{ 
          marginTop: '16px', 
          paddingTop: '16px', 
          borderTop: '1px solid #f3f4f6', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '16px' 
        }}>
          {['Home', 'Product', 'About Us'].map((menu) => {
            const isActive = activeMenu === menu;
            return (
              <a 
                key={menu}
                href={`#${menu.toLowerCase()}`}
                onClick={() => { setActiveMenu(menu); setIsOpen(false); }}
                style={{ 
                  textDecoration: 'none', 
                  color: isActive ? '#111827' : '#4b5563', 
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '16px',
                  padding: '4px 0'
                }}
              >
                {menu}
              </a>
            );
          })}

          <div style={{ display: 'flex', gap: '20px', paddingTop: '12px', borderTop: '1px solid #f3f4f6', width: '100%', justifyContent: 'center' }}>
            <SocialIcons />
          </div>
        </div>
      )}
    </nav>
  );
}

// Komponen Pendukung Ikon Sosmed
function SocialIcons() {
  return (
    <>
      {/* Instagram */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}
         onMouseEnter={(e) => e.currentTarget.style.color = '#e1306c'} 
         onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'} title="Instagram">
        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      </a>

      {/* TikTok */}
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={iconStyle}
         onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} 
         onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'} title="TikTok">
        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
        </svg>
      </a>

      {/* WhatsApp */}
      <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={iconStyle}
         onMouseEnter={(e) => e.currentTarget.style.color = '#25d366'} 
         onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'} title="WhatsApp">
        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Facebook */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}
         onMouseEnter={(e) => e.currentTarget.style.color = '#1877f2'} 
         onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'} title="Facebook">
        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      </a>
    </>
  );
}

const iconStyle = {
  color: '#4b5563',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px',
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};