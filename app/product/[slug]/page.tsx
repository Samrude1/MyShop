import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug } from "@/lib/actions";
import { formatPrice } from "@/lib/format";
import { delay } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
        },
      ],
    },
  };
}

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

  await delay(1000); // Simuloidaan viivettä

  const breadcrumbsItems = [
    { label: "Products", href: "/" },
    {
      label: product.category?.name,
      href: `/category/${product.category?.slug}`,
    },
    { label: product.name, href: `/product/${product.slug}`, active: true },
  ];

  return (
    <main className="container mx-auto py-4">
      <Breadcrumbs items={breadcrumbsItems} />
      <Card>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] rounded-md overflow-hidden">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-md"
              />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-lg">
                {formatPrice(product.price)}
              </span>
              <Badge variant="outline">{product.category?.name}</Badge>
            </div>
            <Separator className="my-4 bg-gray-300" />
            <div className="space-y-2">
              <h2 className="font-medium">Description</h2>
              <p>{product.description}</p>
            </div>
            <Separator className="my-4 bg-gray-300" />
            <div className="space-y-2">
              <h2 className="font-medium">Availibility</h2>
              <div className="flex items-center gap-2">
                {product.inventory > 0 ? (
                  <Badge className="bg-green-500 text-white">In Stock</Badge>
                ) : (
                  <Badge className="bg-red-500 text-white">Out of Stock</Badge>
                )}
                <span>{product.inventory} items available</span>
              </div>
            </div>
            <Separator className="my-3 bg-gray-300" />
            <div>
              <Button
                className="bg-gray-300 w-full"
                disabled={product.inventory === 0}
              >
                <ShoppingCart className="mr-1 w-4 h-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
