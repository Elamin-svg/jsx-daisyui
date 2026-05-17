// scripts/data-display/create-collapse-demos.mjs
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
  "registry/demos/react/data-display/collapse/collapse-default.tsx",
  `import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapseDefault() {
  return (
    <Collapse className="w-80">
      <Collapse.Title>Click to open/close</Collapse.Title>
      <Collapse.Content>
        This collapse uses the focus method — click outside to close it.
      </Collapse.Content>
    </Collapse>
  );
}
`,
);

write(
  "registry/demos/react/data-display/collapse/collapse-arrow.tsx",
  `import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapseArrow() {
  return (
    <Collapse icon="arrow" className="w-80">
      <Collapse.Title>Arrow collapse</Collapse.Title>
      <Collapse.Content>The chevron rotates when expanded.</Collapse.Content>
    </Collapse>
  );
}
`,
);

write(
  "registry/demos/react/data-display/collapse/collapse-plus.tsx",
  `import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapsePlus() {
  return (
    <Collapse icon="plus" className="w-80">
      <Collapse.Title>Plus/minus collapse</Collapse.Title>
      <Collapse.Content>The icon changes between + and − on toggle.</Collapse.Content>
    </Collapse>
  );
}
`,
);

write(
  "registry/demos/react/data-display/collapse/collapse-checkbox.tsx",
  `import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapseCheckbox() {
  return (
    <Collapse icon="arrow" method="checkbox" className="w-80">
      <Collapse.Title>Checkbox collapse</Collapse.Title>
      <Collapse.Content>
        Uses a hidden checkbox for state — stays open even when you click away.
      </Collapse.Content>
    </Collapse>
  );
}
`,
);

write(
  "registry/demos/react/data-display/collapse/collapse-details.tsx",
  `import { Collapse } from "@registry/components/react/data-display/collapse";

export function CollapseDetails() {
  return (
    <Collapse icon="arrow" method="details" className="w-80">
      <Collapse.Summary>Details/summary collapse</Collapse.Summary>
      <Collapse.Content>
        Renders as a native &lt;details&gt; element — works without JavaScript.
      </Collapse.Content>
    </Collapse>
  );
}
`,
);

console.log("\nDone!");
