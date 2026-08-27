'use client';

export default function AboutUs() {
  return (
    <section id="about us" style={{ backgroundColor: '#ffffff', padding: '80px 20px', borderTop: '1px solid #e5e7eb', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', margin: '0 0 16px 0' }}>
          Tentang Unikubali
        </h2>
        <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', margin: '0 0 24px 0' }}>
          Kami adalah produsen dan penyedia kerajinan ornamen kuningan serta aksesoris hunian estetik asli dari Bali. Setiap detail karya dirancang dengan memadukan estetika tradisional Bali dan presisi tinggi untuk menghadirkan kesan mewah dan abadi pada interior serta eksterior rumah Anda.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
          <div>
            <h4 style={{ fontSize: '28px', fontWeight: '800', color: '#d4af37', margin: 0 }}>100%</h4>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: '4px 0 0 0' }}>Kuningan Asli</p>
          </div>
          <div>
            <h4 style={{ fontSize: '28px', fontWeight: '800', color: '#d4af37', margin: 0 }}>Handmade</h4>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: '4px 0 0 0' }}>Pengrajin Lokal Bali</p>
          </div>
          <div>
            <h4 style={{ fontSize: '28px', fontWeight: '800', color: '#d4af37', margin: 0 }}>Custom</h4>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: '4px 0 0 0' }}>Terima Desain Khusus</p>
          </div>
        </div>
      </div>
    </section>
  );
}