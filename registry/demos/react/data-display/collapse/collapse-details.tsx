import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapseDetails() {
  return (
    <Collapse icon="arrow" method="details" className="w-80">
      <Collapse.Summary>Details/summary collapse</Collapse.Summary>
      <Collapse.Content>
        Renders as a native &lt;details&gt; element — works without JavaScript.
      </Collapse.Content>
    </Collapse>
  );
}
