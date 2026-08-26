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
    <div style={{ width: '100%', maxWidth: '1200px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'relative', width: '100%', height: '480px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        
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
              background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
              padding: '40px 30px',
              color: '#ffffff'
            }}>
              <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0', letterSpacing: '1px' }}>
                {slide.title}
              </h2>
              <p style={{ fontSize: '15px', margin: 0, opacity: 0.9 }}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Tombol Panah Kiri */}
        <button 
          onClick={prevSlide}
          style={arrowStyle('left')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.75)'}
        >
          ❮
        </button>

        {/* Tombol Panah Kanan */}
        <button 
          onClick={nextSlide}
          style={arrowStyle('right')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.75)'}
        >
          ❯
        </button>

        {/* Indikator Titik (Dots) di Kanan Bawah */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '30px',
          display: 'flex',
          gap: '8px',
          zIndex: 2
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '24px' : '10px',
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
  [position]: '20px',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255,255,255,0.75)',
  border: 'none',
  borderRadius: '50%',
  width: '42px',
  height: '42px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#1f2937',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  transition: 'background 0.2s ease',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
});