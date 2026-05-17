// scripts/forms/create-filter-demos.mjs
// Run: node scripts/forms/create-filter-demos.mjs

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
  "registry/demos/react/forms/filter/filter-default.tsx",
  `import { Filter } from "@registry/components/react/forms/filter";

export function FilterDefault() {
  return (
    <Filter name="framework">
      <Filter.Reset />
      <Filter.Item label="React" defaultChecked />
      <Filter.Item label="Vue" />
      <Filter.Item label="Svelte" />
      <Filter.Item label="Angular" />
    </Filter>
  );
}
`,
);

write(
  "registry/demos/react/forms/filter/filter-colors.tsx",
  `import { Filter } from "@registry/components/react/forms/filter";

export function FilterColors() {
  return (
    <Filter name="category">
      <Filter.Reset />
      <Filter.Item label="Primary"   color="primary"   defaultChecked />
      <Filter.Item label="Secondary" color="secondary" />
      <Filter.Item label="Accent"    color="accent"    />
      <Filter.Item label="Info"      color="info"      />
      <Filter.Item label="Success"   color="success"   />
      <Filter.Item label="Warning"   color="warning"   />
      <Filter.Item label="Error"     color="error"     />
    </Filter>
  );
}
`,
);

write(
  "registry/demos/react/forms/filter/filter-sizes.tsx",
  `import { Filter } from "@registry/components/react/forms/filter";

export function FilterSizes() {
  return (
    <div className="flex flex-col gap-3">
      <Filter name="size-xs">
        <Filter.Reset size="xs" />
        <Filter.Item label="XS-A" size="xs" defaultChecked />
        <Filter.Item label="XS-B" size="xs" />
      </Filter>
      <Filter name="size-sm">
        <Filter.Reset size="sm" />
        <Filter.Item label="SM-A" size="sm" defaultChecked />
        <Filter.Item label="SM-B" size="sm" />
      </Filter>
      <Filter name="size-md">
        <Filter.Reset size="md" />
        <Filter.Item label="MD-A" size="md" defaultChecked />
        <Filter.Item label="MD-B" size="md" />
      </Filter>
      <Filter name="size-lg">
        <Filter.Reset size="lg" />
        <Filter.Item label="LG-A" size="lg" defaultChecked />
        <Filter.Item label="LG-B" size="lg" />
      </Filter>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/filter/filter-checkbox.tsx",
  `import { Filter } from "@registry/components/react/forms/filter";

export function FilterCheckbox() {
  return (
    <Filter name="tags" asForm={false}>
      <Filter.Item type="checkbox" label="TypeScript" color="primary" defaultChecked />
      <Filter.Item type="checkbox" label="React"      color="primary" defaultChecked />
      <Filter.Item type="checkbox" label="Node.js"    color="primary" />
      <Filter.Item type="checkbox" label="Docker"     color="primary" />
    </Filter>
  );
}
`,
);

console.log("\nDone!");
