import { Avatar } from "@registry/components/react/data-display/avatar";

export function AvatarSizes() {
  return (
    <div className="flex items-end gap-3">
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="xs" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="md" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="lg" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="xl" />
    </div>
  );
}
