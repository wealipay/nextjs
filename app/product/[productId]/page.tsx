import { Metadata } from "next";
interface Props  { params: { productId: string } };
export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  return {
    title: `产品id ${productId}`
  };
};
export default async function ProductDetail({
  params
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <div>{productId}gggg王</div>;
}
