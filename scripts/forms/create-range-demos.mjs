// scripts/forms/create-range-demos.mjs
// Run: node scripts/forms/create-range-demos.mjs

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
  "registry/demos/react/forms/range/range-default.tsx",
  `import Range from "@registry/components/react/forms/range";

export function RangeDefault() {
  return <Range defaultValue={40} min={0} max={100} />;
}
`,
);

write(
  "registry/demos/react/forms/range/range-sizes.tsx",
  `import Range from "@registry/components/react/forms/range";

export function RangeSizes() {
  return (
    <div className="flex flex-col gap-4">
      <Range size="xs" defaultValue={40} />
      <Range size="sm" defaultValue={40} />
      <Range size="md" defaultValue={40} />
      <Range size="lg" defaultValue={40} />
      <Range size="xl" defaultValue={40} />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/range/range-colors.tsx",
  `import Range from "@registry/components/react/forms/range";

export function RangeColors() {
  return (
    <div className="flex flex-col gap-4">
      <Range color="neutral"   defaultValue={60} />
      <Range color="primary"   defaultValue={60} />
      <Range color="secondary" defaultValue={60} />
      <Range color="accent"    defaultValue={60} />
      <Range color="info"      defaultValue={60} />
      <Range color="success"   defaultValue={60} />
      <Range color="warning"   defaultValue={60} />
      <Range color="error"     defaultValue={60} />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/range/range-steps.tsx",
  `import Range from "@registry/components/react/forms/range";

export function RangeSteps() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <Range color="primary" min={0} max={100} step={25} defaultValue={50} />
      <div className="flex justify-between text-xs text-base-content/60 px-1">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/range/range-controlled.tsx",
  `"use client";

import * as React from "react";
import Range from "@registry/components/react/forms/range";

export function RangeControlled() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <Range
        color="primary"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p className="text-sm text-base-content/60 text-center">
        Value: <strong>{value}</strong>
      </p>
    </div>
  );
}
`,
);

console.log("\nDone!");
