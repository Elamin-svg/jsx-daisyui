import Status from "@registry/components/react/feedback/status";

export function StatusPing() {
  return (
    <div className="flex items-center gap-2">
      <div className="inline-grid *:[grid-area:1/1]">
        <Status color="error" className="animate-ping" />
        <Status color="error" />
      </div>
      <span>Server is down</span>
    </div>
  );
}
