import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapseCheckbox() {
  return (
    <Collapse icon="arrow" method="checkbox" className="w-80">
      <Collapse.Title>Checkbox collapse</Collapse.Title>
      <Collapse.Content>
        Uses a hidden checkbox for state — stays open even when you click away.
      </Collapse.Content>
    </Collapse>
  );
}
