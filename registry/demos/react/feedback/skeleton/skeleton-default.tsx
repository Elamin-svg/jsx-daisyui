import Skeleton from "@registry/components/react/feedback/skeleton";

export function SkeletonDefault() {
  return (
    <div className="flex flex-col gap-4 w-52">
      <Skeleton className="h-32 w-full rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
