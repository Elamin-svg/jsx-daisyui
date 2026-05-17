import Range from "@registry/components/react/forms/range";

export function RangeColors() {
  return (
    <div className="flex flex-col gap-4">
      <Range color="neutral"   defaultValue={60} />
      <Range color="primary"   defaultValue={60} />
      <Range color="secondary" defaultValue={60} />
      <Range color="accent"    defaultValue={60} />
      <Range color="info"      defaultValue={60} />
      <Range color="success"   defaultValue={60} />
      <Range color="warning"   defaultValue={60} />
      <Range color="error"     defaultValue={60} />
    </div>
  );
}
