import { Avatar } from "@registry/components/react/data-display/avatar";

export function AvatarStatus() {
  return (
    <div className="flex gap-4">
      <Avatar
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        status="online"
      />
      <Avatar
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        status="offline"
      />
    </div>
  );
}
