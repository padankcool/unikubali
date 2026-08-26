'use client';

const products = [
  { 
    id: 1, 
    name: "Vas Keramik Bali", 
    price: "Rp 150.000", 
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=600&auto=format&fit=crop",
    desc: "Aksesoris rumah buatan tangan yang estetik untuk mempercantik ruangan Anda."
  },
  { 
    id: 2, 
    name: "Lampu Hias Rotan", 
    price: "Rp 250.000", 
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=600&auto=format&fit=crop",
    desc: "Aksesoris rumah buatan tangan yang estetik untuk mempercantik ruangan Anda."
  },
  { 
    id: 3, 
    name: "Karpet Anyaman", 
    price: "Rp 300.000", 
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=600&auto=format&fit=crop",
    desc: "Aksesoris rumah buatan tangan yang estetik untuk mempercantik ruangan Anda."
  },
];

export default function Home() {
  const handleOrder = (productName) => {
    // GANTI NOMOR DI BAWAH INI DENGAN NOMOR WA ANDA (Gunakan 62 di awal)
    const phoneNumber = "6281234567890"; 
    const message = `Halo admin Unikubali, saya tertarik untuk membeli produk *${productName}*. Apakah stoknya masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#fcfbf8] text-gray-900 font-serif">
      {/* Top Bar */}
      <nav className="border-b border-gray-300 py-4 px-8 flex justify-between items-center bg-white/50">
        <h1 className="text-2xl font-bold tracking-widest uppercase">UNIKUBALI</h1>
        <p className="text-sm text-gray-600 hidden md:block font-sans">Aksesoris Rumah Bali Estetik</p>
      </nav>

      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <div className="inline-block border border-gray-300 px-12 py-3 mb-4 bg-white shadow-sm">
          <h2 className="text-xl font-bold tracking-widest uppercase">Koleksi Terbaru</h2>
        </div>
        <p className="text-gray-600 text-sm font-sans tracking-wide">Katalog Produk</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl p-5 border border-gray-100 shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="w-full h-72 mb-6 overflow-hidden rounded-lg bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-serif">{product.name}</h3>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <p className="text-sm text-gray-500 mb-6 px-2">{product.desc}</p>
            
            <button 
              onClick={() => handleOrder(product.name)}
              className="mt-auto w-full bg-[#6b9071] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#56755a] transition-colors font-medium shadow-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pesan via WhatsApp
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500 font-sans">
        &copy; 2026 Unikubali. Semua hak dilindungi.
      </footer>
    </main>
  );
}