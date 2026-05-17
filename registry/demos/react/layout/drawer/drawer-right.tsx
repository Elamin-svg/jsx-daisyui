"use client";
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
