export default async function ProductReview({ params }: { params: Promise<{ productId: string}> }) {
  const { productId } = await params;
  return <div>All Reviews for Product {productId}</div>;
}