'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/slide-1.jpg',
    title: 'Koleksi Pegangan Pintu Klasik',
    subtitle: 'Mahakarya pengrajin kuningan terbaik dari Bali.'
  },
  {
    image: '/slide-2.jpg',
    title: 'Gagang & Aksesoris Kayu Mewah',
    subtitle: 'Sentuhan elegan untuk interior rumah impian Anda.'
  },
  {
    image: '/slide-3.jpg',
    title: 'Kunci & Finishing Premium',
    subtitle: 'Detail presisi tinggi dengan estetika klasik berkelas.'
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide berganti setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div style={{ width: '100%', margin: 0, padding: 0, fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      {/* Pengaturan Tinggi Responsif: Full di Desktop, proporsional di HP */}
      <style>{`
        .hero-slider-container {
          position: relative;
          width: 100%;
          height: 85vh; /* Tinggi pas memenuhi layar monitor */
          min-height: 450px;
        }
        @media (max-width: 768px) {
          .hero-slider-container {
            height: 380px !important; /* Tinggi pas di layar HP agar tidak offside */
          }
          .hero-title {
            font-size: 20px !important;
          }
          .hero-subtitle {
            font-size: 13px !important;
          }
          .slider-arrow {
            width: 34px !important;
            height: 34px !important;
            font-size: 14px !important;
          }
        }
      `}</style>

      <div className="hero-slider-container">
        
        {/* Gambar Slider & Teks */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentIndex === index ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: currentIndex === index ? 1 : 0
            }}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            
            {/* Gradient Overlay agar teks kontras dan elegan */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)',
              padding: '50px 40px',
              color: '#ffffff'
            }}>
              <h2 className="hero-title" style={{ fontSize: '34px', fontWeight: '800', margin: '0 0 10px 0', letterSpacing: '1px' }}>
                {slide.title}
              </h2>
              <p className="hero-subtitle" style={{ fontSize: '16px', margin: 0, opacity: 0.95 }}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Tombol Panah Kiri */}
        <button 
          onClick={prevSlide}
          className="slider-arrow"
          style={arrowStyle('left')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.75)'}
        >
          ❮
        </button>

        {/* Tombol Panah Kanan */}
        <button 
          onClick={nextSlide}
          className="slider-arrow"
          style={arrowStyle('right')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.75)'}
        >
          ❯
        </button>

        {/* Indikator Titik (Dots) di Kanan Bawah */}
        <div style={{
          position: 'absolute',
          bottom: '25px',
          right: '40px',
          display: 'flex',
          gap: '8px',
          zIndex: 2
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: currentIndex === index ? '#ffffff' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

// Style untuk Tombol Panah Slider
const arrowStyle = (position) => ({
  position: 'absolute',
  top: '50%',
  [position]: '25px',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255,255,255,0.75)',
  border: 'none',
  borderRadius: '50%',
  width: '46px',
  height: '46px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#1f2937',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  transition: 'background 0.2s ease',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
});