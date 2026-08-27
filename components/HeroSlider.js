'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/slide-1.jpg',
    title: 'Koleksi Pegangan Pintu Klasik',
    subtitle: 'Mahakarya pengrajin kuningan terbaik dari Bali.',
    link: '#product'
  },
  {
    image: '/slide-2.jpg',
    title: 'Gagang & Aksesoris Kayu Mewah',
    subtitle: 'Sentuhan elegan untuk interior rumah impian Anda.',
    link: '#product'
  },
  {
    image: '/slide-3.jpg',
    title: 'Kunci & Finishing Premium',
    subtitle: 'Detail presisi tinggi dengan estetika klasik berkelas.',
    link: '#product'
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div style={{ 
      width: '100vw', 
      position: 'relative', 
      left: '50%', 
      right: '50%', 
      marginLeft: '-50vw', 
      marginRight: '-50vw', 
      padding: 0, 
      fontFamily: 'sans-serif', 
      overflow: 'hidden' 
    }}>
      
      <style>{`
        .hero-slider-container {
          position: relative;
          width: 100vw;
          height: 600px;
        }
        .btn-get-it-now {
          background-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(4px);
        }
        .btn-get-it-now:hover {
          background-color: #ffffff !important;
          color: #111827 !important;
          border-color: #ffffff !important;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }
        @media (max-width: 768px) {
          .hero-slider-container {
            height: 380px !important;
          }
          .hero-title {
            font-size: 18px !important;
          }
          .hero-subtitle {
            font-size: 12px !important;
            margin-bottom: 12px !important;
          }
          .hero-caption-box {
            padding: 14px 16px !important;
            max-width: 85% !important;
          }
          .btn-get-it-now {
            padding: 8px 14px !important;
            font-size: 12px !important;
          }
          .slider-arrow {
            width: 34px !important;
            height: 34px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <div className="hero-slider-container">
        
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
            
            {/* Kotak Transparan Hitam (Glassmorphism Elegan) */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '50px',
              zIndex: 2,
              maxWidth: '550px'
            }}>
              <div className="hero-caption-box" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(6px)',
                padding: '24px 28px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                color: '#ffffff'
              }}>
                <h2 className="hero-title" style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0', letterSpacing: '0.5px' }}>
                  {slide.title}
                </h2>
                <p className="hero-subtitle" style={{ fontSize: '14px', margin: '0 0 16px 0', opacity: 0.9, lineHeight: '1.4' }}>
                  {slide.subtitle}
                </p>

                {/* Tombol "Get It Now!" Transparan dengan Ikon Keranjang */}
                <a 
                  href={slide.link}
                  className="btn-get-it-now"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '13px',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {/* SVG */}
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Get It Now!
                </a>

              </div>
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
          zIndex: 3
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '26px' : '8px',
                height: '8px',
                borderRadius: '4px',
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

const arrowStyle = (position) => ({
  position: 'absolute',
  top: '50%',
  [position]: '25px',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255,255,255,0.75)',
  border: 'none',
  borderRadius: '50%',
  width: '44px',
  height: '44px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#1f2937',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 3,
  transition: 'background 0.2s ease',
  boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
});