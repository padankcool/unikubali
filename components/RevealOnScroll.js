'use client';

import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Intersection Observer untuk mendeteksi elemen masuk ke layar
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Berhenti memantau setelah animasi muncul (agar tidak berulang-ulang)
          observer.unobserve(entry.target); 
        }
      },
      {
        threshold: 0.1, // Animasi terpicu saat 10% elemen sudah masuk layar
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)', // Meluncur dari bawah (40px)
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        width: '100%'
      }}
    >
      {children}
    </div>
  );
}