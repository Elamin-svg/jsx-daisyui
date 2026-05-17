import { Avatar } from "@registry/components/react/data-display/avatar";

export function AvatarGroup() {
  return (
    <Avatar.Group>
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" ring />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" ring />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" ring />
      <Avatar.Counter count={5} size="sm" />
    </Avatar.Group>
  );
}
