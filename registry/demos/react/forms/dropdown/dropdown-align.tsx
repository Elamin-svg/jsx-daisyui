import { Dropdown } from "@registry/components/react/forms/dropdown";

export function DropdownAlign() {
  return (
    <div className="flex flex-wrap gap-4">
      <Dropdown align="start">
        <Dropdown.Trigger>Start</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Dropdown align="end">
        <Dropdown.Trigger>End</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
