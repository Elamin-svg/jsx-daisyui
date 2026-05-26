import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionPlus() {
  return (
    <div className="w-80 flex flex-col gap-2">
      <Accordion name="plus" icon="plus" defaultChecked>
        <Accordion.Title>Click to expand</Accordion.Title>
        <Accordion.Content>This accordion uses the plus/minus icon variant.</Accordion.Content>
      </Accordion>
      <Accordion name="plus" icon="plus">
        <Accordion.Title>Another item</Accordion.Title>
        <Accordion.Content>The plus icon changes to a minus when open.</Accordion.Content>
      </Accordion>
    </div>
  );
}
