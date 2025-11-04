import { ProductCard } from "./ProductCard";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/app/generated/prisma";

// Use Prisma's generated ProductGetPayload to get a full product shape (including price, image, slug)
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

export default async function HomePage() {
  const products = (await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      image: true,
      slug: true,
      categoryId: true,
    },
  })) as FullProduct[];
  console.log("Fetched products from database:", products);
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white-800">Our Products</h1>
      <p className="text-white-600 mb-8">Showing {products.length} products</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: FullProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
