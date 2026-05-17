import Progress from "@registry/components/react/feedback/progress";

export function ProgressIndeterminate() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Progress className="w-full" />
      <Progress color="primary" className="w-full" />
      <Progress color="success" className="w-full" />
    </div>
  );
}
