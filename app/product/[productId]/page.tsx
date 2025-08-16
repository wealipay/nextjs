import { Metadata } from "next";
type Props = { params: { productId: string } };
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const productId = (await props).productId;
  return{
    title:`产品id${productId}`
  }
};
export default async function ProductDetail({
  params
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <div>{productId}</div>;
}
