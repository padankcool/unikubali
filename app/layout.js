import "./globals.css"; // <- Baris ini sangat krusial!

export const metadata = {
  title: "Unikubali | Etalase Aksesoris Rumah",
  description: "Koleksi aksesoris rumah buatan tangan estetik langsung dari Bali.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}