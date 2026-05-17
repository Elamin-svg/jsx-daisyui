// scripts/forms/create-button-demos.mjs
// Run: node scripts/forms/create-button-demos.mjs

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
  "registry/demos/react/forms/button/button-default.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonDefault() {
  return <Button>Click me</Button>;
}
`,
);

write(
  "registry/demos/react/forms/button/button-colors.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-variants.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="dash">Dash</Button>
      <Button variant="soft">Soft</Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-outline.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonOutline() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline">Default</Button>
      <Button color="neutral" variant="outline">Neutral</Button>
      <Button color="primary" variant="outline">Primary</Button>
      <Button color="secondary" variant="outline">Secondary</Button>
      <Button color="accent" variant="outline">Accent</Button>
      <Button color="info" variant="outline">Info</Button>
      <Button color="success" variant="outline">Success</Button>
      <Button color="warning" variant="outline">Warning</Button>
      <Button color="error" variant="outline">Error</Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-soft.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonSoft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft">Default</Button>
      <Button color="neutral" variant="soft">Neutral</Button>
      <Button color="primary" variant="soft">Primary</Button>
      <Button color="secondary" variant="soft">Secondary</Button>
      <Button color="accent" variant="soft">Accent</Button>
      <Button color="info" variant="soft">Info</Button>
      <Button color="success" variant="soft">Success</Button>
      <Button color="warning" variant="soft">Warning</Button>
      <Button color="error" variant="soft">Error</Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-dash.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonDash() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="dash">Default</Button>
      <Button color="neutral" variant="dash">Neutral</Button>
      <Button color="primary" variant="dash">Primary</Button>
      <Button color="secondary" variant="dash">Secondary</Button>
      <Button color="accent" variant="dash">Accent</Button>
      <Button color="info" variant="dash">Info</Button>
      <Button color="success" variant="dash">Success</Button>
      <Button color="warning" variant="dash">Warning</Button>
      <Button color="error" variant="dash">Error</Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-sizes.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs" color="primary">XSmall</Button>
      <Button size="sm" color="primary">Small</Button>
      <Button size="md" color="primary">Medium</Button>
      <Button size="lg" color="primary">Large</Button>
      <Button size="xl" color="primary">XLarge</Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-shapes.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonShapes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button color="primary" shape="square">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </Button>
      <Button color="primary" shape="circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
      <Button variant="ghost" shape="square">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </Button>
      <Button variant="ghost" shape="circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-loading.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonLoading() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button color="primary" loading>Loading</Button>
      <Button color="secondary" loading>Loading</Button>
      <Button variant="ghost" loading>Loading</Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-disabled.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonDisabled() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button color="primary" disabled>Disabled</Button>
      <Button color="secondary" disabled>Disabled</Button>
      <Button color="neutral" variant="outline" disabled>Disabled</Button>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/button/button-wide.tsx",
  `import Button from "@registry/components/react/forms/button";

export function ButtonWide() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Button color="primary" wide>Wide button</Button>
      <Button color="secondary" block>Block button</Button>
    </div>
  );
}
`,
);

console.log("\nDone!");
