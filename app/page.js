import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ProductGrid from '../components/ProductGrid';
import AboutUs from '../components/AboutUs';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, width: '100%', backgroundColor: '#fdfbf7' }}>
      
      {/* 1. Navbar Melayang (Lapisan Paling Atas) */}
      <Navbar />

      {/* 2. Pembungkus Slider (Efek Parallax: Tertinggal & Diam di Tempat) */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1 
      }}>
        <section id="home">
          <HeroSlider />
        </section>
      </div>

      {/* 3. Pembungkus Konten Bawah (Meluncur Naik Menutupi Slider) */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        backgroundColor: '#fdfbf7', /* Warna background harus solid agar menutupi slider */
        boxShadow: '0 -15px 40px rgba(0,0,0,0.08)' /* Tambahan bayangan halus di atas agar terlihat seperti lembaran yang menimpa */
      }}>
        
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