import Button from "@registry/components/react/forms/button";

export function ButtonSoft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft">Default</Button>
      <Button color="neutral" variant="soft">Neutral</Button>
      <Button color="primary" variant="soft">Primary</Button>
      <Button color="secondary" variant="soft">Secondary</Button>
      <Button color="accent" variant="soft">Accent</Button>
      <Button color="info" variant="soft">Info</Button>
      <Button color="success" variant="soft">Success</Button>
      <Button color="warning" variant="soft">Warning</Button>
      <Button color="error" variant="soft">Error</Button>
    </div>
  );
}
