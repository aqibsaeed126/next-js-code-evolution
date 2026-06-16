import Link from "next/link";

export default function Home() {
  return <>
          <div>Welcome to the Home Page</div>
          <Link href="/blog">Blog</Link>
          <Link href="/products">Products</Link>
        </>;
}