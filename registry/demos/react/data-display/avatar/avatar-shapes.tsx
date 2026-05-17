import { Avatar } from "@registry/components/react/data-display/avatar";

export function AvatarShapes() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="circle" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="rounded" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="square" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="squircle" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="hexagon" />
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="heart" />
    </div>
  );
}
