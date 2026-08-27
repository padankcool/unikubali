export default function RootLayout({ children }) {
  return (
    <html lang="id" style={{ scrollBehavior: 'smooth' }}>
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}