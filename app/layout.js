import "./globals.css"; // <--- INI NYAWA DESAINNYA, JANGAN SAMPAI HILANG

export const metadata = {
  title: "Unikubali | Etalase Aksesoris Rumah",
  description: "Koleksi aksesoris rumah buatan tangan estetik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}