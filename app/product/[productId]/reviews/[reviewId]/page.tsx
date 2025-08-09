export default async function ProductView({
  params
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const {productId,reviewId}=(await params)
  return <div>{productId}的评论是{reviewId}</div>
}
