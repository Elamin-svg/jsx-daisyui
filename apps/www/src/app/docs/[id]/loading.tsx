import Skeleton from "@registry/components/react/feedback/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-12">
      <Skeleton className="h-70 w-full" />
      <Skeleton className="h-70 w-full" />
      <Skeleton className="h-70 w-full" />
    </div>
  );
}
