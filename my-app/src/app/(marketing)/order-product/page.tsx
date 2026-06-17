'use client';
import { redirect, useRouter } from 'next/navigation';

export default function OrderProductPage() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => redirect('/')}>Place Order Redirect</button>
      <button onClick={() => router.push('/')}>Place Order Router push</button>
    </>
  );
}
