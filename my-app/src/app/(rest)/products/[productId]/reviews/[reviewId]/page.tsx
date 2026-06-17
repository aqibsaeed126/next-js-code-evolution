import { notFound, redirect } from 'next/navigation';

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    //notFound();
    //redirect('/products');
    throw new Error('Review id greater than 1000 Error');
  }
  return (
    <div>
      Details about Product {productId} Review {reviewId}
    </div>
  );
}
