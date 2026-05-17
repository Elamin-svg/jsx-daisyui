import { Menu } from "@registry/components/react/navigation/menu";

export function MenuActive() {
  return (
    <Menu active="profile" className="bg-base-200 rounded-box w-56">
      <Menu.Item value="home"><a>Home</a></Menu.Item>
      <Menu.Item value="profile"><a>Profile</a></Menu.Item>
      <Menu.Item value="settings"><a>Settings</a></Menu.Item>
    </Menu>
  );
}
