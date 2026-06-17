'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';

// export const metadata = {
//   title: {
//     default: "Default title",
//     template: "%s | Default title",
//   },
//   description: "My App Description",
// };

const navLinks = [
  { name: 'Revenue', href: '/revenue' },
  { name: 'Customers', href: '/customers' },
];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          Marketing Root Layout Header
        </header>
        <main>
          <div>
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <h1>{children}</h1>
        </main>
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          Marketing Root Layout Footer
        </footer>
      </body>
    </html>
  );
}
