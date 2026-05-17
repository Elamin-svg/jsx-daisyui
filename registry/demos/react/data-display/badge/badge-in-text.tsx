import Badge from "@registry/components/react/data-display/badge";

export function BadgeInText() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">
        Inbox <Badge color="primary" size="sm">4</Badge>
      </h2>
      <p className="text-base-content/70">
        New features <Badge color="success" size="xs">Live</Badge> are now available.
      </p>
    </div>
  );
}
