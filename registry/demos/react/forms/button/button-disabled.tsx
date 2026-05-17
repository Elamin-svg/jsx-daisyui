import Button from "@registry/components/react/forms/button";

export function ButtonDisabled() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button color="primary" disabled>Disabled</Button>
      <Button color="secondary" disabled>Disabled</Button>
      <Button color="neutral" variant="outline" disabled>Disabled</Button>
    </div>
  );
}
