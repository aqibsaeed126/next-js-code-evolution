import Link from "next/link";

export const metadata = {
  title: "My App",
  description: "My App Description",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>Auth Root Layout Header</header>
        <main>
    
          
          
          <h1 >
            {children}
          </h1>
          
        </main>
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>Auth Root Layout Footer</footer>
      </body>
    </html>
  );
}