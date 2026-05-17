import { Menu } from "@registry/components/react/navigation/menu";

export function MenuDefault() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item><a>Profile</a></Menu.Item>
      <Menu.Item><a>Settings</a></Menu.Item>
    </Menu>
  );
}
