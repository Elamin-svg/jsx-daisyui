import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapsePlus() {
  return (
    <Collapse icon="plus" className="w-80">
      <Collapse.Title>Plus/minus collapse</Collapse.Title>
      <Collapse.Content>The icon changes between + and − on toggle.</Collapse.Content>
    </Collapse>
  );
}
