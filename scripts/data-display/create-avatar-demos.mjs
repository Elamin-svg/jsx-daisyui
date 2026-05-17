import fs from "fs";
import path from "path";
const ROOT = process.cwd();
function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/data-display/avatar/avatar-default.tsx",
  `import { Avatar } from "@registry/components/react/data-display/avatar";

export function AvatarDefault() {
  return (
    <Avatar
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="User avatar"
    />
  );
}
`,
);

write(
  "registry/demos/react/data-display/avatar/avatar-placeholder.tsx",
  `import { Avatar } from "@registry/components/react/data-display/avatar";

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
`,
);

write(
  "registry/demos/react/data-display/avatar/avatar-sizes.tsx",
  `import { Avatar } from "@registry/components/react/data-display/avatar";

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
`,
);

write(
  "registry/demos/react/data-display/avatar/avatar-shapes.tsx",
  `import { Avatar } from "@registry/components/react/data-display/avatar";

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
`,
);

write(
  "registry/demos/react/data-display/avatar/avatar-status.tsx",
  `import { Avatar } from "@registry/components/react/data-display/avatar";

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
`,
);

write(
  "registry/demos/react/data-display/avatar/avatar-group.tsx",
  `import { Avatar } from "@registry/components/react/data-display/avatar";

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
`,
);

console.log("\nDone!");