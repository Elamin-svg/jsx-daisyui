import Button from "@registry/components/react/forms/button";

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs" color="primary">XSmall</Button>
      <Button size="sm" color="primary">Small</Button>
      <Button size="md" color="primary">Medium</Button>
      <Button size="lg" color="primary">Large</Button>
      <Button size="xl" color="primary">XLarge</Button>
    </div>
  );
}
