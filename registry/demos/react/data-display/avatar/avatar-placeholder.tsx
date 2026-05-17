import { Avatar } from "@registry/components/react/data-display/avatar";

export function AvatarPlaceholder() {
  return (
    <div className="flex gap-3">
      <Avatar placeholder size="md">
        <Avatar.Placeholder>JD</Avatar.Placeholder>
      </Avatar>
      <Avatar placeholder size="md">
        <Avatar.Placeholder className="text-xl">AB</Avatar.Placeholder>
      </Avatar>
      <Avatar placeholder size="md" status="online">
        <Avatar.Placeholder>XY</Avatar.Placeholder>
      </Avatar>
    </div>
  );
}
