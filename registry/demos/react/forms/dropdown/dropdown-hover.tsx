import { Dropdown } from "@registry/components/react/forms/dropdown";

export function DropdownHover() {
  return (
    <Dropdown hover>
      <Dropdown.Trigger>Hover me</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Reports</Dropdown.Item>
        <Dropdown.Item>Analytics</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
