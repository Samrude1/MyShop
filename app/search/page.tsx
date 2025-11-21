import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "../ProductCard";
import { delay } from "@/lib/utils";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import ProductSkeleton from "../ProductSkeleton";

type SearchPageProps = {
  searchParams: Promise<{ query: string }>;
};

async function Products({ query }: { query: string }) {
  // Haetaan tuotteet ja kokonaismäärä rinnakkain
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    take: 18,
  });

  await delay(1000); // Simuloidaan viivettä

  if (products.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <p>No results found</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.query?.trim() ?? "";

  const breadcrumbs = [
    { label: "Products", href: "/" },
    {
      label: `Results for "${query}"`,
      href: `/search?query=${encodeURIComponent(query)}`,
      active: true,
    },
  ];

  return (
    <main className="container mx-auto py-4">
      <Breadcrumbs items={breadcrumbs} />

      <Suspense key={query} fallback={<ProductSkeleton />}>
        <Products query={query} />
      </Suspense>
    </main>
  );
}
