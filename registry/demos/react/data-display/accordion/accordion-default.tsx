import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionDefault() {
  return (
    <Accordion className="w-80">
      <Accordion.Item defaultOpen>
        <Accordion.Trigger>What is daisyUI?</Accordion.Trigger>
        <Accordion.Content>
          daisyUI is a component library for Tailwind CSS that adds class names for building UI components.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>How do I install it?</Accordion.Trigger>
        <Accordion.Content>
          Install via npm: <code>npm install daisyui</code> and add it to your Tailwind config.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Is it free?</Accordion.Trigger>
        <Accordion.Content>
          Yes, daisyUI is free and open-source under the MIT license.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
