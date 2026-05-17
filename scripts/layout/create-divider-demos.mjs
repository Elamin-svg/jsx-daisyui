// scripts/layout/create-divider-demos.mjs
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
  "registry/demos/react/layout/divider/divider-default.tsx",
  `import Divider from "@registry/components/react/layout/divider";

export function DividerDefault() {
  return (
    <div className="flex flex-col w-full max-w-sm">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider>OR</Divider>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/layout/divider/divider-horizontal.tsx",
  `import Divider from "@registry/components/react/layout/divider";

export function DividerHorizontal() {
  return (
    <div className="flex w-full max-w-sm">
      <div className="grid h-20 grow card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider direction="horizontal">OR</Divider>
      <div className="grid h-20 grow card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/layout/divider/divider-colors.tsx",
  `import Divider from "@registry/components/react/layout/divider";

export function DividerColors() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-4">
      <Divider>Default</Divider>
      <Divider color="neutral">Neutral</Divider>
      <Divider color="primary">Primary</Divider>
      <Divider color="secondary">Secondary</Divider>
      <Divider color="accent">Accent</Divider>
      <Divider color="success">Success</Divider>
      <Divider color="warning">Warning</Divider>
      <Divider color="info">Info</Divider>
      <Divider color="error">Error</Divider>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/layout/divider/divider-placements.tsx",
  `import Divider from "@registry/components/react/layout/divider";

export function DividerPlacements() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-4">
      <Divider placement="start">Start</Divider>
      <Divider placement="center">Center</Divider>
      <Divider placement="end">End</Divider>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/layout/divider/divider-responsive.tsx",
  `import Divider from "@registry/components/react/layout/divider";

export function DividerResponsive() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-2xl gap-4 lg:gap-0">
      <div className="grid grow h-32 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider direction="vertical" className="lg:!divider-horizontal">
        OR
      </Divider>
      <div className="grid grow h-32 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}
`,
);

console.log("\nDone!");
