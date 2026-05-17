import { Menu } from "@registry/components/react/navigation/menu";

export function MenuDisabled() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Enabled item</a></Menu.Item>
      <Menu.Item disabled><a>Disabled item</a></Menu.Item>
      <Menu.Item disabled><a>Disabled item</a></Menu.Item>
    </Menu>
  );
}
