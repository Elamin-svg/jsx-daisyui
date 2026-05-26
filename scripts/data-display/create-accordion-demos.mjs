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
`,
);

write(
  "registry/demos/react/data-display/accordion/accordion-arrow.tsx",
  `import { Accordion } from "@registry/components/react/data-display/accordion";

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
`,
);

write(
  "registry/demos/react/data-display/accordion/accordion-plus.tsx",
  `import { Accordion } from "@registry/components/react/data-display/accordion";

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
`,
);

write(
  "registry/demos/react/data-display/accordion/accordion-joined.tsx",
  `import { Accordion } from "@registry/components/react/data-display/accordion";

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
`,
);

console.log("\nDone!");
