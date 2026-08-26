import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#fdfbf7', margin: 0, padding: 0, width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <HeroSlider />
    </main>
  );
}