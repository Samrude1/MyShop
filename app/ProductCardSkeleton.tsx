// Product card skeleton for loading states

import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProductCardSkeleton() {
  return (
    <Card className="pt-0 overflow-hidden">
      <div className="relative aspect-video">
        <Skeleton className="absolute inset-0 object-cover w-full h-full" />
      </div>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-3/4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-full" />
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Skeleton className="h-4 w-1/4" />
      </CardFooter>
    </Card>
  );
}
