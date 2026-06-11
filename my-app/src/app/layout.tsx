export const metadata = {
  title: "My App",
  description: "My App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>Header</header>
        <main>
          <h1 >
            {children}
          </h1>
        </main>
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>Footer</footer>
      </body>
    </html>
  );
}