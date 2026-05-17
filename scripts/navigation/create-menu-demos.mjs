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
  "registry/demos/react/navigation/menu/menu-default.tsx",
  `import { Menu } from "@registry/components/react/navigation/menu";

export function MenuDefault() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item><a>Profile</a></Menu.Item>
      <Menu.Item><a>Settings</a></Menu.Item>
    </Menu>
  );
}
`,
);

write(
  "registry/demos/react/navigation/menu/menu-horizontal.tsx",
  `import { Menu } from "@registry/components/react/navigation/menu";

export function MenuHorizontal() {
  return (
    <Menu direction="horizontal" className="bg-base-200 rounded-box">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item><a>About</a></Menu.Item>
      <Menu.Item><a>Contact</a></Menu.Item>
    </Menu>
  );
}
`,
);

write(
  "registry/demos/react/navigation/menu/menu-with-title.tsx",
  `import { Menu } from "@registry/components/react/navigation/menu";

export function MenuWithTitle() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Title>Main</Menu.Title>
      <Menu.Item><a>Dashboard</a></Menu.Item>
      <Menu.Item><a>Analytics</a></Menu.Item>
      <Menu.Title>Settings</Menu.Title>
      <Menu.Item><a>Account</a></Menu.Item>
      <Menu.Item><a>Privacy</a></Menu.Item>
      <Menu.Item disabled><a>Billing</a></Menu.Item>
    </Menu>
  );
}
`,
);

write(
  "registry/demos/react/navigation/menu/menu-with-submenu.tsx",
  `import { Menu } from "@registry/components/react/navigation/menu";

export function MenuWithSubmenu() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item value="products">
        <a>Products</a>
        <Menu.SubMenu>
          <Menu.Item><a>All Products</a></Menu.Item>
          <Menu.Item><a>Categories</a></Menu.Item>
          <Menu.Item><a>Brands</a></Menu.Item>
        </Menu.SubMenu>
      </Menu.Item>
      <Menu.Item><a>Contact</a></Menu.Item>
    </Menu>
  );
}
`,
);

write(
  "registry/demos/react/navigation/menu/menu-active.tsx",
  `import { Menu } from "@registry/components/react/navigation/menu";

export function MenuActive() {
  return (
    <Menu active="profile" className="bg-base-200 rounded-box w-56">
      <Menu.Item value="home"><a>Home</a></Menu.Item>
      <Menu.Item value="profile"><a>Profile</a></Menu.Item>
      <Menu.Item value="settings"><a>Settings</a></Menu.Item>
    </Menu>
  );
}
`,
);

write(
  "registry/demos/react/navigation/menu/menu-controlled.tsx",
  `"use client";
import { Menu } from "@registry/components/react/navigation/menu";
import { useState } from "react";

export function MenuControlled() {
  const [active, setActive] = useState("home");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-base-content/60">
        Active: <span className="font-mono text-primary">{active}</span>
      </p>
      <Menu active={active} className="bg-base-200 rounded-box w-56">
        <Menu.Item value="home">
          <a onClick={() => setActive("home")}>Home</a>
        </Menu.Item>
        <Menu.Item value="profile">
          <a onClick={() => setActive("profile")}>Profile</a>
        </Menu.Item>
        <Menu.Item value="settings">
          <a onClick={() => setActive("settings")}>Settings</a>
        </Menu.Item>
        <Menu.Item value="billing" disabled>
          <a>Billing</a>
        </Menu.Item>
      </Menu>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/navigation/menu/menu-sizes.tsx",
  `import { Menu } from "@registry/components/react/navigation/menu";

export function MenuSizes() {
  return (
    <div className="grid gap-6">
      <Menu size="xs" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Xsmall 1</a></Menu.Item>
        <Menu.Item><a>Xsmall 2</a></Menu.Item>
      </Menu>
      <Menu size="sm" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Small 1</a></Menu.Item>
        <Menu.Item><a>Small 2</a></Menu.Item>
      </Menu>
      <Menu size="md" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Medium 1</a></Menu.Item>
        <Menu.Item><a>Medium 2</a></Menu.Item>
      </Menu>
      <Menu size="lg" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Large 1</a></Menu.Item>
        <Menu.Item><a>Large 2</a></Menu.Item>
      </Menu>
      <Menu size="xl" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Xlarge 1</a></Menu.Item>
        <Menu.Item><a>Xlarge 2</a></Menu.Item>
      </Menu>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/navigation/menu/menu-disabled.tsx",
  `import { Menu } from "@registry/components/react/navigation/menu";

export function MenuDisabled() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Enabled item</a></Menu.Item>
      <Menu.Item disabled><a>Disabled item</a></Menu.Item>
      <Menu.Item disabled><a>Disabled item</a></Menu.Item>
    </Menu>
  );
}
`,
);

write(
  "registry/demos/react/navigation/menu/menu-links.tsx",
  `import { Menu } from "@registry/components/react/navigation/menu";

export function MenuLinks() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a href="/">Home</a></Menu.Item>
      <Menu.Item><a href="/about">About</a></Menu.Item>
      <Menu.Item><a href="/contact">Contact</a></Menu.Item>
    </Menu>
  );
}
`,
);

console.log("\nDone!");