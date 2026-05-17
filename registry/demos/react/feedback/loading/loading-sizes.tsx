import Loading from "@registry/components/react/feedback/loading";

export function LoadingSizes() {
  return (
    <div className="flex items-center gap-4">
      <Loading size="xs" />
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
      <Loading size="xl" />
    </div>
  );
}
