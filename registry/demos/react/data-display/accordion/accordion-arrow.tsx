import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionArrow() {
  return (
    <div className="w-80 flex flex-col gap-2">
      <Accordion name="arrow" icon="arrow" defaultChecked>
        <Accordion.Title>Click to open</Accordion.Title>
        <Accordion.Content>This accordion uses the arrow icon variant.</Accordion.Content>
      </Accordion>
      <Accordion name="arrow" icon="arrow">
        <Accordion.Title>Another item</Accordion.Title>
        <Accordion.Content>Arrow collapses show a chevron that rotates on open.</Accordion.Content>
      </Accordion>
    </div>
  );
}
