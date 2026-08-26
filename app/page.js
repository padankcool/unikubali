import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdfbf7', fontFamily: 'sans-serif', margin: 0, padding: 0, color: '#1f2937' }}>
      
      {/* Memanggil Komponen Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div style={{ maxWidth: '800px', margin: '60px auto', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '10px' }}>Koleksi Aksesoris Rumah Estetik</h1>
        <p style={{ color: '#6b7280', fontSize: '16px' }}>Langsung dari pengrajin terbaik di Bali.</p>
      </div>

    </div>
  );
}