import { Product } from "@/lib/mocks";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="relative aspect-video">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw , 33vw"
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-white-600">{formatPrice(product.price)}</p>
      <p className="text-white-600">{product.description}</p>
    </div>
  );
}
