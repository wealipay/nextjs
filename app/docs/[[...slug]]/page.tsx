export default async  function Docs({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        {slug[0]}的概念{slug[1]}的文档
      </div>
    );
  } else if (slug?.length === 1) {
    <div>{slug[0]}的概念的文档</div>;
  }
  return <div>docs文档首页</div>;
}
