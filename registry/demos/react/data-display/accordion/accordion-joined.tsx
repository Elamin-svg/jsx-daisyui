import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionJoined() {
  return (
    <div className="join join-vertical w-80">
      <Accordion name="joined" icon="arrow" defaultChecked className="join-item border border-base-300">
        <Accordion.Title>First section</Accordion.Title>
        <Accordion.Content>Content for the first section of the joined accordion.</Accordion.Content>
      </Accordion>
      <Accordion name="joined" icon="arrow" className="join-item border border-base-300">
        <Accordion.Title>Second section</Accordion.Title>
        <Accordion.Content>Content for the second section.</Accordion.Content>
      </Accordion>
      <Accordion name="joined" icon="arrow" className="join-item border border-base-300">
        <Accordion.Title>Third section</Accordion.Title>
        <Accordion.Content>Content for the third section.</Accordion.Content>
      </Accordion>
    </div>
  );
}
