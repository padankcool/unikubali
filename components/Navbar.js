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
      fontFamily: 'sans-serif'
    }}>
      
      {/* Logo */}
      <div style={{ fontSize: '26px', fontWeight: '900', letterSpacing: '3px', color: '#111827' }}>
        UNIKUBALI
      </div>

      {/* Menu Tengah */}
      <div style={{ display: 'flex', gap: '40px', fontWeight: '600', color: '#4b5563', fontSize: '15px' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Product</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
      </div>

      {/* Sosmed Kanan */}
      <div style={{ display: 'flex', gap: '20px', color: '#6b7280', fontSize: '14px', fontWeight: '700' }}>
        <span>IG</span>
        <span>TikTok</span>
        <span>WA</span>
        <span>FB</span>
      </div>

    </nav>
  );
}