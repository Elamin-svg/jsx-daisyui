import Button from "@registry/components/react/forms/button";

export function ButtonDash() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="dash">Default</Button>
      <Button color="neutral" variant="dash">Neutral</Button>
      <Button color="primary" variant="dash">Primary</Button>
      <Button color="secondary" variant="dash">Secondary</Button>
      <Button color="accent" variant="dash">Accent</Button>
      <Button color="info" variant="dash">Info</Button>
      <Button color="success" variant="dash">Success</Button>
      <Button color="warning" variant="dash">Warning</Button>
      <Button color="error" variant="dash">Error</Button>
    </div>
  );
}
