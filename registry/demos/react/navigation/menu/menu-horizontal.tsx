import { Menu } from "@registry/components/react/navigation/menu";

export function MenuHorizontal() {
  return (
    <Menu direction="horizontal" className="bg-base-200 rounded-box">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item><a>About</a></Menu.Item>
      <Menu.Item><a>Contact</a></Menu.Item>
    </Menu>
  );
}
