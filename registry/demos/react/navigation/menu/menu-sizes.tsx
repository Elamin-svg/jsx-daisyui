import { Menu } from "@registry/components/react/navigation/menu";

export function MenuSizes() {
  return (
    <div className="grid gap-6">
      <Menu size="xs" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Xsmall 1</a></Menu.Item>
        <Menu.Item><a>Xsmall 2</a></Menu.Item>
      </Menu>
      <Menu size="sm" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Small 1</a></Menu.Item>
        <Menu.Item><a>Small 2</a></Menu.Item>
      </Menu>
      <Menu size="md" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Medium 1</a></Menu.Item>
        <Menu.Item><a>Medium 2</a></Menu.Item>
      </Menu>
      <Menu size="lg" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Large 1</a></Menu.Item>
        <Menu.Item><a>Large 2</a></Menu.Item>
      </Menu>
      <Menu size="xl" className="bg-base-200 rounded-box w-56">
        <Menu.Item><a>Xlarge 1</a></Menu.Item>
        <Menu.Item><a>Xlarge 2</a></Menu.Item>
      </Menu>
    </div>
  );
}
