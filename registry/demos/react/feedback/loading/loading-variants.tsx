import Loading from "@registry/components/react/feedback/loading";

export function LoadingVariants() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Loading variant="spinner" />
      <Loading variant="dots" />
      <Loading variant="ring" />
      <Loading variant="ball" />
      <Loading variant="bars" />
      <Loading variant="infinity" />
    </div>
  );
}
