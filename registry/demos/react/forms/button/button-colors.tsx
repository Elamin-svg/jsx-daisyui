import Button from "@registry/components/react/forms/button";

export function ButtonColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </div>
  );
}
