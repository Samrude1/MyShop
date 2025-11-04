import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import type { Prisma } from "@/app/generated/prisma";

type FullProduct = Prisma.ProductGetPayload<{
  select: {
    id: true;
    name: true;
    description: true;
    price: true;
    image: true;
    slug: true;
    categoryId: true;
  };
}>;

export function ProductCard({ product }: { product: FullProduct }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="relative aspect-video">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-white-600">{formatPrice(product.price)}</p>
      <p className="text-white-600">{product.description}</p>
    </div>
  );
}
