// Loading page for product

import { BreadcrumbSkeleton } from "@/components/breadcrumb-skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto py-4">
      <BreadcrumbSkeleton />
      <Card>
        <CardContent className="p-6">
          {/* Tuotteen nimi */}
          <Skeleton className="h-8 w-3/4 mb-4" />

          {/* Hinta + kategoria */}
          <div className="flex items-center gap-2 mb-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>

          {/* Erotin */}
          <Separator className="my-4 bg-gray-200" />

          {/* Kuvaus */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-20 w-full" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
