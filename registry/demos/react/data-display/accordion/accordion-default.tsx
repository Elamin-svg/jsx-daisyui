import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionDefault() {
  return (
    <div className="w-80 flex flex-col gap-2">
      <Accordion name="default" defaultChecked>
        <Accordion.Title>What is daisyUI?</Accordion.Title>
        <Accordion.Content>
          daisyUI is a component library for Tailwind CSS that adds class names for building UI components.
        </Accordion.Content>
      </Accordion>
      <Accordion name="default">
        <Accordion.Title>How do I install it?</Accordion.Title>
        <Accordion.Content>
          Install via npm: <code>npm install daisyui</code> and add it to your Tailwind config.
        </Accordion.Content>
      </Accordion>
      <Accordion name="default">
        <Accordion.Title>Is it free?</Accordion.Title>
        <Accordion.Content>
          Yes, daisyUI is free and open-source under the MIT license.
        </Accordion.Content>
      </Accordion>
    </div>
  );
}
