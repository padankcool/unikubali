import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdfbf7', margin: 0, padding: 0 }}>
      
      {/* Modul 1: Navbar */}
      <Navbar />

      {/* Modul 2: Hero Slider Produk */}
      <HeroSlider />

    </div>
  );
}