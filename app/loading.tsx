import ProductSkeleton from "./ProductSkeleton";

export default function Loading() {
  return (
    // Loading state using template from ProductCard.tsx
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white-800">Our Products</h1>
      <p className="text-white-600 mb-8">Fetching products</p>
      <ProductSkeleton />
    </main>
  );
}
