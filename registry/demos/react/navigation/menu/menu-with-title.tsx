import { Menu } from "@registry/components/react/navigation/menu";

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
