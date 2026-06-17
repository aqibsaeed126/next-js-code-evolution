'use client';

export default function RestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          Rest Root Layout Header
        </header>
        <main>
          <h1>{children}</h1>
        </main>
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          Rest Root Layout Footer
        </footer>
      </body>
    </html>
  );
}
