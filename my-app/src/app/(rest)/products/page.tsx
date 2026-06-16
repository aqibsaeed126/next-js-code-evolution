import Link from "next/link";

export default function ProductsList() {
  const id = 100;
    return <>
            <Link href="/">Home</Link>
            <h1>List of Products</h1>
            <Link href="/products/1">Product 1</Link>
            <Link href="/products/2" replace>Product 2</Link>
            <Link href={`/products/${id}`}>Product {id}</Link>
            </>;
  }