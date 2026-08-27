'use client';

import { useState } from 'react';

const productsData = [
  // --- PULL HANDLE ---
  { id: 1, name: 'Pull Handle Ukir Bali Heavy', category: 'pull handle', price: 'Rp 650.000', image: '/slide-1.jpg' },
  { id: 2, name: 'Pull Handle Kayu & Kuningan Gold', category: 'pull handle', price: 'Rp 580.000', image: '/slide-2.jpg' },
  { id: 3, name: 'Pull Handle Antique Brass Classic', category: 'pull handle', price: 'Rp 520.000', image: '/slide-1.jpg' },
  { id: 4, name: 'Pull Handle Minimalis Kuningan', category: 'pull handle', price: 'Rp 480.000', image: '/slide-2.jpg' },
  { id: 5, name: 'Pull Handle Royal Ethnic Bali', category: 'pull handle', price: 'Rp 720.000', image: '/slide-1.jpg' },

  // --- RING HANDLE ---
  { id: 6, name: 'Ring Handle Lion Head Brass', category: 'ring handle', price: 'Rp 290.000', image: '/slide-2.jpg' },
  { id: 7, name: 'Ring Handle Klasik Kayu Walnut', category: 'ring handle', price: 'Rp 250.000', image: '/slide-2.jpg' },
  { id: 8, name: 'Ring Handle Ukir Bunga Bali', category: 'ring handle', price: 'Rp 310.000', image: '/slide-1.jpg' },
  { id: 9, name: 'Ring Handle Round Antique Gold', category: 'ring handle', price: 'Rp 275.000', image: '/slide-2.jpg' },

  // --- ACCESSORIES ---
  { id: 10, name: 'Set Kunci Pintu Kuningan Ornamen', category: 'accessories', price: 'Rp 350.000', image: '/slide-3.jpg' },
  { id: 11, name: 'Engsel Pintu Ukir Brass Premium', category: 'accessories', price: 'Rp 180.000', image: '/slide-3.jpg' },
  { id: 12, name: 'Grendel Pintu Klasik Bali', category: 'accessories', price: 'Rp 145.000', image: '/slide-3.jpg' },
  { id: 13, name: 'Knob Laci Kuningan Ukir', category: 'accessories', price: 'Rp 95.000', image: '/slide-2.jpg' },
  { id: 14, name: 'Gantungan Baju Brass Vintage', category: 'accessories', price: 'Rp 210.000', image: '/slide-3.jpg' }
];

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'pull handle', label: 'Pull Handle' },
  { id: 'ring handle', label: 'Ring Handle' },
  { id: 'accessories', label: 'Accessories' }
];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(item => item.category === selectedCategory);

  return (
    <section id="product" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', margin: '0 0 10px 0', letterSpacing: '1px' }}>
          Koleksi Produk Kami
        </h2>
        <p style={{ color: '#6b7280', fontSize: '15px', margin: 0 }}>
          Eksplorasi 14 mahakarya ornamen & kerajinan kuningan pilihan dari Unikubali.
        </p>
      </div>

      {/* Navigasi Filter Kategori */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '45px', flexWrap: 'wrap' }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
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

      {/* Grid Produk */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
        {filteredProducts.map((item) => (
          <div 
            key={item.id} 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid #f3f4f6',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '18px' }}>
                <span style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {item.category}
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', margin: '6px 0 8px 0' }}>
                  {item.name}
                </h3>
              </div>
            </div>

            <div style={{ padding: '0 18px 18px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f9fafb', paddingTop: '12px' }}>
              <span style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>
                {item.price}
              </span>
              <a 
                href={`https://wa.me/?text=Halo%20Unikubali,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.name)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#111827',
                  color: '#ffffff',
                  padding: '7px 14px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: '600'
                }}
              >
                Pesan
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}