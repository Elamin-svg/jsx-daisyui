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
  "registry/demos/react/feedback/tooltip/tooltip-default.tsx",
  `import { Tooltip } from "@registry/components/react/feedback/tooltip";
import Button from "@registry/components/react/forms/button";

export function TooltipDefault() {
  return (
    <Tooltip content="Hello, tooltip!">
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
    </Tooltip>
  );
}
`,
);

write(
  "registry/demos/react/feedback/tooltip/tooltip-placements.tsx",
  `import { Tooltip } from "@registry/components/react/feedback/tooltip";
import Button from "@registry/components/react/forms/button";

export function TooltipPlacements() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-8">
      <Tooltip content="Top tooltip" placement="top">
        <Tooltip.Trigger>
          <Button size="sm">Top</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Tooltip.Trigger>
          <Button size="sm">Bottom</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Tooltip.Trigger>
          <Button size="sm">Left</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Tooltip.Trigger>
          <Button size="sm">Right</Button>
        </Tooltip.Trigger>
      </Tooltip>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/tooltip/tooltip-colors.tsx",
  `import { Tooltip } from "@registry/components/react/feedback/tooltip";
import Button from "@registry/components/react/forms/button";

export function TooltipColors() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      <Tooltip content="Primary" color="primary">
        <Tooltip.Trigger>
          <Button color="primary" size="sm">Primary</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Secondary" color="secondary">
        <Tooltip.Trigger>
          <Button color="secondary" size="sm">Secondary</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Accent" color="accent">
        <Tooltip.Trigger>
          <Button color="accent" size="sm">Accent</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Info" color="info">
        <Tooltip.Trigger>
          <Button color="info" size="sm">Info</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Success" color="success">
        <Tooltip.Trigger>
          <Button color="success" size="sm">Success</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Warning" color="warning">
        <Tooltip.Trigger>
          <Button color="warning" size="sm">Warning</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Error" color="error">
        <Tooltip.Trigger>
          <Button color="error" size="sm">Error</Button>
        </Tooltip.Trigger>
      </Tooltip>
    </div>
  );
}
`,
);

console.log("\nDone!");
