import { Dropdown } from "@registry/components/react/forms/dropdown";

export function DropdownDefault() {
  return (
    <Dropdown>
      <Dropdown.Trigger>Open menu</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
