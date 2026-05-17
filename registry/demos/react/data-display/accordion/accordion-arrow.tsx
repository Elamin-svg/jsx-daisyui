import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionArrow() {
  return (
    <Accordion className="w-80">
      <Accordion.Item icon="arrow" defaultOpen>
        <Accordion.Trigger>Click to open</Accordion.Trigger>
        <Accordion.Content>This accordion uses the arrow icon variant.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item icon="arrow">
        <Accordion.Trigger>Another item</Accordion.Trigger>
        <Accordion.Content>Arrow collapses show a chevron that rotates on open.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
