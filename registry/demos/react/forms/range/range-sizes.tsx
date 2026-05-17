import Range from "@registry/components/react/forms/range";

export function RangeSizes() {
  return (
    <div className="flex flex-col gap-4">
      <Range size="xs" defaultValue={40} />
      <Range size="sm" defaultValue={40} />
      <Range size="md" defaultValue={40} />
      <Range size="lg" defaultValue={40} />
      <Range size="xl" defaultValue={40} />
    </div>
  );
}
