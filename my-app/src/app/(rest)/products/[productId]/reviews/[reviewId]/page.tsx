import { notFound, redirect } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    // occasionally generate error
    //notFound();
    //redirect('/products');
    throw new Error('Review id greater than 1000 Error');
  }
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
    //redirect('/products');
  }

  return (
    <div>
      Details about Product {productId} Review {reviewId}
    </div>
  );
}
