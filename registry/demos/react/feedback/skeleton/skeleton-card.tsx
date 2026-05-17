import Skeleton from "@registry/components/react/feedback/skeleton";

export function SkeletonCard() {
  return (
    <div className="card bg-base-100 shadow-sm w-72">
      <div className="card-body gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-full shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
        <Skeleton className="h-24 w-full rounded-lg" />
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1 rounded-btn" />
          <Skeleton className="h-8 flex-1 rounded-btn" />
        </div>
      </div>
    </div>
  );
}
