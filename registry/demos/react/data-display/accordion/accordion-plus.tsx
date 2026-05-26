import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionPlus() {
  return (
    <Accordion icon="plus" className="w-80">
      <Accordion.Item defaultOpen>
        <Accordion.Trigger>Click to expand</Accordion.Trigger>
        <Accordion.Content>This accordion uses the plus/minus icon variant.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Another item</Accordion.Trigger>
        <Accordion.Content>The plus icon changes to a minus when open.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
