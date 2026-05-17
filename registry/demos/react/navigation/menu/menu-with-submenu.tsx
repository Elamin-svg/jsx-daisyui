import { Menu } from "@registry/components/react/navigation/menu";

export function MenuWithSubmenu() {
  return (
    <Menu className="bg-base-200 rounded-box w-56">
      <Menu.Item><a>Home</a></Menu.Item>
      <Menu.Item value="products">
        <a>Products</a>
        <Menu.SubMenu>
          <Menu.Item><a>All Products</a></Menu.Item>
          <Menu.Item><a>Categories</a></Menu.Item>
          <Menu.Item><a>Brands</a></Menu.Item>
        </Menu.SubMenu>
      </Menu.Item>
      <Menu.Item><a>Contact</a></Menu.Item>
    </Menu>
  );
}
