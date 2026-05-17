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
  "registry/demos/react/layout/drawer/drawer-default.tsx",
  `"use client";
import { Drawer, useDrawer } from "@registry/components/react/layout/drawer";

export function DrawerDefault() {
  const drawer = useDrawer();

  return (
    <Drawer
      open={drawer.open}
      onOpen={drawer.openDrawer}
      onClose={drawer.close}
      onToggle={drawer.toggle}
    >
      <Drawer.Content>
        <button className="btn btn-primary" onClick={drawer.openDrawer}>
          Open drawer
        </button>
      </Drawer.Content>

      <Drawer.Side>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li><a>Home</a></li>
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
        </ul>
      </Drawer.Side>
    </Drawer>
  );
}
`,
);

write(
  "registry/demos/react/layout/drawer/drawer-navbar.tsx",
  `"use client";
import { Drawer, useDrawer } from "@registry/components/react/layout/drawer";

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export function DrawerNavbar() {
  const drawer = useDrawer();

  return (
    <div className="w-full max-w-2xl rounded-box overflow-hidden border border-base-300">
      <Drawer
        open={drawer.open}
        onOpen={drawer.openDrawer}
        onClose={drawer.close}
        onToggle={drawer.toggle}
      >
        <Drawer.Content className="flex flex-col">
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost" onClick={drawer.openDrawer}>
                <HamburgerIcon />
              </button>
            </div>
            <div className="mx-2 flex-1 px-2 font-bold text-lg">daisyUI</div>
          </div>

          <div className="p-8 bg-base-100 text-center text-base-content/50">
            Page content
          </div>
        </Drawer.Content>

        <Drawer.Side>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </Drawer.Side>
      </Drawer>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/layout/drawer/drawer-right.tsx",
  `"use client";
import { Drawer, useDrawer } from "@registry/components/react/layout/drawer";

export function DrawerRight() {
  const drawer = useDrawer();

  return (
    <Drawer
      open={drawer.open}
      onOpen={drawer.openDrawer}
      onClose={drawer.close}
      onToggle={drawer.toggle}
      end
    >
      <Drawer.Content>
        <button className="btn" onClick={drawer.openDrawer}>
          Open right drawer
        </button>
      </Drawer.Content>

      <Drawer.Side>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li><a>Account</a></li>
          <li><a>Privacy</a></li>
          <li><a>Notifications</a></li>
        </ul>
      </Drawer.Side>
    </Drawer>
  );
}
`,
);

console.log("\\nDone!");
