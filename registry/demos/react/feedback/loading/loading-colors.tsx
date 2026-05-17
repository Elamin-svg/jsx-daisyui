import Loading from "@registry/components/react/feedback/loading";

export function LoadingColors() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Loading color="primary" />
      <Loading color="secondary" />
      <Loading color="accent" />
      <Loading color="info" />
      <Loading color="success" />
      <Loading color="warning" />
      <Loading color="error" />
    </div>
  );
}
