import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const id = (await params).productId;

  // title coming from promise or API
  const title = await new Promise((resolve) => {
    setTimeout(()=> resolve("IPhone"), 2000)
  })

  return {
    title: `Product ${title} ${id}`
  }
}

export default async function ProductDetails({params}: Props) {
    const productId  = (await params).productId;
    return <div>Details about Product {productId}</div>;
  }