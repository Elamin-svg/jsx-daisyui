import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapseDefault() {
  return (
    <Collapse className="w-80">
      <Collapse.Title>Click to open/close</Collapse.Title>
      <Collapse.Content>
        This collapse uses the focus method — click outside to close it.
      </Collapse.Content>
    </Collapse>
  );
}
