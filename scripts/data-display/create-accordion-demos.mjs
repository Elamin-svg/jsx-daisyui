// scripts/data-display/create-accordion-demos.mjs
import fs from "fs";
import path from "path";
const ROOT = process.cwd();
function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/data-display/accordion/accordion-default.tsx",
  `import { Accordion } from "@registry/components/react/data-display/accordion";

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
`,
);

write(
  "registry/demos/react/data-display/accordion/accordion-arrow.tsx",
  `import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionArrow() {
  return (
    <Accordion icon="arrow" className="w-80">
      <Accordion.Item defaultOpen>
        <Accordion.Trigger>Click to open</Accordion.Trigger>
        <Accordion.Content>This accordion uses the arrow icon variant.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Another item</Accordion.Trigger>
        <Accordion.Content>Arrow collapses show a chevron that rotates on open.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
`,
);

write(
  "registry/demos/react/data-display/accordion/accordion-plus.tsx",
  `import { Accordion } from "@registry/components/react/data-display/accordion";

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
`,
);

write(
  "registry/demos/react/data-display/accordion/accordion-joined.tsx",
  `import { Accordion } from "@registry/components/react/data-display/accordion";

export function AccordionJoined() {
  return (
    <Accordion icon="arrow" joined className="w-80">
      <Accordion.Item defaultOpen>
        <Accordion.Trigger>First section</Accordion.Trigger>
        <Accordion.Content>Content for the first section of the joined accordion.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Second section</Accordion.Trigger>
        <Accordion.Content>Content for the second section.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Third section</Accordion.Trigger>
        <Accordion.Content>Content for the third section.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
`,
);

console.log("\nDone!");
