import { getProductBySlug } from "@/lib/actions";
import { formatPrice } from "@/lib/format";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-white-800">{product.name}</h1>
      <p className="text-white-600 mb-2">{product.description}</p>
      <p className="text-white-800 font-semibold">
        {formatPrice(product.price)}
      </p>
    </div>
  );
}
