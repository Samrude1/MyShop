import { Skeleton } from "./ui/skeleton";

export function BreadcrumbSkeleton() {
  return (
    <div className="mb-6 flex items-center gap-2">
      <Skeleton className="h-4 w-10 rounded-full" />
      <Skeleton className="h-4 w-30" />
      <Skeleton className="h-4 w-60" />
    </div>
  );
}
