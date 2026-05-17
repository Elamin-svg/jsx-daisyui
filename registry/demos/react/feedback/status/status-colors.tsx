import Status from "@registry/components/react/feedback/status";

export function StatusColors() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Status color="neutral" />
        <Status color="primary" />
        <Status color="secondary" />
        <Status color="accent" />
      </div>
      <div className="flex items-center gap-4">
        <Status color="info" />
        <Status color="success" />
        <Status color="warning" />
        <Status color="error" />
      </div>
    </div>
  );
}
