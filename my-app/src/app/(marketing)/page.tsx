import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>Welcome to the Home Page</div>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link> <br />
      <Link href="/articles/3?lang=en">Article in English</Link>
      <Link href="/articles/4?lang=fr">Article in French</Link> <br />
      <Link href="/order-product">Order Product</Link>
    </>
  );
}
