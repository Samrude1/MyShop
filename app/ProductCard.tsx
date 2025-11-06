import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import type { Prisma } from "@/app/generated/prisma";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="pt-0 overflow-hidden">
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
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter>{product.price}</CardFooter>
    </Card>
  );
}
