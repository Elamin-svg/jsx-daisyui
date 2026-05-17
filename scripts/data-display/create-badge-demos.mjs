// scripts/data-display/create-badge-demos.mjs
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
  "registry/demos/react/data-display/badge/badge-default.tsx",
  `import Badge from "@registry/components/react/data-display/badge";

export function BadgeDefault() {
  return <Badge>Badge</Badge>;
}
`,
);

write(
  "registry/demos/react/data-display/badge/badge-colors.tsx",
  `import Badge from "@registry/components/react/data-display/badge";

export function BadgeColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="neutral">Neutral</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="accent">Accent</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="ghost">Ghost</Badge>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/badge/badge-variants.tsx",
  `import Badge from "@registry/components/react/data-display/badge";

export function BadgeVariants() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="outline">Outline</Badge>
        <Badge color="secondary" variant="outline">Outline</Badge>
        <Badge color="accent" variant="outline">Outline</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="soft">Soft</Badge>
        <Badge color="secondary" variant="soft">Soft</Badge>
        <Badge color="accent" variant="soft">Soft</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" variant="dash">Dash</Badge>
        <Badge color="secondary" variant="dash">Dash</Badge>
        <Badge color="accent" variant="dash">Dash</Badge>
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/badge/badge-sizes.tsx",
  `import Badge from "@registry/components/react/data-display/badge";

export function BadgeSizes() {
  return (
    <div className="flex items-center gap-2">
      <Badge color="primary" size="xs">XSmall</Badge>
      <Badge color="primary" size="sm">Small</Badge>
      <Badge color="primary" size="md">Medium</Badge>
      <Badge color="primary" size="lg">Large</Badge>
      <Badge color="primary" size="xl">XLarge</Badge>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/badge/badge-in-text.tsx",
  `import Badge from "@registry/components/react/data-display/badge";

export function BadgeInText() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">
        Inbox <Badge color="primary" size="sm">4</Badge>
      </h2>
      <p className="text-base-content/70">
        New features <Badge color="success" size="xs">Live</Badge> are now available.
      </p>
    </div>
  );
}
`,
);



console.log("\nDone!");
