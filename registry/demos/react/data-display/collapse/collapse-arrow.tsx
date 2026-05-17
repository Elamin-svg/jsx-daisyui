import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapseArrow() {
  return (
    <Collapse icon="arrow" className="w-80">
      <Collapse.Title>Arrow collapse</Collapse.Title>
      <Collapse.Content>The chevron rotates when expanded.</Collapse.Content>
    </Collapse>
  );
}
