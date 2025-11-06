import { ProductCardSkeleton } from "./ProductCardSkeleton";

export default function Loading() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white-800">Our Products</h1>
      <p className="text-white-600 mb-8">Showing 5 products</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 5 }, (_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}
