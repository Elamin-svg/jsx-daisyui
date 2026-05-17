import Skeleton from "@registry/components/react/feedback/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 py-4 px-4 pt-12">
      <div className="flex flex-col gap-2.5">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-7 w-[90%]" />
      </div>
      <Skeleton className="h-52  w-full" />{" "}
      <Skeleton className="h-52  w-full" />{" "}
      <Skeleton className="h-52  w-full" />
    </div>
  );
}
