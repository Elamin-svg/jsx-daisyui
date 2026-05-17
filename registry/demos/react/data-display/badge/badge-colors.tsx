import Badge from "@registry/components/react/data-display/badge";

export function BadgeColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="neutral">Neutral</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="accent">Accent</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="ghost">Ghost</Badge>
    </div>
  );
}
