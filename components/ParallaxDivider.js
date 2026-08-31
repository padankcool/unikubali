'use client';

export default function ParallaxDivider() {
  return (
    <section className="parallax-section">
      <style>{`
        .parallax-section {
          position: relative;
          height: 280px; /* Tinggi area pemisah yang pas, tidak terlalu memakan layar */
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('/slide-3.jpg'); /* Kita pakai salah satu gambar estetik Anda */
          background-attachment: fixed; /* KUNCI PARALLAX: Gambar menempel di latar */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          overflow: hidden;
        }

        .parallax-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(17, 24, 39, 0.8); /* Warna gelap transparan agar teks terbaca jelas */
          z-index: 1;
        }

        .parallax-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          color: #ffffff;
        }

        /* PERLINDUNGAN AMAN KHUSUS iOS/iPhone: 
           iOS sering error dengan efek parallax fixed. Jadi di iPhone, kita ubah otomatis jadi scroll biasa agar web tidak rusak/nge-zoom. */
        @supports (-webkit-touch-callout: none) {
          .parallax-section {
            background-attachment: scroll;
          }
        }
      `}</style>

      {/* Lapisan Gelap */}
      <div className="parallax-overlay"></div>

      {/* Teks Elegan di Tengah Parallax */}
      <div className="parallax-content">
        <h3 style={{ 
          fontSize: '26px', 
          fontWeight: '800', 
          letterSpacing: '2px', 
          textTransform: 'uppercase', 
          margin: '0 0 10px 0',
          color: '#d4af37' // Warna Emas
        }}>
          Karya Seni Abadi
        </h3>
        <p style={{ 
          fontSize: '15px', 
          fontWeight: '300', 
          letterSpacing: '1px',
          margin: 0,
          opacity: 0.9,
          fontFamily: 'sans-serif'
        }}>
          Sentuhan presisi tinggi dari pengrajin terbaik Bali untuk hunian premium Anda.
        </p>
      </div>
    </section>
  );
}