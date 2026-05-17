import { Dropdown } from "@registry/components/react/forms/dropdown";

export function DropdownPositions() {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-8">
      <Dropdown position="top">
        <Dropdown.Trigger>Top</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="bottom">
        <Dropdown.Trigger>Bottom</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="left">
        <Dropdown.Trigger>Left</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown position="right">
        <Dropdown.Trigger>Right</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
