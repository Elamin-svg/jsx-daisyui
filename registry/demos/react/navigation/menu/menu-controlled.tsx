"use client";
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
