import Badge from "@registry/components/react/data-display/badge";

export function BadgeVariants() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="outline">Outline</Badge>
        <Badge color="secondary" variant="outline">Outline</Badge>
        <Badge color="accent" variant="outline">Outline</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="soft">Soft</Badge>
        <Badge color="secondary" variant="soft">Soft</Badge>
        <Badge color="accent" variant="soft">Soft</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="dash">Dash</Badge>
        <Badge color="secondary" variant="dash">Dash</Badge>
        <Badge color="accent" variant="dash">Dash</Badge>
      </div>
    </div>
  );
}
