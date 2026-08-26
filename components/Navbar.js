export default function Navbar() {
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

      {/* Menu Navigasi Tengah */}
      <div style={{ display: 'flex', gap: '40px', fontWeight: '600', color: '#4b5563', fontSize: '15px' }}>
        <a href="#home" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}>Home</a>
        <a href="#product" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}>Product</a>
        <a href="#about" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}>About Us</a>
      </div>

      {/* Tombol Sosial Media di Kanan */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>IG</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>TikTok</a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>WA</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>FB</a>
      </div>

    </nav>
  );
}

// Gaya tombol sosmed agar terlihat seperti tombol kecil yang rapi
const socialStyle = {
  textDecoration: 'none',
  backgroundColor: '#f3f4f6',
  color: '#374151',
  padding: '6px 12px',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: '700',
  display: 'inline-block'
};