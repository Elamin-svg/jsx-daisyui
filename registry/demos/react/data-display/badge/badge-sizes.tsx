import Badge from "@registry/components/react/data-display/badge";

export function BadgeSizes() {
  return (
    <div className="flex items-center gap-2">
      <Badge color="primary" size="xs">XSmall</Badge>
      <Badge color="primary" size="sm">Small</Badge>
      <Badge color="primary" size="md">Medium</Badge>
      <Badge color="primary" size="lg">Large</Badge>
      <Badge color="primary" size="xl">XLarge</Badge>
    </div>
  );
}
