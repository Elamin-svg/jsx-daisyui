import Status from "@registry/components/react/feedback/status";

export function StatusBounce() {
  return (
    <div className="flex items-center gap-2">
      <Status color="info" className="animate-bounce" />
      <span>Unread messages</span>
    </div>
  );
}
