'use client';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname?.split('/')[2];
  const reviewId = pathname?.split('/')[4];
  return (
    <h1>
      404 - Custom Review Page Not Found for Product {productId} and Review{' '}
      {reviewId}
    </h1>
  );
}
