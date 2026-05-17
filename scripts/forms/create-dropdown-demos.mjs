// scripts/forms/create-dropdown-demos.mjs
// Run: node scripts/forms/create-dropdown-demos.mjs

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
  "registry/demos/react/forms/dropdown/dropdown-default.tsx",
  `import { Dropdown } from "@registry/components/react/forms/dropdown";

export function DropdownDefault() {
  return (
    <Dropdown>
      <Dropdown.Trigger>Open menu</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
`,
);

write(
  "registry/demos/react/forms/dropdown/dropdown-positions.tsx",
  `import { Dropdown } from "@registry/components/react/forms/dropdown";

export function DropdownPositions() {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-8">
      <Dropdown position="top">
        <Dropdown.Trigger>Top</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="bottom">
        <Dropdown.Trigger>Bottom</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="left">
        <Dropdown.Trigger>Left</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="right">
        <Dropdown.Trigger>Right</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/dropdown/dropdown-align.tsx",
  `import { Dropdown } from "@registry/components/react/forms/dropdown";

export function DropdownAlign() {
  return (
    <div className="flex flex-wrap gap-4">
      <Dropdown align="start">
        <Dropdown.Trigger>Start</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown align="end">
        <Dropdown.Trigger>End</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/dropdown/dropdown-hover.tsx",
  `import { Dropdown } from "@registry/components/react/forms/dropdown";

export function DropdownHover() {
  return (
    <Dropdown hover>
      <Dropdown.Trigger>Hover me</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Reports</Dropdown.Item>
        <Dropdown.Item>Analytics</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
`,
);



write(
  "registry/demos/react/forms/dropdown/dropdown-button.tsx",
  `import { Dropdown } from "@registry/components/react/forms/dropdown";
import Button from "@registry/components/react/forms/button";

export function DropdownButton() {
  return (
    <Dropdown>
      <Button>Open Menu</Button>
      <Dropdown.Content>
        <Dropdown.Item>
          <a href="/profile">Profile</a>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}`
);

console.log("\nDone!");
