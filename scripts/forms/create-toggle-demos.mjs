// scripts/forms/create-toggle-demos.mjs
// Run: node scripts/forms/create-toggle-demos.mjs

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
  "registry/demos/react/forms/toggle/toggle-default.tsx",
  `import Toggle from "@registry/components/react/forms/toggle";

export function ToggleDefault() {
  return <Toggle defaultChecked />;
}
`,
);

write(
  "registry/demos/react/forms/toggle/toggle-fieldset.tsx",
  `import Toggle from "@registry/components/react/forms/toggle";
import {Label} from "@registry/components/react/forms/label";

export function ToggleFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
      <legend className="fieldset-legend">Login options</legend>
      <Label className="flex items-center gap-2">
        <Toggle defaultChecked />
        Remember me
      </Label>
    </fieldset>
  );
}
`,
);

write(
  "registry/demos/react/forms/toggle/toggle-sizes.tsx",
  `import Toggle from "@registry/components/react/forms/toggle";

export function ToggleSizes() {
  return (
    <div className="flex items-center gap-4">
      <Toggle size="xs" defaultChecked />
      <Toggle size="sm" defaultChecked />
      <Toggle size="md" defaultChecked />
      <Toggle size="lg" defaultChecked />
      <Toggle size="xl" defaultChecked />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/toggle/toggle-colors.tsx",
  `import Toggle from "@registry/components/react/forms/toggle";

export function ToggleColors() {
  return (
    <div className="flex flex-wrap gap-3">
      <Toggle color="neutral"   defaultChecked />
      <Toggle color="primary"   defaultChecked />
      <Toggle color="secondary" defaultChecked />
      <Toggle color="accent"    defaultChecked />
      <Toggle color="info"      defaultChecked />
      <Toggle color="success"   defaultChecked />
      <Toggle color="warning"   defaultChecked />
      <Toggle color="error"     defaultChecked />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/toggle/toggle-disabled.tsx",
  `import Toggle from "@registry/components/react/forms/toggle";

export function ToggleDisabled() {
  return (
    <div className="flex items-center gap-4">
      <Toggle disabled />
      <Toggle disabled defaultChecked />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/toggle/toggle-indeterminate.tsx",
  `"use client";

import * as React from "react";
import Toggle from "@registry/components/react/forms/toggle";

export function ToggleIndeterminate() {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = true;
  }, []);

  return <Toggle ref={ref} onClick={(e) => e.preventDefault()} />;
}
`,
);

write(
  "registry/demos/react/forms/toggle/toggle-icons.tsx",
  `import Toggle from "@registry/components/react/forms/toggle";

const CheckIcon = () => (
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" fill="none" stroke="currentColor">
      <path d="M20 6 9 17l-5-5" />
    </g>
  </svg>
);

const XIcon = () => (
  <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export function ToggleIcons() {
  return (
    <label className="toggle text-base-content">
      <input type="checkbox" />
      <CheckIcon />
      <XIcon />
    </label>
  );
}
`,
);

write(
  "registry/demos/react/forms/toggle/toggle-custom-colors.tsx",
  `import Toggle from "@registry/components/react/forms/toggle";

export function ToggleCustomColors() {
  return (
    <Toggle
      defaultChecked
      className="border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500"
    />
  );
}
`,
);

write(
  "registry/demos/react/forms/toggle/toggle-controlled.tsx",
  `"use client";

import * as React from "react";
import Toggle from "@registry/components/react/forms/toggle";
import { Label } from "@registry/components/react/forms/label";

export function ToggleControlled() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Label className="flex items-center gap-3">
        <Toggle
          color="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="text-sm">{checked ? "Enabled" : "Disabled"}</span>
      </Label>
      <p className="text-sm text-base-content/60">
        State: <strong>{checked ? "on" : "off"}</strong>
      </p>
    </div>
  );
}
`,
);

console.log("\nDone!");
