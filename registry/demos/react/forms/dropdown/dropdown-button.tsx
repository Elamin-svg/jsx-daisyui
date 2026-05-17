import { Dropdown } from "@registry/components/react/forms/dropdown";
import Button from "@registry/components/react/forms/button";

export function DropdownButton() {
  return (
    <Dropdown>
      <Button>Open Menu</Button>
      <Dropdown.Content>
        <Dropdown.Item>
          <a href="/profile">Profile</a>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}