import Progress from "@registry/components/react/feedback/progress";

export function ProgressColors() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Neutral</p>
        <Progress color="neutral" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Primary</p>
        <Progress color="primary" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Secondary</p>
        <Progress color="secondary" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Accent</p>
        <Progress color="accent" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Info</p>
        <Progress color="info" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Success</p>
        <Progress color="success" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Warning</p>
        <Progress color="warning" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Error</p>
        <Progress color="error" value={65} max={100} className="w-full" />
      </div>
    </div>
  );
}
