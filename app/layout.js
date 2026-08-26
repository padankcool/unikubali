import "./globals.css";

export const metadata = {
  title: "Unikubali | Etalase Aksesoris Rumah",
  description: "Koleksi aksesoris rumah estetik, mulai dari vas keramik, lampu hias, hingga karpet anyaman berkualitas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}