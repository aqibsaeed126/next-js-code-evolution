'use client';
import Link from 'next/link';
import { useState } from 'react';

// export const metadata = {
//   title: 'My App',
//   description: 'My App Description',
// };

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState('');
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          Auth Root Layout Header
        </header>
        <main>
          <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
          </div>
          <div>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/forgot-password">Forgot Password</Link>
            <h1>{children}</h1>
          </div>
        </main>
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          Auth Root Layout Footer
        </footer>
      </body>
    </html>
  );
}
