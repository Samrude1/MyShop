import { BreadcrumbSkeleton } from "@/components/breadcrumb-skeleton";
import ProductSkeleton from "./ProductSkeleton";

export default function Loading() {
  return (
    // Loading state using template from ProductCard.tsx
    <main className="container mx-auto py-4">
      <BreadcrumbSkeleton />
      <ProductSkeleton />
    </main>
  );
}
