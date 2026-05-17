import Stack from "@registry/components/react/layout/stack";

const DIRS = ["bottom", "top", "start", "end"] as const;

function CardItem({ label }: { label: string }) {
  return (
    <div className="text-center border border-base-content card bg-base-100">
      <div className="card-body py-4 px-6">{label}</div>
    </div>
  );
}

export function StackDirections() {
  return (
    <div className="flex flex-wrap gap-12 justify-center items-end">
      {DIRS.map((align) => (
        <div key={align} className="flex flex-col items-center gap-3">
          <Stack align={align} className="size-28">
            <CardItem label="A" />
            <CardItem label="B" />
            <CardItem label="C" />
          </Stack>
          <span className="text-xs text-base-content/50">{align}</span>
        </div>
      ))}
    </div>
  );
}
