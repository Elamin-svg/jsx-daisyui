import Button from "@registry/components/react/forms/button";

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="dash">Dash</Button>
      <Button variant="soft">Soft</Button>
    </div>
  );
}
