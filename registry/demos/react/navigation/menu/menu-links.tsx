import { Menu } from "@registry/components/react/navigation/menu";

export function MenuLinks() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a href="/">Home</a></Menu.Item>
      <Menu.Item><a href="/about">About</a></Menu.Item>
      <Menu.Item><a href="/contact">Contact</a></Menu.Item>
    </Menu>
  );
}
