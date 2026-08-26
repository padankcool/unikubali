'use client';

// DATA PRODUK (Tetap sama, hanya gambarnya pakai placeholder yang pasti loading)
const products = [
  { 
    id: 1, 
    name: "Vas Keramik Bali", 
    price: "Rp 150.000", 
    image: "https://via.placeholder.com/600x400/f3f4f6/1f2937?text=Vas+Keramik" 
  },
  { 
    id: 2, 
    name: "Lampu Hias Rotan", 
    price: "Rp 250.000", 
    image: "https://via.placeholder.com/600x400/f3f4f6/1f2937?text=Lampu+Rotan" 
  },
  { 
    id: 3, 
    name: "Karpet Anyaman", 
    price: "Rp 300.000", 
    image: "https://via.placeholder.com/600x400/f3f4f6/1f2937?text=Karpet+Anyaman" 
  },
];

export default function Home() {
  
  // Fungsi WhatsApp (Tetap sama)
  const handleOrder = (productName) => {
    const phoneNumber = "6281234567890"; // GANTI DENGAN NOMOR WA ANDA
    const message = `Halo admin Unikubali, saya tertarik untuk membeli produk *${productName}*. Apakah stoknya masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    // Bagian utama: Kita kasih warna background abu muda biar bersih
    <main className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* Header/Navigasi Simpel */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-gray-950 tracking-tighter">UNIKUBALI</h1>
          <p className="text-sm text-gray-500 font-medium">Aksesoris Rumah Bali Estetik</p>
        </div>
      </nav>

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <header className="mb-16 text-center pt-8">
          <h2 className="text-sm font-semibold text-green-700 uppercase tracking-widest">Koleksi Terbaru</h2>
          <p className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">Katalog Produk</p>
          <div className="mt-5 max-w-xl mx-auto h-1 bg-green-200 rounded-full"></div>
        </header>

        {/* Grid Produk: Sangat responsif dari HP ke Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col">
              
              {/* Wadah Gambar: Biar proporsinya sama */}
              <div className="aspect-w-16 aspect-h-11 w-full overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Detail Produk */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-950 tracking-tight">{product.name}</h3>
                <p className="text-gray-500 mt-2 text-base leading-relaxed flex-grow">Aksesoris rumah buatan tangan yang estetik untuk mempercantik ruangan Anda.</p>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                  <p className="text-2xl font-extrabold text-green-700">{product.price}</p>
                  
                  <button 
                    onClick={() => handleOrder(product.name)}
                    className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 active:bg-green-800 transition-colors text-sm flex items-center gap-2"
                  >
                    Tanya Stok
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Simpel */}
      <footer className="mt-24 border-t border-gray-100 bg-white py-10 text-center">
        <p className="text-sm text-gray-500">&copy; 2024 Unikubali. Semua hak dilindungi.</p>
      </footer>
    </main>
  );
}