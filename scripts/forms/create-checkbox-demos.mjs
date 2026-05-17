// scripts/forms/create-checkbox-demos.mjs
// Run: node scripts/forms/create-checkbox-demos.mjs

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
  "registry/demos/react/forms/checkbox/checkbox-default.tsx",
  `import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxDefault() {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-3">
        <Checkbox defaultChecked />
        <span>Option A</span>
      </label>
      <label className="flex items-center gap-3">
        <Checkbox />
        <span>Option B</span>
      </label>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/checkbox/checkbox-sizes.tsx",
  `import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxSizes() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox size="xs" defaultChecked />
      <Checkbox size="sm" defaultChecked />
      <Checkbox size="md" defaultChecked />
      <Checkbox size="lg" defaultChecked />
      <Checkbox size="xl" defaultChecked />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/checkbox/checkbox-colors.tsx",
  `import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxColors() {
  return (
    <div className="flex flex-wrap gap-3">
      <Checkbox color="neutral"   defaultChecked />
      <Checkbox color="primary"   defaultChecked />
      <Checkbox color="secondary" defaultChecked />
      <Checkbox color="accent"    defaultChecked />
      <Checkbox color="info"      defaultChecked />
      <Checkbox color="success"   defaultChecked />
      <Checkbox color="warning"   defaultChecked />
      <Checkbox color="error"     defaultChecked />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/checkbox/checkbox-disabled.tsx",
  `import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxDisabled() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/checkbox/checkbox-indeterminate.tsx",
  `"use client";

import * as React from "react";
import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxIndeterminate() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox indeterminate />
      <Checkbox indeterminate color="primary" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/checkbox/checkbox-fieldset.tsx",
  `import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
      <legend className="fieldset-legend">Preferences</legend>
      <label className="label">
        <Checkbox defaultChecked />
        Email notifications
      </label>
      <label className="label">
        <Checkbox />
        SMS notifications
      </label>
      <label className="label">
        <Checkbox defaultChecked />
        Push notifications
      </label>
    </fieldset>
  );
}
`,
);

write(
  "registry/demos/react/forms/checkbox/checkbox-controlled.tsx",
  `"use client";

import * as React from "react";
import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxControlled() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-3">
        <Checkbox
          color="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="text-sm">Accept terms and conditions</span>
      </label>
      <p className="text-sm text-base-content/60">
        State: <strong>{checked ? "checked" : "unchecked"}</strong>
      </p>
    </div>
  );
}
`,
);

console.log("\nDone!");
