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
  "registry/demos/react/forms/radio/radio-default.tsx",
  `import { Radio } from "@registry/components/react/forms/radio";

export function RadioDefault() {
  return (
    <div className="flex gap-2">
      <Radio name="radio-default" defaultChecked />
      <Radio name="radio-default" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/radio/radio-sizes.tsx",
  `import { Radio } from "@registry/components/react/forms/radio";

export function RadioSizes() {
  return (
    <div className="flex items-center gap-2">
      <Radio name="radio-xs" size="xs" defaultChecked />
      <Radio name="radio-sm" size="sm" defaultChecked />
      <Radio name="radio-md" size="md" defaultChecked />
      <Radio name="radio-lg" size="lg" defaultChecked />
      <Radio name="radio-xl" size="xl" defaultChecked />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/radio/radio-colors.tsx",
  `import { Radio } from "@registry/components/react/forms/radio";

export function RadioColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Radio name="radio-neutral"   color="neutral"   defaultChecked />
      <Radio name="radio-primary"   color="primary"   defaultChecked />
      <Radio name="radio-secondary" color="secondary" defaultChecked />
      <Radio name="radio-accent"    color="accent"    defaultChecked />
      <Radio name="radio-success"   color="success"   defaultChecked />
      <Radio name="radio-warning"   color="warning"   defaultChecked />
      <Radio name="radio-info"      color="info"      defaultChecked />
      <Radio name="radio-error"     color="error"     defaultChecked />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/radio/radio-disabled.tsx",
  `import { Radio } from "@registry/components/react/forms/radio";

export function RadioDisabled() {
  return (
    <div className="flex gap-2">
      <Radio name="radio-disabled" defaultChecked disabled />
      <Radio name="radio-disabled" disabled />
    </div>
  );
}
`,
);

console.log("\nDone!");