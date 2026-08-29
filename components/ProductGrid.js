'use client';

import { useState } from 'react';

const productsData = [
  // --- PULL HANDLE ---
  { id: 1, name: 'Pull Handle Ukir Bali Heavy', category: 'pull handle', image: '/slide-1.jpg' },
  { id: 2, name: 'Pull Handle Kayu & Kuningan Gold', category: 'pull handle', image: '/slide-2.jpg' },
  { id: 3, name: 'Pull Handle Antique Brass Classic', category: 'pull handle', image: '/slide-1.jpg' },
  { id: 4, name: 'Pull Handle Minimalis Kuningan', category: 'pull handle', image: '/slide-2.jpg' },
  { id: 5, name: 'Pull Handle Royal Ethnic Bali', category: 'pull handle', image: '/slide-1.jpg' },

  // --- RING HANDLE ---
  { id: 6, name: 'Ring Handle Lion Head Brass', category: 'ring handle', image: '/slide-2.jpg' },
  { id: 7, name: 'Ring Handle Klasik Kayu Walnut', category: 'ring handle', image: '/slide-2.jpg' },
  { id: 8, name: 'Ring Handle Ukir Bunga Bali', category: 'ring handle', image: '/slide-1.jpg' },
  { id: 9, name: 'Ring Handle Round Antique Gold', category: 'ring handle', image: '/slide-2.jpg' },

  // --- ACCESSORIES ---
  { id: 10, name: 'Set Kunci Pintu Kuningan Ornamen', category: 'accessories', image: '/slide-3.jpg' },
  { id: 11, name: 'Engsel Pintu Ukir Brass Premium', category: 'accessories', image: '/slide-3.jpg' },
  { id: 12, name: 'Grendel Pintu Klasik Bali', category: 'accessories', image: '/slide-3.jpg' },
  { id: 13, name: 'Knob Laci Kuningan Ukir', category: 'accessories', image: '/slide-2.jpg' },
  { id: 14, name: 'Gantungan Baju Brass Vintage', category: 'accessories', image: '/slide-3.jpg' }
];

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'pull handle', label: 'Pull Handle' },
  { id: 'ring handle', label: 'Ring Handle' },
  { id: 'accessories', label: 'Accessories' }
];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); 
  const [showAll, setShowAll] = useState(false); 

  const handleCategoryChange = (catId) => {
    if (catId === selectedCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(catId);
      setShowAll(false); 
      setIsAnimating(false);
    }, 200);
  };

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(item => item.category === selectedCategory);

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <section id="product" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <style>{`
        /* Transisi Filter Kategori */
        @keyframes fadeInSmooth {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .grid-smooth-transition {
          animation: fadeInSmooth 0.4s ease-out forwards;
        }

        /* Efek Zoom Out Smooth pada Gambar */
        .product-img-zoom {
          transform: scale(1.15); 
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .product-card:hover .product-img-zoom {
          transform: scale(1); 
        }

        /* Animasi Muncul Popup Lightbox */
        @keyframes popupFade {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .popup-animate {
          animation: popupFade 0.3s ease-out forwards;
        }

        /* --- PENGATURAN GRID & RESPONSIVE HP --- */
        .product-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 30px;
        }

        .product-action-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 10px;
        }

        /* KHUSUS LAYAR HP (Mobile View) */
        @media (max-width: 768px) {
          .product-grid-container {
            grid-template-columns: repeat(2, 1fr) !important; /* Paksa jadi 2 kolom (kiri-kanan) */
            gap: 12px !important; /* Kurangi jarak antar produk agar muat */
          }
          .product-card {
            height: 260px !important; /* Pendekkan tinggi gambar di HP */
          }
          .product-overlay {
            padding: 12px 10px !important; /* Kurangi ruang kosong di overlay */
          }
          .product-category-text {
            font-size: 9px !important; /* Perkecil teks kategori */
            margin-bottom: 4px !important;
          }
          .product-title {
            font-size: 13px !important; /* Perkecil judul produk */
            line-height: 1.2 !important;
          }
          .product-action-wrapper {
            flex-direction: column !important; /* Pindahkan tombol pesan ke bawah judul */
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .btn-pesan {
            padding: 6px 12px !important;
            font-size: 11px !important;
            width: 100% !important; /* Tombol memanjang penuh agar mudah ditekan */
            text-align: center !important;
          }
        }
      `}</style>

      {/* Judul Bagian */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', margin: '0 0 10px 0', letterSpacing: '1px' }}>
          Koleksi Produk Kami
        </h2>
        <p style={{ color: '#6b7280', fontSize: '15px', margin: 0 }}>
          Eksplorasi mahakarya ornamen & kerajinan kuningan eksklusif tanpa batas.
        </p>
      </div>

      {/* Tombol Filter Kategori */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '45px', flexWrap: 'wrap' }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '30px',
                border: isActive ? '1px solid #d4af37' : '1px solid #e5e7eb',
                backgroundColor: isActive ? '#111827' : '#ffffff',
                color: isActive ? '#d4af37' : '#4b5563',
                fontWeight: isActive ? '700' : '500',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid Tampilan Produk */}
      <div 
        className={`product-grid-container ${!isAnimating ? "grid-smooth-transition" : ""}`}
        style={{ 
          opacity: isAnimating ? 0 : 1,
          transition: 'opacity 0.2s ease-in-out'
        }}
      >
        {displayedProducts.map((item) => (
          <div 
            key={item.id} 
            className="product-card"
            onClick={() => setPreviewImage(item.image)} 
            style={{
              backgroundColor: '#111827', 
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              position: 'relative',
              height: '340px',
              cursor: 'pointer'
            }}
          >
            {/* Gambar Utama */}
            <img 
              src={item.image} 
              alt={item.name} 
              className="product-img-zoom"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />

            {/* Overlay Gradien & Keterangan */}
            <div className="product-overlay" style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
              padding: '24px 20px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}>
              <span className="product-category-text" style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>
                {item.category}
              </span>
              
              <div className="product-action-wrapper">
                <h3 className="product-title" style={{ fontSize: '18px', fontWeight: '700', margin: 0, lineHeight: '1.3' }}>
                  {item.name}
                </h3>
                
                {/* Tombol Pesan WhatsApp */}
                <a 
                  href={`https://wa.me/?text=Halo%20Unikubali,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.name)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-pesan"
                  onClick={(e) => e.stopPropagation()} 
                  style={{
                    backgroundColor: '#d4af37',
                    color: '#111827',
                    padding: '8px 18px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '700',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3e5ab'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
                >
                  Pesan
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Show More / Show Less */}
      {filteredProducts.length > 8 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: '12px 32px',
              borderRadius: '30px',
              border: '2px solid #111827',
              backgroundColor: 'transparent',
              color: '#111827',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111827';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#111827';
            }}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}

      {/* --- POPUP / LIGHTBOX GAMBAR FULL --- */}
      {previewImage && (
        <div 
          onClick={() => setPreviewImage(null)} 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(5px)',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
        >
          <button 
            onClick={() => setPreviewImage(null)}
            style={{
              position: 'absolute',
              top: '25px',
              right: '35px',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '40px',
              cursor: 'pointer',
              zIndex: 10001,
              padding: '10px'
            }}
          >
            &times;
          </button>
          
          <img 
            src={previewImage} 
            alt="Preview Full" 
            className="popup-animate"
            onClick={(e) => e.stopPropagation()} 
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
              objectFit: 'contain'
            }} 
          />
        </div>
      )}

    </section>
  );
}