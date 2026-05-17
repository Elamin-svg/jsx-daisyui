import Button from "@registry/components/react/forms/button";

export function ButtonOutline() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline">Default</Button>
      <Button color="neutral" variant="outline">Neutral</Button>
      <Button color="primary" variant="outline">Primary</Button>
      <Button color="secondary" variant="outline">Secondary</Button>
      <Button color="accent" variant="outline">Accent</Button>
      <Button color="info" variant="outline">Info</Button>
      <Button color="success" variant="outline">Success</Button>
      <Button color="warning" variant="outline">Warning</Button>
      <Button color="error" variant="outline">Error</Button>
    </div>
  );
}
