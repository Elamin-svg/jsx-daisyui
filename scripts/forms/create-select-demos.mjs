// scripts/forms/create-select-demos.mjs
// Run: node scripts/forms/create-select-demos.mjs

import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

// ─── Demo files ───────────────────────────────────────────────────────────────

write(
  "registry/demos/react/forms/select/select-default.tsx",
  `import Select from "@registry/components/react/forms/select";

export function SelectDefault() {
  return (
    <Select defaultValue="Pick a color">
      <option disabled value="Pick a color">Pick a color</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </Select>
  );
}
`,
);

write(
  "registry/demos/react/forms/select/select-ghost.tsx",
  `import Select from "@registry/components/react/forms/select";

export function SelectGhost() {
  return (
    <Select ghost defaultValue="Pick a font">
      <option disabled value="Pick a font">Pick a font</option>
      <option>Inter</option>
      <option>Poppins</option>
      <option>Raleway</option>
    </Select>
  );
}
`,
);

write(
  "registry/demos/react/forms/select/select-colors.tsx",
  `import Select from "@registry/components/react/forms/select";

export function SelectColors() {
  return (
    <div className="flex flex-col gap-3 items-start">
      <Select color="neutral" defaultValue="neutral">
        <option disabled value="neutral">Neutral</option>
        <option>North America</option>
        <option>EU West</option>
      </Select>
      <Select color="primary" defaultValue="primary">
        <option disabled value="primary">Primary</option>
        <option>VSCode</option>
        <option>VSCode fork</option>
      </Select>
      <Select color="secondary" defaultValue="secondary">
        <option disabled value="secondary">Secondary</option>
        <option>Zig</option>
        <option>Rust</option>
      </Select>
      <Select color="accent" defaultValue="accent">
        <option disabled value="accent">Accent</option>
        <option>Light mode</option>
        <option>Dark mode</option>
      </Select>
      <Select color="info" defaultValue="info">
        <option disabled value="info">Info</option>
        <option>React</option>
        <option>Vue</option>
      </Select>
      <Select color="success" defaultValue="success">
        <option disabled value="success">Success</option>
        <option>Bun</option>
        <option>npm</option>
      </Select>
      <Select color="warning" defaultValue="warning">
        <option disabled value="warning">Warning</option>
        <option>Windows</option>
        <option>MacOS</option>
      </Select>
      <Select color="error" defaultValue="error">
        <option disabled value="error">Error</option>
        <option>GPT-4</option>
        <option>Claude</option>
      </Select>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/select/select-sizes.tsx",
  `import Select from "@registry/components/react/forms/select";

export function SelectSizes() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Select size="xs" defaultValue="xs">
        <option disabled value="xs">Extra Small</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="sm" defaultValue="sm">
        <option disabled value="sm">Small</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="md" defaultValue="md">
        <option disabled value="md">Medium</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="lg" defaultValue="lg">
        <option disabled value="lg">Large</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="xl" defaultValue="xl">
        <option disabled value="xl">Extra Large</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/select/select-fieldset.tsx",
  `import Select from "@registry/components/react/forms/select";

export function SelectFieldset() {
  return (
    <fieldset className="fieldset w-xs">
      <legend className="fieldset-legend">Browsers</legend>
      <Select defaultValue="Pick a browser">
        <option disabled value="Pick a browser">Pick a browser</option>
        <option>Chrome</option>
        <option>Firefox</option>
        <option>Safari</option>
      </Select>
      <span className="label">Optional</span>
    </fieldset>
  );
}
`,
);

write(
  "registry/demos/react/forms/select/select-disabled.tsx",
  `import Select from "@registry/components/react/forms/select";

export function SelectDisabled() {
  return (
    <Select disabled defaultValue="disabled">
      <option value="disabled">You can't touch this</option>
    </Select>
  );
}
`,
);

write(
  "registry/demos/react/forms/select/select-controlled.tsx",
  `"use client";

import * as React from "react";
import Select from "@registry/components/react/forms/select";

export function SelectControlled() {
  const [value, setValue] = React.useState("React");

  return (
    <div className="flex flex-col gap-4">
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        color="primary"
      >
        <option>React</option>
        <option>Vue</option>
        <option>Svelte</option>
        <option>Angular</option>
      </Select>
      <p className="text-sm text-base-content/60">
        Selected: <strong>{value}</strong>
      </p>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/select/select-native.tsx",
  `import Select from "@registry/components/react/forms/select";

export function SelectNative() {
  return (
    <Select className="appearance-none" defaultValue="Pick a color">
      <option disabled value="Pick a color">Pick a color</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </Select>
  );
}
`,
);

console.log("\nDone!");
