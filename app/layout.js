import './globals.css';

// testing seo aja
export const metadata = {
  title: 'Unikubali | Kerajinan Kuningan & Ornamen Premium Bali',
  description: 'Pusat pengrajin handle pintu kuningan, gagang kayu, dan aksesoris rumah estetik dengan kualitas premium asli dari Bali. Melayani custom desain.',
  keywords: ['handle pintu kuningan', 'kerajinan bali', 'pull handle kuningan', 'aksesoris pintu', 'unikubali', 'ornamen kuningan bali'],
  openGraph: {
    title: 'Unikubali | Kerajinan Kuningan Premium',
    description: 'Tingkatkan kemewahan hunian Anda dengan sentuhan ukiran tradisional Bali. Lihat katalog kami sekarang!',
    url: 'https://unikubali.com', // sementaraa ajaa ini utnuk url kedepannya
    siteName: 'Unikubali',
    images: [
      {
        url: '/slide-1.jpg', // slideede tampilin aja
        width: 1200,
        height: 630,
        alt: 'Unikubali Premium Brass Handle',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}