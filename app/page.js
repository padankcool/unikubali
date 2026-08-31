import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ProductGrid from '../components/ProductGrid';
import AboutUs from '../components/AboutUs';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#fdfbf7', margin: 0, padding: 0, width: '100%' }}>
      
      {/* 1. Navbar Melayang (Fixed & Stabil) */}
      <Navbar />

      {/* 2. Hero Slider */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* 3. Katalog Produk (Tampil Instan & Responsif) */}
      <ProductGrid />

      {/* 4. Tentang Kami */}
      <AboutUs />

      {/* Footer Minimalis */}
      <footer style={{ backgroundColor: '#111827', color: '#9ca3af', padding: '30px 20px', textAlign: 'center', fontSize: '14px', fontFamily: 'sans-serif' }}>
        © {new Date().getFullYear()} UNIKUBALI. All rights reserved.
      </footer>

      {/* Tombol WhatsApp (Aman & Ringan) */}
      <FloatingWhatsApp />

    </main>
  );
}