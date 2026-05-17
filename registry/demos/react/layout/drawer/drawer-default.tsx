"use client";
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
