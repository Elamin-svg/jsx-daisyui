import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionJoined() {
  return (
    <Accordion joined className="w-80">
      <Accordion.Item icon="arrow" joined defaultOpen>
        <Accordion.Trigger>First section</Accordion.Trigger>
        <Accordion.Content>Content for the first section of the joined accordion.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item icon="arrow" joined>
        <Accordion.Trigger>Second section</Accordion.Trigger>
        <Accordion.Content>Content for the second section.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item icon="arrow" joined>
        <Accordion.Trigger>Third section</Accordion.Trigger>
        <Accordion.Content>Content for the third section.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
