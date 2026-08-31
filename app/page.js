import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ProductGrid from '../components/ProductGrid';
import AboutUs from '../components/AboutUs';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, width: '100%', backgroundColor: '#fdfbf7' }}>
      
      {/* --- CSS KHUSUS EFEK TIRAI (CURTAIN PARALLAX) --- */}
      <style>{`
        .hero-parallax-fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 0; /* Dipaku di lapisan paling belakang */
        }
        
        .main-content-overlay {
          position: relative;
          z-index: 10; /* Lapisan di atas slider */
          background-color: #fdfbf7;
          margin-top: 600px; /* Jarak didorong sesuai tinggi HeroSlider Desktop */
          box-shadow: 0 -25px 40px rgba(0,0,0,0.12); /* Bayangan atas agar terasa efek lembaran menumpuk */
        }

        /* Penyesuaian khusus saat dibuka di HP */
        @media (max-width: 768px) {
          .main-content-overlay {
            margin-top: 420px; /* Jarak didorong sesuai tinggi HeroSlider HP */
          }
        }
      `}</style>

      {/* 1. Navbar Melayang (Lapisan Paling Atas) */}
      <Navbar />

      {/* 2. Pembungkus Slider (Berhenti & Diam di Belakang Layar) */}
      <div className="hero-parallax-fixed">
        <HeroSlider />
      </div>

      {/* 3. Pembungkus Konten Bawah (Meluncur Naik Menutupi Slider) */}
      <div className="main-content-overlay">
        
        {/* Katalog Produk */}
        <ProductGrid />

        {/* Tentang Kami */}
        <AboutUs />

        {/* Footer Minimalis */}
        <footer style={{ backgroundColor: '#111827', color: '#9ca3af', padding: '30px 20px', textAlign: 'center', fontSize: '14px', fontFamily: 'sans-serif' }}>
          © {new Date().getFullYear()} UNIKUBALI. All rights reserved.
        </footer>
      </div>

      {/* Tombol WhatsApp Mengambang */}
      <FloatingWhatsApp />

    </main>
  );
}