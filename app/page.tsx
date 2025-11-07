import { ProductCard } from "./ProductCard";
import { prisma } from "@/lib/prisma";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Suspense } from "react";
import ProductSkeleton from "./ProductSkeleton";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const pageSize = 3;

async function Products({ page }: { page: number }) {
  const skip = (page - 1) * pageSize;

  // Haetaan tuotteet ja kokonaismäärä rinnakkain
  const products = await prisma.product.findMany({
    skip,
    take: pageSize,
  });

  // Simuloidaan pieni viive esim. latausruutua varten
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <>
      <p className="text-white-600 mb-8">Showing {products.length} products</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default async function HomePage(props: { searchParams: SearchParams }) {
  // Odotetaan searchParams ennen käyttöä
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;

  const total = await prisma.product.count();
  const totalPages = Math.ceil(total / pageSize);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white-800">Our Products</h1>

      <Suspense key={page} fallback={<ProductSkeleton />}>
        <Products page={page} />
      </Suspense>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${page > 1 ? page - 1 : 1}`}
              aria-disabled={page === 1}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink href={`?page=${i + 1}`} isActive={page === i + 1}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href={`?page=${page < totalPages ? page + 1 : totalPages}`}
              aria-disabled={page === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
