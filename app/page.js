import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ProductGrid from '../components/ProductGrid';
import AboutUs from '../components/AboutUs';
import RevealOnScroll from '../components/RevealOnScroll'; // <-- Import komponen animasi

export default function Home() {
  return (
    <main style={{ backgroundColor: '#fdfbf7', margin: 0, padding: 0, width: '100%' }}>
      
      {/* 1. Navbar Melayang (Sticky/Fixed) */}
      <Navbar />

      {/* 2. Hero Slider (Muncul duluan tanpa efek scroll) */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* 3. Katalog Produk (Dibungkus efek muncul perlahan) */}
      <RevealOnScroll delay={0.1}>
        <ProductGrid />
      </RevealOnScroll>

      {/* 4. Tentang Kami (Dibungkus efek muncul perlahan) */}
      <RevealOnScroll delay={0.2}>
        <AboutUs />
      </RevealOnScroll>

      {/* Footer (Juga dibungkus efek animasi) */}
      <RevealOnScroll delay={0.1}>
        <footer style={{ backgroundColor: '#111827', color: '#9ca3af', padding: '30px 20px', textAlign: 'center', fontSize: '14px', fontFamily: 'sans-serif' }}>
          © {new Date().getFullYear()} UNIKUBALI. All rights reserved.
        </footer>
      </RevealOnScroll>

    </main>
  );
}
