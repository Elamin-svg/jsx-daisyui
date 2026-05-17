import Status from "@registry/components/react/feedback/status";

export function StatusSizes() {
  return (
    <div className="flex items-center gap-4">
      <Status size="xs" color="primary" />
      <Status size="sm" color="primary" />
      <Status size="md" color="primary" />
      <Status size="lg" color="primary" />
      <Status size="xl" color="primary" />
    </div>
  );
}
